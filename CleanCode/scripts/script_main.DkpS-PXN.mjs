import { t as e } from "./rolldown-runtime.DsXBSD_B.mjs";
import {
  A as t,
  B as n,
  C as r,
  E as i,
  F as a,
  I as o,
  M as s,
  N as c,
  P as l,
  R as u,
  T as d,
  _ as f,
  b as p,
  c as m,
  d as h,
  g,
  h as _,
  i as v,
  j as y,
  k as b,
  l as x,
  m as S,
  n as C,
  o as w,
  p as T,
  r as E,
  s as D,
  t as ee,
  u as O,
  v as k,
  z as te,
} from "./react.CUuwdGgG.mjs";
import {
  C as A,
  a as j,
  n as ne,
  r as re,
  t as M,
} from "./motion.yFoJz7cr.mjs";
import {
  $ as ie,
  At as ae,
  B as N,
  C as oe,
  Ct as P,
  E as F,
  G as se,
  H as ce,
  J as le,
  K as ue,
  M as I,
  N as de,
  O as fe,
  Ot as pe,
  P as me,
  St as he,
  T as L,
  Tt as ge,
  V as R,
  Y as z,
  Z as _e,
  a as ve,
  at as ye,
  c as be,
  ct as xe,
  d as Se,
  et as Ce,
  f as we,
  ft as Te,
  g as B,
  gt as V,
  h as Ee,
  i as H,
  it as De,
  k as U,
  l as Oe,
  lt as ke,
  m as Ae,
  nt as je,
  o as W,
  ot as Me,
  p as Ne,
  pt as Pe,
  q as G,
  s as Fe,
  u as Ie,
  ut as Le,
  v as Re,
  vt as ze,
  w as K,
  x as Be,
  xt as Ve,
  y as He,
} from "./framer.uWP7Qtvw.mjs";
import { n as Ue, t as We } from "./Grain.BlZKHVEY.mjs";
import { i as Ge, n as Ke, r as qe, t as Je } from "./jDHitzL9y.DDvG-xMs.mjs";
import { i as Ye, n as Xe, r as Ze, t as Qe } from "./kyo9an03l.BS4V9bly.mjs";
import { i as $e, n as et, r as tt, t as nt } from "./sPvC_pCwb.Ggz8zae4.mjs";
import { i as rt, n as it, r as at, t as ot } from "./X3lWUYHjB.D_jOkX_d.mjs";
import {
  a as st,
  c as ct,
  i as lt,
  o as ut,
  r as dt,
  s as ft,
} from "./shared-lib.Bm4MKTZG.mjs";
function pt(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function mt(e, t, n) {
  return (1 - n) * e + n * t;
}
function ht(e, t, n, r) {
  return mt(e, t, 1 - Math.exp(-n * r));
}
function gt(e, t) {
  return ((e % t) + t) % t;
}
function _t(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
function vt(e, t) {
  return e === 1 ? Ct : e === 2 ? t : 1;
}
var yt,
  bt,
  xt,
  St,
  Ct,
  q,
  wt,
  Tt,
  Et,
  Dt = e(() => {
    (u(),
      (yt = `1.3.23`),
      (bt = class {
        isRunning = !1;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        lerp;
        duration;
        easing;
        onUpdate;
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let n = pt(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = ht(this.value, this.to, this.lerp * 60, e)),
                Math.round(this.value) === Math.round(this.to) &&
                  ((this.value = this.to), (t = !0)))
              : ((this.value = this.to), (t = !0));
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o },
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (xt = class {
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        constructor(e, t, { autoResize: r = !0, debounce: i = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            r &&
              ((this.debouncedResize = _t(this.resize, i)),
              this.wrapper instanceof Window
                ? n.addEventListener(`resize`, this.debouncedResize)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize,
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === n &&
              this.debouncedResize &&
              n.removeEventListener(`resize`, this.debouncedResize));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = n.innerWidth), (this.height = n.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }),
      (St = class {
        events = {};
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t);
        }
        on(e, t) {
          return (
            this.events[e] ? this.events[e].push(t) : (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (Ct = 100 / 6),
      (q = { passive: !1 }),
      (wt = class {
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new St();
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          ((this.element = e),
            (this.options = t),
            n.addEventListener(`resize`, this.onWindowResize),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, q),
            this.element.addEventListener(`touchstart`, this.onTouchStart, q),
            this.element.addEventListener(`touchmove`, this.onTouchMove, q),
            this.element.addEventListener(`touchend`, this.onTouchEnd, q));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            n.removeEventListener(`resize`, this.onWindowResize),
            this.element.removeEventListener(`wheel`, this.onWheel, q),
            this.element.removeEventListener(
              `touchstart`,
              this.onTouchStart,
              q,
            ),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, q),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, q));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            r = -(t - this.touchStart.x) * this.options.touchMultiplier,
            i = -(n - this.touchStart.y) * this.options.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e,
            i = vt(r, this.window.width),
            a = vt(r, this.window.height);
          ((t *= i),
            (n *= a),
            (t *= this.options.wheelMultiplier),
            (n *= this.options.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          this.window = { width: n.innerWidth, height: n.innerHeight };
        };
      }),
      (Tt = (e) => Math.min(1, 1.001 - 2 ** (-10 * e))),
      (Et = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        _rafId = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new bt();
        emitter = new St();
        dimensions;
        virtualScroll;
        constructor({
          wrapper: e = n,
          content: t = document.documentElement,
          eventsTarget: r = e,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaExponent: s = 1.7,
          duration: c,
          easing: l,
          lerp: u = 0.1,
          infinite: d = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = f === `horizontal` ? `both` : `vertical`,
          touchMultiplier: m = 1,
          wheelMultiplier: h = 1,
          autoResize: g = !0,
          prevent: _,
          virtualScroll: v,
          overscroll: y = !0,
          autoRaf: b = !1,
          anchors: x = !1,
          autoToggle: S = !1,
          allowNestedScroll: C = !1,
          __experimental__naiveDimensions: w = !1,
          naiveDimensions: T = w,
          stopInertiaOnNavigate: E = !1,
        } = {}) {
          ((n.lenisVersion = yt),
            (n.lenis ||= {}),
            (n.lenis.version = yt),
            f === `horizontal` && (n.lenis.horizontal = !0),
            a === !0 && (n.lenis.touch = !0),
            (!e || e === document.documentElement) && (e = n),
            typeof c == `number` && typeof l != `function`
              ? (l = Tt)
              : typeof l == `function` && typeof c != `number` && (c = 1),
            (this.options = {
              wrapper: e,
              content: t,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaExponent: s,
              duration: c,
              easing: l,
              lerp: u,
              infinite: d,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: m,
              wheelMultiplier: h,
              autoResize: g,
              prevent: _,
              virtualScroll: v,
              overscroll: y,
              autoRaf: b,
              anchors: x,
              autoToggle: S,
              allowNestedScroll: C,
              naiveDimensions: T,
              stopInertiaOnNavigate: E,
            }),
            (this.dimensions = new xt(e, t, { autoResize: g })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              `scroll`,
              this.onNativeScroll,
            ),
            this.options.wrapper.addEventListener(
              `scrollend`,
              this.onScrollEnd,
              { capture: !0 },
            ),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.addEventListener(`click`, this.onClick),
            this.options.wrapper.addEventListener(
              `pointerdown`,
              this.onPointerDown,
            ),
            (this.virtualScroll = new wt(r, {
              touchMultiplier: m,
              wheelMultiplier: h,
            })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll),
            this.options.autoToggle &&
              (this.checkOverflow(),
              this.rootElement.addEventListener(
                `transitionend`,
                this.onTransitionEnd,
              )),
            this.options.autoRaf &&
              (this._rafId = requestAnimationFrame(this.raf)));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              `scroll`,
              this.onNativeScroll,
            ),
            this.options.wrapper.removeEventListener(
              `scrollend`,
              this.onScrollEnd,
              { capture: !0 },
            ),
            this.options.wrapper.removeEventListener(
              `pointerdown`,
              this.onPointerDown,
            ),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.removeEventListener(`click`, this.onClick),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this._rafId && cancelAnimationFrame(this._rafId));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        onScrollEnd = (e) => {
          e instanceof CustomEvent ||
            ((this.isScrolling === `smooth` || this.isScrolling === !1) &&
              e.stopPropagation());
        };
        dispatchScrollendEvent = () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent(`scrollend`, {
              bubbles: this.options.wrapper === n,
              detail: { lenisScrollEnd: !0 },
            }),
          );
        };
        get overflow() {
          let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
          return getComputedStyle(this.rootElement)[e];
        }
        checkOverflow() {
          [`hidden`, `clip`].includes(this.overflow)
            ? this.internalStop()
            : this.internalStart();
        }
        onTransitionEnd = (e) => {
          e.propertyName?.includes(`overflow`) &&
            e.target === this.rootElement &&
            this.checkOverflow();
        };
        setScroll(e) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
            : this.options.wrapper.scrollTo({ top: e, behavior: `instant` });
        }
        onClick = (e) => {
          let t = e
              .composedPath()
              .filter((e) => e instanceof HTMLAnchorElement && e.href)
              .map((e) => new URL(e.href)),
            r = new URL(n.location.href);
          if (this.options.anchors) {
            let e = t.find(
              (e) => r.host === e.host && r.pathname === e.pathname && e.hash,
            );
            if (e) {
              let t =
                  typeof this.options.anchors == `object` &&
                  this.options.anchors
                    ? this.options.anchors
                    : void 0,
                n = `#${e.hash.split(`#`)[1]}`;
              this.scrollTo(n, t);
              return;
            }
          }
          if (
            this.options.stopInertiaOnNavigate &&
            t.some((e) => r.host === e.host && r.pathname !== e.pathname)
          ) {
            this.reset();
            return;
          }
        };
        onPointerDown = (e) => {
          e.button === 1 && this.reset();
        };
        onVirtualScroll = (e) => {
          if (
            typeof this.options.virtualScroll == `function` &&
            this.options.virtualScroll(e) === !1
          )
            return;
          let { deltaX: t, deltaY: r, event: i } = e;
          if (
            (this.emitter.emit(`virtual-scroll`, {
              deltaX: t,
              deltaY: r,
              event: i,
            }),
            i.ctrlKey || i.lenisStopPropagation)
          )
            return;
          let a = i.type.includes(`touch`),
            o = i.type.includes(`wheel`);
          this.isTouching = i.type === `touchstart` || i.type === `touchmove`;
          let s = t === 0 && r === 0;
          if (
            this.options.syncTouch &&
            a &&
            i.type === `touchstart` &&
            s &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          let c =
            (this.options.gestureOrientation === `vertical` && r === 0) ||
            (this.options.gestureOrientation === `horizontal` && t === 0);
          if (s || c) return;
          let l = i.composedPath();
          l = l.slice(0, l.indexOf(this.rootElement));
          let u = this.options.prevent,
            d = Math.abs(t) >= Math.abs(r) ? `horizontal` : `vertical`;
          if (
            l.find(
              (e) =>
                e instanceof HTMLElement &&
                ((typeof u == `function` && u?.(e)) ||
                  e.hasAttribute?.(`data-lenis-prevent`) ||
                  (d === `vertical` &&
                    e.hasAttribute?.(`data-lenis-prevent-vertical`)) ||
                  (d === `horizontal` &&
                    e.hasAttribute?.(`data-lenis-prevent-horizontal`)) ||
                  (a && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
                  (o && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
                  (this.options.allowNestedScroll &&
                    this.hasNestedScroll(e, { deltaX: t, deltaY: r }))),
            )
          )
            return;
          if (this.isStopped || this.isLocked) {
            i.cancelable && i.preventDefault();
            return;
          }
          if (!(
            (this.options.syncTouch && a) ||
            (this.options.smoothWheel && o)
          )) {
            ((this.isScrolling = `native`),
              this.animate.stop(),
              (i.lenisStopPropagation = !0));
            return;
          }
          let f = r;
          (this.options.gestureOrientation === `both`
            ? (f = Math.abs(r) > Math.abs(t) ? r : t)
            : this.options.gestureOrientation === `horizontal` && (f = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== n &&
                this.limit > 0 &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && r > 0) ||
                  (this.animatedScroll === this.limit && r < 0)))) &&
              (i.lenisStopPropagation = !0),
            i.cancelable && i.preventDefault());
          let p = a && this.options.syncTouch,
            m = a && i.type === `touchend`;
          (m &&
            (f =
              Math.sign(f) *
              Math.abs(this.velocity) ** this.options.touchInertiaExponent),
            this.scrollTo(this.targetScroll + f, {
              programmatic: !1,
              ...(p
                ? { lerp: m ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }));
        };
        resize() {
          (this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit());
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        onNativeScroll = () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === `native`) {
            let e = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.isStopped || (this.isScrolling = `native`),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        };
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          if (this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.removeProperty(`overflow`);
              return;
            }
            this.internalStart();
          }
        }
        internalStart() {
          this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
        }
        stop() {
          if (!this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.setProperty(`overflow`, `clip`);
              return;
            }
            this.internalStop();
          }
        }
        internalStop() {
          this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
        }
        raf = (e) => {
          let t = e - (this.time || e);
          ((this.time = e),
            this.animate.advance(t * 0.001),
            this.options.autoRaf &&
              (this._rafId = requestAnimationFrame(this.raf)));
        };
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: r = !1,
            lock: i = !1,
            programmatic: a = !0,
            lerp: o = a ? this.options.lerp : void 0,
            duration: s = a ? this.options.duration : void 0,
            easing: c = a ? this.options.easing : void 0,
            onStart: l,
            onComplete: u,
            force: d = !1,
            userData: f,
          } = {},
        ) {
          if ((this.isStopped || this.isLocked) && !d) return;
          let p = e,
            m = t;
          if (typeof p == `string` && [`top`, `left`, `start`, `#`].includes(p))
            p = 0;
          else if (
            typeof p == `string` &&
            [`bottom`, `right`, `end`].includes(p)
          )
            p = this.limit;
          else {
            let e = null;
            if (
              (typeof p == `string`
                ? ((e = document.querySelector(p)),
                  e ||
                    (p === `#top`
                      ? (p = 0)
                      : console.warn(`Lenis: Target not found`, p)))
                : p instanceof HTMLElement && p?.nodeType && (e = p),
              e)
            ) {
              if (this.options.wrapper !== n) {
                let e = this.rootElement.getBoundingClientRect();
                m -= this.isHorizontal ? e.left : e.top;
              }
              let t = e.getBoundingClientRect(),
                r = getComputedStyle(e),
                i = this.isHorizontal
                  ? Number.parseFloat(r.scrollMarginLeft)
                  : Number.parseFloat(r.scrollMarginTop),
                a = getComputedStyle(this.rootElement),
                o = this.isHorizontal
                  ? Number.parseFloat(a.scrollPaddingLeft)
                  : Number.parseFloat(a.scrollPaddingTop);
              p =
                (this.isHorizontal ? t.left : t.top) +
                this.animatedScroll -
                (Number.isNaN(i) ? 0 : i) -
                (Number.isNaN(o) ? 0 : o);
            }
          }
          if (typeof p == `number`) {
            if (((p += m), this.options.infinite)) {
              if (a) {
                this.targetScroll = this.animatedScroll = this.scroll;
                let e = p - this.animatedScroll;
                e > this.limit / 2
                  ? (p -= this.limit)
                  : e < -this.limit / 2 && (p += this.limit);
              }
            } else p = pt(0, p, this.limit);
            if (p === this.targetScroll) {
              (l?.(this), u?.(this));
              return;
            }
            if (((this.userData = f ?? {}), r)) {
              ((this.animatedScroll = this.targetScroll = p),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                u?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }));
              return;
            }
            (a || (this.targetScroll = p),
              typeof s == `number` && typeof c != `function`
                ? (c = Tt)
                : typeof c == `function` && typeof s != `number` && (s = 1),
              this.animate.fromTo(this.animatedScroll, p, {
                duration: s,
                easing: c,
                lerp: o,
                onStart: () => {
                  (i && (this.isLocked = !0),
                    (this.isScrolling = `smooth`),
                    l?.(this));
                },
                onUpdate: (e, t) => {
                  ((this.isScrolling = `smooth`),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = e - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = e),
                    this.setScroll(this.scroll),
                    a && (this.targetScroll = e),
                    t || this.emit(),
                    t &&
                      (this.reset(),
                      this.emit(),
                      u?.(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent()));
                },
              }));
          }
        }
        preventNextNativeScrollEvent() {
          ((this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            }));
        }
        hasNestedScroll(e, { deltaX: t, deltaY: r }) {
          let i = Date.now();
          e._lenis ||= {};
          let a = e._lenis,
            o,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            m,
            h;
          if (i - (a.time ?? 0) > 2e3) {
            a.time = Date.now();
            let t = n.getComputedStyle(e);
            if (
              ((a.computedStyle = t),
              (o = [`auto`, `overlay`, `scroll`].includes(t.overflowX)),
              (s = [`auto`, `overlay`, `scroll`].includes(t.overflowY)),
              (u = [`auto`].includes(t.overscrollBehaviorX)),
              (d = [`auto`].includes(t.overscrollBehaviorY)),
              (a.hasOverflowX = o),
              (a.hasOverflowY = s),
              !(o || s))
            )
              return !1;
            ((f = e.scrollWidth),
              (p = e.scrollHeight),
              (m = e.clientWidth),
              (h = e.clientHeight),
              (c = f > m),
              (l = p > h),
              (a.isScrollableX = c),
              (a.isScrollableY = l),
              (a.scrollWidth = f),
              (a.scrollHeight = p),
              (a.clientWidth = m),
              (a.clientHeight = h),
              (a.hasOverscrollBehaviorX = u),
              (a.hasOverscrollBehaviorY = d));
          } else
            ((c = a.isScrollableX),
              (l = a.isScrollableY),
              (o = a.hasOverflowX),
              (s = a.hasOverflowY),
              (f = a.scrollWidth),
              (p = a.scrollHeight),
              (m = a.clientWidth),
              (h = a.clientHeight),
              (u = a.hasOverscrollBehaviorX),
              (d = a.hasOverscrollBehaviorY));
          if (!((o && c) || (s && l))) return !1;
          let g = Math.abs(t) >= Math.abs(r) ? `horizontal` : `vertical`,
            _,
            v,
            y,
            b,
            x,
            S;
          if (g === `horizontal`)
            ((_ = Math.round(e.scrollLeft)),
              (v = f - m),
              (y = t),
              (b = o),
              (x = c),
              (S = u));
          else if (g === `vertical`)
            ((_ = Math.round(e.scrollTop)),
              (v = p - h),
              (y = r),
              (b = s),
              (x = l),
              (S = d));
          else return !1;
          return !S && (_ >= v || _ <= 0)
            ? !0
            : (y > 0 ? _ < v : _ > 0) && b && x;
        }
        get rootElement() {
          return this.options.wrapper === n
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          let e = this.options.wrapper;
          return this.isHorizontal
            ? (e.scrollX ?? e.scrollLeft)
            : (e.scrollY ?? e.scrollTop);
        }
        get scroll() {
          return this.options.infinite
            ? gt(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(e) {
          this._isScrolling !== e &&
            ((this._isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(e) {
          this._isStopped !== e &&
            ((this._isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(e) {
          this._isLocked !== e &&
            ((this._isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.options.autoToggle && (e += ` lenis-autoToggle`),
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            this.className.split(` `).forEach((e) => {
              this.rootElement.classList.add(e);
            }));
        }
        cleanUpClassName() {
          for (let e of Array.from(this.rootElement.classList))
            (e === `lenis` || e.startsWith(`lenis-`)) &&
              this.rootElement.classList.remove(e);
        }
      }));
  });
function Ot(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
function kt(e) {
  (getComputedStyle(e).position === `sticky` &&
    (e.style.setProperty(`position`, `static`), (e.dataset.sticky = `true`)),
    e.offsetParent && kt(e.offsetParent));
}
function At(e) {
  (e?.dataset?.sticky === `true` &&
    (e.style.removeProperty(`position`), delete e.dataset.sticky),
    e.offsetParent && At(e.offsetParent));
}
function jt(e, t = 0) {
  let n = t + e.offsetTop;
  return e.offsetParent ? jt(e.offsetParent, n) : n;
}
function Mt(e, t = 0) {
  let n = t + e.offsetLeft;
  return e.offsetParent ? Mt(e.offsetParent, n) : n;
}
function Nt(e, t = 0) {
  let r = t + e.scrollTop;
  return e.offsetParent ? Nt(e.offsetParent, r) : r + n.scrollY;
}
function Pt(e, t = 0) {
  let r = t + e.scrollLeft;
  return e.offsetParent ? Pt(e.offsetParent, r) : r + n.scrollX;
}
function Ft() {
  return Lt++;
}
var It,
  Lt,
  Rt,
  zt = e(() => {
    (u(),
      (It = class {
        element;
        options;
        align;
        rect = {};
        wrapperResizeObserver;
        resizeObserver;
        debouncedWrapperResize;
        constructor(
          e,
          {
            align: t = [`start`],
            ignoreSticky: n = !0,
            ignoreTransform: r = !1,
          } = {},
        ) {
          ((this.element = e),
            (this.options = { align: t, ignoreSticky: n, ignoreTransform: r }),
            (this.align = [t].flat()),
            (this.debouncedWrapperResize = Ot(this.onWrapperResize, 500)),
            (this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedWrapperResize,
            )),
            this.wrapperResizeObserver.observe(document.body),
            this.onWrapperResize(),
            (this.resizeObserver = new ResizeObserver(this.onResize)),
            this.resizeObserver.observe(this.element),
            this.setRect({
              width: this.element.offsetWidth,
              height: this.element.offsetHeight,
            }));
        }
        destroy() {
          (this.wrapperResizeObserver.disconnect(),
            this.resizeObserver.disconnect());
        }
        setRect({ top: e, left: t, width: n, height: r, element: i } = {}) {
          ((e ??= this.rect.top),
            (t ??= this.rect.left),
            (n ??= this.rect.width),
            (r ??= this.rect.height),
            (i ??= this.rect.element),
            !(
              e === this.rect.top &&
              t === this.rect.left &&
              n === this.rect.width &&
              r === this.rect.height &&
              i === this.rect.element
            ) &&
              ((this.rect.top = e),
              (this.rect.y = e),
              (this.rect.width = n),
              (this.rect.height = r),
              (this.rect.left = t),
              (this.rect.x = t),
              (this.rect.bottom = e + r),
              (this.rect.right = t + n)));
        }
        onWrapperResize = () => {
          let e, t;
          if (
            (this.options.ignoreSticky && kt(this.element),
            this.options.ignoreTransform)
          )
            ((e = jt(this.element)), (t = Mt(this.element)));
          else {
            let n = this.element.getBoundingClientRect();
            ((e = n.top + Nt(this.element)), (t = n.left + Pt(this.element)));
          }
          (this.options.ignoreSticky && At(this.element),
            this.setRect({ top: e, left: t }));
        };
        onResize = ([e]) => {
          if (!e?.borderBoxSize[0]) return;
          let t = e.borderBoxSize[0].inlineSize,
            n = e.borderBoxSize[0].blockSize;
          this.setRect({ width: t, height: n });
        };
      }),
      (Lt = 0),
      (Rt = class {
        options;
        elements = new Map();
        snaps = new Map();
        viewport = { width: n.innerWidth, height: n.innerHeight };
        isStopped = !1;
        onSnapDebounced;
        currentSnapIndex;
        constructor(
          e,
          {
            type: t = `proximity`,
            lerp: r,
            easing: i,
            duration: a,
            distanceThreshold: o = `50%`,
            debounce: s = 500,
            onSnapStart: c,
            onSnapComplete: l,
          } = {},
        ) {
          ((this.lenis = e),
            (n.lenis ||= {}),
            (n.lenis.snap = !0),
            (this.options = {
              type: t,
              lerp: r,
              easing: i,
              duration: a,
              distanceThreshold: o,
              debounce: s,
              onSnapStart: c,
              onSnapComplete: l,
            }),
            this.onWindowResize(),
            n.addEventListener(`resize`, this.onWindowResize),
            (this.onSnapDebounced = Ot(this.onSnap, this.options.debounce)),
            this.lenis.on(`virtual-scroll`, this.onSnapDebounced));
        }
        destroy() {
          (this.lenis.off(`virtual-scroll`, this.onSnapDebounced),
            n.removeEventListener(`resize`, this.onWindowResize),
            this.elements.forEach((e) => {
              e.destroy();
            }));
        }
        start() {
          this.isStopped = !1;
        }
        stop() {
          this.isStopped = !0;
        }
        add(e) {
          let t = Ft();
          return (this.snaps.set(t, { value: e }), () => this.snaps.delete(t));
        }
        addElement(e, t = {}) {
          let n = Ft();
          return (
            this.elements.set(n, new It(e, t)),
            () => this.elements.delete(n)
          );
        }
        addElements(e, t = {}) {
          let n = [...e].map((e) => this.addElement(e, t));
          return () => {
            n.forEach((e) => {
              e();
            });
          };
        }
        onWindowResize = () => {
          ((this.viewport.width = n.innerWidth),
            (this.viewport.height = n.innerHeight));
        };
        computeSnaps = () => {
          let { isHorizontal: e } = this.lenis,
            t = [...this.snaps.values()];
          return (
            this.elements.forEach(({ rect: n, align: r }) => {
              let i;
              r.forEach((r) => {
                (r === `start`
                  ? (i = n.top)
                  : r === `center`
                    ? (i = e
                        ? n.left + n.width / 2 - this.viewport.width / 2
                        : n.top + n.height / 2 - this.viewport.height / 2)
                    : r === `end` &&
                      (i = e
                        ? n.left + n.width - this.viewport.width
                        : n.top + n.height - this.viewport.height),
                  typeof i == `number` && t.push({ value: Math.ceil(i) }));
              });
            }),
            (t = t.sort((e, t) => Math.abs(e.value) - Math.abs(t.value))),
            t
          );
        };
        previous() {
          this.goTo((this.currentSnapIndex ?? 0) - 1);
        }
        next() {
          this.goTo((this.currentSnapIndex ?? 0) + 1);
        }
        goTo(e) {
          let t = this.computeSnaps();
          if (t.length === 0) return;
          this.currentSnapIndex = Math.max(0, Math.min(e, t.length - 1));
          let n = t[this.currentSnapIndex];
          n !== void 0 &&
            this.lenis.scrollTo(n.value, {
              duration: this.options.duration,
              easing: this.options.easing,
              lerp: this.options.lerp,
              lock: this.options.type === `lock`,
              userData: { initiator: `snap` },
              onStart: () => {
                this.options.onSnapStart?.({
                  index: this.currentSnapIndex,
                  ...n,
                });
              },
              onComplete: () => {
                this.options.onSnapComplete?.({
                  index: this.currentSnapIndex,
                  ...n,
                });
              },
            });
        }
        get distanceThreshold() {
          let e = 1 / 0;
          if (this.options.type === `mandatory`) return 1 / 0;
          let { isHorizontal: t } = this.lenis,
            n = t ? `width` : `height`;
          return (
            (e =
              typeof this.options.distanceThreshold == `string` &&
              this.options.distanceThreshold.endsWith(`%`)
                ? (Number(this.options.distanceThreshold.replace(`%`, ``)) /
                    100) *
                  this.viewport[n]
                : typeof this.options.distanceThreshold == `number`
                  ? this.options.distanceThreshold
                  : this.viewport[n]),
            e
          );
        }
        onSnap = (e) => {
          if (
            this.isStopped ||
            e.event.type === `touchmove` ||
            (this.options.type === `lock` &&
              this.lenis.userData?.initiator === `snap`)
          )
            return;
          let { scroll: t, isHorizontal: n } = this.lenis,
            r = n ? e.deltaX : e.deltaY;
          t = Math.ceil(this.lenis.scroll + r);
          let i = this.computeSnaps();
          if (i.length === 0) return;
          let a,
            o = i.findLastIndex(({ value: e }) => e < t),
            s = i.findIndex(({ value: e }) => e > t);
          if (this.options.type === `lock`) r > 0 ? (a = s) : r < 0 && (a = o);
          else {
            let e = i[o],
              n = e ? Math.abs(t - e.value) : 1 / 0,
              r = i[s];
            a = n < (r ? Math.abs(t - r.value) : 1 / 0) ? o : s;
          }
          if (a === void 0 || a === -1) return;
          a = Math.max(0, Math.min(a, i.length - 1));
          let c = i[a];
          Math.abs(t - c.value) <= this.distanceThreshold && this.goTo(a);
        };
        resize() {
          this.elements.forEach((e) => {
            e.onWrapperResize();
          });
        }
      }));
  });
function Bt({
  smooth: e,
  infinite: r,
  orientation: a,
  intensity: o,
  children: s,
  snap: c,
}) {
  let u = b(),
    d = b(),
    f = b();
  return (
    l(() => {
      if (s && (!u.current || !d.current)) return;
      u.current &&
        d.current &&
        (a === `horizontal`
          ? u.current.style.setProperty(`overflowX`, `auto`)
          : u.current.style.setProperty(`overflowY`, `auto`));
      let t = new Et({
        smoothWheel: e,
        infinite: r,
        orientation: a,
        gestureOrientation: a === `horizontal` ? `both` : `vertical`,
        autoRaf: !0,
        autoToggle: !0,
        anchors: !0,
        allowNestedScroll: !0,
        wrapper: u.current,
        content: d.current,
        syncTouch: !!r || a === `horizontal`,
        stopInertiaOnNavigate: !0,
      });
      f.current = t;
      let i;
      return (
        c &&
          c.snaps.length > 0 &&
          ((i = new Rt(t, {
            type: c.type,
            distanceThreshold: c.threshold + `%`,
          })),
          c.snaps.forEach((e) => {
            if (!e.target?.current) return;
            let t = e.target.current.id;
            document.querySelectorAll(`#${t}`).forEach((t) => {
              i.addElement(t, { align: e.align });
            });
          })),
        (n.lenis = t),
        (n.lenisSnap = c),
        () => {
          (t && t.destroy(), i && i.destroy());
        }
      );
    }, [e, r, a, o, s, c]),
    O(m, {
      children: [
        x(`link`, {
          href: `https://unpkg.com/lenis@1.3.23/dist/lenis.css`,
          rel: `stylesheet`,
        }),
        s &&
          x(m, {
            children: x(`div`, {
              ref: u,
              style:
                a === `horizontal`
                  ? { overflowX: `auto`, width: `100%` }
                  : { overflowY: `auto`, height: `100%` },
              children: x(`div`, {
                ref: d,
                style: { width: `100%` },
                children: i.map(s, (e) =>
                  T(e)
                    ? t(e, { style: { ...e.props.style, width: `100%` } })
                    : e,
                ),
              }),
            }),
          }),
      ],
    })
  );
}
var Vt = e(() => {
  (u(),
    D(),
    G(),
    Dt(),
    zt(),
    d(),
    (Bt.displayName = `Lenis`),
    U(Bt, {
      smooth: { type: W.Boolean, title: `Smooth`, defaultValue: !0 },
      intensity: {
        type: W.Number,
        title: `Intensity`,
        defaultValue: 12,
        step: 1,
        min: 1,
        max: 100,
        hidden(e) {
          return e.smooth === !1;
        },
        description: `This will be ignored on mobile.`,
      },
      infinite: {
        type: W.Boolean,
        title: `Infinite`,
        defaultValue: !1,
        hidden(e) {
          return e.smooth === !1;
        },
      },
      orientation: {
        type: W.Enum,
        defaultValue: `Vertical`,
        displaySegmentedControl: !0,
        options: [`vertical`, `horizontal`],
        optionTitles: [`Vertical`, `Horizontal`],
        hidden(e) {
          return e.smooth === !1;
        },
      },
      children: { type: W.ComponentInstance, title: `Content` },
      snap: {
        type: W.Object,
        optional: !0,
        description: `Cooked and served by [darkroom.engineering](https://darkroom.engineering).`,
        controls: {
          type: {
            type: W.Enum,
            defaultValue: `proximity`,
            displaySegmentedControl: !0,
            segmentedControlDirection: `vertical`,
            options: [`proximity`, `mandatory`, `lock`],
            optionTitles: [`Proximity`, `Mandatory`, `Lock`],
          },
          threshold: {
            type: W.Number,
            defaultValue: 50,
            min: 0,
            max: 100,
            unit: `%`,
            hidden: (e) => e.snap.type === `mandatory`,
          },
          snaps: {
            type: W.Array,
            control: {
              type: W.Object,
              controls: {
                target: { title: `Target`, type: W.ScrollSectionRef },
                align: {
                  type: W.Enum,
                  defaultValue: `center`,
                  displaySegmentedControl: !0,
                  segmentedControlDirection: `horizontal`,
                  options: [`start`, `center`, `end`],
                  optionIcons: [`align-top`, `align-middle`, `align-bottom`],
                },
              },
            },
          },
        },
      },
    }));
});
function J(e) {
  let {
      text: t,
      link: r,
      font: i,
      color: a,
      hoverColor: s,
      speed: c,
      newTab: u,
      style: d,
    } = e,
    f = Pe(),
    [p, m] = o(!1),
    [h, g] = o(0),
    _ = b(null),
    v = t.split(``);
  l(() => {
    if (!f)
      return (
        p
          ? (_.current && clearInterval(_.current),
            k(() => g(0)),
            (_.current = n.setInterval(() => {
              k(() => {
                g((e) =>
                  e < v.length
                    ? e + 1
                    : (_.current && clearInterval(_.current), e),
                );
              });
            }, c * 1e3)))
          : (_.current && clearInterval(_.current),
            (_.current = n.setInterval(() => {
              k(() => {
                g((e) =>
                  e > 0 ? e - 1 : (_.current && clearInterval(_.current), e),
                );
              });
            }, c * 1e3))),
        () => {
          _.current && clearInterval(_.current);
        }
      );
  }, [p, c, v.length, f]);
  let y = f && p ? v.length : h;
  return x(`a`, {
    href: r,
    target: u ? `_blank` : void 0,
    rel: u ? `noopener noreferrer` : void 0,
    style: {
      ...d,
      textDecoration: `none`,
      cursor: `pointer`,
      display: `inline-block`,
      ...i,
      position: `relative`,
      overflow: `hidden`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      transition: `color ${c * 1.5}s cubic-bezier(0.4,0,0.2,1), filter 0.7s cubic-bezier(0.4,0,0.2,1)`,
      filter: p ? `blur(0.1px)` : `none`,
      willChange: `color, filter`,
      backfaceVisibility: `hidden`,
      perspective: 1e3,
    },
    onMouseEnter: () => !f && m(!0),
    onMouseLeave: () => !f && m(!1),
    "aria-label": t,
    children: x(`span`, {
      style: { display: `inline-block`, position: `relative` },
      children: v.map((e, t) =>
        x(
          `span`,
          {
            style: {
              color: t < y ? s : a,
              transition: `color ${c * 2.2}s cubic-bezier(0.4,0,0.2,1), filter 0.8s cubic-bezier(0.4,0,0.2,1)`,
              filter: p ? `blur(0.2px)` : `none`,
              ...i,
              whiteSpace: `pre`,
              position: `relative`,
              zIndex: 1,
              willChange: `color, filter`,
              backfaceVisibility: `hidden`,
            },
            children: e,
          },
          t,
        ),
      ),
    }),
  });
}
var Ht = e(() => {
    (u(),
      D(),
      d(),
      G(),
      U(J, {
        text: { type: W.String, title: `Text`, defaultValue: `Animated Link` },
        link: {
          type: W.Link,
          title: `Link`,
          defaultValue: `https://framer.com`,
        },
        font: {
          type: W.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: {
            fontSize: `22px`,
            variant: `Semibold`,
            letterSpacing: `-0.01em`,
            lineHeight: `1.2em`,
          },
        },
        color: { type: W.Color, title: `Color`, defaultValue: `#000000` },
        hoverColor: {
          type: W.Color,
          title: `Hover Color`,
          defaultValue: `#FFFFFF`,
        },
        speed: {
          type: W.Number,
          title: `Speed`,
          defaultValue: 0.04,
          min: 0.01,
          max: 2,
          unit: `s`,
          step: 0.01,
          displayStepper: !1,
        },
        newTab: {
          type: W.Boolean,
          title: `New Tab`,
          defaultValue: !1,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
      }));
  }),
  Ut,
  Wt,
  Gt,
  Kt = e(() => {
    (G(),
      de.loadFonts([]),
      (Ut = [{ explicitInter: !0, fonts: [] }]),
      (Wt = [
        `.framer-xHNv7 .framer-styles-preset-1808wqw:not(.rich-text-wrapper), .framer-xHNv7 .framer-styles-preset-1808wqw.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-06856072-b723-433b-af66-5e2af035f2ef, #ff2121); --framer-link-text-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); }`,
      ]),
      (Gt = `framer-xHNv7`));
  }),
  qt,
  Jt,
  Yt,
  Xt = e(() => {
    (G(),
      de.loadFonts([]),
      (qt = [{ explicitInter: !0, fonts: [] }]),
      (Jt = [
        `.framer-8CGNG .framer-styles-preset-1jbmnzg:not(.rich-text-wrapper), .framer-8CGNG .framer-styles-preset-1jbmnzg.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); --framer-link-text-color: var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, #7b7b7b); }`,
      ]),
      (Yt = `framer-8CGNG`));
  }),
  Zt,
  Qt,
  $t,
  en = e(() => {
    (G(),
      de.loadFonts([
        `Inter-Bold`,
        `Inter-Black`,
        `Inter-BlackItalic`,
        `Inter-BoldItalic`,
      ]),
      (Zt = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Qt = [
        `.framer-uQaVp .framer-styles-preset-1rt6up1:not(.rich-text-wrapper), .framer-uQaVp .framer-styles-preset-1rt6up1.rich-text-wrapper h3 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 70px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -4.2px; --framer-line-height: 0.85em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-uQaVp .framer-styles-preset-1rt6up1:not(.rich-text-wrapper), .framer-uQaVp .framer-styles-preset-1rt6up1.rich-text-wrapper h3 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -4.2px; --framer-line-height: 0.85em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-uQaVp .framer-styles-preset-1rt6up1:not(.rich-text-wrapper), .framer-uQaVp .framer-styles-preset-1rt6up1.rich-text-wrapper h3 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 45px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -4.2px; --framer-line-height: 0.85em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
      ]),
      ($t = `framer-uQaVp`));
  }),
  tn,
  nn,
  rn,
  an = e(() => {
    (G(),
      de.loadFonts([`GF;Fira Mono-500`, `GF;Fira Mono-700`]),
      (tn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Fira Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Fira Mono`,
              url: `https://fonts.gstatic.com/s/firamono/v16/N0bS2SlFPv1weGeLZDto1d33nP3VaZBRBQ.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Fira Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Fira Mono`,
              url: `https://fonts.gstatic.com/s/firamono/v16/N0bS2SlFPv1weGeLZDtondv3nP3VaZBRBQ.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (nn = [
        `.framer-kVSct .framer-styles-preset-1i3utms:not(.rich-text-wrapper), .framer-kVSct .framer-styles-preset-1i3utms.rich-text-wrapper p { --framer-font-family: "Fira Mono", monospace; --framer-font-family-bold: "Fira Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 1.25em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, #7b7b7b); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (rn = `framer-kVSct`));
  }),
  on,
  sn,
  cn,
  ln,
  un,
  dn = e(() => {
    (D(),
      G(),
      d(),
      (on = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16 0 L 5 11 L 0 6" fill="transparent" height="11px" id="XRMs5MmwO" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(4 6)" width="16px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (sn = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? x(A.div, { ...a, layoutId: r, ref: t })
          : x(`div`, { ...a, ref: t });
      })),
      (cn = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        UO5clYVeQ: n ?? i.UO5clYVeQ ?? `rgb(0, 0, 0)`,
      })),
      (ln = P(
        f(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            UO5clYVeQ: o,
            ...s
          } = cn(e);
          return x(sn, {
            ...s,
            className: I(`framer-CLNEK`, r),
            layoutId: i,
            ref: t,
            style: { "--43q7um": o, ...n },
          });
        }),
        [
          `.framer-CLNEK { -webkit-mask: ${on}; aspect-ratio: 1; background-color: var(--43q7um); mask: ${on}; width: 24px; }`,
        ],
        `framer-CLNEK`,
      )),
      (ln.displayName = `Check`),
      (un = ln),
      U(ln, {
        UO5clYVeQ: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Stroke`,
          type: W.Color,
        },
      }));
  });
function fn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On = e(() => {
    (D(),
      G(),
      M(),
      d(),
      ct(),
      ut(),
      (pn = N(ft)),
      (mn = { i1mv6tGpK: { hover: !0 } }),
      (hn = [`i1mv6tGpK`, `wZffA7m3q`, `nd3dC7Eet`, `ZaAq25FQs`, `nZsg0TNcx`]),
      (gn = `framer-Qll4e`),
      (_n = {
        i1mv6tGpK: `framer-v-gww5ik`,
        nd3dC7Eet: `framer-v-1t72tow`,
        nZsg0TNcx: `framer-v-q13xx1`,
        wZffA7m3q: `framer-v-1kv6ja7`,
        ZaAq25FQs: `framer-v-zb6dmq`,
      }),
      (vn = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (yn = (e, t) => `translate(-50%, -50%) ${t}`),
      (bn = (e, t) => `translateX(-50%) ${t}`),
      (xn = ({ value: e, children: t }) => {
        let n = y(j),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(j.Provider, { value: i, children: t });
      }),
      (Sn = {
        Default: `i1mv6tGpK`,
        Disabled: `nd3dC7Eet`,
        Error: `nZsg0TNcx`,
        Loading: `wZffA7m3q`,
        Success: `ZaAq25FQs`,
      }),
      (Cn = A.create(a)),
      (wn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Sn[r.variant] ?? r.variant ?? `i1mv6tGpK`,
      })),
      (Tn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (En = P(
        f(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = p(),
            { activeLocale: o, setLocale: s } = V();
          Me();
          let { style: c, className: l, layoutId: u, variant: d, ...f } = wn(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: y,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = he({
              cycleOrder: hn,
              defaultVariant: `i1mv6tGpK`,
              enabledGestures: mn,
              ref: r,
              variant: d,
              variantClassNames: _n,
            }),
            T = Tn(e, w),
            E = I(gn, dt);
          return x(re, {
            id: u ?? i,
            children: x(Cn, {
              animate: w,
              initial: !1,
              children: x(xn, {
                value: vn,
                children: O(A.button, {
                  ...f,
                  ..._,
                  className: I(E, `framer-gww5ik`, l, h),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: T,
                  layoutId: `i1mv6tGpK`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    opacity: 1,
                    ...c,
                  },
                  variants: {
                    "i1mv6tGpK-hover": {
                      backgroundColor: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                      opacity: 1,
                    },
                    nd3dC7Eet: { opacity: 0.5 },
                    nZsg0TNcx: { opacity: 1 },
                    ZaAq25FQs: { opacity: 1 },
                  },
                  ...fn(
                    {
                      "i1mv6tGpK-hover": { "data-framer-name": void 0 },
                      nd3dC7Eet: { "data-framer-name": `Disabled` },
                      nZsg0TNcx: { "data-framer-name": `Error` },
                      wZffA7m3q: { "data-framer-name": `Loading` },
                      ZaAq25FQs: { "data-framer-name": `Success` },
                    },
                    m,
                    v,
                  ),
                  children: [
                    x(L, {
                      __fromCanvasComponent: !0,
                      children: x(a, {
                        children: x(A.p, {
                          className: `framer-styles-preset-1tukh9k`,
                          "data-styles-preset": `jDHitzL9y`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0)))`,
                          },
                          children: `Get in touch`,
                        }),
                      }),
                      className: `framer-hzrqz1`,
                      fonts: [`Inter`],
                      layoutDependency: T,
                      layoutId: `RmR3YQacU`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      variants: {
                        "i1mv6tGpK-hover": {
                          "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...fn(
                        {
                          "i1mv6tGpK-hover": {
                            children: x(a, {
                              children: x(A.p, {
                                className: `framer-styles-preset-1tukh9k`,
                                "data-styles-preset": `jDHitzL9y`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                },
                                children: `Get in touch`,
                              }),
                            }),
                          },
                        },
                        m,
                        v,
                      ),
                    }),
                    O(A.div, {
                      className: `framer-1hjre0x`,
                      "data-framer-name": `Icon-box`,
                      layoutDependency: T,
                      layoutId: `hPhJZiuI4`,
                      style: {
                        backgroundColor: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                      children: [
                        x(A.div, {
                          className: `framer-12v24y5`,
                          "data-framer-name": `Overlay`,
                          layoutDependency: T,
                          layoutId: `k36giH7s3`,
                          style: {
                            backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                          },
                        }),
                        x(ft, {
                          animated: !0,
                          className: `framer-6s2c5b`,
                          layoutDependency: T,
                          layoutId: `uu1GmTMqv`,
                          style: {
                            "--43q7um": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                          },
                          transformTemplate: yn,
                          ...fn(
                            { "i1mv6tGpK-hover": { transformTemplate: bn } },
                            m,
                            v,
                          ),
                        }),
                        x(ft, {
                          animated: !0,
                          className: `framer-19qrnmw`,
                          layoutDependency: T,
                          layoutId: `dYSKl1N_M`,
                          style: {
                            "--43q7um": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                            rotate: -45,
                          },
                          transformTemplate: bn,
                          variants: {
                            "i1mv6tGpK-hover": {
                              "--43q7um": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                            },
                          },
                          ...fn(
                            { "i1mv6tGpK-hover": { transformTemplate: yn } },
                            m,
                            v,
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Qll4e.framer-bbyb41, .framer-Qll4e .framer-bbyb41 { display: block; }`,
          `.framer-Qll4e.framer-gww5ik { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 5px 5px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Qll4e .framer-hzrqz1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-Qll4e .framer-1hjre0x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 36px; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: 36px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-Qll4e .framer-12v24y5 { bottom: -36px; flex: none; height: 36px; left: 0px; overflow: visible; position: absolute; right: 0px; z-index: 1; }`,
          `.framer-Qll4e .framer-6s2c5b { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; position: absolute; top: 50%; width: 16px; z-index: 1; }`,
          `.framer-Qll4e .framer-19qrnmw { aspect-ratio: 1 / 1; bottom: -20px; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; position: absolute; width: 16px; z-index: 1; }`,
          `.framer-Qll4e.framer-v-1kv6ja7.framer-gww5ik, .framer-Qll4e.framer-v-1t72tow.framer-gww5ik, .framer-Qll4e.framer-v-zb6dmq.framer-gww5ik, .framer-Qll4e.framer-v-q13xx1.framer-gww5ik { cursor: unset; }`,
          `.framer-Qll4e.framer-v-gww5ik.hover .framer-12v24y5 { bottom: 0px; height: unset; top: 0px; }`,
          `.framer-Qll4e.framer-v-gww5ik.hover .framer-6s2c5b { top: -20px; }`,
          `.framer-Qll4e.framer-v-gww5ik.hover .framer-19qrnmw { bottom: unset; top: 50%; }`,
          ...lt,
        ],
        `framer-Qll4e`,
      )),
      (Dn = En),
      (En.displayName = `Form-button`),
      (En.defaultProps = { height: 46, width: 188 }),
      U(En, {
        variant: {
          options: [
            `i1mv6tGpK`,
            `wZffA7m3q`,
            `nd3dC7Eet`,
            `ZaAq25FQs`,
            `nZsg0TNcx`,
          ],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      fe(
        En,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...pn,
          ...R(st),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function kn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn = e(() => {
    (D(),
      G(),
      M(),
      d(),
      dn(),
      Ye(),
      an(),
      On(),
      (An = N(Dn)),
      (jn = ge(A.div)),
      (Mn = N(un)),
      (Nn = [`oIzLgWjUQ`, `imKcpXnSp`, `zkpf46vwp`]),
      (Pn = `framer-eCHcz`),
      (Fn = {
        imKcpXnSp: `framer-v-1y3dgb2`,
        oIzLgWjUQ: `framer-v-whf85c`,
        zkpf46vwp: `framer-v-yg1ary`,
      }),
      (In = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ln = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Rn = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (zn = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Bn = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Vn = (e, t) => `translate(-50%, -50%) ${t}`),
      (Hn = ({ value: e, children: t }) => {
        let n = y(j),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(j.Provider, { value: i, children: t });
      }),
      (Un = {
        Default: `oIzLgWjUQ`,
        Loading: `imKcpXnSp`,
        Sucess: `zkpf46vwp`,
      }),
      (Wn = A.create(a)),
      (Gn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Un[r.variant] ?? r.variant ?? `oIzLgWjUQ`,
      })),
      (Kn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (qn = P(
        f(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = p(),
            { activeLocale: o, setLocale: s } = V();
          Me();
          let { style: c, className: l, layoutId: u, variant: d, ...f } = Gn(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = he({
              cycleOrder: Nn,
              defaultVariant: `oIzLgWjUQ`,
              ref: r,
              variant: d,
              variantClassNames: Fn,
            }),
            E = Kn(e, T),
            { activeVariantCallback: D, delay: ee } = ye(h),
            k = D(async (...e) => {
              w(`imKcpXnSp`);
            }),
            te = D(async (...e) => {
              w(`zkpf46vwp`);
            }),
            j = I(Pn, Qe, rn),
            ne = () => !![`imKcpXnSp`, `zkpf46vwp`].includes(h),
            M = () => h !== `zkpf46vwp`,
            ie = () => h !== `imKcpXnSp`;
          return x(re, {
            id: u ?? i,
            children: x(Wn, {
              animate: T,
              initial: !1,
              children: x(Hn, {
                value: In,
                children: x(Oe, {
                  ...f,
                  ...v,
                  action: `https://api.framer.com/forms/v1/forms/2c3ca25b-ee13-4b19-982b-531a674b83e2/submit`,
                  onSubmit: (e) => e.preventDefault(),
                  className: I(j, `framer-whf85c`, l, g),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: E,
                  layoutId: `oIzLgWjUQ`,
                  nodeId: `oIzLgWjUQ`,
                  onLoading: k,
                  ref: r,
                  style: { ...c },
                  ...kn(
                    {
                      imKcpXnSp: {
                        "data-framer-name": `Loading`,
                        onSuccess: te,
                      },
                      zkpf46vwp: { "data-framer-name": `Sucess` },
                    },
                    h,
                    y,
                  ),
                  children: (e) =>
                    O(m, {
                      children: [
                        O(A.div, {
                          className: `framer-5i32sq`,
                          "data-framer-name": `Input-wrapper`,
                          layoutDependency: E,
                          layoutId: `xoHhXVbo5`,
                          children: [
                            O(A.label, {
                              className: `framer-h0a3tj`,
                              layoutDependency: E,
                              layoutId: `sUFL3Jsme`,
                              style: { originX: 0 },
                              children: [
                                O(A.div, {
                                  className: `framer-w2xzl9`,
                                  "data-framer-name": `Label-box`,
                                  layoutDependency: E,
                                  layoutId: `AY8pP_StP`,
                                  children: [
                                    x(L, {
                                      __fromCanvasComponent: !0,
                                      children: x(a, {
                                        children: x(A.h6, {
                                          className: `framer-styles-preset-1litcpx`,
                                          "data-styles-preset": `kyo9an03l`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                          },
                                          children: `PHONE`,
                                        }),
                                      }),
                                      className: `framer-js7cjz`,
                                      fonts: [`Inter`],
                                      layoutDependency: E,
                                      layoutId: `R21gA4qsV`,
                                      style: {
                                        "--extracted-1w1cjl5": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    x(Ne, {
                                      background: {
                                        alt: `icon`,
                                        fit: `fill`,
                                        intrinsicHeight: 11,
                                        intrinsicWidth: 11,
                                        pixelHeight: 11,
                                        pixelWidth: 11,
                                        sizes: `15px`,
                                        src: `https://framerusercontent.com/images/mxhU2YGZsMEXi4S1sqic0XLNmI.svg?width=11&height=11`,
                                      },
                                      className: `framer-n7q9o`,
                                      "data-framer-name": `Icon`,
                                      layoutDependency: E,
                                      layoutId: `XXggnZsOl`,
                                    }),
                                  ],
                                }),
                                x(Ie, {
                                  className: `framer-1mwm3ct`,
                                  inputName: `Name`,
                                  layoutDependency: E,
                                  layoutId: `qkfxfKw0m`,
                                  placeholder: `+91 70607 82247`,
                                  readOnly: !0,
                                  value: `+91 70607 82247`,
                                  required: !0,
                                  style: {
                                    "--framer-input-border-bottom-width": `1px`,
                                    "--framer-input-border-color": `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                    "--framer-input-border-left-width": `0px`,
                                    "--framer-input-border-right-width": `0px`,
                                    "--framer-input-border-style": `dashed`,
                                    "--framer-input-border-top-width": `0px`,
                                    "--framer-input-font-color": `rgb(153, 153, 153)`,
                                    "--framer-input-icon-mask-image": `none`,
                                    "--framer-input-placeholder-color": `var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, rgb(149, 149, 149))`,
                                  },
                                  type: `text`,
                                }),
                              ],
                            }),
                            O(A.label, {
                              className: `framer-sv4pug`,
                              layoutDependency: E,
                              layoutId: `evjyf439y`,
                              style: { originX: 0 },
                              children: [
                                O(A.div, {
                                  className: `framer-1wapk6p`,
                                  "data-framer-name": `Label-box`,
                                  layoutDependency: E,
                                  layoutId: `DlBJam2pw`,
                                  children: [
                                    x(L, {
                                      __fromCanvasComponent: !0,
                                      children: x(a, {
                                        children: x(A.h6, {
                                          className: `framer-styles-preset-1litcpx`,
                                          "data-styles-preset": `kyo9an03l`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                          },
                                          children: `GITHUB`,
                                        }),
                                      }),
                                      className: `framer-1qjjryo`,
                                      fonts: [`Inter`],
                                      layoutDependency: E,
                                      layoutId: `qd_pT3byu`,
                                      style: {
                                        "--extracted-1w1cjl5": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    x(Ne, {
                                      background: {
                                        alt: `icon`,
                                        fit: `fill`,
                                        intrinsicHeight: 11,
                                        intrinsicWidth: 11,
                                        pixelHeight: 11,
                                        pixelWidth: 11,
                                        sizes: `15px`,
                                        src: `https://framerusercontent.com/images/mxhU2YGZsMEXi4S1sqic0XLNmI.svg?width=11&height=11`,
                                      },
                                      className: `framer-xgwbso`,
                                      "data-framer-name": `Icon`,
                                      layoutDependency: E,
                                      layoutId: `QnplMkjQZ`,
                                    }),
                                  ],
                                }),
                                x(Ie, {
                                  className: `framer-14f8oi`,
                                  inputName: `Email`,
                                  layoutDependency: E,
                                  layoutId: `d2QdjN8jA`,
                                  placeholder: `github.com/ArhanArif07`,
                                  readOnly: !0,
                                  value: `github.com/ArhanArif07`,
                                  required: !0,
                                  style: {
                                    "--framer-input-border-bottom-width": `1px`,
                                    "--framer-input-border-color": `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                    "--framer-input-border-left-width": `0px`,
                                    "--framer-input-border-right-width": `0px`,
                                    "--framer-input-border-style": `dashed`,
                                    "--framer-input-border-top-width": `0px`,
                                    "--framer-input-font-color": `rgb(153, 153, 153)`,
                                    "--framer-input-icon-mask-image": `none`,
                                    "--framer-input-placeholder-color": `var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, rgb(149, 149, 149))`,
                                  },
                                  type: `email`,
                                }),
                              ],
                            }),
                            O(A.label, {
                              className: `framer-12i8x8o`,
                              layoutDependency: E,
                              layoutId: `MLdnubcQg`,
                              style: { originX: 0 },
                              children: [
                                x(L, {
                                  __fromCanvasComponent: !0,
                                  children: x(a, {
                                    children: x(A.h6, {
                                      className: `framer-styles-preset-1litcpx`,
                                      "data-styles-preset": `kyo9an03l`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                      },
                                      children: `INSTAGRAM`,
                                    }),
                                  }),
                                  className: `framer-at5fcn`,
                                  fonts: [`Inter`],
                                  layoutDependency: E,
                                  layoutId: `oXsGPOVvz`,
                                  style: {
                                    "--extracted-1w1cjl5": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                x(Ie, {
                                  className: `framer-1n1g8c4`,
                                  inputName: `Company`,
                                  layoutDependency: E,
                                  layoutId: `nkWCEq6Jh`,
                                  placeholder: `instagram.com/theyluvarhann`,
                                  readOnly: !0,
                                  value: `instagram.com/theyluvarhann`,
                                  required: !1,
                                  style: {
                                    "--framer-input-border-bottom-width": `1px`,
                                    "--framer-input-border-color": `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                    "--framer-input-border-left-width": `0px`,
                                    "--framer-input-border-right-width": `0px`,
                                    "--framer-input-border-style": `dashed`,
                                    "--framer-input-border-top-width": `0px`,
                                    "--framer-input-font-color": `rgb(153, 153, 153)`,
                                    "--framer-input-icon-mask-image": `none`,
                                    "--framer-input-placeholder-color": `var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, rgb(149, 149, 149))`,
                                  },
                                  type: `text`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        x(H, {
                          height: 46,
                          children: x(F, {
                            className: `framer-igyyfq-container`,
                            layoutDependency: E,
                            layoutId: `zadPSrBp_-container`,
                            nodeId: `zadPSrBp_`,
                            rendersWithMotion: !0,
                            scopeId: `Cu73Sm73l`,
                            style: { originX: 0 },
                            children: x(Dn, {
                              height: `100%`,
                              id: `zadPSrBp_`,
                              layoutId: `zadPSrBp_`,
                              type: `submit`,
                              variant: Rn(
                                e,
                                {
                                  error: `nZsg0TNcx`,
                                  pending: `wZffA7m3q`,
                                  success: `ZaAq25FQs`,
                                },
                                Ln(`i1mv6tGpK`),
                              ),
                              width: `100%`,
                            }),
                          }),
                        }),
                        ne() &&
                          O(A.div, {
                            className: `framer-s2oszf`,
                            "data-framer-name": `Overlay`,
                            layoutDependency: E,
                            layoutId: `EEkAlbkFd`,
                            style: {
                              backgroundColor: `var(--token-7bc24d75-456d-4da8-90a1-2594392b9ddf, rgb(20, 20, 20))`,
                            },
                            children: [
                              M() &&
                                x(jn, {
                                  __framer__loop: Bn,
                                  __framer__loopEffectEnabled: !0,
                                  __framer__loopPauseOffscreen: !0,
                                  __framer__loopRepeatDelay: 0,
                                  __framer__loopRepeatType: `loop`,
                                  __framer__loopTransition: zn,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-rf49ca`,
                                  "data-framer-name": `Spinner`,
                                  layoutDependency: E,
                                  layoutId: `VQqRJ2eMH`,
                                  style: {
                                    background: `conic-gradient(from 0deg at 50% 50%, var(--token-7bc24d75-456d-4da8-90a1-2594392b9ddf, rgb(20, 20, 20)) 0deg, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)) 360deg)`,
                                    borderBottomLeftRadius: `100%`,
                                    borderBottomRightRadius: `100%`,
                                    borderTopLeftRadius: `100%`,
                                    borderTopRightRadius: `100%`,
                                  },
                                  children: x(A.div, {
                                    className: `framer-udqsve`,
                                    "data-framer-name": `Inner`,
                                    layoutDependency: E,
                                    layoutId: `NR0GMk7cV`,
                                    style: {
                                      backgroundColor: `var(--token-7bc24d75-456d-4da8-90a1-2594392b9ddf, rgb(20, 20, 20))`,
                                      borderBottomLeftRadius: `100%`,
                                      borderBottomRightRadius: `100%`,
                                      borderTopLeftRadius: `100%`,
                                      borderTopRightRadius: `100%`,
                                    },
                                    transformTemplate: Vn,
                                  }),
                                }),
                              ie() &&
                                x(A.div, {
                                  className: `framer-13sx2y8`,
                                  "data-framer-name": `Check-mark`,
                                  layoutDependency: E,
                                  layoutId: `aH5sbDtzn`,
                                  style: {
                                    backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                    borderBottomLeftRadius: `100%`,
                                    borderBottomRightRadius: `100%`,
                                    borderTopLeftRadius: `100%`,
                                    borderTopRightRadius: `100%`,
                                  },
                                  children: x(un, {
                                    animated: !0,
                                    className: `framer-ho4fe`,
                                    layoutDependency: E,
                                    layoutId: `MwGtz_tRX`,
                                    style: {
                                      "--43q7um": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                    },
                                  }),
                                }),
                              ie() &&
                                x(L, {
                                  __fromCanvasComponent: !0,
                                  children: x(a, {
                                    children: x(A.p, {
                                      className: `framer-styles-preset-1i3utms`,
                                      "data-styles-preset": `z5AEfVPyw`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                      },
                                      children: `Call, message, or send a brief — whichever is easiest.`,
                                    }),
                                  }),
                                  className: `framer-n3mp6f`,
                                  fonts: [`Inter`],
                                  layoutDependency: E,
                                  layoutId: `k0VCgDMiV`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                            ],
                          }),
                      ],
                    }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-eCHcz.framer-18c9185, .framer-eCHcz .framer-18c9185 { display: block; }`,
          `.framer-eCHcz.framer-whf85c { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 604px; }`,
          `.framer-eCHcz .framer-5i32sq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-eCHcz .framer-h0a3tj, .framer-eCHcz .framer-sv4pug, .framer-eCHcz .framer-12i8x8o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-eCHcz .framer-w2xzl9, .framer-eCHcz .framer-1wapk6p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-eCHcz .framer-js7cjz, .framer-eCHcz .framer-1qjjryo, .framer-eCHcz .framer-at5fcn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-eCHcz .framer-n7q9o, .framer-eCHcz .framer-xgwbso { flex: none; height: 14px; overflow: visible; position: relative; width: 15px; }`,
          `.framer-eCHcz .framer-1mwm3ct, .framer-eCHcz .framer-14f8oi, .framer-eCHcz .framer-1n1g8c4 { --framer-input-focused-border-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); --framer-input-focused-border-style: dashed; --framer-input-focused-border-width: 0px 0px 1px 0px; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: -0.8px; --framer-input-font-line-height: 1.12em; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-padding: 25px 0px 15px 0px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-eCHcz .framer-igyyfq-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-eCHcz .framer-s2oszf { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
          `.framer-eCHcz .framer-rf49ca { flex: none; height: 30px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 30px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-eCHcz .framer-udqsve { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 27px); left: 50%; overflow: visible; position: absolute; top: 50%; width: 28px; }`,
          `.framer-eCHcz .framer-13sx2y8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 30px; }`,
          `.framer-eCHcz .framer-ho4fe { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); position: relative; width: 22px; }`,
          `.framer-eCHcz .framer-n3mp6f { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-eCHcz.framer-v-1y3dgb2 .framer-udqsve { height: var(--framer-aspect-ratio-supported, 28px); }`,
          ...Xe,
          ...nn,
        ],
        `framer-eCHcz`,
      )),
      (Jn = qn),
      (qn.displayName = `Subscribe Form`),
      (qn.defaultProps = { height: 370, width: 604 }),
      U(qn, {
        variant: {
          options: [`oIzLgWjUQ`, `imKcpXnSp`, `zkpf46vwp`],
          optionTitles: [`Default`, `Loading`, `Sucess`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      fe(
        qn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
            ],
          },
          ...An,
          ...Mn,
          ...R(Ze),
          ...R(tn),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (qn.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([me(Dn, {}, t)])),
      }));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr = e(() => {
    (D(),
      G(),
      M(),
      d(),
      Ue(),
      Ht(),
      Kt(),
      Ge(),
      Ye(),
      Xt(),
      $e(),
      rt(),
      en(),
      an(),
      Yn(),
      (Xn = N(We)),
      (Zn = ge(L)),
      (Qn = ge(A.div)),
      ($n = N(Jn)),
      (er = ge(F)),
      (tr = ge(Ne)),
      (nr = N(J)),
      (rr = [`x7O0Dj9mb`, `Qx2motbdi`, `yTVprz8Xg`]),
      (ir = `framer-dMfPM`),
      (ar = {
        Qx2motbdi: `framer-v-gau16a`,
        x7O0Dj9mb: `framer-v-1q8dlyv`,
        yTVprz8Xg: `framer-v-ckcxdo`,
      }),
      (or = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (sr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (cr = {
        effect: {
          filter: `blur(10px)`,
          opacity: 0.001,
          rotate: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 60,
        },
        repeat: !1,
        startDelay: 0.4,
        threshold: 0,
        tokenization: `line`,
        transition: {
          damping: 150,
          delay: 0.25,
          mass: 1,
          stiffness: 500,
          type: `spring`,
        },
        trigger: `onInView`,
        type: `appear`,
      }),
      (lr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -50,
      }),
      (ur = {
        damping: 150,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (dr = {
        damping: 150,
        delay: 0.1,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (fr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -1e3,
      }),
      (pr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 60,
      }),
      (mr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (hr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 50,
      }),
      (gr = {
        damping: 150,
        delay: 0.2,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (_r = {
        damping: 150,
        delay: 0.4,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (vr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 35,
      }),
      (yr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
          delay: 0,
          duration: 0.4,
          ease: [0.12, 0.23, 0.5, 1],
          type: `tween`,
        },
        x: 6,
      }),
      (br = ({ value: e, children: t }) => {
        let n = y(j),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(j.Provider, { value: i, children: t });
      }),
      (xr = { Desktop: `x7O0Dj9mb`, Phone: `yTVprz8Xg`, Tablet: `Qx2motbdi` }),
      (Sr = A.create(a)),
      (Cr = ({ height: e, id: t, padding: n, width: r, ...i }) => ({
        ...i,
        MJ9wNtvcF: n ?? i.MJ9wNtvcF ?? `5px 5px 5px 5px`,
        variant: xr[i.variant] ?? i.variant ?? `x7O0Dj9mb`,
      })),
      (wr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Tr = P(
        f(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = p(),
            { activeLocale: o, setLocale: s } = V(),
            c = Me(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              MJ9wNtvcF: m,
              ...h
            } = Cr(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = he({
              cycleOrder: rr,
              defaultVariant: `x7O0Dj9mb`,
              ref: r,
              variant: f,
              variantClassNames: ar,
            }),
            D = wr(e, E),
            ee = I(ir, $t, Qe, Je, nt, rn, Gt, ot, Yt),
            k =
              typeof m == `string`
                ? ie(m)
                : { top: m, right: m, bottom: m, left: m };
          return (
            Ve(),
            x(re, {
              id: d ?? i,
              children: x(Sr, {
                animate: E,
                initial: !1,
                children: x(br, {
                  value: sr,
                  children: x(A.footer, {
                    ...h,
                    ...y,
                    className: I(ee, `framer-1q8dlyv`, u, _),
                    "data-framer-name": `Desktop`,
                    layoutDependency: D,
                    layoutId: `x7O0Dj9mb`,
                    ref: r,
                    style: { "--1n8o868": or(m), ...l },
                    ...Y(
                      {
                        Qx2motbdi: { "data-framer-name": `Tablet` },
                        yTVprz8Xg: { "data-framer-name": `Phone` },
                      },
                      g,
                      S,
                    ),
                    children: O(A.div, {
                      className: `framer-aa2eky`,
                      "data-framer-name": `Container`,
                      layoutDependency: D,
                      layoutId: `IFWlZ62Uk`,
                      style: {
                        backgroundColor: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                      children: [
                        x(H, {
                          children: x(F, {
                            className: `framer-2h3rr2-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: D,
                            layoutId: `x57N_GB2m-container`,
                            nodeId: `x57N_GB2m`,
                            rendersWithMotion: !0,
                            scopeId: `ofeARxtqD`,
                            children: x(We, {
                              animate: !0,
                              animationSpeed: 1,
                              grainSize: 250,
                              height: `100%`,
                              id: `x57N_GB2m`,
                              layoutId: `x57N_GB2m`,
                              opacity: 0.05,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                        O(A.div, {
                          className: `framer-7mxk9t`,
                          "data-border": !0,
                          "data-framer-name": `Top`,
                          layoutDependency: D,
                          layoutId: `Nzx1ukPgI`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `dashed`,
                            "--border-top-width": `1px`,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                          },
                          children: [
                            O(Ne, {
                              background: {
                                alt: `bg`,
                                fit: `fill`,
                                intrinsicHeight: 554,
                                intrinsicWidth: 1410,
                                pixelHeight: 554,
                                pixelWidth: 1410,
                                sizes: `calc(min(max(${c?.width || `100vw`} - ${(k?.left ?? 0) + (k?.right ?? 0)}px, 1px), 1440px) - 22px)`,
                                src: `https://framerusercontent.com/images/CnauhpS3uu2qC5akaNwkILDDxhk.png?width=1410&height=554`,
                                srcSet: `https://framerusercontent.com/images/CnauhpS3uu2qC5akaNwkILDDxhk.png?scale-down-to=512&width=1410&height=554 512w,https://framerusercontent.com/images/CnauhpS3uu2qC5akaNwkILDDxhk.png?scale-down-to=1024&width=1410&height=554 1024w,https://framerusercontent.com/images/CnauhpS3uu2qC5akaNwkILDDxhk.png?width=1410&height=554 1410w`,
                              },
                              className: `framer-wekof6`,
                              "data-border": !0,
                              "data-framer-name": `Background`,
                              layoutDependency: D,
                              layoutId: `fQkdLrMwO`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `dashed`,
                                "--border-top-width": `1px`,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                              },
                              children: [
                                x(A.div, {
                                  className: `framer-doctyz`,
                                  "data-framer-name": `Overlay`,
                                  layoutDependency: D,
                                  layoutId: `T7eN7ZT5f`,
                                  style: {
                                    backgroundColor: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                    opacity: 0.4,
                                  },
                                }),
                                x(A.div, {
                                  className: `framer-136kfm9`,
                                  "data-framer-name": `Overlay`,
                                  layoutDependency: D,
                                  layoutId: `OKYwzBNmK`,
                                  style: {
                                    backgroundColor: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                    opacity: 0.6,
                                  },
                                }),
                                x(H, {
                                  children: x(F, {
                                    className: `framer-1iniylp-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    layoutDependency: D,
                                    layoutId: `aJMtGwtSa-container`,
                                    nodeId: `aJMtGwtSa`,
                                    rendersWithMotion: !0,
                                    scopeId: `ofeARxtqD`,
                                    children: x(We, {
                                      animate: !0,
                                      animationSpeed: 1,
                                      grainSize: 250,
                                      height: `100%`,
                                      id: `aJMtGwtSa`,
                                      layoutId: `aJMtGwtSa`,
                                      opacity: 0.1,
                                      style: { height: `100%`, width: `100%` },
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            x(L, {
                              __fromCanvasComponent: !0,
                              children: x(a, {
                                children: O(A.h3, {
                                  className: `framer-styles-preset-1rt6up1`,
                                  "data-styles-preset": `XNeIwltGc`,
                                  dir: `auto`,
                                  children: [
                                    `Let’s build something solid`,
                                    x(A.span, {
                                      style: {
                                        "--framer-text-color": `var(--extracted-1k2zljd, var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33)))`,
                                      },
                                      children: `*`,
                                    }),
                                  ],
                                }),
                              }),
                              className: `framer-v334b`,
                              effect: cr,
                              fonts: [`Inter`],
                              layoutDependency: D,
                              layoutId: `KmCHXZZVz`,
                              style: {
                                "--extracted-1k2zljd": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            O(A.div, {
                              className: `framer-eb9d00`,
                              "data-framer-name": `Content-wrapper`,
                              layoutDependency: D,
                              layoutId: `tnIsta3T4`,
                              children: [
                                O(A.div, {
                                  className: `framer-y1v6mn`,
                                  "data-framer-name": `Left-content-box`,
                                  layoutDependency: D,
                                  layoutId: `kRzPms71K`,
                                  children: [
                                    x(Zn, {
                                      __framer__animate: { transition: ur },
                                      __framer__animateOnce: !0,
                                      __framer__enter: lr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      children: x(a, {
                                        children: x(A.h6, {
                                          className: `framer-styles-preset-1litcpx`,
                                          "data-styles-preset": `kyo9an03l`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                          },
                                          children: `I design and build the whole thing — layout, code, motion, and the details that decide whether a site feels good or just works.`,
                                        }),
                                      }),
                                      className: `framer-mqvt23`,
                                      fonts: [`Inter`],
                                      layoutDependency: D,
                                      layoutId: `eCKhEDyZe`,
                                      style: {
                                        "--extracted-1w1cjl5": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    O(Qn, {
                                      __framer__animate: { transition: dr },
                                      __framer__animateOnce: !0,
                                      __framer__enter: lr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      className: `framer-129cqfb`,
                                      "data-framer-name": `Card`,
                                      layoutDependency: D,
                                      layoutId: `opyLXTOTn`,
                                      style: {
                                        backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10,
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10,
                                      },
                                      children: [
                                        x(Ne, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 1254,
                                            intrinsicWidth: 1254,
                                            pixelHeight: 1254,
                                            pixelWidth: 1254,
                                            sizes: `min(max((min(min(max((min(min(max(${c?.width || `100vw`} - ${(k?.left ?? 0) + (k?.right ?? 0)}px, 1px), 1440px) - 66px, 1440px) - 10px) / 2, 50px), 391px), 287px) - 25px) / 2, 1px), 123px)`,
                                            src: `/assets/logo.png`,
                                          },
                                          className: `framer-stktxw`,
                                          "data-framer-name": `Image`,
                                          fitImageDimension: `height`,
                                          layoutDependency: D,
                                          layoutId: `xdQCmx7qJ`,
                                          style: {
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,
                                            borderTopLeftRadius: 10,
                                            borderTopRightRadius: 10,
                                          },
                                          ...Y(
                                            {
                                              Qx2motbdi: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1254,
                                                  intrinsicWidth: 1254,
                                                  pixelHeight: 1254,
                                                  pixelWidth: 1254,
                                                  sizes: `min(max((min(max((min(min(max(${c?.width || `100vw`} - ${(k?.left ?? 0) + (k?.right ?? 0)}px, 1px), 1440px) - 52px, 1440px) - 71px) / 2, 1px), 287px) - 25px) / 2, 1px), 123px)`,
                                                  src: `/assets/logo.png`,
                                                },
                                              },
                                              yTVprz8Xg: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1254,
                                                  intrinsicWidth: 1254,
                                                  pixelHeight: 1254,
                                                  pixelWidth: 1254,
                                                  sizes: `min(max((min(min(max(min(min(max(${c?.width || `100vw`} - ${(k?.left ?? 0) + (k?.right ?? 0)}px, 1px), 1440px) - 52px, 1440px), 50px), 391px), 287px) - 25px) / 2, 1px), 123px)`,
                                                  src: `/assets/logo.png`,
                                                },
                                              },
                                            },
                                            g,
                                            S,
                                          ),
                                          children: x(Qn, {
                                            __framer__animate: {
                                              transition: ur,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: fr,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            className: `framer-sizt86`,
                                            "data-framer-name": `Overlay`,
                                            layoutDependency: D,
                                            layoutId: `tMCGfSqUM`,
                                            style: {
                                              backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                            },
                                          }),
                                        }),
                                        x(A.div, {
                                          className: `framer-18rk80`,
                                          "data-framer-name": `Title-box`,
                                          layoutDependency: D,
                                          layoutId: `X20Xg71ni`,
                                          children: x(L, {
                                            __fromCanvasComponent: !0,
                                            children: x(a, {
                                              children: x(A.p, {
                                                className: `framer-styles-preset-1tukh9k`,
                                                "data-styles-preset": `jDHitzL9y`,
                                                dir: `auto`,
                                                children: `Arhan Arif — Web Developer`,
                                              }),
                                            }),
                                            className: `framer-1bceggi`,
                                            fonts: [`Inter`],
                                            layoutDependency: D,
                                            layoutId: `b9yveep9r`,
                                            style: {
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                x(H, {
                                  height: 370,
                                  width: `min(max((min(min(max(${c?.width || `100vw`} - ${(k?.left ?? 0) + (k?.right ?? 0)}px, 1px), 1440px) - 66px, 1440px) - 10px) / 2, 50px), 604px)`,
                                  ...Y(
                                    {
                                      Qx2motbdi: {
                                        width: `min(min(max(${c?.width || `100vw`} - ${(k?.left ?? 0) + (k?.right ?? 0)}px, 1px), 1440px) - 52px, 1440px)`,
                                      },
                                      yTVprz8Xg: {
                                        width: `min(max(min(min(max(${c?.width || `100vw`} - ${(k?.left ?? 0) + (k?.right ?? 0)}px, 1px), 1440px) - 52px, 1440px), 50px), 604px)`,
                                      },
                                    },
                                    g,
                                    S,
                                  ),
                                  children: x(er, {
                                    __framer__animate: { transition: ur },
                                    __framer__animateOnce: !0,
                                    __framer__enter: pr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: `framer-1t0vhyt-container`,
                                    layoutDependency: D,
                                    layoutId: `dY8phgDjr-container`,
                                    nodeId: `dY8phgDjr`,
                                    rendersWithMotion: !0,
                                    scopeId: `ofeARxtqD`,
                                    children: x(Jn, {
                                      height: `100%`,
                                      id: `dY8phgDjr`,
                                      layoutId: `dY8phgDjr`,
                                      style: {
                                        maxWidth: `100%`,
                                        width: `100%`,
                                      },
                                      variant: mr(`oIzLgWjUQ`),
                                      width: `100%`,
                                      ...Y(
                                        {
                                          Qx2motbdi: {
                                            style: { width: `100%` },
                                          },
                                        },
                                        g,
                                        S,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        O(A.div, {
                          className: `framer-1yx9r6n`,
                          "data-framer-name": `Bottom`,
                          layoutDependency: D,
                          layoutId: `jb7r_MNB8`,
                          children: [
                            O(A.div, {
                              className: `framer-1eupor8`,
                              "data-framer-name": `Left-content-box`,
                              layoutDependency: D,
                              layoutId: `BYQMNdZO9`,
                              children: [
                                x(B, {
                                  href: { webPageId: `augiA20Il` },
                                  motionChild: !0,
                                  nodeId: `AOW_0W2QD`,
                                  openInNewTab: !1,
                                  scopeId: `ofeARxtqD`,
                                  children: x(tr, {
                                    __framer__animate: { transition: ur },
                                    __framer__animateOnce: !0,
                                    __framer__enter: hr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    as: `a`,
                                    background: {
                                      alt: `logo`,
                                      fit: `fill`,
                                      intrinsicHeight: 1254,
                                      intrinsicWidth: 1254,
                                      pixelHeight: 1254,
                                      pixelWidth: 1254,
                                      sizes: `100px`,
                                      src: `/assets/logo.png`,
                                    },
                                    className: `framer-kbkwnd framer-1glhzik`,
                                    "data-framer-name": `Logo`,
                                    fitImageDimension: `height`,
                                    layoutDependency: D,
                                    layoutId: `AOW_0W2QD`,
                                  }),
                                }),
                                x(Zn, {
                                  __framer__animate: { transition: gr },
                                  __framer__animateOnce: !0,
                                  __framer__enter: hr,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  children: x(a, {
                                    children: x(A.p, {
                                      className: `framer-styles-preset-1mk8z8h`,
                                      "data-styles-preset": `sPvC_pCwb`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                      },
                                      children: `Arhan Arif is a web developer building fast, thoughtful websites for studios, small businesses and people with an idea worth putting online. Based in India, working with clients anywhere.`,
                                    }),
                                  }),
                                  className: `framer-1edt3wx`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `A1Uec8O8K`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            x(A.div, {
                              className: `framer-m2lv9m`,
                              "data-framer-name": `RIght-content-box`,
                              layoutDependency: D,
                              layoutId: `trvvxBLGv`,
                              children: O(A.div, {
                                className: `framer-prbcij`,
                                "data-framer-name": `Dropdown Menu`,
                                layoutDependency: D,
                                layoutId: `OBxqL_gtU`,
                                children: [
                                  O(Qn, {
                                    __framer__animate: { transition: ur },
                                    __framer__animateOnce: !0,
                                    __framer__enter: hr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: `framer-xktag7`,
                                    "data-framer-name": `Link-box`,
                                    layoutDependency: D,
                                    layoutId: `oK3vEomyM`,
                                    children: [
                                      x(L, {
                                        __fromCanvasComponent: !0,
                                        children: x(a, {
                                          children: x(A.p, {
                                            className: `framer-styles-preset-1mk8z8h`,
                                            "data-styles-preset": `sPvC_pCwb`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                            },
                                            children: `Main Page`,
                                          }),
                                        }),
                                        className: `framer-1ufid6q`,
                                        fonts: [`Inter`],
                                        layoutDependency: D,
                                        layoutId: `RI86rCrjF`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      O(A.div, {
                                        className: `framer-6d5ntm`,
                                        "data-framer-name": `Links`,
                                        layoutDependency: D,
                                        layoutId: `QXWeVXXPX`,
                                        children: [
                                          x(K, {
                                            links: [
                                              {
                                                href: {
                                                  webPageId: `augiA20Il`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `augiA20Il`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `augiA20Il`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              x(H, {
                                                children: x(F, {
                                                  className: `framer-91ekwz-container`,
                                                  "data-code-component-plugin-id": `84d4c1`,
                                                  "data-framer-name": `Link`,
                                                  isAuthoredByUser: !0,
                                                  layoutDependency: D,
                                                  layoutId: `MWNVp9o0c-container`,
                                                  name: `Link`,
                                                  nodeId: `MWNVp9o0c`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `ofeARxtqD`,
                                                  children: x(J, {
                                                    color: `var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123))`,
                                                    font: {
                                                      fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                      fontSize: `14px`,
                                                      fontStyle: `normal`,
                                                      fontWeight: 500,
                                                      letterSpacing: `-0.46px`,
                                                      lineHeight: `1.18em`,
                                                    },
                                                    height: `100%`,
                                                    hoverColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    id: `MWNVp9o0c`,
                                                    layoutId: `MWNVp9o0c`,
                                                    link: e[0],
                                                    name: `Link`,
                                                    newTab: !1,
                                                    speed: 0.04,
                                                    text: `Home`,
                                                    width: `100%`,
                                                    ...Y(
                                                      {
                                                        Qx2motbdi: {
                                                          link: e[1],
                                                        },
                                                        yTVprz8Xg: {
                                                          link: e[2],
                                                        },
                                                      },
                                                      g,
                                                      S,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          x(K, {
                                            links: [
                                              {
                                                href: {
                                                  hash: `:OhuOfZacZ`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  hash: `:OhuOfZacZ`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  hash: `:OhuOfZacZ`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              x(H, {
                                                children: x(F, {
                                                  className: `framer-73dw9l-container`,
                                                  "data-code-component-plugin-id": `84d4c1`,
                                                  "data-framer-name": `Link`,
                                                  isAuthoredByUser: !0,
                                                  layoutDependency: D,
                                                  layoutId: `AnDhf4aaI-container`,
                                                  name: `Link`,
                                                  nodeId: `AnDhf4aaI`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `ofeARxtqD`,
                                                  children: x(J, {
                                                    color: `var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123))`,
                                                    font: {
                                                      fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                      fontSize: `14px`,
                                                      fontStyle: `normal`,
                                                      fontWeight: 500,
                                                      letterSpacing: `-0.46px`,
                                                      lineHeight: `1.18em`,
                                                    },
                                                    height: `100%`,
                                                    hoverColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    id: `AnDhf4aaI`,
                                                    layoutId: `AnDhf4aaI`,
                                                    link: e[0],
                                                    name: `Link`,
                                                    newTab: !1,
                                                    speed: 0.04,
                                                    text: `About`,
                                                    width: `100%`,
                                                    ...Y(
                                                      {
                                                        Qx2motbdi: {
                                                          link: e[1],
                                                        },
                                                        yTVprz8Xg: {
                                                          link: e[2],
                                                        },
                                                      },
                                                      g,
                                                      S,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          x(K, {
                                            links: [
                                              {
                                                href: {
                                                  webPageId: `EcjikNrmE`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `EcjikNrmE`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `EcjikNrmE`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              x(H, {
                                                children: x(F, {
                                                  className: `framer-14xfru0-container`,
                                                  "data-code-component-plugin-id": `84d4c1`,
                                                  "data-framer-name": `Link`,
                                                  isAuthoredByUser: !0,
                                                  layoutDependency: D,
                                                  layoutId: `Ij1jOEav1-container`,
                                                  name: `Link`,
                                                  nodeId: `Ij1jOEav1`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `ofeARxtqD`,
                                                  children: x(J, {
                                                    color: `var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123))`,
                                                    font: {
                                                      fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                      fontSize: `14px`,
                                                      fontStyle: `normal`,
                                                      fontWeight: 500,
                                                      letterSpacing: `-0.46px`,
                                                      lineHeight: `1.18em`,
                                                    },
                                                    height: `100%`,
                                                    hoverColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    id: `Ij1jOEav1`,
                                                    layoutId: `Ij1jOEav1`,
                                                    link: e[0],
                                                    name: `Link`,
                                                    newTab: !1,
                                                    speed: 0.04,
                                                    text: `Blogs`,
                                                    width: `100%`,
                                                    ...Y(
                                                      {
                                                        Qx2motbdi: {
                                                          link: e[1],
                                                        },
                                                        yTVprz8Xg: {
                                                          link: e[2],
                                                        },
                                                      },
                                                      g,
                                                      S,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          x(K, {
                                            links: [
                                              {
                                                href: {
                                                  webPageId: `FJYgKm7Yp`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `FJYgKm7Yp`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `FJYgKm7Yp`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              x(H, {
                                                children: x(F, {
                                                  className: `framer-pox1xr-container`,
                                                  "data-code-component-plugin-id": `84d4c1`,
                                                  "data-framer-name": `Link`,
                                                  isAuthoredByUser: !0,
                                                  layoutDependency: D,
                                                  layoutId: `RQnJUBWU1-container`,
                                                  name: `Link`,
                                                  nodeId: `RQnJUBWU1`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `ofeARxtqD`,
                                                  children: x(J, {
                                                    color: `var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123))`,
                                                    font: {
                                                      fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                      fontSize: `14px`,
                                                      fontStyle: `normal`,
                                                      fontWeight: 500,
                                                      letterSpacing: `-0.46px`,
                                                      lineHeight: `1.18em`,
                                                    },
                                                    height: `100%`,
                                                    hoverColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    id: `RQnJUBWU1`,
                                                    layoutId: `RQnJUBWU1`,
                                                    link: e[0],
                                                    name: `Link`,
                                                    newTab: !1,
                                                    speed: 0.04,
                                                    text: `Project`,
                                                    width: `100%`,
                                                    ...Y(
                                                      {
                                                        Qx2motbdi: {
                                                          link: e[1],
                                                        },
                                                        yTVprz8Xg: {
                                                          link: e[2],
                                                        },
                                                      },
                                                      g,
                                                      S,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          x(K, {
                                            links: [
                                              {
                                                href: {
                                                  webPageId: `iMmW2B_8v`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `iMmW2B_8v`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `iMmW2B_8v`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              x(H, {
                                                children: x(F, {
                                                  className: `framer-v7mzlc-container`,
                                                  "data-code-component-plugin-id": `84d4c1`,
                                                  "data-framer-name": `Link`,
                                                  isAuthoredByUser: !0,
                                                  layoutDependency: D,
                                                  layoutId: `phwPVXGr9-container`,
                                                  name: `Link`,
                                                  nodeId: `phwPVXGr9`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `ofeARxtqD`,
                                                  children: x(J, {
                                                    color: `var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123))`,
                                                    font: {
                                                      fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                      fontSize: `14px`,
                                                      fontStyle: `normal`,
                                                      fontWeight: 500,
                                                      letterSpacing: `-0.46px`,
                                                      lineHeight: `1.18em`,
                                                    },
                                                    height: `100%`,
                                                    hoverColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    id: `phwPVXGr9`,
                                                    layoutId: `phwPVXGr9`,
                                                    link: e[0],
                                                    name: `Link`,
                                                    newTab: !1,
                                                    speed: 0.04,
                                                    text: `Pricing`,
                                                    width: `100%`,
                                                    ...Y(
                                                      {
                                                        Qx2motbdi: {
                                                          link: e[1],
                                                        },
                                                        yTVprz8Xg: {
                                                          link: e[2],
                                                        },
                                                      },
                                                      g,
                                                      S,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  O(Qn, {
                                    __framer__animate: { transition: gr },
                                    __framer__animateOnce: !0,
                                    __framer__enter: hr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: `framer-12c83t7`,
                                    "data-framer-name": `Link-box`,
                                    layoutDependency: D,
                                    layoutId: `Xrof_2GHc`,
                                    children: [
                                      x(L, {
                                        __fromCanvasComponent: !0,
                                        children: x(a, {
                                          children: x(A.p, {
                                            className: `framer-styles-preset-1mk8z8h`,
                                            "data-styles-preset": `sPvC_pCwb`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                            },
                                            children: `Inner Pages`,
                                          }),
                                        }),
                                        className: `framer-zfb3ei`,
                                        fonts: [`Inter`],
                                        layoutDependency: D,
                                        layoutId: `APBYKdGgl`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      O(A.div, {
                                        className: `framer-1nkjj0e`,
                                        "data-framer-name": `Links`,
                                        layoutDependency: D,
                                        layoutId: `PBy4tP6hY`,
                                        children: [
                                          x(K, {
                                            links: [
                                              {
                                                href: {
                                                  webPageId: `VS1gZwE1i`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `VS1gZwE1i`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `VS1gZwE1i`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              x(H, {
                                                children: x(F, {
                                                  className: `framer-1wj0ui2-container`,
                                                  "data-code-component-plugin-id": `84d4c1`,
                                                  "data-framer-name": `Link`,
                                                  isAuthoredByUser: !0,
                                                  layoutDependency: D,
                                                  layoutId: `qORC1N16K-container`,
                                                  name: `Link`,
                                                  nodeId: `qORC1N16K`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `ofeARxtqD`,
                                                  children: x(J, {
                                                    color: `var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123))`,
                                                    font: {
                                                      fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                      fontSize: `14px`,
                                                      fontStyle: `normal`,
                                                      fontWeight: 500,
                                                      letterSpacing: `-0.36px`,
                                                      lineHeight: `1.08em`,
                                                    },
                                                    height: `100%`,
                                                    hoverColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    id: `qORC1N16K`,
                                                    layoutId: `qORC1N16K`,
                                                    link: e[0],
                                                    name: `Link`,
                                                    newTab: !1,
                                                    speed: 0.04,
                                                    text: `Contact`,
                                                    width: `100%`,
                                                    ...Y(
                                                      {
                                                        Qx2motbdi: {
                                                          link: e[1],
                                                        },
                                                        yTVprz8Xg: {
                                                          link: e[2],
                                                        },
                                                      },
                                                      g,
                                                      S,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          x(K, {
                                            links: [
                                              {
                                                href: {
                                                  pathVariables: {
                                                    L6q2o4xpI: `beacon-career`,
                                                  },
                                                  unresolvedPathSlugs: {
                                                    L6q2o4xpI: {
                                                      collectionId: `d0w_cWzte`,
                                                      collectionItemId: `BcCareer01`,
                                                    },
                                                  },
                                                  webPageId: `J6Q1AMwXS`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  pathVariables: {
                                                    L6q2o4xpI: `beacon-career`,
                                                  },
                                                  unresolvedPathSlugs: {
                                                    L6q2o4xpI: {
                                                      collectionId: `d0w_cWzte`,
                                                      collectionItemId: `BcCareer01`,
                                                    },
                                                  },
                                                  webPageId: `J6Q1AMwXS`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  pathVariables: {
                                                    L6q2o4xpI: `beacon-career`,
                                                  },
                                                  unresolvedPathSlugs: {
                                                    L6q2o4xpI: {
                                                      collectionId: `d0w_cWzte`,
                                                      collectionItemId: `BcCareer01`,
                                                    },
                                                  },
                                                  webPageId: `J6Q1AMwXS`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              x(H, {
                                                children: x(F, {
                                                  className: `framer-9matzw-container`,
                                                  "data-code-component-plugin-id": `84d4c1`,
                                                  "data-framer-name": `Link`,
                                                  isAuthoredByUser: !0,
                                                  layoutDependency: D,
                                                  layoutId: `yX92QJ83Y-container`,
                                                  name: `Link`,
                                                  nodeId: `yX92QJ83Y`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `ofeARxtqD`,
                                                  children: x(J, {
                                                    color: `var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123))`,
                                                    font: {
                                                      fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                      fontSize: `14px`,
                                                      fontStyle: `normal`,
                                                      fontWeight: 500,
                                                      letterSpacing: `-0.46px`,
                                                      lineHeight: `1.18em`,
                                                    },
                                                    height: `100%`,
                                                    hoverColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    id: `yX92QJ83Y`,
                                                    layoutId: `yX92QJ83Y`,
                                                    link: e[0],
                                                    name: `Link`,
                                                    newTab: !1,
                                                    speed: 0.04,
                                                    text: `Project Details`,
                                                    width: `100%`,
                                                    ...Y(
                                                      {
                                                        Qx2motbdi: {
                                                          link: e[1],
                                                        },
                                                        yTVprz8Xg: {
                                                          link: e[2],
                                                        },
                                                      },
                                                      g,
                                                      S,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          x(K, {
                                            links: [
                                              {
                                                href: {
                                                  pathVariables: {
                                                    wV3Lg9DPf: `the-future-of-digital-growth`,
                                                  },
                                                  unresolvedPathSlugs: {
                                                    wV3Lg9DPf: {
                                                      collectionId: `htcWKt0sa`,
                                                      collectionItemId: `Y0XQdAltF`,
                                                    },
                                                  },
                                                  webPageId: `fJe50lzzQ`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  pathVariables: {
                                                    wV3Lg9DPf: `the-future-of-digital-growth`,
                                                  },
                                                  unresolvedPathSlugs: {
                                                    wV3Lg9DPf: {
                                                      collectionId: `htcWKt0sa`,
                                                      collectionItemId: `Y0XQdAltF`,
                                                    },
                                                  },
                                                  webPageId: `fJe50lzzQ`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  pathVariables: {
                                                    wV3Lg9DPf: `the-future-of-digital-growth`,
                                                  },
                                                  unresolvedPathSlugs: {
                                                    wV3Lg9DPf: {
                                                      collectionId: `htcWKt0sa`,
                                                      collectionItemId: `Y0XQdAltF`,
                                                    },
                                                  },
                                                  webPageId: `fJe50lzzQ`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              x(H, {
                                                children: x(F, {
                                                  className: `framer-lo2b79-container`,
                                                  "data-code-component-plugin-id": `84d4c1`,
                                                  "data-framer-name": `Link`,
                                                  isAuthoredByUser: !0,
                                                  layoutDependency: D,
                                                  layoutId: `ZUpoZ8EdC-container`,
                                                  name: `Link`,
                                                  nodeId: `ZUpoZ8EdC`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `ofeARxtqD`,
                                                  children: x(J, {
                                                    color: `var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123))`,
                                                    font: {
                                                      fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                      fontSize: `14px`,
                                                      fontStyle: `normal`,
                                                      fontWeight: 500,
                                                      letterSpacing: `-0.46px`,
                                                      lineHeight: `1.18em`,
                                                    },
                                                    height: `100%`,
                                                    hoverColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    id: `ZUpoZ8EdC`,
                                                    layoutId: `ZUpoZ8EdC`,
                                                    link: e[0],
                                                    name: `Link`,
                                                    newTab: !1,
                                                    speed: 0.04,
                                                    text: `Blog Details`,
                                                    width: `100%`,
                                                    ...Y(
                                                      {
                                                        Qx2motbdi: {
                                                          link: e[1],
                                                        },
                                                        yTVprz8Xg: {
                                                          link: e[2],
                                                        },
                                                      },
                                                      g,
                                                      S,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  O(Qn, {
                                    __framer__animate: { transition: _r },
                                    __framer__animateOnce: !0,
                                    __framer__enter: hr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: `framer-ukbrif`,
                                    "data-framer-name": `Link-box`,
                                    layoutDependency: D,
                                    layoutId: `w4F_GpYTl`,
                                    children: [
                                      x(L, {
                                        __fromCanvasComponent: !0,
                                        children: x(a, {
                                          children: x(A.p, {
                                            className: `framer-styles-preset-1mk8z8h`,
                                            "data-styles-preset": `sPvC_pCwb`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                            },
                                            children: `Utility Pages`,
                                          }),
                                        }),
                                        className: `framer-1275r2x`,
                                        fonts: [`Inter`],
                                        layoutDependency: D,
                                        layoutId: `Ia6FyUQ_t`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      x(A.div, {
                                        className: `framer-105wlht`,
                                        "data-framer-name": `Links`,
                                        layoutDependency: D,
                                        layoutId: `cQaKLFft7`,
                                        children: x(K, {
                                          links: [
                                            {
                                              href: { webPageId: `Ki4Zehmjc` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `Ki4Zehmjc` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `Ki4Zehmjc` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            x(H, {
                                              children: x(F, {
                                                className: `framer-e61joo-container`,
                                                "data-code-component-plugin-id": `84d4c1`,
                                                "data-framer-name": `Link`,
                                                isAuthoredByUser: !0,
                                                layoutDependency: D,
                                                layoutId: `j_8SUpTdn-container`,
                                                name: `Link`,
                                                nodeId: `j_8SUpTdn`,
                                                rendersWithMotion: !0,
                                                scopeId: `ofeARxtqD`,
                                                children: x(J, {
                                                  color: `var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123))`,
                                                  font: {
                                                    fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                    fontSize: `14px`,
                                                    fontStyle: `normal`,
                                                    fontWeight: 500,
                                                    letterSpacing: `-0.46px`,
                                                    lineHeight: `1.18em`,
                                                  },
                                                  height: `100%`,
                                                  hoverColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                  id: `j_8SUpTdn`,
                                                  layoutId: `j_8SUpTdn`,
                                                  link: e[0],
                                                  name: `Link`,
                                                  newTab: !1,
                                                  speed: 0.04,
                                                  text: `404 Page`,
                                                  width: `100%`,
                                                  ...Y(
                                                    {
                                                      Qx2motbdi: { link: e[1] },
                                                      yTVprz8Xg: { link: e[2] },
                                                    },
                                                    g,
                                                    S,
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        O(Qn, {
                          __framer__animate: { transition: ur },
                          __framer__animateOnce: !0,
                          __framer__enter: vr,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-v7ab3w`,
                          "data-framer-name": `Bottom-links`,
                          layoutDependency: D,
                          layoutId: `wXALYuch2`,
                          children: [
                            O(A.div, {
                              className: `framer-1a54vel`,
                              "data-framer-name": `Social-links`,
                              layoutDependency: D,
                              layoutId: `I5cpWKMYS`,
                              children: [
                                x(L, {
                                  __fromCanvasComponent: !0,
                                  children: x(a, {
                                    children: x(A.p, {
                                      className: `framer-styles-preset-1i3utms`,
                                      "data-styles-preset": `z5AEfVPyw`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                      },
                                      children: x(B, {
                                        href: `https://instagram.com/theyluvarhann`,
                                        motionChild: !0,
                                        nodeId: `dQ9Cd6s3R`,
                                        openInNewTab: !0,
                                        relValues: [],
                                        scopeId: `ofeARxtqD`,
                                        smoothScroll: !1,
                                        children: x(A.a, {
                                          className: `framer-styles-preset-1808wqw`,
                                          "data-styles-preset": `IKSUHH7Z2`,
                                          children: `instagram`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1qspv1b`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `dQ9Cd6s3R`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                x(L, {
                                  __fromCanvasComponent: !0,
                                  children: x(a, {
                                    children: x(A.p, {
                                      className: `framer-styles-preset-1i3utms`,
                                      "data-styles-preset": `z5AEfVPyw`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                      },
                                      children: x(B, {
                                        href: `https://github.com/ArhanArif07`,
                                        motionChild: !0,
                                        nodeId: `QRi_5zWBs`,
                                        openInNewTab: !0,
                                        relValues: [],
                                        scopeId: `ofeARxtqD`,
                                        smoothScroll: !1,
                                        children: x(A.a, {
                                          className: `framer-styles-preset-1808wqw`,
                                          "data-styles-preset": `IKSUHH7Z2`,
                                          children: `github`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-oxxamw`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `QRi_5zWBs`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                x(L, {
                                  __fromCanvasComponent: !0,
                                  children: x(a, {
                                    children: x(A.p, {
                                      className: `framer-styles-preset-1i3utms`,
                                      "data-styles-preset": `z5AEfVPyw`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                      },
                                      children: x(B, {
                                        href: `https://github.com/ArhanArif07`,
                                        motionChild: !0,
                                        nodeId: `tCuwLeIhs`,
                                        openInNewTab: !0,
                                        relValues: [],
                                        scopeId: `ofeARxtqD`,
                                        smoothScroll: !1,
                                        children: x(A.a, {
                                          className: `framer-styles-preset-1808wqw`,
                                          "data-styles-preset": `IKSUHH7Z2`,
                                          children: `github`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1fcskt5`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `tCuwLeIhs`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                x(L, {
                                  __fromCanvasComponent: !0,
                                  children: x(a, {
                                    children: x(A.p, {
                                      className: `framer-styles-preset-1i3utms`,
                                      "data-styles-preset": `z5AEfVPyw`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                      },
                                      children: x(B, {
                                        href: `https://github.com/ArhanArif07`,
                                        motionChild: !0,
                                        nodeId: `Npzin9g5b`,
                                        openInNewTab: !0,
                                        relValues: [],
                                        scopeId: `ofeARxtqD`,
                                        smoothScroll: !1,
                                        children: x(A.a, {
                                          className: `framer-styles-preset-1808wqw`,
                                          "data-styles-preset": `IKSUHH7Z2`,
                                          children: `github`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-p2xfln`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `Npzin9g5b`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                x(L, {
                                  __fromCanvasComponent: !0,
                                  children: x(a, {
                                    children: x(A.p, {
                                      className: `framer-styles-preset-1i3utms`,
                                      "data-styles-preset": `z5AEfVPyw`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                      },
                                      children: x(B, {
                                        href: `tel:+917060782247`,
                                        motionChild: !0,
                                        nodeId: `hH1oANFYz`,
                                        openInNewTab: !0,
                                        relValues: [],
                                        scopeId: `ofeARxtqD`,
                                        smoothScroll: !1,
                                        children: x(A.a, {
                                          className: `framer-styles-preset-1808wqw`,
                                          "data-styles-preset": `IKSUHH7Z2`,
                                          children: `phone`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-16p0jth`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `hH1oANFYz`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            O(A.div, {
                              className: `framer-1r27frg`,
                              "data-framer-name": `Footer-links`,
                              layoutDependency: D,
                              layoutId: `FfUnjObJQ`,
                              children: [
                                O(A.div, {
                                  className: `framer-j8fgpd`,
                                  "data-framer-name": `Utility`,
                                  layoutDependency: D,
                                  layoutId: `LIsSQ0g9S`,
                                  children: [
                                    x(L, {
                                      __fromCanvasComponent: !0,
                                      children: x(a, {
                                        children: x(A.p, {
                                          className: `framer-styles-preset-1xes9sr`,
                                          "data-styles-preset": `X3lWUYHjB`,
                                          dir: `auto`,
                                          children: x(B, {
                                             href: `tel:+917060782247`,
                                            motionChild: !0,
                                            nodeId: `H6edBEYcx`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `ofeARxtqD`,
                                            smoothScroll: !1,
                                            children: x(A.a, {
                                              className: `framer-styles-preset-1jbmnzg`,
                                              "data-styles-preset": `pOEXxShTO`,
                                              children: `Call`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1ifge6p`,
                                      fonts: [`Inter`],
                                      layoutDependency: D,
                                      layoutId: `H6edBEYcx`,
                                      verticalAlignment: `top`,
                                      whileHover: yr,
                                      withExternalLayout: !0,
                                    }),
                                    x(L, {
                                      __fromCanvasComponent: !0,
                                      children: x(a, {
                                        children: x(A.p, {
                                          className: `framer-styles-preset-1xes9sr`,
                                          "data-styles-preset": `X3lWUYHjB`,
                                          dir: `auto`,
                                          children: x(B, {
                                             href: `https://github.com/ArhanArif07`,
                                            motionChild: !0,
                                            nodeId: `VY0UHsT6J`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `ofeARxtqD`,
                                            smoothScroll: !1,
                                            children: x(A.a, {
                                              className: `framer-styles-preset-1jbmnzg`,
                                              "data-styles-preset": `pOEXxShTO`,
                                              children: `GitHub`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1lpj34j`,
                                      fonts: [`Inter`],
                                      layoutDependency: D,
                                      layoutId: `VY0UHsT6J`,
                                      verticalAlignment: `top`,
                                      whileHover: yr,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                x(L, {
                                  __fromCanvasComponent: !0,
                                  children: x(a, {
                                    children: O(A.p, {
                                      className: `framer-styles-preset-1xes9sr`,
                                      "data-styles-preset": `X3lWUYHjB`,
                                      dir: `auto`,
                                      children: [
                                        ``,
                                        x(B, {
                                          href: ``,
                                          motionChild: !0,
                                          nodeId: `LOnWM2aUW`,
                                          openInNewTab: !0,
                                          relValues: [],
                                          scopeId: `ofeARxtqD`,
                                          smoothScroll: !1,
                                          children: x(A.a, {
                                            className: `framer-styles-preset-1808wqw`,
                                            "data-styles-preset": `IKSUHH7Z2`,
                                            children: ``,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-snbxgd`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `LOnWM2aUW`,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-dMfPM.framer-1glhzik, .framer-dMfPM .framer-1glhzik { display: block; }`,
          `.framer-dMfPM.framer-1q8dlyv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: var(--1n8o868); position: relative; width: 1200px; }`,
          `.framer-dMfPM .framer-aa2eky { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: hidden; padding: 10px 10px 50px 10px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-dMfPM .framer-2h3rr2-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-dMfPM .framer-7mxk9t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 23px 23px 32px 23px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-dMfPM .framer-wekof6 { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-dMfPM .framer-doctyz { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
          `.framer-dMfPM .framer-136kfm9 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 3; }`,
          `.framer-dMfPM .framer-1iniylp-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 4; }`,
          `.framer-dMfPM .framer-v334b { flex: none; height: auto; max-width: 800px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 3; }`,
          `.framer-dMfPM .framer-eb9d00 { display: grid; flex: none; gap: 20px 10px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
          `.framer-dMfPM .framer-y1v6mn { align-content: flex-start; align-items: flex-start; align-self: end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 71px; height: min-content; justify-content: flex-start; justify-self: start; max-width: 391px; overflow: visible; padding: 0px 0px 7px 0px; position: relative; width: 100%; }`,
          `.framer-dMfPM .framer-mqvt23, .framer-dMfPM .framer-1bceggi, .framer-dMfPM .framer-1edt3wx { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-dMfPM .framer-129cqfb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 287px; overflow: visible; padding: 5px 10px 5px 5px; position: relative; width: 100%; }`,
          `.framer-dMfPM .framer-stktxw { flex: 1 0 0px; height: auto; max-width: 123px; overflow: hidden; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-dMfPM .framer-sizt86 { bottom: -1000px; flex: none; height: 1000px; left: calc(50.40650406504067% - 1000px / 2); overflow: visible; position: absolute; width: 1000px; }`,
          `.framer-dMfPM .framer-18rk80 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-dMfPM .framer-1t0vhyt-container { align-self: end; flex: none; height: auto; justify-self: end; max-width: 604px; position: relative; width: 100%; }`,
          `.framer-dMfPM .framer-1yx9r6n { display: grid; flex: none; gap: 20px 10px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-dMfPM .framer-1eupor8 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; justify-self: start; max-width: 426px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-dMfPM .framer-kbkwnd { flex: none; height: auto; overflow: visible; position: relative; text-decoration: none; width: 79px; }`,
          `.framer-dMfPM .framer-m2lv9m { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; justify-self: end; max-width: 604px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-dMfPM .framer-prbcij { display: grid; flex: none; gap: 30px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-dMfPM .framer-xktag7 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-dMfPM .framer-1ufid6q, .framer-dMfPM .framer-zfb3ei, .framer-dMfPM .framer-1275r2x, .framer-dMfPM .framer-1qspv1b, .framer-dMfPM .framer-oxxamw, .framer-dMfPM .framer-1fcskt5, .framer-dMfPM .framer-p2xfln, .framer-dMfPM .framer-16p0jth { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-dMfPM .framer-6d5ntm, .framer-dMfPM .framer-1nkjj0e, .framer-dMfPM .framer-105wlht { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-dMfPM .framer-91ekwz-container, .framer-dMfPM .framer-73dw9l-container, .framer-dMfPM .framer-14xfru0-container, .framer-dMfPM .framer-pox1xr-container, .framer-dMfPM .framer-v7mzlc-container, .framer-dMfPM .framer-1wj0ui2-container, .framer-dMfPM .framer-9matzw-container, .framer-dMfPM .framer-lo2b79-container, .framer-dMfPM .framer-e61joo-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-dMfPM .framer-12c83t7 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; justify-self: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-dMfPM .framer-ukbrif { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; justify-self: end; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-dMfPM .framer-v7ab3w { display: grid; flex: none; gap: 20px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 50px 20px 0px 20px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-dMfPM .framer-1a54vel { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-dMfPM .framer-1r27frg { align-self: start; display: grid; flex: none; gap: 20px; grid-auto-rows: min-content; grid-column: span 2; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; justify-self: end; max-width: 604px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-dMfPM .framer-j8fgpd { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-dMfPM .framer-1ifge6p, .framer-dMfPM .framer-1lpj34j { flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-dMfPM .framer-snbxgd { align-self: start; flex: none; height: auto; justify-self: end; position: relative; white-space: pre; width: fit-content; }`,
          `.framer-dMfPM.framer-v-gau16a.framer-1q8dlyv { width: 810px; }`,
          `.framer-dMfPM.framer-v-gau16a .framer-7mxk9t, .framer-dMfPM.framer-v-ckcxdo .framer-7mxk9t { padding: 23px 16px 32px 16px; }`,
          `.framer-dMfPM.framer-v-gau16a .framer-eb9d00 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start; }`,
          `.framer-dMfPM.framer-v-gau16a .framer-y1v6mn { align-self: unset; flex-direction: row; max-width: unset; }`,
          `.framer-dMfPM.framer-v-gau16a .framer-mqvt23, .framer-dMfPM.framer-v-gau16a .framer-129cqfb { flex: 1 0 0px; width: 1px; }`,
          `.framer-dMfPM.framer-v-gau16a .framer-1t0vhyt-container { align-self: unset; max-width: unset; }`,
          `.framer-dMfPM.framer-v-gau16a .framer-1yx9r6n { padding: 0px 16px 0px 16px; }`,
          `.framer-dMfPM.framer-v-gau16a .framer-v7ab3w, .framer-dMfPM.framer-v-ckcxdo .framer-v7ab3w { grid-template-columns: repeat(3, minmax(50px, 1fr)); padding: 50px 16px 0px 16px; }`,
          `.framer-dMfPM.framer-v-gau16a .framer-1a54vel, .framer-dMfPM.framer-v-gau16a .framer-1r27frg, .framer-dMfPM.framer-v-ckcxdo .framer-j8fgpd { grid-column: 1 / -1; justify-self: center; }`,
          `.framer-dMfPM.framer-v-ckcxdo.framer-1q8dlyv { width: 390px; }`,
          `.framer-dMfPM.framer-v-ckcxdo .framer-eb9d00 { gap: 60px 10px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }`,
          `.framer-dMfPM.framer-v-ckcxdo .framer-y1v6mn { gap: 40px; grid-column: 1 / -1; }`,
          `.framer-dMfPM.framer-v-ckcxdo .framer-1t0vhyt-container { grid-column: 1 / -1; justify-self: start; }`,
          `.framer-dMfPM.framer-v-ckcxdo .framer-1yx9r6n { grid-template-columns: repeat(1, minmax(50px, 1fr)); padding: 0px 16px 0px 16px; }`,
          `.framer-dMfPM.framer-v-ckcxdo .framer-1eupor8 { grid-column: 1 / -1; }`,
          `.framer-dMfPM.framer-v-ckcxdo .framer-m2lv9m { align-self: end; grid-column: 1 / -1; justify-self: start; }`,
          `.framer-dMfPM.framer-v-ckcxdo .framer-1a54vel { flex-wrap: wrap; grid-column: 1 / -1; justify-self: center; width: 100%; }`,
          `.framer-dMfPM.framer-v-ckcxdo .framer-1r27frg { grid-column: 1 / -1; grid-template-columns: repeat(1, minmax(50px, 1fr)); justify-self: start; }`,
          `.framer-dMfPM.framer-v-ckcxdo .framer-snbxgd { align-self: end; justify-self: center; }`,
          ...Qt,
          ...Xe,
          ...Ke,
          ...et,
          ...nn,
          ...Wt,
          ...it,
          ...Jt,
          `.framer-dMfPM[data-border="true"]::after, .framer-dMfPM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-dMfPM`,
      )),
      (Er = Tr),
      (Tr.displayName = `Footer`),
      (Tr.defaultProps = { height: 1029, width: 1200 }),
      U(Tr, {
        variant: {
          options: [`x7O0Dj9mb`, `Qx2motbdi`, `yTVprz8Xg`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: W.Enum,
        },
        MJ9wNtvcF: {
          defaultValue: `5px 5px 5px 5px`,
          title: `Padding`,
          type: W.Padding,
        },
      }),
      fe(
        Tr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Xn,
          ...$n,
          ...nr,
          ...R(Zt),
          ...R(Ze),
          ...R(qe),
          ...R(tt),
          ...R(tn),
          ...R(Ut),
          ...R(at),
          ...R(qt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Tr.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([me(Jn, {}, t)])),
      }));
  });
function Or(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br = e(() => {
    (D(),
      G(),
      M(),
      d(),
      (kr = [`MVgu8BvPt`, `QyrBcFS6M`]),
      (Ar = `framer-kBGsB`),
      (jr = { MVgu8BvPt: `framer-v-pmbci1`, QyrBcFS6M: `framer-v-185vpo0` }),
      (Mr = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Nr = ({ value: e, children: t }) => {
        let n = y(j),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(j.Provider, { value: i, children: t });
      }),
      (Pr = { Close: `QyrBcFS6M`, Default: `MVgu8BvPt` }),
      (Fr = A.create(a)),
      (Ir = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        jP9xEPjYz: e ?? i.jP9xEPjYz,
        variant: Pr[i.variant] ?? i.variant ?? `MVgu8BvPt`,
      })),
      (Lr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Rr = P(
        f(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: o } = V();
          Me();
          let {
              style: s,
              className: c,
              layoutId: l,
              variant: u,
              jP9xEPjYz: d,
              ...f
            } = Ir(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: y,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = he({
              cycleOrder: kr,
              defaultVariant: `MVgu8BvPt`,
              ref: r,
              variant: u,
              variantClassNames: jr,
            }),
            T = Lr(e, w),
            { activeVariantCallback: E, delay: D } = ye(m),
            ee = E(async (...e) => {
              if ((S({ isPressed: !1 }), d && (await d(...e)) === !1))
                return !1;
            }),
            k = I(Ar);
          return x(re, {
            id: l ?? i,
            children: x(Fr, {
              animate: w,
              initial: !1,
              children: x(Nr, {
                value: Mr,
                children: O(A.div, {
                  ...f,
                  ..._,
                  className: I(k, `framer-pmbci1`, c, h),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: T,
                  layoutId: `MVgu8BvPt`,
                  onTap: ee,
                  ref: r,
                  style: { ...s },
                  ...Or({ QyrBcFS6M: { "data-framer-name": `Close` } }, m, v),
                  children: [
                    x(A.div, {
                      className: `framer-rvs7xo`,
                      "data-framer-name": `Line`,
                      layoutDependency: T,
                      layoutId: `WrZQkt6bH`,
                      style: {
                        backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        rotate: 0,
                      },
                      variants: { QyrBcFS6M: { rotate: -45 } },
                    }),
                    x(A.div, {
                      className: `framer-1dhu5yc`,
                      "data-framer-name": `Line`,
                      layoutDependency: T,
                      layoutId: `gFAI9qRGZ`,
                      style: {
                        backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        scale: 1,
                      },
                      variants: { QyrBcFS6M: { scale: 0 } },
                    }),
                    x(A.div, {
                      className: `framer-ai7ejm`,
                      "data-framer-name": `Line`,
                      layoutDependency: T,
                      layoutId: `is69ZOXJn`,
                      style: {
                        backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        rotate: 0,
                      },
                      variants: { QyrBcFS6M: { rotate: 45 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-kBGsB.framer-1vtpjmo, .framer-kBGsB .framer-1vtpjmo { display: block; }`,
          `.framer-kBGsB.framer-pmbci1 { cursor: pointer; height: 20px; position: relative; width: 28px; }`,
          `.framer-kBGsB .framer-rvs7xo { bottom: 0px; flex: none; height: 2px; left: 0px; overflow: visible; position: absolute; right: 0px; }`,
          `.framer-kBGsB .framer-1dhu5yc { flex: none; height: 2px; left: 0px; overflow: visible; position: absolute; right: 0px; top: calc(50.00000000000002% - 2px / 2); }`,
          `.framer-kBGsB .framer-ai7ejm { flex: none; height: 2px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-kBGsB.framer-v-185vpo0 .framer-rvs7xo { bottom: unset; top: calc(50.00000000000002% - 2px / 2); }`,
          `.framer-kBGsB.framer-v-185vpo0 .framer-ai7ejm { top: calc(50.00000000000002% - 2px / 2); }`,
        ],
        `framer-kBGsB`,
      )),
      (zr = Rr),
      (Rr.displayName = `Menu`),
      (Rr.defaultProps = { height: 20, width: 28 }),
      U(Rr, {
        variant: {
          options: [`MVgu8BvPt`, `QyrBcFS6M`],
          optionTitles: [`Default`, `Close`],
          title: `Variant`,
          type: W.Enum,
        },
        jP9xEPjYz: { title: `Click`, type: W.EventHandler },
      }),
      fe(Rr, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function Vr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei = e(() => {
    (D(),
      G(),
      M(),
      d(),
      $e(),
      (Hr = { xWVh7UQV4: { hover: !0 } }),
      (Ur = [`xWVh7UQV4`, `d2j_Wi4KG`, `Rcr_mPDah`]),
      (Wr = `framer-dtDa0`),
      (Gr = {
        d2j_Wi4KG: `framer-v-1iwzzb5`,
        Rcr_mPDah: `framer-v-1s4oztg`,
        xWVh7UQV4: `framer-v-1aachyr`,
      }),
      (Kr = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (qr = ({ value: e, children: t }) => {
        let n = y(j),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(j.Provider, { value: i, children: t });
      }),
      (Jr = {
        "With-arrow-hover": `Rcr_mPDah`,
        "With-arrow": `d2j_Wi4KG`,
        Default: `xWVh7UQV4`,
      }),
      (Yr = A.create(a)),
      (Xr = ({
        height: e,
        hover2: t,
        id: n,
        invert: r,
        link: i,
        newTab: a,
        smoothScroll: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        aV6T1529E: r ?? l.aV6T1529E,
        AZPLb_01q: t ?? l.AZPLb_01q,
        b7DktJY8e: s ?? l.b7DktJY8e ?? `Home`,
        ntaYz49mr: a ?? l.ntaYz49mr,
        PWcJzNATF: o ?? l.PWcJzNATF,
        variant: Jr[l.variant] ?? l.variant ?? `xWVh7UQV4`,
        xpvuxwpEx: i ?? l.xpvuxwpEx,
      })),
      (Zr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Qr = P(
        f(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = p(),
            { activeLocale: o, setLocale: s } = V(),
            c = Me(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              b7DktJY8e: m,
              aV6T1529E: h,
              xpvuxwpEx: g,
              ntaYz49mr: _,
              PWcJzNATF: v,
              AZPLb_01q: y,
              ...S
            } = Xr(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: ee,
              setGestureState: k,
              setVariant: te,
              variants: j,
            } = he({
              cycleOrder: Ur,
              defaultVariant: `xWVh7UQV4`,
              enabledGestures: Hr,
              ref: r,
              variant: f,
              variantClassNames: Gr,
            }),
            ne = Zr(e, j),
            { activeVariantCallback: M, delay: ie } = ye(C),
            ae = M(async (...e) => {
              if ((k({ isHovered: !0 }), y && (await y(...e)) === !1))
                return !1;
            }),
            N = I(Wr, nt),
            oe = () => !![`d2j_Wi4KG`, `Rcr_mPDah`].includes(C);
          return x(re, {
            id: d ?? i,
            children: x(Yr, {
              animate: j,
              initial: !1,
              children: x(qr, {
                value: Kr,
                children: x(B, {
                  href: g,
                  motionChild: !0,
                  nodeId: `xWVh7UQV4`,
                  openInNewTab: _,
                  scopeId: `Jwv63ZVlf`,
                  smoothScroll: v,
                  children: x(A.a, {
                    ...S,
                    ...E,
                    className: `${I(N, `framer-1aachyr`, u, w)} framer-e31dcs`,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: ne,
                    layoutId: `xWVh7UQV4`,
                    onMouseEnter: ae,
                    ref: r,
                    style: {
                      backgroundColor: `rgba(255, 255, 255, 0)`,
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      filter: `invert(${parseFloat(h) / 100})`,
                      WebkitFilter: `invert(${parseFloat(h) / 100})`,
                      ...l,
                    },
                    variants: {
                      "xWVh7UQV4-hover": {
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      Rcr_mPDah: { backgroundColor: `rgb(255, 255, 255)` },
                    },
                    ...Vr(
                      {
                        "xWVh7UQV4-hover": { "data-framer-name": void 0 },
                        d2j_Wi4KG: { "data-framer-name": `With-arrow` },
                        Rcr_mPDah: { "data-framer-name": `With-arrow-hover` },
                      },
                      C,
                      D,
                    ),
                    children: O(A.div, {
                      className: `framer-sa6rhu`,
                      "data-framer-name": `Title-box`,
                      layoutDependency: ne,
                      layoutId: `dM9t5aebG`,
                      children: [
                        x(L, {
                          __fromCanvasComponent: !0,
                          children: x(a, {
                            children: x(A.p, {
                              className: `framer-styles-preset-1mk8z8h`,
                              "data-styles-preset": `sPvC_pCwb`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                              },
                              children: `Home`,
                            }),
                          }),
                          className: `framer-1yse2ck`,
                          fonts: [`Inter`],
                          layoutDependency: ne,
                          layoutId: `JX_3nK6iJ`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: m,
                          variants: {
                            "xWVh7UQV4-hover": {
                              "--extracted-r6o4lv": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                            },
                            Rcr_mPDah: {
                              "--extracted-r6o4lv": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Vr(
                            {
                              "xWVh7UQV4-hover": {
                                children: x(a, {
                                  children: x(A.p, {
                                    className: `framer-styles-preset-1mk8z8h`,
                                    "data-styles-preset": `sPvC_pCwb`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0)))`,
                                    },
                                    children: `Home`,
                                  }),
                                }),
                              },
                              Rcr_mPDah: {
                                children: x(a, {
                                  children: x(A.p, {
                                    className: `framer-styles-preset-1mk8z8h`,
                                    "data-styles-preset": `sPvC_pCwb`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0)))`,
                                    },
                                    children: `Home`,
                                  }),
                                }),
                              },
                            },
                            C,
                            D,
                          ),
                        }),
                        oe() &&
                          x(Ne, {
                            background: {
                              alt: `icon`,
                              fit: `fill`,
                              intrinsicHeight: 16,
                              intrinsicWidth: 16,
                              pixelHeight: 16,
                              pixelWidth: 16,
                              src: `https://framerusercontent.com/images/x2b2Stn7NT9auHIBxv1IswbHm4o.svg?width=16&height=16`,
                            },
                            className: `framer-ilvcjz`,
                            "data-framer-name": `Icon`,
                            layoutDependency: ne,
                            layoutId: `gf18Qiozz`,
                            style: {
                              filter: `none`,
                              rotate: 0,
                              WebkitFilter: `none`,
                            },
                            variants: {
                              Rcr_mPDah: {
                                filter: `invert(1)`,
                                rotate: -180,
                                WebkitFilter: `invert(1)`,
                              },
                            },
                            ...Vr(
                              {
                                d2j_Wi4KG: {
                                  background: {
                                    alt: `icon`,
                                    fit: `fill`,
                                    intrinsicHeight: 16,
                                    intrinsicWidth: 16,
                                    loading: ce(
                                      (c?.y || 0) +
                                        5 +
                                        (((c?.height || 28) - 10 - 17.92) / 2 +
                                          0 +
                                          0) +
                                        0.96,
                                    ),
                                    pixelHeight: 16,
                                    pixelWidth: 16,
                                    sizes: `16px`,
                                    src: `https://framerusercontent.com/images/x2b2Stn7NT9auHIBxv1IswbHm4o.svg?width=16&height=16`,
                                  },
                                },
                                Rcr_mPDah: {
                                  background: {
                                    alt: `icon`,
                                    fit: `fill`,
                                    intrinsicHeight: 16,
                                    intrinsicWidth: 16,
                                    loading: ce(
                                      (c?.y || 0) +
                                        5 +
                                        (((c?.height || 28) - 10 - 17.92) / 2 +
                                          0 +
                                          0) +
                                        0.96,
                                    ),
                                    pixelHeight: 16,
                                    pixelWidth: 16,
                                    sizes: `16px`,
                                    src: `https://framerusercontent.com/images/x2b2Stn7NT9auHIBxv1IswbHm4o.svg?width=16&height=16`,
                                  },
                                },
                              },
                              C,
                              D,
                            ),
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-dtDa0.framer-e31dcs, .framer-dtDa0 .framer-e31dcs { display: block; }`,
          `.framer-dtDa0.framer-1aachyr { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 5px 15px 5px 15px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-dtDa0 .framer-sa6rhu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-dtDa0 .framer-1yse2ck { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-dtDa0 .framer-ilvcjz { flex: none; height: 16px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 16px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-dtDa0.framer-v-1iwzzb5.framer-1aachyr, .framer-dtDa0.framer-v-1s4oztg.framer-1aachyr { cursor: unset; }`,
          ...et,
        ],
        `framer-dtDa0`,
      )),
      ($r = Qr),
      (Qr.displayName = `Navlink`),
      (Qr.defaultProps = { height: 28, width: 72 }),
      U(Qr, {
        variant: {
          options: [`xWVh7UQV4`, `d2j_Wi4KG`, `Rcr_mPDah`],
          optionTitles: [`Default`, `With-arrow`, `With-arrow-hover`],
          title: `Variant`,
          type: W.Enum,
        },
        b7DktJY8e: {
          defaultValue: `Home`,
          displayTextArea: !1,
          title: `Title`,
          type: W.String,
        },
        onb7DktJY8eChange: { changes: `b7DktJY8e`, type: W.ChangeHandler },
        aV6T1529E: { defaultValue: 0, title: `Invert`, type: W.Number },
        onaV6T1529EChange: { changes: `aV6T1529E`, type: W.ChangeHandler },
        xpvuxwpEx: { title: `Link`, type: W.Link },
        ntaYz49mr: { defaultValue: !1, title: `New Tab`, type: W.Boolean },
        onntaYz49mrChange: { changes: `ntaYz49mr`, type: W.ChangeHandler },
        PWcJzNATF: {
          defaultValue: !1,
          title: `Smooth Scroll`,
          type: W.Boolean,
        },
        onPWcJzNATFChange: { changes: `PWcJzNATF`, type: W.ChangeHandler },
        AZPLb_01q: { title: `Hover 2`, type: W.EventHandler },
      }),
      fe(
        Qr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...R(tt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  ti,
  ni,
  ri,
  ii = e(() => {
    (G(),
      de.loadFonts([`GF;Geist-500`, `GF;Geist-700`]),
      (ti = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Geist`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist`,
              url: `https://fonts.gstatic.com/s/geist/v4/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Geist`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist`,
              url: `https://fonts.gstatic.com/s/geist/v4/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (ni = [
        `.framer-qL0HC .framer-styles-preset-18orp06:not(.rich-text-wrapper), .framer-qL0HC .framer-styles-preset-18orp06.rich-text-wrapper h5 { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.96px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, #7b7b7b); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (ri = `framer-qL0HC`));
  }),
  ai,
  oi,
  si,
  ci = e(() => {
    (G(),
      de.loadFonts([]),
      (ai = [{ explicitInter: !0, fonts: [] }]),
      (oi = [
        `.framer-ed3Lr .framer-styles-preset-u0fp2d:not(.rich-text-wrapper), .framer-ed3Lr .framer-styles-preset-u0fp2d.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-06856072-b723-433b-af66-5e2af035f2ef, #ff2121); --framer-link-text-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); }`,
      ]),
      (si = `framer-ed3Lr`));
  });
function li(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ui,
  di,
  fi,
  pi,
  mi,
  hi,
  X,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci = e(() => {
    (D(),
      G(),
      M(),
      d(),
      Ue(),
      ii(),
      ci(),
      Xt(),
      $e(),
      rt(),
      (ui = N(We)),
      (di = [`HE77F0UB7`, `Ik_VNvibo`]),
      (fi = `framer-IlbAY`),
      (pi = { HE77F0UB7: `framer-v-hkj0cf`, Ik_VNvibo: `framer-v-9tqoli` }),
      (mi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (hi = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (X = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
          delay: 0,
          duration: 0.4,
          ease: [0.12, 0.23, 0.5, 1],
          type: `tween`,
        },
        x: 6,
      }),
      (gi = ({ value: e, children: t }) => {
        let n = y(j),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(j.Provider, { value: i, children: t });
      }),
      (_i = { Desktop: `HE77F0UB7`, Mobile: `Ik_VNvibo` }),
      (vi = A.create(a)),
      (yi = ({ height: e, id: t, padding: n, width: r, ...i }) => ({
        ...i,
        LdvGY9HH1: n ?? i.LdvGY9HH1 ?? `18px`,
        variant: _i[i.variant] ?? i.variant ?? `HE77F0UB7`,
      })),
      (bi = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (xi = P(
        f(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = p(),
            { activeLocale: o, setLocale: s } = V();
          Me();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              LdvGY9HH1: f,
              ...m
            } = yi(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = he({
              cycleOrder: di,
              defaultVariant: `HE77F0UB7`,
              ref: r,
              variant: d,
              variantClassNames: pi,
            }),
            E = bi(e, T),
            D = I(fi, nt, ot, Yt, ri, si),
            ee = () => h !== `Ik_VNvibo`;
          return x(re, {
            id: u ?? i,
            children: x(vi, {
              animate: T,
              initial: !1,
              children: x(gi, {
                value: mi,
                children: O(A.div, {
                  ...m,
                  ...v,
                  className: I(D, `framer-hkj0cf`, l, g),
                  "data-framer-name": `Desktop`,
                  layoutDependency: E,
                  layoutId: `HE77F0UB7`,
                  ref: r,
                  style: {
                    "--qboh76": hi(f),
                    backgroundColor: `var(--token-7bc24d75-456d-4da8-90a1-2594392b9ddf, rgb(20, 20, 20))`,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    ...c,
                  },
                  variants: {
                    Ik_VNvibo: {
                      backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                  },
                  ...li({ Ik_VNvibo: { "data-framer-name": `Mobile` } }, h, y),
                  children: [
                    ee() &&
                      x(H, {
                        children: x(F, {
                          className: `framer-1iji9-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: E,
                          layoutId: `zSQCMQ2p0-container`,
                          nodeId: `zSQCMQ2p0`,
                          rendersWithMotion: !0,
                          scopeId: `xfPLO4Dnr`,
                          children: x(We, {
                            animate: !0,
                            animationSpeed: 1,
                            grainSize: 250,
                            height: `100%`,
                            id: `zSQCMQ2p0`,
                            layoutId: `zSQCMQ2p0`,
                            opacity: 0.04,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    O(A.div, {
                      className: `framer-lf9kox`,
                      "data-framer-name": `Link-box`,
                      layoutDependency: E,
                      layoutId: `XVkQJRMtU`,
                      children: [
                        ee() &&
                          x(L, {
                            __fromCanvasComponent: !0,
                            children: x(a, {
                              children: x(A.p, {
                                className: `framer-styles-preset-1mk8z8h`,
                                "data-styles-preset": `sPvC_pCwb`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                },
                                children: `Main Page`,
                              }),
                            }),
                            className: `framer-3jmavy`,
                            fonts: [`Inter`],
                            layoutDependency: E,
                            layoutId: `shskl0lgb`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        O(A.div, {
                          className: `framer-1czc0v9`,
                          "data-framer-name": `Links`,
                          layoutDependency: E,
                          layoutId: `U2bJAv_IZ`,
                          children: [
                            x(L, {
                              __fromCanvasComponent: !0,
                              children: x(a, {
                                children: x(A.p, {
                                  className: `framer-styles-preset-1xes9sr`,
                                  "data-styles-preset": `X3lWUYHjB`,
                                  dir: `auto`,
                                  children: x(B, {
                                    href: { webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `GvjoiEkrU`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `xfPLO4Dnr`,
                                    smoothScroll: !1,
                                    children: x(A.a, {
                                      className: `framer-styles-preset-1jbmnzg`,
                                      "data-styles-preset": `pOEXxShTO`,
                                      children: `Home`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-zdfyqu`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `GvjoiEkrU`,
                              variants: {
                                Ik_VNvibo: {
                                  "--extracted-1lwpl3i": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                },
                              },
                              verticalAlignment: `top`,
                              whileHover: X,
                              withExternalLayout: !0,
                              ...li(
                                {
                                  Ik_VNvibo: {
                                    children: x(a, {
                                      children: x(A.h5, {
                                        className: `framer-styles-preset-18orp06`,
                                        "data-styles-preset": `d6cdsEYm6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0)))`,
                                        },
                                        children: x(B, {
                                          href: {
                                            hash: `:OhuOfZacZ`,
                                            webPageId: `augiA20Il`,
                                          },
                                          motionChild: !0,
                                          nodeId: `GvjoiEkrU`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `xfPLO4Dnr`,
                                          smoothScroll: !0,
                                          children: x(A.a, {
                                            className: `framer-styles-preset-u0fp2d`,
                                            "data-styles-preset": `MeuOrAryM`,
                                            children: `About`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                h,
                                y,
                              ),
                            }),
                            x(L, {
                              __fromCanvasComponent: !0,
                              children: x(a, {
                                children: x(A.p, {
                                  className: `framer-styles-preset-1xes9sr`,
                                  "data-styles-preset": `X3lWUYHjB`,
                                  dir: `auto`,
                                  children: x(B, {
                                    href: {
                                      hash: `:OhuOfZacZ`,
                                      webPageId: `augiA20Il`,
                                    },
                                    motionChild: !0,
                                    nodeId: `aIbnTGRJj`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `xfPLO4Dnr`,
                                    smoothScroll: !1,
                                    children: x(A.a, {
                                      className: `framer-styles-preset-1jbmnzg`,
                                      "data-styles-preset": `pOEXxShTO`,
                                      children: `About`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1a6jt5w`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `aIbnTGRJj`,
                              verticalAlignment: `top`,
                              whileHover: X,
                              withExternalLayout: !0,
                              ...li(
                                {
                                  Ik_VNvibo: {
                                    children: x(a, {
                                      children: x(A.h5, {
                                        className: `framer-styles-preset-18orp06`,
                                        "data-styles-preset": `d6cdsEYm6`,
                                        dir: `auto`,
                                        children: x(B, {
                                          href: { webPageId: `FJYgKm7Yp` },
                                          motionChild: !0,
                                          nodeId: `aIbnTGRJj`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `xfPLO4Dnr`,
                                          smoothScroll: !1,
                                          children: x(A.a, {
                                            className: `framer-styles-preset-u0fp2d`,
                                            "data-styles-preset": `MeuOrAryM`,
                                            children: `Work`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                h,
                                y,
                              ),
                            }),
                            x(L, {
                              __fromCanvasComponent: !0,
                              children: x(a, {
                                children: x(A.p, {
                                  className: `framer-styles-preset-1xes9sr`,
                                  "data-styles-preset": `X3lWUYHjB`,
                                  dir: `auto`,
                                  children: x(B, {
                                    href: { webPageId: `EcjikNrmE` },
                                    motionChild: !0,
                                    nodeId: `cKDxdFwTz`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `xfPLO4Dnr`,
                                    smoothScroll: !1,
                                    children: x(A.a, {
                                      className: `framer-styles-preset-1jbmnzg`,
                                      "data-styles-preset": `pOEXxShTO`,
                                      children: `Blogs`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1vfvms7`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `cKDxdFwTz`,
                              verticalAlignment: `top`,
                              whileHover: X,
                              withExternalLayout: !0,
                              ...li(
                                {
                                  Ik_VNvibo: {
                                    children: x(a, {
                                      children: x(A.h5, {
                                        className: `framer-styles-preset-18orp06`,
                                        "data-styles-preset": `d6cdsEYm6`,
                                        dir: `auto`,
                                        children: x(B, {
                                          href: { webPageId: `iMmW2B_8v` },
                                          motionChild: !0,
                                          nodeId: `cKDxdFwTz`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `xfPLO4Dnr`,
                                          smoothScroll: !1,
                                          children: x(A.a, {
                                            className: `framer-styles-preset-u0fp2d`,
                                            "data-styles-preset": `MeuOrAryM`,
                                            children: `Pricing`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                h,
                                y,
                              ),
                            }),
                            x(L, {
                              __fromCanvasComponent: !0,
                              children: x(a, {
                                children: x(A.p, {
                                  className: `framer-styles-preset-1xes9sr`,
                                  "data-styles-preset": `X3lWUYHjB`,
                                  dir: `auto`,
                                  children: x(B, {
                                    href: { webPageId: `FJYgKm7Yp` },
                                    motionChild: !0,
                                    nodeId: `qkJN4oRwE`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `xfPLO4Dnr`,
                                    smoothScroll: !1,
                                    children: x(A.a, {
                                      className: `framer-styles-preset-1jbmnzg`,
                                      "data-styles-preset": `pOEXxShTO`,
                                      children: `Project`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1ujyozl`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `qkJN4oRwE`,
                              verticalAlignment: `top`,
                              whileHover: X,
                              withExternalLayout: !0,
                              ...li(
                                {
                                  Ik_VNvibo: {
                                    children: x(a, {
                                      children: x(A.h5, {
                                        className: `framer-styles-preset-18orp06`,
                                        "data-styles-preset": `d6cdsEYm6`,
                                        dir: `auto`,
                                        children: x(B, {
                                          href: {
                                            hash: `:e2mW3bpRv`,
                                            webPageId: `augiA20Il`,
                                          },
                                          motionChild: !0,
                                          nodeId: `qkJN4oRwE`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `xfPLO4Dnr`,
                                          smoothScroll: !0,
                                          children: x(A.a, {
                                            className: `framer-styles-preset-u0fp2d`,
                                            "data-styles-preset": `MeuOrAryM`,
                                            children: `Service`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                h,
                                y,
                              ),
                            }),
                            x(L, {
                              __fromCanvasComponent: !0,
                              children: x(a, {
                                children: x(A.p, {
                                  className: `framer-styles-preset-1xes9sr`,
                                  "data-styles-preset": `X3lWUYHjB`,
                                  dir: `auto`,
                                  children: x(B, {
                                    href: { webPageId: `iMmW2B_8v` },
                                    motionChild: !0,
                                    nodeId: `aezm3GNP9`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `xfPLO4Dnr`,
                                    smoothScroll: !1,
                                    children: x(A.a, {
                                      className: `framer-styles-preset-1jbmnzg`,
                                      "data-styles-preset": `pOEXxShTO`,
                                      children: `Pricing`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-17rqc6x`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `aezm3GNP9`,
                              verticalAlignment: `top`,
                              whileHover: X,
                              withExternalLayout: !0,
                              ...li(
                                {
                                  Ik_VNvibo: {
                                    children: x(a, {
                                      children: x(A.h5, {
                                        className: `framer-styles-preset-18orp06`,
                                        "data-styles-preset": `d6cdsEYm6`,
                                        dir: `auto`,
                                        children: x(B, {
                                          href: { webPageId: `VS1gZwE1i` },
                                          motionChild: !0,
                                          nodeId: `aezm3GNP9`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `xfPLO4Dnr`,
                                          smoothScroll: !1,
                                          children: x(A.a, {
                                            className: `framer-styles-preset-u0fp2d`,
                                            "data-styles-preset": `MeuOrAryM`,
                                            children: `Contact`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                h,
                                y,
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    ee() &&
                      O(A.div, {
                        className: `framer-11pzzpf`,
                        "data-framer-name": `Link-box`,
                        layoutDependency: E,
                        layoutId: `TEre7DFLj`,
                        children: [
                          x(L, {
                            __fromCanvasComponent: !0,
                            children: x(a, {
                              children: x(A.p, {
                                className: `framer-styles-preset-1mk8z8h`,
                                "data-styles-preset": `sPvC_pCwb`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                },
                                children: `Inner Pages`,
                              }),
                            }),
                            className: `framer-11jyqa3`,
                            fonts: [`Inter`],
                            layoutDependency: E,
                            layoutId: `JKoACbyvU`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          O(A.div, {
                            className: `framer-1dun01a`,
                            "data-framer-name": `Links`,
                            layoutDependency: E,
                            layoutId: `YdpdFDRif`,
                            children: [
                              x(L, {
                                __fromCanvasComponent: !0,
                                children: x(a, {
                                  children: x(A.p, {
                                    className: `framer-styles-preset-1xes9sr`,
                                    "data-styles-preset": `X3lWUYHjB`,
                                    dir: `auto`,
                                    children: x(B, {
                                      href: { webPageId: `VS1gZwE1i` },
                                      motionChild: !0,
                                      nodeId: `qX_kjItns`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `xfPLO4Dnr`,
                                      smoothScroll: !1,
                                      children: x(A.a, {
                                        className: `framer-styles-preset-1jbmnzg`,
                                        "data-styles-preset": `pOEXxShTO`,
                                        children: `Contact`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-fcpe85`,
                                fonts: [`Inter`],
                                layoutDependency: E,
                                layoutId: `qX_kjItns`,
                                verticalAlignment: `top`,
                                whileHover: X,
                                withExternalLayout: !0,
                              }),
                              x(L, {
                                __fromCanvasComponent: !0,
                                children: x(a, {
                                  children: x(A.p, {
                                    className: `framer-styles-preset-1xes9sr`,
                                    "data-styles-preset": `X3lWUYHjB`,
                                    dir: `auto`,
                                    children: x(B, {
                                      href: {
                                        pathVariables: {
                                          L6q2o4xpI: `beacon-career`,
                                        },
                                        unresolvedPathSlugs: {
                                          L6q2o4xpI: {
                                            collectionId: `d0w_cWzte`,
                                            collectionItemId: `BcCareer01`,
                                          },
                                        },
                                        webPageId: `J6Q1AMwXS`,
                                      },
                                      motionChild: !0,
                                      nodeId: `NvHuBuIa3`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `xfPLO4Dnr`,
                                      smoothScroll: !1,
                                      children: x(A.a, {
                                        className: `framer-styles-preset-1jbmnzg`,
                                        "data-styles-preset": `pOEXxShTO`,
                                        children: `Project Details`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-13foflj`,
                                fonts: [`Inter`],
                                layoutDependency: E,
                                layoutId: `NvHuBuIa3`,
                                verticalAlignment: `top`,
                                whileHover: X,
                                withExternalLayout: !0,
                              }),
                              x(L, {
                                __fromCanvasComponent: !0,
                                children: x(a, {
                                  children: x(A.p, {
                                    className: `framer-styles-preset-1xes9sr`,
                                    "data-styles-preset": `X3lWUYHjB`,
                                    dir: `auto`,
                                    children: x(B, {
                                      href: {
                                        pathVariables: {
                                          wV3Lg9DPf: `the-future-of-digital-growth`,
                                        },
                                        unresolvedPathSlugs: {
                                          wV3Lg9DPf: {
                                            collectionId: `htcWKt0sa`,
                                            collectionItemId: `Y0XQdAltF`,
                                          },
                                        },
                                        webPageId: `fJe50lzzQ`,
                                      },
                                      motionChild: !0,
                                      nodeId: `nY1t9HeEg`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `xfPLO4Dnr`,
                                      smoothScroll: !1,
                                      children: x(A.a, {
                                        className: `framer-styles-preset-1jbmnzg`,
                                        "data-styles-preset": `pOEXxShTO`,
                                        children: `Blog Details`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-p1cd3d`,
                                fonts: [`Inter`],
                                layoutDependency: E,
                                layoutId: `nY1t9HeEg`,
                                verticalAlignment: `top`,
                                whileHover: X,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ee() &&
                      O(A.div, {
                        className: `framer-1e77uwm`,
                        "data-framer-name": `Link-box`,
                        layoutDependency: E,
                        layoutId: `XStdplP5Z`,
                        children: [
                          x(L, {
                            __fromCanvasComponent: !0,
                            children: x(a, {
                              children: x(A.p, {
                                className: `framer-styles-preset-1mk8z8h`,
                                "data-styles-preset": `sPvC_pCwb`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                },
                                children: `Utility Pages`,
                              }),
                            }),
                            className: `framer-1cc16gb`,
                            fonts: [`Inter`],
                            layoutDependency: E,
                            layoutId: `zHSrrdvS4`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          x(A.div, {
                            className: `framer-1jopzwo`,
                            "data-framer-name": `Links`,
                            layoutDependency: E,
                            layoutId: `yGrkECGbV`,
                            children: x(L, {
                              __fromCanvasComponent: !0,
                              children: x(a, {
                                children: x(A.p, {
                                  className: `framer-styles-preset-1xes9sr`,
                                  "data-styles-preset": `X3lWUYHjB`,
                                  dir: `auto`,
                                  children: x(B, {
                                    href: { webPageId: `Ki4Zehmjc` },
                                    motionChild: !0,
                                    nodeId: `BxA5xC_7P`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `xfPLO4Dnr`,
                                    smoothScroll: !1,
                                    children: x(A.a, {
                                      className: `framer-styles-preset-1jbmnzg`,
                                      "data-styles-preset": `pOEXxShTO`,
                                      children: `404 Page`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1c54pj6`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `BxA5xC_7P`,
                              verticalAlignment: `top`,
                              whileHover: X,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-IlbAY.framer-12nl9z0, .framer-IlbAY .framer-12nl9z0 { display: block; }`,
          `.framer-IlbAY.framer-hkj0cf { display: grid; gap: 10px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 550px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-IlbAY .framer-1iji9-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-IlbAY .framer-lf9kox { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-IlbAY .framer-3jmavy, .framer-IlbAY .framer-11jyqa3, .framer-IlbAY .framer-1cc16gb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-IlbAY .framer-1czc0v9, .framer-IlbAY .framer-1dun01a, .framer-IlbAY .framer-1jopzwo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-IlbAY .framer-zdfyqu, .framer-IlbAY .framer-1a6jt5w, .framer-IlbAY .framer-1vfvms7, .framer-IlbAY .framer-1ujyozl, .framer-IlbAY .framer-17rqc6x, .framer-IlbAY .framer-fcpe85, .framer-IlbAY .framer-13foflj, .framer-IlbAY .framer-p1cd3d, .framer-IlbAY .framer-1c54pj6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-IlbAY .framer-11pzzpf { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; justify-self: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-IlbAY .framer-1e77uwm { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; justify-self: end; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-IlbAY.framer-v-9tqoli.framer-hkj0cf { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: wrap; gap: 25px 132px; justify-content: flex-start; padding: var(--qboh76); width: 361px; }`,
          `.framer-IlbAY.framer-v-9tqoli .framer-lf9kox { align-self: unset; }`,
          ...et,
          ...it,
          ...Jt,
          ...ni,
          ...oi,
        ],
        `framer-IlbAY`,
      )),
      (Si = xi),
      (xi.displayName = `Dropdown Menu`),
      (xi.defaultProps = { height: 258, width: 550 }),
      U(xi, {
        variant: {
          options: [`HE77F0UB7`, `Ik_VNvibo`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: W.Enum,
        },
        LdvGY9HH1: { defaultValue: `18px`, title: `Padding`, type: W.Padding },
      }),
      fe(
        xi,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ui,
          ...R(tt),
          ...R(at),
          ...R(qt),
          ...R(ti),
          ...R(ai),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Q,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi = e(() => {
    (D(),
      G(),
      M(),
      d(),
      Br(),
      ei(),
      Ci(),
      (wi = N($r)),
      (Ti = N(Si)),
      (Ei = ge(A.div)),
      (Di = N(zr)),
      (Oi = [
        `csGgMo931`,
        `BAAP81_AX`,
        `JOmyKJNfw`,
        `EpkHNVzxC`,
        `bZKDCFSgV`,
        `ME2k1R_q8`,
        `NbLS7NuBL`,
        `mvoG_bSZk`,
      ]),
      (ki = `framer-Fx8F6`),
      (Ai = {
        BAAP81_AX: `framer-v-jp0vz`,
        bZKDCFSgV: `framer-v-1hyyfd5`,
        csGgMo931: `framer-v-vkusw7`,
        EpkHNVzxC: `framer-v-ge7g3m`,
        JOmyKJNfw: `framer-v-aov1y6`,
        ME2k1R_q8: `framer-v-1atk7vm`,
        mvoG_bSZk: `framer-v-sdhb1l`,
        NbLS7NuBL: `framer-v-qmxggf`,
      }),
      (ji = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Mi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ni = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Mi,
        x: 0,
        y: 0,
      }),
      (Pi = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Mi,
        x: 0,
        y: 0,
      }),
      (Fi = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Ii = ({
        children: e,
        blockDocumentScrolling: t,
        dismissWithEsc: n,
        enabled: r = !0,
      }) => {
        let [i, a] = ze({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({
          hide: () => a(!1),
          show: () => a(!0),
          toggle: () => a(!i),
          visible: r && i,
        });
      }),
      (Li = ({ value: e, children: t }) => {
        let n = y(j),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(j.Provider, { value: i, children: t });
      }),
      (Ri = {
        "Dark-phone-open": `mvoG_bSZk`,
        "Dark-phone": `NbLS7NuBL`,
        "Dark-tablet": `ME2k1R_q8`,
        "Phone-open": `EpkHNVzxC`,
        Dark: `bZKDCFSgV`,
        Navbar: `csGgMo931`,
        Phone: `JOmyKJNfw`,
        Tablet: `BAAP81_AX`,
      }),
      (zi = A.create(a)),
      (Bi = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ri[r.variant] ?? r.variant ?? `csGgMo931`,
      })),
      (Vi = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Hi = P(
        f(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: o } = V(),
            s = Me(),
            { style: c, className: l, layoutId: u, variant: d, ...f } = Bi(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = he({
              cycleOrder: Oi,
              defaultVariant: `csGgMo931`,
              ref: r,
              variant: d,
              variantClassNames: Ai,
            }),
            E = Vi(e, T),
            { activeVariantCallback: D, delay: ee } = ye(h),
            k = D(async (...e) => {
              (C({ isPressed: !1 }), w(`JOmyKJNfw`));
            }),
            te = D(async (...e) => {
              (C({ isPressed: !1 }), w(`NbLS7NuBL`));
            }),
            j = ({ overlay: e }) =>
              D(async (...t) => {
                e.show();
              }),
            M = D(async (...e) => {
              w(`EpkHNVzxC`);
            }),
            ie = D(async (...e) => {
              w(`mvoG_bSZk`);
            }),
            ae = I(ki),
            N = () =>
              ![`JOmyKJNfw`, `EpkHNVzxC`, `NbLS7NuBL`, `mvoG_bSZk`].includes(h);
          Ve();
          let oe = b(null),
            P = b(null),
            se = () =>
              !![`JOmyKJNfw`, `EpkHNVzxC`, `NbLS7NuBL`, `mvoG_bSZk`].includes(
                h,
              );
          return x(re, {
            id: u ?? i,
            children: x(zi, {
              animate: T,
              initial: !1,
              children: x(Li, {
                value: ji,
                children: x(A.header, {
                  ...f,
                  ...v,
                  className: I(ae, `framer-vkusw7`, l, g),
                  "data-framer-name": `Navbar`,
                  layoutDependency: E,
                  layoutId: `csGgMo931`,
                  ref: r,
                  style: { ...c },
                  ...Z(
                    {
                      BAAP81_AX: { "data-framer-name": `Tablet` },
                      bZKDCFSgV: { "data-framer-name": `Dark` },
                      EpkHNVzxC: {
                        "data-framer-name": `Phone-open`,
                        "data-highlight": !0,
                        onTap: k,
                      },
                      JOmyKJNfw: { "data-framer-name": `Phone` },
                      ME2k1R_q8: { "data-framer-name": `Dark-tablet` },
                      mvoG_bSZk: {
                        "data-framer-name": `Dark-phone-open`,
                        "data-highlight": !0,
                        onTap: te,
                      },
                      NbLS7NuBL: { "data-framer-name": `Dark-phone` },
                    },
                    h,
                    y,
                  ),
                  children: O(A.div, {
                    className: `framer-1nfj2r5`,
                    "data-framer-name": `Container`,
                    layoutDependency: E,
                    layoutId: `a_hMCEtmn`,
                    children: [
                      O(A.nav, {
                        className: `framer-huxwty`,
                        "data-framer-name": `Wrapper`,
                        layoutDependency: E,
                        layoutId: `k2eEpxcW7`,
                        children: [
                          N() &&
                            x(Ii, {
                              blockDocumentScrolling: !1,
                              dismissWithEsc: !1,
                              children: (e) =>
                                x(m, {
                                  children: x(K, {
                                    links: [
                                      {
                                        href: {
                                          hash: `:OhuOfZacZ`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:OhuOfZacZ`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:OhuOfZacZ`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:OhuOfZacZ`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (t) =>
                                      x(H, {
                                        height: 28,
                                        y:
                                          (s?.y || 0) +
                                          (22 +
                                            ((s?.height || 72) - 44 - 28) / 2) +
                                          0 +
                                          0,
                                        children: O(F, {
                                          className: `framer-1uy9o2o-container`,
                                          id: `${u}-1uy9o2o`,
                                          layoutDependency: E,
                                          layoutId: `YFxD8fXDW-container`,
                                          nodeId: `YFxD8fXDW`,
                                          ref: oe,
                                          rendersWithMotion: !0,
                                          scopeId: `PvoXUMsir`,
                                          children: [
                                            x($r, {
                                              aV6T1529E: 0,
                                              AZPLb_01q: j({ overlay: e }),
                                              b7DktJY8e: `Menu`,
                                              height: `100%`,
                                              id: `YFxD8fXDW`,
                                              layoutId: `YFxD8fXDW`,
                                              ntaYz49mr: !1,
                                              PWcJzNATF: !1,
                                              variant: Q(
                                                e.visible && `Rcr_mPDah`,
                                                e.visible
                                                  ? `Rcr_mPDah`
                                                  : `d2j_Wi4KG`,
                                              ),
                                              width: `100%`,
                                              xpvuxwpEx: t[0],
                                              ...Z(
                                                {
                                                  BAAP81_AX: {
                                                    xpvuxwpEx: t[1],
                                                  },
                                                  bZKDCFSgV: {
                                                    aV6T1529E: 100,
                                                    xpvuxwpEx: t[2],
                                                  },
                                                  ME2k1R_q8: {
                                                    aV6T1529E: 100,
                                                    xpvuxwpEx: t[3],
                                                  },
                                                },
                                                h,
                                                y,
                                              ),
                                            }),
                                            x(ne, {
                                              children:
                                                e.visible &&
                                                x(be, {
                                                  alignment: `start`,
                                                  anchorRef: oe,
                                                  className: I(ae, g),
                                                  collisionDetection: !0,
                                                  collisionDetectionPadding: 20,
                                                  "data-framer-portal-id": `${u}-1uy9o2o`,
                                                  offsetX: 0,
                                                  offsetY: 10,
                                                  onDismiss: e.hide,
                                                  placement: `bottom`,
                                                  safeArea: !0,
                                                  zIndex: 11,
                                                  children: x(Ei, {
                                                    __perspectiveFX: !1,
                                                    __smartComponentFX: !0,
                                                    __targetOpacity: 1,
                                                    animate: Pi,
                                                    className: `framer-ptvygo`,
                                                    exit: Ni,
                                                    initial: Fi,
                                                    layoutDependency: E,
                                                    layoutId: `zPClEcT4i`,
                                                    ref: P,
                                                    role: `dialog`,
                                                    children: x(H, {
                                                      width: `550px`,
                                                      children: x(F, {
                                                        className: `framer-151fvx7-container`,
                                                        inComponentSlot: !0,
                                                        layoutDependency: E,
                                                        layoutId: `CybUTzy4P-container`,
                                                        nodeId: `CybUTzy4P`,
                                                        rendersWithMotion: !0,
                                                        scopeId: `PvoXUMsir`,
                                                        children: x(Si, {
                                                          height: `100%`,
                                                          id: `CybUTzy4P`,
                                                          layoutId: `CybUTzy4P`,
                                                          LdvGY9HH1: `18px`,
                                                          style: {
                                                            width: `100%`,
                                                          },
                                                          variant:
                                                            Q(`HE77F0UB7`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                          ],
                                        }),
                                      }),
                                  }),
                                }),
                            }),
                          N() &&
                            x(K, {
                              links: [
                                {
                                  href: {
                                    hash: `:OhuOfZacZ`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:OhuOfZacZ`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:OhuOfZacZ`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:OhuOfZacZ`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                x(H, {
                                  height: 28,
                                  y:
                                    (s?.y || 0) +
                                    (22 + ((s?.height || 72) - 44 - 28) / 2) +
                                    0 +
                                    0,
                                  children: x(F, {
                                    className: `framer-1aa7p7h-container`,
                                    layoutDependency: E,
                                    layoutId: `S0hU0KdqK-container`,
                                    nodeId: `S0hU0KdqK`,
                                    rendersWithMotion: !0,
                                    scopeId: `PvoXUMsir`,
                                    children: x($r, {
                                      aV6T1529E: 0,
                                      b7DktJY8e: `About`,
                                      height: `100%`,
                                      id: `S0hU0KdqK`,
                                      layoutId: `S0hU0KdqK`,
                                      ntaYz49mr: !1,
                                      PWcJzNATF: !1,
                                      variant: Q(`xWVh7UQV4`),
                                      width: `100%`,
                                      xpvuxwpEx: e[0],
                                      ...Z(
                                        {
                                          BAAP81_AX: { xpvuxwpEx: e[1] },
                                          bZKDCFSgV: {
                                            aV6T1529E: 100,
                                            xpvuxwpEx: e[2],
                                          },
                                          ME2k1R_q8: {
                                            aV6T1529E: 100,
                                            xpvuxwpEx: e[3],
                                          },
                                        },
                                        h,
                                        y,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          N() &&
                            x(K, {
                              links: [
                                {
                                  href: { webPageId: `EcjikNrmE` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `EcjikNrmE` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `EcjikNrmE` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `EcjikNrmE` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                x(H, {
                                  height: 28,
                                  y:
                                    (s?.y || 0) +
                                    (22 + ((s?.height || 72) - 44 - 28) / 2) +
                                    0 +
                                    0,
                                  children: x(F, {
                                    className: `framer-12xdzj9-container`,
                                    layoutDependency: E,
                                    layoutId: `Qf6ZO3Wek-container`,
                                    nodeId: `Qf6ZO3Wek`,
                                    rendersWithMotion: !0,
                                    scopeId: `PvoXUMsir`,
                                    children: x($r, {
                                      aV6T1529E: 0,
                                      b7DktJY8e: `Blog`,
                                      height: `100%`,
                                      id: `Qf6ZO3Wek`,
                                      layoutId: `Qf6ZO3Wek`,
                                      ntaYz49mr: !1,
                                      PWcJzNATF: !1,
                                      variant: Q(`xWVh7UQV4`),
                                      width: `100%`,
                                      xpvuxwpEx: e[0],
                                      ...Z(
                                        {
                                          BAAP81_AX: { xpvuxwpEx: e[1] },
                                          bZKDCFSgV: {
                                            aV6T1529E: 100,
                                            xpvuxwpEx: e[2],
                                          },
                                          ME2k1R_q8: {
                                            aV6T1529E: 100,
                                            xpvuxwpEx: e[3],
                                          },
                                        },
                                        h,
                                        y,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          O(A.div, {
                            className: `framer-1oox0gf`,
                            "data-framer-name": `Logo-wrapper`,
                            layoutDependency: E,
                            layoutId: `CMt4WVqSK`,
                            children: [
                              x(B, {
                                href: { webPageId: `augiA20Il` },
                                motionChild: !0,
                                nodeId: `s3Np05RtF`,
                                openInNewTab: !1,
                                scopeId: `PvoXUMsir`,
                                children: x(Ne, {
                                  as: `a`,
                                  background: {
                                    alt: `logo`,
                                    fit: `fill`,
                                    intrinsicHeight: 1254,
                                    intrinsicWidth: 1254,
                                    loading: ce(
                                      (s?.y || 0) +
                                        (22 +
                                          ((s?.height || 72) - 44 - 28) / 2) +
                                        0 +
                                        4 +
                                        0,
                                    ),
                                    pixelHeight: 1254,
                                    pixelWidth: 1254,
                                    sizes: `100px`,
                                    src: `/assets/logo.png`,
                                  },
                                  className: `framer-1d0ve3k framer-3t7sms`,
                                  "data-framer-name": `Logo`,
                                  fitImageDimension: `height`,
                                  layoutDependency: E,
                                  layoutId: `s3Np05RtF`,
                                  ...Z(
                                    {
                                      bZKDCFSgV: {
                                        background: {
                                          alt: `logo`,
                                          fit: `fill`,
                                          intrinsicHeight: 1254,
                                          intrinsicWidth: 1254,
                                          loading: ce(
                                            (s?.y || 0) +
                                              (22 +
                                                ((s?.height || 72) - 44 - 28) /
                                                  2) +
                                              0 +
                                              4 +
                                              0,
                                          ),
                                          pixelHeight: 1254,
                                          pixelWidth: 1254,
                                          sizes: `100px`,
                                          src: `/assets/logo.png`,
                                        },
                                      },
                                      EpkHNVzxC: {
                                        background: {
                                          alt: `logo`,
                                          fit: `fill`,
                                          intrinsicHeight: 1254,
                                          intrinsicWidth: 1254,
                                          loading: ce(
                                            (s?.y || 0) +
                                              (22 +
                                                ((s?.height || 318) -
                                                  22 -
                                                  298) /
                                                  2) +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          ),
                                          pixelHeight: 1254,
                                          pixelWidth: 1254,
                                          sizes: `100px`,
                                          src: `/assets/logo.png`,
                                        },
                                      },
                                      JOmyKJNfw: {
                                        background: {
                                          alt: `logo`,
                                          fit: `fill`,
                                          intrinsicHeight: 1254,
                                          intrinsicWidth: 1254,
                                          loading: ce(
                                            (s?.y || 0) +
                                              (22 +
                                                ((s?.height || 63) - 22 - 41) /
                                                  2) +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          ),
                                          pixelHeight: 1254,
                                          pixelWidth: 1254,
                                          sizes: `100px`,
                                          src: `/assets/logo.png`,
                                        },
                                      },
                                      ME2k1R_q8: {
                                        background: {
                                          alt: `logo`,
                                          fit: `fill`,
                                          intrinsicHeight: 1254,
                                          intrinsicWidth: 1254,
                                          loading: ce(
                                            (s?.y || 0) +
                                              (22 +
                                                ((s?.height || 72) - 44 - 28) /
                                                  2) +
                                              0 +
                                              4 +
                                              0,
                                          ),
                                          pixelHeight: 1254,
                                          pixelWidth: 1254,
                                          sizes: `100px`,
                                          src: `/assets/logo.png`,
                                        },
                                      },
                                      mvoG_bSZk: {
                                        background: {
                                          alt: `logo`,
                                          fit: `fill`,
                                          intrinsicHeight: 1254,
                                          intrinsicWidth: 1254,
                                          loading: ce(
                                            (s?.y || 0) +
                                              (22 +
                                                ((s?.height || 314) -
                                                  22 -
                                                  298) /
                                                  2) +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          ),
                                          pixelHeight: 1254,
                                          pixelWidth: 1254,
                                          sizes: `100px`,
                                          src: `/assets/logo.png`,
                                        },
                                      },
                                      NbLS7NuBL: {
                                        background: {
                                          alt: `logo`,
                                          fit: `fill`,
                                          intrinsicHeight: 1254,
                                          intrinsicWidth: 1254,
                                          loading: ce(
                                            (s?.y || 0) +
                                              (22 +
                                                ((s?.height || 63) - 22 - 41) /
                                                  2) +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          ),
                                          pixelHeight: 1254,
                                          pixelWidth: 1254,
                                          sizes: `100px`,
                                          src: `/assets/logo.png`,
                                        },
                                      },
                                    },
                                    h,
                                    y,
                                  ),
                                }),
                              }),
                              se() &&
                                x(H, {
                                  ...Z(
                                    {
                                      EpkHNVzxC: {
                                        height: 20,
                                        y:
                                          (s?.y || 0) +
                                          (22 +
                                            ((s?.height || 318) - 22 - 298) /
                                              2) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      JOmyKJNfw: {
                                        height: 20,
                                        y:
                                          (s?.y || 0) +
                                          (22 +
                                            ((s?.height || 63) - 22 - 41) / 2) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      mvoG_bSZk: {
                                        height: 20,
                                        y:
                                          (s?.y || 0) +
                                          (22 +
                                            ((s?.height || 314) - 22 - 298) /
                                              2) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      NbLS7NuBL: {
                                        height: 20,
                                        y:
                                          (s?.y || 0) +
                                          (22 +
                                            ((s?.height || 63) - 22 - 41) / 2) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    h,
                                    y,
                                  ),
                                  children: x(F, {
                                    className: `framer-bkwcq9-container`,
                                    layoutDependency: E,
                                    layoutId: `tjZ1DekxU-container`,
                                    nodeId: `tjZ1DekxU`,
                                    rendersWithMotion: !0,
                                    scopeId: `PvoXUMsir`,
                                    style: {
                                      filter: `none`,
                                      WebkitFilter: `none`,
                                    },
                                    variants: {
                                      mvoG_bSZk: {
                                        filter: `invert(1)`,
                                        WebkitFilter: `invert(1)`,
                                      },
                                      NbLS7NuBL: {
                                        filter: `invert(1)`,
                                        WebkitFilter: `invert(1)`,
                                      },
                                    },
                                    children: x(zr, {
                                      height: `100%`,
                                      id: `tjZ1DekxU`,
                                      layoutId: `tjZ1DekxU`,
                                      variant: Q(`MVgu8BvPt`),
                                      width: `100%`,
                                      ...Z(
                                        {
                                          EpkHNVzxC: {
                                            variant: Q(`QyrBcFS6M`),
                                          },
                                          JOmyKJNfw: { jP9xEPjYz: M },
                                          mvoG_bSZk: {
                                            variant: Q(`QyrBcFS6M`),
                                          },
                                          NbLS7NuBL: { jP9xEPjYz: ie },
                                        },
                                        h,
                                        y,
                                      ),
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          N() &&
                            x(K, {
                              links: [
                                {
                                  href: { webPageId: `FJYgKm7Yp` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `FJYgKm7Yp` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `FJYgKm7Yp` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `FJYgKm7Yp` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                x(H, {
                                  height: 28,
                                  y:
                                    (s?.y || 0) +
                                    (22 + ((s?.height || 72) - 44 - 28) / 2) +
                                    0 +
                                    0,
                                  children: x(F, {
                                    className: `framer-1su1fd5-container`,
                                    layoutDependency: E,
                                    layoutId: `dsxMsua7P-container`,
                                    nodeId: `dsxMsua7P`,
                                    rendersWithMotion: !0,
                                    scopeId: `PvoXUMsir`,
                                    children: x($r, {
                                      aV6T1529E: 0,
                                      b7DktJY8e: `Project`,
                                      height: `100%`,
                                      id: `dsxMsua7P`,
                                      layoutId: `dsxMsua7P`,
                                      ntaYz49mr: !1,
                                      PWcJzNATF: !1,
                                      variant: Q(`xWVh7UQV4`),
                                      width: `100%`,
                                      xpvuxwpEx: e[0],
                                      ...Z(
                                        {
                                          BAAP81_AX: { xpvuxwpEx: e[1] },
                                          bZKDCFSgV: {
                                            aV6T1529E: 100,
                                            xpvuxwpEx: e[2],
                                          },
                                          ME2k1R_q8: {
                                            aV6T1529E: 100,
                                            xpvuxwpEx: e[3],
                                          },
                                        },
                                        h,
                                        y,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          N() &&
                            x(K, {
                              links: [
                                {
                                  href: { webPageId: `iMmW2B_8v` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `iMmW2B_8v` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `iMmW2B_8v` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `iMmW2B_8v` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                x(H, {
                                  height: 28,
                                  y:
                                    (s?.y || 0) +
                                    (22 + ((s?.height || 72) - 44 - 28) / 2) +
                                    0 +
                                    0,
                                  children: x(F, {
                                    className: `framer-10n59nr-container`,
                                    layoutDependency: E,
                                    layoutId: `Eyvr6YHR3-container`,
                                    nodeId: `Eyvr6YHR3`,
                                    rendersWithMotion: !0,
                                    scopeId: `PvoXUMsir`,
                                    children: x($r, {
                                      aV6T1529E: 0,
                                      b7DktJY8e: `Pricing`,
                                      height: `100%`,
                                      id: `Eyvr6YHR3`,
                                      layoutId: `Eyvr6YHR3`,
                                      ntaYz49mr: !1,
                                      PWcJzNATF: !1,
                                      variant: Q(`xWVh7UQV4`),
                                      width: `100%`,
                                      xpvuxwpEx: e[0],
                                      ...Z(
                                        {
                                          BAAP81_AX: { xpvuxwpEx: e[1] },
                                          bZKDCFSgV: {
                                            aV6T1529E: 100,
                                            xpvuxwpEx: e[2],
                                          },
                                          ME2k1R_q8: {
                                            aV6T1529E: 100,
                                            xpvuxwpEx: e[3],
                                          },
                                        },
                                        h,
                                        y,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          N() &&
                            x(K, {
                              links: [
                                {
                                  href: { webPageId: `VS1gZwE1i` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `VS1gZwE1i` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `VS1gZwE1i` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `VS1gZwE1i` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                x(H, {
                                  height: 28,
                                  y:
                                    (s?.y || 0) +
                                    (22 + ((s?.height || 72) - 44 - 28) / 2) +
                                    0 +
                                    0,
                                  children: x(F, {
                                    className: `framer-hjj6sj-container`,
                                    layoutDependency: E,
                                    layoutId: `ZsbUYaI19-container`,
                                    nodeId: `ZsbUYaI19`,
                                    rendersWithMotion: !0,
                                    scopeId: `PvoXUMsir`,
                                    children: x($r, {
                                      aV6T1529E: 0,
                                      b7DktJY8e: `Contact`,
                                      height: `100%`,
                                      id: `ZsbUYaI19`,
                                      layoutId: `ZsbUYaI19`,
                                      ntaYz49mr: !1,
                                      PWcJzNATF: !1,
                                      variant: Q(`xWVh7UQV4`),
                                      width: `100%`,
                                      xpvuxwpEx: e[0],
                                      ...Z(
                                        {
                                          BAAP81_AX: { xpvuxwpEx: e[1] },
                                          bZKDCFSgV: {
                                            aV6T1529E: 100,
                                            xpvuxwpEx: e[2],
                                          },
                                          ME2k1R_q8: {
                                            aV6T1529E: 100,
                                            xpvuxwpEx: e[3],
                                          },
                                        },
                                        h,
                                        y,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                        ],
                      }),
                      se() &&
                        x(H, {
                          ...Z(
                            {
                              EpkHNVzxC: {
                                height: 258,
                                width: `calc(min(max(${s?.width || `100vw`} - 10px, 1px), 1440px) - 32px)`,
                                y:
                                  (s?.y || 0) +
                                  (22 + ((s?.height || 318) - 22 - 298) / 2) +
                                  0 +
                                  40,
                              },
                              JOmyKJNfw: {
                                height: 1,
                                width: `calc(min(max(${s?.width || `100vw`} - 10px, 1px), 1440px) - 32px)`,
                                y:
                                  (s?.y || 0) +
                                  (22 + ((s?.height || 63) - 22 - 41) / 2) +
                                  0 +
                                  40,
                              },
                              mvoG_bSZk: {
                                height: 258,
                                width: `min(max(${s?.width || `100vw`}, 1px), 1440px)`,
                                y:
                                  (s?.y || 0) +
                                  (22 + ((s?.height || 314) - 22 - 298) / 2) +
                                  0 +
                                  40,
                              },
                              NbLS7NuBL: {
                                height: 1,
                                width: `min(max(${s?.width || `100vw`}, 1px), 1440px)`,
                                y:
                                  (s?.y || 0) +
                                  (22 + ((s?.height || 63) - 22 - 41) / 2) +
                                  0 +
                                  40,
                              },
                            },
                            h,
                            y,
                          ),
                          children: x(F, {
                            className: `framer-1h85ddq-container`,
                            layoutDependency: E,
                            layoutId: `u4am6XZ6t-container`,
                            nodeId: `u4am6XZ6t`,
                            rendersWithMotion: !0,
                            scopeId: `PvoXUMsir`,
                            style: { opacity: 1 },
                            variants: {
                              EpkHNVzxC: { opacity: 1 },
                              JOmyKJNfw: { opacity: 0 },
                              mvoG_bSZk: { opacity: 1 },
                              NbLS7NuBL: { opacity: 1 },
                            },
                            children: x(Si, {
                              height: `100%`,
                              id: `u4am6XZ6t`,
                              layoutId: `u4am6XZ6t`,
                              LdvGY9HH1: `18px`,
                              style: { height: `100%`, width: `100%` },
                              variant: Q(`Ik_VNvibo`),
                              width: `100%`,
                              ...Z(
                                {
                                  EpkHNVzxC: {
                                    LdvGY9HH1: `20px`,
                                    style: { width: `100%` },
                                  },
                                  JOmyKJNfw: { LdvGY9HH1: `0px 18px 0px 18px` },
                                  mvoG_bSZk: { style: { width: `100%` } },
                                  NbLS7NuBL: { LdvGY9HH1: `0px 18px 0px 18px` },
                                },
                                h,
                                y,
                              ),
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Fx8F6.framer-3t7sms, .framer-Fx8F6 .framer-3t7sms { display: block; }`,
          `.framer-Fx8F6.framer-vkusw7 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 22px 64px 22px 64px; position: relative; width: 1200px; }`,
          `.framer-Fx8F6 .framer-1nfj2r5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Fx8F6 .framer-huxwty { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Fx8F6 .framer-1uy9o2o-container { cursor: default; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-Fx8F6 .framer-ptvygo { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-Fx8F6 .framer-151fvx7-container { flex: none; height: auto; position: relative; width: 550px; }`,
          `.framer-Fx8F6 .framer-1aa7p7h-container, .framer-Fx8F6 .framer-12xdzj9-container, .framer-Fx8F6 .framer-bkwcq9-container, .framer-Fx8F6 .framer-1su1fd5-container, .framer-Fx8F6 .framer-10n59nr-container, .framer-Fx8F6 .framer-hjj6sj-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-Fx8F6 .framer-1oox0gf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Fx8F6 .framer-1d0ve3k { flex: none; height: auto; overflow: visible; position: relative; text-decoration: none; width: 79px; }`,
          `.framer-Fx8F6 .framer-1h85ddq-container { flex: 1 0 0px; height: 1px; position: relative; width: 1px; }`,
          `.framer-Fx8F6.framer-v-jp0vz.framer-vkusw7, .framer-Fx8F6.framer-v-1atk7vm.framer-vkusw7 { padding: 22px 16px 22px 16px; width: 810px; }`,
          `.framer-Fx8F6.framer-v-aov1y6.framer-vkusw7 { overflow: hidden; padding: 22px 5px 0px 5px; width: 390px; }`,
          `.framer-Fx8F6.framer-v-aov1y6 .framer-1nfj2r5, .framer-Fx8F6.framer-v-ge7g3m .framer-1nfj2r5 { flex-direction: column; gap: 20px; justify-content: flex-start; padding: 0px 16px 0px 16px; }`,
          `.framer-Fx8F6.framer-v-aov1y6 .framer-huxwty, .framer-Fx8F6.framer-v-aov1y6 .framer-1h85ddq-container, .framer-Fx8F6.framer-v-ge7g3m .framer-huxwty, .framer-Fx8F6.framer-v-qmxggf .framer-huxwty, .framer-Fx8F6.framer-v-qmxggf .framer-1h85ddq-container, .framer-Fx8F6.framer-v-sdhb1l .framer-huxwty { flex: none; width: 100%; }`,
          `.framer-Fx8F6.framer-v-aov1y6 .framer-1oox0gf, .framer-Fx8F6.framer-v-ge7g3m .framer-1oox0gf { flex: 1 0 0px; gap: unset; justify-content: space-between; width: 1px; }`,
          `.framer-Fx8F6.framer-v-ge7g3m.framer-vkusw7 { cursor: pointer; overflow: hidden; padding: 22px 5px 0px 5px; width: 390px; }`,
          `.framer-Fx8F6.framer-v-ge7g3m .framer-1h85ddq-container, .framer-Fx8F6.framer-v-sdhb1l .framer-1h85ddq-container { flex: none; height: auto; width: 100%; }`,
          `.framer-Fx8F6.framer-v-qmxggf.framer-vkusw7 { overflow: hidden; padding: 22px 0px 0px 0px; width: 390px; }`,
          `.framer-Fx8F6.framer-v-qmxggf .framer-1nfj2r5, .framer-Fx8F6.framer-v-sdhb1l .framer-1nfj2r5 { flex-direction: column; gap: 20px; justify-content: flex-start; }`,
          `.framer-Fx8F6.framer-v-qmxggf .framer-1oox0gf, .framer-Fx8F6.framer-v-sdhb1l .framer-1oox0gf { flex: 1 0 0px; gap: unset; justify-content: space-between; padding: 0px 16px 0px 16px; width: 1px; }`,
          `.framer-Fx8F6.framer-v-sdhb1l.framer-vkusw7 { cursor: pointer; overflow: hidden; padding: 22px 0px 0px 0px; width: 390px; }`,
        ],
        `framer-Fx8F6`,
      )),
      (Ui = Hi),
      (Hi.displayName = `Navbar`),
      (Hi.defaultProps = { height: 72, width: 1200 }),
      U(Hi, {
        variant: {
          options: [
            `csGgMo931`,
            `BAAP81_AX`,
            `JOmyKJNfw`,
            `EpkHNVzxC`,
            `bZKDCFSgV`,
            `ME2k1R_q8`,
            `NbLS7NuBL`,
            `mvoG_bSZk`,
          ],
          optionTitles: [
            `Navbar`,
            `Tablet`,
            `Phone`,
            `Phone-open`,
            `Dark`,
            `Dark-tablet`,
            `Dark-phone`,
            `Dark-phone-open`,
          ],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      fe(Hi, [{ explicitInter: !0, fonts: [] }, ...wi, ...Ti, ...Di], {
        supportsExplicitInterCodegen: !0,
      }),
      (Hi.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([me($r, {}, t), me(Si, {}, t), me(zr, {}, t)])
        ),
      }));
  }),
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  $,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la = e(() => {
    (D(),
      G(),
      M(),
      d(),
      Vt(),
      Dr(),
      Wi(),
      (Gi = N(Bt)),
      (Ki = N(Ui)),
      (qi = N(Er)),
      (Ji = {
        eolI8L73e: `(min-width: 1200px)`,
        m0JAl4X0R: `(min-width: 810px) and (max-width: 1199.98px)`,
        zsw0X5lLL: `(max-width: 809.98px)`,
      }),
      (Yi = `framer-xunHB`),
      (Xi = {
        eolI8L73e: `framer-v-13vsk3m`,
        m0JAl4X0R: `framer-v-cf06cs`,
        zsw0X5lLL: `framer-v-1simmyg`,
      }),
      (Zi = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Qi = {}),
      ($i = Object.keys(Qi)),
      (ea = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-xunHB.framer-hbjutr, .framer-xunHB .framer-hbjutr { display: block; }`,
        `.framer-xunHB.framer-13vsk3m { align-content: center; align-items: center; background-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: var(--1ot41jm); position: relative; width: 100%; }`,
        `.framer-xunHB .framer-jw5z43-container { flex: none; height: auto; left: 50%; order: -1000; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-xunHB .framer-746shi-container { flex: none; height: auto; left: 0px; order: -999; position: absolute; right: 0px; top: 0px; z-index: 10; }`,
        `.framer-xunHB .framer-1jeo7cz-container { flex: none; height: auto; left: 0px; order: -998; position: absolute; right: 0px; top: 0px; z-index: 10; }`,
        `.framer-xunHB .framer-1i3mwar { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-xunHB .framer-16hmyha-container { flex: none; height: auto; order: 1004; position: relative; width: 100%; z-index: 2; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (ta = {
        eolI8L73e: `(min-width: 1200px)`,
        m0JAl4X0R: `(min-width: 810px) and (max-width: 1199.98px)`,
        zsw0X5lLL: `(max-width: 809.98px)`,
      }),
      (na = { Desktop: `eolI8L73e`, Phone: `zsw0X5lLL`, Tablet: `m0JAl4X0R` }),
      (ra = ({ value: e }) =>
        Te()
          ? null
          : x(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (ia = ({
        darkNavbarVisible: e,
        footerPadding: t,
        height: n,
        id: r,
        lightNavbarVisible: i,
        padding: a,
        width: o,
        ...s
      }) => ({
        ...s,
        BxChIjgEq: t ?? s.BxChIjgEq ?? `5px 5px 5px 5px`,
        iZddRwwr2: a ?? s.iZddRwwr2 ?? `0px`,
        rpCJHTIxz: i ?? s.rpCJHTIxz ?? !0,
        variant: na[s.variant] ?? s.variant ?? `eolI8L73e`,
        yni8XnkCs: e ?? s.yni8XnkCs,
      })),
      (aa = f(function (e, t) {
        let n = b(null),
          r = t ?? n,
          i = p(),
          { activeLocale: a, setLocale: o } = V(),
          {
            style: s,
            className: c,
            layoutId: l,
            variant: u,
            rpCJHTIxz: d,
            yni8XnkCs: f,
            BxChIjgEq: m,
            iZddRwwr2: h,
            children: g,
            ..._
          } = ia(e),
          [v, y] = Le(u, Ji, !1),
          S = I(Yi),
          C =
            typeof h == `string`
              ? ie(h)
              : { top: h, right: h, bottom: h, left: h };
        return (
          ke({}),
          x(Se.Provider, {
            value: {
              activeVariantId: v,
              humanReadableVariantMap: na,
              isLayoutTemplate: !0,
              primaryVariantId: `eolI8L73e`,
              variantClassNames: Xi,
            },
            children: O(re, {
              id: l ?? i,
              children: [
                x(ra, {
                  value: `:root body { background: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)); }`,
                }),
                O(A.div, {
                  ..._,
                  className: I(S, `framer-13vsk3m`, c),
                  "data-layout-template": !0,
                  ref: r,
                  style: { "--1ot41jm": Zi(h), ...s },
                  children: [
                    x(H, {
                      children: x(ve, {
                        className: `framer-jw5z43-container`,
                        "data-framer-layout-hint-center-x": !0,
                        "data-framer-name": `Lenis Smooth Scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        name: `Lenis Smooth Scroll`,
                        nodeId: `DggLIXmKC`,
                        scopeId: `uTGXWvr67`,
                        children: x(Bt, {
                          height: `100%`,
                          id: `DggLIXmKC`,
                          infinite: !1,
                          intensity: 10,
                          layoutId: `DggLIXmKC`,
                          name: `Lenis Smooth Scroll`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                    d !== !1 &&
                      x(H, {
                        height: 72,
                        width: `100vw`,
                        y: 0,
                        children: x(ve, {
                          className: `framer-746shi-container`,
                          nodeId: `RNi7WuypR`,
                          scopeId: `uTGXWvr67`,
                          children: x(Be, {
                            breakpoint: v,
                            overrides: {
                              m0JAl4X0R: { variant: $(`BAAP81_AX`) },
                              zsw0X5lLL: { variant: $(`JOmyKJNfw`) },
                            },
                            children: x(Ui, {
                              height: `100%`,
                              id: `RNi7WuypR`,
                              layoutId: `RNi7WuypR`,
                              style: { width: `100%` },
                              variant: $(`csGgMo931`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    f !== !1 &&
                      x(H, {
                        height: 72,
                        width: `100vw`,
                        y: 0,
                        children: x(ve, {
                          className: `framer-1jeo7cz-container`,
                          nodeId: `CAOk4r3C6`,
                          scopeId: `uTGXWvr67`,
                          children: x(Be, {
                            breakpoint: v,
                            overrides: {
                              m0JAl4X0R: { variant: $(`ME2k1R_q8`) },
                              zsw0X5lLL: { variant: $(`NbLS7NuBL`) },
                            },
                            children: x(Ui, {
                              height: `100%`,
                              id: `CAOk4r3C6`,
                              layoutId: `CAOk4r3C6`,
                              style: { width: `100%` },
                              variant: $(`bZKDCFSgV`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    g,
                    x(`div`, { className: `framer-1i3mwar` }),
                    x(H, {
                      height: 1029,
                      width: `calc(100vw - ${(C?.left ?? 0) + (C?.right ?? 0)}px)`,
                      children: x(ve, {
                        className: `framer-16hmyha-container`,
                        nodeId: `XAIenwEwo`,
                        scopeId: `uTGXWvr67`,
                        children: x(Be, {
                          breakpoint: v,
                          overrides: {
                            m0JAl4X0R: { variant: $(`Qx2motbdi`) },
                            zsw0X5lLL: { variant: $(`yTVprz8Xg`) },
                          },
                          children: x(Er, {
                            height: `100%`,
                            id: `XAIenwEwo`,
                            layoutId: `XAIenwEwo`,
                            MJ9wNtvcF: Zi(m),
                            style: { width: `100%` },
                            variant: $(`x7O0Dj9mb`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                x(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (oa = (e) =>
        e === oe.canvas || e === oe.export
          ? [
              ...ea,
              ...$i.flatMap((e) => {
                let t = Qi[e];
                return Qi[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [
              ...ea,
              ...$i.map((e) => `@media ${ta[e]} { ${Qi[e].join(` `)} }`),
            ]),
      (sa = P(aa, oa, `framer-xunHB`)),
      (ca = sa),
      (sa.displayName = `Main`),
      (sa.defaultProps = { height: 2542, width: 1200 }),
      U(sa, {
        rpCJHTIxz: {
          defaultValue: !0,
          title: `Light Navbar Visible`,
          type: W.Boolean,
        },
        yni8XnkCs: {
          defaultValue: !1,
          title: `Dark Navbar Visible`,
          type: W.Boolean,
        },
        BxChIjgEq: {
          defaultValue: `5px 5px 5px 5px`,
          title: `Footer Padding`,
          type: W.Padding,
        },
        iZddRwwr2: { defaultValue: `0px`, title: `Padding`, type: W.Padding },
      }),
      fe(sa, [{ explicitInter: !0, fonts: [] }, ...Gi, ...Ki, ...qi], {
        supportsExplicitInterCodegen: !0,
      }),
      (sa.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([me(Ui, {}, t), me(Er, {}, t)])
        ),
      }));
  });
function ua({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      BxChIjgEq: `5px 5px 5px 5px`,
      iZddRwwr2: `0px`,
      rpCJHTIxz: !0,
      yni8XnkCs: !1,
    },
    a = { ...i, rpCJHTIxz: !1, yni8XnkCs: !0 },
    o =
      {
        augiA20Il: i,
        EcjikNrmE: i,
        fJe50lzzQ: a,
        FJYgKm7Yp: i,
        iMmW2B_8v: i,
        J6Q1AMwXS: a,
        Ki4Zehmjc: a,
        VS1gZwE1i: {
          ...i,
          BxChIjgEq: `0px 0px 5px 0px`,
          iZddRwwr2: `116px 5px 5px 5px`,
        },
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `FJYgKm7Yp`:
    case `iMmW2B_8v`:
    case `Ki4Zehmjc`:
    case `VS1gZwE1i`:
    case `EcjikNrmE`:
    case `J6Q1AMwXS`:
    case `fJe50lzzQ`:
      return h(ca, { ...o, key: `Main`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function da(e) {
  switch (e) {
    case `augiA20Il`:
    case `FJYgKm7Yp`:
    case `iMmW2B_8v`:
    case `Ki4Zehmjc`:
    case `VS1gZwE1i`:
    case `EcjikNrmE`:
    case `J6Q1AMwXS`:
    case `fJe50lzzQ`:
      return [
        { hash: `13vsk3m`, mediaQuery: `(min-width: 1200px)` },
        {
          hash: `cf06cs`,
          mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
        },
        { hash: `1simmyg`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function fa({
  routeId: e,
  pathVariables: t,
  localeId: i,
  collectionItemId: s,
}) {
  let u = ha[e].page.preload(),
    d = h(Re, {
      children: h(we, {
        children: h(Ee, {
          children: h(He, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: t,
            routes: ha,
            collectionUtils: _a,
            framerSiteId: va,
            notFoundPage: z(
              () =>
                import(
                  `./Op67goKJP1k8Ghoy0BusNmh_p50FYaqDEmegXYkbHWA.AhLD2NQ2.mjs`
                ),
            ),
            isReducedMotion: void 0,
            localeId: i,
            locales: ga,
            preserveQueryParams: void 0,
            siteCanonicalURL: `https://zync.framer.ai`,
            EditorBar:
              n === void 0
                ? void 0
                : (() => {
                    if (ba) {
                      console.log(
                        `[Framer On-Page Editing] Unavailable because navigator is bot`,
                      );
                      return;
                    }
                    return z(async () => {
                      n.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: {
                          useCurrentRoute: xe,
                          useLocaleInfo: V,
                          useRouter: Ve,
                        },
                        react: {
                          createElement: h,
                          Fragment: a,
                          memo: g,
                          useCallback: c,
                          useEffect: l,
                          useRef: b,
                          useState: o,
                          useLayoutEffect: r,
                        },
                        "react-dom": { createPortal: v },
                      };
                      let { createEditorBar: e } = await import(
                        `https://framer.com/edit/init.mjs`
                      );
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !0,
            LayoutTemplate: ua,
            loadSnippetsModule: new Ae(
              () =>
                import(
                  `./P0AD6qnH8H4-8fYF-jZazEDxZf8zDOcjQnA4JAjr6zM.BnZvzCaj.mjs`
                ),
            ),
            initialCollectionItemId: s,
          }),
          value: {
            autobahnNavigation: !0,
            disableCustomCode: !1,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !0,
            onPageMoveTool: !0,
            synchronousNavigationOnDesktop: !1,
            yieldOnTap: !1,
          },
        }),
      }),
      value: {
        global: {
          enter: {
            mask: { angle: 270, type: `wipe`, width: `100%` },
            opacity: 1,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.4,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `0px`,
          },
        },
        routes: {},
      },
    });
  return (await u, d);
}
function pa() {
  ya && n.__framer_events.push(arguments);
}
async function ma(e, t) {
  function r(e, t, r = !0) {
    if (e.caught || n.__framer_hadFatalError) return;
    let i = t?.componentStack;
    if (r) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          i,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        i,
      );
    pa(
      r ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: i,
        stack: i
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
            ? e.stack
            : null,
      },
    );
  }
  try {
    let i, a, o, s, c;
    if (e)
      ((c = JSON.parse(t.dataset.framerHydrateV2)),
        (i = c.routeId),
        (a = c.localeId),
        (o = c.pathVariables),
        (s = c.breakpoints),
        (i = Ce(ha, i)));
    else {
      Ce(ha, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((i = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries())
          e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!i || !a) {
        let e = se(ha, decodeURIComponent(location.pathname), !0, ga);
        ((i = e.routeId), (a = e.localeId), (o = e.pathVariables));
      }
    }
    let l = fa({
      routeId: i,
      localeId: a,
      pathVariables: o,
      collectionItemId: c?.collectionItemId,
    });
    n !== void 0 &&
      (async () => {
        let e = ha[i],
          t = ga.find(({ id: e }) => (a ? e === a : e === `default`)).code,
          r = c?.collectionItemId ?? null;
        if (r === null && e?.collectionId && _a) {
          let n = await _a[e.collectionId]?.(),
            [i] = Object.values(o);
          n &&
            typeof i == `string` &&
            (r = (await n.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let s = Intl.DateTimeFormat().resolvedOptions(),
          l = s.timeZone,
          u = s.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          n.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: va ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: r,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? i,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: n.location.href,
              hostname: n.location.hostname || null,
              pathname: n.location.pathname || null,
              hash: n.location.hash || null,
              search: n.location.search || null,
              timezone: l,
              locale: u,
            },
            `eager`,
          ]),
          await ae({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: t || null },
            }),
          ));
      })();
    let u = await l;
    e
      ? (pe(`framer-rewrite-breakpoints`, () => {
          (je(s), n.__framer_onRewriteBreakpoints?.(s));
        }),
        (ba ? (e) => e() : k)(() => {
          (_e(), De(), ee(t, u, { onRecoverableError: r }));
        }))
      : E(t, { onRecoverableError: r }).render(u);
  } catch (e) {
    throw (r(e, void 0, !1), e);
  }
}
var ha, ga, _a, va, ya, ba;
e(() => {
  if (
    (u(),
    G(),
    d(),
    w(),
    C(),
    la(),
    (ha = {
      augiA20Il: {
        elements: { e2mW3bpRv: `service`, OhuOfZacZ: `about` },
        page: z(
          () =>
            import(
              `./aEm5oIsGAVJkf55dnGsmlYQ5pRhowQgvWMRQDd4suwU.Da80wz19.mjs`
            ),
        ),
        path: `/`,
      },
      FJYgKm7Yp: {
        elements: {},
        page: z(
          () =>
            import(
              `./mqvdOP-WwqvHSAZy7IiQSGngcVaJu2aEwkvALm5pSbk.D0cCDoep.mjs`
            ),
        ),
        path: `/projects`,
      },
      iMmW2B_8v: {
        elements: {},
        page: z(
          () =>
            import(
              `./lz8tthlp0kQrAlKFG5GqTQCELAXO2Zfk8-smSAGz8oQ.CGYROii2.mjs`
            ),
        ),
        path: `/pricing`,
      },
      Ki4Zehmjc: {
        elements: {},
        page: z(
          () =>
            import(
              `./Op67goKJP1k8Ghoy0BusNmh_p50FYaqDEmegXYkbHWA.AhLD2NQ2.mjs`
            ),
        ),
        path: `/404`,
      },
      VS1gZwE1i: {
        elements: {},
        page: z(
          () =>
            import(
              `./pCQvB3KlKiaaXIgjMsreT8ge0WH4iuOgeBbP4e_vqeY.Dz4tHT3T.mjs`
            ),
        ),
        path: `/contact`,
      },
      EcjikNrmE: {
        elements: {},
        page: z(
          () =>
            import(
              `./h_sWEzKvAp-7bbGGjH01GLcKi8O2rIRFPBzSU7a8f7s.BkljwzdV.mjs`
            ),
        ),
        path: `/blogs`,
      },
      J6Q1AMwXS: {
        collectionId: `d0w_cWzte`,
        elements: {},
        page: z(
          () =>
            import(
              `./ahR_9aupI-jyc9k71PYK8N2eFgCZCeCXtjnc32jkY-Y.VzdJo9Ek.mjs`
            ),
        ),
        path: `/projects/:L6q2o4xpI`,
      },
      fJe50lzzQ: {
        collectionId: `htcWKt0sa`,
        elements: { JHkDeJBbv: `blogs` },
        page: z(
          () =>
            import(
              `./TJAvw0ipermtouVMsWGoDzwszQ7IG5071dBat2QsLLg.harLqa3_.mjs`
            ),
        ),
        path: `/blogs/:wV3Lg9DPf`,
      },
    }),
    (ga = [
      {
        code: `en`,
        id: `default`,
        name: `English`,
        slug: ``,
        textDirection: `ltr`,
      },
    ]),
    (_a = {
      d0w_cWzte: async () =>
        (
          await import(
            `./sNqPWK5mU9254EYZ80CwM5L5AhUB4xq7gAQRKPI1K-o.DWK15YRR.mjs`
          )
        )?.utils,
      htcWKt0sa: async () =>
        (
          await import(
            `./-kjof1XX6VuR3Hbt8qb0pVWi7RPAKANT-2oAVIk3rz0.BZrMtsyM.mjs`
          )
        )?.utils,
    }),
    (va = `969f682f408fc879aeb9fb52736a2c38c7825e43912522a6194a25bfc3ef1fa5`),
    (ya = typeof document < `u`),
    (ba =
      ya &&
      /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
        te.userAgent,
      )),
    ya)
  ) {
    ((n.__framer_importFromPackage = (e, t) => () =>
      h(Fe, {
        error: `Package component not supported: "` + t + `" in "` + e + `"`,
      })),
      (n.__framer_events = n.__framer_events || []),
      ue(),
      le());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? ma(!0, e) : ma(!1, e);
  }
  (function () {
    ya &&
      k(() => {
        ee(
          document.getElementById(`__framer-badge-container`),
          h(_, {}, h(S(() => import(`./PX9hIOIVM.auf6V806.mjs`)))),
        );
      });
  })();
})();
export { da as getLayoutTemplateBreakpoints, fa as getPageRoot };
//# sourceMappingURL=script_main.DkpS-PXN.mjs.map
