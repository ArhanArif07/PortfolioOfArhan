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
  N as _,
  O as v,
  St as y,
  T as b,
  V as x,
  gt as S,
  k as C,
  o as w,
  ot as T,
  q as E,
} from "./framer.uWP7Qtvw.mjs";
var D,
  O,
  k,
  A = e(() => {
    (E(),
      _.loadFonts([`GF;Fira Mono-500`, `GF;Fira Mono-700`]),
      (D = [
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
      (O = [
        `.framer-kVSct .framer-styles-preset-1i3utms:not(.rich-text-wrapper), .framer-kVSct .framer-styles-preset-1i3utms.rich-text-wrapper p { --framer-font-family: "Fira Mono", monospace; --framer-font-family-bold: "Fira Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 1.25em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, #7b7b7b); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (k = `framer-kVSct`));
  }),
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (l(),
      E(),
      m(),
      r(),
      A(),
      (j = `framer-vlb9z`),
      (M = { zZ0BGK_2F: `framer-v-v37aow` }),
      (N = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (P = ({ value: e, children: t }) => {
        let r = o(f),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: a, children: t });
      }),
      (F = d.create(t)),
      (I = ({
        dotFill: e,
        height: t,
        id: n,
        title: r,
        titleColor: i,
        width: a,
        ...o
      }) => ({
        ...o,
        GZXD4XDjD:
          i ??
          o.GZXD4XDjD ??
          `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
        t9Ips89AM:
          e ??
          o.t9Ips89AM ??
          `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
        wYgOcdV21: r ?? o.wYgOcdV21 ?? `About Us`,
      })),
      (L = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (R = h(
        i(function (e, n) {
          let r = s(null),
            i = n ?? r,
            o = a(),
            { activeLocale: l, setLocale: f } = S();
          T();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: v,
              t9Ips89AM: x,
              wYgOcdV21: C,
              GZXD4XDjD: w,
              ...E
            } = I(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: A,
              gestureHandlers: R,
              gestureVariant: z,
              isLoading: B,
              setGestureState: V,
              setVariant: H,
              variants: U,
            } = y({
              defaultVariant: `zZ0BGK_2F`,
              ref: i,
              variant: v,
              variantClassNames: M,
            }),
            W = L(e, U),
            G = g(j, k);
          return c(p, {
            id: _ ?? o,
            children: c(F, {
              animate: U,
              initial: !1,
              children: c(P, {
                value: N,
                children: u(d.div, {
                  ...E,
                  ...R,
                  className: g(G, `framer-v37aow`, h, O),
                  "data-framer-name": `Label`,
                  layoutDependency: W,
                  layoutId: `zZ0BGK_2F`,
                  ref: i,
                  style: { ...m },
                  children: [
                    c(d.div, {
                      className: `framer-1xl7ngi`,
                      "data-framer-name": `Dot`,
                      layoutDependency: W,
                      layoutId: `qFrRspU6C`,
                      style: {
                        backgroundColor: x,
                        borderBottomLeftRadius: 1,
                        borderBottomRightRadius: 1,
                        borderTopLeftRadius: 1,
                        borderTopRightRadius: 1,
                      },
                    }),
                    c(b, {
                      __fromCanvasComponent: !0,
                      children: c(t, {
                        children: c(d.p, {
                          className: `framer-styles-preset-1i3utms`,
                          "data-styles-preset": `z5AEfVPyw`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-GZXD4XDjD-aAuC7HDti))`,
                          },
                          children: `About Us`,
                        }),
                      }),
                      className: `framer-1gmgqei`,
                      fonts: [`Inter`],
                      layoutDependency: W,
                      layoutId: `uXPzpUEK7`,
                      style: {
                        "--extracted-r6o4lv": `var(--variable-reference-GZXD4XDjD-aAuC7HDti)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        "--variable-reference-GZXD4XDjD-aAuC7HDti": w,
                      },
                      text: C,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-vlb9z.framer-w156w8, .framer-vlb9z .framer-w156w8 { display: block; }`,
          `.framer-vlb9z.framer-v37aow { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
          `.framer-vlb9z .framer-1xl7ngi { flex: none; height: 6px; overflow: visible; position: relative; width: 6px; }`,
          `.framer-vlb9z .framer-1gmgqei { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...O,
        ],
        `framer-vlb9z`,
      )),
      (z = R),
      (R.displayName = `Label`),
      (R.defaultProps = { height: 20, width: 93 }),
      C(R, {
        t9Ips89AM: {
          defaultValue: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33)) /* {"name":"Primary"} */`,
          title: `Dot Fill`,
          type: w.Color,
        },
        wYgOcdV21: {
          defaultValue: `About Us`,
          displayTextArea: !1,
          title: `Title`,
          type: w.String,
        },
        onwYgOcdV21Change: { changes: `wYgOcdV21`, type: w.ChangeHandler },
        GZXD4XDjD: {
          defaultValue: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
          title: `Title Color`,
          type: w.Color,
        },
      }),
      v(
        R,
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
          ...x(D),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
export { D as a, O as i, B as n, A as o, k as r, z as t };
//# sourceMappingURL=aAuC7HDti.CWi1sD2t.mjs.map
