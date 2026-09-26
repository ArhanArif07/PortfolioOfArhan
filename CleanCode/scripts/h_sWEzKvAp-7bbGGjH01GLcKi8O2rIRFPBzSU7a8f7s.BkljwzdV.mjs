import { t as e } from "./rolldown-runtime.DsXBSD_B.mjs";
import {
  B as t,
  F as n,
  I as r,
  M as i,
  R as a,
  T as o,
  _ as s,
  b as c,
  c as l,
  d as u,
  j as d,
  k as ee,
  l as f,
  p as te,
  s as p,
  u as m,
} from "./react.CUuwdGgG.mjs";
import { C as h, a as g, r as ne, t as _ } from "./motion.yFoJz7cr.mjs";
import {
  B as v,
  Ct as y,
  E as b,
  H as re,
  M as x,
  O as ie,
  P as S,
  S as ae,
  St as oe,
  T as C,
  Tt as w,
  V as T,
  _t as se,
  a as E,
  at as ce,
  b as le,
  d as D,
  ft as ue,
  g as O,
  gt as de,
  i as k,
  k as A,
  lt as fe,
  n as pe,
  o as j,
  ot as me,
  p as he,
  q as M,
  r as ge,
  t as N,
  tt as P,
  ut as _e,
  w as ve,
  x as F,
  xt as ye,
  yt as be,
} from "./framer.uWP7Qtvw.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./sPvC_pCwb.Ggz8zae4.mjs";
import { a as Te, i as Ee, o as De, r as Oe } from "./shared-lib.Bm4MKTZG.mjs";
import { n as ke, t as Ae } from "./aAuC7HDti.CWi1sD2t.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./uyfn5rCXc.Bs2FpWo_.mjs";
import { d as Fe, f as Ie, l as Le, u as Re } from "./X3lWUYHjB.DU8QC3PM.mjs";
import { n as ze, t as Be } from "./V4XApcPH4.BkDsdD9q.mjs";
import { i as Ve, n as He, r as Ue, t as We } from "./QQizO8D2m.BmdOiDZq.mjs";
import { n as Ge, t as Ke } from "./SmoothScroll_Prod.Ux-EqKSq.mjs";
import {
  a as qe,
  i as Je,
  n as Ye,
  o as Xe,
  r as Ze,
  t as Qe,
} from "./eR1FmtOEg.D1YRJffP.mjs";
import { n as $e, r as et } from "./EcjikNrmE.B9bKPTkR.mjs";
function tt(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function I(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function nt(e) {
  throw Error(`Unexpected value: ${e}`);
}
function L(e, t, n, r) {
  (I(e >= t, e, `outside lower bound for`, r),
    I(e <= n, e, `outside upper bound for`, r));
}
function rt(e) {
  return typeof e == `string`;
}
function it(e) {
  return Number.isFinite(e);
}
function at(e) {
  return e === null;
}
function ot(e) {
  if (at(e)) return 0;
  switch (e.type) {
    case j.Array:
      return 1;
    case j.Boolean:
      return 2;
    case j.Color:
      return 3;
    case j.Date:
      return 4;
    case j.Enum:
      return 5;
    case j.File:
      return 6;
    case j.ResponsiveImage:
      return 10;
    case j.Link:
      return 7;
    case j.Number:
      return 8;
    case j.Object:
      return 9;
    case j.RichText:
      return 11;
    case j.String:
      return 12;
    case j.VectorSetItem:
      return 13;
    default:
      nt(e);
  }
}
function st(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = R.read(e);
    n.push(t);
  }
  return { type: j.Array, value: n };
}
function ct(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) R.write(e, n);
}
function lt(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = R.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function ut(e) {
  return { type: j.Boolean, value: e.readUint8() !== 0 };
}
function dt(e, t) {
  e.writeUint8(t.value ? 1 : 0);
}
function ft(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function pt(e) {
  return { type: j.Color, value: e.readString() };
}
function mt(e, t) {
  e.writeString(t.value);
}
function ht(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function gt(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: j.Date, value: n.toISOString() };
}
function _t(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function vt(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function yt(e) {
  return { type: j.Enum, value: e.readString() };
}
function bt(e, t) {
  e.writeString(t.value);
}
function xt(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function St(e) {
  return { type: j.File, value: e.readString() };
}
function Ct(e, t) {
  e.writeString(t.value);
}
function wt(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Tt(e) {
  return { type: j.Link, value: e.readJson() };
}
function Et(e, t) {
  e.writeJson(t.value);
}
function Dt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Ot(e) {
  return { type: j.Number, value: e.readFloat64() };
}
function kt(e, t) {
  e.writeFloat64(t.value);
}
function At(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function jt(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = R.read(e);
  }
  return { type: j.Object, value: n };
}
function Mt(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    (e.writeString(t), R.write(e, r));
}
function Nt(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = R.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Pt(e) {
  return { type: j.ResponsiveImage, value: e.readJson() };
}
function Ft(e, t) {
  e.writeJson(t.value);
}
function It(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Lt(e) {
  let t = e.readInt8();
  if (t === 0) return { type: j.RichText, value: e.readUint32() };
  if (t === 1) return { type: j.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Rt(e, t) {
  if (it(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (rt(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function zt(e, t) {
  let n = e.value,
    r = t.value;
  if ((it(n) && it(r)) || (rt(n) && rt(r))) return n < r ? -1 : n > r ? 1 : 0;
  throw Error(`Invalid rich text pointer`);
}
function Bt(e) {
  return { type: j.String, value: e.readString() };
}
function Vt(e, t) {
  e.writeString(t.value);
}
function Ht(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function Ut(e) {
  return { type: j.VectorSetItem, value: e.readUint32() };
}
function Wt(e, t) {
  e.writeUint32(t.value);
}
function Gt(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
async function Kt(e) {
  let t = Math.floor(_n * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function qt(e, t) {
  let n = Yt(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await yn(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new bn(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Jt(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Yt(e) {
  I(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to
      ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
      : n.push(e);
  }
  return n;
}
var R,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  z,
  sn,
  B,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  V,
  H,
  mn,
  U,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  W,
  xn,
  Sn,
  Cn,
  wn = e(() => {
    (a(),
      M(),
      (Xt = Object.create),
      (Zt = Object.defineProperty),
      (Qt = Object.getOwnPropertyDescriptor),
      ($t = Object.getOwnPropertyNames),
      (en = Object.getPrototypeOf),
      (tn = Object.prototype.hasOwnProperty),
      (nn = (e, t, n) =>
        t in e
          ? Zt(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (rn = (e, t) =>
        function () {
          return (
            t || (0, e[$t(e)[0]])((t = { exports: {} }).exports, t),
            t.exports
          );
        }),
      (an = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of $t(t))
            tn.call(e, i) ||
              i === n ||
              Zt(e, i, {
                get: () => t[i],
                enumerable: !(r = Qt(t, i)) || r.enumerable,
              });
        return e;
      }),
      (on = (e, t, n) => (
        (n = e == null ? {} : Xt(en(e))),
        an(
          !t && e && e.__esModule
            ? n
            : Zt(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (z = (e, t, n) => nn(e, typeof t == `symbol` ? t : t + ``, n)),
      (sn = on(
        rn({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`,
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(
                          `maxBatchSize must be a positive number: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(
                          `batchScheduleFn must be a function: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(
                          function (e) {
                            return t && typeof t[e] != `function`;
                          },
                        );
                        if (n.length !== 0)
                          throw TypeError(
                            `Custom cacheMap missing methods: ` + n.join(`, `),
                          );
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`,
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (
                          t !== null &&
                          !t.hasDispatched &&
                          t.keys.length < e._maxBatchSize
                        )
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (
                                ((t.hasDispatched = !0), t.keys.length === 0)
                              ) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`,
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e),
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`,
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        }),
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` &&
                typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits)
                for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 &&
                    Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1,
      )),
      (B = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (cn = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = B.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = B.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = B.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = B.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = B.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = B.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = B.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = B.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = B.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = B.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            z(this, `offset`, 0),
            z(this, `view`),
            z(this, `decoder`, new TextDecoder()),
            (this.view = tt(this.bytes)));
        }
      }),
      t !== void 0 && t.requestIdleCallback,
      (ln = 1024),
      (un = 1.5),
      (dn = (e) => 2 ** e - 1),
      (fn = (e) => -(2 ** (e - 1))),
      (pn = (e) => 2 ** (e - 1) - 1),
      (V = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: fn(8),
        Int16: fn(16),
        Int32: fn(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (H = {
        Uint8: dn(8),
        Uint16: dn(16),
        Uint32: dn(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: pn(8),
        Int16: pn(16),
        Int32: pn(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (mn = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * un) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = tt(n)));
        }
        writeUint8(e) {
          L(e, V.Uint8, H.Uint8, `Uint8`);
          let t = B.Uint8;
          (this.ensureLength(t),
            this.view.setUint8(this.offset, e),
            (this.offset += t));
        }
        writeUint16(e) {
          L(e, V.Uint16, H.Uint16, `Uint16`);
          let t = B.Uint16;
          (this.ensureLength(t),
            this.view.setUint16(this.offset, e),
            (this.offset += t));
        }
        writeUint32(e) {
          L(e, V.Uint32, H.Uint32, `Uint32`);
          let t = B.Uint32;
          (this.ensureLength(t),
            this.view.setUint32(this.offset, e),
            (this.offset += t));
        }
        writeUint64(e) {
          L(e, V.Uint64, H.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          L(e, V.BigUint64, H.BigUint64, `BigUint64`);
          let t = B.BigUint64;
          (this.ensureLength(t),
            this.view.setBigUint64(this.offset, e),
            (this.offset += t));
        }
        writeInt8(e) {
          L(e, V.Int8, H.Int8, `Int8`);
          let t = B.Int8;
          (this.ensureLength(t),
            this.view.setInt8(this.offset, e),
            (this.offset += t));
        }
        writeInt16(e) {
          L(e, V.Int16, H.Int16, `Int16`);
          let t = B.Int16;
          (this.ensureLength(t),
            this.view.setInt16(this.offset, e),
            (this.offset += t));
        }
        writeInt32(e) {
          L(e, V.Int32, H.Int32, `Int32`);
          let t = B.Int32;
          (this.ensureLength(t),
            this.view.setInt32(this.offset, e),
            (this.offset += t));
        }
        writeInt64(e) {
          L(e, V.Int64, H.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          L(e, V.BigInt64, H.BigInt64, `BigInt64`);
          let t = B.BigInt64;
          (this.ensureLength(t),
            this.view.setBigInt64(this.offset, e),
            (this.offset += t));
        }
        writeFloat32(e) {
          let t = B.Float32;
          (this.ensureLength(t),
            this.view.setFloat32(this.offset, e),
            (this.offset += t));
        }
        writeFloat64(e) {
          let t = B.Float64;
          (this.ensureLength(t),
            this.view.setFloat64(this.offset, e),
            (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t),
            this.bytes.set(e, this.offset),
            (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (z(this, `offset`, 0),
            z(this, `bytes`, new Uint8Array(ln)),
            z(this, `view`, tt(this.bytes)),
            z(this, `encoder`, new TextEncoder()),
            z(this, `encodedStrings`, new Map()));
        }
      }),
      (U = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            I(it(n), `Invalid chunkId`),
            I(it(r), `Invalid offset`),
            I(it(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          return new e(t.readUint16(), t.readUint32(), t.readUint32());
        }
        write(e) {
          (e.writeUint16(this.chunkId),
            e.writeUint32(this.offset),
            e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (I(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return st(e);
            case 2:
              return ut(e);
            case 3:
              return pt(e);
            case 4:
              return gt(e);
            case 5:
              return yt(e);
            case 6:
              return St(e);
            case 7:
              return Tt(e);
            case 8:
              return Ot(e);
            case 9:
              return jt(e);
            case 10:
              return Pt(e);
            case 11:
              return Lt(e);
            case 12:
              return Bt(e);
            case 13:
              return Ut(e);
            default:
              nt(t);
          }
        }),
          (e.write = function (e, t) {
            let n = ot(t);
            if ((e.writeUint8(n), !at(t)))
              switch (t.type) {
                case j.Array:
                  return ct(e, t);
                case j.Boolean:
                  return dt(e, t);
                case j.Color:
                  return mt(e, t);
                case j.Date:
                  return _t(e, t);
                case j.Enum:
                  return bt(e, t);
                case j.File:
                  return Ct(e, t);
                case j.Link:
                  return Et(e, t);
                case j.Number:
                  return kt(e, t);
                case j.Object:
                  return Mt(e, t);
                case j.ResponsiveImage:
                  return Ft(e, t);
                case j.RichText:
                  return Rt(e, t);
                case j.VectorSetItem:
                  return Wt(e, t);
                case j.String:
                  return Vt(e, t);
                default:
                  nt(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = ot(e),
              i = ot(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (at(e) || at(t)) return 0;
            switch (e.type) {
              case j.Array:
                return (I(t.type === j.Array), lt(e, t, n));
              case j.Boolean:
                return (I(t.type === j.Boolean), ft(e, t));
              case j.Color:
                return (I(t.type === j.Color), ht(e, t));
              case j.Date:
                return (I(t.type === j.Date), vt(e, t));
              case j.Enum:
                return (I(t.type === j.Enum), xt(e, t));
              case j.File:
                return (I(t.type === j.File), wt(e, t));
              case j.Link:
                return (I(t.type === j.Link), Dt(e, t));
              case j.Number:
                return (I(t.type === j.Number), At(e, t));
              case j.Object:
                return (I(t.type === j.Object), Nt(e, t, n));
              case j.ResponsiveImage:
                return (I(t.type === j.ResponsiveImage), It(e, t));
              case j.RichText:
                return (I(t.type === j.RichText), zt(e, t));
              case j.VectorSetItem:
                return (I(t.type === j.VectorSetItem), Gt(e, t));
              case j.String:
                return (I(t.type === j.String), Ht(e, t, n));
              default:
                nt(e);
            }
          }));
      })((R ||= {})),
      (hn = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = R.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new cn(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = R.read(n);
              e.push(t);
            }
            let t = U.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new mn();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(),
          e.writeUint32(this.entries.length),
          this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) R.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), z(this, `entries`, []));
        }
      }),
      (gn = 3),
      (_n = 250),
      (vn = [408, 429, 500, 502, 503, 504]),
      (yn = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!vn.includes(r.status) || ++n > gn) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > gn) throw e;
          }
          await Kt(n);
        }
      }),
      (bn = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((I(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Jt(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((I(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Jt(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          z(this, `chunks`, []);
        }
      }),
      (W = class {
        async loadModel() {
          let [e] = await qt(this.options.url, [this.options.range]);
          return (I(e, `Failed to load model`), hn.deserialize(e));
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          I(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      nt(t);
                  }
                }),
              [t.entries],
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n];
                e[r] = t.values[n];
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== j.String || t.value?.type !== j.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== j.String || t.value?.type !== j.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== j.String || t.value?.type !== j.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > R.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            R.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a].values[t];
            if (!n(o)) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          ((this.options = e),
            z(this, `schema`),
            z(this, `fields`),
            z(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            z(this, `modelPromise`),
            z(this, `model`),
            z(this, `collation`));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (I(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t),
            (this.fields = n),
            (this.collation = this.options.collation));
        }
      }),
      (xn = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = R.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), R.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          z(this, `fields`, new Map());
        }
      }),
      (Sn = class {
        scanItems() {
          return (
            (this.itemsPromise ??= yn(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new cn(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = xn.read(n),
                  i = n.getOffset() - e,
                  a = new U(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            z(this, `itemsPromise`),
            z(
              this,
              `itemLoader`,
              new sn.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = U.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await qt(this.url, t)).map((t, n) => {
                    let r = new cn(t),
                      i = xn.read(r),
                      a = e[n];
                    return (
                      I(a, `Missing pointer`),
                      { pointer: a, data: i.getData() }
                    );
                  });
                },
                { maxBatchSize: 250 },
              ),
            ));
        }
      }),
      (Cn = class {
        async scanItems() {
          return (
            await Promise.all(this.chunks.map(async (e) => e.scanItems()))
          ).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = U.fromString(e),
                n = this.chunks[t.chunkId];
              return (I(n, `Missing chunk`), n.resolveItem(e));
            }),
          );
        }
        compareItems(e, t) {
          let n = U.fromString(e.pointer),
            r = U.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return R.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            z(this, `id`),
            z(this, `schema`),
            z(this, `indexes`),
            z(this, `resolveRichText`),
            z(this, `resolveVectorSetItem`),
            z(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new Sn(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Tn(e) {
  return typeof e == `object` && !!e && !te(e) && On in e;
}
function En(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Dn(e) {
  let t = new Map();
  return (r) => {
    let i = t.get(r);
    if (i) return i;
    let a = (function t(r) {
      switch (r[0]) {
        case 1: {
          let [, ...e] = r;
          return u(n, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...n] = r;
          return u(O, e, ...n.map(t));
        }
        case 3: {
          let [, n, i, a, o] = r;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Tn(r) && r.preload(), (i[t] = r));
          }
          let s = e[n];
          return (
            En(s, `Module not found`),
            Tn(s) && s.preload(),
            f(ge, {
              componentIdentifier: n,
              children: (e) => f(N, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, n, ...i] = r,
            a = i.map(t);
          return u(e === `a` ? h.a : e, n, ...a);
        }
        case 5: {
          let [, e] = r;
          return e;
        }
      }
    })(JSON.parse(r));
    return (t.set(r, a), a);
  };
}
var G,
  On,
  kn,
  An = e(() => {
    (a(),
      p(),
      M(),
      o(),
      t !== void 0 && t.requestIdleCallback,
      (On = `preload`),
      (kn =
        (((G = kn || {})[(G.Fragment = 1)] = `Fragment`),
        (G[(G.Link = 2)] = `Link`),
        (G[(G.Module = 3)] = `Module`),
        (G[(G.Tag = 4)] = `Tag`),
        (G[(G.Text = 5)] = `Text`),
        G)));
  }),
  K,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  q,
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
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar = e(() => {
    (M(),
      wn(),
      An(),
      (K = {
        CqkiVhTXg: { isNullable: !0, type: j.String },
        createdAt: { isNullable: !0, type: j.Date },
        d6hKfZdLE: { isNullable: !0, type: j.Link },
        f9CDRrq2q: { isNullable: !0, type: j.ResponsiveImage },
        HAQIbKhGR: { isNullable: !0, type: j.RichText },
        id: { isNullable: !1, type: j.String },
        K5yLvY3ng: { isNullable: !0, type: j.Date },
        Kqe_KxsfS: { isNullable: !0, type: j.Number },
        M_p23E0Du: { isNullable: !0, type: j.Link },
        MJ510YNn0: { isNullable: !0, type: j.Link },
        nextItemId: { isNullable: !0, type: j.String },
        Nh4I4ZOgq: { isNullable: !0, type: j.Link },
        nSn6tnLIf: { isNullable: !0, type: j.String },
        previousItemId: { isNullable: !0, type: j.String },
        Pxh5W1J4N: { isNullable: !0, type: j.String },
        TFwTvFHdo: { isNullable: !0, type: j.String },
        TQYRSxw2j: { isNullable: !0, type: j.ResponsiveImage },
        updatedAt: { isNullable: !0, type: j.Date },
        VcmMRtnER: { isNullable: !0, type: j.String },
        wV3Lg9DPf: { isNullable: !0, type: j.String },
        xhWRV7cKr: { isNullable: !0, type: j.String },
        yW9wJIWhQ: { isNullable: !0, type: j.String },
      }),
      (jn = [`id`]),
      (Mn = { type: 1 }),
      (Nn = [`previousItemId`]),
      (Pn = [`nextItemId`]),
      (Fn = [`id`, `wV3Lg9DPf`]),
      (In = [`wV3Lg9DPf`, `id`]),
      (Ln = [`yW9wJIWhQ`]),
      (q = { type: 0 }),
      (Rn = [`wV3Lg9DPf`]),
      (zn = [`nSn6tnLIf`]),
      (Bn = [`f9CDRrq2q`]),
      (Vn = [`TQYRSxw2j`]),
      (Hn = [`Pxh5W1J4N`]),
      (Un = [`TFwTvFHdo`]),
      (Wn = [`K5yLvY3ng`]),
      (Gn = [`xhWRV7cKr`]),
      (Kn = [`VcmMRtnER`]),
      (qn = [`CqkiVhTXg`]),
      (Jn = [`Nh4I4ZOgq`]),
      (Yn = [`d6hKfZdLE`]),
      (Xn = [`MJ510YNn0`]),
      (Zn = [`M_p23E0Du`]),
      (Qn = [`HAQIbKhGR`]),
      ($n = [`Kqe_KxsfS`]),
      (er = []),
      (tr = (e) => {
        let t = er[e];
        if (t) return t().then((e) => e.default);
      }),
      (nr = Dn({})),
      new ae(),
      (rr = {
        collectionByLocaleId: {
          default: new Cn({
            chunks: [
              new URL(
                `./htcWKt0sa-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `e156fa96-d989-4549-a743-6caaf9d3d05cdefault`,
            indexes: [
              new W({
                collation: Mn,
                collectionSchema: K,
                fieldNames: jn,
                range: { from: 0, to: 241 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: Mn,
                collectionSchema: K,
                fieldNames: Nn,
                range: { from: 241, to: 481 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: Mn,
                collectionSchema: K,
                fieldNames: Pn,
                range: { from: 481, to: 717 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: Mn,
                collectionSchema: K,
                fieldNames: Fn,
                range: { from: 717, to: 1272 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: Mn,
                collectionSchema: K,
                fieldNames: In,
                range: { from: 1272, to: 1827 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Ln,
                range: { from: 1827, to: 2250 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Rn,
                range: { from: 2250, to: 2673 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: zn,
                range: { from: 2673, to: 2881 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Bn,
                range: { from: 2881, to: 7743 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Vn,
                range: { from: 7743, to: 14489 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Hn,
                range: { from: 14489, to: 15511 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Un,
                range: { from: 15511, to: 15768 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Wn,
                range: { from: 15768, to: 15971 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Gn,
                range: { from: 15971, to: 16237 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Kn,
                range: { from: 16237, to: 16471 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: qn,
                range: { from: 16471, to: 16705 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Jn,
                range: { from: 16705, to: 17043 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Yn,
                range: { from: 17043, to: 17444 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Xn,
                range: { from: 17444, to: 17854 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Zn,
                range: { from: 17854, to: 18219 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: Qn,
                range: { from: 18219, to: 48878 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new W({
                collation: q,
                collectionSchema: K,
                fieldNames: $n,
                range: { from: 48878, to: 49081 },
                url: new URL(
                  `./htcWKt0sa-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/SO904SMxwS2sQwkH9mcY/lt73E6AeqOsWLpSOtZ5g/htcWKt0sa.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: nr,
            resolveVectorSetItem: tr,
            schema: K,
          }),
        },
        displayName: `Blogs`,
        id: `e156fa96-d989-4549-a743-6caaf9d3d05c`,
      }),
      (ir = rr),
      A(rr, {
        yW9wJIWhQ: { defaultValue: ``, title: `Title`, type: j.String },
        wV3Lg9DPf: { preventLocalization: !1, title: `Slug`, type: j.String },
        nSn6tnLIf: { defaultValue: ``, title: `Category`, type: j.String },
        f9CDRrq2q: { title: `Thumbnail`, type: j.ResponsiveImage },
        TQYRSxw2j: { title: `Preview Image`, type: j.ResponsiveImage },
        Pxh5W1J4N: { defaultValue: ``, title: `Short Content`, type: j.String },
        TFwTvFHdo: { defaultValue: ``, title: `Time`, type: j.String },
        K5yLvY3ng: { title: `Date`, type: j.Date },
        xhWRV7cKr: {
          defaultValue: `Arhan Arif`,
          title: `Writer`,
          type: j.String,
        },
        VcmMRtnER: { defaultValue: ``, title: `Tag One`, type: j.String },
        CqkiVhTXg: { defaultValue: ``, title: `Tag Two`, type: j.String },
        Nh4I4ZOgq: { title: `Twitter Link`, type: j.Link },
        d6hKfZdLE: { title: `Facebook Link`, type: j.Link },
        MJ510YNn0: { title: `Instagram Link`, type: j.Link },
        M_p23E0Du: { title: `Dribbble Link`, type: j.Link },
        HAQIbKhGR: {
          defaultValue: ``,
          title: `Detail Content`,
          type: j.RichText,
        },
        Kqe_KxsfS: { defaultValue: 0, title: `Count`, type: j.Number },
        createdAt: { title: `Created`, type: j.Date },
        updatedAt: { title: `Updated`, type: j.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/htcWKt0sa:default`,
          title: `Previous`,
          type: j.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/htcWKt0sa:default`,
          title: `Next`,
          type: j.CollectionReference,
        },
      }));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var or,
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
  Y,
  Cr,
  wr = e(() => {
    (p(),
      M(),
      _(),
      o(),
      Xe(),
      De(),
      Ie(),
      Ye(),
      ze(),
      (or = w(he)),
      (sr = v(Qe)),
      (cr = v(Be)),
      (lr = { opWbx4P9x: { hover: !0 } }),
      (ur = [`opWbx4P9x`, `O45eXIdEK`]),
      (dr = `framer-4Dlzf`),
      (fr = { O45eXIdEK: `framer-v-156do09`, opWbx4P9x: `framer-v-1dvfggi` }),
      (pr = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (mr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (hr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (gr = (e, t) => `translateX(-50%) ${t}`),
      (_r = ({ value: e, children: t }) => {
        let n = d(g),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(g.Provider, { value: a, children: t });
      }),
      (vr = { Default: `opWbx4P9x`, Phone: `O45eXIdEK` }),
      (yr = h.create(n)),
      (br = (e, t) => {
        let [n, i] = r(e),
          [a, o] = r(e);
        return t ? [e, t] : (e !== a && (i(e), o(e)), [n, i]);
      }),
      (xr = ({
        height: e,
        id: t,
        link: n,
        scrollSection: r,
        shortContent: i,
        tagOne: a,
        tagTwo: o,
        thumbnail: s,
        time: c,
        title: l,
        width: u,
        ...d
      }) => ({
        ...d,
        bG3p1TEwf:
          i ??
          d.bG3p1TEwf ??
          `How modern brands can adapt, innovate, and scale in an ever-changing digital landscape.`,
        lR_BS68Vr: r ?? d.lR_BS68Vr,
        nLSp93sx5: s ??
          d.nLSp93sx5 ?? {
            alt: `image`,
            pixelHeight: 1056,
            pixelWidth: 1792,
            src: `https://framerusercontent.com/images/rkPRwH0bsM0Vqf0x9TjHEwUbfmU.webp?width=1792&height=1056`,
            srcSet: `https://framerusercontent.com/images/rkPRwH0bsM0Vqf0x9TjHEwUbfmU.webp?scale-down-to=512&width=1792&height=1056 512w,https://framerusercontent.com/images/rkPRwH0bsM0Vqf0x9TjHEwUbfmU.webp?scale-down-to=1024&width=1792&height=1056 1024w,https://framerusercontent.com/images/rkPRwH0bsM0Vqf0x9TjHEwUbfmU.webp?width=1792&height=1056 1792w`,
          },
        sfVXeIJjO: a ?? d.sfVXeIJjO ?? `Growth`,
        TZuLVTWG4: n ?? d.TZuLVTWG4,
        variant: vr[d.variant] ?? d.variant ?? `opWbx4P9x`,
        vKQUOWroJ: c ?? d.vKQUOWroJ ?? `5 min read`,
        xkFyfLP7D: o ?? d.xkFyfLP7D ?? `strategy`,
        zBGWNFB17: l ?? d.zBGWNFB17 ?? `The Future of Digital Growth`,
      })),
      (Sr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Y = y(
        s(function (e, t) {
          let r = ee(null),
            i = t ?? r,
            a = c(),
            { activeLocale: o, setLocale: s } = de(),
            l = me(),
            {
              style: u,
              className: d,
              layoutId: te,
              variant: p,
              nLSp93sx5: g,
              vKQUOWroJ: _,
              zBGWNFB17: v,
              bG3p1TEwf: y,
              sfVXeIJjO: ie,
              onsfVXeIJjOChange: S,
              xkFyfLP7D: ae,
              onxkFyfLP7DChange: w,
              TZuLVTWG4: T,
              lR_BS68Vr: se,
              ...E
            } = xr(e),
            [ce, le] = br(ie, S),
            [D, ue] = br(ae, w),
            {
              baseVariant: O,
              classNames: A,
              clearLoadingGesture: fe,
              gestureHandlers: pe,
              gestureVariant: j,
              isLoading: he,
              setGestureState: M,
              setVariant: ge,
              variants: N,
            } = oe({
              cycleOrder: ur,
              defaultVariant: `opWbx4P9x`,
              enabledGestures: lr,
              ref: i,
              variant: p,
              variantClassNames: fr,
            }),
            P = Sr(e, N),
            _e = x(dr, Le, Ze, Oe);
          return f(ne, {
            id: te ?? a,
            children: f(yr, {
              animate: N,
              initial: !1,
              children: f(_r, {
                value: pr,
                children: m(h.div, {
                  ...E,
                  ...pe,
                  className: x(_e, `framer-1dvfggi`, d, A),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  layoutDependency: P,
                  layoutId: `opWbx4P9x`,
                  ref: i,
                  style: {
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
                    ...u,
                  },
                  variants: {
                    "opWbx4P9x-hover": {
                      "--border-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                    },
                  },
                  ...J(
                    {
                      "opWbx4P9x-hover": { "data-framer-name": void 0 },
                      O45eXIdEK: { "data-framer-name": `Phone` },
                    },
                    O,
                    j,
                  ),
                  children: [
                    f(h.div, {
                      className: `framer-17dntjj`,
                      "data-framer-name": `Image-box`,
                      layoutDependency: P,
                      layoutId: `NtET_Y7wz`,
                      style: {
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 18,
                        borderTopRightRadius: 18,
                        boxShadow: `0px 103px 29px 0px rgba(0, 0, 0, 0), 0px 66px 26px 0px rgba(0, 0, 0, 0.04), 0px 37px 22px 0px rgba(0, 0, 0, 0.12), 0px 16px 16px 0px rgba(0, 0, 0, 0.21), 0px 4px 9px 0px rgba(0, 0, 0, 0.24)`,
                      },
                      children: f(or, {
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1.5,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 0,
                            },
                          },
                          {
                            ref: se,
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 0,
                            },
                          },
                        ],
                        __framer__transformTrigger: `onScrollTarget`,
                        __framer__transformViewportThreshold: 1,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        background: {
                          alt: `image`,
                          fit: `fill`,
                          intrinsicHeight: 1056,
                          intrinsicWidth: 1792,
                          loading: re((l?.y || 0) + 5 + 0 + 0),
                          pixelHeight: 1056,
                          pixelWidth: 1792,
                          sizes: `calc(${l?.width || `100vw`} - 10px)`,
                          ...mr(g),
                        },
                        className: `framer-fj79kb`,
                        "data-framer-name": `Image-box`,
                        layoutDependency: P,
                        layoutId: `gb9l3_sW5`,
                        style: { scale: 1 },
                        variants: { "opWbx4P9x-hover": { scale: 1.1 } },
                      }),
                    }),
                    m(h.div, {
                      className: `framer-1n7lnjh`,
                      "data-framer-name": `Info`,
                      layoutDependency: P,
                      layoutId: `BV5_WLHpA`,
                      children: [
                        f(C, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: f(h.p, {
                              className: `framer-styles-preset-1mk8z8h`,
                              "data-styles-preset": `sPvC_pCwb`,
                              dir: `auto`,
                              children: `5 min read`,
                            }),
                          }),
                          className: `framer-140267v`,
                          fonts: [`Inter`],
                          layoutDependency: P,
                          layoutId: `ItN7dZxuF`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        m(h.div, {
                          className: `framer-1wpi6mu`,
                          "data-framer-name": `Content-box`,
                          layoutDependency: P,
                          layoutId: `siYrcu736`,
                          children: [
                            f(C, {
                              __fromCanvasComponent: !0,
                              children: f(n, {
                                children: f(h.h6, {
                                  className: `framer-styles-preset-wlp658`,
                                  "data-styles-preset": `CqWmfM2lH`,
                                  dir: `auto`,
                                  children: `The Future of Digital Growth`,
                                }),
                              }),
                              className: `framer-nc5i5d`,
                              fonts: [`Inter`],
                              layoutDependency: P,
                              layoutId: `rvsODO1OQ`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(C, {
                              __fromCanvasComponent: !0,
                              children: f(n, {
                                children: f(h.p, {
                                  className: `framer-styles-preset-1tukh9k`,
                                  "data-styles-preset": `jDHitzL9y`,
                                  dir: `auto`,
                                  children: `How modern brands can adapt, innovate, and scale in an ever-changing digital landscape.`,
                                }),
                              }),
                              className: `framer-1sgsfsp`,
                              fonts: [`Inter`],
                              layoutDependency: P,
                              layoutId: `fvS2gpZ6V`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: y,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            m(h.div, {
                              className: `framer-1mtf7md`,
                              "data-framer-name": `Tags`,
                              layoutDependency: P,
                              layoutId: `swyqNsgjh`,
                              children: [
                                f(k, {
                                  height: 34,
                                  y:
                                    (l?.y || 0) +
                                    5 +
                                    284 +
                                    0 +
                                    109.6 +
                                    0 +
                                    144.6 +
                                    0,
                                  children: f(b, {
                                    className: `framer-ps0kfy-container`,
                                    layoutDependency: P,
                                    layoutId: `Ydbp0BplT-container`,
                                    nodeId: `Ydbp0BplT`,
                                    rendersWithMotion: !0,
                                    scopeId: `fP1vaj4Ys`,
                                    children: f(Qe, {
                                      E68hvb6b7: `var(--token-451e86b3-023f-4a7a-8418-dff3a2f7734e, rgb(205, 205, 205))`,
                                      G0ioNk51R: ce,
                                      H3aAxfyA3: `9px 10px 9px 10px`,
                                      height: `100%`,
                                      id: `Ydbp0BplT`,
                                      iijLKjEBG: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                      layoutId: `Ydbp0BplT`,
                                      onG0ioNk51RChange: le,
                                      TXO2R9TzR: `5px`,
                                      variant: hr(`HZqQEWd1Y`),
                                      width: `100%`,
                                      ...J(
                                        {
                                          "opWbx4P9x-hover": {
                                            E68hvb6b7: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                            iijLKjEBG: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                          },
                                        },
                                        O,
                                        j,
                                      ),
                                    }),
                                  }),
                                }),
                                f(h.div, {
                                  className: `framer-59ec6z`,
                                  "data-framer-name": `Dot`,
                                  layoutDependency: P,
                                  layoutId: `D52RAVMBb`,
                                  style: {
                                    backgroundColor: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                    borderBottomLeftRadius: `100%`,
                                    borderBottomRightRadius: `100%`,
                                    borderTopLeftRadius: `100%`,
                                    borderTopRightRadius: `100%`,
                                  },
                                }),
                                f(k, {
                                  height: 34,
                                  y:
                                    (l?.y || 0) +
                                    5 +
                                    284 +
                                    0 +
                                    109.6 +
                                    0 +
                                    144.6 +
                                    0,
                                  children: f(b, {
                                    className: `framer-7rq28n-container`,
                                    layoutDependency: P,
                                    layoutId: `yiX0hkXtT-container`,
                                    nodeId: `yiX0hkXtT`,
                                    rendersWithMotion: !0,
                                    scopeId: `fP1vaj4Ys`,
                                    children: f(Qe, {
                                      E68hvb6b7: `var(--token-451e86b3-023f-4a7a-8418-dff3a2f7734e, rgb(205, 205, 205))`,
                                      G0ioNk51R: D,
                                      H3aAxfyA3: `9px 10px 9px 10px`,
                                      height: `100%`,
                                      id: `yiX0hkXtT`,
                                      iijLKjEBG: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                      layoutId: `yiX0hkXtT`,
                                      onG0ioNk51RChange: ue,
                                      TXO2R9TzR: `5px`,
                                      variant: hr(`HZqQEWd1Y`),
                                      width: `100%`,
                                      ...J(
                                        {
                                          "opWbx4P9x-hover": {
                                            E68hvb6b7: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                                            iijLKjEBG: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                          },
                                        },
                                        O,
                                        j,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f(k, {
                      height: 46,
                      y: (l?.y || 0) + 118,
                      ...J(
                        {
                          O45eXIdEK: {
                            height: (l?.height || 476) - 0,
                            width: l?.width || `100vw`,
                            y: (l?.y || 0) + 0,
                          },
                        },
                        O,
                        j,
                      ),
                      children: f(b, {
                        className: `framer-fvip7z-container`,
                        layoutDependency: P,
                        layoutId: `cXaDeyMk2-container`,
                        nodeId: `cXaDeyMk2`,
                        rendersWithMotion: !0,
                        scopeId: `fP1vaj4Ys`,
                        style: { opacity: 1, scale: 0 },
                        transformTemplate: gr,
                        variants: {
                          "opWbx4P9x-hover": { opacity: 1, scale: 1 },
                          O45eXIdEK: { opacity: 0, scale: 1 },
                        },
                        ...J(
                          { O45eXIdEK: { transformTemplate: void 0 } },
                          O,
                          j,
                        ),
                        children: f(Be, {
                          AN8wZ6h6b: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                          Cya6RuIUy: !1,
                          evTCyulAI: T,
                          FRGXCszKE: `See Blog`,
                          height: `100%`,
                          id: `cXaDeyMk2`,
                          KS1OTpe12: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                          layoutId: `cXaDeyMk2`,
                          OubOSgTqz: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                          qV_NmyJVp: !1,
                          RnDkx60mf: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                          s5zVGHZrm: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                          variant: hr(`zphlO018I`),
                          VmYpdrASS: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                          w1blkKoqs: 100,
                          width: `100%`,
                          ...J(
                            {
                              O45eXIdEK: {
                                style: { height: `100%`, width: `100%` },
                              },
                            },
                            O,
                            j,
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
          `.framer-4Dlzf.framer-1u7c6kx, .framer-4Dlzf .framer-1u7c6kx { display: block; }`,
          `.framer-4Dlzf.framer-1dvfggi { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 5px 5px 27px 5px; position: relative; width: 458px; }`,
          `.framer-4Dlzf .framer-17dntjj { aspect-ratio: 1.696969696969697 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 264px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-4Dlzf .framer-fj79kb { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-4Dlzf .framer-1n7lnjh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 15px 0px 15px; position: relative; width: 100%; }`,
          `.framer-4Dlzf .framer-140267v, .framer-4Dlzf .framer-1sgsfsp { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-4Dlzf .framer-1wpi6mu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-4Dlzf .framer-nc5i5d { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-4Dlzf .framer-1mtf7md { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-4Dlzf .framer-ps0kfy-container, .framer-4Dlzf .framer-7rq28n-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-4Dlzf .framer-59ec6z { flex: none; height: 3px; overflow: visible; position: relative; width: 3px; }`,
          `.framer-4Dlzf .framer-fvip7z-container { flex: none; height: auto; left: 50%; position: absolute; top: 118px; width: auto; z-index: 1; }`,
          `.framer-4Dlzf.framer-v-156do09.framer-1dvfggi { cursor: unset; }`,
          `.framer-4Dlzf.framer-v-156do09 .framer-fvip7z-container { bottom: 0px; height: unset; left: 0px; right: 0px; top: 0px; width: unset; }`,
          ...Re,
          ...Je,
          ...Ee,
          `.framer-4Dlzf[data-border="true"]::after, .framer-4Dlzf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-4Dlzf`,
      )),
      (Cr = Y),
      (Y.displayName = `Blog Card`),
      (Y.defaultProps = { height: 476, width: 458 }),
      A(Y, {
        variant: {
          options: [`opWbx4P9x`, `O45eXIdEK`],
          optionTitles: [`Default`, `Phone`],
          title: `Variant`,
          type: j.Enum,
        },
        nLSp93sx5: {
          __defaultAssetReference: `data:framer/asset-reference,rkPRwH0bsM0Vqf0x9TjHEwUbfmU.webp?originalFilename=Ethereal+Lightscape+%281%29+1.png&width=1792&height=1056`,
          __vekterDefault: {
            alt: `image`,
            assetReference: `data:framer/asset-reference,rkPRwH0bsM0Vqf0x9TjHEwUbfmU.webp?originalFilename=Ethereal+Lightscape+%281%29+1.png&width=1792&height=1056`,
          },
          title: `Thumbnail`,
          type: j.ResponsiveImage,
        },
        vKQUOWroJ: {
          defaultValue: `5 min read`,
          displayTextArea: !1,
          title: `Time`,
          type: j.String,
        },
        onvKQUOWroJChange: { changes: `vKQUOWroJ`, type: j.ChangeHandler },
        zBGWNFB17: {
          defaultValue: `The Future of Digital Growth`,
          displayTextArea: !1,
          title: `Title`,
          type: j.String,
        },
        onzBGWNFB17Change: { changes: `zBGWNFB17`, type: j.ChangeHandler },
        bG3p1TEwf: {
          defaultValue: `How modern brands can adapt, innovate, and scale in an ever-changing digital landscape.`,
          displayTextArea: !1,
          title: `Short Content`,
          type: j.String,
        },
        onbG3p1TEwfChange: { changes: `bG3p1TEwf`, type: j.ChangeHandler },
        sfVXeIJjO: {
          defaultValue: `Growth`,
          displayTextArea: !1,
          title: `Tag One`,
          type: j.String,
        },
        onsfVXeIJjOChange: { changes: `sfVXeIJjO`, type: j.ChangeHandler },
        xkFyfLP7D: {
          defaultValue: `strategy`,
          displayTextArea: !1,
          title: `Tag Two`,
          type: j.String,
        },
        onxkFyfLP7DChange: { changes: `xkFyfLP7D`, type: j.ChangeHandler },
        TZuLVTWG4: { title: `Link`, type: j.Link },
        lR_BS68Vr: { title: `Scroll Section`, type: j.ScrollSectionRef },
      }),
      ie(
        Y,
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
          ...sr,
          ...cr,
          ...T(Fe),
          ...T(qe),
          ...T(Te),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Y.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([S(Qe, {}, t), S(Be, {}, t)])
        ),
      }));
  });
function Tr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  X,
  Ir = e(() => {
    (p(),
      M(),
      _(),
      o(),
      De(),
      (Er = [`fQGDqSGpf`, `NyLqDGhNZ`]),
      (Dr = `framer-u4vXd`),
      (Or = { fQGDqSGpf: `framer-v-1dxzkzq`, NyLqDGhNZ: `framer-v-eg6w5v` }),
      (kr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ar = ({ value: e, children: t }) => {
        let n = d(g),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(g.Provider, { value: a, children: t });
      }),
      (jr = { Active: `NyLqDGhNZ`, Default: `fQGDqSGpf` }),
      (Mr = h.create(n)),
      (Nr = ({ click: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        EYuIw1G8Y: r ?? a.EYuIw1G8Y ?? `All`,
        N1lKBm5HF: e ?? a.N1lKBm5HF,
        variant: jr[a.variant] ?? a.variant ?? `fQGDqSGpf`,
      })),
      (Pr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Fr = y(
        s(function (e, t) {
          let r = ee(null),
            i = t ?? r,
            a = c(),
            { activeLocale: o, setLocale: s } = de();
          me();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: te,
              EYuIw1G8Y: p,
              N1lKBm5HF: m,
              ...g
            } = Nr(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: re,
              isLoading: ie,
              setGestureState: S,
              setVariant: ae,
              variants: w,
            } = oe({
              cycleOrder: Er,
              defaultVariant: `fQGDqSGpf`,
              ref: i,
              variant: te,
              variantClassNames: Or,
            }),
            T = Pr(e, w),
            { activeVariantCallback: se, delay: E } = ce(_),
            le = se(async (...e) => {
              if ((S({ isPressed: !1 }), m && (await m(...e)) === !1))
                return !1;
            }),
            D = x(Dr, Oe);
          return f(ne, {
            id: d ?? a,
            children: f(Mr, {
              animate: w,
              initial: !1,
              children: f(Ar, {
                value: kr,
                children: f(h.button, {
                  ...g,
                  ...b,
                  className: x(D, `framer-1dxzkzq`, u, v),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: T,
                  layoutId: `fQGDqSGpf`,
                  onTap: le,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-451e86b3-023f-4a7a-8418-dff3a2f7734e, rgb(205, 205, 205))`,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    ...l,
                  },
                  variants: {
                    NyLqDGhNZ: {
                      backgroundColor: `var(--token-18c0a90f-4c91-40d5-87bc-96696572c777, rgb(0, 0, 0))`,
                    },
                  },
                  ...Tr({ NyLqDGhNZ: { "data-framer-name": `Active` } }, _, re),
                  children: f(C, {
                    __fromCanvasComponent: !0,
                    children: f(n, {
                      children: f(h.p, {
                        className: `framer-styles-preset-1tukh9k`,
                        "data-styles-preset": `jDHitzL9y`,
                        dir: `auto`,
                        children: `All`,
                      }),
                    }),
                    className: `framer-or5bai`,
                    fonts: [`Inter`],
                    layoutDependency: T,
                    layoutId: `ucu4EjopE`,
                    style: {
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: p,
                    variants: {
                      NyLqDGhNZ: {
                        "--extracted-r6o4lv": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Tr(
                      {
                        NyLqDGhNZ: {
                          children: f(n, {
                            children: f(h.p, {
                              className: `framer-styles-preset-1tukh9k`,
                              "data-styles-preset": `jDHitzL9y`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)))`,
                              },
                              children: `All`,
                            }),
                          }),
                        },
                      },
                      _,
                      re,
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-u4vXd.framer-itc4gm, .framer-u4vXd .framer-itc4gm { display: block; }`,
          `.framer-u4vXd.framer-1dxzkzq { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-u4vXd .framer-or5bai { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Ee,
        ],
        `framer-u4vXd`,
      )),
      (X = Fr),
      (Fr.displayName = `Tab Button`),
      (Fr.defaultProps = { height: 42, width: 42 }),
      A(Fr, {
        variant: {
          options: [`fQGDqSGpf`, `NyLqDGhNZ`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: j.Enum,
        },
        EYuIw1G8Y: {
          defaultValue: `All`,
          displayTextArea: !1,
          title: `Title`,
          type: j.String,
        },
        onEYuIw1G8YChange: { changes: `EYuIw1G8Y`, type: j.ChangeHandler },
        N1lKBm5HF: { title: `Click`, type: j.EventHandler },
      }),
      ie(
        Fr,
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
          ...T(Te),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Q,
  Kr,
  qr,
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
  $,
  oi,
  si = e(() => {
    (p(),
      M(),
      _(),
      o(),
      ar(),
      je(),
      wr(),
      Ir(),
      (Lr = v(X)),
      (Rr = w(h.div)),
      (zr = v(Cr)),
      (Br = [
        `aWY4yudgc`,
        `BQ1MaPEyu`,
        `URsfOZSCF`,
        `E2tHnuYqm`,
        `umK7icfDb`,
        `xNddtL39d`,
        `OC3UzgbD1`,
        `wVs_wHWHo`,
        `ZKA1o06sE`,
        `JtuUHNiKF`,
        `U9I1sOtWB`,
        `nia2SWadC`,
        `KJmSXWLHS`,
        `w7nmVlC2n`,
        `RCx0Ch9je`,
      ]),
      (Vr = `framer-qDmom`),
      (Hr = {
        aWY4yudgc: `framer-v-soxs4q`,
        BQ1MaPEyu: `framer-v-1326ofu`,
        E2tHnuYqm: `framer-v-937ryi`,
        JtuUHNiKF: `framer-v-1uvxpex`,
        KJmSXWLHS: `framer-v-1dzb4f`,
        nia2SWadC: `framer-v-1f1v175`,
        OC3UzgbD1: `framer-v-49hjeu`,
        RCx0Ch9je: `framer-v-1vt8v55`,
        U9I1sOtWB: `framer-v-2xf9rl`,
        umK7icfDb: `framer-v-jvdca3`,
        URsfOZSCF: `framer-v-wwqi94`,
        w7nmVlC2n: `framer-v-afn46r`,
        wVs_wHWHo: `framer-v-1vdsd8s`,
        xNddtL39d: `framer-v-1dljvhg`,
        ZKA1o06sE: `framer-v-1miu08v`,
      }),
      (Ur = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Wr = {
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
      (Gr = {
        damping: 150,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`,
      }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Kr = {
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
      (qr = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
      (Jr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Yr = () => ({
        from: { alias: `JxY3dxaOS`, data: ir, type: `Collection` },
        select: [
          { collection: `JxY3dxaOS`, name: `f9CDRrq2q`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `TFwTvFHdo`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `yW9wJIWhQ`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `Pxh5W1J4N`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `VcmMRtnER`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `CqkiVhTXg`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `wV3Lg9DPf`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `id`, type: `Identifier` },
        ],
      })),
      (Xr = () => ({
        from: { alias: `JxY3dxaOS`, data: ir, type: `Collection` },
        select: [
          { collection: `JxY3dxaOS`, name: `f9CDRrq2q`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `TFwTvFHdo`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `yW9wJIWhQ`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `Pxh5W1J4N`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `VcmMRtnER`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `CqkiVhTXg`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `wV3Lg9DPf`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            collection: `JxY3dxaOS`,
            name: `nSn6tnLIf`,
            type: `Identifier`,
          },
          operator: `==`,
          right: { type: `LiteralValue`, value: `Design` },
          type: `BinaryOperation`,
        },
      })),
      (Zr = () => ({
        from: { alias: `JxY3dxaOS`, data: ir, type: `Collection` },
        select: [
          { collection: `JxY3dxaOS`, name: `f9CDRrq2q`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `TFwTvFHdo`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `yW9wJIWhQ`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `Pxh5W1J4N`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `VcmMRtnER`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `CqkiVhTXg`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `wV3Lg9DPf`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            collection: `JxY3dxaOS`,
            name: `nSn6tnLIf`,
            type: `Identifier`,
          },
          operator: `==`,
          right: { type: `LiteralValue`, value: `AI` },
          type: `BinaryOperation`,
        },
      })),
      (Qr = () => ({
        from: { alias: `JxY3dxaOS`, data: ir, type: `Collection` },
        select: [
          { collection: `JxY3dxaOS`, name: `f9CDRrq2q`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `TFwTvFHdo`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `yW9wJIWhQ`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `Pxh5W1J4N`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `VcmMRtnER`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `CqkiVhTXg`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `wV3Lg9DPf`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            collection: `JxY3dxaOS`,
            name: `nSn6tnLIf`,
            type: `Identifier`,
          },
          operator: `==`,
          right: { type: `LiteralValue`, value: `UX` },
          type: `BinaryOperation`,
        },
      })),
      ($r = () => ({
        from: { alias: `JxY3dxaOS`, data: ir, type: `Collection` },
        select: [
          { collection: `JxY3dxaOS`, name: `f9CDRrq2q`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `TFwTvFHdo`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `yW9wJIWhQ`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `Pxh5W1J4N`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `VcmMRtnER`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `CqkiVhTXg`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `wV3Lg9DPf`, type: `Identifier` },
          { collection: `JxY3dxaOS`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            collection: `JxY3dxaOS`,
            name: `nSn6tnLIf`,
            type: `Identifier`,
          },
          operator: `==`,
          right: { type: `LiteralValue`, value: `Website` },
          type: `BinaryOperation`,
        },
      })),
      (ei = ({ query: e, pageSize: t, children: n }) => n(be(e))),
      (ti = ({ value: e, children: t }) => {
        let n = d(g),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(g.Provider, { value: a, children: t });
      }),
      (ni = {
        "Blogs-v1": `aWY4yudgc`,
        "Blogs-v2": `BQ1MaPEyu`,
        "Blogs-v3": `URsfOZSCF`,
        "Blogs-v4": `E2tHnuYqm`,
        "Blogs-v5": `umK7icfDb`,
        "Phone-v1": `U9I1sOtWB`,
        "Phone-v2": `nia2SWadC`,
        "Phone-v3": `KJmSXWLHS`,
        "Phone-v4": `w7nmVlC2n`,
        "Phone-v5": `RCx0Ch9je`,
        "Tablet-v1": `xNddtL39d`,
        "Tablet-v2": `OC3UzgbD1`,
        "Tablet-v3": `wVs_wHWHo`,
        "Tablet-v4": `ZKA1o06sE`,
        "Tablet-v5": `JtuUHNiKF`,
      }),
      (ri = h.create(n)),
      (ii = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ni[r.variant] ?? r.variant ?? `aWY4yudgc`,
      })),
      (ai = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      ($ = y(
        s(function (e, t) {
          let r = ee(null),
            i = t ?? r,
            a = c(),
            { activeLocale: o, setLocale: s } = de(),
            u = me(),
            { style: d, className: te, layoutId: p, variant: g, ..._ } = ii(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: re,
              gestureHandlers: ie,
              gestureVariant: S,
              isLoading: ae,
              setGestureState: w,
              setVariant: T,
              variants: se,
            } = oe({
              cycleOrder: Br,
              defaultVariant: `aWY4yudgc`,
              ref: i,
              variant: g,
              variantClassNames: Hr,
            }),
            E = ai(e, se),
            { activeVariantCallback: D, delay: ue } = ce(v),
            O = D(async (...e) => {
              T(`aWY4yudgc`);
            }),
            A = D(async (...e) => {
              T(`xNddtL39d`);
            }),
            fe = D(async (...e) => {
              T(`U9I1sOtWB`);
            }),
            j = D(async (...e) => {
              T(`BQ1MaPEyu`);
            }),
            he = D(async (...e) => {
              T(`OC3UzgbD1`);
            }),
            M = D(async (...e) => {
              T(`nia2SWadC`);
            }),
            ge = D(async (...e) => {
              T(`URsfOZSCF`);
            }),
            N = D(async (...e) => {
              T(`wVs_wHWHo`);
            }),
            P = D(async (...e) => {
              T(`KJmSXWLHS`);
            }),
            _e = D(async (...e) => {
              T(`E2tHnuYqm`);
            }),
            F = D(async (...e) => {
              T(`ZKA1o06sE`);
            }),
            be = D(async (...e) => {
              T(`w7nmVlC2n`);
            }),
            xe = D(async (...e) => {
              T(`umK7icfDb`);
            }),
            Se = D(async (...e) => {
              T(`JtuUHNiKF`);
            }),
            Ce = D(async (...e) => {
              T(`RCx0Ch9je`);
            }),
            we = x(Vr, Pe);
          return (
            ye(),
            f(ne, {
              id: p ?? a,
              children: f(ri, {
                animate: se,
                initial: !1,
                children: f(ti, {
                  value: Ur,
                  children: m(h.div, {
                    ..._,
                    ...ie,
                    className: x(we, `framer-soxs4q`, te, y),
                    "data-framer-name": `Blogs-v1`,
                    layoutDependency: E,
                    layoutId: `aWY4yudgc`,
                    ref: i,
                    style: { ...d },
                    ...Z(
                      {
                        BQ1MaPEyu: { "data-framer-name": `Blogs-v2` },
                        E2tHnuYqm: { "data-framer-name": `Blogs-v4` },
                        JtuUHNiKF: { "data-framer-name": `Tablet-v5` },
                        KJmSXWLHS: { "data-framer-name": `Phone-v3` },
                        nia2SWadC: { "data-framer-name": `Phone-v2` },
                        OC3UzgbD1: { "data-framer-name": `Tablet-v2` },
                        RCx0Ch9je: { "data-framer-name": `Phone-v5` },
                        U9I1sOtWB: { "data-framer-name": `Phone-v1` },
                        umK7icfDb: { "data-framer-name": `Blogs-v5` },
                        URsfOZSCF: { "data-framer-name": `Blogs-v3` },
                        w7nmVlC2n: { "data-framer-name": `Phone-v4` },
                        wVs_wHWHo: { "data-framer-name": `Tablet-v3` },
                        xNddtL39d: { "data-framer-name": `Tablet-v1` },
                        ZKA1o06sE: { "data-framer-name": `Tablet-v4` },
                      },
                      v,
                      S,
                    ),
                    children: [
                      f(Rr, {
                        __framer__animate: { transition: Gr },
                        __framer__animateOnce: !0,
                        __framer__enter: Wr,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1l0b6ry`,
                        "data-framer-name": `Tab-grid`,
                        layoutDependency: E,
                        layoutId: `cnOToHfUf`,
                        children: m(h.div, {
                          className: `framer-2h8hu2`,
                          "data-framer-name": `Tabs`,
                          layoutDependency: E,
                          layoutId: `BVAsNFpMW`,
                          children: [
                            f(C, {
                              __fromCanvasComponent: !0,
                              children: f(n, {
                                children: f(h.p, {
                                  className: `framer-styles-preset-rn7xf9`,
                                  "data-styles-preset": `uyfn5rCXc`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123)))`,
                                  },
                                  children: `Category`,
                                }),
                              }),
                              className: `framer-1mbnu9a`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `Vs17ziy8d`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-f00053a4-7d8d-4fca-8562-0cfc0c695056, rgb(123, 123, 123))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            m(h.div, {
                              className: `framer-1dc9zqq`,
                              "data-framer-name": `Buttons`,
                              layoutDependency: E,
                              layoutId: `UTBPzFM7Q`,
                              children: [
                                f(k, {
                                  height: 42,
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    (((u?.height || 1457) - 0 - 1541) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0,
                                  ...Z(
                                    {
                                      BQ1MaPEyu: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 493) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      E2tHnuYqm: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      JtuUHNiKF: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      KJmSXWLHS: { y: void 0 },
                                      nia2SWadC: { y: void 0 },
                                      OC3UzgbD1: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      RCx0Ch9je: { y: void 0 },
                                      U9I1sOtWB: { y: void 0 },
                                      umK7icfDb: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      URsfOZSCF: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      w7nmVlC2n: { y: void 0 },
                                      wVs_wHWHo: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      xNddtL39d: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      ZKA1o06sE: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    v,
                                    S,
                                  ),
                                  children: f(b, {
                                    className: `framer-1bgs1z0-container`,
                                    layoutDependency: E,
                                    layoutId: `zpW3kWZ3d-container`,
                                    nodeId: `zpW3kWZ3d`,
                                    rendersWithMotion: !0,
                                    scopeId: `I9X7qw0Fr`,
                                    children: f(X, {
                                      EYuIw1G8Y: `All`,
                                      height: `100%`,
                                      id: `zpW3kWZ3d`,
                                      layoutId: `zpW3kWZ3d`,
                                      variant: Q(`NyLqDGhNZ`),
                                      width: `100%`,
                                      ...Z(
                                        {
                                          BQ1MaPEyu: {
                                            N1lKBm5HF: O,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                          E2tHnuYqm: {
                                            N1lKBm5HF: O,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                          JtuUHNiKF: {
                                            N1lKBm5HF: A,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                          KJmSXWLHS: {
                                            N1lKBm5HF: fe,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                          nia2SWadC: {
                                            N1lKBm5HF: fe,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                          OC3UzgbD1: {
                                            N1lKBm5HF: A,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                          RCx0Ch9je: {
                                            N1lKBm5HF: fe,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                          umK7icfDb: {
                                            N1lKBm5HF: O,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                          URsfOZSCF: {
                                            N1lKBm5HF: O,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                          w7nmVlC2n: {
                                            N1lKBm5HF: fe,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                          wVs_wHWHo: {
                                            N1lKBm5HF: A,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                          ZKA1o06sE: {
                                            N1lKBm5HF: A,
                                            variant: Q(`fQGDqSGpf`),
                                          },
                                        },
                                        v,
                                        S,
                                      ),
                                    }),
                                  }),
                                }),
                                f(k, {
                                  height: 42,
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    (((u?.height || 1457) - 0 - 1541) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0,
                                  ...Z(
                                    {
                                      BQ1MaPEyu: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 493) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      E2tHnuYqm: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      JtuUHNiKF: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      KJmSXWLHS: { y: void 0 },
                                      nia2SWadC: { y: void 0 },
                                      OC3UzgbD1: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      RCx0Ch9je: { y: void 0 },
                                      U9I1sOtWB: { y: void 0 },
                                      umK7icfDb: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      URsfOZSCF: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      w7nmVlC2n: { y: void 0 },
                                      wVs_wHWHo: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      xNddtL39d: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      ZKA1o06sE: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    v,
                                    S,
                                  ),
                                  children: f(b, {
                                    className: `framer-9x9mzw-container`,
                                    layoutDependency: E,
                                    layoutId: `kYBdHuN4q-container`,
                                    nodeId: `kYBdHuN4q`,
                                    rendersWithMotion: !0,
                                    scopeId: `I9X7qw0Fr`,
                                    children: f(X, {
                                      EYuIw1G8Y: `Design`,
                                      height: `100%`,
                                      id: `kYBdHuN4q`,
                                      layoutId: `kYBdHuN4q`,
                                      N1lKBm5HF: j,
                                      variant: Q(`fQGDqSGpf`),
                                      width: `100%`,
                                      ...Z(
                                        {
                                          BQ1MaPEyu: {
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                          JtuUHNiKF: { N1lKBm5HF: he },
                                          KJmSXWLHS: { N1lKBm5HF: M },
                                          nia2SWadC: {
                                            N1lKBm5HF: void 0,
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                          OC3UzgbD1: {
                                            N1lKBm5HF: void 0,
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                          RCx0Ch9je: { N1lKBm5HF: M },
                                          U9I1sOtWB: { N1lKBm5HF: M },
                                          w7nmVlC2n: { N1lKBm5HF: M },
                                          wVs_wHWHo: { N1lKBm5HF: he },
                                          xNddtL39d: { N1lKBm5HF: he },
                                          ZKA1o06sE: { N1lKBm5HF: he },
                                        },
                                        v,
                                        S,
                                      ),
                                    }),
                                  }),
                                }),
                                f(k, {
                                  height: 42,
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    (((u?.height || 1457) - 0 - 1541) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0,
                                  ...Z(
                                    {
                                      BQ1MaPEyu: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 493) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      E2tHnuYqm: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      JtuUHNiKF: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      KJmSXWLHS: { y: void 0 },
                                      nia2SWadC: { y: void 0 },
                                      OC3UzgbD1: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      RCx0Ch9je: { y: void 0 },
                                      U9I1sOtWB: { y: void 0 },
                                      umK7icfDb: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      URsfOZSCF: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      w7nmVlC2n: { y: void 0 },
                                      wVs_wHWHo: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      xNddtL39d: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      ZKA1o06sE: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    v,
                                    S,
                                  ),
                                  children: f(b, {
                                    className: `framer-a17d8j-container`,
                                    layoutDependency: E,
                                    layoutId: `yF8MTniEW-container`,
                                    nodeId: `yF8MTniEW`,
                                    rendersWithMotion: !0,
                                    scopeId: `I9X7qw0Fr`,
                                    children: f(X, {
                                      EYuIw1G8Y: `AI`,
                                      height: `100%`,
                                      id: `yF8MTniEW`,
                                      layoutId: `yF8MTniEW`,
                                      N1lKBm5HF: ge,
                                      variant: Q(`fQGDqSGpf`),
                                      width: `100%`,
                                      ...Z(
                                        {
                                          JtuUHNiKF: { N1lKBm5HF: N },
                                          KJmSXWLHS: {
                                            N1lKBm5HF: void 0,
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                          nia2SWadC: { N1lKBm5HF: P },
                                          OC3UzgbD1: { N1lKBm5HF: N },
                                          RCx0Ch9je: { N1lKBm5HF: P },
                                          U9I1sOtWB: { N1lKBm5HF: P },
                                          URsfOZSCF: {
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                          w7nmVlC2n: { N1lKBm5HF: P },
                                          wVs_wHWHo: {
                                            N1lKBm5HF: void 0,
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                          xNddtL39d: { N1lKBm5HF: N },
                                          ZKA1o06sE: { N1lKBm5HF: N },
                                        },
                                        v,
                                        S,
                                      ),
                                    }),
                                  }),
                                }),
                                f(k, {
                                  height: 42,
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    (((u?.height || 1457) - 0 - 1541) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0,
                                  ...Z(
                                    {
                                      BQ1MaPEyu: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 493) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      E2tHnuYqm: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      JtuUHNiKF: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      KJmSXWLHS: { y: void 0 },
                                      nia2SWadC: { y: void 0 },
                                      OC3UzgbD1: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      RCx0Ch9je: { y: void 0 },
                                      U9I1sOtWB: { y: void 0 },
                                      umK7icfDb: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      URsfOZSCF: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      w7nmVlC2n: { y: void 0 },
                                      wVs_wHWHo: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      xNddtL39d: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      ZKA1o06sE: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    v,
                                    S,
                                  ),
                                  children: f(b, {
                                    className: `framer-19uov0y-container`,
                                    layoutDependency: E,
                                    layoutId: `EvJ9PHlIO-container`,
                                    nodeId: `EvJ9PHlIO`,
                                    rendersWithMotion: !0,
                                    scopeId: `I9X7qw0Fr`,
                                    children: f(X, {
                                      EYuIw1G8Y: `UX`,
                                      height: `100%`,
                                      id: `EvJ9PHlIO`,
                                      layoutId: `EvJ9PHlIO`,
                                      N1lKBm5HF: _e,
                                      variant: Q(`fQGDqSGpf`),
                                      width: `100%`,
                                      ...Z(
                                        {
                                          E2tHnuYqm: {
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                          JtuUHNiKF: { N1lKBm5HF: F },
                                          KJmSXWLHS: { N1lKBm5HF: be },
                                          nia2SWadC: { N1lKBm5HF: be },
                                          OC3UzgbD1: { N1lKBm5HF: F },
                                          RCx0Ch9je: { N1lKBm5HF: be },
                                          U9I1sOtWB: { N1lKBm5HF: be },
                                          w7nmVlC2n: {
                                            N1lKBm5HF: void 0,
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                          wVs_wHWHo: { N1lKBm5HF: F },
                                          xNddtL39d: { N1lKBm5HF: F },
                                          ZKA1o06sE: {
                                            N1lKBm5HF: void 0,
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                        },
                                        v,
                                        S,
                                      ),
                                    }),
                                  }),
                                }),
                                f(k, {
                                  height: 42,
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    (((u?.height || 1457) - 0 - 1541) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0,
                                  ...Z(
                                    {
                                      BQ1MaPEyu: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 493) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      E2tHnuYqm: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      JtuUHNiKF: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      KJmSXWLHS: { y: void 0 },
                                      nia2SWadC: { y: void 0 },
                                      OC3UzgbD1: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      RCx0Ch9je: { y: void 0 },
                                      U9I1sOtWB: { y: void 0 },
                                      umK7icfDb: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      URsfOZSCF: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 563) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      w7nmVlC2n: { y: void 0 },
                                      wVs_wHWHo: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      xNddtL39d: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      ZKA1o06sE: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          (((u?.height || 200) - 0 - 2543) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    v,
                                    S,
                                  ),
                                  children: f(b, {
                                    className: `framer-nv0dlp-container`,
                                    layoutDependency: E,
                                    layoutId: `GEJ_xOCGv-container`,
                                    nodeId: `GEJ_xOCGv`,
                                    rendersWithMotion: !0,
                                    scopeId: `I9X7qw0Fr`,
                                    children: f(X, {
                                      EYuIw1G8Y: `Website`,
                                      height: `100%`,
                                      id: `GEJ_xOCGv`,
                                      layoutId: `GEJ_xOCGv`,
                                      N1lKBm5HF: xe,
                                      variant: Q(`fQGDqSGpf`),
                                      width: `100%`,
                                      ...Z(
                                        {
                                          JtuUHNiKF: {
                                            N1lKBm5HF: void 0,
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                          KJmSXWLHS: { N1lKBm5HF: Ce },
                                          nia2SWadC: { N1lKBm5HF: Ce },
                                          OC3UzgbD1: { N1lKBm5HF: Se },
                                          RCx0Ch9je: {
                                            N1lKBm5HF: void 0,
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                          U9I1sOtWB: { N1lKBm5HF: Ce },
                                          umK7icfDb: {
                                            variant: Q(`NyLqDGhNZ`),
                                          },
                                          w7nmVlC2n: { N1lKBm5HF: Ce },
                                          wVs_wHWHo: { N1lKBm5HF: Se },
                                          xNddtL39d: { N1lKBm5HF: Se },
                                          ZKA1o06sE: { N1lKBm5HF: Se },
                                        },
                                        v,
                                        S,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      f(h.div, {
                        className: `framer-1tzhdcm`,
                        layoutDependency: E,
                        layoutId: `JxY3dxaOS`,
                        children: f(pe, {
                          children: f(ei, {
                            query: Yr(),
                            ...Z(
                              {
                                BQ1MaPEyu: { query: Xr() },
                                E2tHnuYqm: { query: Qr() },
                                umK7icfDb: { query: $r() },
                                URsfOZSCF: { query: Zr() },
                              },
                              v,
                              S,
                            ),
                            children: (e, t, n) =>
                              f(l, {
                                children: e?.map(
                                  (
                                    {
                                      CqkiVhTXg: e,
                                      f9CDRrq2q: t,
                                      id: n,
                                      Pxh5W1J4N: r,
                                      TFwTvFHdo: i,
                                      VcmMRtnER: a,
                                      wV3Lg9DPf: o,
                                      yW9wJIWhQ: s,
                                    },
                                    c,
                                  ) => (
                                    (i ??= ``),
                                    (s ??= ``),
                                    (r ??= ``),
                                    (a ??= ``),
                                    (e ??= ``),
                                    (o ??= ``),
                                    f(
                                      ne,
                                      {
                                        id: `JxY3dxaOS-${n}`,
                                        children: f(le.Provider, {
                                          value: { wV3Lg9DPf: o },
                                          children: f(Rr, {
                                            __framer__animate: {
                                              transition: qr(Gr, c * 0.1),
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Kr,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            className: `framer-1i2n6yt`,
                                            layoutDependency: E,
                                            layoutId: `f0PDzKts_`,
                                            children: f(ve, {
                                              links: [
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: {
                                                      wV3Lg9DPf: o,
                                                    },
                                                    webPageId: `fJe50lzzQ`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (n) =>
                                                f(k, {
                                                  height: 477,
                                                  width: `max(max((${u?.width || `100vw`} - 20px) / 3, 50px), 1px)`,
                                                  y:
                                                    (u?.y || 0) +
                                                    0 +
                                                    (((u?.height || 1457) -
                                                      0 -
                                                      1541) /
                                                      2 +
                                                      42 +
                                                      20) +
                                                    0 +
                                                    0 +
                                                    0,
                                                  ...Z(
                                                    {
                                                      BQ1MaPEyu: {
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 493) -
                                                            0 -
                                                            563) /
                                                            2 +
                                                            42 +
                                                            20) +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      E2tHnuYqm: {
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 200) -
                                                            0 -
                                                            563) /
                                                            2 +
                                                            42 +
                                                            20) +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      JtuUHNiKF: {
                                                        width: `max(max((${u?.width || `100vw`} - 10px) / 2, 50px), 1px)`,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 200) -
                                                            0 -
                                                            2543) /
                                                            2 +
                                                            42 +
                                                            20) +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      KJmSXWLHS: {
                                                        width: `max(max(${u?.width || `100vw`}, 50px), 1px)`,
                                                        y: void 0,
                                                      },
                                                      nia2SWadC: {
                                                        width: `max(max(${u?.width || `100vw`}, 50px), 1px)`,
                                                        y: void 0,
                                                      },
                                                      OC3UzgbD1: {
                                                        width: `max(max((${u?.width || `100vw`} - 10px) / 2, 50px), 1px)`,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 200) -
                                                            0 -
                                                            2543) /
                                                            2 +
                                                            42 +
                                                            20) +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      RCx0Ch9je: {
                                                        width: `max(max(${u?.width || `100vw`}, 50px), 1px)`,
                                                        y: void 0,
                                                      },
                                                      U9I1sOtWB: {
                                                        width: `max(max(${u?.width || `100vw`}, 50px), 1px)`,
                                                        y: void 0,
                                                      },
                                                      umK7icfDb: {
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 200) -
                                                            0 -
                                                            563) /
                                                            2 +
                                                            42 +
                                                            20) +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      URsfOZSCF: {
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 200) -
                                                            0 -
                                                            563) /
                                                            2 +
                                                            42 +
                                                            20) +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      w7nmVlC2n: {
                                                        width: `max(max(${u?.width || `100vw`}, 50px), 1px)`,
                                                        y: void 0,
                                                      },
                                                      wVs_wHWHo: {
                                                        width: `max(max((${u?.width || `100vw`} - 10px) / 2, 50px), 1px)`,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 200) -
                                                            0 -
                                                            2543) /
                                                            2 +
                                                            42 +
                                                            20) +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      xNddtL39d: {
                                                        width: `max(max((${u?.width || `100vw`} - 10px) / 2, 50px), 1px)`,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 200) -
                                                            0 -
                                                            2543) /
                                                            2 +
                                                            42 +
                                                            20) +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      ZKA1o06sE: {
                                                        width: `max(max((${u?.width || `100vw`} - 10px) / 2, 50px), 1px)`,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 200) -
                                                            0 -
                                                            2543) /
                                                            2 +
                                                            42 +
                                                            20) +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                    },
                                                    v,
                                                    S,
                                                  ),
                                                  children: f(b, {
                                                    className: `framer-1uoq72x-container`,
                                                    layoutDependency: E,
                                                    layoutId: `XH4edcV2v-container`,
                                                    nodeId: `XH4edcV2v`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `I9X7qw0Fr`,
                                                    children: f(Cr, {
                                                      bG3p1TEwf: r,
                                                      height: `100%`,
                                                      id: `XH4edcV2v`,
                                                      layoutId: `XH4edcV2v`,
                                                      nLSp93sx5: Jr(t),
                                                      sfVXeIJjO: a,
                                                      style: { width: `100%` },
                                                      TZuLVTWG4: n[0],
                                                      variant: Q(`opWbx4P9x`),
                                                      vKQUOWroJ: i,
                                                      width: `100%`,
                                                      xkFyfLP7D: e,
                                                      zBGWNFB17: s,
                                                      ...Z(
                                                        {
                                                          BQ1MaPEyu: {
                                                            TZuLVTWG4: n[1],
                                                          },
                                                          E2tHnuYqm: {
                                                            TZuLVTWG4: n[3],
                                                          },
                                                          JtuUHNiKF: {
                                                            TZuLVTWG4: n[9],
                                                            variant:
                                                              Q(`O45eXIdEK`),
                                                          },
                                                          KJmSXWLHS: {
                                                            TZuLVTWG4: n[12],
                                                            variant:
                                                              Q(`O45eXIdEK`),
                                                          },
                                                          nia2SWadC: {
                                                            TZuLVTWG4: n[11],
                                                            variant:
                                                              Q(`O45eXIdEK`),
                                                          },
                                                          OC3UzgbD1: {
                                                            TZuLVTWG4: n[6],
                                                            variant:
                                                              Q(`O45eXIdEK`),
                                                          },
                                                          RCx0Ch9je: {
                                                            TZuLVTWG4: n[14],
                                                            variant:
                                                              Q(`O45eXIdEK`),
                                                          },
                                                          U9I1sOtWB: {
                                                            TZuLVTWG4: n[10],
                                                            variant:
                                                              Q(`O45eXIdEK`),
                                                          },
                                                          umK7icfDb: {
                                                            TZuLVTWG4: n[4],
                                                          },
                                                          URsfOZSCF: {
                                                            TZuLVTWG4: n[2],
                                                          },
                                                          w7nmVlC2n: {
                                                            TZuLVTWG4: n[13],
                                                            variant:
                                                              Q(`O45eXIdEK`),
                                                          },
                                                          wVs_wHWHo: {
                                                            TZuLVTWG4: n[7],
                                                            variant:
                                                              Q(`O45eXIdEK`),
                                                          },
                                                          xNddtL39d: {
                                                            TZuLVTWG4: n[5],
                                                            variant:
                                                              Q(`O45eXIdEK`),
                                                          },
                                                          ZKA1o06sE: {
                                                            TZuLVTWG4: n[8],
                                                            variant:
                                                              Q(`O45eXIdEK`),
                                                          },
                                                        },
                                                        v,
                                                        S,
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                          }),
                                        }),
                                      },
                                      n,
                                    )
                                  ),
                                ),
                              }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-qDmom.framer-zcygws, .framer-qDmom .framer-zcygws { display: block; }`,
          `.framer-qDmom.framer-soxs4q { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1160px; }`,
          `.framer-qDmom .framer-1l0b6ry { display: grid; flex: none; gap: 10px; grid-auto-rows: min-content; grid-template-columns: repeat(5, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-qDmom .framer-2h8hu2 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 21px; grid-column: span 2; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-qDmom .framer-1mbnu9a { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-qDmom .framer-1dc9zqq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 21px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-qDmom .framer-1bgs1z0-container, .framer-qDmom .framer-9x9mzw-container, .framer-qDmom .framer-a17d8j-container, .framer-qDmom .framer-19uov0y-container, .framer-qDmom .framer-nv0dlp-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-qDmom .framer-1tzhdcm { display: grid; flex: none; gap: 24px 10px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
          `.framer-qDmom .framer-1i2n6yt { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-qDmom .framer-1uoq72x-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-qDmom.framer-v-1dljvhg.framer-soxs4q, .framer-qDmom.framer-v-49hjeu.framer-soxs4q, .framer-qDmom.framer-v-1vdsd8s.framer-soxs4q, .framer-qDmom.framer-v-1miu08v.framer-soxs4q, .framer-qDmom.framer-v-1uvxpex.framer-soxs4q { width: 810px; }`,
          `.framer-qDmom.framer-v-1dljvhg .framer-1l0b6ry, .framer-qDmom.framer-v-49hjeu .framer-1l0b6ry, .framer-qDmom.framer-v-1vdsd8s .framer-1l0b6ry, .framer-qDmom.framer-v-1miu08v .framer-1l0b6ry, .framer-qDmom.framer-v-1uvxpex .framer-1l0b6ry, .framer-qDmom.framer-v-2xf9rl .framer-1l0b6ry, .framer-qDmom.framer-v-1f1v175 .framer-1l0b6ry, .framer-qDmom.framer-v-1dzb4f .framer-1l0b6ry, .framer-qDmom.framer-v-afn46r .framer-1l0b6ry, .framer-qDmom.framer-v-1vt8v55 .framer-1l0b6ry { grid-template-columns: repeat(3, minmax(50px, 1fr)); }`,
          `.framer-qDmom.framer-v-1dljvhg .framer-1tzhdcm, .framer-qDmom.framer-v-49hjeu .framer-1tzhdcm, .framer-qDmom.framer-v-1vdsd8s .framer-1tzhdcm, .framer-qDmom.framer-v-1miu08v .framer-1tzhdcm, .framer-qDmom.framer-v-1uvxpex .framer-1tzhdcm { grid-template-columns: repeat(2, minmax(50px, 1fr)); }`,
          `.framer-qDmom.framer-v-2xf9rl.framer-soxs4q, .framer-qDmom.framer-v-1f1v175.framer-soxs4q, .framer-qDmom.framer-v-1dzb4f.framer-soxs4q, .framer-qDmom.framer-v-afn46r.framer-soxs4q, .framer-qDmom.framer-v-1vt8v55.framer-soxs4q { width: 390px; }`,
          `.framer-qDmom.framer-v-2xf9rl .framer-2h8hu2, .framer-qDmom.framer-v-1f1v175 .framer-2h8hu2, .framer-qDmom.framer-v-1dzb4f .framer-2h8hu2, .framer-qDmom.framer-v-afn46r .framer-2h8hu2, .framer-qDmom.framer-v-1vt8v55 .framer-2h8hu2 { flex-direction: column; grid-column: 1 / -1; }`,
          `.framer-qDmom.framer-v-2xf9rl .framer-1dc9zqq, .framer-qDmom.framer-v-1f1v175 .framer-1dc9zqq, .framer-qDmom.framer-v-1dzb4f .framer-1dc9zqq, .framer-qDmom.framer-v-afn46r .framer-1dc9zqq, .framer-qDmom.framer-v-1vt8v55 .framer-1dc9zqq { flex: none; flex-wrap: wrap; justify-content: center; width: 100%; }`,
          `.framer-qDmom.framer-v-2xf9rl .framer-1tzhdcm, .framer-qDmom.framer-v-1f1v175 .framer-1tzhdcm, .framer-qDmom.framer-v-1dzb4f .framer-1tzhdcm, .framer-qDmom.framer-v-afn46r .framer-1tzhdcm, .framer-qDmom.framer-v-1vt8v55 .framer-1tzhdcm { grid-template-columns: repeat(1, minmax(50px, 1fr)); }`,
          ...Me,
        ],
        `framer-qDmom`,
      )),
      (oi = $),
      ($.displayName = `Blog Tab`),
      ($.defaultProps = { height: 1457, width: 1160 }),
      A($, {
        variant: {
          options: [
            `aWY4yudgc`,
            `BQ1MaPEyu`,
            `URsfOZSCF`,
            `E2tHnuYqm`,
            `umK7icfDb`,
            `xNddtL39d`,
            `OC3UzgbD1`,
            `wVs_wHWHo`,
            `ZKA1o06sE`,
            `JtuUHNiKF`,
            `U9I1sOtWB`,
            `nia2SWadC`,
            `KJmSXWLHS`,
            `w7nmVlC2n`,
            `RCx0Ch9je`,
          ],
          optionTitles: [
            `Blogs-v1`,
            `Blogs-v2`,
            `Blogs-v3`,
            `Blogs-v4`,
            `Blogs-v5`,
            `Tablet-v1`,
            `Tablet-v2`,
            `Tablet-v3`,
            `Tablet-v4`,
            `Tablet-v5`,
            `Phone-v1`,
            `Phone-v2`,
            `Phone-v3`,
            `Phone-v4`,
            `Phone-v5`,
          ],
          title: `Variant`,
          type: j.Enum,
        },
      }),
      ie(
        $,
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
          ...Lr,
          ...zr,
          ...T(Ne),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = P.get(Yr(), n),
            i = P.get(Xr(), n),
            a = P.get(Zr(), n),
            o = P.get(Qr(), n),
            s = P.get($r(), n);
          return Promise.allSettled([
            r.preload(),
            i.preload(),
            a.preload(),
            o.preload(),
            s.preload(),
            S(X, {}, t),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => S(Cr, {}, t)));
            })(),
          ]);
        },
      }));
  }),
  ci,
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
  ki,
  Ai,
  ji,
  Mi;
e(() => {
  (p(),
    M(),
    _(),
    o(),
    Ge(),
    ke(),
    si(),
    Ve(),
    xe(),
    $e(),
    (ci = v(Ke)),
    (li = w(he)),
    (ui = v(Ae)),
    (di = w(E)),
    (fi = w(C)),
    (pi = v(oi)),
    (mi = {
      lx03_QeqW: `(max-width: 809.98px)`,
      uI49DrVDb: `(min-width: 1200px)`,
      UJ8DzEu0Z: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (hi = [`z-index-2`]),
    (gi = `framer-AlOpm`),
    (_i = {
      lx03_QeqW: `framer-v-unedaw`,
      uI49DrVDb: `framer-v-azssje`,
      UJ8DzEu0Z: `framer-v-1odjiw7`,
    }),
    (vi = (e, t, n) => (e && t ? `position` : n)),
    (yi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1.5,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (bi = { damping: 150, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
    (xi = {
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
    (Si = {
      damping: 150,
      delay: 0.4,
      mass: 1,
      stiffness: 500,
      type: `spring`,
    }),
    (Ci = {
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
      startDelay: 0.8,
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
    (wi = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (Ti = {
      damping: 150,
      delay: 1.2,
      mass: 1,
      stiffness: 500,
      type: `spring`,
    }),
    (Ei = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Di = { Desktop: `uI49DrVDb`, Phone: `lx03_QeqW`, Tablet: `UJ8DzEu0Z` }),
    (Oi = ({ value: e }) =>
      ue()
        ? null
        : f(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (ki = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Di[r.variant] ?? r.variant ?? `uI49DrVDb`,
    })),
    (Ai = y(
      s(function (e, t) {
        let r = ee(null),
          a = t ?? r,
          o = c(),
          { activeLocale: s, setLocale: l } = de(),
          u = me(),
          { style: te, className: p, layoutId: _, variant: v, ...y } = ki(e);
        se(i(() => et({}, s), [s]));
        let [b, ie] = _e(v, mi, !1),
          S = x(gi, We, we),
          ae = d(D)?.isLayoutTemplate,
          oe = vi(ae, !!d(g)?.transition?.layout);
        return (
          fe({}),
          f(D.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: Di,
              primaryVariantId: `uI49DrVDb`,
              variantClassNames: _i,
            },
            children: m(ne, {
              id: _ ?? o,
              children: [
                f(Oi, {
                  value: `html body { background: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255)); }`,
                }),
                m(h.div, {
                  ...y,
                  className: x(S, `framer-azssje`, p),
                  ref: a,
                  style: { ...te },
                  children: [
                    f(k, {
                      children: f(E, {
                        className: `framer-5v6gsb-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: oe,
                        nodeId: `ERitjlejG`,
                        scopeId: `EcjikNrmE`,
                        children: f(Ke, {
                          height: `100%`,
                          id: `ERitjlejG`,
                          intensity: 20,
                          layoutId: `ERitjlejG`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(h.section, {
                      className: `framer-1rxbdxh`,
                      "data-framer-name": `Hero`,
                      layout: oe,
                      children: [
                        f(`div`, {
                          className: `framer-1xmwpbn`,
                          "data-framer-name": `Image-box`,
                          children: f(li, {
                            __framer__animate: { transition: bi },
                            __framer__animateOnce: !0,
                            __framer__enter: yi,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: `bg`,
                              fit: `fill`,
                              intrinsicHeight: 1100,
                              intrinsicWidth: 2860,
                              loading: re((u?.y || 0) + 0 + 200 + 5 + 0),
                              pixelHeight: 1100,
                              pixelWidth: 2860,
                              sizes: `calc(${u?.width || `100vw`} - 10px)`,
                              src: `https://framerusercontent.com/images/MKTpZLxgCv2bqjxG4tDdj2FPP4.webp?width=2860&height=1100`,
                              srcSet: `https://framerusercontent.com/images/MKTpZLxgCv2bqjxG4tDdj2FPP4.webp?scale-down-to=512&width=2860&height=1100 512w,https://framerusercontent.com/images/MKTpZLxgCv2bqjxG4tDdj2FPP4.webp?scale-down-to=1024&width=2860&height=1100 1024w,https://framerusercontent.com/images/MKTpZLxgCv2bqjxG4tDdj2FPP4.webp?scale-down-to=2048&width=2860&height=1100 2048w,https://framerusercontent.com/images/MKTpZLxgCv2bqjxG4tDdj2FPP4.webp?width=2860&height=1100 2860w`,
                            },
                            className: `framer-1sdmpe6`,
                            "data-framer-name": `Background-image`,
                          }),
                        }),
                        f(`div`, {
                          className: `framer-1fcvx22`,
                          "data-framer-name": `Container`,
                          children: m(`div`, {
                            className: `framer-lo8yxj`,
                            "data-framer-name": `Header`,
                            children: [
                              f(`div`, {
                                className: `framer-1oyoeux`,
                                "data-framer-name": `Label-box`,
                                children: f(F, {
                                  breakpoint: b,
                                  overrides: {
                                    lx03_QeqW: {
                                      width: `max(max(min(max(${u?.width || `100vw`} - 10px, 1px), 1440px) - 32px, 1px) / 4, 50px)`,
                                    },
                                    UJ8DzEu0Z: {
                                      width: `max(max(min(max(${u?.width || `100vw`} - 10px, 1px), 1440px) - 32px, 1px) / 4, 50px)`,
                                    },
                                  },
                                  children: f(k, {
                                    height: 20,
                                    width: `max(max(min(max(${u?.width || `100vw`} - 10px, 1px), 1440px) - 40px, 1px) / 4, 50px)`,
                                    y:
                                      (u?.y || 0) +
                                      0 +
                                      200 +
                                      5 +
                                      157.4 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                    children: f(di, {
                                      __framer__animate: { transition: Si },
                                      __framer__animateOnce: !0,
                                      __framer__enter: xi,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1qyq68c-container`,
                                      nodeId: `Gcre0drFb`,
                                      rendersWithMotion: !0,
                                      scopeId: `EcjikNrmE`,
                                      children: f(Ae, {
                                        GZXD4XDjD: `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                        height: `100%`,
                                        id: `Gcre0drFb`,
                                        layoutId: `Gcre0drFb`,
                                        t9Ips89AM: `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                        width: `100%`,
                                        wYgOcdV21: `BLOG and insight`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              m(`div`, {
                                className: `framer-17lped`,
                                "data-framer-name": `Heading`,
                                children: [
                                  f(C, {
                                    __fromCanvasComponent: !0,
                                    children: f(n, {
                                      children: m(`h2`, {
                                        className: `framer-styles-preset-w4n9ce`,
                                        "data-styles-preset": `QQizO8D2m`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, rgb(255, 255, 255))`,
                                        },
                                        children: [
                                          f(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                            },
                                            children: `*`,
                                          }),
                                          f(`strong`, { children: `Read new` }),
                                          f(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                            },
                                            children: f(`br`, {}),
                                          }),
                                          f(`strong`, {
                                            children: `news & more`,
                                          }),
                                          f(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-06856072-b723-433b-af66-5e2af035f2ef, rgb(255, 33, 33))`,
                                            },
                                            children: `*`,
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: `framer-il6otn`,
                                    effect: Ci,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(fi, {
                                    __framer__animate: { transition: Ti },
                                    __framer__animateOnce: !0,
                                    __framer__enter: wi,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: f(n, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-1mk8z8h`,
                                        "data-styles-preset": `sPvC_pCwb`,
                                        dir: `auto`,
                                        children: `Flexible pricing options designed to suit brands of all sizes. Pick the plan that fits your goals and start growing today.`,
                                      }),
                                    }),
                                    className: `framer-si4kxx`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        f(`div`, {
                          className: `framer-qjcb0x`,
                          "data-framer-name": `Overlay`,
                        }),
                        f(`div`, {
                          className: `framer-1yr8zt8`,
                          "data-framer-name": `Overlay`,
                        }),
                      ],
                    }),
                    f(h.section, {
                      className: `framer-howcjz`,
                      "data-framer-name": `Blogs`,
                      layout: oe,
                      children: f(`div`, {
                        className: `framer-du35hf`,
                        "data-framer-name": `Container`,
                        children: f(F, {
                          breakpoint: b,
                          overrides: {
                            lx03_QeqW: {
                              width: `min(${u?.width || `100vw`} - 32px, 1440px)`,
                              y: (u?.y || 0) + 0 + 750 + 25 + 0 + 0 + 0,
                            },
                            UJ8DzEu0Z: {
                              width: `min(max(${u?.width || `100vw`} - 32px, 1px), 1440px)`,
                            },
                          },
                          children: f(k, {
                            height: 1457,
                            width: `min(max(${u?.width || `100vw`} - 40px, 1px), 1440px)`,
                            y: (u?.y || 0) + 0 + 750 + 25 + 0 + 0,
                            children: f(E, {
                              className: `framer-d6u52m-container`,
                              nodeId: `cbrxB27nQ`,
                              scopeId: `EcjikNrmE`,
                              children: f(F, {
                                breakpoint: b,
                                overrides: {
                                  lx03_QeqW: { variant: Ei(`U9I1sOtWB`) },
                                  UJ8DzEu0Z: { variant: Ei(`xNddtL39d`) },
                                },
                                children: f(oi, {
                                  height: `100%`,
                                  id: `cbrxB27nQ`,
                                  layoutId: `cbrxB27nQ`,
                                  style: { width: `100%` },
                                  variant: Ei(`aWY4yudgc`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-AlOpm.framer-1w8i13r, .framer-AlOpm .framer-1w8i13r { display: block; }`,
        `.framer-AlOpm.framer-azssje { align-content: center; align-items: center; background-color: var(--token-962dbf23-cea4-4b3f-b44d-d5595ab68b22, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-AlOpm .framer-5v6gsb-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-AlOpm .framer-1rxbdxh { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 550px; overflow: hidden; padding: 5px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-AlOpm .framer-1xmwpbn { align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; bottom: 5px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: center; left: 5px; overflow: hidden; padding: 0px; position: absolute; right: 5px; top: 5px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-AlOpm .framer-1sdmpe6 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-AlOpm .framer-1fcvx22 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 20px 60px 20px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-AlOpm .framer-lo8yxj { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 113px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-AlOpm .framer-1oyoeux { display: grid; flex: none; gap: 0px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-AlOpm .framer-1qyq68c-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-AlOpm .framer-17lped { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-AlOpm .framer-il6otn { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-AlOpm .framer-si4kxx { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 485px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-AlOpm .framer-qjcb0x, .framer-AlOpm .framer-1yr8zt8 { background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; bottom: 5px; flex: none; height: 189px; left: 5px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-AlOpm .framer-howcjz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 25px 20px 120px 20px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-AlOpm .framer-du35hf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-AlOpm .framer-d6u52m-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...He,
        ...Se,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-AlOpm.framer-azssje { width: 810px; } .framer-AlOpm .framer-1fcvx22 { padding: 0px 16px 60px 16px; } .framer-AlOpm .framer-howcjz { padding: 25px 16px 120px 16px; }}`,
        `@media (max-width: 809.98px) { .framer-AlOpm.framer-azssje { width: 390px; } .framer-AlOpm .framer-1fcvx22 { padding: 0px 16px 60px 16px; } .framer-AlOpm .framer-howcjz { flex-direction: column; padding: 25px 16px 120px 16px; } .framer-AlOpm .framer-du35hf { flex: none; width: 100%; }}`,
      ],
      `framer-AlOpm`,
    )),
    (ji = Ai),
    (Ai.displayName = `Projects`),
    (Ai.defaultProps = { height: 3178, width: 1200 }),
    ie(
      Ai,
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
        ...ci,
        ...ui,
        ...pi,
        ...T(Ue),
        ...T(Ce),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    (Ai.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([S(Ae, {}, t), S(oi, {}, t)])
      ),
    }),
    (Mi = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerEcjikNrmE`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `3178`,
            framerIntrinsicWidth: `1200`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"UJ8DzEu0Z":{"layout":["fixed","fixed"]},"lx03_QeqW":{"layout":["fixed","fixed"]}}}`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerScrollSections: `false`,
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
export { Mi as __FramerMetadata__, ji as default, hi as queryParamNames };
//# sourceMappingURL=h_sWEzKvAp-7bbGGjH01GLcKi8O2rIRFPBzSU7a8f7s.BkljwzdV.mjs.map
