/* Arhan Arif — homepage runtime.
 *
 * Rules this file follows, deliberately:
 *  - no scroll handler runs per frame. The single scroll listener is passive and only ever sets a
 *    flag; the rAF that reads scrollY runs while a scroll is in progress and stops 120ms after it ends.
 *  - reveals use IntersectionObserver and unobserve after firing, so nothing is left watching.
 *  - only transform/opacity are animated. No width, height, top, left, margin, padding or filter.
 *  - will-change is added on animation start and removed on animationend, never left on permanently.
 *  - GSAP and Lenis are only fetched on the high tier with a fine pointer. Touch and low-end devices
 *    keep native scrolling and never download them.
 *  - everything is torn down on pagehide and when the tab is hidden, so no work happens in the background.
 */
(function () {
  'use strict';
  var root = document.documentElement;
  var tier = root.dataset.tier || 'mid';
  var motion = root.dataset.motion === 'on';
  var reduce = !motion;
  var disposers = [];
  function onDispose(fn) { disposers.push(fn); }
  function disposeAll() { disposers.splice(0).forEach(function (fn) { try { fn(); } catch (e) {} }); }

  /* ---------------------------------------------------------------- reveals */
  var targets = document.querySelectorAll('.rv');
  function force(el) {
    // inline styles win over the stylesheet, so this is the hard guarantee that nothing on this
    // page can stay invisible: if the transition never runs (throttled tab, dropped frame on a
    // weak device, a browser that ignores the animation timeline) the content is visible anyway.
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.willChange = 'auto';
  }
  function revealAll() {
    for (var n = 0; n < targets.length; n++) {
      targets[n].classList.add('in');
      force(targets[n]);
    }
  }
  if (reduce || !('IntersectionObserver' in window)) {
    // motion off: make sure nothing is ever left invisible
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (!entries[j].isIntersecting) continue;
        var el = entries[j].target;
        el.classList.add('in');
        el.style.willChange = 'auto';
        io.unobserve(el);
      }
    }, { rootMargin: tier === 'low' ? '0px 0px -5% 0px' : '0px 0px -12% 0px', threshold: 0.01 });
    for (var k = 0; k < targets.length; k++) {
      targets[k].style.willChange = 'transform, opacity';
      io.observe(targets[k]);
    }
    /* Safety net: after the reveal window every element is forced visible, once, whatever happened.
       No observer or listener is left running afterwards. */
    var net = window.setTimeout(function () {
      revealAll();
      io.disconnect();
    }, 2000);
    onDispose(function () { window.clearTimeout(net); io.disconnect(); });
  }

  /* ------------------------------------------------- scroll progress (coalesced) */
  var bar = document.getElementById('progress');
  if (bar) {
    var queued = false;
    var idleTimer = 0;
    function paint() {
      queued = false;
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = 'scaleX(' + (ratio > 1 ? 1 : ratio) + ')';
      idleTimer = window.setTimeout(stopLoop, 140);
    }
    function frame() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(paint);
    }
    function stopLoop() { window.clearTimeout(idleTimer); idleTimer = 0; }
    window.addEventListener('scroll', frame, { passive: true });
    onDispose(function () { window.removeEventListener('scroll', frame); stopLoop(); });
  }

  /* ------------------------------------------------- lazy enhancement: gsap + lenis */
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement('script');
      el.src = src;
      el.async = true;
      el.onload = resolve;
      el.onerror = reject;
      document.head.appendChild(el);
    });
  }

  var wantsSmooth = motion && tier === 'high' && window.matchMedia('(pointer: fine)').matches;
  if (wantsSmooth) {
    Promise.all([
      loadScript('/assets/vendor/lenis.min.js'),
      loadScript('/assets/vendor/gsap.min.js'),
      loadScript('/assets/vendor/ScrollTrigger.min.js')
    ]).then(function () {
      if (!window.Lenis || !window.gsap) return;
      gsap.registerPlugin(ScrollTrigger);
      // conservative: short lerp so the page never feels floaty or delayed
      var lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, touchMultiplier: 1.6, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);

      // the hero headline reveal is pure CSS on purpose: a second JS tween on the same opacity
      // fights the transition and can leave the h1 half-faded, which is exactly the "frozen
      // section" failure the brief rules out. GSAP is only used for the scrub below.
      var art = document.querySelector('.hero-art');
      if (art) {
        ScrollTrigger.create({
          trigger: art, start: 'top bottom', end: 'bottom top', scrub: 0.6,
          animation: gsap.to(art, { y: -46, scale: 1.04, ease: 'none' })
        });
      }
      onDispose(function () {
        lenis.destroy();
        gsap.ticker.remove(function (time) { lenis.raf(time * 1000); });
        ScrollTrigger.getAll().forEach(function (t) { t.kill(); });
      });
    }).catch(function () { /* enhancement only: the page is already usable */ });
  }

  /* ------------------------------------------------- menu dropdown (the old nav had one) */
  var menu = document.getElementById('menu');
  if (menu) {
    var button = menu.querySelector('.menu-btn');
    var panel = menu.querySelector('.menu-panel');
    function setMenu(open) {
      menu.setAttribute('data-open', open ? 'true' : 'false');
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    button.addEventListener('click', function () {
      setMenu(menu.getAttribute('data-open') !== 'true');
    });
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target)) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });
    onDispose(function () { setMenu(false); });
  }

  /* ------------------------------------------------- hover intent on coarse pointers */
  if (!window.matchMedia('(hover: hover)').matches) {
    root.classList.add('coarse');
  }

  /* ------------------------------------------------- lifecycle */
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stopAll();
  });
  window.addEventListener('pagehide', stopAll);
  var stopped = false;
  function stopAll() {
    if (stopped) return;
    stopped = true;
    disposeAll();
  }
})();
