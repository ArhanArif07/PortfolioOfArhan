import { t as e } from "./rolldown-runtime.DsXBSD_B.mjs";
import {
  F as t,
  M as n,
  T as r,
  _ as i,
  b as a,
  j as o,
  k as s,
  l as c,
  s as l,
  u,
} from "./react.CUuwdGgG.mjs";
import { C as d, a as f, r as p, t as m } from "./motion.yFoJz7cr.mjs";
import {
  Ct as h,
  M as g,
  O as _,
  St as v,
  T as y,
  V as b,
  gt as x,
  k as S,
  o as C,
  ot as w,
  q as T,
} from "./framer.uWP7Qtvw.mjs";
import {
  a as E,
  c as D,
  i as O,
  n as k,
  o as A,
  r as j,
  s as M,
  t as N,
} from "./X3lWUYHjB.DU8QC3PM.mjs";
function P(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J = e(() => {
    (l(),
      T(),
      m(),
      r(),
      D(),
      O(),
      (F = [`KtoD4qpQL`, `HZqQEWd1Y`]),
      (I = `framer-oVNQ2`),
      (L = { HZqQEWd1Y: `framer-v-8nrskf`, KtoD4qpQL: `framer-v-1k3e98z` }),
      (R = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (z = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e))
          return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (B = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (V = ({ value: e, children: t }) => {
        let r = o(f),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: a, children: t });
      }),
      (H = { Alternative: `HZqQEWd1Y`, Tag: `KtoD4qpQL` }),
      (U = d.create(t)),
      (W = ({
        color: e,
        fill: t,
        height: n,
        id: r,
        padding: i,
        radius: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        E68hvb6b7:
          t ??
          c.E68hvb6b7 ??
          `var(--token-c05cee72-25b7-4a15-bd78-58d97f72300a, rgb(247, 247, 247))`,
        G0ioNk51R: o ?? c.G0ioNk51R ?? `Web Design`,
        H3aAxfyA3: i ?? c.H3aAxfyA3 ?? `8px 12px 8px 12px`,
        iijLKjEBG:
          e ??
          c.iijLKjEBG ??
          `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
        TXO2R9TzR: a ?? c.TXO2R9TzR ?? `20px`,
        variant: H[c.variant] ?? c.variant ?? `KtoD4qpQL`,
      })),
      (G = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (K = h(
        i(function (e, n) {
          let r = s(null),
            i = n ?? r,
            o = a(),
            { activeLocale: l, setLocale: f } = x();
          w();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: b,
              E68hvb6b7: S,
              G0ioNk51R: C,
              iijLKjEBG: T,
              TXO2R9TzR: D,
              H3aAxfyA3: O,
              ...k
            } = W(e),
            {
              baseVariant: A,
              classNames: j,
              clearLoadingGesture: M,
              gestureHandlers: H,
              gestureVariant: K,
              isLoading: q,
              setGestureState: J,
              setVariant: Y,
              variants: X,
            } = v({
              cycleOrder: F,
              defaultVariant: `KtoD4qpQL`,
              ref: i,
              variant: b,
              variantClassNames: L,
            }),
            Z = G(e, X),
            Q = g(I, N, E);
          return c(p, {
            id: _ ?? o,
            children: c(U, {
              animate: X,
              initial: !1,
              children: c(V, {
                value: B,
                children: u(d.div, {
                  ...k,
                  ...H,
                  className: g(Q, `framer-1k3e98z`, h, j),
                  "data-framer-name": `Tag`,
                  layoutDependency: Z,
                  layoutId: `KtoD4qpQL`,
                  ref: i,
                  style: {
                    "--hiiu6f": R(O),
                    borderBottomLeftRadius: z(D, 3),
                    borderBottomRightRadius: z(D, 2),
                    borderTopLeftRadius: z(D, 0),
                    borderTopRightRadius: z(D, 1),
                    ...m,
                  },
                  ...P(
                    { HZqQEWd1Y: { "data-framer-name": `Alternative` } },
                    A,
                    K,
                  ),
                  children: [
                    c(y, {
                      __fromCanvasComponent: !0,
                      children: c(t, {
                        children: c(d.p, {
                          className: `framer-styles-preset-1xes9sr`,
                          "data-styles-preset": `X3lWUYHjB`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-iijLKjEBG-eR1FmtOEg))`,
                          },
                          children: `Web Design`,
                        }),
                      }),
                      className: `framer-zp2mzl`,
                      fonts: [`Inter`],
                      layoutDependency: Z,
                      layoutId: `IoGA3xxH2`,
                      style: {
                        "--extracted-r6o4lv": `var(--variable-reference-iijLKjEBG-eR1FmtOEg)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        "--variable-reference-iijLKjEBG-eR1FmtOEg": T,
                      },
                      text: C,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...P(
                        {
                          HZqQEWd1Y: {
                            children: c(t, {
                              children: c(d.p, {
                                className: `framer-styles-preset-3fyugt`,
                                "data-styles-preset": `iFFcEKQM3`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-iijLKjEBG-eR1FmtOEg))`,
                                },
                                children: `Web Design`,
                              }),
                            }),
                          },
                        },
                        A,
                        K,
                      ),
                    }),
                    c(d.div, {
                      className: `framer-1oojx1t`,
                      "data-framer-name": `Overlay`,
                      layoutDependency: Z,
                      layoutId: `s9iHBNsJz`,
                      style: { backgroundColor: S },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-oVNQ2.framer-lwg60f, .framer-oVNQ2 .framer-lwg60f { display: block; }`,
          `.framer-oVNQ2.framer-1k3e98z { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: var(--hiiu6f); position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-oVNQ2 .framer-zp2mzl { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-oVNQ2 .framer-1oojx1t { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          ...k,
          ...A,
        ],
        `framer-oVNQ2`,
      )),
      (q = K),
      (K.displayName = `Tag`),
      (K.defaultProps = { height: 34, width: 99 }),
      S(K, {
        variant: {
          options: [`KtoD4qpQL`, `HZqQEWd1Y`],
          optionTitles: [`Tag`, `Alternative`],
          title: `Variant`,
          type: C.Enum,
        },
        E68hvb6b7: {
          defaultValue: `var(--token-c05cee72-25b7-4a15-bd78-58d97f72300a, rgb(247, 247, 247)) /* {"name":"Stroke BG"} */`,
          title: `Fill`,
          type: C.Color,
        },
        G0ioNk51R: {
          defaultValue: `Web Design`,
          displayTextArea: !1,
          title: `Title`,
          type: C.String,
        },
        onG0ioNk51RChange: { changes: `G0ioNk51R`, type: C.ChangeHandler },
        iijLKjEBG: {
          defaultValue: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
          title: `Color`,
          type: C.Color,
        },
        TXO2R9TzR: {
          defaultValue: `20px`,
          title: `Radius`,
          type: C.BorderRadius,
        },
        H3aAxfyA3: {
          defaultValue: `8px 12px 8px 12px`,
          title: `Padding`,
          type: C.Padding,
        },
      }),
      _(
        K,
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
          ...b(j),
          ...b(M),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
export { J as n, q as t };
//# sourceMappingURL=eR1FmtOEg.DketpVkR.mjs.map
