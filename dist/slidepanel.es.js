import Ne, { forwardRef as pr, useState as Me, useRef as hr, useCallback as Z, useImperativeHandle as gr } from "react";
var we = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function yr() {
  if (Le)
    return Q;
  Le = 1;
  var re = Ne, D = Symbol.for("react.element"), q = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, A = re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(_, d, R) {
    var f, h = {}, j = null, L = null;
    R !== void 0 && (j = "" + R), d.key !== void 0 && (j = "" + d.key), d.ref !== void 0 && (L = d.ref);
    for (f in d)
      C.call(d, f) && !E.hasOwnProperty(f) && (h[f] = d[f]);
    if (_ && _.defaultProps)
      for (f in d = _.defaultProps, d)
        h[f] === void 0 && (h[f] = d[f]);
    return { $$typeof: D, type: _, key: j, ref: L, props: h, _owner: A.current };
  }
  return Q.Fragment = q, Q.jsx = x, Q.jsxs = x, Q;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function br() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var re = Ne, D = Symbol.for("react.element"), q = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), _ = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), m = Symbol.iterator, w = "@@iterator";
    function fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = m && e[m] || e[w];
      return typeof r == "function" ? r : null;
    }
    var k = re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        V("error", e, t);
      }
    }
    function V(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ce = !1, N = !1, te = !1, K = !1, F = !1, U;
    U = Symbol.for("react.module.reference");
    function G(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === C || e === E || F || e === A || e === R || e === f || K || e === L || ce || N || te || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === h || e.$$typeof === x || e.$$typeof === _ || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === U || e.getModuleId !== void 0));
    }
    function ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function I(e) {
      return e.displayName || "Context";
    }
    function v(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case q:
          return "Portal";
        case E:
          return "Profiler";
        case A:
          return "StrictMode";
        case R:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return I(r) + ".Consumer";
          case x:
            var t = e;
            return I(t._context) + ".Provider";
          case d:
            return ne(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : v(e.type) || "Memo";
          case j: {
            var o = e, u = o._payload, i = o._init;
            try {
              return v(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var y = Object.assign, O = 0, T, B, ae, S, P, W, $;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function de() {
      {
        if (O === 0) {
          T = console.log, B = console.info, ae = console.warn, S = console.error, P = console.group, W = console.groupCollapsed, $ = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        O++;
      }
    }
    function Te() {
      {
        if (O--, O === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: y({}, e, {
              value: T
            }),
            info: y({}, e, {
              value: B
            }),
            warn: y({}, e, {
              value: ae
            }),
            error: y({}, e, {
              value: S
            }),
            group: y({}, e, {
              value: P
            }),
            groupCollapsed: y({}, e, {
              value: W
            }),
            groupEnd: y({}, e, {
              value: $
            })
          });
        }
        O < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = k.ReactCurrentDispatcher, pe;
    function ie(e, r, t) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            pe = n && n[1] || "";
          }
        return `
` + pe + e;
      }
    }
    var he = !1, oe;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new Ue();
    }
    function Se(e, r) {
      if (!e || he)
        return "";
      {
        var t = oe.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      he = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = ve.current, ve.current = null, de();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (g) {
              n = g;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, l = p.length - 1; s >= 1 && l >= 0 && a[s] !== p[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== p[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== p[l]) {
                    var b = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, b), b;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        he = !1, ve.current = u, Te(), Error.prepareStackTrace = o;
      }
      var J = e ? e.displayName || e.name : "", M = J ? ie(J) : "";
      return typeof e == "function" && oe.set(e, M), M;
    }
    function Be(e, r, t) {
      return Se(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ue(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, Xe(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case R:
          return ie("Suspense");
        case f:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Be(e.render);
          case h:
            return ue(e.type, r, t);
          case j: {
            var n = e, o = n._payload, u = n._init;
            try {
              return ue(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Pe = {}, je = k.ReactDebugCurrentFrame;
    function se(e) {
      if (e) {
        var r = e._owner, t = ue(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, o) {
      {
        var u = Function.call.bind(H);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (se(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), se(null)), a instanceof Error && !(a.message in Pe) && (Pe[a.message] = !0, se(o), c("Failed %s type: %s", t, a.message), se(null));
          }
      }
    }
    var qe = Array.isArray;
    function ge(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function xe(e) {
      if (Ge(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Ce(e);
    }
    var z = k.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ke, Oe, ye;
    ye = {};
    function ze(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && z.current && r && z.current.stateNode !== r) {
        var t = v(z.current.type);
        ye[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', v(z.current.type), e.ref), ye[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ke || (ke = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, o) {
      {
        var u, i = {}, a = null, p = null;
        t !== void 0 && (xe(t), a = "" + t), Ze(r) && (xe(r.key), a = "" + r.key), ze(r) && (p = r.ref, Qe(r, o));
        for (u in r)
          H.call(r, u) && !He.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(i, l), p && rr(i, l);
        }
        return tr(e, a, p, o, n, z.current, i);
      }
    }
    var be = k.ReactCurrentOwner, De = k.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = ue(e.type, e._source, r ? r.type : null);
        De.setExtraStackFrame(t);
      } else
        De.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function Ae() {
      {
        if (be.current) {
          var e = v(be.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function ir(e) {
      {
        var r = Ae();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ie(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Fe[t])
          return;
        Fe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== be.current && (n = " It was passed a child from " + v(e._owner.type) + "."), X(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), X(null);
      }
    }
    function We(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ge(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Re(n) && Ie(n, r);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = fe(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              Re(i.value) && Ie(i.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = v(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var o = v(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            X(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var $e = {};
    function Ye(e, r, t, n, o, u) {
      {
        var i = G(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = ar(o);
          p ? a += p : a += Ae();
          var s;
          e === null ? s = "null" : ge(e) ? s = "array" : e !== void 0 && e.$$typeof === D ? (s = "<" + (v(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = nr(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (ge(b)) {
                for (var J = 0; J < b.length; J++)
                  We(b[J], e);
                Object.freeze && Object.freeze(b);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(b, e);
        }
        if (H.call(r, "key")) {
          var M = v(e), g = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), me = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[M + me]) {
            var dr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, me, M, dr, M), $e[M + me] = !0;
          }
        }
        return e === C ? ur(l) : or(l), l;
      }
    }
    function sr(e, r, t) {
      return Ye(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Ye(e, r, t, !1);
    }
    var fr = lr, cr = sr;
    ee.Fragment = C, ee.jsx = fr, ee.jsxs = cr;
  }()), ee;
}
process.env.NODE_ENV === "production" ? we.exports = yr() : we.exports = br();
var _e = we.exports;
const le = {
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp"
}, Rr = pr(function({
  handle: D,
  children: q,
  defaultOpened: C = !1,
  defaultHidden: A = !1,
  direction: E = "both",
  openedSize: x = 250,
  offset: _ = 35,
  animDuration: d = 500,
  openOn: R = "mouseenter",
  closeOn: f = "mouseleave",
  toggleOn: h = "",
  className: j = "",
  style: L = {},
  onOpen: m,
  onClose: w
}, fe) {
  const k = C && !A, [c, V] = Me(k), [ce, N] = Me(A), te = hr(null), K = Z(() => {
    V(!0), N(!1), m == null || m();
  }, [m]), F = Z(() => {
    V(!1), N(!1), w == null || w();
  }, [w]), U = Z(
    (S) => {
      if (!S || E === "both") {
        F();
        return;
      }
      const P = S.pageX ?? S.clientX + window.scrollX, W = te.current;
      if (!W)
        return;
      const $ = W.getBoundingClientRect(), Y = $.left + window.scrollX, de = Y + $.width;
      (E === "right" && P - 5 < Y || E === "left" && P + 5 > de) && F();
    },
    [E, F]
  ), G = Z(() => {
    V((S) => {
      const P = !S;
      return P ? m == null || m() : w == null || w(), P;
    }), N(!1);
  }, [m, w]), ne = Z(() => {
    V(!1), N(!0);
  }, []);
  gr(fe, () => ({ open: K, close: U, forceClose: F, toggle: G, hide: ne }), [
    K,
    U,
    F,
    G,
    ne
  ]);
  let I, v, y;
  ce ? (I = 0, v = 0, y = 0) : c ? (I = x, v = x, y = 0) : (I = _, v = 0, y = _);
  const O = {}, T = {};
  R && le[R] && (T[R] = T[R] || []).push(K), f && le[f] && (T[f] = T[f] || []).push(U), h && le[h] && (T[h] = T[h] || []).push(G);
  for (const [S, P] of Object.entries(T)) {
    const W = le[S];
    O[W] = ($) => P.forEach((Y) => Y($));
  }
  const B = `width ${d}ms ease`, ae = E === "left" ? "left" : E === "right" ? "right" : void 0;
  return /* @__PURE__ */ _e.jsxs(
    "div",
    {
      ref: te,
      className: j || void 0,
      style: {
        display: "block",
        height: "100%",
        overflow: "hidden",
        float: ae,
        width: I,
        transition: B,
        ...L
      },
      ...O,
      children: [
        /* @__PURE__ */ _e.jsx("div", { style: { height: "100%", overflow: "hidden", width: v, transition: B }, children: q }),
        /* @__PURE__ */ _e.jsx("div", { style: { height: "100%", overflow: "hidden", width: y, transition: B }, children: D })
      ]
    }
  );
});
export {
  Rr as default
};
