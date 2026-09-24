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
  s as ee,
  u as l,
} from "./react.CUuwdGgG.mjs";
import { C as u, a as d, r as te, t as f } from "./motion.yFoJz7cr.mjs";
import {
  B as p,
  Ct as m,
  E as h,
  H as ne,
  M as g,
  O as _,
  P as v,
  St as re,
  T as y,
  V as b,
  gt as ie,
  i as ae,
  k as x,
  o as S,
  ot as C,
  p as w,
  q as T,
} from "./framer.uWP7Qtvw.mjs";
import { i as E, n as D, r as O, t as k } from "./kyo9an03l.BS4V9bly.mjs";
import { i as A, n as j, r as M, t as N } from "./X3lWUYHjB.D_jOkX_d.mjs";
import { n as P, t as F } from "./V4XApcPH4.CXCHDRZc.mjs";
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L,
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
  J,
  Y,
  X,
  Z,
  Q,
  $ = e(() => {
    (ee(),
      T(),
      f(),
      r(),
      E(),
      A(),
      P(),
      (L = p(F)),
      (R = { rsTDW_85I: { hover: !0 } }),
      (z = [`rsTDW_85I`, `wC29Qre_W`]),
      (B = `framer-xm6Qo`),
      (V = { rsTDW_85I: `framer-v-1v8qlsa`, wC29Qre_W: `framer-v-419qig` }),
      (H = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (U = (e, t) => `translate(-50%, -50%) ${t}`),
      (W = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (G = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (K = ({ value: e, children: t }) => {
        let r = o(d),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(d.Provider, { value: a, children: t });
      }),
      (q = { Default: `rsTDW_85I`, Phone: `wC29Qre_W` }),
      (J = u.create(t)),
      (Y = ({
        height: e,
        id: t,
        link: n,
        tagOne: r,
        tagTwo: i,
        thumbnail: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        CmrOHUsjD: o ?? c.CmrOHUsjD ?? `Monza Co -  Landing Page`,
        nKHvk1MWe: n ?? c.nKHvk1MWe,
        p1EeNJXxM: a ??
          c.p1EeNJXxM ?? {
            alt: `image`,
            pixelHeight: 1096,
            pixelWidth: 1776,
            src: `https://framerusercontent.com/images/Rr1omABVtVs4lMO1clxz7QAj9g.png?width=1776&height=1096`,
            srcSet: `https://framerusercontent.com/images/Rr1omABVtVs4lMO1clxz7QAj9g.png?scale-down-to=512&width=1776&height=1096 512w,https://framerusercontent.com/images/Rr1omABVtVs4lMO1clxz7QAj9g.png?scale-down-to=1024&width=1776&height=1096 1024w,https://framerusercontent.com/images/Rr1omABVtVs4lMO1clxz7QAj9g.png?width=1776&height=1096 1776w`,
          },
        SpJPq0bPr: r ?? c.SpJPq0bPr ?? `Web Design`,
        uzVf1SOPg: i ?? c.uzVf1SOPg ?? `Landing Page`,
        variant: q[c.variant] ?? c.variant ?? `rsTDW_85I`,
      })),
      (X = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Z = m(
        i(function (e, n) {
          let r = s(null),
            i = n ?? r,
            o = a(),
            { activeLocale: ee, setLocale: d } = ie(),
            f = C(),
            {
              style: p,
              className: m,
              layoutId: _,
              variant: v,
              CmrOHUsjD: b,
              p1EeNJXxM: x,
              SpJPq0bPr: S,
              uzVf1SOPg: T,
              nKHvk1MWe: E,
              ...D
            } = Y(e),
            {
              baseVariant: O,
              classNames: A,
              clearLoadingGesture: j,
              gestureHandlers: M,
              gestureVariant: P,
              isLoading: L,
              setGestureState: q,
              setVariant: Z,
              variants: Q,
            } = re({
              cycleOrder: z,
              defaultVariant: `rsTDW_85I`,
              enabledGestures: R,
              ref: i,
              variant: v,
              variantClassNames: V,
            }),
            $ = X(e, Q),
            oe = g(B, N, k);
          return c(te, {
            id: _ ?? o,
            children: c(J, {
              animate: Q,
              initial: !1,
              children: c(K, {
                value: H,
                children: l(u.div, {
                  ...D,
                  ...M,
                  className: g(oe, `framer-1v8qlsa`, m, A),
                  "data-framer-name": `Default`,
                  layoutDependency: $,
                  layoutId: `rsTDW_85I`,
                  ref: i,
                  style: { ...p },
                  ...I(
                    {
                      "rsTDW_85I-hover": { "data-framer-name": void 0 },
                      wC29Qre_W: { "data-framer-name": `Phone` },
                    },
                    O,
                    P,
                  ),
                  children: [
                    l(u.div, {
                      className: `framer-13frfvu`,
                      "data-border": !0,
                      "data-framer-name": `Top`,
                      layoutDependency: $,
                      layoutId: `zLNNExpOI`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `dashed`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                      variants: {
                        "rsTDW_85I-hover": {
                          "--border-bottom-width": `1px`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-top-width": `1px`,
                        },
                      },
                      children: [
                        l(u.div, {
                          className: `framer-87f6cx`,
                          "data-framer-name": `Tags`,
                          layoutDependency: $,
                          layoutId: `Ll58AMZ8R`,
                          children: [
                            l(u.div, {
                              className: `framer-6s1q78`,
                              "data-framer-name": `Tag`,
                              layoutDependency: $,
                              layoutId: `wlK16hLLf`,
                              style: {
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                              },
                              children: [
                                c(y, {
                                  __fromCanvasComponent: !0,
                                  children: c(t, {
                                    children: c(u.p, {
                                      className: `framer-styles-preset-1xes9sr`,
                                      "data-styles-preset": `X3lWUYHjB`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0)))`,
                                      },
                                      children: `Web Design`,
                                    }),
                                  }),
                                  className: `framer-2p02e3`,
                                  fonts: [`Inter`],
                                  layoutDependency: $,
                                  layoutId: `fn9hA7Whs`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: S,
                                  variants: {
                                    "rsTDW_85I-hover": {
                                      "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...I(
                                    {
                                      "rsTDW_85I-hover": {
                                        children: c(t, {
                                          children: c(u.p, {
                                            className: `framer-styles-preset-1xes9sr`,
                                            "data-styles-preset": `X3lWUYHjB`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                            },
                                            children: `Web Design`,
                                          }),
                                        }),
                                      },
                                    },
                                    O,
                                    P,
                                  ),
                                }),
                                c(u.div, {
                                  className: `framer-1a8cg5w`,
                                  "data-framer-name": `Overlay`,
                                  layoutDependency: $,
                                  layoutId: `DexIHUAhX`,
                                  style: {
                                    backgroundColor: `var(--token-c05cee72-25b7-4a15-bd78-58d97f72300a, rgb(247, 247, 247))`,
                                  },
                                  variants: {
                                    "rsTDW_85I-hover": {
                                      backgroundColor: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                    },
                                  },
                                }),
                              ],
                            }),
                            l(u.div, {
                              className: `framer-16tfxnv`,
                              "data-framer-name": `Tag`,
                              layoutDependency: $,
                              layoutId: `aQN4xk6bZ`,
                              style: {
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                              },
                              children: [
                                c(y, {
                                  __fromCanvasComponent: !0,
                                  children: c(t, {
                                    children: c(u.p, {
                                      className: `framer-styles-preset-1xes9sr`,
                                      "data-styles-preset": `X3lWUYHjB`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0)))`,
                                      },
                                      children: `Landing Page`,
                                    }),
                                  }),
                                  className: `framer-25nn0x`,
                                  fonts: [`Inter`],
                                  layoutDependency: $,
                                  layoutId: `KR2AQPsFZ`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: T,
                                  variants: {
                                    "rsTDW_85I-hover": {
                                      "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...I(
                                    {
                                      "rsTDW_85I-hover": {
                                        children: c(t, {
                                          children: c(u.p, {
                                            className: `framer-styles-preset-1xes9sr`,
                                            "data-styles-preset": `X3lWUYHjB`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                            },
                                            children: `Landing Page`,
                                          }),
                                        }),
                                      },
                                    },
                                    O,
                                    P,
                                  ),
                                }),
                                c(u.div, {
                                  className: `framer-znw58x`,
                                  "data-framer-name": `Overlay`,
                                  layoutDependency: $,
                                  layoutId: `N0JTTByyT`,
                                  style: {
                                    backgroundColor: `var(--token-c05cee72-25b7-4a15-bd78-58d97f72300a, rgb(247, 247, 247))`,
                                  },
                                  variants: {
                                    "rsTDW_85I-hover": {
                                      backgroundColor: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                    },
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                        c(ae, {
                          height: 46,
                          y: (f?.y || 0) + 0 + 0 + 207,
                          ...I(
                            {
                              wC29Qre_W: {
                                height: 270,
                                width: f?.width || `100vw`,
                                y: (f?.y || 0) + 0 + 0 + 0,
                              },
                            },
                            O,
                            P,
                          ),
                          children: c(h, {
                            className: `framer-ekt6bh-container`,
                            layoutDependency: $,
                            layoutId: `PgSvuXFf2-container`,
                            nodeId: `PgSvuXFf2`,
                            rendersWithMotion: !0,
                            scopeId: `rT9J4IUgU`,
                            style: { opacity: 1, scale: 0 },
                            transformTemplate: U,
                            variants: {
                              "rsTDW_85I-hover": { opacity: 1, scale: 1 },
                              wC29Qre_W: { opacity: 0, scale: 1 },
                            },
                            ...I(
                              { wC29Qre_W: { transformTemplate: void 0 } },
                              O,
                              P,
                            ),
                            children: c(F, {
                              AN8wZ6h6b: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                              Cya6RuIUy: !1,
                              evTCyulAI: E,
                              FRGXCszKE: `See Work`,
                              height: `100%`,
                              id: `PgSvuXFf2`,
                              KS1OTpe12: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                              layoutId: `PgSvuXFf2`,
                              OubOSgTqz: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                              qV_NmyJVp: !1,
                              RnDkx60mf: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                              s5zVGHZrm: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                              variant: W(`zphlO018I`),
                              VmYpdrASS: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                              w1blkKoqs: 100,
                              width: `100%`,
                              ...I(
                                {
                                  wC29Qre_W: {
                                    style: { height: `100%`, width: `100%` },
                                  },
                                },
                                O,
                                P,
                              ),
                            }),
                          }),
                        }),
                        c(w, {
                          background: {
                            alt: `image`,
                            fit: `fill`,
                            intrinsicHeight: 1096,
                            intrinsicWidth: 1776,
                            loading: ne((f?.y || 0) + 0 + 0 + 1),
                            pixelHeight: 1096,
                            pixelWidth: 1776,
                            sizes: `calc(${f?.width || `100vw`} - 2px)`,
                            ...G(x),
                          },
                          className: `framer-1a6bpcz`,
                          "data-framer-name": `Image`,
                          layoutDependency: $,
                          layoutId: `FS5pCbGvp`,
                          style: {
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                          },
                        }),
                      ],
                    }),
                    c(y, {
                      __fromCanvasComponent: !0,
                      children: c(t, {
                        children: c(u.h6, {
                          className: `framer-styles-preset-1litcpx`,
                          "data-styles-preset": `kyo9an03l`,
                          dir: `auto`,
                          children: `Monza Co -  Landing Page`,
                        }),
                      }),
                      className: `framer-fsyolv`,
                      fonts: [`Inter`],
                      layoutDependency: $,
                      layoutId: `AJ2EdC4wm`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: b,
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
          `.framer-xm6Qo.framer-1nei2pm, .framer-xm6Qo .framer-1nei2pm { display: block; }`,
          `.framer-xm6Qo.framer-1v8qlsa { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 837px; }`,
          `.framer-xm6Qo .framer-13frfvu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 39px; height: min-content; justify-content: flex-start; min-height: 460px; overflow: hidden; padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-xm6Qo .framer-87f6cx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
          `.framer-xm6Qo .framer-6s1q78 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-xm6Qo .framer-2p02e3, .framer-xm6Qo .framer-25nn0x { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-xm6Qo .framer-1a8cg5w, .framer-xm6Qo .framer-znw58x { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-xm6Qo .framer-16tfxnv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-xm6Qo .framer-ekt6bh-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; z-index: 3; }`,
          `.framer-xm6Qo .framer-1a6bpcz { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-xm6Qo .framer-fsyolv { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-xm6Qo.framer-v-419qig.framer-1v8qlsa { cursor: unset; width: 390px; }`,
          `.framer-xm6Qo.framer-v-419qig .framer-13frfvu { aspect-ratio: 1.4444444444444444 / 1; height: var(--framer-aspect-ratio-supported, 270px); min-height: unset; }`,
          `.framer-xm6Qo.framer-v-419qig .framer-ekt6bh-container { bottom: 0px; height: unset; left: 0px; right: 0px; top: 0px; width: unset; }`,
          ...j,
          ...D,
          `.framer-xm6Qo[data-border="true"]::after, .framer-xm6Qo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-xm6Qo`,
      )),
      (Q = Z),
      (Z.displayName = `Project Card`),
      (Z.defaultProps = { height: 500, width: 837 }),
      x(Z, {
        variant: {
          options: [`rsTDW_85I`, `wC29Qre_W`],
          optionTitles: [`Default`, `Phone`],
          title: `Variant`,
          type: S.Enum,
        },
        CmrOHUsjD: {
          defaultValue: `Monza Co -  Landing Page`,
          displayTextArea: !1,
          title: `Title`,
          type: S.String,
        },
        onCmrOHUsjDChange: { changes: `CmrOHUsjD`, type: S.ChangeHandler },
        p1EeNJXxM: {
          __defaultAssetReference: `data:framer/asset-reference,Rr1omABVtVs4lMO1clxz7QAj9g.png?originalFilename=1.png&width=1776&height=1096`,
          __vekterDefault: {
            alt: `image`,
            assetReference: `data:framer/asset-reference,Rr1omABVtVs4lMO1clxz7QAj9g.png?originalFilename=1.png&width=1776&height=1096`,
          },
          title: `Thumbnail`,
          type: S.ResponsiveImage,
        },
        SpJPq0bPr: {
          defaultValue: `Web Design`,
          displayTextArea: !1,
          title: `Tag One`,
          type: S.String,
        },
        onSpJPq0bPrChange: { changes: `SpJPq0bPr`, type: S.ChangeHandler },
        uzVf1SOPg: {
          defaultValue: `Landing Page`,
          displayTextArea: !1,
          title: `Tag Two`,
          type: S.String,
        },
        onuzVf1SOPgChange: { changes: `uzVf1SOPg`, type: S.ChangeHandler },
        nKHvk1MWe: { title: `Link`, type: S.Link },
      }),
      _(
        Z,
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
          ...L,
          ...b(M),
          ...b(O),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Z.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([v(F, {}, t)])),
      }));
  });
export { Q as n, $ as t };
//# sourceMappingURL=rT9J4IUgU.DCHrHZY6.mjs.map
