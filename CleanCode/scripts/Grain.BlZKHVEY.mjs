import { t as e } from "./rolldown-runtime.DsXBSD_B.mjs";
import { l as t, s as n } from "./react.CUuwdGgG.mjs";
import { C as r } from "./motion.yFoJz7cr.mjs";
import { C as i, k as a, o, q as s } from "./framer.uWP7Qtvw.mjs";
var c,
  l = e(() => {
    c = (e, t, n) => Math.min(Math.max(n, e), t);
  }),
  u,
  d = e(() => {
    (l(),
      (u =
        (e, t = `end`) =>
        (n) => {
          n = t === `end` ? Math.min(n, 0.999) : Math.max(n, 0.001);
          let r = n * e;
          return c(0, 1, (t === `end` ? Math.floor(r) : Math.ceil(r)) / e);
        }));
  });
function f({
  animate: e,
  animationSpeed: n,
  opacity: a,
  grainSize: o,
  style: s,
}) {
  let c = i.current() === i.canvas,
    l = [`0%`, `-5%`, `-15%`, `7%`, `-5%`, `-15%`, `15%`, `0%`, `3%`, `-10%`],
    d = [`0%`, `-10%`, `5%`, `-25%`, `25%`, `10%`, `0%`, `15%`, `35%`, `10%`],
    f = {
      background: `url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')`,
      backgroundSize: `${o}px ${o}px`,
      backgroundRepeat: `repeat`,
      position: `absolute`,
      inset: c ? 0 : `-200%`,
      width: c ? `100%` : `400%`,
      height: c ? `100%` : `400%`,
      opacity: a,
    };
  return t(`div`, {
    style: {
      width: `100%`,
      height: `100%`,
      position: `relative`,
      overflow: `hidden`,
      ...s,
    },
    children: t(r.div, {
      style: f,
      animate: !c && e ? { x: l, y: d } : undefined,
      transition: { ease: u(10, `start`), repeat: Infinity, duration: 8 / n },
    }),
  });
}
var p = e(() => {
  (n(),
    s(),
    d(),
    (f.defaultProps = {
      animate: true,
      animationSpeed: 1,
      opacity: 0.25,
      grainSize: 250,
    }),
    a(f, {
      animate: { title: `Animate`, type: o.Boolean, defaultValue: true },
      animationSpeed: {
        title: `Speed`,
        type: o.Number,
        min: 0.1,
        max: 3,
        step: 0.1,
        defaultValue: 1,
        displayStepper: true,
        hidden: (e) => !e.animate,
      },
      opacity: {
        title: `Opacity`,
        type: o.Number,
        step: 0.01,
        displayStepper: true,
        max: 1,
        min: 0,
        defaultValue: 0.25,
      },
      grainSize: {
        title: `Size`,
        type: o.Number,
        min: 50,
        max: 550,
        step: 10,
        defaultValue: 250,
        unit: `px`,
      },
    }));
});
export { p as n, f as t };
