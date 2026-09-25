import { t as e } from "./rolldown-runtime.DsXBSD_B.mjs";
import {
  F as t,
  I as n,
  M as r,
  N as i,
  P as a,
  R as o,
  T as s,
  _ as c,
  b as l,
  c as u,
  g as d,
  j as f,
  k as p,
  l as m,
  s as h,
  u as g,
  z as _,
} from "./react.CUuwdGgG.mjs";
import {
  C as v,
  R as y,
  a as b,
  r as x,
  t as S,
  x as C,
} from "./motion.yFoJz7cr.mjs";
import {
  $ as w,
  B as T,
  C as E,
  Ct as D,
  D as O,
  E as k,
  H as A,
  M as j,
  N as M,
  O as N,
  P,
  St as F,
  T as I,
  Tt as L,
  V as R,
  _t as ee,
  a as z,
  at as te,
  b as ne,
  bt as B,
  d as re,
  dt as ie,
  ft as ae,
  gt as oe,
  i as V,
  k as H,
  kt as se,
  lt as ce,
  n as le,
  o as U,
  ot as ue,
  p as W,
  q as G,
  tt as de,
  ut as fe,
  w as pe,
  x as K,
  xt as me,
  yt as he,
} from "./framer.uWP7Qtvw.mjs";
import { n as ge, t as _e } from "./Grain.BlZKHVEY.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./kyo9an03l.BS4V9bly.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./sPvC_pCwb.Ggz8zae4.mjs";
import { n as Ee, t as q } from "./aAuC7HDti.CWi1sD2t.mjs";
import { i as De, n as Oe, r as ke, t as Ae } from "./uyfn5rCXc.Bs2FpWo_.mjs";
import {
  a as je,
  i as Me,
  n as Ne,
  o as Pe,
  r as Fe,
  t as J,
} from "./q89I9np3U.BikVgVeT.mjs";
import { d as Ie, f as Le, l as Re, u as ze } from "./X3lWUYHjB.DU8QC3PM.mjs";
import { n as Be, t as Ve } from "./V4XApcPH4.BkDsdD9q.mjs";
import { n as He, t as Ue } from "./eR1FmtOEg.DketpVkR.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./QQizO8D2m.BmdOiDZq.mjs";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./kyo9an03l.B4Z-j9SF.mjs";
import { i as Qe, n as $e, r as et, t as tt } from "./aH41o35LP.D3gefzkj.mjs";
import { n as nt, t as rt } from "./V4XApcPH4.CXCHDRZc.mjs";
import { n as it, t as at } from "./rT9J4IUgU.DCHrHZY6.mjs";
import { i as ot, n as st } from "./d0w_cWzte.DTqfl2e2.mjs";
import { i as ct, n as lt, r as ut, t as dt } from "./c4DgZxCzf.B9cHSH5f.mjs";
import { n as ft, r as pt } from "./augiA20Il.CwqLU_4r.mjs";
var mt,
  ht,
  gt = e(() => {
    (G(),
      (mt = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...mt },
      (ht = {
        onClick: { type: U.EventHandler },
        onMouseEnter: { type: U.EventHandler },
        onMouseLeave: { type: U.EventHandler },
      }),
      U.Number,
      U.Boolean,
      U.String,
      U.Enum);
  });
function _t(e, t) {
  return yt(!0, e, t);
}
function vt(e, t) {
  return yt(!1, e, t);
}
function yt(e, t, n = !0) {
  let r = ie();
  a(() => {
    n && r === e && t();
  }, [r]);
}
var bt = e(() => {
    (G(), s());
  }),
  xt = e(() => {
    s();
  }),
  St = e(() => {
    G();
  }),
  Ct = e(() => {
    G();
  }),
  wt = e(() => {
    s();
  }),
  Tt = e(() => {
    G();
  }),
  Et,
  Dt,
  Ot = e(() => {
    (o(),
      s(),
      (Et = () => {
        if (_ !== void 0) {
          let e = _.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (Dt = () => r(() => Et(), [])));
  }),
  kt = e(() => {
    (s(), Ct());
  }),
  At = e(() => {
    (s(), G(), Ct(), xt());
  }),
  jt = e(() => {
    (G(), s(), gt());
  });
function Mt() {
  return r(() => E.current(), []);
}
function Nt() {
  return r(() => E.current() === E.canvas, []);
}
var Pt = e(() => {
    (s(), G());
  }),
  Ft = e(() => {
    s();
  });
function It(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: i,
    topRightRadius: a,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return r(
    () => (n ? `${i}px ${a}px ${o}px ${s}px` : `${t}px`),
    [t, n, i, a, o, s],
  );
}
var Lt,
  Rt = e(() => {
    (s(),
      G(),
      (Lt = {
        borderRadius: {
          title: `Radius`,
          type: U.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [
            `topLeftRadius`,
            `topRightRadius`,
            `bottomRightRadius`,
            `bottomLeftRadius`,
          ],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      U.FusedNumber);
  }),
  zt = e(() => {
    (gt(),
      bt(),
      xt(),
      St(),
      Ct(),
      wt(),
      Tt(),
      Ot(),
      kt(),
      At(),
      jt(),
      Pt(),
      Ft(),
      Rt());
  });
function Bt(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function Vt(e) {
  return m(Yt, { ...Bt(e) });
}
function Ht(e) {
  let t = ie(),
    n = p(!1),
    r = p(!1),
    a = i((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: i(() => {
      let i = e.current;
      i &&
        ((i.preload = `auto`),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !n.current &&
          t &&
          ((n.current = !0),
          (r.current = !0),
          i
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: i(() => {
      !e.current || n.current || (e.current.pause(), (r.current = !1));
    }, []),
    setProgress: a,
    isPlaying: r,
  };
}
function Ut({
  playingProp: e,
  muted: t,
  loop: r,
  playsinline: i,
  controls: a,
}) {
  let [o] = n(e),
    [s, c] = n(!1);
  e !== o && !s && c(!0);
  let l = o && t && r && i && !a && !s,
    u;
  return ((u = l ? `on-viewport` : o ? `on-mount` : `no-autoplay`), u);
}
function Wt(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Gt(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [])
    .map(Wt)
    .join(` `);
}
var Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt = e(() => {
    (h(),
      G(),
      S(),
      zt(),
      s(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((Kt ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((qt ||= {})),
      (Jt = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (Yt = d(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: i = ``,
            posterEnabled: o = !1,
            controls: s = !1,
            playing: c = !0,
            loop: l = !0,
            muted: u = !0,
            playsinline: d = !0,
            restartOnEnter: f = !1,
            objectFit: h = `cover`,
            backgroundColor: g = `rgba(0,0,0,0)`,
            radius: _ = 0,
            volume: v = 25,
            startTime: b = 0,
            poster: x,
            playing: S,
            progress: w,
            onSeeked: T,
            onPause: D,
            onPlay: O,
            onEnd: k,
            onClick: A,
            onMouseEnter: j,
            onMouseLeave: M,
            onMouseDown: N,
            onMouseUp: P,
          } = e,
          F = p(),
          I = Dt(),
          L = p(null),
          R = p(null),
          ee = Nt(),
          z = Mt(),
          te = ee || z === E.export,
          ne = It(e),
          B = te
            ? `no-autoplay`
            : Ut({
                playingProp: S,
                muted: u,
                loop: l,
                playsinline: d,
                controls: s,
              }),
          re = te ? !0 : y(F),
          ie = te ? !1 : y(F, { margin: `10%`, once: !0 }),
          ae = b === 100 ? 99.9 : b,
          { play: oe, pause: V, setProgress: H, isPlaying: se } = Ht(F);
        (a(() => {
          te || (B !== `on-viewport` && (S ? oe() : V()));
        }, [B, S]),
          a(() => {
            te ||
              (re && S && B !== `no-autoplay` && oe(),
              B === `on-viewport` && V());
          }, [B, re, S]),
          a(() => {
            !ee || x || o || ae || !F.current || (F.current.currentTime = 0.01);
          }, [o, x, ae]));
        let ce = p(!1);
        (a(() => {
          if (!ce.current) {
            ce.current = !0;
            return;
          }
          H(((C(w) ? w.get() : (w ?? 0) * 0.01) ?? 0) || (ae ?? 0) / 100);
        }, [ae, i, n, w]),
          a(() => {
            if (C(w)) return w.on(`change`, (e) => H(e));
          }, [w]),
          _t(() => {
            L.current !== null &&
              F.current &&
              ((!R && l) || !L.current) &&
              oe();
          }),
          vt(() => {
            F.current &&
              ((R.current = F.current.ended),
              (L.current = F.current.paused),
              V());
          }));
        let le = r(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return i + ``;
        }, [t, i, n, ae]);
        return (
          a(() => {
            I && F.current && B === `on-mount` && setTimeout(() => oe(), 50);
          }, []),
          a(() => {
            F.current && !u && (F.current.volume = (v ?? 0) / 100);
          }, [v]),
          m(`video`, {
            onClick: A,
            onMouseEnter: j,
            onMouseLeave: M,
            onMouseDown: N,
            onMouseUp: P,
            src: le,
            loop: l,
            ref: F,
            onSeeked: (e) => T?.(e),
            onPause: (e) => D?.(e),
            onPlay: (e) => O?.(e),
            onEnded: (e) => k?.(e),
            autoPlay:
              se.current ||
              B === `on-mount` ||
              (S && B === `on-viewport` && re),
            preload: se.current
              ? `auto`
              : te && !x
                ? `metadata`
                : B !== `on-mount` && !ie
                  ? `none`
                  : `metadata`,
            poster:
              o && !i && n === Jt
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : o && x
                  ? x
                  : void 0,
            onLoadedData: () => {
              let e = F.current;
              e &&
                (e.currentTime < 0.3 && ae > 0 && H((ae ?? 0) * 0.01),
                (se.current ||
                  B === `on-mount` ||
                  (S && B === `on-viewport` && re)) &&
                  oe());
            },
            controls: s,
            muted: te ? !0 : u,
            playsInline: d,
            style: {
              cursor: A ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: ne,
              display: `block`,
              objectFit: h,
              backgroundColor: g,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (Vt.displayName = `Video`),
      (Xt = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      H(Vt, {
        srcType: {
          type: U.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: U.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: U.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          description: `Only MP4 and WebM`,
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: {
          type: U.Boolean,
          title: `Playing`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        ...Lt,
        posterEnabled: {
          type: U.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: U.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: {
          type: U.Color,
          title: `Background`,
          defaultValue: `rgba(0,0,0,0)`,
        },
        startTime: {
          title: `Start Time`,
          type: U.Number,
          min: 0,
          max: 100,
          step: 0.1,
          unit: `%`,
        },
        loop: {
          type: U.Boolean,
          title: `Loop`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        objectFit: {
          type: U.Enum,
          title: `Fit`,
          options: Xt,
          optionTitles: Xt.map(Gt),
        },
        controls: {
          type: U.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: {
          type: U.Boolean,
          title: `Muted`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        volume: {
          type: U.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: U.EventHandler },
        onSeeked: { type: U.EventHandler },
        onPause: { type: U.EventHandler },
        onPlay: { type: U.EventHandler },
        ...ht,
      }));
  });
function Qt({ blur: e, borderRadius: t, direction: n, transition: i }) {
  return m(`div`, {
    style: { position: `absolute`, inset: 0, overflow: `hidden` },
    children: r(
      () => [
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%`,
        },
        {
          blur: `${e / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%`,
        },
        {
          blur: `${e / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%`,
        },
        {
          blur: `${e / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%`,
        },
        {
          blur: `${e}px`,
          gradient: `rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%`,
        },
      ],
      [e],
    ).map((e, r) =>
      m(
        v.div,
        {
          transition: i,
          initial: { backdropFilter: `blur(${e.blur})` },
          animate: { backdropFilter: `blur(${e.blur})` },
          style: {
            opacity: 1,
            position: `absolute`,
            inset: 0,
            zIndex: r + 1,
            maskImage: `linear-gradient(${n}, ${e.gradient})`,
            WebkitMaskImage: `linear-gradient(${n}, ${e.gradient})`,
            borderRadius: t,
            pointerEvents: `none`,
          },
        },
        r,
      ),
    ),
  });
}
var $t,
  en = e(() => {
    (h(),
      s(),
      S(),
      G(),
      (Qt.defaultProps = {
        blur: 10,
        borderRadius: `0px`,
        direction: `toBottom`,
        transition: { duration: 0.3 },
      }),
      H(Qt, {
        blur: {
          title: `Blur`,
          type: U.Number,
          defaultValue: 10,
          min: 0,
          max: 100,
          step: 1,
          description: `Large blur values (10<) can impact performance.`,
        },
        borderRadius: {
          title: `Radius`,
          type: U.BorderRadius,
          defaultValue: `0px`,
          description: `Blur Gradient component's parent frame can't have border radius (it will break the component). If you need corner radius, apply it directly to the Blur Gradient component here.`,
        },
        direction: {
          title: `Direction`,
          type: U.SegmentedEnum,
          options: [`to bottom`, `to top`, `to left`, `to right`],
          optionTitles: [`↓`, `↑`, `←`, `→`],
          defaultValue: `to bottom`,
        },
        transition: {
          type: U.Transition,
          defaultValue: { duration: 0.3 },
          title: `Transition`,
          description: `Control how the blur animates when used on hover states or any othe interaction.

More components at [Framer University](https://frameruni.link/cc).`,
        },
      }),
      (Qt.displayName = `Blur Gradient`),
      ($t = Qt));
  }),
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  Y,
  dn = e(() => {
    (h(),
      G(),
      S(),
      s(),
      De(),
      (tn = `framer-h3cA0`),
      (nn = { g8v3CrYpG: `framer-v-348xts` }),
      (rn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (an = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (on = ({ value: e, children: t }) => {
        let n = f(b),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: t });
      }),
      (sn = v.create(t)),
      (cn = ({
        color: e,
        height: t,
        icon: n,
        id: r,
        textOpacity: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        dNfqpppov:
          a ?? s.dNfqpppov ?? `AI-powered campaign optimization and targeting`,
        s7U7CNT20: n ??
          s.s7U7CNT20 ?? {
            alt: `icon`,
            pixelHeight: 9,
            pixelWidth: 9,
            src: `https://framerusercontent.com/images/60CQx44IG7ishpiQniRtpdkk.svg?width=9&height=9`,
          },
        UQUamSqTe: i ?? s.UQUamSqTe ?? 1,
        WxME0NsJV:
          e ??
          s.WxME0NsJV ??
          `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
      })),
      (ln = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (un = D(
        c(function (e, n) {
          let r = p(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: s } = oe(),
            c = ue(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: h,
              s7U7CNT20: _,
              dNfqpppov: y,
              WxME0NsJV: b,
              UQUamSqTe: S,
              ...C
            } = cn(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: k,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = F({
              defaultVariant: `g8v3CrYpG`,
              ref: i,
              variant: h,
              variantClassNames: nn,
            }),
            L = ln(e, P),
            R = j(tn, Ae);
          return m(x, {
            id: f ?? a,
            children: m(sn, {
              animate: P,
              initial: !1,
              children: m(on, {
                value: rn,
                children: g(v.div, {
                  ...C,
                  ...D,
                  className: j(R, `framer-348xts`, d, T),
                  "data-framer-name": `List`,
                  layoutDependency: L,
                  layoutId: `g8v3CrYpG`,
                  ref: i,
                  style: { ...u },
                  children: [
                    m(W, {
                      background: {
                        alt: `icon`,
                        fit: `fill`,
                        intrinsicHeight: 9,
                        intrinsicWidth: 9,
                        loading: A(
                          (c?.y || 0) + (0 + ((c?.height || 18) - 0 - 12) / 2),
                        ),
                        pixelHeight: 9,
                        pixelWidth: 9,
                        sizes: `12px`,
                        ...an(_),
                      },
                      className: `framer-1laqq4g`,
                      "data-framer-name": `Icon`,
                      fitImageDimension: `height`,
                      layoutDependency: L,
                      layoutId: `H8v1AKQGs`,
                    }),
                    m(I, {
                      __fromCanvasComponent: !0,
                      children: m(t, {
                        children: m(v.p, {
                          className: `framer-styles-preset-rn7xf9`,
                          "data-styles-preset": `uyfn5rCXc`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-WxME0NsJV-cmUniT2TU))`,
                          },
                          children: `AI-powered campaign optimization and targeting`,
                        }),
                      }),
                      className: `framer-pzjtab`,
                      fonts: [`Inter`],
                      layoutDependency: L,
                      layoutId: `Q9pgMpHDB`,
                      style: {
                        "--extracted-r6o4lv": `var(--variable-reference-WxME0NsJV-cmUniT2TU)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        "--variable-reference-WxME0NsJV-cmUniT2TU": b,
                        opacity: S,
                      },
                      text: y,
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
          `.framer-h3cA0.framer-lqz8bq, .framer-h3cA0 .framer-lqz8bq { display: block; }`,
          `.framer-h3cA0.framer-348xts { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 500px; }`,
          `.framer-h3cA0 .framer-1laqq4g { flex: none; height: auto; overflow: visible; position: relative; width: 12px; }`,
          `.framer-h3cA0 .framer-pzjtab { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...Oe,
        ],
        `framer-h3cA0`,
      )),
      (Y = un),
      (un.displayName = `List`),
      (un.defaultProps = { height: 18, width: 500 }),
      H(un, {
        s7U7CNT20: {
          __defaultAssetReference: `data:framer/asset-reference,60CQx44IG7ishpiQniRtpdkk.svg?originalFilename=_.svg&width=9&height=9`,
          __vekterDefault: {
            alt: `icon`,
            assetReference: `data:framer/asset-reference,60CQx44IG7ishpiQniRtpdkk.svg?originalFilename=_.svg&width=9&height=9`,
          },
          title: `Icon`,
          type: U.ResponsiveImage,
        },
        dNfqpppov: {
          defaultValue: `AI-powered campaign optimization and targeting`,
          displayTextArea: !1,
          title: `Title`,
          type: U.String,
        },
        ondNfqpppovChange: { changes: `dNfqpppov`, type: U.ChangeHandler },
        WxME0NsJV: {
          defaultValue: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
          title: `Color`,
          type: U.Color,
        },
        UQUamSqTe: {
          defaultValue: 1,
          max: 1,
          min: 0,
          step: 0.01,
          title: `Text Opacity`,
          type: U.Number,
        },
        onUQUamSqTeChange: { changes: `UQUamSqTe`, type: U.ChangeHandler },
      }),
      N(
        un,
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
          ...R(ke),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  fn,
  pn,
  mn,
  hn = e(() => {
    (G(),
      M.loadFonts([
        `GF;Fira Mono-500`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-Italic`,
      ]),
      (fn = [
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
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (pn = [
        `.framer-kgSlz .framer-styles-preset-3fyugt:not(.rich-text-wrapper), .framer-kgSlz .framer-styles-preset-3fyugt.rich-text-wrapper p { --framer-font-family: "Fira Mono", monospace; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-background-corner-shape: superellipse(1); --framer-text-color: var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, #7b7b7b); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (mn = `framer-kgSlz`));
  }),
  gn,
  _n,
  vn,
  yn = e(() => {
    (G(),
      M.loadFonts([
        `Inter-SemiBold`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-SemiBoldItalic`,
      ]),
      (gn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
              weight: `600`,
            },
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
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/zSsEuoJdh8mcFVk976C05ZfQr8.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/6FI2EneKzM3qBy5foOZXey7coCA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/fuyXZpVvOjq8NesCOfgirHCWyg.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (_n = [
        `.framer-RbDAB .framer-styles-preset-12v5vws:not(.rich-text-wrapper), .framer-RbDAB .framer-styles-preset-12v5vws.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.72px; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, #7b7b7b); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (vn = `framer-RbDAB`));
  });
function bn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn = e(() => {
    (h(),
      G(),
      S(),
      s(),
      hn(),
      yn(),
      Pe(),
      (xn = [`zM6t3Q4Tp`, `VITB6u8IC`]),
      (Sn = `framer-yWdm9`),
      (Cn = { VITB6u8IC: `framer-v-1fe0mlj`, zM6t3Q4Tp: `framer-v-1o1ebx9` }),
      (wn = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Tn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (En = ({ value: e, children: t }) => {
        let n = f(b),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: t });
      }),
      (Dn = { Alternative: `VITB6u8IC`, Default: `zM6t3Q4Tp` }),
      (On = v.create(t)),
      (kn = ({
        content: e,
        height: t,
        id: n,
        mainColor: r,
        mainNumber: i,
        padding: a,
        suffix: o,
        suffixColor: s,
        title: c,
        width: l,
        ...u
      }) => ({
        ...u,
        bzUxeIxak:
          e ?? u.bzUxeIxak ?? `Live websites, built and running`,
        Cy68NCYpv: a ?? u.Cy68NCYpv ?? `20px`,
        FgA81bkGF: i ?? u.FgA81bkGF ?? `4.9`,
        kum_cA8Ig: c ?? u.kum_cA8Ig ?? `Projects Shipped`,
        Pq8t6CpSz:
          s ??
          u.Pq8t6CpSz ??
          `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
        UDAmAACof: o ?? u.UDAmAACof ?? `/5`,
        UVnp0KRk9:
          r ??
          u.UVnp0KRk9 ??
          `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
        variant: Dn[u.variant] ?? u.variant ?? `zM6t3Q4Tp`,
      })),
      (An = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (jn = D(
        c(function (e, n) {
          let r = p(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: s } = oe();
          ue();
          let {
              style: c,
              className: u,
              layoutId: d,
              variant: f,
              FgA81bkGF: h,
              UVnp0KRk9: _,
              UDAmAACof: y,
              Pq8t6CpSz: b,
              kum_cA8Ig: S,
              bzUxeIxak: C,
              Cy68NCYpv: w,
              ...T
            } = kn(e),
            {
              baseVariant: E,
              classNames: D,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: A,
              isLoading: M,
              setGestureState: N,
              setVariant: P,
              variants: L,
            } = F({
              cycleOrder: xn,
              defaultVariant: `zM6t3Q4Tp`,
              ref: i,
              variant: f,
              variantClassNames: Cn,
            }),
            R = An(e, L),
            ee = j(Sn, Fe, mn, vn);
          return m(x, {
            id: d ?? a,
            children: m(On, {
              animate: L,
              initial: !1,
              children: m(En, {
                value: Tn,
                children: g(v.div, {
                  ...T,
                  ...k,
                  className: j(ee, `framer-1o1ebx9`, u, D),
                  "data-framer-name": `Default`,
                  layoutDependency: R,
                  layoutId: `zM6t3Q4Tp`,
                  ref: i,
                  style: {
                    "--s7zncp": wn(w),
                    backgroundColor: `var(--token-7bc24d75-456d-4da8-90a1-2594392b9ddf, rgb(20, 20, 20))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...c,
                  },
                  ...bn(
                    { VITB6u8IC: { "data-framer-name": `Alternative` } },
                    E,
                    A,
                  ),
                  children: [
                    g(v.div, {
                      className: `framer-1yxxqv5`,
                      "data-framer-name": `Top`,
                      layoutDependency: R,
                      layoutId: `ATPXdiW_9`,
                      children: [
                        g(v.div, {
                          className: `framer-v2zztw`,
                          "data-framer-name": `Rating`,
                          layoutDependency: R,
                          layoutId: `jKUG_RDxS`,
                          children: [
                            m(I, {
                              __fromCanvasComponent: !0,
                              children: m(t, {
                                children: m(v.h4, {
                                  className: `framer-styles-preset-waz64s`,
                                  "data-styles-preset": `Rg6Y1Wbmn`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--variable-reference-UVnp0KRk9-INrBfYj5O))`,
                                  },
                                  children: `4.9`,
                                }),
                              }),
                              className: `framer-ajnbhe`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `CM0NKvXqx`,
                              style: {
                                "--extracted-1eung3n": `var(--variable-reference-UVnp0KRk9-INrBfYj5O)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                "--variable-reference-UVnp0KRk9-INrBfYj5O": _,
                              },
                              text: h,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            m(I, {
                              __fromCanvasComponent: !0,
                              children: m(t, {
                                children: m(v.h4, {
                                  className: `framer-styles-preset-waz64s`,
                                  "data-styles-preset": `Rg6Y1Wbmn`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--variable-reference-Pq8t6CpSz-INrBfYj5O))`,
                                  },
                                  children: `/5`,
                                }),
                              }),
                              className: `framer-jtp7bq`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `p77C6O5mS`,
                              style: {
                                "--extracted-1eung3n": `var(--variable-reference-Pq8t6CpSz-INrBfYj5O)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                "--variable-reference-Pq8t6CpSz-INrBfYj5O": b,
                              },
                              text: y,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(t, {
                            children: m(v.p, {
                              className: `framer-styles-preset-3fyugt`,
                              "data-styles-preset": `iFFcEKQM3`,
                              dir: `auto`,
                              style: { "--framer-text-alignment": `center` },
                              children: `Projects Shipped`,
                            }),
                          }),
                          className: `framer-1bigsnf`,
                          fonts: [`Inter`],
                          layoutDependency: R,
                          layoutId: `bf3jI6d6u`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: S,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    m(I, {
                      __fromCanvasComponent: !0,
                      children: m(t, {
                        children: m(v.p, {
                          className: `framer-styles-preset-12v5vws`,
                          "data-styles-preset": `jKIJ8whPe`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                          },
                          children: `Live websites, built and running`,
                        }),
                      }),
                      className: `framer-13o23s2`,
                      fonts: [`Inter`],
                      layoutDependency: R,
                      layoutId: `Pe832ktGv`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
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
          `.framer-yWdm9.framer-out25y, .framer-yWdm9 .framer-out25y { display: block; }`,
          `.framer-yWdm9.framer-1o1ebx9 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; min-height: 170px; overflow: hidden; padding: var(--s7zncp); position: relative; width: 199px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-yWdm9 .framer-1yxxqv5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-yWdm9 .framer-v2zztw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-yWdm9 .framer-ajnbhe, .framer-yWdm9 .framer-jtp7bq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-yWdm9 .framer-1bigsnf, .framer-yWdm9 .framer-13o23s2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...Me,
          ...pn,
          ..._n,
        ],
        `framer-yWdm9`,
      )),
      (Mn = jn),
      (jn.displayName = `Client Info Card`),
      (jn.defaultProps = { height: 170, width: 199 }),
      H(jn, {
        variant: {
          options: [`zM6t3Q4Tp`, `VITB6u8IC`],
          optionTitles: [`Default`, `Alternative`],
          title: `Variant`,
          type: U.Enum,
        },
        FgA81bkGF: {
          defaultValue: `4.9`,
          displayTextArea: !1,
          title: `Main Number`,
          type: U.String,
        },
        onFgA81bkGFChange: { changes: `FgA81bkGF`, type: U.ChangeHandler },
        UVnp0KRk9: {
          defaultValue: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
          title: `Main Color`,
          type: U.Color,
        },
        UDAmAACof: {
          defaultValue: `/5`,
          displayTextArea: !1,
          title: `Suffix`,
          type: U.String,
        },
        onUDAmAACofChange: { changes: `UDAmAACof`, type: U.ChangeHandler },
        Pq8t6CpSz: {
          defaultValue: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
          title: `Suffix Color`,
          type: U.Color,
        },
        kum_cA8Ig: {
          defaultValue: `Projects Shipped`,
          displayTextArea: !1,
          title: `Title`,
          type: U.String,
        },
        onkum_cA8IgChange: { changes: `kum_cA8Ig`, type: U.ChangeHandler },
        bzUxeIxak: {
          defaultValue: `Live websites, built and running`,
          displayTextArea: !1,
          title: `Content`,
          type: U.String,
        },
        onbzUxeIxakChange: { changes: `bzUxeIxak`, type: U.ChangeHandler },
        Cy68NCYpv: { defaultValue: `20px`, title: `Padding`, type: U.Padding },
      }),
      N(
        jn,
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
          ...R(je),
          ...R(fn),
          ...R(gn),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Pn,
  Fn,
  In,
  Ln = e(() => {
    (G(),
      M.loadFonts([
        `Inter-Bold`,
        `Inter-Black`,
        `Inter-BlackItalic`,
        `Inter-BoldItalic`,
      ]),
      (Pn = [
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
      (Fn = [
        `.framer-mKE7m .framer-styles-preset-fnm3fe:not(.rich-text-wrapper), .framer-mKE7m .framer-styles-preset-fnm3fe.rich-text-wrapper h2 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 50px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -3px; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (In = `framer-mKE7m`));
  }),
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
  Yn,
  Xn,
  Zn = e(() => {
    (h(),
      G(),
      S(),
      s(),
      Ln(),
      Le(),
      Be(),
      (Rn = T(Ve)),
      (zn = `framer-3UI3O`),
      (Bn = { VE5vuaFGV: `framer-v-183wxh8` }),
      (Vn = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Hn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Un = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Wn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Gn = ({ value: e, children: t }) => {
        let n = f(b),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: t });
      }),
      (Kn = v.create(t)),
      (qn = ({
        content: e,
        height: t,
        icon: n,
        id: r,
        link: i,
        padding: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        AeEPehjC_: a ?? c.AeEPehjC_ ?? `50px 40px 50px 40px`,
        EyHTfTdKv: i ?? c.EyHTfTdKv,
        N6RaqBoXI: n ??
          c.N6RaqBoXI ?? {
            alt: `image`,
            pixelHeight: 540,
            pixelWidth: 540,
            src: `https://framerusercontent.com/images/qTFgQB8ObY7Dhc9UVNb8JSA29RU.png?width=540&height=540`,
            srcSet: `https://framerusercontent.com/images/qTFgQB8ObY7Dhc9UVNb8JSA29RU.png?scale-down-to=512&width=540&height=540 512w,https://framerusercontent.com/images/qTFgQB8ObY7Dhc9UVNb8JSA29RU.png?width=540&height=540 540w`,
          },
        wbfizu2m_: o ?? c.wbfizu2m_ ?? `Understand`,
        yh3l5zIsA:
          e ??
          c.yh3l5zIsA ??
          `We start with the actual brief: who it’s for, what it needs to do, and how it should feel.`,
      })),
      (Jn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Yn = D(
        c(function (e, n) {
          let r = p(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: s } = oe();
          ue();
          let {
              style: c,
              className: u,
              layoutId: d,
              variant: f,
              N6RaqBoXI: h,
              wbfizu2m_: _,
              yh3l5zIsA: y,
              EyHTfTdKv: b,
              AeEPehjC_: S,
              ...C
            } = qn(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: A,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = F({
              defaultVariant: `VE5vuaFGV`,
              ref: i,
              variant: f,
              variantClassNames: Bn,
            }),
            L = Jn(e, P),
            R = j(zn, In, Re);
          return m(x, {
            id: d ?? a,
            children: m(Kn, {
              animate: P,
              initial: !1,
              children: m(Gn, {
                value: Hn,
                children: g(v.div, {
                  ...C,
                  ...D,
                  className: j(R, `framer-183wxh8`, u, T),
                  "data-border": !0,
                  "data-framer-name": `Process-card`,
                  layoutDependency: L,
                  layoutId: `VE5vuaFGV`,
                  ref: i,
                  style: {
                    "--1lge4gc": Vn(S),
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, rgb(149, 149, 149))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    boxShadow: `0px 0px 45px 0px rgba(177, 177, 177, 0.1)`,
                    ...c,
                  },
                  children: [
                    m(W, {
                      background: {
                        alt: `image`,
                        fit: `fill`,
                        intrinsicHeight: 540,
                        intrinsicWidth: 540,
                        pixelHeight: 540,
                        pixelWidth: 540,
                        sizes: `135px`,
                        ...Un(h),
                      },
                      className: `framer-4bgry`,
                      "data-framer-name": `Icon`,
                      layoutDependency: L,
                      layoutId: `hSdmwNp40`,
                    }),
                    g(v.div, {
                      className: `framer-lkvjki`,
                      "data-framer-name": `Content-box`,
                      layoutDependency: L,
                      layoutId: `kSATJqT_H`,
                      children: [
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(t, {
                            children: m(v.h2, {
                              className: `framer-styles-preset-fnm3fe`,
                              "data-styles-preset": `MmXtVxVpt`,
                              dir: `auto`,
                              children: `Understand`,
                            }),
                          }),
                          className: `framer-1q899yh`,
                          fonts: [`Inter`],
                          layoutDependency: L,
                          layoutId: `wI7EUjTMK`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(t, {
                            children: m(v.p, {
                              className: `framer-styles-preset-1mk8z8h`,
                              "data-styles-preset": `sPvC_pCwb`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0)))`,
                              },
                              children: `We start with the actual brief: who it’s for, what it needs to do, and how it should feel.`,
                            }),
                          }),
                          className: `framer-xeyjj7`,
                          fonts: [`Inter`],
                          layoutDependency: L,
                          layoutId: `oUUwPVgQW`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    m(V, {
                      height: 46,
                      children: m(k, {
                        className: `framer-1cvh800-container`,
                        layoutDependency: L,
                        layoutId: `hSdHA5RSw-container`,
                        nodeId: `hSdHA5RSw`,
                        rendersWithMotion: !0,
                        scopeId: `m91clwgoA`,
                        children: m(Ve, {
                          AN8wZ6h6b: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                          Cya6RuIUy: !1,
                          evTCyulAI: b,
                          FRGXCszKE: `Start a project`,
                          height: `100%`,
                          id: `hSdHA5RSw`,
                          KS1OTpe12: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                          layoutId: `hSdHA5RSw`,
                          OubOSgTqz: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                          qV_NmyJVp: !1,
                          RnDkx60mf: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                          s5zVGHZrm: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                          variant: Wn(`zphlO018I`),
                          VmYpdrASS: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                          w1blkKoqs: 0,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-3UI3O.framer-1dw51iv, .framer-3UI3O .framer-1dw51iv { display: block; }`,
          `.framer-3UI3O.framer-183wxh8 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; min-height: 440px; overflow: hidden; padding: var(--1lge4gc); position: relative; width: 620px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-3UI3O .framer-4bgry { flex: none; height: 135px; overflow: visible; position: relative; width: 135px; }`,
          `.framer-3UI3O .framer-lkvjki { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3UI3O .framer-1q899yh, .framer-3UI3O .framer-xeyjj7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-3UI3O .framer-1cvh800-container { flex: none; height: auto; position: relative; width: auto; }`,
          ...Fn,
          ...ze,
          `.framer-3UI3O[data-border="true"]::after, .framer-3UI3O [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-3UI3O`,
      )),
      (Xn = Yn),
      (Yn.displayName = `Process Card`),
      (Yn.defaultProps = { height: 440, width: 620 }),
      H(Yn, {
        N6RaqBoXI: {
          __defaultAssetReference: `data:framer/asset-reference,qTFgQB8ObY7Dhc9UVNb8JSA29RU.png?originalFilename=dreamina-2026-01-23-8741-Ultra-high-resolution+3D+icon+of+a+compa...+1.png&width=540&height=540`,
          __vekterDefault: {
            alt: `image`,
            assetReference: `data:framer/asset-reference,qTFgQB8ObY7Dhc9UVNb8JSA29RU.png?originalFilename=dreamina-2026-01-23-8741-Ultra-high-resolution+3D+icon+of+a+compa...+1.png&width=540&height=540`,
          },
          title: `Icon`,
          type: U.ResponsiveImage,
        },
        wbfizu2m_: {
          defaultValue: `Understand`,
          displayTextArea: !1,
          title: `Title`,
          type: U.String,
        },
        onwbfizu2m_Change: { changes: `wbfizu2m_`, type: U.ChangeHandler },
        yh3l5zIsA: {
          defaultValue: `We take time to understand your brand, business goals, audience behavior, and challenges, building a strong foundation before moving forward.`,
          displayTextArea: !1,
          title: `Content`,
          type: U.String,
        },
        onyh3l5zIsAChange: { changes: `yh3l5zIsA`, type: U.ChangeHandler },
        EyHTfTdKv: { title: `Link`, type: U.Link },
        AeEPehjC_: {
          defaultValue: `50px 40px 50px 40px`,
          title: `Padding`,
          type: U.Padding,
        },
      }),
      N(
        Yn,
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
          ...Rn,
          ...R(Pn),
          ...R(Ie),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Yn.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([P(Ve, {}, t)])),
      }));
  }),
  Qn,
  $n,
  er,
  tr = e(() => {
    (G(),
      M.loadFonts([
        `Inter-Bold`,
        `Inter-Black`,
        `Inter-BlackItalic`,
        `Inter-BoldItalic`,
      ]),
      (Qn = [
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
      ($n = [
        `.framer-49WMm .framer-styles-preset-ck8fzq:not(.rich-text-wrapper), .framer-49WMm .framer-styles-preset-ck8fzq.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -3.6px; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-49WMm .framer-styles-preset-ck8fzq:not(.rich-text-wrapper), .framer-49WMm .framer-styles-preset-ck8fzq.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -3.6px; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-49WMm .framer-styles-preset-ck8fzq:not(.rich-text-wrapper), .framer-49WMm .framer-styles-preset-ck8fzq.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 38px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -3.6px; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
      ]),
      (er = `framer-49WMm`));
  });
function nr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rr,
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
  vr = e(() => {
    (h(),
      G(),
      S(),
      s(),
      Se(),
      tr(),
      He(),
      (rr = T(Ue)),
      (ir = [`MZOTVRIP8`, `XjlRF0gIv`]),
      (ar = `framer-GCwp4`),
      (or = { MZOTVRIP8: `framer-v-b3hpjs`, XjlRF0gIv: `framer-v-1nd59zk` }),
      (sr = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (cr = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (lr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ur = ({ value: e, children: t }) => {
        let n = f(b),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: t });
      }),
      (dr = { Active: `XjlRF0gIv`, Default: `MZOTVRIP8` }),
      (fr = v.create(t)),
      (pr = (e, t) => {
        let [r, i] = n(e),
          [a, o] = n(e);
        return t ? [e, t] : (e !== a && (i(e), o(e)), [r, i]);
      }),
      (mr = ({
        click: e,
        content: t,
        height: n,
        id: r,
        padding: i,
        tagEight: a,
        tagEightVisible: o,
        tagFive: s,
        tagFour: c,
        tagNine: l,
        tagNineVisible: u,
        tagOne: d,
        tagSeven: f,
        tagSevenVisible: p,
        tagSix: m,
        tagSixVisible: h,
        tagThree: g,
        tagTwo: _,
        title: v,
        width: y,
        ...b
      }) => ({
        ...b,
        Bi7s7BE9K: m ?? b.Bi7s7BE9K ?? `Brand Identity Design`,
        eLgjwVFj5: o ?? b.eLgjwVFj5,
        f87RxiM8N: v ?? b.f87RxiM8N ?? `ºWeb Development`,
        FYyw_OmGH: e ?? b.FYyw_OmGH,
        HWqYdxUGp: d ?? b.HWqYdxUGp ?? `Brand Identity Design`,
        iG4Towlaq: a ?? b.iG4Towlaq ?? `Brand Identity Design`,
        mbtvyn8rr: f ?? b.mbtvyn8rr ?? `Brand Identity Design`,
        NPRX7X_1A: i ?? b.NPRX7X_1A ?? `50px 40px 50px 40px`,
        sCIUWfsx3: p ?? b.sCIUWfsx3,
        tcPbdcr4m: _ ?? b.tcPbdcr4m ?? `Logo & Visual Systems`,
        variant: dr[b.variant] ?? b.variant ?? `MZOTVRIP8`,
        VKC01_2m0: l ?? b.VKC01_2m0 ?? `Brand Identity Design`,
        VKn9M5067:
          t ??
          b.VKn9M5067 ??
          `We craft bold, refined brand identities and visuals that capture your essence and connect with your audience.`,
        VO6jJBjuR: c ?? b.VO6jJBjuR ?? `Digital Asset Creation`,
        XZvRRmpr8: g ?? b.XZvRRmpr8 ?? `Brand Guidelines & Collateral`,
        ydQSvKyAt: h ?? b.ydQSvKyAt,
        yQ1HBvKjm: s ?? b.yQ1HBvKjm ?? `Pakaaging`,
        Yu3wRQTqD: u ?? b.Yu3wRQTqD,
      })),
      (hr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (gr = D(
        c(function (e, n) {
          let r = p(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: s } = oe(),
            c = ue(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: h,
              f87RxiM8N: _,
              VKn9M5067: y,
              HWqYdxUGp: b,
              onHWqYdxUGpChange: S,
              tcPbdcr4m: C,
              ontcPbdcr4mChange: T,
              XZvRRmpr8: E,
              onXZvRRmpr8Change: D,
              VO6jJBjuR: O,
              onVO6jJBjuRChange: A,
              yQ1HBvKjm: M,
              onyQ1HBvKjmChange: N,
              Bi7s7BE9K: P,
              onBi7s7BE9KChange: L,
              ydQSvKyAt: R,
              mbtvyn8rr: ee,
              onmbtvyn8rrChange: z,
              sCIUWfsx3: ne,
              iG4Towlaq: B,
              oniG4TowlaqChange: re,
              eLgjwVFj5: ie,
              VKC01_2m0: ae,
              onVKC01_2m0Change: H,
              Yu3wRQTqD: se,
              FYyw_OmGH: ce,
              NPRX7X_1A: le,
              ...U
            } = mr(e),
            [G, de] = pr(b, S),
            [fe, pe] = pr(C, T),
            [K, me] = pr(E, D),
            [he, ge] = pr(O, A),
            [_e, ve] = pr(M, N),
            [ye, be] = pr(P, L),
            [xe, Se] = pr(ee, z),
            [Ce, we] = pr(B, re),
            [Ee, q] = pr(ae, H),
            {
              baseVariant: De,
              classNames: Oe,
              clearLoadingGesture: ke,
              gestureHandlers: Ae,
              gestureVariant: je,
              isLoading: Me,
              setGestureState: Ne,
              setVariant: Pe,
              variants: Fe,
            } = F({
              cycleOrder: ir,
              defaultVariant: `MZOTVRIP8`,
              ref: i,
              variant: h,
              variantClassNames: or,
            }),
            J = hr(e, Fe),
            { activeVariantCallback: Ie, delay: Le } = te(De),
            Re = Ie(async (...e) => {
              if ((Ne({ isPressed: !1 }), ce && (await ce(...e)) === !1))
                return !1;
            }),
            ze = j(ar, er, Te),
            Be = () => De === `XjlRF0gIv`,
            Ve =
              typeof le == `string`
                ? w(le)
                : { top: le, right: le, bottom: le, left: le };
          return m(x, {
            id: f ?? a,
            children: m(fr, {
              animate: Fe,
              initial: !1,
              children: m(ur, {
                value: cr,
                children: g(v.div, {
                  ...U,
                  ...Ae,
                  className: j(ze, `framer-b3hpjs`, d, Oe),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: J,
                  layoutId: `MZOTVRIP8`,
                  onTap: Re,
                  onMouseEnter: Re,
                  onMouseLeave: Re,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `1px`,
                    "--crtb2o": sr(le),
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...u,
                  },
                  variants: {
                    XjlRF0gIv: {
                      "--border-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                    },
                  },
                  ...nr(
                    { XjlRF0gIv: { "data-framer-name": `Active` } },
                    De,
                    je,
                  ),
                  children: [
                    m(I, {
                      __fromCanvasComponent: !0,
                      children: m(t, {
                        children: m(v.h1, {
                          className: `framer-styles-preset-ck8fzq`,
                          "data-styles-preset": `Uw3l4qsY8`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-gdpscs, var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123)))`,
                          },
                          children: `ºWeb Development`,
                        }),
                      }),
                      className: `framer-v2yxhw`,
                      fonts: [`Inter`],
                      layoutDependency: J,
                      layoutId: `BJQ4qFrY0`,
                      style: {
                        "--extracted-gdpscs": `var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: _,
                      variants: {
                        XjlRF0gIv: {
                          "--extracted-gdpscs": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...nr(
                        {
                          XjlRF0gIv: {
                            children: m(t, {
                              children: m(v.h1, {
                                className: `framer-styles-preset-ck8fzq`,
                                "data-styles-preset": `Uw3l4qsY8`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-gdpscs, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                                },
                                children: `ºWeb Development`,
                              }),
                            }),
                          },
                        },
                        De,
                        je,
                      ),
                    }),
                    Be() &&
                      m(W, {
                        background: {
                          alt: `line`,
                          fit: `fill`,
                          intrinsicHeight: 1,
                          intrinsicWidth: 888,
                          pixelHeight: 1,
                          pixelWidth: 888,
                          src: `https://framerusercontent.com/images/3qElXAvisx5E5GYvgxV2240D0Ec.svg?width=888&height=1`,
                          srcSet: `https://framerusercontent.com/images/3qElXAvisx5E5GYvgxV2240D0Ec.svg?scale-down-to=512&width=888&height=1 512w,https://framerusercontent.com/images/3qElXAvisx5E5GYvgxV2240D0Ec.svg?width=888&height=1 888w`,
                        },
                        className: `framer-1o49di`,
                        "data-framer-name": `Line`,
                        layoutDependency: J,
                        layoutId: `gapGaA1ja`,
                        ...nr(
                          {
                            XjlRF0gIv: {
                              background: {
                                alt: `line`,
                                fit: `fill`,
                                intrinsicHeight: 1,
                                intrinsicWidth: 888,
                                pixelHeight: 1,
                                pixelWidth: 888,
                                sizes: `calc(${c?.width || `100vw`} - ${(Ve?.left ?? 0) + (Ve?.right ?? 0)}px)`,
                                src: `https://framerusercontent.com/images/3qElXAvisx5E5GYvgxV2240D0Ec.svg?width=888&height=1`,
                                srcSet: `https://framerusercontent.com/images/3qElXAvisx5E5GYvgxV2240D0Ec.svg?scale-down-to=512&width=888&height=1 512w,https://framerusercontent.com/images/3qElXAvisx5E5GYvgxV2240D0Ec.svg?width=888&height=1 888w`,
                              },
                            },
                          },
                          De,
                          je,
                        ),
                      }),
                    g(v.div, {
                      className: `framer-1n2r75b`,
                      "data-framer-name": `Content & Tag`,
                      layoutDependency: J,
                      layoutId: `QHiWH0khA`,
                      style: { opacity: 0 },
                      variants: { XjlRF0gIv: { opacity: 1 } },
                      children: [
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(t, {
                            children: m(v.p, {
                              className: `framer-styles-preset-1mk8z8h`,
                              "data-styles-preset": `sPvC_pCwb`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                              },
                              children: `We craft bold, refined brand identities and visuals that capture your essence and connect with your audience.`,
                            }),
                          }),
                          className: `framer-159sstq`,
                          fonts: [`Inter`],
                          layoutDependency: J,
                          layoutId: `b5DeQGD9k`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        g(v.div, {
                          className: `framer-1t7x3cw`,
                          "data-framer-name": `Tags`,
                          layoutDependency: J,
                          layoutId: `doD4htQKS`,
                          children: [
                            m(V, {
                              height: 34,
                              children: m(k, {
                                className: `framer-hh42g4-container`,
                                "data-framer-name": `Tag-one`,
                                layoutDependency: J,
                                layoutId: `Ob88tJDJX-container`,
                                name: `Tag-one`,
                                nodeId: `Ob88tJDJX`,
                                rendersWithMotion: !0,
                                scopeId: `gB_Y2BKpp`,
                                children: m(Ue, {
                                  E68hvb6b7: `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                  G0ioNk51R: G,
                                  H3aAxfyA3: `10px`,
                                  height: `100%`,
                                  id: `Ob88tJDJX`,
                                  iijLKjEBG: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                  layoutId: `Ob88tJDJX`,
                                  name: `Tag-one`,
                                  onG0ioNk51RChange: de,
                                  TXO2R9TzR: `5px`,
                                  variant: lr(`HZqQEWd1Y`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            m(V, {
                              height: 34,
                              children: m(k, {
                                className: `framer-flefli-container`,
                                "data-framer-name": `Tag-two`,
                                layoutDependency: J,
                                layoutId: `ESNTN5WdX-container`,
                                name: `Tag-two`,
                                nodeId: `ESNTN5WdX`,
                                rendersWithMotion: !0,
                                scopeId: `gB_Y2BKpp`,
                                children: m(Ue, {
                                  E68hvb6b7: `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                  G0ioNk51R: fe,
                                  H3aAxfyA3: `10px`,
                                  height: `100%`,
                                  id: `ESNTN5WdX`,
                                  iijLKjEBG: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                  layoutId: `ESNTN5WdX`,
                                  name: `Tag-two`,
                                  onG0ioNk51RChange: pe,
                                  TXO2R9TzR: `5px`,
                                  variant: lr(`HZqQEWd1Y`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            m(V, {
                              height: 34,
                              children: m(k, {
                                className: `framer-1ydt6ad-container`,
                                "data-framer-name": `Tag-three`,
                                layoutDependency: J,
                                layoutId: `gHomhHP8q-container`,
                                name: `Tag-three`,
                                nodeId: `gHomhHP8q`,
                                rendersWithMotion: !0,
                                scopeId: `gB_Y2BKpp`,
                                children: m(Ue, {
                                  E68hvb6b7: `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                  G0ioNk51R: K,
                                  H3aAxfyA3: `10px`,
                                  height: `100%`,
                                  id: `gHomhHP8q`,
                                  iijLKjEBG: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                  layoutId: `gHomhHP8q`,
                                  name: `Tag-three`,
                                  onG0ioNk51RChange: me,
                                  TXO2R9TzR: `5px`,
                                  variant: lr(`HZqQEWd1Y`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            m(V, {
                              height: 34,
                              children: m(k, {
                                className: `framer-sn1bex-container`,
                                "data-framer-name": `Tag-four`,
                                layoutDependency: J,
                                layoutId: `aC6_aBRBP-container`,
                                name: `Tag-four`,
                                nodeId: `aC6_aBRBP`,
                                rendersWithMotion: !0,
                                scopeId: `gB_Y2BKpp`,
                                children: m(Ue, {
                                  E68hvb6b7: `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                  G0ioNk51R: he,
                                  H3aAxfyA3: `10px`,
                                  height: `100%`,
                                  id: `aC6_aBRBP`,
                                  iijLKjEBG: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                  layoutId: `aC6_aBRBP`,
                                  name: `Tag-four`,
                                  onG0ioNk51RChange: ge,
                                  TXO2R9TzR: `5px`,
                                  variant: lr(`HZqQEWd1Y`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            m(V, {
                              height: 34,
                              children: m(k, {
                                className: `framer-7bfs6i-container`,
                                "data-framer-name": `Tag-five`,
                                layoutDependency: J,
                                layoutId: `ZNKftpSrz-container`,
                                name: `Tag-five`,
                                nodeId: `ZNKftpSrz`,
                                rendersWithMotion: !0,
                                scopeId: `gB_Y2BKpp`,
                                children: m(Ue, {
                                  E68hvb6b7: `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                  G0ioNk51R: _e,
                                  H3aAxfyA3: `10px`,
                                  height: `100%`,
                                  id: `ZNKftpSrz`,
                                  iijLKjEBG: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                  layoutId: `ZNKftpSrz`,
                                  name: `Tag-five`,
                                  onG0ioNk51RChange: ve,
                                  TXO2R9TzR: `5px`,
                                  variant: lr(`HZqQEWd1Y`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            R !== !1 &&
                              m(V, {
                                height: 34,
                                children: m(k, {
                                  className: `framer-6otcws-container`,
                                  "data-framer-name": `Tag-six`,
                                  layoutDependency: J,
                                  layoutId: `KWQxPUA49-container`,
                                  name: `Tag-six`,
                                  nodeId: `KWQxPUA49`,
                                  rendersWithMotion: !0,
                                  scopeId: `gB_Y2BKpp`,
                                  children: m(Ue, {
                                    E68hvb6b7: `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                    G0ioNk51R: ye,
                                    H3aAxfyA3: `10px`,
                                    height: `100%`,
                                    id: `KWQxPUA49`,
                                    iijLKjEBG: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                    layoutId: `KWQxPUA49`,
                                    name: `Tag-six`,
                                    onG0ioNk51RChange: be,
                                    TXO2R9TzR: `5px`,
                                    variant: lr(`HZqQEWd1Y`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ne !== !1 &&
                              m(V, {
                                height: 34,
                                children: m(k, {
                                  className: `framer-ix8b33-container`,
                                  "data-framer-name": `Tag-seven`,
                                  layoutDependency: J,
                                  layoutId: `h8iuqyuXv-container`,
                                  name: `Tag-seven`,
                                  nodeId: `h8iuqyuXv`,
                                  rendersWithMotion: !0,
                                  scopeId: `gB_Y2BKpp`,
                                  children: m(Ue, {
                                    E68hvb6b7: `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                    G0ioNk51R: xe,
                                    H3aAxfyA3: `10px`,
                                    height: `100%`,
                                    id: `h8iuqyuXv`,
                                    iijLKjEBG: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                    layoutId: `h8iuqyuXv`,
                                    name: `Tag-seven`,
                                    onG0ioNk51RChange: Se,
                                    TXO2R9TzR: `5px`,
                                    variant: lr(`HZqQEWd1Y`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ie !== !1 &&
                              m(V, {
                                height: 34,
                                children: m(k, {
                                  className: `framer-o28m75-container`,
                                  "data-framer-name": `Tag-eight`,
                                  layoutDependency: J,
                                  layoutId: `rG4Pyqoo4-container`,
                                  name: `Tag-eight`,
                                  nodeId: `rG4Pyqoo4`,
                                  rendersWithMotion: !0,
                                  scopeId: `gB_Y2BKpp`,
                                  children: m(Ue, {
                                    E68hvb6b7: `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                    G0ioNk51R: Ce,
                                    H3aAxfyA3: `10px`,
                                    height: `100%`,
                                    id: `rG4Pyqoo4`,
                                    iijLKjEBG: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                    layoutId: `rG4Pyqoo4`,
                                    name: `Tag-eight`,
                                    onG0ioNk51RChange: we,
                                    TXO2R9TzR: `5px`,
                                    variant: lr(`HZqQEWd1Y`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            se !== !1 &&
                              m(V, {
                                height: 34,
                                children: m(k, {
                                  className: `framer-gxo3hi-container`,
                                  "data-framer-name": `Tag-nine`,
                                  layoutDependency: J,
                                  layoutId: `MrodmPfs0-container`,
                                  name: `Tag-nine`,
                                  nodeId: `MrodmPfs0`,
                                  rendersWithMotion: !0,
                                  scopeId: `gB_Y2BKpp`,
                                  children: m(Ue, {
                                    E68hvb6b7: `var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2))`,
                                    G0ioNk51R: Ee,
                                    H3aAxfyA3: `10px`,
                                    height: `100%`,
                                    id: `MrodmPfs0`,
                                    iijLKjEBG: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                    layoutId: `MrodmPfs0`,
                                    name: `Tag-nine`,
                                    onG0ioNk51RChange: q,
                                    TXO2R9TzR: `5px`,
                                    variant: lr(`HZqQEWd1Y`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    m(v.div, {
                      className: `framer-za2wbm`,
                      "data-framer-name": `Overlay`,
                      layoutDependency: J,
                      layoutId: `vJfaxzGwX`,
                      style: {
                        backgroundColor: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        opacity: 0,
                      },
                      variants: { XjlRF0gIv: { opacity: 1 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-GCwp4.framer-1kb6cws, .framer-GCwp4 .framer-1kb6cws { display: block; }`,
          `.framer-GCwp4.framer-b3hpjs { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: var(--crtb2o); position: relative; width: 968px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-GCwp4 .framer-v2yxhw { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
          `.framer-GCwp4 .framer-1o49di { flex: none; height: 1px; overflow: visible; position: relative; width: 100%; z-index: 2; }`,
          `.framer-GCwp4 .framer-1n2r75b { align-content: flex-start; align-items: flex-start; bottom: -146px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; left: 40px; max-width: 593px; overflow: visible; padding: 0px; position: absolute; width: 593px; z-index: 2; }`,
          `.framer-GCwp4 .framer-159sstq { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-GCwp4 .framer-1t7x3cw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-GCwp4 .framer-hh42g4-container, .framer-GCwp4 .framer-flefli-container, .framer-GCwp4 .framer-1ydt6ad-container, .framer-GCwp4 .framer-sn1bex-container, .framer-GCwp4 .framer-7bfs6i-container, .framer-GCwp4 .framer-6otcws-container, .framer-GCwp4 .framer-ix8b33-container, .framer-GCwp4 .framer-o28m75-container, .framer-GCwp4 .framer-gxo3hi-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-GCwp4 .framer-za2wbm { bottom: 1px; flex: none; left: 1px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-GCwp4.framer-v-1nd59zk .framer-1n2r75b { bottom: unset; left: unset; position: relative; width: 100%; }`,
          ...$n,
          ...Ce,
          `.framer-GCwp4[data-border="true"]::after, .framer-GCwp4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-GCwp4`,
      )),
      (_r = gr),
      (gr.displayName = `Service Box`),
      (gr.defaultProps = { height: 160, width: 968 }),
      H(gr, {
        variant: {
          options: [`MZOTVRIP8`, `XjlRF0gIv`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: U.Enum,
        },
        f87RxiM8N: {
          defaultValue: `ºWeb Development`,
          displayTextArea: !1,
          title: `Title`,
          type: U.String,
        },
        onf87RxiM8NChange: { changes: `f87RxiM8N`, type: U.ChangeHandler },
        VKn9M5067: {
          defaultValue: `We craft bold, refined brand identities and visuals that capture your essence and connect with your audience.`,
          displayTextArea: !1,
          title: `Content`,
          type: U.String,
        },
        onVKn9M5067Change: { changes: `VKn9M5067`, type: U.ChangeHandler },
        HWqYdxUGp: {
          defaultValue: `Brand Identity Design`,
          displayTextArea: !1,
          title: `Tag One`,
          type: U.String,
        },
        onHWqYdxUGpChange: { changes: `HWqYdxUGp`, type: U.ChangeHandler },
        tcPbdcr4m: {
          defaultValue: `Logo & Visual Systems`,
          displayTextArea: !1,
          title: `Tag Two`,
          type: U.String,
        },
        ontcPbdcr4mChange: { changes: `tcPbdcr4m`, type: U.ChangeHandler },
        XZvRRmpr8: {
          defaultValue: `Brand Guidelines & Collateral`,
          displayTextArea: !1,
          title: `Tag Three`,
          type: U.String,
        },
        onXZvRRmpr8Change: { changes: `XZvRRmpr8`, type: U.ChangeHandler },
        VO6jJBjuR: {
          defaultValue: `Digital Asset Creation`,
          displayTextArea: !1,
          title: `Tag Four`,
          type: U.String,
        },
        onVO6jJBjuRChange: { changes: `VO6jJBjuR`, type: U.ChangeHandler },
        yQ1HBvKjm: {
          defaultValue: `Pakaaging`,
          displayTextArea: !1,
          title: `Tag Five`,
          type: U.String,
        },
        onyQ1HBvKjmChange: { changes: `yQ1HBvKjm`, type: U.ChangeHandler },
        Bi7s7BE9K: {
          defaultValue: `Brand Identity Design`,
          displayTextArea: !1,
          title: `Tag Six`,
          type: U.String,
        },
        onBi7s7BE9KChange: { changes: `Bi7s7BE9K`, type: U.ChangeHandler },
        ydQSvKyAt: {
          defaultValue: !1,
          title: `Tag Six Visible`,
          type: U.Boolean,
        },
        onydQSvKyAtChange: { changes: `ydQSvKyAt`, type: U.ChangeHandler },
        mbtvyn8rr: {
          defaultValue: `Brand Identity Design`,
          displayTextArea: !1,
          title: `Tag Seven`,
          type: U.String,
        },
        onmbtvyn8rrChange: { changes: `mbtvyn8rr`, type: U.ChangeHandler },
        sCIUWfsx3: {
          defaultValue: !1,
          title: `Tag Seven Visible`,
          type: U.Boolean,
        },
        onsCIUWfsx3Change: { changes: `sCIUWfsx3`, type: U.ChangeHandler },
        iG4Towlaq: {
          defaultValue: `Brand Identity Design`,
          displayTextArea: !1,
          title: `Tag Eight`,
          type: U.String,
        },
        oniG4TowlaqChange: { changes: `iG4Towlaq`, type: U.ChangeHandler },
        eLgjwVFj5: {
          defaultValue: !1,
          title: `Tag Eight Visible`,
          type: U.Boolean,
        },
        oneLgjwVFj5Change: { changes: `eLgjwVFj5`, type: U.ChangeHandler },
        VKC01_2m0: {
          defaultValue: `Brand Identity Design`,
          displayTextArea: !1,
          title: `Tag Nine`,
          type: U.String,
        },
        onVKC01_2m0Change: { changes: `VKC01_2m0`, type: U.ChangeHandler },
        Yu3wRQTqD: {
          defaultValue: !1,
          title: `Tag Nine Visible`,
          type: U.Boolean,
        },
        onYu3wRQTqDChange: { changes: `Yu3wRQTqD`, type: U.ChangeHandler },
        FYyw_OmGH: { title: `Click`, type: U.EventHandler },
        NPRX7X_1A: {
          defaultValue: `50px 40px 50px 40px`,
          title: `Padding`,
          type: U.Padding,
        },
      }),
      N(
        gr,
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
          ...rr,
          ...R(Qn),
          ...R(we),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (gr.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([P(Ue, {}, t)])),
      }));
  });
function yr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  X,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr = e(() => {
    (h(),
      G(),
      S(),
      s(),
      vr(),
      (br = T(_r)),
      (xr = L(k)),
      (Sr = [
        `o6E4hfV7s`,
        `BL1HdoSAf`,
        `l_hN04P3j`,
        `nIo5jgpSI`,
        `McijgJ7nH`,
        `P9toMsnb8`,
        `ZWZD2YjMt`,
        `XD_vT3zzs`,
        `H0bqoheM5`,
        `BvXHhTX2J`,
        `mJQDynqPt`,
        `RfstL7OTh`,
      ]),
      (Cr = `framer-6YEAS`),
      (wr = {
        BL1HdoSAf: `framer-v-1xsq4oi`,
        BvXHhTX2J: `framer-v-12lap48`,
        H0bqoheM5: `framer-v-cvnyau`,
        l_hN04P3j: `framer-v-17u0l6`,
        McijgJ7nH: `framer-v-1kmafru`,
        mJQDynqPt: `framer-v-c3ce2p`,
        nIo5jgpSI: `framer-v-qlhf89`,
        o6E4hfV7s: `framer-v-8tyvp2`,
        P9toMsnb8: `framer-v-1lbnkqn`,
        RfstL7OTh: `framer-v-1bzkm8p`,
        XD_vT3zzs: `framer-v-1jy1xh1`,
        ZWZD2YjMt: `framer-v-1dek35h`,
      }),
      (Tr = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Er = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 80,
      }),
      (Dr = {
        damping: 150,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Or = {
        damping: 150,
        delay: 0.2,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (kr = { damping: 80, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (Ar = {
        damping: 150,
        delay: 0.4,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (jr = {
        damping: 150,
        delay: 0.6,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (Mr = ({ value: e, children: t }) => {
        let n = f(b),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: t });
      }),
      (Nr = {
        "Phone-v2": `BvXHhTX2J`,
        "Phone-v3": `mJQDynqPt`,
        "Phone-v4": `RfstL7OTh`,
        "Tablet-v2": `P9toMsnb8`,
        "Tablet-v3": `ZWZD2YjMt`,
        "Tablet-v4": `XD_vT3zzs`,
        Phone: `H0bqoheM5`,
        Tablet: `McijgJ7nH`,
        V1: `o6E4hfV7s`,
        V2: `BL1HdoSAf`,
        V3: `l_hN04P3j`,
        V4: `nIo5jgpSI`,
      }),
      (Pr = v.create(t)),
      (Fr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Nr[r.variant] ?? r.variant ?? `o6E4hfV7s`,
      })),
      (Ir = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Lr = D(
        c(function (e, t) {
          let n = p(null),
            r = t ?? n,
            i = l(),
            { activeLocale: a, setLocale: o } = oe(),
            s = ue(),
            { style: c, className: u, layoutId: d, variant: f, ...h } = Fr(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = F({
              cycleOrder: Sr,
              defaultVariant: `o6E4hfV7s`,
              ref: r,
              variant: f,
              variantClassNames: wr,
            }),
            O = Ir(e, D),
            { activeVariantCallback: k, delay: A } = te(_),
            M = k(async (...e) => {
              E(`o6E4hfV7s`);
            }),
            N = k(async (...e) => {
              E(`McijgJ7nH`);
            }),
            P = k(async (...e) => {
              E(`H0bqoheM5`);
            }),
            I = k(async (...e) => {
              E(`BL1HdoSAf`);
            }),
            L = k(async (...e) => {
              E(`P9toMsnb8`);
            }),
            R = k(async (...e) => {
              E(`BvXHhTX2J`);
            }),
            ee = k(async (...e) => {
              E(`l_hN04P3j`);
            }),
            z = k(async (...e) => {
              E(`ZWZD2YjMt`);
            }),
            ne = k(async (...e) => {
              E(`mJQDynqPt`);
            }),
            B = k(async (...e) => {
              E(`nIo5jgpSI`);
            }),
            re = k(async (...e) => {
              E(`XD_vT3zzs`);
            }),
            ie = k(async (...e) => {
              E(`RfstL7OTh`);
            }),
            ae = j(Cr);
          return m(x, {
            id: d ?? i,
            children: m(Pr, {
              animate: D,
              initial: !1,
              children: m(Mr, {
                value: Tr,
                children: m(v.div, {
                  ...h,
                  ...S,
                  className: j(ae, `framer-8tyvp2`, u, y),
                  "data-framer-name": `V1`,
                  layoutDependency: O,
                  layoutId: `o6E4hfV7s`,
                  ref: r,
                  style: { ...c },
                  ...yr(
                    {
                      BL1HdoSAf: { "data-framer-name": `V2` },
                      BvXHhTX2J: { "data-framer-name": `Phone-v2` },
                      H0bqoheM5: { "data-framer-name": `Phone` },
                      l_hN04P3j: { "data-framer-name": `V3` },
                      McijgJ7nH: { "data-framer-name": `Tablet` },
                      mJQDynqPt: { "data-framer-name": `Phone-v3` },
                      nIo5jgpSI: { "data-framer-name": `V4` },
                      P9toMsnb8: { "data-framer-name": `Tablet-v2` },
                      RfstL7OTh: { "data-framer-name": `Phone-v4` },
                      XD_vT3zzs: { "data-framer-name": `Tablet-v4` },
                      ZWZD2YjMt: { "data-framer-name": `Tablet-v3` },
                    },
                    _,
                    C,
                  ),
                  children: g(v.div, {
                    className: `framer-ejzg1o`,
                    "data-framer-name": `Service-content`,
                    layoutDependency: O,
                    layoutId: `lA8EpkHq0`,
                    children: [
                      m(V, {
                        height: 160,
                        width: `max(${s?.width || `100vw`}, 1px)`,
                        y: (s?.y || 0) + 0 + 0 + 0,
                        ...yr(
                          {
                            BvXHhTX2J: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 0,
                            },
                            H0bqoheM5: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 0,
                            },
                            mJQDynqPt: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 0,
                            },
                            RfstL7OTh: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 0,
                            },
                          },
                          _,
                          C,
                        ),
                        children: m(xr, {
                          __framer__animate: { transition: Dr },
                          __framer__animateOnce: !0,
                          __framer__enter: Er,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-15ck3xo-container`,
                          layoutDependency: O,
                          layoutId: `l9zNU41m4-container`,
                          nodeId: `l9zNU41m4`,
                          rendersWithMotion: !0,
                          scopeId: `MLJMGtuhM`,
                          children: m(_r, {
                            Bi7s7BE9K: `Brand Identity Design`,
                            eLgjwVFj5: !1,
                            f87RxiM8N: `Web Development`,
                            height: `100%`,
                            HWqYdxUGp: `Brand Identity Design`,
                            id: `l9zNU41m4`,
                            iG4Towlaq: `Brand Identity Design`,
                            layoutId: `l9zNU41m4`,
                            mbtvyn8rr: `Brand Identity Design`,
                            NPRX7X_1A: `50px 40px 50px 40px`,
                            sCIUWfsx3: !1,
                            style: { width: `100%` },
                            tcPbdcr4m: `Responsive layout`,
                            variant: X(`XjlRF0gIv`),
                            VKC01_2m0: `Brand Identity Design`,
                            VKn9M5067: `Hand-built frontends with clean markup, sensible CSS, and JavaScript that stays quick on a phone.`,
                            VO6jJBjuR: `Semantic HTML`,
                            width: `100%`,
                            XZvRRmpr8: `CSS architecture`,
                            ydQSvKyAt: !1,
                            yQ1HBvKjm: `JavaScript`,
                            Yu3wRQTqD: !1,
                            ...yr(
                              {
                                BL1HdoSAf: {
                                  FYyw_OmGH: M,
                                  variant: X(`MZOTVRIP8`),
                                },
                                BvXHhTX2J: {
                                  FYyw_OmGH: P,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`MZOTVRIP8`),
                                },
                                H0bqoheM5: { NPRX7X_1A: `30px 20px 30px 20px` },
                                l_hN04P3j: {
                                  FYyw_OmGH: M,
                                  variant: X(`MZOTVRIP8`),
                                },
                                McijgJ7nH: { NPRX7X_1A: `30px 20px 30px 20px` },
                                mJQDynqPt: {
                                  FYyw_OmGH: P,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`MZOTVRIP8`),
                                },
                                nIo5jgpSI: {
                                  FYyw_OmGH: M,
                                  variant: X(`MZOTVRIP8`),
                                },
                                P9toMsnb8: {
                                  FYyw_OmGH: N,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`MZOTVRIP8`),
                                },
                                RfstL7OTh: {
                                  FYyw_OmGH: P,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`MZOTVRIP8`),
                                },
                                XD_vT3zzs: {
                                  FYyw_OmGH: N,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`MZOTVRIP8`),
                                },
                                ZWZD2YjMt: {
                                  FYyw_OmGH: N,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`MZOTVRIP8`),
                                },
                              },
                              _,
                              C,
                            ),
                          }),
                        }),
                      }),
                      m(V, {
                        height: 160,
                        width: `max(${s?.width || `100vw`}, 1px)`,
                        y: (s?.y || 0) + 0 + 0 + 170,
                        ...yr(
                          {
                            BvXHhTX2J: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 180,
                            },
                            H0bqoheM5: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 180,
                            },
                            mJQDynqPt: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 180,
                            },
                            RfstL7OTh: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 180,
                            },
                          },
                          _,
                          C,
                        ),
                        children: m(xr, {
                          __framer__animate: { transition: Or },
                          __framer__animateOnce: !0,
                          __framer__enter: Er,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-sxu14x-container`,
                          layoutDependency: O,
                          layoutId: `zl40ffgFe-container`,
                          nodeId: `zl40ffgFe`,
                          rendersWithMotion: !0,
                          scopeId: `MLJMGtuhM`,
                          ...yr(
                            {
                              BvXHhTX2J: {
                                __framer__animate: { transition: kr },
                              },
                              H0bqoheM5: {
                                __framer__animate: { transition: kr },
                              },
                              mJQDynqPt: {
                                __framer__animate: { transition: kr },
                              },
                              RfstL7OTh: {
                                __framer__animate: { transition: kr },
                              },
                            },
                            _,
                            C,
                          ),
                          children: m(_r, {
                            Bi7s7BE9K: `Responsive design`,
                            eLgjwVFj5: !1,
                            f87RxiM8N: `Business Websites`,
                            FYyw_OmGH: I,
                            height: `100%`,
                            HWqYdxUGp: `SEO basics`,
                            id: `zl40ffgFe`,
                            iG4Towlaq: `Brand Identity Design`,
                            layoutId: `zl40ffgFe`,
                            mbtvyn8rr: `Brand Identity Design`,
                            NPRX7X_1A: `50px 40px 50px 40px`,
                            sCIUWfsx3: !1,
                            style: { width: `100%` },
                            tcPbdcr4m: `CMS setup`,
                            variant: X(`MZOTVRIP8`),
                            VKC01_2m0: `Brand Identity Design`,
                            VKn9M5067: `Sites for studios, shops and local businesses that need to look sharp and load fast.`,
                            VO6jJBjuR: `Booking flows`,
                            width: `100%`,
                            XZvRRmpr8: `Google Maps`,
                            ydQSvKyAt: !0,
                            yQ1HBvKjm: `Speed tuning`,
                            Yu3wRQTqD: !1,
                            ...yr(
                              {
                                BL1HdoSAf: { variant: X(`XjlRF0gIv`) },
                                BvXHhTX2J: {
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`XjlRF0gIv`),
                                },
                                H0bqoheM5: {
                                  FYyw_OmGH: R,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                McijgJ7nH: {
                                  FYyw_OmGH: L,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                mJQDynqPt: {
                                  FYyw_OmGH: R,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                P9toMsnb8: {
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`XjlRF0gIv`),
                                },
                                RfstL7OTh: {
                                  FYyw_OmGH: R,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                XD_vT3zzs: {
                                  FYyw_OmGH: L,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                ZWZD2YjMt: {
                                  FYyw_OmGH: L,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                              },
                              _,
                              C,
                            ),
                          }),
                        }),
                      }),
                      m(V, {
                        height: 160,
                        width: `max(${s?.width || `100vw`}, 1px)`,
                        y: (s?.y || 0) + 0 + 0 + 340,
                        ...yr(
                          {
                            BvXHhTX2J: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 360,
                            },
                            H0bqoheM5: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 360,
                            },
                            mJQDynqPt: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 360,
                            },
                            RfstL7OTh: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 360,
                            },
                          },
                          _,
                          C,
                        ),
                        children: m(xr, {
                          __framer__animate: { transition: Ar },
                          __framer__animateOnce: !0,
                          __framer__enter: Er,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-14h33cp-container`,
                          layoutDependency: O,
                          layoutId: `a3xRjdKT7-container`,
                          nodeId: `a3xRjdKT7`,
                          rendersWithMotion: !0,
                          scopeId: `MLJMGtuhM`,
                          ...yr(
                            {
                              BvXHhTX2J: {
                                __framer__animate: { transition: kr },
                              },
                              H0bqoheM5: {
                                __framer__animate: { transition: kr },
                              },
                              mJQDynqPt: {
                                __framer__animate: { transition: kr },
                              },
                              RfstL7OTh: {
                                __framer__animate: { transition: kr },
                              },
                            },
                            _,
                            C,
                          ),
                          children: m(_r, {
                            Bi7s7BE9K: `Brand Identity Design`,
                            eLgjwVFj5: !1,
                            f87RxiM8N: `Landing Pages`,
                            FYyw_OmGH: ee,
                            height: `100%`,
                            HWqYdxUGp: `Hero section`,
                            id: `a3xRjdKT7`,
                            iG4Towlaq: `Brand Identity Design`,
                            layoutId: `a3xRjdKT7`,
                            mbtvyn8rr: `Brand Identity Design`,
                            NPRX7X_1A: `50px 40px 50px 40px`,
                            sCIUWfsx3: !1,
                            style: { width: `100%` },
                            tcPbdcr4m: `Scroll motion`,
                            variant: X(`MZOTVRIP8`),
                            VKC01_2m0: `Brand Identity Design`,
                            VKn9M5067: `Focused one-page builds for launches, products and ideas that need a sharp first impression.`,
                            VO6jJBjuR: `Clear calls to action`,
                            width: `100%`,
                            XZvRRmpr8: `On-brand layout`,
                            ydQSvKyAt: !1,
                            yQ1HBvKjm: `Fast first load`,
                            Yu3wRQTqD: !1,
                            ...yr(
                              {
                                BvXHhTX2J: {
                                  FYyw_OmGH: ne,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                H0bqoheM5: {
                                  FYyw_OmGH: ne,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                l_hN04P3j: { variant: X(`XjlRF0gIv`) },
                                McijgJ7nH: {
                                  FYyw_OmGH: z,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                mJQDynqPt: {
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`XjlRF0gIv`),
                                },
                                P9toMsnb8: {
                                  FYyw_OmGH: z,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                RfstL7OTh: {
                                  FYyw_OmGH: ne,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                XD_vT3zzs: {
                                  FYyw_OmGH: z,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                ZWZD2YjMt: {
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`XjlRF0gIv`),
                                },
                              },
                              _,
                              C,
                            ),
                          }),
                        }),
                      }),
                      m(V, {
                        height: 160,
                        width: `max(${s?.width || `100vw`}, 1px)`,
                        y: (s?.y || 0) + 0 + 0 + 510,
                        ...yr(
                          {
                            BvXHhTX2J: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 540,
                            },
                            H0bqoheM5: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 540,
                            },
                            mJQDynqPt: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 540,
                            },
                            RfstL7OTh: {
                              width: s?.width || `100vw`,
                              y: (s?.y || 0) + 0 + 0 + 0 + 540,
                            },
                          },
                          _,
                          C,
                        ),
                        children: m(xr, {
                          __framer__animate: { transition: jr },
                          __framer__animateOnce: !0,
                          __framer__enter: Er,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-8rmmwu-container`,
                          layoutDependency: O,
                          layoutId: `LjPRzKJQA-container`,
                          nodeId: `LjPRzKJQA`,
                          rendersWithMotion: !0,
                          scopeId: `MLJMGtuhM`,
                          ...yr(
                            {
                              BvXHhTX2J: {
                                __framer__animate: { transition: kr },
                              },
                              H0bqoheM5: {
                                __framer__animate: { transition: kr },
                              },
                              mJQDynqPt: {
                                __framer__animate: { transition: kr },
                              },
                              RfstL7OTh: {
                                __framer__animate: { transition: kr },
                              },
                            },
                            _,
                            C,
                          ),
                          children: m(_r, {
                            Bi7s7BE9K: `Brand Identity Design`,
                            eLgjwVFj5: !1,
                            f87RxiM8N: `Web Tools & Products`,
                            FYyw_OmGH: B,
                            height: `100%`,
                            HWqYdxUGp: `Custom JavaScript`,
                            id: `LjPRzKJQA`,
                            iG4Towlaq: `Brand Identity Design`,
                            layoutId: `LjPRzKJQA`,
                            mbtvyn8rr: `Brand Identity Design`,
                            NPRX7X_1A: `50px 40px 50px 40px`,
                            sCIUWfsx3: !1,
                            style: { width: `100%` },
                            tcPbdcr4m: `API wiring`,
                            variant: X(`MZOTVRIP8`),
                            VKC01_2m0: `Brand Identity Design`,
                            VKn9M5067: `Interactive tools and small web products — calculators, dashboards, apps that do real work.`,
                            VO6jJBjuR: `Data handling`,
                            width: `100%`,
                            XZvRRmpr8: `Interface design`,
                            ydQSvKyAt: !1,
                            yQ1HBvKjm: `Handover notes`,
                            Yu3wRQTqD: !1,
                            ...yr(
                              {
                                BvXHhTX2J: {
                                  FYyw_OmGH: ie,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                H0bqoheM5: {
                                  FYyw_OmGH: ie,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                McijgJ7nH: {
                                  FYyw_OmGH: re,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                mJQDynqPt: {
                                  FYyw_OmGH: ie,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                nIo5jgpSI: { variant: X(`XjlRF0gIv`) },
                                P9toMsnb8: {
                                  FYyw_OmGH: re,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                                RfstL7OTh: {
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`XjlRF0gIv`),
                                },
                                XD_vT3zzs: {
                                  FYyw_OmGH: re,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                  variant: X(`XjlRF0gIv`),
                                },
                                ZWZD2YjMt: {
                                  FYyw_OmGH: re,
                                  NPRX7X_1A: `30px 20px 30px 20px`,
                                },
                              },
                              _,
                              C,
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
          `.framer-6YEAS.framer-x18nj4, .framer-6YEAS .framer-x18nj4 { display: block; }`,
          `.framer-6YEAS.framer-8tyvp2 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 56px 56px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1120px; }`,
          `.framer-6YEAS .framer-ejzg1o { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-6YEAS .framer-15ck3xo-container, .framer-6YEAS .framer-sxu14x-container, .framer-6YEAS .framer-14h33cp-container, .framer-6YEAS .framer-8rmmwu-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-6YEAS.framer-v-1kmafru.framer-8tyvp2 { gap: 40px; justify-content: flex-start; width: 810px; }`,
          `.framer-6YEAS.framer-v-1lbnkqn.framer-8tyvp2, .framer-6YEAS.framer-v-1dek35h.framer-8tyvp2, .framer-6YEAS.framer-v-1jy1xh1.framer-8tyvp2 { justify-content: flex-start; width: 810px; }`,
          `.framer-6YEAS.framer-v-cvnyau.framer-8tyvp2, .framer-6YEAS.framer-v-12lap48.framer-8tyvp2, .framer-6YEAS.framer-v-c3ce2p.framer-8tyvp2, .framer-6YEAS.framer-v-1bzkm8p.framer-8tyvp2 { flex-direction: column; justify-content: flex-start; width: 390px; }`,
          `.framer-6YEAS.framer-v-cvnyau .framer-ejzg1o, .framer-6YEAS.framer-v-12lap48 .framer-ejzg1o, .framer-6YEAS.framer-v-c3ce2p .framer-ejzg1o, .framer-6YEAS.framer-v-1bzkm8p .framer-ejzg1o { flex: none; gap: 20px; width: 100%; }`,
        ],
        `framer-6YEAS`,
      )),
      (Rr = Lr),
      (Lr.displayName = `Service Tab`),
      (Lr.defaultProps = { height: 863, width: 1120 }),
      H(Lr, {
        variant: {
          options: [
            `o6E4hfV7s`,
            `BL1HdoSAf`,
            `l_hN04P3j`,
            `nIo5jgpSI`,
            `McijgJ7nH`,
            `P9toMsnb8`,
            `ZWZD2YjMt`,
            `XD_vT3zzs`,
            `H0bqoheM5`,
            `BvXHhTX2J`,
            `mJQDynqPt`,
            `RfstL7OTh`,
          ],
          optionTitles: [
            `V1`,
            `V2`,
            `V3`,
            `V4`,
            `Tablet`,
            `Tablet-v2`,
            `Tablet-v3`,
            `Tablet-v4`,
            `Phone`,
            `Phone-v2`,
            `Phone-v3`,
            `Phone-v4`,
          ],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      N(Lr, [{ explicitInter: !0, fonts: [] }, ...br], {
        supportsExplicitInterCodegen: !0,
      }),
      (Lr.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([P(_r, {}, t)])),
      }));
  }),
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr = e(() => {
    (h(),
      G(),
      s(),
      (Br = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 6 6 L 12 0" fill="transparent" height="6px" id="YQ5iVcvh8" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(6 9)" width="12px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Vr = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(v.div, { ...a, layoutId: r, ref: t })
          : m(`div`, { ...a, ref: t });
      })),
      (Hr = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        UO5clYVeQ: n ?? i.UO5clYVeQ ?? `rgb(0, 0, 0)`,
      })),
      (Ur = D(
        c(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            UO5clYVeQ: o,
            ...s
          } = Hr(e);
          return m(Vr, {
            ...s,
            className: j(`framer-yvgXh`, r),
            layoutId: i,
            ref: t,
            style: { "--43q7um": o, ...n },
          });
        }),
        [
          `.framer-yvgXh { -webkit-mask: ${Br}; aspect-ratio: 1; background-color: var(--43q7um); mask: ${Br}; width: 24px; }`,
        ],
        `framer-yvgXh`,
      )),
      (Ur.displayName = `Chevron Down`),
      (Wr = Ur),
      H(Ur, {
        UO5clYVeQ: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Stroke`,
          type: U.Color,
        },
      }));
  });
function Kr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi = e(() => {
    (h(),
      G(),
      S(),
      s(),
      Gr(),
      Je(),
      Le(),
      (qr = T(Wr)),
      (Jr = [`RcvbkiH3H`, `k5iU4USu4`]),
      (Yr = `framer-UTn0N`),
      (Xr = { k5iU4USu4: `framer-v-1hkiiyg`, RcvbkiH3H: `framer-v-c1t0q9` }),
      (Zr = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Qr = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      ($r = ({ value: e, children: t }) => {
        let n = f(b),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: t });
      }),
      (ei = { Default: `RcvbkiH3H`, Open: `k5iU4USu4` }),
      (ti = v.create(t)),
      (ni = ({
        answer: e,
        click: t,
        height: n,
        id: r,
        padding: i,
        question: a,
        width: o,
        ...s
      }) => ({
        ...s,
        l2uF7trzp:
          e ??
          s.l2uF7trzp ??
          `Business sites, landing pages and portfolios — mostly. If a project needs real front-end work, custom layout, motion or data, that’s the kind I like best.`,
        OebCJbASJ: i ?? s.OebCJbASJ ?? `40px`,
        UxnOWaBgk: a ?? s.UxnOWaBgk ?? `What kind of websites do you build?`,
        variant: ei[s.variant] ?? s.variant ?? `RcvbkiH3H`,
        X3Jz1cSJh: t ?? s.X3Jz1cSJh,
      })),
      (ri = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ii = D(
        c(function (e, n) {
          let r = p(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: s } = oe();
          ue();
          let {
              style: c,
              className: u,
              layoutId: d,
              variant: f,
              UxnOWaBgk: h,
              l2uF7trzp: _,
              X3Jz1cSJh: y,
              OebCJbASJ: b,
              ...S
            } = ni(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: k,
              setVariant: A,
              variants: M,
            } = F({
              cycleOrder: Jr,
              defaultVariant: `RcvbkiH3H`,
              ref: i,
              variant: f,
              variantClassNames: Xr,
            }),
            N = ri(e, M),
            { activeVariantCallback: P, delay: L } = te(C),
            R = P(async (...e) => {
              if ((k({ isPressed: !1 }), y && (await y(...e)) === !1))
                return !1;
            }),
            ee = j(Yr, Ze, Re);
          return m(x, {
            id: d ?? a,
            children: m(ti, {
              animate: M,
              initial: !1,
              children: m($r, {
                value: Qr,
                children: g(v.div, {
                  ...S,
                  ...E,
                  className: j(ee, `framer-c1t0q9`, u, w),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: N,
                  layoutId: `RcvbkiH3H`,
                  onTap: R,
                  ref: i,
                  style: {
                    "--1p3m76f": Zr(b),
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, rgb(149, 149, 149))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    boxShadow: `0px 0px 45px 0px rgba(177, 177, 177, 0.1)`,
                    ...c,
                  },
                  variants: {
                    k5iU4USu4: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      boxShadow: `0px 103px 29px 0px rgba(0, 0, 0, 0), 0px 66px 26px 0px rgba(0, 0, 0, 0.04), 0px 37px 22px 0px rgba(0, 0, 0, 0.12), 0px 16px 16px 0px rgba(0, 0, 0, 0.21), 0px 4px 9px 0px rgba(0, 0, 0, 0.24)`,
                    },
                  },
                  ...Kr({ k5iU4USu4: { "data-framer-name": `Open` } }, C, D),
                  children: [
                    g(v.div, {
                      className: `framer-1ckz8pk`,
                      "data-framer-name": `Title-box`,
                      layoutDependency: N,
                      layoutId: `wEJ1EWPkm`,
                      style: { filter: `none`, WebkitFilter: `none` },
                      variants: {
                        k5iU4USu4: {
                          filter: `invert(1)`,
                          WebkitFilter: `invert(1)`,
                        },
                      },
                      children: [
                        m(I, {
                          __fromCanvasComponent: !0,
                          children: m(t, {
                            children: m(v.h6, {
                              className: `framer-styles-preset-1litcpx`,
                              "data-styles-preset": `kyo9an03l`,
                              dir: `auto`,
                              children: `What kind of websites do you build?`,
                            }),
                          }),
                          className: `framer-4t598l`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `jp1PoMugE`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: h,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        m(Wr, {
                          animated: !0,
                          className: `framer-wkig2d`,
                          layoutDependency: N,
                          layoutId: `BaSPZMzli`,
                          style: {
                            "--43q7um": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                            rotate: 0,
                          },
                          variants: { k5iU4USu4: { rotate: -180 } },
                        }),
                      ],
                    }),
                    m(I, {
                      __fromCanvasComponent: !0,
                      children: m(t, {
                        children: m(v.p, {
                          className: `framer-styles-preset-1mk8z8h`,
                          "data-styles-preset": `sPvC_pCwb`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, rgb(149, 149, 149)))`,
                          },
                          children: `Business sites, landing pages and portfolios — mostly. If a project needs real front-end work, custom layout, motion or data, that’s the kind I like best.`,
                        }),
                      }),
                      className: `framer-axk3f`,
                      fonts: [`Inter`],
                      layoutDependency: N,
                      layoutId: `FwMTY2h51`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, rgb(149, 149, 149))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        opacity: 0,
                      },
                      text: _,
                      variants: { k5iU4USu4: { opacity: 1 } },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    m(v.div, {
                      className: `framer-8yq25d`,
                      "data-framer-name": `BG`,
                      layoutDependency: N,
                      layoutId: `W4lasFmdr`,
                      style: {
                        backgroundColor: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                        opacity: 0,
                      },
                      variants: { k5iU4USu4: { opacity: 1 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-UTn0N.framer-1s8v3ae, .framer-UTn0N .framer-1s8v3ae { display: block; }`,
          `.framer-UTn0N.framer-c1t0q9 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: var(--1p3m76f); position: relative; width: 838px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-UTn0N .framer-1ckz8pk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-UTn0N .framer-4t598l { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-UTn0N .framer-wkig2d { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
          `.framer-UTn0N .framer-axk3f { bottom: -40px; flex: none; height: auto; left: 40px; max-width: 574px; position: absolute; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
          `.framer-UTn0N .framer-8yq25d { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-UTn0N.framer-v-1hkiiyg .framer-axk3f { bottom: unset; left: unset; position: relative; }`,
          ...Ye,
          ...ze,
          `.framer-UTn0N[data-border="true"]::after, .framer-UTn0N [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-UTn0N`,
      )),
      (ai = ii),
      (ii.displayName = `FAQ Box`),
      (ii.defaultProps = { height: 104, width: 838 }),
      H(ii, {
        variant: {
          options: [`RcvbkiH3H`, `k5iU4USu4`],
          optionTitles: [`Default`, `Open`],
          title: `Variant`,
          type: U.Enum,
        },
        UxnOWaBgk: {
          defaultValue: `What kind of websites do you build?`,
          displayTextArea: !1,
          title: `Question`,
          type: U.String,
        },
        onUxnOWaBgkChange: { changes: `UxnOWaBgk`, type: U.ChangeHandler },
        l2uF7trzp: {
          defaultValue: `Business sites, landing pages and portfolios — mostly. If a project needs real front-end work, custom layout, motion or data, that’s the kind I like best.`,
          displayTextArea: !1,
          title: `Answer`,
          type: U.String,
        },
        onl2uF7trzpChange: { changes: `l2uF7trzp`, type: U.ChangeHandler },
        X3Jz1cSJh: { title: `Click`, type: U.EventHandler },
        OebCJbASJ: { defaultValue: `40px`, title: `Padding`, type: U.Padding },
      }),
      N(
        ii,
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
          ...qr,
          ...R(Xe),
          ...R(Ie),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function si(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki = e(() => {
    (h(),
      G(),
      S(),
      s(),
      oi(),
      (ci = T(ai)),
      (li = L(k)),
      (ui = [`bS01TMYvP`, `kX8IpqLHG`, `WUqBVE19j`, `yj3Om2jrF`, `Pj6tDTQ9I`]),
      (di = `framer-qsnJ2`),
      (fi = {
        bS01TMYvP: `framer-v-3sul2w`,
        kX8IpqLHG: `framer-v-1att035`,
        Pj6tDTQ9I: `framer-v-td4bo2`,
        WUqBVE19j: `framer-v-1ak6w53`,
        yj3Om2jrF: `framer-v-1ledaj9`,
      }),
      (pi = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (mi = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 80,
      }),
      (hi = {
        damping: 150,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (gi = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (_i = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (vi = {
        damping: 150,
        delay: 0.1,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (yi = {
        damping: 150,
        delay: 0.2,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (bi = {
        damping: 150,
        delay: 0.3,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (xi = {
        damping: 150,
        delay: 0.4,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (Si = ({ value: e, children: t }) => {
        let n = f(b),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: t });
      }),
      (Ci = {
        "Tab Five": `Pj6tDTQ9I`,
        "Tab Four": `yj3Om2jrF`,
        "Tab One": `bS01TMYvP`,
        "Tab Three": `WUqBVE19j`,
        "Tab Two": `kX8IpqLHG`,
      }),
      (wi = v.create(t)),
      (Ti = ({ height: e, id: t, padding: n, width: r, ...i }) => ({
        ...i,
        jMMJozMpF: n ?? i.jMMJozMpF ?? `40px`,
        variant: Ci[i.variant] ?? i.variant ?? `bS01TMYvP`,
      })),
      (Ei = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Di = D(
        c(function (e, t) {
          let n = p(null),
            r = t ?? n,
            i = l(),
            { activeLocale: a, setLocale: o } = oe(),
            s = ue(),
            {
              style: c,
              className: u,
              layoutId: d,
              variant: f,
              jMMJozMpF: h,
              ..._
            } = Ti(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = F({
              cycleOrder: ui,
              defaultVariant: `bS01TMYvP`,
              ref: r,
              variant: f,
              variantClassNames: fi,
            }),
            k = Ei(e, O),
            { activeVariantCallback: A, delay: M } = te(y),
            N = A(async (...e) => {
              D(`bS01TMYvP`);
            }),
            P = A(async (...e) => {
              D(`kX8IpqLHG`);
            }),
            I = A(async (...e) => {
              D(`WUqBVE19j`);
            }),
            L = A(async (...e) => {
              D(`yj3Om2jrF`);
            }),
            R = A(async (...e) => {
              D(`Pj6tDTQ9I`);
            }),
            ee = j(di);
          return m(x, {
            id: d ?? i,
            children: m(wi, {
              animate: O,
              initial: !1,
              children: m(Si, {
                value: pi,
                children: g(v.div, {
                  ..._,
                  ...C,
                  className: j(ee, `framer-3sul2w`, u, b),
                  "data-framer-name": `Tab One`,
                  layoutDependency: k,
                  layoutId: `bS01TMYvP`,
                  ref: r,
                  style: { ...c },
                  ...si(
                    {
                      kX8IpqLHG: { "data-framer-name": `Tab Two` },
                      Pj6tDTQ9I: { "data-framer-name": `Tab Five` },
                      WUqBVE19j: { "data-framer-name": `Tab Three` },
                      yj3Om2jrF: { "data-framer-name": `Tab Four` },
                    },
                    y,
                    w,
                  ),
                  children: [
                    m(V, {
                      height: 200,
                      width: s?.width || `100vw`,
                      y: (s?.y || 0) + 0 + 0,
                      children: m(li, {
                        __framer__animate: { transition: hi },
                        __framer__animateOnce: !0,
                        __framer__enter: mi,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1f2s33s-container`,
                        "data-framer-name": `One`,
                        layoutDependency: k,
                        layoutId: `au0sUkLPU-container`,
                        name: `One`,
                        nodeId: `au0sUkLPU`,
                        rendersWithMotion: !0,
                        scopeId: `wCTn35BFt`,
                        children: m(ai, {
                          height: `100%`,
                          id: `au0sUkLPU`,
                          l2uF7trzp: `Business sites, landing pages and portfolios — mostly. If a project needs real front-end work, custom layout, motion or data, that’s the kind I like best.`,
                          layoutId: `au0sUkLPU`,
                          name: `One`,
                          OebCJbASJ: gi(h),
                          style: { width: `100%` },
                          UxnOWaBgk: `What kind of websites do you build?`,
                          variant: _i(`k5iU4USu4`),
                          width: `100%`,
                          ...si(
                            {
                              kX8IpqLHG: {
                                variant: _i(`RcvbkiH3H`),
                                X3Jz1cSJh: N,
                              },
                              Pj6tDTQ9I: {
                                variant: _i(`RcvbkiH3H`),
                                X3Jz1cSJh: N,
                              },
                              WUqBVE19j: {
                                variant: _i(`RcvbkiH3H`),
                                X3Jz1cSJh: N,
                              },
                              yj3Om2jrF: {
                                variant: _i(`RcvbkiH3H`),
                                X3Jz1cSJh: N,
                              },
                            },
                            y,
                            w,
                          ),
                        }),
                      }),
                    }),
                    m(V, {
                      height: 200,
                      width: s?.width || `100vw`,
                      y: (s?.y || 0) + 0 + 215,
                      children: m(li, {
                        __framer__animate: { transition: vi },
                        __framer__animateOnce: !0,
                        __framer__enter: mi,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-idbq7j-container`,
                        "data-framer-name": `Two`,
                        layoutDependency: k,
                        layoutId: `pMEytHHkb-container`,
                        name: `Two`,
                        nodeId: `pMEytHHkb`,
                        rendersWithMotion: !0,
                        scopeId: `wCTn35BFt`,
                        children: m(ai, {
                          height: `100%`,
                          id: `pMEytHHkb`,
                          l2uF7trzp: `Send over the design and I’ll build it faithfully — or start from it and suggest changes where they’d help on smaller screens.`,
                          layoutId: `pMEytHHkb`,
                          name: `Two`,
                          OebCJbASJ: gi(h),
                          style: { width: `100%` },
                          UxnOWaBgk: `Can you work from an existing design?`,
                          variant: _i(`RcvbkiH3H`),
                          width: `100%`,
                          X3Jz1cSJh: P,
                          ...si(
                            { kX8IpqLHG: { variant: _i(`k5iU4USu4`) } },
                            y,
                            w,
                          ),
                        }),
                      }),
                    }),
                    m(V, {
                      height: 200,
                      width: s?.width || `100vw`,
                      y: (s?.y || 0) + 0 + 430,
                      children: m(li, {
                        __framer__animate: { transition: yi },
                        __framer__animateOnce: !0,
                        __framer__enter: mi,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-j0npxi-container`,
                        "data-framer-name": `Three`,
                        layoutDependency: k,
                        layoutId: `gcZ9YWX4N-container`,
                        name: `Three`,
                        nodeId: `gcZ9YWX4N`,
                        rendersWithMotion: !0,
                        scopeId: `wCTn35BFt`,
                        children: m(ai, {
                          height: `100%`,
                          id: `gcZ9YWX4N`,
                          l2uF7trzp: `Send over the design and I’ll build it faithfully — or start from it and suggest changes where they’d help on smaller screens.`,
                          layoutId: `gcZ9YWX4N`,
                          name: `Three`,
                          OebCJbASJ: gi(h),
                          style: { width: `100%` },
                          UxnOWaBgk: `Can you add interactions and animations?`,
                          variant: _i(`RcvbkiH3H`),
                          width: `100%`,
                          X3Jz1cSJh: I,
                          ...si(
                            { WUqBVE19j: { variant: _i(`k5iU4USu4`) } },
                            y,
                            w,
                          ),
                        }),
                      }),
                    }),
                    m(V, {
                      height: 200,
                      width: s?.width || `100vw`,
                      y: (s?.y || 0) + 0 + 645,
                      children: m(li, {
                        __framer__animate: { transition: bi },
                        __framer__animateOnce: !0,
                        __framer__enter: mi,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1dt0krj-container`,
                        "data-framer-name": `Four`,
                        layoutDependency: k,
                        layoutId: `ayjqDEwfj-container`,
                        name: `Four`,
                        nodeId: `ayjqDEwfj`,
                        rendersWithMotion: !0,
                        scopeId: `wCTn35BFt`,
                        children: m(ai, {
                          height: `100%`,
                          id: `ayjqDEwfj`,
                          l2uF7trzp: `Scroll effects, reveals, hover states, small moments of motion. I use them when they help the page feel alive, and skip them when they’d just get in the way.`,
                          layoutId: `ayjqDEwfj`,
                          name: `Four`,
                          OebCJbASJ: gi(h),
                          style: { width: `100%` },
                          UxnOWaBgk: `How does your process work?`,
                          variant: _i(`RcvbkiH3H`),
                          width: `100%`,
                          X3Jz1cSJh: L,
                          ...si(
                            { yj3Om2jrF: { variant: _i(`k5iU4USu4`) } },
                            y,
                            w,
                          ),
                        }),
                      }),
                    }),
                    m(V, {
                      height: 200,
                      width: s?.width || `100vw`,
                      y: (s?.y || 0) + 0 + 860,
                      children: m(li, {
                        __framer__animate: { transition: xi },
                        __framer__animateOnce: !0,
                        __framer__enter: mi,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1e3hyr3-container`,
                        "data-framer-name": `Five`,
                        layoutDependency: k,
                        layoutId: `G_k7mfywj-container`,
                        name: `Five`,
                        nodeId: `G_k7mfywj`,
                        rendersWithMotion: !0,
                        scopeId: `wCTn35BFt`,
                        children: m(ai, {
                          height: `100%`,
                          id: `G_k7mfywj`,
                          l2uF7trzp: `Everything is built mobile-first, and I’ve built interactive tools and small web products where the interface has real logic behind it.`,
                          layoutId: `G_k7mfywj`,
                          name: `Five`,
                          OebCJbASJ: gi(h),
                          style: { width: `100%` },
                          UxnOWaBgk: `Do you build responsive sites and web tools?`,
                          variant: _i(`RcvbkiH3H`),
                          width: `100%`,
                          X3Jz1cSJh: R,
                          ...si(
                            { Pj6tDTQ9I: { variant: _i(`k5iU4USu4`) } },
                            y,
                            w,
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-qsnJ2.framer-kmyyzh, .framer-qsnJ2 .framer-kmyyzh { display: block; }`,
          `.framer-qsnJ2.framer-3sul2w { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 838px; }`,
          `.framer-qsnJ2 .framer-1f2s33s-container, .framer-qsnJ2 .framer-idbq7j-container, .framer-qsnJ2 .framer-j0npxi-container, .framer-qsnJ2 .framer-1dt0krj-container, .framer-qsnJ2 .framer-1e3hyr3-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ],
        `framer-qsnJ2`,
      )),
      (Oi = Di),
      (Di.displayName = `FAQ Tab`),
      (Di.defaultProps = { height: 628, width: 838 }),
      H(Di, {
        variant: {
          options: [
            `bS01TMYvP`,
            `kX8IpqLHG`,
            `WUqBVE19j`,
            `yj3Om2jrF`,
            `Pj6tDTQ9I`,
          ],
          optionTitles: [
            `Tab One`,
            `Tab Two`,
            `Tab Three`,
            `Tab Four`,
            `Tab Five`,
          ],
          title: `Variant`,
          type: U.Enum,
        },
        jMMJozMpF: { defaultValue: `40px`, title: `Padding`, type: U.Padding },
      }),
      N(Di, [{ explicitInter: !0, fonts: [] }, ...ci], {
        supportsExplicitInterCodegen: !0,
      }),
      (Di.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([P(ai, {}, t)])),
      }));
  });
function Ai(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ji,
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
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi = e(() => {
    (h(),
      G(),
      S(),
      s(),
      We(),
      Se(),
      Ee(),
      ki(),
      (ji = T(q)),
      (Mi = L(k)),
      (Ni = L(I)),
      (Pi = T(Oi)),
      (Fi = [`aoVfu_kNQ`, `pL_q62ird`, `SFhaIJSAW`]),
      (Ii = `framer-1Mduv`),
      (Li = {
        aoVfu_kNQ: `framer-v-sv68j1`,
        pL_q62ird: `framer-v-1vgx8rs`,
        SFhaIJSAW: `framer-v-1cyqrte`,
      }),
      (Ri = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (zi = {
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
      (Bi = {
        damping: 100,
        delay: 0,
        mass: 1,
        stiffness: 300,
        type: `spring`,
      }),
      (Vi = {
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
      (Hi = {
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
      (Ui = {
        damping: 150,
        delay: 0.6,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (Wi = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Gi = ({ value: e, children: t }) => {
        let n = f(b),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: t });
      }),
      (Ki = { Desktop: `aoVfu_kNQ`, Phone: `SFhaIJSAW`, Tablet: `pL_q62ird` }),
      (qi = v.create(t)),
      (Ji = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ki[r.variant] ?? r.variant ?? `aoVfu_kNQ`,
      })),
      (Yi = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Xi = D(
        c(function (e, n) {
          let r = p(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: s } = oe(),
            c = ue(),
            { style: u, className: d, layoutId: f, variant: h, ..._ } = Ji(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = F({
              cycleOrder: Fi,
              defaultVariant: `aoVfu_kNQ`,
              ref: i,
              variant: h,
              variantClassNames: Li,
            }),
            A = Yi(e, O),
            M = j(Ii, qe, Te);
          return m(x, {
            id: f ?? a,
            children: m(qi, {
              animate: O,
              initial: !1,
              children: m(Gi, {
                value: Ri,
                children: m(v.section, {
                  ..._,
                  ...C,
                  className: j(M, `framer-sv68j1`, d, b),
                  "data-framer-name": `Desktop`,
                  layoutDependency: A,
                  layoutId: `aoVfu_kNQ`,
                  ref: i,
                  style: { ...u },
                  ...Ai(
                    {
                      pL_q62ird: { "data-framer-name": `Tablet` },
                      SFhaIJSAW: { "data-framer-name": `Phone` },
                    },
                    y,
                    w,
                  ),
                  children: g(v.div, {
                    className: `framer-1igv7fv`,
                    "data-framer-name": `Container`,
                    layoutDependency: A,
                    layoutId: `vmLPvlBKN`,
                    children: [
                      g(v.div, {
                        className: `framer-16roqis`,
                        "data-framer-name": `Heading`,
                        layoutDependency: A,
                        layoutId: `aOzMbrXNs`,
                        children: [
                          m(V, {
                            height: 20,
                            y:
                              (c?.y || 0) +
                              (60 + ((c?.height || 808) - 180 - 628) / 2) +
                              0 +
                              0 +
                              0,
                            ...Ai(
                              {
                                pL_q62ird: {
                                  y:
                                    (c?.y || 0) +
                                    (60 +
                                      ((c?.height || 616) - 120 - 628) / 2) +
                                    0 +
                                    0 +
                                    0,
                                },
                                SFhaIJSAW: {
                                  y:
                                    (c?.y || 0) +
                                    (40 +
                                      ((c?.height || 1007) - 80 - 913.6) / 2) +
                                    0 +
                                    0 +
                                    0 +
                                    0,
                                },
                              },
                              y,
                              w,
                            ),
                            children: m(Mi, {
                              __framer__animate: { transition: Bi },
                              __framer__animateOnce: !0,
                              __framer__enter: zi,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-1gd3w3e-container`,
                              layoutDependency: A,
                              layoutId: `DeNRkNJ1m-container`,
                              nodeId: `DeNRkNJ1m`,
                              rendersWithMotion: !0,
                              scopeId: `o8mzAAx29`,
                              children: m(q, {
                                GZXD4XDjD: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                height: `100%`,
                                id: `DeNRkNJ1m`,
                                layoutId: `DeNRkNJ1m`,
                                t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                width: `100%`,
                                wYgOcdV21: `faq`,
                              }),
                            }),
                          }),
                          g(v.div, {
                            className: `framer-1m1tr2k`,
                            "data-framer-name": `Title & Content`,
                            layoutDependency: A,
                            layoutId: `MtF2EPTb7`,
                            children: [
                              m(I, {
                                __fromCanvasComponent: !0,
                                children: m(t, {
                                  children: g(v.h2, {
                                    className: `framer-styles-preset-w4n9ce`,
                                    "data-styles-preset": `QQizO8D2m`,
                                    dir: `auto`,
                                    children: [
                                      m(v.strong, { children: `We’ve Got` }),
                                      m(v.br, {}),
                                      m(v.strong, { children: `Answers` }),
                                      m(v.span, {
                                        style: {
                                          "--framer-text-color": `var(--extracted-fsiy4d, var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33)))`,
                                        },
                                        children: `*`,
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-h7scvs`,
                                effect: Vi,
                                fonts: [`Inter`, `Inter-Bold`],
                                layoutDependency: A,
                                layoutId: `H9mNwWFBi`,
                                style: {
                                  "--extracted-fsiy4d": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              m(Ni, {
                                __framer__animate: { transition: Ui },
                                __framer__animateOnce: !0,
                                __framer__enter: Hi,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                children: m(t, {
                                  children: m(v.p, {
                                    className: `framer-styles-preset-1mk8z8h`,
                                    "data-styles-preset": `sPvC_pCwb`,
                                    dir: `auto`,
                                    children: `Straight answers to the questions people usually ask.`,
                                  }),
                                }),
                                className: `framer-1f7dswi`,
                                fonts: [`Inter`],
                                layoutDependency: A,
                                layoutId: `f3mwEqVkf`,
                                style: {
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
                      m(V, {
                        height: 628,
                        width: `max((min(max(${c?.width || `100vw`} - 40px, 1px), 1440px) - 91px) / 2, 1px)`,
                        y:
                          (c?.y || 0) +
                          (60 + ((c?.height || 808) - 180 - 628) / 2) +
                          0,
                        ...Ai(
                          {
                            pL_q62ird: {
                              width: `max((min(max(${c?.width || `100vw`} - 32px, 1px), 1440px) - 40px) / 2, 1px)`,
                              y:
                                (c?.y || 0) +
                                (60 + ((c?.height || 616) - 120 - 628) / 2) +
                                0,
                            },
                            SFhaIJSAW: {
                              width: `min(max(${c?.width || `100vw`} - 32px, 1px), 1440px)`,
                              y:
                                (c?.y || 0) +
                                (40 + ((c?.height || 1007) - 80 - 913.6) / 2) +
                                0 +
                                285.6,
                            },
                          },
                          y,
                          w,
                        ),
                        children: m(k, {
                          className: `framer-1x3s2f8-container`,
                          layoutDependency: A,
                          layoutId: `Yu5X1RVns-container`,
                          nodeId: `Yu5X1RVns`,
                          rendersWithMotion: !0,
                          scopeId: `o8mzAAx29`,
                          children: m(Oi, {
                            height: `100%`,
                            id: `Yu5X1RVns`,
                            jMMJozMpF: `40px`,
                            layoutId: `Yu5X1RVns`,
                            style: { width: `100%` },
                            variant: Wi(`bS01TMYvP`),
                            width: `100%`,
                            ...Ai(
                              {
                                pL_q62ird: { jMMJozMpF: `20px` },
                                SFhaIJSAW: { jMMJozMpF: `16px` },
                              },
                              y,
                              w,
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
          `.framer-1Mduv.framer-8abciy, .framer-1Mduv .framer-8abciy { display: block; }`,
          `.framer-1Mduv.framer-sv68j1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 60px 20px 120px 20px; position: relative; width: 1200px; }`,
          `.framer-1Mduv .framer-1igv7fv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 91px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-1Mduv .framer-16roqis { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 454px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-1Mduv .framer-1gd3w3e-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-1Mduv .framer-1m1tr2k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1Mduv .framer-h7scvs { flex: none; height: auto; max-width: 608px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-1Mduv .framer-1f7dswi { flex: none; height: auto; max-width: 485px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-1Mduv .framer-1x3s2f8-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-1Mduv.framer-v-1vgx8rs.framer-sv68j1 { padding: 60px 16px 60px 16px; width: 810px; }`,
          `.framer-1Mduv.framer-v-1vgx8rs .framer-1igv7fv { gap: 40px; }`,
          `.framer-1Mduv.framer-v-1cyqrte.framer-sv68j1 { padding: 40px 16px 40px 16px; width: 390px; }`,
          `.framer-1Mduv.framer-v-1cyqrte .framer-1igv7fv { flex-direction: column; gap: 60px; }`,
          `.framer-1Mduv.framer-v-1cyqrte .framer-16roqis, .framer-1Mduv.framer-v-1cyqrte .framer-1x3s2f8-container { flex: none; width: 100%; }`,
          `.framer-1Mduv.framer-v-1cyqrte .framer-1m1tr2k { gap: 16px; }`,
          ...Ge,
          ...Ce,
        ],
        `framer-1Mduv`,
      )),
      (Zi = Xi),
      (Xi.displayName = `FAQ`),
      (Xi.defaultProps = { height: 808, width: 1200 }),
      H(Xi, {
        variant: {
          options: [`aoVfu_kNQ`, `pL_q62ird`, `SFhaIJSAW`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      N(
        Xi,
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
            ],
          },
          ...ji,
          ...Pi,
          ...R(Ke),
          ...R(we),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Xi.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([P(q, {}, t), P(Oi, {}, t)])
        ),
      }));
  }),
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
  la,
  ua = e(() => {
    (h(),
      G(),
      S(),
      s(),
      ($i = `framer-jypUW`),
      (ea = { BwucZ_Wt7: `framer-v-wvwkex` }),
      (ta = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (na = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ra = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ia = ({ value: e, children: t }) => {
        let n = f(b),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return m(b.Provider, { value: a, children: t });
      }),
      (aa = v.create(t)),
      (oa = ({ height: e, icon: t, id: n, padding: r, width: i, ...a }) => ({
        ...a,
        u33b40ubm: t ??
          a.u33b40ubm ?? {
            alt: `icon`,
            pixelHeight: 30,
            pixelWidth: 37,
            src: `https://framerusercontent.com/images/hZqB99gK7mk3IRfnj5zc6v0LAU.svg?width=37&height=30`,
          },
        XgYMGv2Oy: r ?? a.XgYMGv2Oy ?? `70px 81px 70px 81px`,
      })),
      (sa = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ca = D(
        c(function (e, t) {
          let n = p(null),
            r = t ?? n,
            i = l(),
            { activeLocale: a, setLocale: o } = oe();
          ue();
          let {
              style: s,
              className: c,
              layoutId: u,
              variant: d,
              XgYMGv2Oy: f,
              u33b40ubm: h,
              ...g
            } = oa(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = F({
              defaultVariant: `BwucZ_Wt7`,
              ref: r,
              variant: d,
              variantClassNames: ea,
            }),
            O = sa(e, D),
            k = j($i);
          return m(x, {
            id: u ?? i,
            children: m(aa, {
              animate: D,
              initial: !1,
              children: m(ia, {
                value: na,
                children: m(v.div, {
                  ...g,
                  ...S,
                  className: j(k, `framer-wvwkex`, c, y),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  layoutDependency: O,
                  layoutId: `BwucZ_Wt7`,
                  ref: r,
                  style: {
                    "--17mza18": ta(f),
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
                    ...s,
                  },
                  children: m(W, {
                    background: {
                      alt: `icon`,
                      fit: `fill`,
                      intrinsicHeight: 30,
                      intrinsicWidth: 37,
                      pixelHeight: 30,
                      pixelWidth: 37,
                      sizes: `37px`,
                      ...ra(h),
                    },
                    className: `framer-pwxj9t`,
                    fitImageDimension: `width`,
                    layoutDependency: O,
                    layoutId: `HBXJXIbY9`,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-jypUW.framer-ilx7i3, .framer-jypUW .framer-ilx7i3 { display: block; }`,
          `.framer-jypUW.framer-wvwkex { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 170px; overflow: hidden; padding: var(--17mza18); position: relative; width: 199px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-jypUW .framer-pwxj9t { flex: none; height: 30px; overflow: visible; position: relative; width: auto; }`,
          `.framer-jypUW[data-border="true"]::after, .framer-jypUW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-jypUW`,
      )),
      (la = ca),
      (ca.displayName = `Logo Card`),
      (ca.defaultProps = { height: 200, width: 199 }),
      H(ca, {
        XgYMGv2Oy: {
          defaultValue: `70px 81px 70px 81px`,
          title: `Padding`,
          type: U.Padding,
        },
        u33b40ubm: {
          __defaultAssetReference: `data:framer/asset-reference,hZqB99gK7mk3IRfnj5zc6v0LAU.svg?originalFilename=Frame.svg&width=37&height=30`,
          __vekterDefault: {
            alt: `icon`,
            assetReference: `data:framer/asset-reference,hZqB99gK7mk3IRfnj5zc6v0LAU.svg?originalFilename=Frame.svg&width=37&height=30`,
          },
          title: `Icon`,
          type: U.ResponsiveImage,
        },
      }),
      N(ca, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  }),
  da,
  fa,
  pa,
  ma = e(() => {
    (G(),
      M.loadFonts([
        `Inter-Bold`,
        `Inter-Black`,
        `Inter-BlackItalic`,
        `Inter-BoldItalic`,
      ]),
      (da = [
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
      (fa = [
        `.framer-BmKc4 .framer-styles-preset-1yudxw1:not(.rich-text-wrapper), .framer-BmKc4 .framer-styles-preset-1yudxw1.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 110px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -6.6px; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-BmKc4 .framer-styles-preset-1yudxw1:not(.rich-text-wrapper), .framer-BmKc4 .framer-styles-preset-1yudxw1.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 88px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -6.6px; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-BmKc4 .framer-styles-preset-1yudxw1:not(.rich-text-wrapper), .framer-BmKc4 .framer-styles-preset-1yudxw1.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0px; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
      ]),
      (pa = `framer-BmKc4`));
  }),
  ha,
  ga,
  _a,
  va = e(() => {
    (G(),
      M.loadFonts([
        `Inter-Bold`,
        `Inter-Black`,
        `Inter-BlackItalic`,
        `Inter-BoldItalic`,
      ]),
      (ha = [
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
      (ga = [
        `.framer-PrzBW .framer-styles-preset-wlp658:not(.rich-text-wrapper), .framer-PrzBW .framer-styles-preset-wlp658.rich-text-wrapper h6 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 25px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -1.5px; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (_a = `framer-PrzBW`));
  }),
  ya,
  ba,
  xa,
  Sa = e(() => {
    (G(),
      M.loadFonts([
        `Inter-Medium`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-MediumItalic`,
      ]),
      (ya = [
        {
          explicitInter: !0,
          fonts: [
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
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/Bo5CNzBv77CafbxOtKIkpw9egw.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (ba = [
        `.framer-FLAoF .framer-styles-preset-1l7tyv5:not(.rich-text-wrapper), .framer-FLAoF .framer-styles-preset-1l7tyv5.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 25px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -1.25px; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (xa = `framer-FLAoF`));
  }),
  Ca,
  Z,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Q,
  Xa,
  $,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo;
e(() => {
  (h(),
    G(),
    S(),
    s(),
    ge(),
    Zt(),
    en(),
    Ee(),
    dn(),
    Nn(),
    Zn(),
    zr(),
    Qi(),
    J(),
    at(),
    nt(),
    ua(),
    ot(),
    Qe(),
    ct(),
    ma(),
    va(),
    hn(),
    yn(),
    ve(),
    Sa(),
    We(),
    Se(),
    ft(),
    (Ca = T(Vt)),
    (Z = L(v.div)),
    (wa = T(rt)),
    (Ta = T(q)),
    (Ea = L(I)),
    (Da = T(it)),
    (Oa = T(_e)),
    (ka = L(z)),
    (Aa = T(Rr)),
    (ja = T(Xn)),
    (Ma = T(Y)),
    (Na = T(la)),
    (Pa = T(Mn)),
    (Fa = se(L(v.div))),
    (Ia = T(Ne)),
    (La = T($t)),
    (Ra = T(Zi)),
    (za = {
      h4gwFyb7P: `(min-width: 810px) and (max-width: 1199.98px)`,
      Vg0sB4Fhp: `(max-width: 809.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (Ba = [`z-index-2`]),
    (Va = `framer-NWrst`),
    (Ha = {
      h4gwFyb7P: `framer-v-mvqjwy`,
      Vg0sB4Fhp: `framer-v-16hfden`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (Ua = (e, t, n) => (e && t ? `position` : n)),
    (Wa = {
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
    (Ga = {
      damping: 150,
      delay: 0.2,
      mass: 1,
      stiffness: 500,
      type: `spring`,
    }),
    (Ka = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
    (qa = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.8,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Ja = {
      filter: `blur(10px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 60,
    }),
    (Ya = {
      effect: Ja,
      startDelay: 0.4,
      tokenization: `line`,
      transition: {
        damping: 150,
        delay: 0.05,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      },
      trigger: `onMount`,
      type: `appear`,
    }),
    (Q = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 100,
    }),
    (Xa = {
      damping: 150,
      delay: 0.6,
      mass: 1,
      stiffness: 500,
      type: `spring`,
    }),
    ($ = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Za = {
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
    (Qa = { damping: 100, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
    ($a = {
      effect: Ja,
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
    (eo = {
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
    (to = {
      damping: 150,
      delay: 0.1,
      mass: 1,
      stiffness: 500,
      type: `spring`,
    }),
    (no = {
      damping: 150,
      delay: 0.3,
      mass: 1,
      stiffness: 500,
      type: `spring`,
    }),
    (ro = {
      damping: 150,
      delay: 0.4,
      mass: 1,
      stiffness: 500,
      type: `spring`,
    }),
    (io = { damping: 150, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
    (ao = {
      damping: 150,
      delay: 0.7,
      mass: 1,
      stiffness: 500,
      type: `spring`,
    }),
    (oo = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (so = () => ({
      from: { alias: `yRx1aF6uj`, data: st, type: `Collection` },
      select: [
        { collection: `yRx1aF6uj`, name: `lT8fJrlE3`, type: `Identifier` },
        { collection: `yRx1aF6uj`, name: `QE0E6Gpht`, type: `Identifier` },
        { collection: `yRx1aF6uj`, name: `qP5afZE0B`, type: `Identifier` },
        { collection: `yRx1aF6uj`, name: `SZLJAKHWh`, type: `Identifier` },
        { collection: `yRx1aF6uj`, name: `L6q2o4xpI`, type: `Identifier` },
        { collection: `yRx1aF6uj`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          collection: `yRx1aF6uj`,
          name: `MEhEUheAw`,
          type: `Identifier`,
        },
        operator: `==`,
        right: { type: `LiteralValue`, value: 1 },
        type: `BinaryOperation`,
      },
    })),
    (co = ({ query: e, pageSize: t, children: n }) => n(he(e))),
    (lo = () => ({
      from: { alias: `eicTMASAE`, data: st, type: `Collection` },
      select: [
        { collection: `eicTMASAE`, name: `lT8fJrlE3`, type: `Identifier` },
        { collection: `eicTMASAE`, name: `QE0E6Gpht`, type: `Identifier` },
        { collection: `eicTMASAE`, name: `qP5afZE0B`, type: `Identifier` },
        { collection: `eicTMASAE`, name: `SZLJAKHWh`, type: `Identifier` },
        { collection: `eicTMASAE`, name: `L6q2o4xpI`, type: `Identifier` },
        { collection: `eicTMASAE`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          collection: `eicTMASAE`,
          name: `MEhEUheAw`,
          type: `Identifier`,
        },
        operator: `==`,
        right: { type: `LiteralValue`, value: 2 },
        type: `BinaryOperation`,
      },
    })),
    (uo = () => ({
      from: { alias: `PBdIeoiLW`, data: st, type: `Collection` },
      select: [
        { collection: `PBdIeoiLW`, name: `lT8fJrlE3`, type: `Identifier` },
        { collection: `PBdIeoiLW`, name: `QE0E6Gpht`, type: `Identifier` },
        { collection: `PBdIeoiLW`, name: `qP5afZE0B`, type: `Identifier` },
        { collection: `PBdIeoiLW`, name: `SZLJAKHWh`, type: `Identifier` },
        { collection: `PBdIeoiLW`, name: `L6q2o4xpI`, type: `Identifier` },
        { collection: `PBdIeoiLW`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          collection: `PBdIeoiLW`,
          name: `MEhEUheAw`,
          type: `Identifier`,
        },
        operator: `==`,
        right: { type: `LiteralValue`, value: 3 },
        type: `BinaryOperation`,
      },
    })),
    (fo = () => ({
      from: { alias: `dy7WUzAJl`, data: st, type: `Collection` },
      select: [
        { collection: `dy7WUzAJl`, name: `lT8fJrlE3`, type: `Identifier` },
        { collection: `dy7WUzAJl`, name: `QE0E6Gpht`, type: `Identifier` },
        { collection: `dy7WUzAJl`, name: `qP5afZE0B`, type: `Identifier` },
        { collection: `dy7WUzAJl`, name: `SZLJAKHWh`, type: `Identifier` },
        { collection: `dy7WUzAJl`, name: `L6q2o4xpI`, type: `Identifier` },
        { collection: `dy7WUzAJl`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          collection: `dy7WUzAJl`,
          name: `MEhEUheAw`,
          type: `Identifier`,
        },
        operator: `==`,
        right: { type: `LiteralValue`, value: 4 },
        type: `BinaryOperation`,
      },
    })),
    (po = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 80,
    }),
    (mo = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 80,
    }),
    (ho = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (go = {
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
    (_o = { damping: 90, delay: 0.6, mass: 1, stiffness: 300, type: `spring` }),
    (vo = {
      damping: 150,
      delay: 0.5,
      mass: 1,
      stiffness: 500,
      type: `spring`,
    }),
    (yo = { Desktop: `WQLkyLRf1`, Phone: `Vg0sB4Fhp`, Tablet: `h4gwFyb7P` }),
    (bo = ({ value: e }) =>
      ae()
        ? null
        : m(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (xo = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: yo[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (So = D(
      c(function (e, n) {
        let i = p(null),
          a = n ?? i,
          o = l(),
          { activeLocale: s, setLocale: c } = oe(),
          d = ue(),
          { style: h, className: _, layoutId: y, variant: S, ...C } = xo(e);
        ee(r(() => pt({}, s), [s]));
        let [w, T] = fe(S, za, !1),
          E = j(Va, mn, pa, Te, qe, tt, xa, xe, _a, vn, dt),
          D = f(re)?.isLayoutTemplate,
          k = Ua(D, !!f(b)?.transition?.layout);
        me();
        let M = B(`OhuOfZacZ`),
          N = p(null),
          P = B(`e2mW3bpRv`),
          F = p(null);
        return (
          ce({}),
          m(re.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: yo,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Ha,
            },
            children: g(x, {
              id: y ?? o,
              children: [
                m(bo, {
                  value: `html body { background: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)); }`,
                }),
                g(v.div, {
                  ...C,
                  className: j(E, `framer-72rtr7`, _),
                  ref: a,
                  style: { ...h },
                  children: [
                    g(v.section, {
                      className: `framer-11uvnwq`,
                      "data-framer-name": `Hero`,
                      layout: k,
                      children: [
                        m(V, {
                          children: m(z, {
                            className: `framer-1bzks1z-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `ys6_Bs85M`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { rotateX: 180, rotateY: 180 },
                            children: m(Vt, {
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              borderRadius: 20,
                              bottomLeftRadius: 20,
                              bottomRightRadius: 20,
                              controls: !1,
                              height: `100%`,
                              id: `ys6_Bs85M`,
                              isMixedBorderRadius: !1,
                              layoutId: `ys6_Bs85M`,
                              loop: !0,
                              muted: !0,
                              objectFit: `cover`,
                              playing: !0,
                              posterEnabled: !0,
                              srcFile: `https://framerusercontent.com/assets/pbnCTcEHYG4IuW3x4Yxi8q9Ol04.webm`,
                              srcType: `Upload`,
                              srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                              startTime: 0,
                              style: { height: `100%`, width: `100%` },
                              topLeftRadius: 20,
                              topRightRadius: 20,
                              volume: 25,
                              width: `100%`,
                            }),
                          }),
                        }),
                        g(Z, {
                          __framer__adjustPosition: !1,
                          __framer__offset: 0,
                          __framer__parallaxTransformEnabled: !0,
                          __framer__speed: 80,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-awqryr`,
                          "data-framer-name": `Container`,
                          children: [
                            g(`div`, {
                              className: `framer-151xvkl`,
                              "data-framer-name": `Left-content-box`,
                              children: [
                                g(Z, {
                                  __framer__animate: { transition: Ga },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Wa,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-nofn0z`,
                                  "data-framer-name": `Label`,
                                  children: [
                                    m(`div`, {
                                      className: `framer-1ws4try`,
                                      "data-framer-name": `Dot-box`,
                                      children: m(Z, {
                                        __framer__loop: qa,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopPauseOffscreen: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: `mirror`,
                                        __framer__loopTransition: Ka,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-jbjz9n`,
                                        "data-framer-name": `Dot`,
                                      }),
                                    }),
                                    m(I, {
                                      __fromCanvasComponent: !0,
                                      children: m(t, {
                                        children: m(`p`, {
                                          className: `framer-styles-preset-3fyugt`,
                                          "data-styles-preset": `iFFcEKQM3`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                          },
                                          children: `CRAFT OVER HYPE`,
                                        }),
                                      }),
                                      className: `framer-zl64uv`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                m(I, {
                                  __fromCanvasComponent: !0,
                                  children: m(t, {
                                    children: g(`h1`, {
                                      className: `framer-styles-preset-1yudxw1`,
                                      "data-styles-preset": `ck_RcbvzR`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                      },
                                      children: [
                                        m(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                          },
                                          children: `*`,
                                        }),
                                        'BUILT WITH PRECISION',
                                        m(`br`, {}),
                                        'DESIGNED TO LAST',
                                        m(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                          },
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-2uzrly`,
                                  effect: Ya,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            g(Z, {
                              __framer__animate: { transition: Xa },
                              __framer__animateOnce: !0,
                              __framer__enter: Q,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-789qup`,
                              "data-framer-name": `Right-content-box`,
                              children: [
                                m(I, {
                                  __fromCanvasComponent: !0,
                                  children: m(t, {
                                    children: m(`p`, {
                                      className: `framer-styles-preset-1mk8z8h`,
                                      "data-styles-preset": `sPvC_pCwb`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                      },
                                      children: m(`mark`, {
                                        style: {
                                          "--framer-text-background-padding": `0px 0px 0px 32px`,
                                        },
                                        children: `I build websites from the first idea to the final interaction, bringing together bold visual design, clean development, smooth motion, and the small details that separate something functional from something memorable.`,
                                      }),
                                    }),
                                  }),
                                  className: `framer-1sk0z3q`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                m(pe, {
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
                                  ],
                                  children: (e) =>
                                    m(K, {
                                      breakpoint: w,
                                      overrides: {
                                        Vg0sB4Fhp: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            0 +
                                            5 +
                                            554.2 +
                                            0 +
                                            171.2 +
                                            0 +
                                            142.6,
                                        },
                                      },
                                      children: m(V, {
                                        height: 46,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          0 +
                                          5 +
                                          725.4 +
                                          0 +
                                          0 +
                                          0 +
                                          142.6,
                                        children: m(z, {
                                          className: `framer-vkvdq-container`,
                                          nodeId: `SduzxYfxk`,
                                          scopeId: `augiA20Il`,
                                          children: m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: { evTCyulAI: e[1] },
                                              Vg0sB4Fhp: { evTCyulAI: e[2] },
                                            },
                                            children: m(rt, {
                                              AN8wZ6h6b: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                              Cya6RuIUy: !1,
                                              evTCyulAI: e[0],
                                              FRGXCszKE: `Get In Touch`,
                                              height: `100%`,
                                              id: `SduzxYfxk`,
                                              KS1OTpe12: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                              layoutId: `SduzxYfxk`,
                                              OubOSgTqz: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                              qV_NmyJVp: !1,
                                              RnDkx60mf: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                              s5zVGHZrm: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                              variant: $(`zphlO018I`),
                                              VmYpdrASS: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                              w1blkKoqs: 100,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    m(v.section, {
                      className: `framer-9kdpmr`,
                      "data-framer-name": `About`,
                      id: M,
                      layout: k,
                      ref: N,
                      children: g(`div`, {
                        className: `framer-1ftmqbt`,
                        "data-framer-name": `Container`,
                        children: [
                          g(`div`, {
                            className: `framer-hu182e`,
                            "data-framer-name": `Heading`,
                            children: [
                              m(Z, {
                                __framer__animate: { transition: Qa },
                                __framer__animateOnce: !0,
                                __framer__enter: Za,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-68s83y`,
                                "data-framer-name": `Label-box`,
                                children: m(K, {
                                  breakpoint: w,
                                  overrides: {
                                    Vg0sB4Fhp: {
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        1e3 +
                                        18 +
                                        0 +
                                        50 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                  },
                                  children: m(V, {
                                    height: 20,
                                    y:
                                      (d?.y || 0) +
                                      0 +
                                      1e3 +
                                      18 +
                                      50 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                    children: m(z, {
                                      className: `framer-50u0at-container`,
                                      nodeId: `B2ku7xP7J`,
                                      scopeId: `augiA20Il`,
                                      children: m(q, {
                                        GZXD4XDjD: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                        height: `100%`,
                                        id: `B2ku7xP7J`,
                                        layoutId: `B2ku7xP7J`,
                                        t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                        width: `100%`,
                                        wYgOcdV21: `ABOUT`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              g(`div`, {
                                className: `framer-fiarf4`,
                                "data-framer-name": `Title & Content`,
                                children: [
                                  m(I, {
                                    __fromCanvasComponent: !0,
                                    children: m(t, {
                                      children: m(`h2`, {
                                        className: `framer-styles-preset-w4n9ce`,
                                        "data-styles-preset": `QQizO8D2m`,
                                        dir: `auto`,
                                        children: `A DEVELOPER WHO SHIPS`,
                                      }),
                                    }),
                                    className: `framer-189b7cf`,
                                    effect: $a,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  m(Ea, {
                                    __framer__animate: { transition: Xa },
                                    __framer__animateOnce: !0,
                                    __framer__enter: eo,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: m(t, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-1mk8z8h`,
                                        "data-styles-preset": `sPvC_pCwb`,
                                        dir: `auto`,
                                        children: `I build the whole thing — layout, code, motion, and the small details that decide whether a site feels good or just works.`,
                                      }),
                                    }),
                                    className: `framer-174d6fc`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g(`div`, {
                            className: `framer-1fwcaxi`,
                            "data-framer-name": `Cards`,
                            children: [
                              g(`div`, {
                                className: `framer-sc9yg6`,
                                "data-framer-name": `Card-wrap`,
                                children: [
                                  g(Z, {
                                    __framer__animate: { transition: to },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-zgedx2`,
                                    "data-border": !0,
                                    "data-framer-name": `Why-us-card`,
                                    children: [
                                      g(`div`, {
                                        className: `framer-17mns4f`,
                                        "data-framer-name": `Top`,
                                        children: [
                                          m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: {
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  1e3 +
                                                  18 +
                                                  50 +
                                                  169.6 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                              Vg0sB4Fhp: {
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  1e3 +
                                                  18 +
                                                  0 +
                                                  50 +
                                                  265.6 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: m(V, {
                                              height: 20,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                1e3 +
                                                18 +
                                                50 +
                                                169.6 +
                                                0 +
                                                0 +
                                                0 +
                                                20 +
                                                0 +
                                                0 +
                                                0,
                                              children: m(z, {
                                                className: `framer-14iswcm-container`,
                                                nodeId: `yZWDzIrtV`,
                                                scopeId: `augiA20Il`,
                                                children: m(q, {
                                                  GZXD4XDjD: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                  height: `100%`,
                                                  id: `yZWDzIrtV`,
                                                  layoutId: `yZWDzIrtV`,
                                                  t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                  width: `100%`,
                                                  wYgOcdV21: `FOCUS`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          g(`div`, {
                                            className: `framer-17n89qp`,
                                            "data-framer-name": `Content-box`,
                                            children: [
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: m(`h6`, {
                                                    className: `framer-styles-preset-h54z1`,
                                                    "data-styles-preset": `aH41o35LP`,
                                                    dir: `auto`,
                                                    children: `Projects`,
                                                  }),
                                                }),
                                                className: `framer-161xxvm`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              g(`div`, {
                                                className: `framer-nyobld`,
                                                "data-framer-name": `Ratings`,
                                                children: [
                                                  m(I, {
                                                    __fromCanvasComponent: !0,
                                                    children: m(t, {
                                                      children: g(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7RmlyYSBNb25vLTUwMA==`,
                                                          "--framer-font-family": `"Fira Mono", monospace`,
                                                          "--framer-font-size": `45px`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-letter-spacing": `-3.25px`,
                                                          "--framer-line-height": `1em`,
                                                          "--framer-text-color": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                        },
                                                        children: [
                                                          m(`span`, {
                                                            style: {
                                                              "--framer-font-size": `65px`,
                                                            },
                                                            children: `6`,
                                                          }),
                                                          m(`span`, {
                                                            style: {
                                                              "--framer-letter-spacing": `-2.25px`,
                                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                            },
                                                            children: ``,
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    className: `framer-1tfbqwj`,
                                                    fonts: [`GF;Fira Mono-500`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  m(I, {
                                                    __fromCanvasComponent: !0,
                                                    children: m(t, {
                                                      children: m(`p`, {
                                                        className: `framer-styles-preset-1mk8z8h`,
                                                        "data-styles-preset": `sPvC_pCwb`,
                                                        dir: `auto`,
                                                        children: `Real websites, built and live — not concepts or mockups.`,
                                                      }),
                                                    }),
                                                    className: `framer-1cd5pie`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      g(`div`, {
                                        className: `framer-eat2zt`,
                                        "data-framer-name": `Bottom`,
                                        children: [
                                          g(`div`, {
                                            className: `framer-lxzeqa`,
                                            "data-framer-name": `Progress`,
                                            children: [
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: m(`p`, {
                                                    className: `framer-styles-preset-1mk8z8h`,
                                                    "data-styles-preset": `sPvC_pCwb`,
                                                    dir: `auto`,
                                                    children: `PORTFOLIO`,
                                                  }),
                                                }),
                                                className: `framer-npnb7b`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              m(`div`, {
                                                className: `framer-1d5gjiu`,
                                                "data-framer-name": `Outer`,
                                                children: m(`div`, {
                                                  className: `framer-jf4o7p`,
                                                  "data-framer-name": `Inner`,
                                                }),
                                              }),
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: m(`p`, {
                                                    className: `framer-styles-preset-1mk8z8h`,
                                                    "data-styles-preset": `sPvC_pCwb`,
                                                    dir: `auto`,
                                                    children: `Selected work`,
                                                  }),
                                                }),
                                                className: `framer-14xrgr4`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          g(`div`, {
                                            className: `framer-ywxiv4`,
                                            "data-framer-name": `Progress`,
                                            children: [
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: m(`p`, {
                                                    className: `framer-styles-preset-1mk8z8h`,
                                                    "data-styles-preset": `sPvC_pCwb`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                    },
                                                    children: `Websites and web products I’ve built.`,
                                                  }),
                                                }),
                                                className: `framer-dcn69b`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              m(`div`, {
                                                className: `framer-1r83m2i`,
                                                "data-framer-name": `Outer`,
                                                children: m(`div`, {
                                                  className: `framer-4mjlfl`,
                                                  "data-framer-name": `Inner`,
                                                }),
                                              }),
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: m(`p`, {
                                                    className: `framer-styles-preset-1mk8z8h`,
                                                    "data-styles-preset": `sPvC_pCwb`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                    },
                                                    children: ``,
                                                  }),
                                                }),
                                                className: `framer-1e6yt9s`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  g(Z, {
                                    __framer__animate: { transition: Ga },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-tgjznd`,
                                    "data-border": !0,
                                    "data-framer-name": `Why-us-card`,
                                    children: [
                                      m(K, {
                                        breakpoint: w,
                                        overrides: {
                                          h4gwFyb7P: {
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              1e3 +
                                              18 +
                                              50 +
                                              169.6 +
                                              0 +
                                              0 +
                                              0 +
                                              392 +
                                              20 +
                                              0,
                                          },
                                          Vg0sB4Fhp: {
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              1e3 +
                                              18 +
                                              0 +
                                              50 +
                                              265.6 +
                                              0 +
                                              0 +
                                              0 +
                                              392 +
                                              20 +
                                              0,
                                          },
                                        },
                                        children: m(V, {
                                          height: 20,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            1e3 +
                                            18 +
                                            50 +
                                            169.6 +
                                            0 +
                                            0 +
                                            392 +
                                            20 +
                                            0,
                                          children: m(z, {
                                            className: `framer-1oeo34r-container`,
                                            nodeId: `Et8D_orUa`,
                                            scopeId: `augiA20Il`,
                                            children: m(q, {
                                              GZXD4XDjD: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                              height: `100%`,
                                              id: `Et8D_orUa`,
                                              layoutId: `Et8D_orUa`,
                                              t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                              width: `100%`,
                                              wYgOcdV21: `STACK`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      g(`div`, {
                                        className: `framer-nhjmld`,
                                        "data-framer-name": `Content-wrapper`,
                                        children: [
                                          g(`div`, {
                                            className: `framer-4e0w7f`,
                                            "data-framer-name": `Stat`,
                                            children: [
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: g(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7RmlyYSBNb25vLTUwMA==`,
                                                      "--framer-font-family": `"Fira Mono", monospace`,
                                                      "--framer-font-size": `45px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-letter-spacing": `-3.25px`,
                                                      "--framer-line-height": `1em`,
                                                      "--framer-text-color": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                    },
                                                    children: [
                                                      m(`span`, {
                                                        style: {
                                                          "--framer-font-size": `65px`,
                                                        },
                                                        children: `Web`,
                                                      }),
                                                      m(`span`, {
                                                        style: {
                                                          "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                        },
                                                        children: ``,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-hc8wv9`,
                                                fonts: [`GF;Fira Mono-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: m(`p`, {
                                                    className: `framer-styles-preset-1mk8z8h`,
                                                    "data-styles-preset": `sPvC_pCwb`,
                                                    dir: `auto`,
                                                    children: `Responsive websites and interactive products.`,
                                                  }),
                                                }),
                                                className: `framer-1uc454q`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          g(`div`, {
                                            className: `framer-399r8a`,
                                            "data-framer-name": `Stat`,
                                            children: [
                                              g(`div`, {
                                                className: `framer-1994otp`,
                                                "data-framer-name": `Percentage`,
                                                children: [
                                                  m(K, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      h4gwFyb7P: {
                                                        background: {
                                                          alt: `icon`,
                                                          fit: `fill`,
                                                          intrinsicHeight: 24,
                                                          intrinsicWidth: 24,
                                                          loading: A(
                                                            (d?.y || 0) +
                                                              0 +
                                                              1e3 +
                                                              18 +
                                                              50 +
                                                              169.6 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              392 +
                                                              20 +
                                                              47.08 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0.5,
                                                          ),
                                                          pixelHeight: 24,
                                                          pixelWidth: 24,
                                                          sizes: `24px`,
                                                          src: `https://framerusercontent.com/images/U6lObx4fCWLyexWf6K6cRPHF8.svg?width=24&height=24`,
                                                        },
                                                      },
                                                      Vg0sB4Fhp: {
                                                        background: {
                                                          alt: `icon`,
                                                          fit: `fill`,
                                                          intrinsicHeight: 24,
                                                          intrinsicWidth: 24,
                                                          loading: A(
                                                            (d?.y || 0) +
                                                              0 +
                                                              1e3 +
                                                              18 +
                                                              0 +
                                                              50 +
                                                              265.6 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              392 +
                                                              20 +
                                                              47.08 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0.5,
                                                          ),
                                                          pixelHeight: 24,
                                                          pixelWidth: 24,
                                                          sizes: `24px`,
                                                          src: `https://framerusercontent.com/images/U6lObx4fCWLyexWf6K6cRPHF8.svg?width=24&height=24`,
                                                        },
                                                      },
                                                    },
                                                    children: m(W, {
                                                      background: {
                                                        alt: `icon`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 24,
                                                        intrinsicWidth: 24,
                                                        loading: A(
                                                          (d?.y || 0) +
                                                            0 +
                                                            1e3 +
                                                            18 +
                                                            50 +
                                                            169.6 +
                                                            0 +
                                                            0 +
                                                            392 +
                                                            20 +
                                                            47.08 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0.5,
                                                        ),
                                                        pixelHeight: 24,
                                                        pixelWidth: 24,
                                                        sizes: `24px`,
                                                        src: `https://framerusercontent.com/images/U6lObx4fCWLyexWf6K6cRPHF8.svg?width=24&height=24`,
                                                      },
                                                      className: `framer-a35wbs`,
                                                      "data-framer-name": `Icon`,
                                                    }),
                                                  }),
                                                  m(K, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      h4gwFyb7P: {
                                                        children: m(t, {
                                                          children: m(`p`, {
                                                            className: `framer-styles-preset-1l7tyv5`,
                                                            "data-styles-preset": `PNo9og6ZQ`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                            },
                                                            children: `PERFORMANCE`,
                                                          }),
                                                        }),
                                                        fonts: [`Inter`],
                                                      },
                                                      Vg0sB4Fhp: {
                                                        children: m(t, {
                                                          children: m(`p`, {
                                                            className: `framer-styles-preset-1l7tyv5`,
                                                            "data-styles-preset": `PNo9og6ZQ`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                            },
                                                            children: `Fast`,
                                                          }),
                                                        }),
                                                        fonts: [`Inter`],
                                                      },
                                                    },
                                                    children: m(I, {
                                                      __fromCanvasComponent: !0,
                                                      children: m(t, {
                                                        children: m(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                            "--framer-font-size": `25px`,
                                                            "--framer-font-weight": `500`,
                                                            "--framer-letter-spacing": `-1.25px`,
                                                            "--framer-line-height": `1em`,
                                                            "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                            "--framer-text-transform": `uppercase`,
                                                          },
                                                          children: `Performance`,
                                                        }),
                                                      }),
                                                      className: `framer-hua3w5`,
                                                      fonts: [`Inter-Medium`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: m(`p`, {
                                                    className: `framer-styles-preset-3fyugt`,
                                                    "data-styles-preset": `iFFcEKQM3`,
                                                    dir: `auto`,
                                                    children: `Fast, accessible builds from the first line.`,
                                                  }),
                                                }),
                                                className: `framer-vdnzbz`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              g(`div`, {
                                className: `framer-1xuqjjy`,
                                "data-framer-name": `Card-wrap`,
                                children: [
                                  g(Z, {
                                    __framer__animate: { transition: no },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-159uq8b`,
                                    "data-border": !0,
                                    "data-framer-name": `Why-us-card`,
                                    children: [
                                      m(K, {
                                        breakpoint: w,
                                        overrides: {
                                          h4gwFyb7P: {
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              1e3 +
                                              18 +
                                              50 +
                                              169.6 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              20 +
                                              0,
                                          },
                                          Vg0sB4Fhp: {
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              1e3 +
                                              18 +
                                              0 +
                                              50 +
                                              265.6 +
                                              0 +
                                              572 +
                                              0 +
                                              0 +
                                              20 +
                                              0,
                                          },
                                        },
                                        children: m(V, {
                                          height: 20,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            1e3 +
                                            18 +
                                            50 +
                                            169.6 +
                                            0 +
                                            0 +
                                            0 +
                                            20 +
                                            0,
                                          children: m(z, {
                                            className: `framer-eewfz0-container`,
                                            nodeId: `VZXMRs_HT`,
                                            scopeId: `augiA20Il`,
                                            children: m(q, {
                                              GZXD4XDjD: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                              height: `100%`,
                                              id: `VZXMRs_HT`,
                                              layoutId: `VZXMRs_HT`,
                                              t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                              width: `100%`,
                                              wYgOcdV21: `CLIENTS`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      g(`div`, {
                                        className: `framer-berk50`,
                                        "data-framer-name": `Content-wrapper`,
                                        children: [
                                          g(`div`, {
                                            className: `framer-84d3lu`,
                                            "data-framer-name": `Stat`,
                                            children: [
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: g(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `R0Y7RmlyYSBNb25vLTUwMA==`,
                                                      "--framer-font-family": `"Fira Mono", monospace`,
                                                      "--framer-font-size": `45px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-letter-spacing": `-3.25px`,
                                                      "--framer-line-height": `1em`,
                                                      "--framer-text-color": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                    },
                                                    children: [
                                                      m(`span`, {
                                                        style: {
                                                          "--framer-font-size": `65px`,
                                                        },
                                                        children: `1`,
                                                      }),
                                                      m(`span`, {
                                                        style: {
                                                          "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                        },
                                                        children: ``,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-4k7sce`,
                                                fonts: [`GF;Fira Mono-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: m(`p`, {
                                                    className: `framer-styles-preset-1mk8z8h`,
                                                    "data-styles-preset": `sPvC_pCwb`,
                                                    dir: `auto`,
                                                    children: `You work directly with the developer building the site.`,
                                                  }),
                                                }),
                                                className: `framer-4bcl7u`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          g(`div`, {
                                            className: `framer-e99ka8`,
                                            "data-framer-name": `Avatars`,
                                            children: [
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          1e3 +
                                                          18 +
                                                          50 +
                                                          169.6 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          20 +
                                                          47.08 +
                                                          0 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                  Vg0sB4Fhp: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          1e3 +
                                                          18 +
                                                          0 +
                                                          50 +
                                                          265.6 +
                                                          0 +
                                                          572 +
                                                          0 +
                                                          0 +
                                                          20 +
                                                          47.08 +
                                                          0 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                },
                                                children: m(W, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 184,
                                                    intrinsicWidth: 184,
                                                    loading: A(
                                                      (d?.y || 0) +
                                                        0 +
                                                        1e3 +
                                                        18 +
                                                        50 +
                                                        169.6 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        20 +
                                                        47.08 +
                                                        0 +
                                                        0,
                                                    ),
                                                    pixelHeight: 184,
                                                    pixelWidth: 184,
                                                    sizes: `46px`,
                                                    src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                  },
                                                  className: `framer-165xjgx`,
                                                  "data-framer-name": `Avatar`,
                                                }),
                                              }),
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          1e3 +
                                                          18 +
                                                          50 +
                                                          169.6 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          20 +
                                                          47.08 +
                                                          0 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                  Vg0sB4Fhp: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          1e3 +
                                                          18 +
                                                          0 +
                                                          50 +
                                                          265.6 +
                                                          0 +
                                                          572 +
                                                          0 +
                                                          0 +
                                                          20 +
                                                          47.08 +
                                                          0 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                },
                                                children: m(W, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 184,
                                                    intrinsicWidth: 184,
                                                    loading: A(
                                                      (d?.y || 0) +
                                                        0 +
                                                        1e3 +
                                                        18 +
                                                        50 +
                                                        169.6 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        20 +
                                                        47.08 +
                                                        0 +
                                                        0,
                                                    ),
                                                    pixelHeight: 184,
                                                    pixelWidth: 184,
                                                    sizes: `46px`,
                                                    src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                  },
                                                  className: `framer-ipnklk`,
                                                  "data-framer-name": `Avatar`,
                                                }),
                                              }),
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          1e3 +
                                                          18 +
                                                          50 +
                                                          169.6 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          20 +
                                                          47.08 +
                                                          0 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                  Vg0sB4Fhp: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          1e3 +
                                                          18 +
                                                          0 +
                                                          50 +
                                                          265.6 +
                                                          0 +
                                                          572 +
                                                          0 +
                                                          0 +
                                                          20 +
                                                          47.08 +
                                                          0 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                },
                                                children: m(W, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 184,
                                                    intrinsicWidth: 184,
                                                    loading: A(
                                                      (d?.y || 0) +
                                                        0 +
                                                        1e3 +
                                                        18 +
                                                        50 +
                                                        169.6 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        20 +
                                                        47.08 +
                                                        0 +
                                                        0,
                                                    ),
                                                    pixelHeight: 184,
                                                    pixelWidth: 184,
                                                    sizes: `46px`,
                                                    src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                  },
                                                  className: `framer-usq21l`,
                                                  "data-framer-name": `Avatar`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  g(Z, {
                                    __framer__animate: { transition: ro },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1edzudo`,
                                    "data-border": !0,
                                    "data-framer-name": `Why-us-card`,
                                    children: [
                                      g(`div`, {
                                        className: `framer-5ikiis`,
                                        "data-framer-name": `Top`,
                                        children: [
                                          m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: {
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  1e3 +
                                                  18 +
                                                  50 +
                                                  169.6 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  180 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                              Vg0sB4Fhp: {
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  1e3 +
                                                  18 +
                                                  0 +
                                                  50 +
                                                  265.6 +
                                                  0 +
                                                  572 +
                                                  0 +
                                                  180 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: m(V, {
                                              height: 20,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                1e3 +
                                                18 +
                                                50 +
                                                169.6 +
                                                0 +
                                                0 +
                                                180 +
                                                20 +
                                                0 +
                                                0 +
                                                0,
                                              children: m(z, {
                                                className: `framer-vw7ika-container`,
                                                nodeId: `cROcoFNXp`,
                                                scopeId: `augiA20Il`,
                                                children: m(q, {
                                                  GZXD4XDjD: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                  height: `100%`,
                                                  id: `cROcoFNXp`,
                                                  layoutId: `cROcoFNXp`,
                                                  t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                  width: `100%`,
                                                  wYgOcdV21: `APPROACH`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          g(`div`, {
                                            className: `framer-1rrdxek`,
                                            "data-border": !0,
                                            "data-framer-name": `Content-box`,
                                            children: [
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: m(`h6`, {
                                                    className: `framer-styles-preset-h54z1`,
                                                    "data-styles-preset": `aH41o35LP`,
                                                    dir: `auto`,
                                                    children: `Straightforward, start to finish`,
                                                  }),
                                                }),
                                                className: `framer-u40e32`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: m(`h6`, {
                                                    className: `framer-styles-preset-1litcpx`,
                                                    "data-styles-preset": `kyo9an03l`,
                                                    dir: `auto`,
                                                    children: `The details are what I care about: the loading state, the spacing, the interaction, and the moment a page either feels effortless or doesn’t.`,
                                                  }),
                                                }),
                                                className: `framer-1f3qw99`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      g(`div`, {
                                        className: `framer-1w5c0bg`,
                                        "data-framer-name": `Bottom`,
                                        children: [
                                          g(`div`, {
                                            className: `framer-xahayf`,
                                            "data-framer-name": `Stats`,
                                            children: [
                                              g(`div`, {
                                                className: `framer-q7y8sk`,
                                                "data-framer-name": `Stat`,
                                                children: [
                                                  m(I, {
                                                    __fromCanvasComponent: !0,
                                                    children: m(t, {
                                                      children: m(`h6`, {
                                                        className: `framer-styles-preset-wlp658`,
                                                        "data-styles-preset": `CqWmfM2lH`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                        },
                                                        children: `6`,
                                                      }),
                                                    }),
                                                    className: `framer-90e5sw`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  m(I, {
                                                    __fromCanvasComponent: !0,
                                                    children: m(t, {
                                                      children: m(`p`, {
                                                        className: `framer-styles-preset-12v5vws`,
                                                        "data-styles-preset": `jKIJ8whPe`,
                                                        dir: `auto`,
                                                        children: `Projects shipped`,
                                                      }),
                                                    }),
                                                    className: `framer-6w30dj`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                              g(`div`, {
                                                className: `framer-u9kmrj`,
                                                "data-framer-name": `Stat`,
                                                children: [
                                                  m(I, {
                                                    __fromCanvasComponent: !0,
                                                    children: m(t, {
                                                      children: m(`h6`, {
                                                        className: `framer-styles-preset-wlp658`,
                                                        "data-styles-preset": `CqWmfM2lH`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                        },
                                                        children: `1`,
                                                      }),
                                                    }),
                                                    className: `framer-1urve99`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  m(I, {
                                                    __fromCanvasComponent: !0,
                                                    children: m(t, {
                                                      children: m(`p`, {
                                                        className: `framer-styles-preset-12v5vws`,
                                                        "data-styles-preset": `jKIJ8whPe`,
                                                        dir: `auto`,
                                                        children: `Developer, end to end`,
                                                      }),
                                                    }),
                                                    className: `framer-c3gdc3`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          g(`div`, {
                                            className: `framer-a0vgll`,
                                            "data-framer-name": `Profile`,
                                            children: [
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          1e3 +
                                                          18 +
                                                          50 +
                                                          169.6 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          180 +
                                                          20 +
                                                          190 +
                                                          0 +
                                                          106 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                  Vg0sB4Fhp: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          1e3 +
                                                          18 +
                                                          0 +
                                                          50 +
                                                          265.6 +
                                                          0 +
                                                          572 +
                                                          0 +
                                                          180 +
                                                          20 +
                                                          190 +
                                                          0 +
                                                          106 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                },
                                                children: m(W, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 184,
                                                    intrinsicWidth: 184,
                                                    loading: A(
                                                      (d?.y || 0) +
                                                        0 +
                                                        1e3 +
                                                        18 +
                                                        50 +
                                                        169.6 +
                                                        0 +
                                                        0 +
                                                        180 +
                                                        20 +
                                                        190 +
                                                        0 +
                                                        106 +
                                                        0,
                                                    ),
                                                    pixelHeight: 184,
                                                    pixelWidth: 184,
                                                    sizes: `46px`,
                                                    src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                  },
                                                  className: `framer-i1a18d`,
                                                  "data-framer-name": `Avatar`,
                                                }),
                                              }),
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: g(`p`, {
                                                    className: `framer-styles-preset-3fyugt`,
                                                    "data-styles-preset": `iFFcEKQM3`,
                                                    dir: `auto`,
                                                    children: [
                                                      m(`span`, {
                                                        style: {
                                                          "--framer-text-color": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                        },
                                                        children: ``,
                                                      }),
                                                      m(`br`, {}),
                                                      m(`span`, {
                                                        style: {
                                                          "--framer-text-color": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                        },
                                                        children: ``,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-2g53k3`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              g(Z, {
                                __framer__animate: { transition: io },
                                __framer__animateOnce: !0,
                                __framer__enter: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-ydljps`,
                                "data-border": !0,
                                "data-framer-name": `Why-us-card`,
                                children: [
                                  g(`div`, {
                                    className: `framer-1dm0wps`,
                                    "data-framer-name": `Inner-box`,
                                    children: [
                                      m(K, {
                                        breakpoint: w,
                                        overrides: {
                                          h4gwFyb7P: {
                                            background: {
                                              alt: `logo`,
                                              fit: `fill`,
                                              intrinsicHeight: 20,
                                              intrinsicWidth: 79,
                                              loading: A(
                                                (d?.y || 0) +
                                                  0 +
                                                  1e3 +
                                                  18 +
                                                  50 +
                                                  169.6 +
                                                  0 +
                                                  572 +
                                                  30 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 20,
                                              pixelWidth: 79,
                                              sizes: `79px`,
                                              src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                            },
                                          },
                                          Vg0sB4Fhp: {
                                            background: {
                                              alt: `logo`,
                                              fit: `fill`,
                                              intrinsicHeight: 20,
                                              intrinsicWidth: 79,
                                              loading: A(
                                                (d?.y || 0) +
                                                  0 +
                                                  1e3 +
                                                  18 +
                                                  0 +
                                                  50 +
                                                  265.6 +
                                                  0 +
                                                  1144 +
                                                  30 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 20,
                                              pixelWidth: 79,
                                              sizes: `79px`,
                                              src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                            },
                                          },
                                        },
                                        children: m(W, {
                                          background: {
                                            alt: `logo`,
                                            fit: `fill`,
                                            intrinsicHeight: 20,
                                            intrinsicWidth: 79,
                                            loading: A(
                                              (d?.y || 0) +
                                                0 +
                                                1e3 +
                                                18 +
                                                50 +
                                                169.6 +
                                                0 +
                                                30 +
                                                0 +
                                                0 +
                                                0,
                                            ),
                                            pixelHeight: 20,
                                            pixelWidth: 79,
                                            sizes: `79px`,
                                            src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                          },
                                          className: `framer-wjcz0u`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      g(`div`, {
                                        className: `framer-1ebgdtw`,
                                        "data-framer-name": `Info-box`,
                                        children: [
                                          g(Z, {
                                            __framer__animate: {
                                              transition: ao,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Wa,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-d708op`,
                                            "data-framer-name": `Label`,
                                            children: [
                                              m(Z, {
                                                __framer__loop: qa,
                                                __framer__loopEffectEnabled: !0,
                                                __framer__loopPauseOffscreen:
                                                  !0,
                                                __framer__loopRepeatDelay: 0,
                                                __framer__loopRepeatType: `mirror`,
                                                __framer__loopTransition: Ka,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-10hfqd2`,
                                                "data-framer-name": `Dot`,
                                              }),
                                              m(I, {
                                                __fromCanvasComponent: !0,
                                                children: m(t, {
                                                  children: m(`p`, {
                                                    className: `framer-styles-preset-3fyugt`,
                                                    "data-styles-preset": `iFFcEKQM3`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    },
                                                    children: `WORKING TOGETHER`,
                                                  }),
                                                }),
                                                className: `framer-1yrzsjd`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          g(`div`, {
                                            className: `framer-8ocolb`,
                                            "data-framer-name": `Content-wrapper`,
                                            children: [
                                              g(`div`, {
                                                className: `framer-4l6bgl`,
                                                "data-framer-name": `Heading`,
                                                children: [
                                                  m(I, {
                                                    __fromCanvasComponent: !0,
                                                    children: m(t, {
                                                      children: g(`h5`, {
                                                        className: `framer-styles-preset-gdm0tu`,
                                                        "data-styles-preset": `c4DgZxCzf`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                        },
                                                        children: [
                                                          m(`span`, {
                                                            style: {
                                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                            },
                                                            children: `*`,
                                                          }),
                                                          `Have a project in mind?`,
                                                          m(`span`, {
                                                            style: {
                                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                            },
                                                            children: `*`,
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    className: `framer-1jhfbct`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  m(I, {
                                                    __fromCanvasComponent: !0,
                                                    children: m(t, {
                                                      children: m(`p`, {
                                                        className: `framer-styles-preset-1mk8z8h`,
                                                        "data-styles-preset": `sPvC_pCwb`,
                                                        dir: `auto`,
                                                        children: `Tell me what you’re building and I’ll come back with how I’d approach it.`,
                                                      }),
                                                    }),
                                                    className: `framer-m32u4c`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                              g(`div`, {
                                                className: `framer-1jylyd1`,
                                                "data-framer-name": `Bottom-info`,
                                                children: [
                                                  g(`div`, {
                                                    className: `framer-l2mw7n`,
                                                    "data-framer-name": `Profile`,
                                                    children: [
                                                      m(K, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          h4gwFyb7P: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              intrinsicHeight: 184,
                                                              intrinsicWidth: 184,
                                                              loading: A(
                                                                (d?.y || 0) +
                                                                  0 +
                                                                  1e3 +
                                                                  18 +
                                                                  50 +
                                                                  169.6 +
                                                                  0 +
                                                                  572 +
                                                                  30 +
                                                                  0 +
                                                                  0 +
                                                                  73 +
                                                                  0 +
                                                                  112.4 +
                                                                  0 +
                                                                  194.6 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              ),
                                                              pixelHeight: 184,
                                                              pixelWidth: 184,
                                                              sizes: `46px`,
                                                              src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                            },
                                                          },
                                                          Vg0sB4Fhp: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              intrinsicHeight: 184,
                                                              intrinsicWidth: 184,
                                                              loading: A(
                                                                (d?.y || 0) +
                                                                  0 +
                                                                  1e3 +
                                                                  18 +
                                                                  0 +
                                                                  50 +
                                                                  265.6 +
                                                                  0 +
                                                                  1144 +
                                                                  30 +
                                                                  0 +
                                                                  0 +
                                                                  73 +
                                                                  0 +
                                                                  112.4 +
                                                                  0 +
                                                                  194.6 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              ),
                                                              pixelHeight: 184,
                                                              pixelWidth: 184,
                                                              sizes: `46px`,
                                                              src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                            },
                                                          },
                                                        },
                                                        children: m(W, {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            intrinsicHeight: 184,
                                                            intrinsicWidth: 184,
                                                            loading: A(
                                                              (d?.y || 0) +
                                                                0 +
                                                                1e3 +
                                                                18 +
                                                                50 +
                                                                169.6 +
                                                                0 +
                                                                30 +
                                                                0 +
                                                                0 +
                                                                73 +
                                                                0 +
                                                                112.4 +
                                                                0 +
                                                                194.6 +
                                                                0 +
                                                                0 +
                                                                0,
                                                            ),
                                                            pixelHeight: 184,
                                                            pixelWidth: 184,
                                                            sizes: `46px`,
                                                            src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                          },
                                                          className: `framer-53itgl`,
                                                        }),
                                                      }),
                                                      m(I, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: m(t, {
                                                          children: m(`p`, {
                                                            className: `framer-styles-preset-3fyugt`,
                                                            "data-styles-preset": `iFFcEKQM3`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                            },
                                                            children: ``,
                                                          }),
                                                        }),
                                                        className: `framer-itbun9`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                  m(pe, {
                                                    links: [
                                                      {
                                                        href: {
                                                          webPageId: `VS1gZwE1i`,
                                                        },
                                                        implicitPathVariables:
                                                          void 0,
                                                      },
                                                      {
                                                        href: {
                                                          webPageId: `VS1gZwE1i`,
                                                        },
                                                        implicitPathVariables:
                                                          void 0,
                                                      },
                                                      {
                                                        href: {
                                                          webPageId: `VS1gZwE1i`,
                                                        },
                                                        implicitPathVariables:
                                                          void 0,
                                                      },
                                                    ],
                                                    children: (e) =>
                                                      m(K, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          h4gwFyb7P: {
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              1e3 +
                                                              18 +
                                                              50 +
                                                              169.6 +
                                                              0 +
                                                              572 +
                                                              30 +
                                                              0 +
                                                              0 +
                                                              73 +
                                                              0 +
                                                              112.4 +
                                                              0 +
                                                              194.6 +
                                                              38,
                                                          },
                                                          Vg0sB4Fhp: {
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              1e3 +
                                                              18 +
                                                              0 +
                                                              50 +
                                                              265.6 +
                                                              0 +
                                                              1144 +
                                                              30 +
                                                              0 +
                                                              0 +
                                                              73 +
                                                              0 +
                                                              112.4 +
                                                              0 +
                                                              194.6 +
                                                              38,
                                                          },
                                                        },
                                                        children: m(V, {
                                                          height: 46,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            1e3 +
                                                            18 +
                                                            50 +
                                                            169.6 +
                                                            0 +
                                                            30 +
                                                            0 +
                                                            0 +
                                                            73 +
                                                            0 +
                                                            112.4 +
                                                            0 +
                                                            194.6 +
                                                            38,
                                                          children: m(z, {
                                                            className: `framer-1wc2d29-container`,
                                                            nodeId: `setDtO4bv`,
                                                            scopeId: `augiA20Il`,
                                                            children: m(K, {
                                                              breakpoint: w,
                                                              overrides: {
                                                                h4gwFyb7P: {
                                                                  evTCyulAI:
                                                                    e[1],
                                                                },
                                                                Vg0sB4Fhp: {
                                                                  evTCyulAI:
                                                                    e[2],
                                                                },
                                                              },
                                                              children: m(rt, {
                                                                AN8wZ6h6b: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                                Cya6RuIUy: !1,
                                                                evTCyulAI: e[0],
                                                                FRGXCszKE: `Get In Touch`,
                                                                height: `100%`,
                                                                id: `setDtO4bv`,
                                                                KS1OTpe12: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                                layoutId: `setDtO4bv`,
                                                                OubOSgTqz: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                                qV_NmyJVp: !1,
                                                                RnDkx60mf: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                                s5zVGHZrm: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                                style: {
                                                                  height: `100%`,
                                                                },
                                                                variant:
                                                                  $(
                                                                    `zphlO018I`,
                                                                  ),
                                                                VmYpdrASS: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                                w1blkKoqs: 100,
                                                                width: `100%`,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  m(K, {
                                    breakpoint: w,
                                    overrides: {
                                      h4gwFyb7P: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2256,
                                          intrinsicWidth: 1604,
                                          loading: A(
                                            (d?.y || 0) +
                                              0 +
                                              1e3 +
                                              18 +
                                              50 +
                                              169.6 +
                                              0 +
                                              572 +
                                              1,
                                          ),
                                          pixelHeight: 2256,
                                          pixelWidth: 1604,
                                          sizes: `calc(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 50px) * 2 + 7px)`,
                                          src: `/assets/logo.png`,
                                          srcSet: `/assets/logo.png 1254w`,
                                        },
                                      },
                                      Vg0sB4Fhp: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2256,
                                          intrinsicWidth: 1604,
                                          loading: A(
                                            (d?.y || 0) +
                                              0 +
                                              1e3 +
                                              18 +
                                              0 +
                                              50 +
                                              265.6 +
                                              0 +
                                              1144 +
                                              1,
                                          ),
                                          pixelHeight: 2256,
                                          pixelWidth: 1604,
                                          sizes: `calc(min(${d?.width || `100vw`} - 20px, 1440px) - 35px)`,
                                          src: `/assets/logo.png`,
                                          srcSet: `/assets/logo.png 1254w`,
                                        },
                                      },
                                    },
                                    children: m(W, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 2256,
                                        intrinsicWidth: 1604,
                                        loading: A(
                                          (d?.y || 0) +
                                            0 +
                                            1e3 +
                                            18 +
                                            50 +
                                            169.6 +
                                            0 +
                                            1,
                                        ),
                                        pixelHeight: 2256,
                                        pixelWidth: 1604,
                                        sizes: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 80px) / 3, 1px), 399px) - 3px)`,
                                        src: `/assets/logo.png`,
                                        srcSet: `/assets/logo.png 1254w`,
                                      },
                                      className: `framer-14fhfyd`,
                                      "data-framer-name": `BG`,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    m(v.section, {
                      className: `framer-1c5kvzc`,
                      "data-framer-name": `Projects`,
                      layout: k,
                      children: g(`div`, {
                        className: `framer-i8xrkx`,
                        "data-framer-name": `Container`,
                        children: [
                          g(`div`, {
                            className: `framer-1kgv32p`,
                            "data-framer-name": `Heading`,
                            children: [
                              m(Z, {
                                __framer__animate: { transition: Qa },
                                __framer__animateOnce: !0,
                                __framer__enter: Za,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-4x02hs`,
                                "data-framer-name": `Label-box`,
                                children: m(K, {
                                  breakpoint: w,
                                  overrides: {
                                    h4gwFyb7P: {
                                      width: `max(min(max(${d?.width || `100vw`} - 32px, 1px), 1440px) / 4, 50px)`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        2444.6 +
                                        60 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    Vg0sB4Fhp: {
                                      width: `max(min(${d?.width || `100vw`} - 32px, 1440px) / 4, 50px)`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        3112.6 +
                                        60 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                  },
                                  children: m(V, {
                                    height: 20,
                                    width: `max(min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) / 4, 50px)`,
                                    y:
                                      (d?.y || 0) +
                                      0 +
                                      1872.6 +
                                      60 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                    children: m(z, {
                                      className: `framer-104gkfu-container`,
                                      nodeId: `zE3t4CmzY`,
                                      scopeId: `augiA20Il`,
                                      children: m(q, {
                                        GZXD4XDjD: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                        height: `100%`,
                                        id: `zE3t4CmzY`,
                                        layoutId: `zE3t4CmzY`,
                                        t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                        width: `100%`,
                                        wYgOcdV21: `SELECTED WORK`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              g(`div`, {
                                className: `framer-1rlmyx7`,
                                "data-framer-name": `Title & Content`,
                                children: [
                                  m(I, {
                                    __fromCanvasComponent: !0,
                                    children: m(t, {
                                      children: g(`h2`, {
                                        className: `framer-styles-preset-w4n9ce`,
                                        "data-styles-preset": `QQizO8D2m`,
                                        dir: `auto`,
                                        children: [
                                          `Six builds, end to end`,
                                          m(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                            },
                                            children: `*`,
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: `framer-1lnk2ac`,
                                    effect: $a,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  m(Ea, {
                                    __framer__animate: { transition: Xa },
                                    __framer__animateOnce: !0,
                                    __framer__enter: eo,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: m(t, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-1mk8z8h`,
                                        "data-styles-preset": `sPvC_pCwb`,
                                        dir: `auto`,
                                        children: `Every project here is real — a live site I designed and built, with the thinking behind it.`,
                                      }),
                                    }),
                                    className: `framer-12a19t3`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g(`div`, {
                            className: `framer-72f5p6`,
                            "data-framer-name": `All`,
                            children: [
                              g(`div`, {
                                className: `framer-1i1o1wf`,
                                "data-framer-name": `Top`,
                                children: [
                                  m(`div`, {
                                    className: `framer-5922fp`,
                                    children: m(le, {
                                      children: m(co, {
                                        query: so(),
                                        children: (e, t, n) =>
                                          m(u, {
                                            children: e?.map(
                                              (
                                                {
                                                  id: e,
                                                  L6q2o4xpI: t,
                                                  lT8fJrlE3: n,
                                                  QE0E6Gpht: r,
                                                  qP5afZE0B: i,
                                                  SZLJAKHWh: a,
                                                },
                                                o,
                                              ) => (
                                                (n ??= ``),
                                                (i ??= ``),
                                                (a ??= ``),
                                                (t ??= ``),
                                                m(
                                                  x,
                                                  {
                                                    id: `yRx1aF6uj-${e}`,
                                                    children: m(ne.Provider, {
                                                      value: { L6q2o4xpI: t },
                                                      children: m(Z, {
                                                        __framer__animate: {
                                                          transition: Ga,
                                                        },
                                                        __framer__animateOnce:
                                                          !0,
                                                        __framer__enter: Q,
                                                        __framer__styleAppearEffectEnabled:
                                                          !0,
                                                        __framer__threshold: 0,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: `framer-gypa1s`,
                                                        children: m(pe, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            m(K, {
                                                              breakpoint: w,
                                                              overrides: {
                                                                h4gwFyb7P: {
                                                                  width: `max((min(max(${d?.width || `100vw`} - 32px, 1px), 1440px) - 15px) / 2, 1px)`,
                                                                  y:
                                                                    (d?.y ||
                                                                      0) +
                                                                    0 +
                                                                    2444.6 +
                                                                    60 +
                                                                    0 +
                                                                    189.6 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                },
                                                                Vg0sB4Fhp: {
                                                                  width: `max(min(${d?.width || `100vw`} - 32px, 1440px), 1px)`,
                                                                  y:
                                                                    (d?.y ||
                                                                      0) +
                                                                    0 +
                                                                    3112.6 +
                                                                    60 +
                                                                    0 +
                                                                    0 +
                                                                    285.6 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                },
                                                              },
                                                              children: m(V, {
                                                                height: 500,
                                                                width: `max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 15px) / 2, 1px)`,
                                                                y:
                                                                  (d?.y || 0) +
                                                                  0 +
                                                                  1872.6 +
                                                                  60 +
                                                                  0 +
                                                                  189.6 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                                children: m(z, {
                                                                  className: `framer-yg2mpr-container`,
                                                                  nodeId: `qrn689eJj`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: m(
                                                                    K,
                                                                    {
                                                                      breakpoint:
                                                                        w,
                                                                      overrides:
                                                                        {
                                                                          h4gwFyb7P:
                                                                            {
                                                                              nKHvk1MWe:
                                                                                e[1],
                                                                              variant:
                                                                                $(
                                                                                  `wC29Qre_W`,
                                                                                ),
                                                                            },
                                                                          Vg0sB4Fhp:
                                                                            {
                                                                              nKHvk1MWe:
                                                                                e[2],
                                                                              variant:
                                                                                $(
                                                                                  `wC29Qre_W`,
                                                                                ),
                                                                            },
                                                                        },
                                                                      children:
                                                                        m(it, {
                                                                          CmrOHUsjD:
                                                                            n,
                                                                          height: `100%`,
                                                                          id: `qrn689eJj`,
                                                                          layoutId: `qrn689eJj`,
                                                                          nKHvk1MWe:
                                                                            e[0],
                                                                          p1EeNJXxM:
                                                                            oo(
                                                                              r,
                                                                            ),
                                                                          SpJPq0bPr:
                                                                            i,
                                                                          style:
                                                                            {
                                                                              width: `100%`,
                                                                            },
                                                                          uzVf1SOPg:
                                                                            a,
                                                                          variant:
                                                                            $(
                                                                              `rsTDW_85I`,
                                                                            ),
                                                                          width: `100%`,
                                                                        }),
                                                                    },
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  e,
                                                )
                                              ),
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  m(`div`, {
                                    className: `framer-lkgem1`,
                                    children: m(le, {
                                      children: m(co, {
                                        query: lo(),
                                        children: (e, t, n) =>
                                          m(u, {
                                            children: e?.map(
                                              (
                                                {
                                                  id: e,
                                                  L6q2o4xpI: t,
                                                  lT8fJrlE3: n,
                                                  QE0E6Gpht: r,
                                                  qP5afZE0B: i,
                                                  SZLJAKHWh: a,
                                                },
                                                o,
                                              ) => (
                                                (n ??= ``),
                                                (i ??= ``),
                                                (a ??= ``),
                                                (t ??= ``),
                                                m(
                                                  x,
                                                  {
                                                    id: `eicTMASAE-${e}`,
                                                    children: m(ne.Provider, {
                                                      value: { L6q2o4xpI: t },
                                                      children: m(Z, {
                                                        __framer__animate: {
                                                          transition: ro,
                                                        },
                                                        __framer__animateOnce:
                                                          !0,
                                                        __framer__enter: Q,
                                                        __framer__styleAppearEffectEnabled:
                                                          !0,
                                                        __framer__threshold: 0,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: `framer-1kunz3o`,
                                                        children: m(pe, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            m(K, {
                                                              breakpoint: w,
                                                              overrides: {
                                                                h4gwFyb7P: {
                                                                  width: `max(min(max((min(max(${d?.width || `100vw`} - 32px, 1px), 1440px) - 15px) / 2, 1px), 548px), 1px)`,
                                                                  y:
                                                                    (d?.y ||
                                                                      0) +
                                                                    0 +
                                                                    2444.6 +
                                                                    60 +
                                                                    0 +
                                                                    189.6 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                },
                                                                Vg0sB4Fhp: {
                                                                  width: `max(min(min(${d?.width || `100vw`} - 32px, 1440px), 548px), 1px)`,
                                                                  y:
                                                                    (d?.y ||
                                                                      0) +
                                                                    0 +
                                                                    3112.6 +
                                                                    60 +
                                                                    0 +
                                                                    0 +
                                                                    285.6 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    540 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                },
                                                              },
                                                              children: m(V, {
                                                                height: 500,
                                                                width: `max(min(max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 15px) / 2, 1px), 548px), 1px)`,
                                                                y:
                                                                  (d?.y || 0) +
                                                                  0 +
                                                                  1872.6 +
                                                                  60 +
                                                                  0 +
                                                                  189.6 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                                children: m(z, {
                                                                  className: `framer-12xyv7s-container`,
                                                                  nodeId: `bLM7Q77uD`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: m(
                                                                    K,
                                                                    {
                                                                      breakpoint:
                                                                        w,
                                                                      overrides:
                                                                        {
                                                                          h4gwFyb7P:
                                                                            {
                                                                              nKHvk1MWe:
                                                                                e[1],
                                                                              variant:
                                                                                $(
                                                                                  `wC29Qre_W`,
                                                                                ),
                                                                            },
                                                                          Vg0sB4Fhp:
                                                                            {
                                                                              nKHvk1MWe:
                                                                                e[2],
                                                                              variant:
                                                                                $(
                                                                                  `wC29Qre_W`,
                                                                                ),
                                                                            },
                                                                        },
                                                                      children:
                                                                        m(it, {
                                                                          CmrOHUsjD:
                                                                            n,
                                                                          height: `100%`,
                                                                          id: `bLM7Q77uD`,
                                                                          layoutId: `bLM7Q77uD`,
                                                                          nKHvk1MWe:
                                                                            e[0],
                                                                          p1EeNJXxM:
                                                                            oo(
                                                                              r,
                                                                            ),
                                                                          SpJPq0bPr:
                                                                            i,
                                                                          style:
                                                                            {
                                                                              width: `100%`,
                                                                            },
                                                                          uzVf1SOPg:
                                                                            a,
                                                                          variant:
                                                                            $(
                                                                              `rsTDW_85I`,
                                                                            ),
                                                                          width: `100%`,
                                                                        }),
                                                                    },
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  e,
                                                )
                                              ),
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              g(`div`, {
                                className: `framer-1endjgl`,
                                "data-framer-name": `Mid`,
                                children: [
                                  m(`div`, {
                                    className: `framer-9t1y0o`,
                                    children: m(le, {
                                      children: m(co, {
                                        query: uo(),
                                        children: (e, t, n) =>
                                          m(u, {
                                            children: e?.map(
                                              (
                                                {
                                                  id: e,
                                                  L6q2o4xpI: t,
                                                  lT8fJrlE3: n,
                                                  QE0E6Gpht: r,
                                                  qP5afZE0B: i,
                                                  SZLJAKHWh: a,
                                                },
                                                o,
                                              ) => (
                                                (n ??= ``),
                                                (i ??= ``),
                                                (a ??= ``),
                                                (t ??= ``),
                                                m(
                                                  x,
                                                  {
                                                    id: `PBdIeoiLW-${e}`,
                                                    children: m(ne.Provider, {
                                                      value: { L6q2o4xpI: t },
                                                      children: m(Z, {
                                                        __framer__animate: {
                                                          transition: Ga,
                                                        },
                                                        __framer__animateOnce:
                                                          !0,
                                                        __framer__enter: Q,
                                                        __framer__styleAppearEffectEnabled:
                                                          !0,
                                                        __framer__threshold: 0,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: `framer-t69f0o`,
                                                        children: m(pe, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            m(K, {
                                                              breakpoint: w,
                                                              overrides: {
                                                                h4gwFyb7P: {
                                                                  width: `max(min(max((min(max(${d?.width || `100vw`} - 32px, 1px), 1440px) - 15px) / 2, 1px), 548px), 1px)`,
                                                                  y:
                                                                    (d?.y ||
                                                                      0) +
                                                                    0 +
                                                                    2444.6 +
                                                                    60 +
                                                                    0 +
                                                                    189.6 +
                                                                    0 +
                                                                    560 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                },
                                                                Vg0sB4Fhp: {
                                                                  width: `max(min(min(${d?.width || `100vw`} - 32px, 1440px), 548px), 1px)`,
                                                                  y:
                                                                    (d?.y ||
                                                                      0) +
                                                                    0 +
                                                                    3112.6 +
                                                                    60 +
                                                                    0 +
                                                                    0 +
                                                                    285.6 +
                                                                    0 +
                                                                    1080 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                },
                                                              },
                                                              children: m(V, {
                                                                height: 500,
                                                                width: `max(min(max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 15px) / 2, 1px), 548px), 1px)`,
                                                                y:
                                                                  (d?.y || 0) +
                                                                  0 +
                                                                  1872.6 +
                                                                  60 +
                                                                  0 +
                                                                  189.6 +
                                                                  0 +
                                                                  560 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                                children: m(z, {
                                                                  className: `framer-f3665v-container`,
                                                                  nodeId: `KcAWLg9BN`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: m(
                                                                    K,
                                                                    {
                                                                      breakpoint:
                                                                        w,
                                                                      overrides:
                                                                        {
                                                                          h4gwFyb7P:
                                                                            {
                                                                              nKHvk1MWe:
                                                                                e[1],
                                                                              variant:
                                                                                $(
                                                                                  `wC29Qre_W`,
                                                                                ),
                                                                            },
                                                                          Vg0sB4Fhp:
                                                                            {
                                                                              nKHvk1MWe:
                                                                                e[2],
                                                                              variant:
                                                                                $(
                                                                                  `wC29Qre_W`,
                                                                                ),
                                                                            },
                                                                        },
                                                                      children:
                                                                        m(it, {
                                                                          CmrOHUsjD:
                                                                            n,
                                                                          height: `100%`,
                                                                          id: `KcAWLg9BN`,
                                                                          layoutId: `KcAWLg9BN`,
                                                                          nKHvk1MWe:
                                                                            e[0],
                                                                          p1EeNJXxM:
                                                                            oo(
                                                                              r,
                                                                            ),
                                                                          SpJPq0bPr:
                                                                            i,
                                                                          style:
                                                                            {
                                                                              width: `100%`,
                                                                            },
                                                                          uzVf1SOPg:
                                                                            a,
                                                                          variant:
                                                                            $(
                                                                              `rsTDW_85I`,
                                                                            ),
                                                                          width: `100%`,
                                                                        }),
                                                                    },
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  e,
                                                )
                                              ),
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  m(`div`, {
                                    className: `framer-ej29a4`,
                                    children: m(le, {
                                      children: m(co, {
                                        query: fo(),
                                        children: (e, t, n) =>
                                          m(u, {
                                            children: e?.map(
                                              (
                                                {
                                                  id: e,
                                                  L6q2o4xpI: t,
                                                  lT8fJrlE3: n,
                                                  QE0E6Gpht: r,
                                                  qP5afZE0B: i,
                                                  SZLJAKHWh: a,
                                                },
                                                o,
                                              ) => (
                                                (n ??= ``),
                                                (i ??= ``),
                                                (a ??= ``),
                                                (t ??= ``),
                                                m(
                                                  x,
                                                  {
                                                    id: `dy7WUzAJl-${e}`,
                                                    children: m(ne.Provider, {
                                                      value: { L6q2o4xpI: t },
                                                      children: m(Z, {
                                                        __framer__animate: {
                                                          transition: ro,
                                                        },
                                                        __framer__animateOnce:
                                                          !0,
                                                        __framer__enter: Q,
                                                        __framer__styleAppearEffectEnabled:
                                                          !0,
                                                        __framer__threshold: 0,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: `framer-1h831hn`,
                                                        children: m(pe, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  L6q2o4xpI: t,
                                                                },
                                                                webPageId: `J6Q1AMwXS`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            m(K, {
                                                              breakpoint: w,
                                                              overrides: {
                                                                h4gwFyb7P: {
                                                                  width: `max((min(max(${d?.width || `100vw`} - 32px, 1px), 1440px) - 15px) / 2, 1px)`,
                                                                  y:
                                                                    (d?.y ||
                                                                      0) +
                                                                    0 +
                                                                    2444.6 +
                                                                    60 +
                                                                    0 +
                                                                    189.6 +
                                                                    0 +
                                                                    560 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                },
                                                                Vg0sB4Fhp: {
                                                                  width: `max(min(${d?.width || `100vw`} - 32px, 1440px), 1px)`,
                                                                  y:
                                                                    (d?.y ||
                                                                      0) +
                                                                    0 +
                                                                    3112.6 +
                                                                    60 +
                                                                    0 +
                                                                    0 +
                                                                    285.6 +
                                                                    0 +
                                                                    1080 +
                                                                    0 +
                                                                    540 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                },
                                                              },
                                                              children: m(V, {
                                                                height: 500,
                                                                width: `max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 15px) / 2, 1px)`,
                                                                y:
                                                                  (d?.y || 0) +
                                                                  0 +
                                                                  1872.6 +
                                                                  60 +
                                                                  0 +
                                                                  189.6 +
                                                                  0 +
                                                                  560 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                                children: m(z, {
                                                                  className: `framer-1ou7wgs-container`,
                                                                  nodeId: `N_6NeZCfa`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: m(
                                                                    K,
                                                                    {
                                                                      breakpoint:
                                                                        w,
                                                                      overrides:
                                                                        {
                                                                          h4gwFyb7P:
                                                                            {
                                                                              nKHvk1MWe:
                                                                                e[1],
                                                                              variant:
                                                                                $(
                                                                                  `wC29Qre_W`,
                                                                                ),
                                                                            },
                                                                          Vg0sB4Fhp:
                                                                            {
                                                                              nKHvk1MWe:
                                                                                e[2],
                                                                              variant:
                                                                                $(
                                                                                  `wC29Qre_W`,
                                                                                ),
                                                                            },
                                                                        },
                                                                      children:
                                                                        m(it, {
                                                                          CmrOHUsjD:
                                                                            n,
                                                                          height: `100%`,
                                                                          id: `N_6NeZCfa`,
                                                                          layoutId: `N_6NeZCfa`,
                                                                          nKHvk1MWe:
                                                                            e[0],
                                                                          p1EeNJXxM:
                                                                            oo(
                                                                              r,
                                                                            ),
                                                                          SpJPq0bPr:
                                                                            i,
                                                                          style:
                                                                            {
                                                                              width: `100%`,
                                                                            },
                                                                          uzVf1SOPg:
                                                                            a,
                                                                          variant:
                                                                            $(
                                                                              `rsTDW_85I`,
                                                                            ),
                                                                          width: `100%`,
                                                                        }),
                                                                    },
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  e,
                                                )
                                              ),
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    m(v.section, {
                      className: `framer-klll0n`,
                      "data-framer-name": `Services`,
                      id: P,
                      layout: k,
                      ref: F,
                      children: g(`div`, {
                        className: `framer-14xghat`,
                        "data-framer-name": `Container`,
                        children: [
                          m(V, {
                            children: m(z, {
                              className: `framer-f7s272-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `WZzsBb1j9`,
                              scopeId: `augiA20Il`,
                              children: m(_e, {
                                animate: !0,
                                animationSpeed: 1,
                                grainSize: 250,
                                height: `100%`,
                                id: `WZzsBb1j9`,
                                layoutId: `WZzsBb1j9`,
                                opacity: 0.06,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                          g(`div`, {
                            className: `framer-b07vrh`,
                            "data-framer-name": `Heading`,
                            children: [
                              m(`div`, {
                                className: `framer-146mteo`,
                                "data-framer-name": `Label-box`,
                                children: m(K, {
                                  breakpoint: w,
                                  overrides: {
                                    h4gwFyb7P: {
                                      width: `max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 32px) / 4, 50px)`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        3874.2 +
                                        0 +
                                        50 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    Vg0sB4Fhp: {
                                      width: `max((min(${d?.width || `100vw`} - 20px, 1440px) - 32px) / 4, 50px)`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        5698.2 +
                                        0 +
                                        0 +
                                        50 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                  },
                                  children: m(V, {
                                    height: 20,
                                    width: `max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 60px) / 4, 50px)`,
                                    y:
                                      (d?.y || 0) +
                                      0 +
                                      3302.2 +
                                      0 +
                                      50 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                    children: m(ka, {
                                      __framer__animate: { transition: Qa },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Za,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1cirn7s-container`,
                                      nodeId: `Ge6P3Xr5y`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: m(q, {
                                        GZXD4XDjD: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                        height: `100%`,
                                        id: `Ge6P3Xr5y`,
                                        layoutId: `Ge6P3Xr5y`,
                                        t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                        width: `100%`,
                                        wYgOcdV21: `services`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              g(`div`, {
                                className: `framer-v2q0oi`,
                                "data-framer-name": `Title & Content`,
                                children: [
                                  m(I, {
                                    __fromCanvasComponent: !0,
                                    children: m(t, {
                                      children: g(`h2`, {
                                        className: `framer-styles-preset-w4n9ce`,
                                        "data-styles-preset": `QQizO8D2m`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                        },
                                        children: [
                                          `What I Build`,
                                          m(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                            },
                                            children: `*`,
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: `framer-1cupo1z`,
                                    effect: $a,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  m(Ea, {
                                    __framer__animate: { transition: Xa },
                                    __framer__animateOnce: !0,
                                    __framer__enter: eo,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: m(t, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-1mk8z8h`,
                                        "data-styles-preset": `sPvC_pCwb`,
                                        dir: `auto`,
                                        children: `Four things I do well. Most projects start with one of them.`,
                                      }),
                                    }),
                                    className: `framer-1x8a4q7`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m(K, {
                            breakpoint: w,
                            overrides: {
                              h4gwFyb7P: {
                                width: `calc(min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 32px)`,
                                y: (d?.y || 0) + 0 + 3874.2 + 0 + 50 + 189.6,
                              },
                              Vg0sB4Fhp: {
                                width: `calc(min(${d?.width || `100vw`} - 20px, 1440px) - 32px)`,
                                y:
                                  (d?.y || 0) + 0 + 5698.2 + 0 + 0 + 50 + 285.6,
                              },
                            },
                            children: m(V, {
                              height: 863,
                              width: `calc(min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 60px)`,
                              y: (d?.y || 0) + 0 + 3302.2 + 0 + 50 + 189.6,
                              children: m(z, {
                                className: `framer-jgd6c0-container`,
                                nodeId: `wXO_naMyQ`,
                                scopeId: `augiA20Il`,
                                children: m(K, {
                                  breakpoint: w,
                                  overrides: {
                                    h4gwFyb7P: { variant: $(`McijgJ7nH`) },
                                    Vg0sB4Fhp: { variant: $(`H0bqoheM5`) },
                                  },
                                  children: m(Rr, {
                                    height: `100%`,
                                    id: `wXO_naMyQ`,
                                    layoutId: `wXO_naMyQ`,
                                    style: { width: `100%` },
                                    variant: $(`o6E4hfV7s`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    m(v.section, {
                      className: `framer-oixhce`,
                      "data-framer-name": `Process`,
                      layout: k,
                      children: g(`div`, {
                        className: `framer-1uxfc8w`,
                        "data-framer-name": `Container`,
                        children: [
                          g(`div`, {
                            className: `framer-1cvezwb`,
                            "data-framer-name": `Heading`,
                            children: [
                              m(K, {
                                breakpoint: w,
                                overrides: {
                                  h4gwFyb7P: {
                                    y:
                                      (d?.y || 0) +
                                      0 +
                                      5026.8 +
                                      120 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  Vg0sB4Fhp: {
                                    y:
                                      (d?.y || 0) +
                                      0 +
                                      6946.8 +
                                      120 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                },
                                children: m(V, {
                                  height: 20,
                                  y:
                                    (d?.y || 0) +
                                    0 +
                                    4454.8 +
                                    120 +
                                    0 +
                                    0 +
                                    0 +
                                    0,
                                  children: m(ka, {
                                    __framer__animate: { transition: Qa },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Za,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-py8wy5-container`,
                                    nodeId: `ULDwopRZT`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: m(q, {
                                      GZXD4XDjD: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                      height: `100%`,
                                      id: `ULDwopRZT`,
                                      layoutId: `ULDwopRZT`,
                                      t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                      width: `100%`,
                                      wYgOcdV21: `process`,
                                    }),
                                  }),
                                }),
                              }),
                              m(I, {
                                __fromCanvasComponent: !0,
                                children: m(t, {
                                  children: g(`h2`, {
                                    className: `framer-styles-preset-w4n9ce`,
                                    "data-styles-preset": `QQizO8D2m`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                    },
                                    children: [
                                      `How I Work`,
                                      m(`span`, {
                                        style: {
                                          "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                        },
                                        children: `*`,
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-1ug1ia1`,
                                effect: $a,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          g(`div`, {
                            className: `framer-1tozjsq`,
                            "data-framer-name": `Card & Content`,
                            children: [
                              g(`div`, {
                                className: `framer-fnz6j1`,
                                "data-framer-name": `Cards`,
                                children: [
                                  m(pe, {
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
                                    ],
                                    children: (e) =>
                                      m(K, {
                                        breakpoint: w,
                                        overrides: {
                                          h4gwFyb7P: {
                                            width: `min(min(max(${d?.width || `100vw`} - 32px, 1px), 1440px), 620px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              5026.8 +
                                              120 +
                                              0 +
                                              180 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          Vg0sB4Fhp: {
                                            width: `min(min(${d?.width || `100vw`} - 32px, 1440px), 620px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              6946.8 +
                                              120 +
                                              0 +
                                              0 +
                                              180 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: m(V, {
                                          height: 440,
                                          width: `min(min(max(${d?.width || `100vw`} - 40px, 1px), 1440px), 620px)`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            4454.8 +
                                            120 +
                                            0 +
                                            180 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: m(ka, {
                                            __framer__animate: {
                                              transition: io,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: po,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-sapz2r-container`,
                                            nodeId: `XDPoEl_23`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: m(K, {
                                              breakpoint: w,
                                              overrides: {
                                                h4gwFyb7P: { EyHTfTdKv: e[1] },
                                                Vg0sB4Fhp: { EyHTfTdKv: e[2] },
                                              },
                                              children: m(Xn, {
                                                AeEPehjC_: `50px 40px 50px 40px`,
                                                EyHTfTdKv: e[0],
                                                height: `100%`,
                                                id: `XDPoEl_23`,
                                                layoutId: `XDPoEl_23`,
                                                style: {
                                                  maxWidth: `100%`,
                                                  width: `100%`,
                                                },
                                                wbfizu2m_: `Understand`,
                                                width: `100%`,
                                                yh3l5zIsA: `We start with the actual brief: who it’s for, what it needs to do, and how it should feel.`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  m(pe, {
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
                                    ],
                                    children: (e) =>
                                      m(K, {
                                        breakpoint: w,
                                        overrides: {
                                          h4gwFyb7P: {
                                            width: `min(min(max(${d?.width || `100vw`} - 32px, 1px), 1440px), 620px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              5026.8 +
                                              120 +
                                              0 +
                                              180 +
                                              0 +
                                              0 +
                                              0 +
                                              450,
                                          },
                                          Vg0sB4Fhp: {
                                            width: `min(min(${d?.width || `100vw`} - 32px, 1440px), 620px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              6946.8 +
                                              120 +
                                              0 +
                                              0 +
                                              180 +
                                              0 +
                                              0 +
                                              0 +
                                              450,
                                          },
                                        },
                                        children: m(V, {
                                          height: 440,
                                          width: `min(min(max(${d?.width || `100vw`} - 40px, 1px), 1440px), 620px)`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            4454.8 +
                                            120 +
                                            0 +
                                            180 +
                                            0 +
                                            0 +
                                            0 +
                                            450,
                                          children: m(ka, {
                                            __framer__animate: {
                                              transition: Ga,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: mo,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1qvdzqq-container`,
                                            nodeId: `kS3hPZqxM`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: m(K, {
                                              breakpoint: w,
                                              overrides: {
                                                h4gwFyb7P: { EyHTfTdKv: e[1] },
                                                Vg0sB4Fhp: { EyHTfTdKv: e[2] },
                                              },
                                              children: m(Xn, {
                                                AeEPehjC_: `50px 40px 50px 40px`,
                                                EyHTfTdKv: e[0],
                                                height: `100%`,
                                                id: `kS3hPZqxM`,
                                                layoutId: `kS3hPZqxM`,
                                                N6RaqBoXI: ho(
                                                  {
                                                    pixelHeight: 540,
                                                    pixelWidth: 540,
                                                    src: `https://framerusercontent.com/images/DIhSr0AS8mADse40wQAQbzxdlM.png?width=540&height=540`,
                                                    srcSet: `https://framerusercontent.com/images/DIhSr0AS8mADse40wQAQbzxdlM.png?scale-down-to=512&width=540&height=540 512w,https://framerusercontent.com/images/DIhSr0AS8mADse40wQAQbzxdlM.png?width=540&height=540 540w`,
                                                  },
                                                  `image`,
                                                ),
                                                style: {
                                                  maxWidth: `100%`,
                                                  width: `100%`,
                                                },
                                                wbfizu2m_: `Design & Build`,
                                                width: `100%`,
                                                yh3l5zIsA: `Layout, code, motion and content, built in one pass so nothing gets lost between design and development.`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  m(pe, {
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
                                    ],
                                    children: (e) =>
                                      m(K, {
                                        breakpoint: w,
                                        overrides: {
                                          h4gwFyb7P: {
                                            width: `min(min(max(${d?.width || `100vw`} - 32px, 1px), 1440px), 620px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              5026.8 +
                                              120 +
                                              0 +
                                              180 +
                                              0 +
                                              0 +
                                              0 +
                                              900,
                                          },
                                          Vg0sB4Fhp: {
                                            width: `min(min(${d?.width || `100vw`} - 32px, 1440px), 620px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              6946.8 +
                                              120 +
                                              0 +
                                              0 +
                                              180 +
                                              0 +
                                              0 +
                                              0 +
                                              900,
                                          },
                                        },
                                        children: m(V, {
                                          height: 440,
                                          width: `min(min(max(${d?.width || `100vw`} - 40px, 1px), 1440px), 620px)`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            4454.8 +
                                            120 +
                                            0 +
                                            180 +
                                            0 +
                                            0 +
                                            0 +
                                            900,
                                          children: m(ka, {
                                            __framer__animate: {
                                              transition: ro,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: mo,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1hlptqq-container`,
                                            nodeId: `KCvRkepGE`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: m(K, {
                                              breakpoint: w,
                                              overrides: {
                                                h4gwFyb7P: { EyHTfTdKv: e[1] },
                                                Vg0sB4Fhp: { EyHTfTdKv: e[2] },
                                              },
                                              children: m(Xn, {
                                                AeEPehjC_: `50px 40px 50px 40px`,
                                                EyHTfTdKv: e[0],
                                                height: `100%`,
                                                id: `KCvRkepGE`,
                                                layoutId: `KCvRkepGE`,
                                                N6RaqBoXI: ho(
                                                  {
                                                    pixelHeight: 540,
                                                    pixelWidth: 540,
                                                    src: `https://framerusercontent.com/images/XX7EL0CcZIP8ZKT7AvrmbGKRk.png?width=540&height=540`,
                                                    srcSet: `https://framerusercontent.com/images/XX7EL0CcZIP8ZKT7AvrmbGKRk.png?scale-down-to=512&width=540&height=540 512w,https://framerusercontent.com/images/XX7EL0CcZIP8ZKT7AvrmbGKRk.png?width=540&height=540 540w`,
                                                  },
                                                  `image`,
                                                ),
                                                style: {
                                                  maxWidth: `100%`,
                                                  width: `100%`,
                                                },
                                                wbfizu2m_: `Refine`,
                                                width: `100%`,
                                                yh3l5zIsA: `Testing on real devices, tightening what feels slow, and polishing until it holds up.`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              m(Ea, {
                                __framer__animate: { transition: _o },
                                __framer__animateOnce: !0,
                                __framer__enter: go,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: m(t, {
                                  children: m(`p`, {
                                    className: `framer-styles-preset-1mk8z8h`,
                                    "data-styles-preset": `sPvC_pCwb`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                    },
                                    children: `Same care whether it’s a one-page site or a full build. You talk to the person doing the work.`,
                                  }),
                                }),
                                className: `framer-feon14`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    m(v.section, {
                      className: `framer-1t4oper`,
                      "data-framer-name": `Work`,
                      layout: k,
                      children: g(`div`, {
                        className: `framer-djtsa4`,
                        "data-framer-name": `Container`,
                        children: [
                          m(V, {
                            children: m(z, {
                              className: `framer-ycquxy-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `gmgsnZeCO`,
                              scopeId: `augiA20Il`,
                              children: m(_e, {
                                animate: !0,
                                animationSpeed: 1,
                                grainSize: 250,
                                height: `100%`,
                                id: `gmgsnZeCO`,
                                layoutId: `gmgsnZeCO`,
                                opacity: 0.06,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                          g(`div`, {
                            className: `framer-1i3kkir`,
                            "data-framer-name": `Top`,
                            children: [
                              g(`div`, {
                                className: `framer-1vl8qtx`,
                                "data-framer-name": `Heading`,
                                children: [
                                  m(K, {
                                    breakpoint: w,
                                    overrides: {
                                      h4gwFyb7P: {
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          6886.4 +
                                          0 +
                                          50 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      Vg0sB4Fhp: {
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          8806.4 +
                                          0 +
                                          0 +
                                          50 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: m(V, {
                                      height: 20,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        6314.4 +
                                        0 +
                                        50 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                      children: m(ka, {
                                        __framer__animate: { transition: Qa },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Za,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-178b7vf-container`,
                                        nodeId: `Nnsyc4Fbi`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: m(q, {
                                          GZXD4XDjD: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                          height: `100%`,
                                          id: `Nnsyc4Fbi`,
                                          layoutId: `Nnsyc4Fbi`,
                                          t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                          width: `100%`,
                                          wYgOcdV21: `ME VS. THE USUAL SETUP`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  m(I, {
                                    __fromCanvasComponent: !0,
                                    children: m(t, {
                                      children: g(`h2`, {
                                        className: `framer-styles-preset-w4n9ce`,
                                        "data-styles-preset": `QQizO8D2m`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                        },
                                        children: [
                                          `THE DIFFERENCE`,
                                          m(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                            },
                                            children: `*`,
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: `framer-1rwvjqw`,
                                    effect: $a,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  m(Ea, {
                                    __framer__animate: { transition: Xa },
                                    __framer__animateOnce: !0,
                                    __framer__enter: eo,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: m(t, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-1mk8z8h`,
                                        "data-styles-preset": `sPvC_pCwb`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                        },
                                        children: `You work directly with the person designing and building the site — one clear process from the first idea to the final detail.`,
                                      }),
                                    }),
                                    className: `framer-kwb9g9`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              g(`div`, {
                                className: `framer-5t09cw`,
                                "data-framer-name": `Cards`,
                                children: [
                                  g(Z, {
                                    __framer__animate: { transition: Ga },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-64rk0m`,
                                    "data-border": !0,
                                    "data-framer-name": `Excellence-card`,
                                    children: [
                                      g(Z, {
                                        __framer__animate: { transition: no },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Wa,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-19akh8s`,
                                        "data-framer-name": `Title`,
                                        children: [
                                          m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: {
                                                background: {
                                                  alt: `logo`,
                                                  fit: `fill`,
                                                  intrinsicHeight: 20,
                                                  intrinsicWidth: 79,
                                                  loading: A(
                                                    (d?.y || 0) +
                                                      0 +
                                                      6886.4 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      30 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  ),
                                                  pixelHeight: 20,
                                                  pixelWidth: 79,
                                                  sizes: `119px`,
                                                  src: `/assets/logo.png`,
                                                },
                                              },
                                              Vg0sB4Fhp: {
                                                background: {
                                                  alt: `logo`,
                                                  fit: `fill`,
                                                  intrinsicHeight: 20,
                                                  intrinsicWidth: 79,
                                                  loading: A(
                                                    (d?.y || 0) +
                                                      0 +
                                                      8806.4 +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      0 +
                                                      30 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  ),
                                                  pixelHeight: 20,
                                                  pixelWidth: 79,
                                                  sizes: `119px`,
                                                  src: `/assets/logo.png`,
                                                },
                                              },
                                            },
                                            children: m(W, {
                                              background: {
                                                alt: `logo`,
                                                fit: `fill`,
                                                intrinsicHeight: 20,
                                                intrinsicWidth: 79,
                                                loading: A(
                                                  (d?.y || 0) +
                                                    0 +
                                                    6314.4 +
                                                    0 +
                                                    50 +
                                                    0 +
                                                    0 +
                                                    289.6 +
                                                    0 +
                                                    30 +
                                                    0 +
                                                    0 +
                                                    0,
                                                ),
                                                pixelHeight: 20,
                                                pixelWidth: 79,
                                                sizes: `119px`,
                                                src: `/assets/logo.png`,
                                              },
                                              className: `framer-1mbqhwe`,
                                              "data-framer-name": `Logo`,
                                              fitImageDimension: `height`,
                                            }),
                                          }),
                                          m(I, {
                                            __fromCanvasComponent: !0,
                                            children: m(t, {
                                              children: m(`p`, {
                                                className: `framer-styles-preset-1mk8z8h`,
                                                "data-styles-preset": `sPvC_pCwb`,
                                                dir: `auto`,
                                                children: `MY APPROACH`,
                                              }),
                                            }),
                                            className: `framer-1bw87dy`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      g(`div`, {
                                        className: `framer-1rbk00u`,
                                        "data-framer-name": `List & Button`,
                                        children: [
                                          g(Z, {
                                            __framer__animate: {
                                              transition: ro,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Wa,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-tdhdjq`,
                                            "data-framer-name": `Lists`,
                                            children: [
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    width: `calc(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px) - 60px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      6886.4 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                  Vg0sB4Fhp: {
                                                    width: `calc(min(${d?.width || `100vw`} - 20px, 1440px) - 92px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      8806.4 +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                },
                                                children: m(V, {
                                                  height: 18,
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    6314.4 +
                                                    0 +
                                                    50 +
                                                    0 +
                                                    0 +
                                                    289.6 +
                                                    0 +
                                                    30 +
                                                    197.6 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                  children: m(z, {
                                                    className: `framer-1b0kx1h-container`,
                                                    nodeId: `Cyhnu4BEk`,
                                                    scopeId: `augiA20Il`,
                                                    children: m(Y, {
                                                      dNfqpppov: `Design and code in the same head`,
                                                      height: `100%`,
                                                      id: `Cyhnu4BEk`,
                                                      layoutId: `Cyhnu4BEk`,
                                                      style: { width: `100%` },
                                                      UQUamSqTe: 1,
                                                      width: `100%`,
                                                      WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    width: `calc(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px) - 60px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      6886.4 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      33,
                                                  },
                                                  Vg0sB4Fhp: {
                                                    width: `calc(min(${d?.width || `100vw`} - 20px, 1440px) - 92px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      8806.4 +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      33,
                                                  },
                                                },
                                                children: m(V, {
                                                  height: 18,
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    6314.4 +
                                                    0 +
                                                    50 +
                                                    0 +
                                                    0 +
                                                    289.6 +
                                                    0 +
                                                    30 +
                                                    197.6 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    33,
                                                  children: m(z, {
                                                    className: `framer-rm93gf-container`,
                                                    nodeId: `eN8znDF33`,
                                                    scopeId: `augiA20Il`,
                                                    children: m(Y, {
                                                      dNfqpppov: `No handoffs between design and build`,
                                                      height: `100%`,
                                                      id: `eN8znDF33`,
                                                      layoutId: `eN8znDF33`,
                                                      style: { width: `100%` },
                                                      UQUamSqTe: 1,
                                                      width: `100%`,
                                                      WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    width: `calc(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px) - 60px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      6886.4 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      66,
                                                  },
                                                  Vg0sB4Fhp: {
                                                    width: `calc(min(${d?.width || `100vw`} - 20px, 1440px) - 92px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      8806.4 +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      66,
                                                  },
                                                },
                                                children: m(V, {
                                                  height: 18,
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    6314.4 +
                                                    0 +
                                                    50 +
                                                    0 +
                                                    0 +
                                                    289.6 +
                                                    0 +
                                                    30 +
                                                    197.6 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    66,
                                                  children: m(z, {
                                                    className: `framer-18yb4ar-container`,
                                                    nodeId: `C6Lo469vl`,
                                                    scopeId: `augiA20Il`,
                                                    children: m(Y, {
                                                      dNfqpppov: `Fast, accessible and responsive by default`,
                                                      height: `100%`,
                                                      id: `C6Lo469vl`,
                                                      layoutId: `C6Lo469vl`,
                                                      style: { width: `100%` },
                                                      UQUamSqTe: 1,
                                                      width: `100%`,
                                                      WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    width: `calc(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px) - 60px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      6886.4 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      99,
                                                  },
                                                  Vg0sB4Fhp: {
                                                    width: `calc(min(${d?.width || `100vw`} - 20px, 1440px) - 92px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      8806.4 +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      99,
                                                  },
                                                },
                                                children: m(V, {
                                                  height: 18,
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    6314.4 +
                                                    0 +
                                                    50 +
                                                    0 +
                                                    0 +
                                                    289.6 +
                                                    0 +
                                                    30 +
                                                    197.6 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    99,
                                                  children: m(z, {
                                                    className: `framer-1o17y3e-container`,
                                                    nodeId: `MLOmbt02W`,
                                                    scopeId: `augiA20Il`,
                                                    children: m(Y, {
                                                      dNfqpppov: `Motion that supports the content`,
                                                      height: `100%`,
                                                      id: `MLOmbt02W`,
                                                      layoutId: `MLOmbt02W`,
                                                      style: { width: `100%` },
                                                      UQUamSqTe: 1,
                                                      width: `100%`,
                                                      WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    width: `calc(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px) - 60px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      6886.4 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      132,
                                                  },
                                                  Vg0sB4Fhp: {
                                                    width: `calc(min(${d?.width || `100vw`} - 20px, 1440px) - 92px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      8806.4 +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      132,
                                                  },
                                                },
                                                children: m(V, {
                                                  height: 18,
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    6314.4 +
                                                    0 +
                                                    50 +
                                                    0 +
                                                    0 +
                                                    289.6 +
                                                    0 +
                                                    30 +
                                                    197.6 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    132,
                                                  children: m(z, {
                                                    className: `framer-1tesaw-container`,
                                                    nodeId: `DcsiNWNMe`,
                                                    scopeId: `augiA20Il`,
                                                    children: m(Y, {
                                                      dNfqpppov: `A real person you can message`,
                                                      height: `100%`,
                                                      id: `DcsiNWNMe`,
                                                      layoutId: `DcsiNWNMe`,
                                                      style: { width: `100%` },
                                                      UQUamSqTe: 1,
                                                      width: `100%`,
                                                      WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    width: `calc(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px) - 60px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      6886.4 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      165,
                                                  },
                                                  Vg0sB4Fhp: {
                                                    width: `calc(min(${d?.width || `100vw`} - 20px, 1440px) - 92px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      8806.4 +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      165,
                                                  },
                                                },
                                                children: m(V, {
                                                  height: 18,
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    6314.4 +
                                                    0 +
                                                    50 +
                                                    0 +
                                                    0 +
                                                    289.6 +
                                                    0 +
                                                    30 +
                                                    197.6 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    165,
                                                  children: m(z, {
                                                    className: `framer-1ubjw7l-container`,
                                                    nodeId: `JcOnEjCxH`,
                                                    scopeId: `augiA20Il`,
                                                    children: m(Y, {
                                                      dNfqpppov: `One person responsible for the final build`,
                                                      height: `100%`,
                                                      id: `JcOnEjCxH`,
                                                      layoutId: `JcOnEjCxH`,
                                                      style: { width: `100%` },
                                                      UQUamSqTe: 1,
                                                      width: `100%`,
                                                      WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    width: `calc(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px) - 60px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      6886.4 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      198,
                                                  },
                                                  Vg0sB4Fhp: {
                                                    width: `calc(min(${d?.width || `100vw`} - 20px, 1440px) - 92px)`,
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      8806.4 +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      198,
                                                  },
                                                },
                                                children: m(V, {
                                                  height: 18,
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    6314.4 +
                                                    0 +
                                                    50 +
                                                    0 +
                                                    0 +
                                                    289.6 +
                                                    0 +
                                                    30 +
                                                    197.6 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    198,
                                                  children: m(z, {
                                                    className: `framer-1qnzr6k-container`,
                                                    nodeId: `zjmj58qtw`,
                                                    scopeId: `augiA20Il`,
                                                    children: m(Y, {
                                                      dNfqpppov: `Clean handover, documented build`,
                                                      height: `100%`,
                                                      id: `zjmj58qtw`,
                                                      layoutId: `zjmj58qtw`,
                                                      style: { width: `100%` },
                                                      UQUamSqTe: 1,
                                                      width: `100%`,
                                                      WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          m(pe, {
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
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      6886.4 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      266,
                                                  },
                                                  Vg0sB4Fhp: {
                                                    y:
                                                      (d?.y || 0) +
                                                      0 +
                                                      8806.4 +
                                                      0 +
                                                      0 +
                                                      50 +
                                                      0 +
                                                      0 +
                                                      289.6 +
                                                      0 +
                                                      0 +
                                                      30 +
                                                      197.6 +
                                                      0 +
                                                      266,
                                                  },
                                                },
                                                children: m(V, {
                                                  height: 46,
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    6314.4 +
                                                    0 +
                                                    50 +
                                                    0 +
                                                    0 +
                                                    289.6 +
                                                    0 +
                                                    30 +
                                                    197.6 +
                                                    0 +
                                                    170,
                                                  children: m(ka, {
                                                    __framer__animate: {
                                                      transition: Ga,
                                                    },
                                                    __framer__animateOnce: !0,
                                                    __framer__enter: Wa,
                                                    __framer__styleAppearEffectEnabled:
                                                      !0,
                                                    __framer__threshold: 0,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    className: `framer-17s9m0c-container`,
                                                    nodeId: `g4WFL1k1i`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `augiA20Il`,
                                                    children: m(K, {
                                                      breakpoint: w,
                                                      overrides: {
                                                        h4gwFyb7P: {
                                                          evTCyulAI: e[1],
                                                        },
                                                        Vg0sB4Fhp: {
                                                          evTCyulAI: e[2],
                                                        },
                                                      },
                                                      children: m(rt, {
                                                        AN8wZ6h6b: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                        Cya6RuIUy: !1,
                                                        evTCyulAI: e[0],
                                                        FRGXCszKE: `Get In Touch`,
                                                        height: `100%`,
                                                        id: `g4WFL1k1i`,
                                                        KS1OTpe12: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                        layoutId: `g4WFL1k1i`,
                                                        OubOSgTqz: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                        qV_NmyJVp: !1,
                                                        RnDkx60mf: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                        s5zVGHZrm: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                        variant: $(`zphlO018I`),
                                                        VmYpdrASS: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                        w1blkKoqs: 100,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  g(Z, {
                                    __framer__animate: { transition: ro },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1lgk11t`,
                                    "data-framer-name": `Excellence-card`,
                                    children: [
                                      g(Z, {
                                        __framer__animate: { transition: vo },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Wa,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1y9zwst`,
                                        "data-framer-name": `Title`,
                                        children: [
                                          m(I, {
                                            __fromCanvasComponent: !0,
                                            children: m(t, {
                                              children: m(`h6`, {
                                                className: `framer-styles-preset-h54z1`,
                                                "data-styles-preset": `aH41o35LP`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                },
                                                children: `OTHER FREELANCERS / AGENCIES`,
                                              }),
                                            }),
                                            className: `framer-71pj03`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          m(I, {
                                            __fromCanvasComponent: !0,
                                            children: m(t, {
                                              children: m(`p`, {
                                                className: `framer-styles-preset-1mk8z8h`,
                                                "data-styles-preset": `sPvC_pCwb`,
                                                dir: `auto`,
                                                children: `Outdated playbooks, one-size-fits-all packages, and the same template with a different logo dropped in.`,
                                              }),
                                            }),
                                            className: `framer-qwwzhh`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      g(Z, {
                                        __framer__animate: { transition: Xa },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Wa,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1fhdsfd`,
                                        "data-framer-name": `Lists`,
                                        children: [
                                          m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: {
                                                width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px), 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  6886.4 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  0,
                                              },
                                              Vg0sB4Fhp: {
                                                width: `calc(min(min(${d?.width || `100vw`} - 20px, 1440px) - 32px, 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  8806.4 +
                                                  0 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  579.6 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: m(V, {
                                              height: 18,
                                              width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 70px) / 2, 1px), 488px) - 60px)`,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                6314.4 +
                                                0 +
                                                50 +
                                                0 +
                                                0 +
                                                289.6 +
                                                0 +
                                                30 +
                                                195.6 +
                                                0 +
                                                0,
                                              children: m(z, {
                                                className: `framer-ny71yn-container`,
                                                nodeId: `VPEe_Meje`,
                                                scopeId: `augiA20Il`,
                                                children: m(Y, {
                                                  dNfqpppov: `Work split across teams`,
                                                  height: `100%`,
                                                  id: `VPEe_Meje`,
                                                  layoutId: `VPEe_Meje`,
                                                  s7U7CNT20: ho(
                                                    {
                                                      pixelHeight: 12,
                                                      pixelWidth: 12,
                                                      src: `https://framerusercontent.com/images/uUizc0WINUHy9E26YmkGFyR9Q.svg?width=12&height=12`,
                                                    },
                                                    `icon`,
                                                  ),
                                                  style: { width: `100%` },
                                                  UQUamSqTe: 0.6,
                                                  width: `100%`,
                                                  WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: {
                                                width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px), 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  6886.4 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  33,
                                              },
                                              Vg0sB4Fhp: {
                                                width: `calc(min(min(${d?.width || `100vw`} - 20px, 1440px) - 32px, 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  8806.4 +
                                                  0 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  579.6 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  33,
                                              },
                                            },
                                            children: m(V, {
                                              height: 18,
                                              width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 70px) / 2, 1px), 488px) - 60px)`,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                6314.4 +
                                                0 +
                                                50 +
                                                0 +
                                                0 +
                                                289.6 +
                                                0 +
                                                30 +
                                                195.6 +
                                                0 +
                                                33,
                                              children: m(z, {
                                                className: `framer-hlmazm-container`,
                                                nodeId: `KpLUjVwlJ`,
                                                scopeId: `augiA20Il`,
                                                children: m(Y, {
                                                  dNfqpppov: `Templates with the name swapped`,
                                                  height: `100%`,
                                                  id: `KpLUjVwlJ`,
                                                  layoutId: `KpLUjVwlJ`,
                                                  s7U7CNT20: ho(
                                                    {
                                                      pixelHeight: 12,
                                                      pixelWidth: 12,
                                                      src: `https://framerusercontent.com/images/uUizc0WINUHy9E26YmkGFyR9Q.svg?width=12&height=12`,
                                                    },
                                                    `icon`,
                                                  ),
                                                  style: { width: `100%` },
                                                  UQUamSqTe: 0.6,
                                                  width: `100%`,
                                                  WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: {
                                                width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px), 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  6886.4 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  66,
                                              },
                                              Vg0sB4Fhp: {
                                                width: `calc(min(min(${d?.width || `100vw`} - 20px, 1440px) - 32px, 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  8806.4 +
                                                  0 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  579.6 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  66,
                                              },
                                            },
                                            children: m(V, {
                                              height: 18,
                                              width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 70px) / 2, 1px), 488px) - 60px)`,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                6314.4 +
                                                0 +
                                                50 +
                                                0 +
                                                0 +
                                                289.6 +
                                                0 +
                                                30 +
                                                195.6 +
                                                0 +
                                                66,
                                              children: m(z, {
                                                className: `framer-18e2ixi-container`,
                                                nodeId: `ud4O1wS_z`,
                                                scopeId: `augiA20Il`,
                                                children: m(Y, {
                                                  dNfqpppov: `Heavy bundles and slow pages`,
                                                  height: `100%`,
                                                  id: `ud4O1wS_z`,
                                                  layoutId: `ud4O1wS_z`,
                                                  s7U7CNT20: ho(
                                                    {
                                                      pixelHeight: 12,
                                                      pixelWidth: 12,
                                                      src: `https://framerusercontent.com/images/uUizc0WINUHy9E26YmkGFyR9Q.svg?width=12&height=12`,
                                                    },
                                                    `icon`,
                                                  ),
                                                  style: { width: `100%` },
                                                  UQUamSqTe: 0.6,
                                                  width: `100%`,
                                                  WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: {
                                                width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px), 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  6886.4 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  99,
                                              },
                                              Vg0sB4Fhp: {
                                                width: `calc(min(min(${d?.width || `100vw`} - 20px, 1440px) - 32px, 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  8806.4 +
                                                  0 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  579.6 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  99,
                                              },
                                            },
                                            children: m(V, {
                                              height: 18,
                                              width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 70px) / 2, 1px), 488px) - 60px)`,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                6314.4 +
                                                0 +
                                                50 +
                                                0 +
                                                0 +
                                                289.6 +
                                                0 +
                                                30 +
                                                195.6 +
                                                0 +
                                                99,
                                              children: m(z, {
                                                className: `framer-1r3h73-container`,
                                                nodeId: `p6qdJCdsc`,
                                                scopeId: `augiA20Il`,
                                                children: m(Y, {
                                                  dNfqpppov: `Scope set before anyone looks`,
                                                  height: `100%`,
                                                  id: `p6qdJCdsc`,
                                                  layoutId: `p6qdJCdsc`,
                                                  s7U7CNT20: ho(
                                                    {
                                                      pixelHeight: 12,
                                                      pixelWidth: 12,
                                                      src: `https://framerusercontent.com/images/uUizc0WINUHy9E26YmkGFyR9Q.svg?width=12&height=12`,
                                                    },
                                                    `icon`,
                                                  ),
                                                  style: { width: `100%` },
                                                  UQUamSqTe: 0.6,
                                                  width: `100%`,
                                                  WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: {
                                                width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px), 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  6886.4 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  132,
                                              },
                                              Vg0sB4Fhp: {
                                                width: `calc(min(min(${d?.width || `100vw`} - 20px, 1440px) - 32px, 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  8806.4 +
                                                  0 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  579.6 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  132,
                                              },
                                            },
                                            children: m(V, {
                                              height: 18,
                                              width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 70px) / 2, 1px), 488px) - 60px)`,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                6314.4 +
                                                0 +
                                                50 +
                                                0 +
                                                0 +
                                                289.6 +
                                                0 +
                                                30 +
                                                195.6 +
                                                0 +
                                                132,
                                              children: m(z, {
                                                className: `framer-yhb2eq-container`,
                                                nodeId: `llce0TNNG`,
                                                scopeId: `augiA20Il`,
                                                children: m(Y, {
                                                  dNfqpppov: `Little input from the person building it`,
                                                  height: `100%`,
                                                  id: `llce0TNNG`,
                                                  layoutId: `llce0TNNG`,
                                                  s7U7CNT20: ho(
                                                    {
                                                      pixelHeight: 12,
                                                      pixelWidth: 12,
                                                      src: `https://framerusercontent.com/images/uUizc0WINUHy9E26YmkGFyR9Q.svg?width=12&height=12`,
                                                    },
                                                    `icon`,
                                                  ),
                                                  style: { width: `100%` },
                                                  UQUamSqTe: 0.6,
                                                  width: `100%`,
                                                  WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: {
                                                width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px), 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  6886.4 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  165,
                                              },
                                              Vg0sB4Fhp: {
                                                width: `calc(min(min(${d?.width || `100vw`} - 20px, 1440px) - 32px, 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  8806.4 +
                                                  0 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  579.6 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  165,
                                              },
                                            },
                                            children: m(V, {
                                              height: 18,
                                              width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 70px) / 2, 1px), 488px) - 60px)`,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                6314.4 +
                                                0 +
                                                50 +
                                                0 +
                                                0 +
                                                289.6 +
                                                0 +
                                                30 +
                                                195.6 +
                                                0 +
                                                165,
                                              children: m(z, {
                                                className: `framer-5htct-container`,
                                                nodeId: `igHwUYCcj`,
                                                scopeId: `augiA20Il`,
                                                children: m(Y, {
                                                  dNfqpppov: `Motion added for its own sake`,
                                                  height: `100%`,
                                                  id: `igHwUYCcj`,
                                                  layoutId: `igHwUYCcj`,
                                                  s7U7CNT20: ho(
                                                    {
                                                      pixelHeight: 12,
                                                      pixelWidth: 12,
                                                      src: `https://framerusercontent.com/images/uUizc0WINUHy9E26YmkGFyR9Q.svg?width=12&height=12`,
                                                    },
                                                    `icon`,
                                                  ),
                                                  style: { width: `100%` },
                                                  UQUamSqTe: 0.6,
                                                  width: `100%`,
                                                  WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: {
                                                width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 42px) / 2, 1px), 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  6886.4 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  198,
                                              },
                                              Vg0sB4Fhp: {
                                                width: `calc(min(min(${d?.width || `100vw`} - 20px, 1440px) - 32px, 488px) - 60px)`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  8806.4 +
                                                  0 +
                                                  0 +
                                                  50 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  579.6 +
                                                  30 +
                                                  195.6 +
                                                  0 +
                                                  198,
                                              },
                                            },
                                            children: m(V, {
                                              height: 18,
                                              width: `calc(min(max((min(max(${d?.width || `100vw`} - 20px, 1px), 1440px) - 70px) / 2, 1px), 488px) - 60px)`,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                6314.4 +
                                                0 +
                                                50 +
                                                0 +
                                                0 +
                                                289.6 +
                                                0 +
                                                30 +
                                                195.6 +
                                                0 +
                                                198,
                                              children: m(z, {
                                                className: `framer-1eac810-container`,
                                                nodeId: `bSD2mR8JD`,
                                                scopeId: `augiA20Il`,
                                                children: m(Y, {
                                                  dNfqpppov: ``,
                                                  height: `100%`,
                                                  id: `bSD2mR8JD`,
                                                  layoutId: `bSD2mR8JD`,
                                                  s7U7CNT20: ho(
                                                    {
                                                      pixelHeight: 12,
                                                      pixelWidth: 12,
                                                      src: `https://framerusercontent.com/images/uUizc0WINUHy9E26YmkGFyR9Q.svg?width=12&height=12`,
                                                    },
                                                    `icon`,
                                                  ),
                                                  style: { width: `100%` },
                                                  UQUamSqTe: 0.6,
                                                  width: `100%`,
                                                  WxME0NsJV: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g(`div`, {
                            className: `framer-195fl5`,
                            "data-framer-name": `Bottom`,
                            children: [
                              g(`div`, {
                                className: `framer-1nqfj92`,
                                "data-framer-name": `Heading`,
                                children: [
                                  m(K, {
                                    breakpoint: w,
                                    overrides: {
                                      h4gwFyb7P: {
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          6886.4 +
                                          0 +
                                          50 +
                                          979.2 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      Vg0sB4Fhp: {
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          8806.4 +
                                          0 +
                                          0 +
                                          50 +
                                          1460.8 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: m(V, {
                                      height: 20,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        6314.4 +
                                        0 +
                                        50 +
                                        883.2 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                      children: m(ka, {
                                        __framer__animate: { transition: Qa },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Za,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1az9cw-container`,
                                        nodeId: `DGmFsCIzs`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: m(q, {
                                          GZXD4XDjD: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                          height: `100%`,
                                          id: `DGmFsCIzs`,
                                          layoutId: `DGmFsCIzs`,
                                          t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                          width: `100%`,
                                          wYgOcdV21: `THE WORK`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  m(I, {
                                    __fromCanvasComponent: !0,
                                    children: g(t, {
                                      children: [
                                        m(`h2`, {
                                          className: `framer-styles-preset-w4n9ce`,
                                          "data-styles-preset": `QQizO8D2m`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                          },
                                          children: `Selected`,
                                        }),
                                        g(`h2`, {
                                          className: `framer-styles-preset-w4n9ce`,
                                          "data-styles-preset": `QQizO8D2m`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                          },
                                          children: [
                                            `Work`,
                                            m(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                              },
                                              children: `*`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    className: `framer-ovcr9b`,
                                    effect: $a,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  m(Ea, {
                                    __framer__animate: { transition: Xa },
                                    __framer__animateOnce: !0,
                                    __framer__enter: eo,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: m(t, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-1mk8z8h`,
                                        "data-styles-preset": `sPvC_pCwb`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                        },
                                        children: `We’ve partnered with startups, scale-ups, and established companies across industries to build meaningful digital growth.`,
                                      }),
                                    }),
                                    className: `framer-jukipc`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              g(Fa, {
                                __framer__animate: { transition: ro },
                                __framer__animateOnce: !0,
                                __framer__enter: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1l0nox5`,
                                "data-framer-name": `Cards`,
                                tickerEffectAlign: `center`,
                                tickerEffectDirectionModifier: `default`,
                                tickerEffectDraggable: !1,
                                tickerEffectEnabled: !0,
                                tickerEffectGap: 10,
                                tickerEffectHoverModifier: 100,
                                tickerEffectOverflow: `visible`,
                                tickerEffectPosition: `relative`,
                                tickerEffectStackDirection: `row`,
                                tickerEffectVelocity: 50,
                                children: [
                                  m(O, {
                                    children: m(K, {
                                      breakpoint: w,
                                      overrides: {
                                        h4gwFyb7P: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            6886.4 +
                                            0 +
                                            50 +
                                            979.2 +
                                            0 +
                                            369.6 +
                                            0,
                                        },
                                        Vg0sB4Fhp: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            8806.4 +
                                            0 +
                                            0 +
                                            50 +
                                            1460.8 +
                                            0 +
                                            369.6 +
                                            0,
                                        },
                                      },
                                      children: m(V, {
                                        height: 200,
                                        width: `199px`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          6314.4 +
                                          0 +
                                          50 +
                                          883.2 +
                                          0 +
                                          369.6 +
                                          0,
                                        children: m(z, {
                                          className: `framer-15yeau8-container`,
                                          nodeId: `M3tm5MMjt`,
                                          scopeId: `augiA20Il`,
                                          children: m(la, {
                                            height: `100%`,
                                            id: `M3tm5MMjt`,
                                            layoutId: `M3tm5MMjt`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                            XgYMGv2Oy: `70px 81px 70px 81px`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  m(O, {
                                    children: m(K, {
                                      breakpoint: w,
                                      overrides: {
                                        h4gwFyb7P: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            6886.4 +
                                            0 +
                                            50 +
                                            979.2 +
                                            0 +
                                            369.6 +
                                            15,
                                        },
                                        Vg0sB4Fhp: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            8806.4 +
                                            0 +
                                            0 +
                                            50 +
                                            1460.8 +
                                            0 +
                                            369.6 +
                                            15,
                                        },
                                      },
                                      children: m(V, {
                                        height: 170,
                                        width: `199px`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          6314.4 +
                                          0 +
                                          50 +
                                          883.2 +
                                          0 +
                                          369.6 +
                                          15,
                                        children: m(z, {
                                          className: `framer-7yeexy-container`,
                                          nodeId: `jegRzwXIK`,
                                          scopeId: `augiA20Il`,
                                          children: m(Mn, {
                                            bzUxeIxak: `Live websites, built and running`,
                                            Cy68NCYpv: `20px`,
                                            FgA81bkGF: `6`,
                                            height: `100%`,
                                            id: `jegRzwXIK`,
                                            kum_cA8Ig: `Projects Shipped`,
                                            layoutId: `jegRzwXIK`,
                                            Pq8t6CpSz: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                            style: { width: `100%` },
                                            UDAmAACof: ``,
                                            UVnp0KRk9: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                            variant: $(`zM6t3Q4Tp`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  m(O, {
                                    children: m(K, {
                                      breakpoint: w,
                                      overrides: {
                                        h4gwFyb7P: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            6886.4 +
                                            0 +
                                            50 +
                                            979.2 +
                                            0 +
                                            369.6 +
                                            0,
                                        },
                                        Vg0sB4Fhp: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            8806.4 +
                                            0 +
                                            0 +
                                            50 +
                                            1460.8 +
                                            0 +
                                            369.6 +
                                            0,
                                        },
                                      },
                                      children: m(V, {
                                        height: 200,
                                        width: `199px`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          6314.4 +
                                          0 +
                                          50 +
                                          883.2 +
                                          0 +
                                          369.6 +
                                          0,
                                        children: m(z, {
                                          className: `framer-1b4fg7c-container`,
                                          nodeId: `GwFL0J_Cp`,
                                          scopeId: `augiA20Il`,
                                          children: m(la, {
                                            height: `100%`,
                                            id: `GwFL0J_Cp`,
                                            layoutId: `GwFL0J_Cp`,
                                            style: { width: `100%` },
                                            u33b40ubm: ho(
                                              {
                                                pixelHeight: 30,
                                                pixelWidth: 47,
                                                src: `/assets/projects/onlyneth-logo.webp`,
                                              },
                                              `icon`,
                                            ),
                                            width: `100%`,
                                            XgYMGv2Oy: `70px 81px 70px 81px`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  m(O, {
                                    children: m(K, {
                                      breakpoint: w,
                                      overrides: {
                                        h4gwFyb7P: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            6886.4 +
                                            0 +
                                            50 +
                                            979.2 +
                                            0 +
                                            369.6 +
                                            15,
                                        },
                                        Vg0sB4Fhp: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            8806.4 +
                                            0 +
                                            0 +
                                            50 +
                                            1460.8 +
                                            0 +
                                            369.6 +
                                            15,
                                        },
                                      },
                                      children: m(V, {
                                        height: 170,
                                        width: `199px`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          6314.4 +
                                          0 +
                                          50 +
                                          883.2 +
                                          0 +
                                          369.6 +
                                          15,
                                        children: m(z, {
                                          className: `framer-1svfeqo-container`,
                                          nodeId: `DHcG09RUQ`,
                                          scopeId: `augiA20Il`,
                                          children: m(Mn, {
                                            bzUxeIxak: `One developer, from design to deploy`,
                                            Cy68NCYpv: `19px`,
                                            FgA81bkGF: `1`,
                                            height: `100%`,
                                            id: `DHcG09RUQ`,
                                            kum_cA8Ig: `Developer`,
                                            layoutId: `DHcG09RUQ`,
                                            Pq8t6CpSz: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                            style: { width: `100%` },
                                            UDAmAACof: ``,
                                            UVnp0KRk9: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                            variant: $(`VITB6u8IC`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  m(O, {
                                    children: m(K, {
                                      breakpoint: w,
                                      overrides: {
                                        h4gwFyb7P: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            6886.4 +
                                            0 +
                                            50 +
                                            979.2 +
                                            0 +
                                            369.6 +
                                            0,
                                        },
                                        Vg0sB4Fhp: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            8806.4 +
                                            0 +
                                            0 +
                                            50 +
                                            1460.8 +
                                            0 +
                                            369.6 +
                                            0,
                                        },
                                      },
                                      children: m(V, {
                                        height: 200,
                                        width: `199px`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          6314.4 +
                                          0 +
                                          50 +
                                          883.2 +
                                          0 +
                                          369.6 +
                                          0,
                                        children: m(z, {
                                          className: `framer-7ko6xa-container`,
                                          nodeId: `ShNa7NSYh`,
                                          scopeId: `augiA20Il`,
                                          children: m(la, {
                                            height: `100%`,
                                            id: `ShNa7NSYh`,
                                            layoutId: `ShNa7NSYh`,
                                            style: { width: `100%` },
                                            u33b40ubm: ho(
                                              {
                                                pixelHeight: 30,
                                                pixelWidth: 37,
                                                src: `/assets/projects/velio-labs-logo.webp`,
                                              },
                                              `icon`,
                                            ),
                                            width: `100%`,
                                            XgYMGv2Oy: `70px 81px 70px 81px`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  m(O, {
                                    children: m(K, {
                                      breakpoint: w,
                                      overrides: {
                                        h4gwFyb7P: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            6886.4 +
                                            0 +
                                            50 +
                                            979.2 +
                                            0 +
                                            369.6 +
                                            15,
                                        },
                                        Vg0sB4Fhp: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            8806.4 +
                                            0 +
                                            0 +
                                            50 +
                                            1460.8 +
                                            0 +
                                            369.6 +
                                            15,
                                        },
                                      },
                                      children: m(V, {
                                        height: 170,
                                        width: `199px`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          6314.4 +
                                          0 +
                                          50 +
                                          883.2 +
                                          0 +
                                          369.6 +
                                          15,
                                        children: m(z, {
                                          className: `framer-cwd32c-container`,
                                          nodeId: `lauLkUGlG`,
                                          scopeId: `augiA20Il`,
                                          children: m(Mn, {
                                            bzUxeIxak: `Working remotely, building for anyone`,
                                            Cy68NCYpv: `20px`,
                                            FgA81bkGF: `Web`,
                                            height: `100%`,
                                            id: `lauLkUGlG`,
                                            kum_cA8Ig: `Focus`,
                                            layoutId: `lauLkUGlG`,
                                            Pq8t6CpSz: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                            style: { width: `100%` },
                                            UDAmAACof: ``,
                                            UVnp0KRk9: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                            variant: $(`VITB6u8IC`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    m(v.section, {
                      className: `framer-t600mq`,
                      "data-framer-name": `Pricing`,
                      layout: k,
                      children: g(`div`, {
                        className: `framer-dk60em`,
                        "data-framer-name": `Container`,
                        children: [
                          g(`div`, {
                            className: `framer-1eiet2v`,
                            "data-framer-name": `Heading`,
                            children: [
                              m(`div`, {
                                className: `framer-1d3nhau`,
                                "data-framer-name": `Label-box`,
                                children: m(K, {
                                  breakpoint: w,
                                  overrides: {
                                    h4gwFyb7P: {
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        8535.2 +
                                        120 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    Vg0sB4Fhp: {
                                      width: `max(min(${d?.width || `100vw`} - 40px, 1440px) / 4, 50px)`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        10936.8 +
                                        120 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                  },
                                  children: m(V, {
                                    height: 20,
                                    width: `max(min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) / 4, 50px)`,
                                    y:
                                      (d?.y || 0) +
                                      0 +
                                      7867.2 +
                                      120 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                    children: m(ka, {
                                      __framer__animate: { transition: Qa },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Za,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-lpb1j3-container`,
                                      nodeId: `vz0JxlaZK`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: m(q, {
                                        GZXD4XDjD: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                        height: `100%`,
                                        id: `vz0JxlaZK`,
                                        layoutId: `vz0JxlaZK`,
                                        t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                        width: `100%`,
                                        wYgOcdV21: `WHAT I BUILD`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              g(`div`, {
                                className: `framer-o6cz5g`,
                                "data-framer-name": `Title & Content`,
                                children: [
                                  m(I, {
                                    __fromCanvasComponent: !0,
                                    children: m(t, {
                                      children: g(`h2`, {
                                        className: `framer-styles-preset-w4n9ce`,
                                        "data-styles-preset": `QQizO8D2m`,
                                        dir: `auto`,
                                        children: [
                                          `Pick a starting point`,
                                          m(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                            },
                                            children: `*`,
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: `framer-1neuyrb`,
                                    effect: $a,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  m(Ea, {
                                    __framer__animate: { transition: Xa },
                                    __framer__animateOnce: !0,
                                    __framer__enter: eo,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: m(t, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-1mk8z8h`,
                                        "data-styles-preset": `sPvC_pCwb`,
                                        dir: `auto`,
                                        children: `Every project is different. These three cover most of what people ask for — scope gets agreed before anything starts.`,
                                      }),
                                    }),
                                    className: `framer-14ppvkm`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g(`div`, {
                            className: `framer-12vur4o`,
                            "data-framer-name": `Cards`,
                            children: [
                              m(pe, {
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
                                ],
                                children: (e) =>
                                  m(K, {
                                    breakpoint: w,
                                    overrides: {
                                      h4gwFyb7P: {
                                        width: `max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 10px) / 2, 50px)`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          8535.2 +
                                          120 +
                                          0 +
                                          189.6 +
                                          0 +
                                          0,
                                      },
                                      Vg0sB4Fhp: {
                                        width: `max(min(${d?.width || `100vw`} - 40px, 1440px), 50px)`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          10936.8 +
                                          120 +
                                          0 +
                                          0 +
                                          285.6 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: m(V, {
                                      height: 418,
                                      width: `min(max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 20px) / 3, 1px), 418px)`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        7867.2 +
                                        120 +
                                        0 +
                                        189.6 +
                                        0,
                                      children: m(ka, {
                                        __framer__animate: { transition: ro },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-uo2kd2-container`,
                                        nodeId: `yt9n4u48d`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: m(K, {
                                          breakpoint: w,
                                          overrides: {
                                            h4gwFyb7P: {
                                              hw0DVzguE: e[1],
                                              style: { width: `100%` },
                                            },
                                            Vg0sB4Fhp: {
                                              hw0DVzguE: e[2],
                                              style: { width: `100%` },
                                            },
                                          },
                                          children: m(Ne, {
                                            BbX2UtdMD: `LANDING PAGE`,
                                            BWKubQxce: `Performance-focused setup`,
                                            E0c0m_5kL: `Get In Touch`,
                                            eSSv9ADol: `Custom design implementation`,
                                            gR0qrwUvz: `$299`,
                                            height: `100%`,
                                            hw0DVzguE: e[0],
                                            id: `yt9n4u48d`,
                                            layoutId: `yt9n4u48d`,
                                            Ltkd0cqNx: `One-page website for a launch, product, service, or focused idea.`,
                                            style: {
                                              maxWidth: `100%`,
                                              width: `100%`,
                                            },
                                            txtCuA6B9: `Responsive layout`,
                                            UEVJ0g8HQ: `Focused one-page build`,
                                            variant: $(`zmBAbBG8I`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                              m(pe, {
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
                                ],
                                children: (e) =>
                                  m(K, {
                                    breakpoint: w,
                                    overrides: {
                                      h4gwFyb7P: {
                                        width: `max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 10px) / 2, 50px)`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          8535.2 +
                                          120 +
                                          0 +
                                          189.6 +
                                          0 +
                                          0,
                                      },
                                      Vg0sB4Fhp: {
                                        width: `max(min(${d?.width || `100vw`} - 40px, 1440px), 50px)`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          10936.8 +
                                          120 +
                                          0 +
                                          0 +
                                          285.6 +
                                          0 +
                                          428,
                                      },
                                    },
                                    children: m(V, {
                                      height: 418,
                                      width: `max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 20px) / 3, 1px)`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        7867.2 +
                                        120 +
                                        0 +
                                        189.6 +
                                        0,
                                      children: m(ka, {
                                        __framer__animate: { transition: vo },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1mudijt-container`,
                                        nodeId: `w7s8DpbEV`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: m(K, {
                                          breakpoint: w,
                                          overrides: {
                                            h4gwFyb7P: { hw0DVzguE: e[1] },
                                            Vg0sB4Fhp: { hw0DVzguE: e[2] },
                                          },
                                          children: m(Ne, {
                                            BbX2UtdMD: `BUSINESS SITE`,
                                            BWKubQxce: `Responsive layouts`,
                                            E0c0m_5kL: `Get In Touch`,
                                            eSSv9ADol: `Custom sections`,
                                            gR0qrwUvz: `$399`,
                                            height: `100%`,
                                            hw0DVzguE: e[0],
                                            id: `w7s8DpbEV`,
                                            layoutId: `w7s8DpbEV`,
                                            Ltkd0cqNx: `Multi-page website for a business that needs a clear online presence.`,
                                            style: { width: `100%` },
                                            txtCuA6B9: `Basic SEO setup`,
                                            UEVJ0g8HQ: `Multi-page website`,
                                            variant: $(`xIjEXZ2yG`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                              m(pe, {
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
                                ],
                                children: (e) =>
                                  m(K, {
                                    breakpoint: w,
                                    overrides: {
                                      h4gwFyb7P: {
                                        width: `calc(max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 10px) / 2, 50px) * 2 + 10px)`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          8535.2 +
                                          120 +
                                          0 +
                                          189.6 +
                                          0 +
                                          428,
                                      },
                                      Vg0sB4Fhp: {
                                        width: `max(min(${d?.width || `100vw`} - 40px, 1440px), 50px)`,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          10936.8 +
                                          120 +
                                          0 +
                                          0 +
                                          285.6 +
                                          0 +
                                          856,
                                      },
                                    },
                                    children: m(V, {
                                      height: 418,
                                      width: `min(max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 20px) / 3, 1px), 418px)`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        7867.2 +
                                        120 +
                                        0 +
                                        189.6 +
                                        0,
                                      children: m(ka, {
                                        __framer__animate: { transition: Xa },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-cqm74e-container`,
                                        nodeId: `Qk5kprfaI`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: m(K, {
                                          breakpoint: w,
                                          overrides: {
                                            h4gwFyb7P: {
                                              hw0DVzguE: e[1],
                                              style: { width: `100%` },
                                            },
                                            Vg0sB4Fhp: {
                                              hw0DVzguE: e[2],
                                              style: { width: `100%` },
                                            },
                                          },
                                          children: m(Ne, {
                                            BbX2UtdMD: `WEB PRODUCT`,
                                            BWKubQxce: `Custom interactions`,
                                            E0c0m_5kL: `Get In Touch`,
                                            eSSv9ADol: `Interactive functionality`,
                                            gR0qrwUvz: `$899`,
                                            height: `100%`,
                                            hw0DVzguE: e[0],
                                            id: `Qk5kprfaI`,
                                            layoutId: `Qk5kprfaI`,
                                            Ltkd0cqNx: `Interactive website or web product with real functionality and custom logic.`,
                                            style: {
                                              maxWidth: `100%`,
                                              width: `100%`,
                                            },
                                            txtCuA6B9: `Performance-focused implementation`,
                                            UEVJ0g8HQ: `API/data integration where required`,
                                            variant: $(`zmBAbBG8I`),
                                            width: `100%`,
                                          }),
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
                    m(v.section, {
                      className: `framer-9whg26`,
                      "data-framer-name": `Testimonial`,
                      layout: k,
                      children: g(`div`, {
                        className: `framer-1kerbme`,
                        "data-framer-name": `Container`,
                        children: [
                          g(`div`, {
                            className: `framer-1anopcm`,
                            "data-framer-name": `Heading`,
                            children: [
                              m(K, {
                                breakpoint: w,
                                overrides: {
                                  h4gwFyb7P: {
                                    y:
                                      (d?.y || 0) +
                                      0 +
                                      9750.8 +
                                      60 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  Vg0sB4Fhp: {
                                    y:
                                      (d?.y || 0) +
                                      0 +
                                      12676.4 +
                                      60 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                },
                                children: m(V, {
                                  height: 20,
                                  y:
                                    (d?.y || 0) +
                                    0 +
                                    8714.8 +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    0,
                                  children: m(ka, {
                                    __framer__animate: { transition: Qa },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Za,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1r4gozn-container`,
                                    nodeId: `vtHv7AyJX`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: m(q, {
                                      GZXD4XDjD: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                      height: `100%`,
                                      id: `vtHv7AyJX`,
                                      layoutId: `vtHv7AyJX`,
                                      t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                      width: `100%`,
                                      wYgOcdV21: `testimonial`,
                                    }),
                                  }),
                                }),
                              }),
                              m(I, {
                                __fromCanvasComponent: !0,
                                children: m(t, {
                                  children: g(`h2`, {
                                    className: `framer-styles-preset-w4n9ce`,
                                    "data-styles-preset": `QQizO8D2m`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                    },
                                    children: [
                                      m(`strong`, { children: `IN THEIR` }),
                                      m(`br`, {}),
                                      m(`strong`, { children: `OWN WORDS` }),
                                      m(`span`, {
                                        style: {
                                          "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                        },
                                        children: `*`,
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-75gvqp`,
                                effect: $a,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              m(Ea, {
                                __framer__animate: { transition: Xa },
                                __framer__animateOnce: !0,
                                __framer__enter: eo,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: m(t, {
                                  children: m(`p`, {
                                    className: `framer-styles-preset-1mk8z8h`,
                                    "data-styles-preset": `sPvC_pCwb`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                    },
                                    children: `One client, one honest take.`,
                                  }),
                                }),
                                className: `framer-kb8954`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          g(`div`, {
                            className: `framer-20ilum`,
                            "data-framer-name": `Cards`,
                            children: [
                              g(Z, {
                                __framer__animate: { transition: no },
                                __framer__animateOnce: !0,
                                __framer__enter: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1fk9d4u`,
                                "data-border": !0,
                                "data-framer-name": `Card-one`,
                                children: [
                                  m(K, {
                                    breakpoint: w,
                                    overrides: {
                                      h4gwFyb7P: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1600,
                                          intrinsicWidth: 1596,
                                          loading: A(
                                            (d?.y || 0) +
                                              0 +
                                              9750.8 +
                                              60 +
                                              0 +
                                              289.6 +
                                              0 +
                                              0 +
                                              1,
                                          ),
                                          pixelHeight: 1600,
                                          pixelWidth: 1596,
                                          sizes: `calc(max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 10px) / 2, 50px) - 2px)`,
                                          src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                          srcSet: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1600w`,
                                        },
                                      },
                                      Vg0sB4Fhp: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1600,
                                          intrinsicWidth: 1596,
                                          loading: A(
                                            (d?.y || 0) +
                                              0 +
                                              12676.4 +
                                              60 +
                                              0 +
                                              0 +
                                              289.6 +
                                              0 +
                                              0 +
                                              1,
                                          ),
                                          pixelHeight: 1600,
                                          pixelWidth: 1596,
                                          sizes: `calc(max(min(${d?.width || `100vw`} - 40px, 1440px), 50px) - 2px)`,
                                          src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                          srcSet: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1600w`,
                                        },
                                      },
                                    },
                                    children: g(W, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1600,
                                        intrinsicWidth: 1596,
                                        loading: A(
                                          (d?.y || 0) +
                                            0 +
                                            8714.8 +
                                            0 +
                                            0 +
                                            289.6 +
                                            0 +
                                            0 +
                                            1,
                                        ),
                                        pixelHeight: 1600,
                                        pixelWidth: 1596,
                                        sizes: `calc(max((min(max(${d?.width || `100vw`} - 40px, 1px), 1440px) - 20px) / 3, 50px) - 2px)`,
                                        src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                        srcSet: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1600w`,
                                      },
                                      className: `framer-170m181`,
                                      "data-framer-name": `Image`,
                                      children: [
                                        m(V, {
                                          children: m(z, {
                                            className: `framer-1xx4phr-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `v_YxdrhgH`,
                                            scopeId: `augiA20Il`,
                                            children: m($t, {
                                              blur: 20,
                                              borderRadius: `0px`,
                                              direction: `to bottom`,
                                              height: `100%`,
                                              id: `v_YxdrhgH`,
                                              layoutId: `v_YxdrhgH`,
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              transition: {
                                                delay: 0,
                                                duration: 0.3,
                                                ease: [0.44, 0, 0.56, 1],
                                                type: `tween`,
                                              },
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        m(`div`, {
                                          className: `framer-1w9anzi`,
                                          "data-framer-name": `Linear`,
                                        }),
                                      ],
                                    }),
                                  }),
                                  m(K, {
                                    breakpoint: w,
                                    overrides: {
                                      h4gwFyb7P: {
                                        background: {
                                          alt: `logo`,
                                          fit: `fill`,
                                          intrinsicHeight: 40,
                                          intrinsicWidth: 132,
                                          loading: A(
                                            (d?.y || 0) +
                                              0 +
                                              9750.8 +
                                              60 +
                                              0 +
                                              289.6 +
                                              0 +
                                              0 +
                                              0 +
                                              233.4,
                                          ),
                                          pixelHeight: 40,
                                          pixelWidth: 132,
                                          sizes: `132px`,
                                          src: `/assets/projects/velio-labs-logo.webp`,
                                        },
                                      },
                                      Vg0sB4Fhp: {
                                        background: {
                                          alt: `logo`,
                                          fit: `fill`,
                                          intrinsicHeight: 40,
                                          intrinsicWidth: 132,
                                          loading: A(
                                            (d?.y || 0) +
                                              0 +
                                              12676.4 +
                                              60 +
                                              0 +
                                              0 +
                                              289.6 +
                                              0 +
                                              0 +
                                              0 +
                                              233.4,
                                          ),
                                          pixelHeight: 40,
                                          pixelWidth: 132,
                                          sizes: `132px`,
                                          src: `/assets/projects/velio-labs-logo.webp`,
                                        },
                                      },
                                    },
                                    children: m(W, {
                                      background: {
                                        alt: `logo`,
                                        fit: `fill`,
                                        intrinsicHeight: 40,
                                        intrinsicWidth: 132,
                                        loading: A(
                                          (d?.y || 0) +
                                            0 +
                                            8714.8 +
                                            0 +
                                            0 +
                                            289.6 +
                                            0 +
                                            0 +
                                            0 +
                                            233.4,
                                        ),
                                        pixelHeight: 40,
                                        pixelWidth: 132,
                                        sizes: `132px`,
                                        src: `/assets/projects/velio-labs-logo.webp`,
                                      },
                                      className: `framer-13dkrl9`,
                                      "data-framer-name": `Logo`,
                                      fitImageDimension: `height`,
                                    }),
                                  }),
                                  m(I, {
                                    __fromCanvasComponent: !0,
                                    children: m(t, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-1mk8z8h`,
                                        "data-styles-preset": `sPvC_pCwb`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                        },
                                        children: `“Honestly, Arhaan is my guy! He did an amazing job designing my website and really understood the vision I had for my SaaS and motion design service. The whole process was smooth, and the final result came out even better than I expected. If you’re looking for someone who’s creative, reliable, and genuinely cares about the work, I would definitely recommend Arhaan. You won’t regret working with him!”`,
                                      }),
                                    }),
                                    className: `framer-tt2of8`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              g(Z, {
                                __framer__animate: { transition: ro },
                                __framer__animateOnce: !0,
                                __framer__enter: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-13fpurk`,
                                "data-border": !0,
                                "data-framer-name": `Card-two`,
                                children: [
                                  g(`div`, {
                                    className: `framer-k7u4ud`,
                                    "data-framer-name": `Heading`,
                                    children: [
                                      m(K, {
                                        breakpoint: w,
                                        overrides: {
                                          h4gwFyb7P: {
                                            background: {
                                              alt: `logo`,
                                              fit: `fill`,
                                              intrinsicHeight: 20,
                                              intrinsicWidth: 79,
                                              loading: A(
                                                (d?.y || 0) +
                                                  0 +
                                                  9750.8 +
                                                  60 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  0 +
                                                  25 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 20,
                                              pixelWidth: 79,
                                              sizes: `79px`,
                                              src: `/assets/logo.png`,
                                            },
                                          },
                                          Vg0sB4Fhp: {
                                            background: {
                                              alt: `logo`,
                                              fit: `fill`,
                                              intrinsicHeight: 20,
                                              intrinsicWidth: 79,
                                              loading: A(
                                                (d?.y || 0) +
                                                  0 +
                                                  12676.4 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  410 +
                                                  25 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 20,
                                              pixelWidth: 79,
                                              sizes: `79px`,
                                              src: `/assets/logo.png`,
                                            },
                                          },
                                        },
                                        children: m(W, {
                                          background: {
                                            alt: `logo`,
                                            fit: `fill`,
                                            intrinsicHeight: 20,
                                            intrinsicWidth: 79,
                                            loading: A(
                                              (d?.y || 0) +
                                                0 +
                                                8714.8 +
                                                0 +
                                                0 +
                                                289.6 +
                                                0 +
                                                0 +
                                                25 +
                                                0 +
                                                0 +
                                                0,
                                            ),
                                            pixelHeight: 20,
                                            pixelWidth: 79,
                                            sizes: `79px`,
                                            src: `/assets/logo.png`,
                                          },
                                          className: `framer-1kjs3nm`,
                                          "data-framer-name": `Logo`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      m(I, {
                                        __fromCanvasComponent: !0,
                                        children: m(t, {
                                          children: m(`h6`, {
                                            className: `framer-styles-preset-1litcpx`,
                                            "data-styles-preset": `kyo9an03l`,
                                            dir: `auto`,
                                            children: `Client — Velio Labs`,
                                          }),
                                        }),
                                        className: `framer-1334gb`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  g(`div`, {
                                    className: `framer-19uztba`,
                                    "data-framer-name": `Rate & Button`,
                                    children: [
                                      g(`div`, {
                                        className: `framer-12bo780`,
                                        "data-framer-name": `Ratings`,
                                        children: [
                                          g(`div`, {
                                            className: `framer-12utwy5`,
                                            "data-framer-name": `Avatars`,
                                            children: [
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    background: {
                                                      alt: `image`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          9750.8 +
                                                          60 +
                                                          0 +
                                                          289.6 +
                                                          0 +
                                                          0 +
                                                          25 +
                                                          210 +
                                                          0 +
                                                          0 +
                                                          10 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                  Vg0sB4Fhp: {
                                                    background: {
                                                      alt: `image`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          12676.4 +
                                                          60 +
                                                          0 +
                                                          0 +
                                                          289.6 +
                                                          0 +
                                                          410 +
                                                          25 +
                                                          210 +
                                                          0 +
                                                          0 +
                                                          10 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                },
                                                children: m(W, {
                                                  background: {
                                                    alt: `image`,
                                                    fit: `fill`,
                                                    intrinsicHeight: 184,
                                                    intrinsicWidth: 184,
                                                    loading: A(
                                                      (d?.y || 0) +
                                                        0 +
                                                        8714.8 +
                                                        0 +
                                                        0 +
                                                        289.6 +
                                                        0 +
                                                        0 +
                                                        25 +
                                                        210 +
                                                        0 +
                                                        0 +
                                                        10 +
                                                        0,
                                                    ),
                                                    pixelHeight: 184,
                                                    pixelWidth: 184,
                                                    sizes: `46px`,
                                                    src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                  },
                                                  className: `framer-2dv2y4`,
                                                  "data-framer-name": `Avatar-three`,
                                                }),
                                              }),
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    background: {
                                                      alt: `image`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          9750.8 +
                                                          60 +
                                                          0 +
                                                          289.6 +
                                                          0 +
                                                          0 +
                                                          25 +
                                                          210 +
                                                          0 +
                                                          0 +
                                                          10 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                  Vg0sB4Fhp: {
                                                    background: {
                                                      alt: `image`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          12676.4 +
                                                          60 +
                                                          0 +
                                                          0 +
                                                          289.6 +
                                                          0 +
                                                          410 +
                                                          25 +
                                                          210 +
                                                          0 +
                                                          0 +
                                                          10 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                },
                                                children: m(W, {
                                                  background: {
                                                    alt: `image`,
                                                    fit: `fill`,
                                                    intrinsicHeight: 184,
                                                    intrinsicWidth: 184,
                                                    loading: A(
                                                      (d?.y || 0) +
                                                        0 +
                                                        8714.8 +
                                                        0 +
                                                        0 +
                                                        289.6 +
                                                        0 +
                                                        0 +
                                                        25 +
                                                        210 +
                                                        0 +
                                                        0 +
                                                        10 +
                                                        0,
                                                    ),
                                                    pixelHeight: 184,
                                                    pixelWidth: 184,
                                                    sizes: `46px`,
                                                    src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                  },
                                                  className: `framer-1i3llku`,
                                                  "data-framer-name": `Avatar-two`,
                                                }),
                                              }),
                                              m(K, {
                                                breakpoint: w,
                                                overrides: {
                                                  h4gwFyb7P: {
                                                    background: {
                                                      alt: `image`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          9750.8 +
                                                          60 +
                                                          0 +
                                                          289.6 +
                                                          0 +
                                                          0 +
                                                          25 +
                                                          210 +
                                                          0 +
                                                          0 +
                                                          10 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                  Vg0sB4Fhp: {
                                                    background: {
                                                      alt: `image`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 184,
                                                      intrinsicWidth: 184,
                                                      loading: A(
                                                        (d?.y || 0) +
                                                          0 +
                                                          12676.4 +
                                                          60 +
                                                          0 +
                                                          0 +
                                                          289.6 +
                                                          0 +
                                                          410 +
                                                          25 +
                                                          210 +
                                                          0 +
                                                          0 +
                                                          10 +
                                                          0,
                                                      ),
                                                      pixelHeight: 184,
                                                      pixelWidth: 184,
                                                      sizes: `46px`,
                                                      src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                    },
                                                  },
                                                },
                                                children: m(W, {
                                                  background: {
                                                    alt: `image`,
                                                    fit: `fill`,
                                                    intrinsicHeight: 184,
                                                    intrinsicWidth: 184,
                                                    loading: A(
                                                      (d?.y || 0) +
                                                        0 +
                                                        8714.8 +
                                                        0 +
                                                        0 +
                                                        289.6 +
                                                        0 +
                                                        0 +
                                                        25 +
                                                        210 +
                                                        0 +
                                                        0 +
                                                        10 +
                                                        0,
                                                    ),
                                                    pixelHeight: 184,
                                                    pixelWidth: 184,
                                                    sizes: `46px`,
                                                    src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                                  },
                                                  className: `framer-1t3qzuv`,
                                                  "data-framer-name": `Avatar-one`,
                                                }),
                                              }),
                                            ],
                                          }),
                                          m(I, {
                                            __fromCanvasComponent: !0,
                                            children: m(t, {
                                              children: m(`p`, {
                                                className: `framer-styles-preset-3fyugt`,
                                                "data-styles-preset": `iFFcEKQM3`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                },
                                                children: ``,
                                              }),
                                            }),
                                            className: `framer-7feyo3`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      m(pe, {
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
                                        ],
                                        children: (e) =>
                                          m(K, {
                                            breakpoint: w,
                                            overrides: {
                                              h4gwFyb7P: {
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  9750.8 +
                                                  60 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  0 +
                                                  25 +
                                                  210 +
                                                  0 +
                                                  94,
                                              },
                                              Vg0sB4Fhp: {
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  12676.4 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  410 +
                                                  25 +
                                                  210 +
                                                  0 +
                                                  94,
                                              },
                                            },
                                            children: m(V, {
                                              height: 46,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                8714.8 +
                                                0 +
                                                0 +
                                                289.6 +
                                                0 +
                                                0 +
                                                25 +
                                                210 +
                                                0 +
                                                94,
                                              children: m(z, {
                                                className: `framer-12kmra4-container`,
                                                nodeId: `PGrSnGw9B`,
                                                scopeId: `augiA20Il`,
                                                children: m(K, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    h4gwFyb7P: {
                                                      evTCyulAI: e[1],
                                                    },
                                                    Vg0sB4Fhp: {
                                                      evTCyulAI: e[2],
                                                    },
                                                  },
                                                  children: m(rt, {
                                                    AN8wZ6h6b: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    Cya6RuIUy: !1,
                                                    evTCyulAI: e[0],
                                                    FRGXCszKE: `See the work`,
                                                    height: `100%`,
                                                    id: `PGrSnGw9B`,
                                                    KS1OTpe12: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                                    layoutId: `PGrSnGw9B`,
                                                    OubOSgTqz: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                    qV_NmyJVp: !1,
                                                    RnDkx60mf: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                    s5zVGHZrm: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                                    variant: $(`zphlO018I`),
                                                    VmYpdrASS: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                                    w1blkKoqs: 0,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              g(Z, {
                                __framer__animate: { transition: vo },
                                __framer__animateOnce: !0,
                                __framer__enter: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1ipn2b3`,
                                "data-framer-name": `Card-three`,
                                children: [
                                  g(`div`, {
                                    className: `framer-o498xg`,
                                    "data-framer-name": `Comment`,
                                    children: [
                                      m(K, {
                                        breakpoint: w,
                                        overrides: {
                                          h4gwFyb7P: {
                                            background: {
                                              alt: `icon`,
                                              fit: `fill`,
                                              intrinsicHeight: 36,
                                              intrinsicWidth: 44,
                                              loading: A(
                                                (d?.y || 0) +
                                                  0 +
                                                  9750.8 +
                                                  60 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  410 +
                                                  25 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 36,
                                              pixelWidth: 44,
                                              sizes: `40px`,
                                              src: `https://framerusercontent.com/images/QR9pYmmRdzQ2rZzHGt3gO8AII.svg?width=44&height=36`,
                                            },
                                          },
                                          Vg0sB4Fhp: {
                                            background: {
                                              alt: `icon`,
                                              fit: `fill`,
                                              intrinsicHeight: 36,
                                              intrinsicWidth: 44,
                                              loading: A(
                                                (d?.y || 0) +
                                                  0 +
                                                  12676.4 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  820 +
                                                  25 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 36,
                                              pixelWidth: 44,
                                              sizes: `40px`,
                                              src: `https://framerusercontent.com/images/QR9pYmmRdzQ2rZzHGt3gO8AII.svg?width=44&height=36`,
                                            },
                                          },
                                        },
                                        children: m(W, {
                                          background: {
                                            alt: `icon`,
                                            fit: `fill`,
                                            intrinsicHeight: 36,
                                            intrinsicWidth: 44,
                                            loading: A(
                                              (d?.y || 0) +
                                                0 +
                                                8714.8 +
                                                0 +
                                                0 +
                                                289.6 +
                                                0 +
                                                0 +
                                                25 +
                                                0 +
                                                0 +
                                                0,
                                            ),
                                            pixelHeight: 36,
                                            pixelWidth: 44,
                                            sizes: `40px`,
                                            src: `https://framerusercontent.com/images/QR9pYmmRdzQ2rZzHGt3gO8AII.svg?width=44&height=36`,
                                          },
                                          className: `framer-18480fo`,
                                          "data-framer-name": `Quote`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      m(I, {
                                        __fromCanvasComponent: !0,
                                        children: m(t, {
                                          children: m(`h6`, {
                                            className: `framer-styles-preset-1litcpx`,
                                            "data-styles-preset": `kyo9an03l`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                            },
                                            children: `“Want something like this? I’m always happy to talk through an idea, even if it’s still half-formed.”`,
                                          }),
                                        }),
                                        className: `framer-137cps7`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  g(`div`, {
                                    className: `framer-6ps0gp`,
                                    "data-framer-name": `Info`,
                                    children: [
                                      m(K, {
                                        breakpoint: w,
                                        overrides: {
                                          h4gwFyb7P: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 184,
                                              intrinsicWidth: 184,
                                              loading: A(
                                                (d?.y || 0) +
                                                  0 +
                                                  9750.8 +
                                                  60 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  410 +
                                                  25 +
                                                  284 +
                                                  10,
                                              ),
                                              pixelHeight: 184,
                                              pixelWidth: 184,
                                              sizes: `46px`,
                                              src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                            },
                                          },
                                          Vg0sB4Fhp: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 184,
                                              intrinsicWidth: 184,
                                              loading: A(
                                                (d?.y || 0) +
                                                  0 +
                                                  12676.4 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  289.6 +
                                                  0 +
                                                  820 +
                                                  25 +
                                                  284 +
                                                  10,
                                              ),
                                              pixelHeight: 184,
                                              pixelWidth: 184,
                                              sizes: `46px`,
                                              src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                            },
                                          },
                                        },
                                        children: m(W, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 184,
                                            intrinsicWidth: 184,
                                            loading: A(
                                              (d?.y || 0) +
                                                0 +
                                                8714.8 +
                                                0 +
                                                0 +
                                                289.6 +
                                                0 +
                                                0 +
                                                25 +
                                                284 +
                                                10,
                                            ),
                                            pixelHeight: 184,
                                            pixelWidth: 184,
                                            sizes: `46px`,
                                            src: `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`,
                                          },
                                          className: `framer-mbefw6`,
                                          "data-framer-name": `Avatar`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      m(I, {
                                        __fromCanvasComponent: !0,
                                        children: m(t, {
                                          children: m(`p`, {
                                            className: `framer-styles-preset-3fyugt`,
                                            "data-styles-preset": `iFFcEKQM3`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                            },
                                            children: `— Arhan Arif, Web Developer`,
                                          }),
                                        }),
                                        className: `framer-dw15zp`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    m(K, {
                      breakpoint: w,
                      overrides: {
                        h4gwFyb7P: { y: (d?.y || 0) + 0 + 10970.4 },
                        Vg0sB4Fhp: { y: (d?.y || 0) + 0 + 14306 },
                      },
                      children: m(V, {
                        height: 808,
                        width: d?.width || `100vw`,
                        y: (d?.y || 0) + 0 + 9464.4,
                        children: m(z, {
                          className: `framer-yx2qos-container`,
                          layout: k,
                          nodeId: `kFSLFSWpL`,
                          scopeId: `augiA20Il`,
                          children: m(K, {
                            breakpoint: w,
                            overrides: {
                              h4gwFyb7P: { variant: $(`pL_q62ird`) },
                              Vg0sB4Fhp: { variant: $(`SFhaIJSAW`) },
                            },
                            children: m(Zi, {
                              height: `100%`,
                              id: `kFSLFSWpL`,
                              layoutId: `kFSLFSWpL`,
                              style: { width: `100%` },
                              variant: $(`aoVfu_kNQ`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                m(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-NWrst .framer-ydljps { background: linear-gradient(155deg, rgb(10, 10, 10) 0%, rgb(22, 22, 22) 58%, rgb(38, 14, 14) 100%); transition: background 0.45s ease, transform 0.45s ease; }`,
        `.framer-NWrst .framer-ydljps:hover { background: linear-gradient(155deg, rgb(20, 20, 20) 0%, rgb(38, 38, 38) 58%, rgb(66, 20, 20) 100%); }`,
        `.framer-NWrst .framer-ydljps .framer-14fhfyd, .framer-NWrst .framer-ydljps .framer-wjcz0u { display: none !important; }`,
        `.framer-NWrst .framer-ydljps, .framer-NWrst [data-framer-name="Why-us-card"] { background: linear-gradient(160deg, rgb(255, 255, 255) 0%, rgb(255, 248, 243) 48%, rgb(255, 228, 214) 100%) !important; transition: background 0.45s ease; }`,
        `.framer-NWrst .framer-ydljps:hover, .framer-NWrst [data-framer-name="Why-us-card"]:hover { background: linear-gradient(160deg, rgb(255, 250, 247) 0%, rgb(255, 236, 224) 55%, rgb(255, 214, 194) 100%) !important; }`,
        `.framer-NWrst .framer-ydljps [data-framer-name="BG"], .framer-NWrst .framer-ydljps .framer-wjcz0u { display: none !important; }`,
        `.framer-NWrst [data-framer-name="Dark"] { background: linear-gradient(160deg, rgb(255, 255, 255) 0%, rgb(255, 248, 243) 48%, rgb(255, 228, 214) 100%) !important; border-color: rgba(255, 138, 76, 0.35) !important; transition: background 0.4s ease; }`,
        `.framer-NWrst [data-framer-name="Dark"]:hover { background: linear-gradient(160deg, rgb(255, 250, 247) 0%, rgb(255, 236, 224) 55%, rgb(255, 214, 194) 100%) !important; }`,
        `.framer-NWrst [data-framer-name="Dark"] [data-framer-name="BG"] { display: none !important; }`,
        `.framer-NWrst [data-framer-name="Dark"] .framer-1uxvkqe-container a { background-color: rgb(255, 255, 255) !important; }`,
        `.framer-NWrst .framer-1lgk11t p, .framer-NWrst .framer-1lgk11t h6 { --framer-text-color: rgb(255, 255, 255) !important; }`,
        `.framer-NWrst .framer-1lgk11t p { opacity: 1 !important; overflow: visible !important; height: auto !important; min-height: 0 !important; padding-bottom: 6px; }`,
        `.framer-NWrst [data-framer-name="Dark"] [data-framer-name="BG"] { pointer-events: none !important; }`,
        `.framer-NWrst [data-framer-name="Dark"] .framer-1uxvkqe-container { position: relative; z-index: 3; }`,
        `.framer-NWrst [data-framer-name="Dark"] .framer-1upvkqe-container a { pointer-events: auto !important; position: relative; z-index: 4; }`,
        `.framer-NWrst .framer-9kdpmr p, .framer-NWrst .framer-9kdpmr h1, .framer-NWrst .framer-9kdpmr h2, .framer-NWrst .framer-9kdpmr h3, .framer-NWrst .framer-9kdpmr h4, .framer-NWrst .framer-9kdpmr h5, .framer-NWrst .framer-9kdpmr h6, .framer-NWrst .framer-9kdpmr li, .framer-NWrst .framer-9kdpmr ul { --framer-text-color: rgb(8, 8, 8) !important; color: rgb(8, 8, 8) !important; }`,
        `.framer-NWrst .framer-9kdpmr [data-framer-name="Title & Content"], .framer-NWrst .framer-9kdpmr [data-framer-name="Content-wrapper"] { border: 1px solid rgba(8, 8, 8, 0.16) !important; border-radius: 20px; padding: 28px 30px !important; }`,
        `.framer-NWrst .framer-9kdpmr h2 { font-weight: 800 !important; letter-spacing: -0.02em; }`,
        `.framer-NWrst .framer-9kdpmr [data-framer-name="Title & Content"] > div:first-child p { font-weight: 800 !important; letter-spacing: 0.14em; text-transform: uppercase; }`,
        `.framer-NWrst .framer-9kdpmr [data-framer-name="Progress"], .framer-NWrst .framer-9kdpmr [data-framer-name="Inner"], .framer-NWrst .framer-9kdpmr [data-framer-name="Outer"] { display: none !important; }`,
        `.framer-NWrst .framer-1lgk11t p { overflow: visible !important; height: auto !important; min-height: 0 !important; opacity: 1 !important; margin-top: 6px; }`,
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-NWrst.framer-lux5qc, .framer-NWrst .framer-lux5qc { display: block; }`,
        `.framer-NWrst.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-NWrst .framer-11uvnwq { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 100vh; overflow: var(--overflow-clip-fallback, clip); padding: 5px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-1bzks1z-container { bottom: 5px; flex: none; left: 5px; position: absolute; right: 5px; top: 5px; z-index: 1; }`,
        `.framer-NWrst .framer-awqryr { display: grid; flex: 1 0 0px; gap: 0px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 10px 10px 10px; position: relative; width: 1px; z-index: 4; }`,
        `.framer-NWrst .framer-151xvkl { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; grid-column: span 2; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-nofn0z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: min-content; }`,
        `.framer-NWrst .framer-1ws4try { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 1px 0px; position: relative; width: min-content; }`,
        `.framer-NWrst .framer-jbjz9n { aspect-ratio: 1 / 1; background-color: var(--token-4ab6cf73-4bcf-4f84-8861-343859594094, rgba(1, 195, 101, 0.85)); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; box-shadow: 0px 0px 0px 3px rgba(53, 255, 157, 0.2); flex: none; height: var(--framer-aspect-ratio-supported, 6px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 6px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NWrst .framer-zl64uv, .framer-NWrst .framer-161xxvm, .framer-NWrst .framer-1tfbqwj, .framer-NWrst .framer-hc8wv9, .framer-NWrst .framer-1uc454q, .framer-NWrst .framer-hua3w5, .framer-NWrst .framer-vdnzbz, .framer-NWrst .framer-4k7sce, .framer-NWrst .framer-4bcl7u, .framer-NWrst .framer-u40e32, .framer-NWrst .framer-90e5sw, .framer-NWrst .framer-6w30dj, .framer-NWrst .framer-1urve99, .framer-NWrst .framer-c3gdc3, .framer-NWrst .framer-2g53k3, .framer-NWrst .framer-1yrzsjd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-NWrst .framer-2uzrly, .framer-NWrst .framer-1sk0z3q, .framer-NWrst .framer-1f3qw99, .framer-NWrst .framer-1jhfbct, .framer-NWrst .framer-m32u4c, .framer-NWrst .framer-itbun9, .framer-NWrst .framer-1ug1ia1, .framer-NWrst .framer-1rwvjqw, .framer-NWrst .framer-71pj03, .framer-NWrst .framer-ovcr9b, .framer-NWrst .framer-75gvqp, .framer-NWrst .framer-1334gb, .framer-NWrst .framer-137cps7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-789qup { align-content: flex-start; align-items: flex-start; align-self: end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: flex-start; justify-self: end; max-width: 396px; overflow: visible; padding: 0px 0px 66px 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-vkvdq-container, .framer-NWrst .framer-14iswcm-container, .framer-NWrst .framer-1oeo34r-container, .framer-NWrst .framer-eewfz0-container, .framer-NWrst .framer-vw7ika-container, .framer-NWrst .framer-py8wy5-container, .framer-NWrst .framer-178b7vf-container, .framer-NWrst .framer-17s9m0c-container, .framer-NWrst .framer-1az9cw-container, .framer-NWrst .framer-1r4gozn-container, .framer-NWrst .framer-12kmra4-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-NWrst .framer-9kdpmr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 18px 10px 23px 10px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-1ftmqbt { align-content: center; align-items: center; background-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 50px 30px 50px 30px; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-hu182e, .framer-NWrst .framer-b07vrh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-68s83y, .framer-NWrst .framer-4x02hs, .framer-NWrst .framer-146mteo, .framer-NWrst .framer-1d3nhau { display: grid; flex: none; gap: 0px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-50u0at-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: fit-content; }`,
        `.framer-NWrst .framer-fiarf4, .framer-NWrst .framer-1rlmyx7, .framer-NWrst .framer-v2q0oi { display: grid; flex: none; gap: 0px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-189b7cf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: start; flex: none; grid-column: span 2; height: auto; justify-self: start; max-width: 678px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-174d6fc, .framer-NWrst .framer-12a19t3, .framer-NWrst .framer-1x8a4q7, .framer-NWrst .framer-14ppvkm { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: end; flex: none; height: auto; justify-self: end; max-width: 485px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-1fwcaxi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-sc9yg6, .framer-NWrst .framer-1xuqjjy { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-zgedx2, .framer-NWrst .framer-1edzudo { --border-bottom-width: 1px; --border-color: var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, #959595); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 0px 0px 45px 0px rgba(177, 177, 177, 0.1); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; min-height: 382px; overflow: hidden; padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-NWrst .framer-17mns4f, .framer-NWrst .framer-5ikiis { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-17n89qp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-nyobld { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-1cd5pie { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 240px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-eat2zt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-lxzeqa, .framer-NWrst .framer-ywxiv4 { display: grid; flex: none; gap: 0px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-npnb7b, .framer-NWrst .framer-dcn69b { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: start; flex: none; height: auto; justify-self: start; position: relative; white-space: pre; width: fit-content; }`,
        `.framer-NWrst .framer-1d5gjiu, .framer-NWrst .framer-1r83m2i { align-self: center; background-color: var(--token-666e0f3e-dd94-4623-bbd1-d1f341d84157, #f2f2f2); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; flex: none; grid-column: span 2; height: 8px; justify-self: center; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NWrst .framer-jf4o7p { background-color: var(--token-efeb8581-9d6a-477c-8d3a-d7af2e556b7d, #c8c8c8); bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 95px; }`,
        `.framer-NWrst .framer-14xrgr4, .framer-NWrst .framer-1e6yt9s { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: start; flex: none; height: auto; justify-self: end; position: relative; white-space: pre; width: fit-content; }`,
        `.framer-NWrst .framer-4mjlfl { background-color: var(--token-06856072-b723-433b-af66-5e2af035f2ef, #ff2121); bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 143px; }`,
        `.framer-NWrst .framer-tgjznd, .framer-NWrst .framer-159uq8b { --border-bottom-width: 1px; --border-color: var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, #959595); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 0px 0px 45px 0px rgba(177, 177, 177, 0.1); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; min-height: 170px; overflow: hidden; padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-NWrst .framer-nhjmld, .framer-NWrst .framer-berk50 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-4e0w7f, .framer-NWrst .framer-84d3lu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-399r8a { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-NWrst .framer-1994otp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-NWrst .framer-a35wbs { flex: none; height: 24px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 24px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-NWrst .framer-e99ka8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 112px; min-height: 46px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-165xjgx { -webkit-filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 46px; z-index: 1; }`,
        `.framer-NWrst .framer-ipnklk { -webkit-filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; justify-content: center; left: 35px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 46px; z-index: 1; }`,
        `.framer-NWrst .framer-usq21l { -webkit-filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; justify-content: center; left: 66px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 46px; z-index: 1; }`,
        `.framer-NWrst .framer-1rrdxek { --border-bottom-width: 1px; --border-color: var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, #959595); --border-left-width: 0px; --border-right-width: 0px; --border-style: dashed; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 22px 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-1w5c0bg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-xahayf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 101px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 16px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-q7y8sk, .framer-NWrst .framer-u9kmrj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-NWrst .framer-a0vgll { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-i1a18d { -webkit-filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); align-content: flex-end; align-items: flex-end; display: flex; filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: 46px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 46px; z-index: 1; }`,
        `.framer-NWrst .framer-ydljps { --border-bottom-width: 1px; --border-color: var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, #959595); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 0px 103px 29px 0px rgba(0, 0, 0, 0), 0px 66px 26px 0px rgba(0, 0, 0, 0.04), 0px 37px 22px 0px rgba(0, 0, 0, 0.12), 0px 16px 16px 0px rgba(0, 0, 0, 0.21), 0px 4px 9px 0px rgba(0, 0, 0, 0.24); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 399px; min-height: 562px; overflow: hidden; padding: 30px 20px 30px 20px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NWrst .framer-1dm0wps { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 53px; height: 502px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-wjcz0u, .framer-NWrst .framer-1kjs3nm { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 79px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-NWrst .framer-1ebgdtw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-d708op { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: min-content; }`,
        `.framer-NWrst .framer-10hfqd2 { background-color: var(--token-4ab6cf73-4bcf-4f84-8861-343859594094, rgba(1, 195, 101, 0.85)); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; box-shadow: 0px 0px 0px 3px rgba(53, 255, 157, 0.2); flex: none; height: 6px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 6px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NWrst .framer-8ocolb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-4l6bgl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-1jylyd1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-l2mw7n { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 130px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-53itgl { border-bottom-left-radius: 7px; border-bottom-right-radius: 7px; border-top-left-radius: 7px; border-top-right-radius: 7px; flex: none; height: 46px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 46px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NWrst .framer-1wc2d29-container { flex: none; height: 46px; position: relative; width: auto; }`,
        `.framer-NWrst .framer-14fhfyd { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; bottom: 1px; flex: none; left: 1px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 2px; top: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-NWrst .framer-1c5kvzc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 60px 20px 120px 20px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-i8xrkx, .framer-NWrst .framer-dk60em, .framer-NWrst .framer-1kerbme { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-NWrst .framer-1kgv32p, .framer-NWrst .framer-1eiet2v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-104gkfu-container, .framer-NWrst .framer-1cirn7s-container, .framer-NWrst .framer-lpb1j3-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-1lnk2ac { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: start; flex: none; grid-column: span 2; height: auto; justify-self: start; max-width: 640px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-72f5p6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-1i1o1wf, .framer-NWrst .framer-1endjgl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-5922fp, .framer-NWrst .framer-ej29a4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px 15px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-gypa1s, .framer-NWrst .framer-1kunz3o, .framer-NWrst .framer-t69f0o, .framer-NWrst .framer-1h831hn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-yg2mpr-container, .framer-NWrst .framer-12xyv7s-container, .framer-NWrst .framer-f3665v-container, .framer-NWrst .framer-1ou7wgs-container, .framer-NWrst .framer-1mudijt-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-lkgem1, .framer-NWrst .framer-9t1y0o { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px 15px; height: min-content; justify-content: center; max-width: 548px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-klll0n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 10px 0px 10px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-14xghat { align-content: center; align-items: center; background-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 50px 30px 50px 30px; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-f7s272-container, .framer-NWrst .framer-ycquxy-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-NWrst .framer-1cupo1z { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: start; flex: none; grid-column: span 2; height: auto; justify-self: start; max-width: 608px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-jgd6c0-container, .framer-NWrst .framer-yx2qos-container { flex: none; height: auto; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-oixhce, .framer-NWrst .framer-t600mq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 20px 120px 20px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-1uxfc8w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-NWrst .framer-1cvezwb, .framer-NWrst .framer-1anopcm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 655px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-1tozjsq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-fnz6j1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 620px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-sapz2r-container { flex: none; height: auto; max-width: 620px; position: sticky; top: 60px; width: 100%; z-index: 1; }`,
        `.framer-NWrst .framer-1qvdzqq-container { flex: none; height: auto; max-width: 620px; position: sticky; top: 60px; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-1hlptqq-container { flex: none; height: auto; max-width: 620px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-NWrst .framer-feon14 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 503px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-1t4oper { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 10px 0px 10px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-djtsa4 { align-content: center; align-items: center; background-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: hidden; padding: 50px 30px 50px 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NWrst .framer-1i3kkir, .framer-NWrst .framer-195fl5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-1vl8qtx, .framer-NWrst .framer-1nqfj92 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 655px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-kwb9g9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 575px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-5t09cw, .framer-NWrst .framer-12vur4o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-64rk0m { --border-bottom-width: 1px; --border-color: var(--token-180b4fca-0255-4862-b89d-f15569aae80e, rgba(255, 255, 255, 0.2)); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 58px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NWrst .framer-19akh8s, .framer-NWrst .framer-1y9zwst, .framer-NWrst .framer-k7u4ud { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-1mbqhwe { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 119px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-NWrst .framer-1bw87dy, .framer-NWrst .framer-qwwzhh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 481px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-1rbk00u { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-tdhdjq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-1b0kx1h-container, .framer-NWrst .framer-rm93gf-container, .framer-NWrst .framer-18yb4ar-container, .framer-NWrst .framer-1o17y3e-container, .framer-NWrst .framer-1tesaw-container, .framer-NWrst .framer-1ubjw7l-container, .framer-NWrst .framer-1qnzr6k-container, .framer-NWrst .framer-ny71yn-container, .framer-NWrst .framer-hlmazm-container, .framer-NWrst .framer-18e2ixi-container, .framer-NWrst .framer-1r3h73-container, .framer-NWrst .framer-yhb2eq-container, .framer-NWrst .framer-5htct-container, .framer-NWrst .framer-1eac810-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-1lgk11t { align-content: flex-start; align-items: flex-start; align-self: stretch; background-color: var(--token-7bc24d75-456d-4da8-90a1-2594392b9ddf, #141414); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 58px; height: auto; justify-content: flex-start; max-width: 488px; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NWrst .framer-1fhdsfd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-jukipc, .framer-NWrst .framer-kb8954 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 485px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-1l0nox5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-15yeau8-container, .framer-NWrst .framer-7yeexy-container, .framer-NWrst .framer-1b4fg7c-container, .framer-NWrst .framer-1svfeqo-container, .framer-NWrst .framer-7ko6xa-container, .framer-NWrst .framer-cwd32c-container { flex: none; height: auto; position: relative; width: 199px; }`,
        `.framer-NWrst .framer-o6cz5g, .framer-NWrst .framer-20ilum { display: grid; flex: none; gap: 10px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-1neuyrb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: start; flex: none; grid-column: span 2; height: auto; justify-self: start; max-width: 560px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-uo2kd2-container, .framer-NWrst .framer-cqm74e-container { flex: 1 0 0px; height: auto; max-width: 418px; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-9whg26 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 60px 20px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NWrst .framer-1fk9d4u { --border-bottom-width: 1px; --border-color: var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, #959595); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 0px 1px 45px 0px rgba(177, 177, 177, 0.1); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; justify-self: start; min-height: 400px; overflow: hidden; padding: 0px 25px 25px 25px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NWrst .framer-170m181 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-NWrst .framer-1xx4phr-container { bottom: 0px; flex: none; height: 397px; left: 0px; position: absolute; right: 0px; z-index: 3; }`,
        `.framer-NWrst .framer-1w9anzi { background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%); bottom: 0px; flex: none; height: 224px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; }`,
        `.framer-NWrst .framer-13dkrl9 { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 132px; will-change: var(--framer-will-change-filter-override, filter); z-index: 2; }`,
        `.framer-NWrst .framer-tt2of8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-NWrst .framer-13fpurk { --border-bottom-width: 1px; --border-color: var(--token-c8f555ca-85f2-45bb-95da-99cc04a2af76, #959595); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; align-self: start; background-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; justify-self: start; min-height: 400px; overflow: hidden; padding: 25px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-NWrst .framer-19uztba { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-12bo780 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-12utwy5 { flex: 1 0 0px; height: 46px; max-width: 112px; overflow: visible; position: relative; width: 1px; }`,
        `.framer-NWrst .framer-2dv2y4 { -webkit-filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); bottom: 0px; filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); flex: none; left: 66px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 46px; will-change: var(--framer-will-change-filter-override, filter); z-index: 2; }`,
        `.framer-NWrst .framer-1i3llku { -webkit-filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); bottom: 0px; filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); flex: none; left: 33px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 46px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-NWrst .framer-1t3qzuv { -webkit-filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); bottom: 0px; filter: drop-shadow(0px 41px 6px rgba(0, 0, 0, 0)) drop-shadow(0px 26px 5px rgba(0, 0, 0, 0.01)) drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.09)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 46px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-NWrst .framer-7feyo3 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; max-width: 139px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NWrst .framer-1ipn2b3 { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, #000000); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 0px 103px 29px 0px rgba(0, 0, 0, 0), 0px 66px 26px 0px rgba(0, 0, 0, 0.04), 0px 37px 22px 0px rgba(0, 0, 0, 0.12), 0px 16px 16px 0px rgba(0, 0, 0, 0.21), 0px 4px 9px 0px rgba(0, 0, 0, 0.24); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; justify-self: start; min-height: 400px; overflow: var(--overflow-clip-fallback, clip); padding: 25px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NWrst .framer-o498xg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-18480fo { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 40px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-NWrst .framer-6ps0gp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 17px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NWrst .framer-mbefw6 { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 46px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-NWrst .framer-dw15zp { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; max-width: 196px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        ...pn,
        ...fa,
        ...Ce,
        ...Ge,
        ...$e,
        ...ba,
        ...ye,
        ...ga,
        ..._n,
        ...lt,
        `.framer-NWrst[data-border="true"]::after, .framer-NWrst [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-NWrst.framer-72rtr7 { width: 810px; } .framer-NWrst .framer-1ftmqbt, .framer-NWrst .framer-14xghat, .framer-NWrst .framer-djtsa4 { padding: 50px 16px 50px 16px; } .framer-NWrst .framer-1fwcaxi { align-content: unset; align-items: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); } .framer-NWrst .framer-sc9yg6, .framer-NWrst .framer-1xuqjjy, .framer-NWrst .framer-1mudijt-container { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-NWrst .framer-ydljps, .framer-NWrst .framer-cqm74e-container { align-self: start; flex: none; grid-column: 1 / -1; justify-self: start; max-width: unset; width: 100%; } .framer-NWrst .framer-1c5kvzc { padding: 60px 16px 120px 16px; } .framer-NWrst .framer-oixhce { padding: 120px 16px 120px 16px; } .framer-NWrst .framer-1rbk00u { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-NWrst .framer-tdhdjq { flex: none; width: 100%; } .framer-NWrst .framer-t600mq { padding: 120px 20px 60px 20px; } .framer-NWrst .framer-12vur4o { align-content: unset; align-items: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); } .framer-NWrst .framer-uo2kd2-container { align-self: start; flex: none; justify-self: start; max-width: unset; width: 100%; } .framer-NWrst .framer-9whg26 { padding: 60px 20px 60px 20px; } .framer-NWrst .framer-20ilum { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-NWrst .framer-1ipn2b3 { grid-column: 1 / -1; }}`,
        `@media (max-width: 809.98px) { .framer-NWrst.framer-72rtr7 { width: 390px; } .framer-NWrst .framer-11uvnwq { flex-direction: column; justify-content: flex-end; } .framer-NWrst .framer-awqryr { flex: none; gap: 24px 0px; grid-template-columns: repeat(1, minmax(50px, 1fr)); width: 100%; } .framer-NWrst .framer-151xvkl, .framer-NWrst .framer-189b7cf, .framer-NWrst .framer-1lnk2ac, .framer-NWrst .framer-1cupo1z, .framer-NWrst .framer-1neuyrb { grid-column: span 1; } .framer-NWrst .framer-789qup, .framer-NWrst .framer-174d6fc, .framer-NWrst .framer-12a19t3, .framer-NWrst .framer-1x8a4q7, .framer-NWrst .framer-14ppvkm { justify-self: start; } .framer-NWrst .framer-9kdpmr, .framer-NWrst .framer-1fwcaxi, .framer-NWrst .framer-klll0n, .framer-NWrst .framer-1t4oper, .framer-NWrst .framer-5t09cw { flex-direction: column; } .framer-NWrst .framer-1ftmqbt, .framer-NWrst .framer-14xghat, .framer-NWrst .framer-djtsa4 { flex: none; padding: 50px 16px 50px 16px; width: 100%; } .framer-NWrst .framer-fiarf4, .framer-NWrst .framer-1rlmyx7, .framer-NWrst .framer-v2q0oi, .framer-NWrst .framer-o6cz5g { gap: 16px 0px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-NWrst .framer-sc9yg6, .framer-NWrst .framer-1xuqjjy, .framer-NWrst .framer-i8xrkx, .framer-NWrst .framer-5922fp, .framer-NWrst .framer-lkgem1, .framer-NWrst .framer-9t1y0o, .framer-NWrst .framer-ej29a4, .framer-NWrst .framer-1uxfc8w, .framer-NWrst .framer-64rk0m, .framer-NWrst .framer-tdhdjq, .framer-NWrst .framer-dk60em, .framer-NWrst .framer-1kerbme { flex: none; width: 100%; } .framer-NWrst .framer-ydljps { flex: none; max-width: unset; width: 100%; } .framer-NWrst .framer-1c5kvzc { flex-direction: column; padding: 60px 16px 120px 16px; } .framer-NWrst .framer-72f5p6 { gap: 40px; } .framer-NWrst .framer-1i1o1wf, .framer-NWrst .framer-1endjgl { flex-direction: column; gap: 40px; } .framer-NWrst .framer-oixhce { flex-direction: column; padding: 120px 16px 120px 16px; } .framer-NWrst .framer-1rbk00u { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-NWrst .framer-1lgk11t { align-self: unset; flex: none; height: min-content; width: 100%; } .framer-NWrst .framer-t600mq { flex-direction: column; padding: 120px 20px 60px 20px; } .framer-NWrst .framer-12vur4o { align-content: unset; align-items: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); } .framer-NWrst .framer-uo2kd2-container, .framer-NWrst .framer-cqm74e-container { align-self: start; flex: none; grid-column: 1 / -1; justify-self: start; max-width: unset; width: 100%; } .framer-NWrst .framer-1mudijt-container { align-self: start; flex: none; grid-column: 1 / -1; justify-self: start; width: 100%; } .framer-NWrst .framer-9whg26 { flex-direction: column; padding: 60px 20px 60px 20px; } .framer-NWrst .framer-20ilum { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-NWrst .framer-1fk9d4u, .framer-NWrst .framer-13fpurk, .framer-NWrst .framer-1ipn2b3 { grid-column: 1 / -1; }}`,
      ],
      `framer-NWrst`,
    )),
    (Co = So),
    (So.displayName = `Home`),
    (So.defaultProps = { height: 11422, width: 1200 }),
    N(
      So,
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
              cssFamilyName: `Fira Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Fira Mono`,
              url: `https://fonts.gstatic.com/s/firamono/v16/N0bS2SlFPv1weGeLZDto1d33nP3VaZBRBQ.woff2`,
              weight: `500`,
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
          ],
        },
        ...Ca,
        ...wa,
        ...Ta,
        ...Da,
        ...Oa,
        ...Aa,
        ...ja,
        ...Ma,
        ...Na,
        ...Pa,
        ...Ia,
        ...La,
        ...Ra,
        ...R(fn),
        ...R(da),
        ...R(we),
        ...R(Ke),
        ...R(et),
        ...R(ya),
        ...R(be),
        ...R(ha),
        ...R(gn),
        ...R(ut),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    (So.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = de.get(so(), n),
          i = de.get(lo(), n),
          a = de.get(uo(), n),
          o = de.get(fo(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          a.preload(),
          o.preload(),
          P(rt, {}, t),
          P(q, {}, t),
          P(Rr, {}, t),
          P(Xn, {}, t),
          P(Y, {}, t),
          P(la, {}, t),
          P(Mn, {}, t),
          P(Ne, {}, t),
          P(Zi, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(it, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(it, {}, t)));
          })(),
          (async () => {
            let e = (await a.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(it, {}, t)));
          })(),
          (async () => {
            let e = (await o.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(it, {}, t)));
          })(),
        ]);
      },
    }),
    (wo = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerScrollSections: `{"OhuOfZacZ":{"pattern":":OhuOfZacZ","name":"about"},"e2mW3bpRv":{"pattern":":e2mW3bpRv","name":"service"}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"h4gwFyb7P":{"layout":["fixed","auto"]},"Vg0sB4Fhp":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `11422`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
          },
        },
        queryParamNames: {
          type: `variable`,
          annotations: { framerContractVersion: `1` },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { wo as __FramerMetadata__, Co as default, Ba as queryParamNames };
//# sourceMappingURL=aEm5oIsGAVJkf55dnGsmlYQ5pRhowQgvWMRQDd4suwU.Da80wz19.mjs.map
