!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
  'use strict';
  var n = [],
    i = Object.getPrototypeOf,
    o = n.slice,
    r = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    a = n.push,
    s = n.indexOf,
    l = {},
    u = l.toString,
    c = l.hasOwnProperty,
    f = c.toString,
    d = f.call(Object),
    h = {},
    p = function (e) {
      return (
        'function' == typeof e &&
        'number' != typeof e.nodeType &&
        'function' != typeof e.item
      );
    },
    g = function (e) {
      return null != e && e === e.window;
    },
    m = e.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var i,
      o,
      r = (n = n || m).createElement('script');
    if (((r.text = e), t))
      for (i in v)
        (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          r.setAttribute(i, o);
    n.head.appendChild(r).parentNode.removeChild(r);
  }
  function b(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? l[u.call(e)] || 'object'
      : typeof e;
  }
  var _ = '3.6.0',
    w = function (e, t) {
      return new w.fn.init(e, t);
    };
  function x(e) {
    var t = !!e && 'length' in e && e.length,
      n = b(e);
    return (
      !p(e) &&
      !g(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && t > 0 && t - 1 in e))
    );
  }
  (w.fn = w.prototype = {
    jquery: _,
    constructor: w,
    length: 0,
    toArray: function () {
      return o.call(this);
    },
    get: function (e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = w.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return w.each(this, e);
    },
    map: function (e) {
      return this.pushStack(
        w.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        w.grep(this, function (e, t) {
          return (t + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        w.grep(this, function (e, t) {
          return t % 2;
        })
      );
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: a,
    sort: n.sort,
    splice: n.splice
  }),
    (w.extend = w.fn.extend = function () {
      var e,
        t,
        n,
        i,
        o,
        r,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        u = !1;
      for (
        'boolean' == typeof a && ((u = a), (a = arguments[s] || {}), s++),
          'object' == typeof a || p(a) || (a = {}),
          s === l && ((a = this), s--);
        s < l;
        s++
      )
        if (null != (e = arguments[s]))
          for (t in e)
            (i = e[t]),
              '__proto__' !== t &&
                a !== i &&
                (u && i && (w.isPlainObject(i) || (o = Array.isArray(i)))
                  ? ((n = a[t]),
                    (r =
                      o && !Array.isArray(n)
                        ? []
                        : o || w.isPlainObject(n)
                        ? n
                        : {}),
                    (o = !1),
                    (a[t] = w.extend(u, r, i)))
                  : void 0 !== i && (a[t] = i));
      return a;
    }),
    w.extend({
      expando: 'jQuery' + (_ + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          '[object Object]' !== u.call(e) ||
          ((t = i(e)) &&
            ('function' !=
              typeof (n = c.call(t, 'constructor') && t.constructor) ||
              f.call(n) !== d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        y(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (x(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (x(Object(e))
              ? w.merge(n, 'string' == typeof e ? [e] : e)
              : a.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : s.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
          !t(e[o], o) !== a && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          o,
          a = 0,
          s = [];
        if (x(e))
          for (i = e.length; a < i; a++)
            null != (o = t(e[a], a, n)) && s.push(o);
        else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
        return r(s);
      },
      guid: 1,
      support: h
    }),
    'function' == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        l['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var T = (function (e) {
    var t,
      n,
      i,
      o,
      r,
      a,
      s,
      l,
      u,
      c,
      f,
      d,
      h,
      p,
      g,
      m,
      v,
      y,
      b,
      _ = 'sizzle' + 1 * new Date(),
      w = e.document,
      x = 0,
      T = 0,
      E = le(),
      C = le(),
      S = le(),
      k = le(),
      A = function (e, t) {
        return e === t && (f = !0), 0;
      },
      N = {}.hasOwnProperty,
      D = [],
      j = D.pop,
      O = D.push,
      I = D.push,
      L = D.slice,
      q = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      H =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      P = '[\\x20\\t\\r\\n\\f]',
      R =
        '(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      M =
        '\\[[\\x20\\t\\r\\n\\f]*(' +
        R +
        ')(?:' +
        P +
        '*([*^$|!~]?=)' +
        P +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        R +
        '))|)' +
        P +
        '*\\]',
      F =
        ':(' +
        R +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        M +
        ')*)|.*)\\)|)',
      W = new RegExp(P + '+', 'g'),
      B = new RegExp(
        '^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$',
        'g'
      ),
      $ = new RegExp('^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*'),
      z = new RegExp(
        '^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*'
      ),
      U = new RegExp(P + '|>'),
      Q = new RegExp(F),
      X = new RegExp('^' + R + '$'),
      Y = {
        ID: new RegExp('^#(' + R + ')'),
        CLASS: new RegExp('^\\.(' + R + ')'),
        TAG: new RegExp('^(' + R + '|[*])'),
        ATTR: new RegExp('^' + M),
        PSEUDO: new RegExp('^' + F),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + H + ')$', 'i'),
        needsContext: new RegExp(
          '^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      V = /HTML$/i,
      K = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp(
        '\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])',
        'g'
      ),
      ne = function (e, t) {
        var n = '0x' + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      oe = function (e, t) {
        return t
          ? '\0' === e
            ? '\ufffd'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e;
      },
      re = function () {
        d();
      },
      ae = _e(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      I.apply((D = L.call(w.childNodes)), w.childNodes);
    } catch (Ce) {
      I = {
        apply: D.length
          ? function (e, t) {
              O.apply(e, L.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            }
      };
    }
    function se(e, t, i, o) {
      var r,
        s,
        u,
        c,
        f,
        p,
        v,
        y = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        'string' != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
      )
        return i;
      if (!o && (d(t), (t = t || h), g)) {
        if (11 !== w && (f = Z.exec(e)))
          if ((r = f[1])) {
            if (9 === w) {
              if (!(u = t.getElementById(r))) return i;
              if (u.id === r) return i.push(u), i;
            } else if (y && (u = y.getElementById(r)) && b(t, u) && u.id === r)
              return i.push(u), i;
          } else {
            if (f[2]) return I.apply(i, t.getElementsByTagName(e)), i;
            if (
              (r = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return I.apply(i, t.getElementsByClassName(r)), i;
          }
        if (
          n.qsa &&
          !k[e + ' '] &&
          (!m || !m.test(e)) &&
          (1 !== w || 'object' !== t.nodeName.toLowerCase())
        ) {
          if (((v = e), (y = t), 1 === w && (U.test(e) || z.test(e)))) {
            for (
              ((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) ||
                ((c = t.getAttribute('id'))
                  ? (c = c.replace(ie, oe))
                  : t.setAttribute('id', (c = _))),
                s = (p = a(e)).length;
              s--;

            )
              p[s] = (c ? '#' + c : ':scope') + ' ' + be(p[s]);
            v = p.join(',');
          }
          try {
            return I.apply(i, y.querySelectorAll(v)), i;
          } catch (x) {
            k(e, !0);
          } finally {
            c === _ && t.removeAttribute('id');
          }
        }
      }
      return l(e.replace(B, '$1'), t, i, o);
    }
    function le() {
      var e = [];
      return function t(n, o) {
        return (
          e.push(n + ' ') > i.cacheLength && delete t[e.shift()],
          (t[n + ' '] = o)
        );
      };
    }
    function ue(e) {
      return (e[_] = !0), e;
    }
    function ce(e) {
      var t = h.createElement('fieldset');
      try {
        return !!e(t);
      } catch (Ce) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      for (var n = e.split('|'), o = n.length; o--; ) i.attrHandle[n[o]] = t;
    }
    function de(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function he(e) {
      return function (t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function ge(e) {
      return function (t) {
        return 'form' in t
          ? t.parentNode && !1 === t.disabled
            ? 'label' in t
              ? 'label' in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
            : t.disabled === e
          : 'label' in t && t.disabled === e;
      };
    }
    function me(e) {
      return ue(function (t) {
        return (
          (t = +t),
          ue(function (n, i) {
            for (var o, r = e([], n.length, t), a = r.length; a--; )
              n[(o = r[a])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = se.support = {}),
    (r = se.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !V.test((e && e.namespaceURI) || (t && t.nodeName) || 'HTML');
    }),
    (d = se.setDocument = function (e) {
      var t,
        o,
        a = e ? e.ownerDocument || e : w;
      return a != h && 9 === a.nodeType && a.documentElement
        ? ((p = (h = a).documentElement),
          (g = !r(h)),
          w != h &&
            (o = h.defaultView) &&
            o.top !== o &&
            (o.addEventListener
              ? o.addEventListener('unload', re, !1)
              : o.attachEvent && o.attachEvent('onunload', re)),
          (n.scope = ce(function (e) {
            return (
              p.appendChild(e).appendChild(h.createElement('div')),
              void 0 !== e.querySelectorAll &&
                !e.querySelectorAll(':scope fieldset div').length
            );
          })),
          (n.attributes = ce(function (e) {
            return (e.className = 'i'), !e.getAttribute('className');
          })),
          (n.getElementsByTagName = ce(function (e) {
            return (
              e.appendChild(h.createComment('')),
              !e.getElementsByTagName('*').length
            );
          })),
          (n.getElementsByClassName = J.test(h.getElementsByClassName)),
          (n.getById = ce(function (e) {
            return (
              (p.appendChild(e).id = _),
              !h.getElementsByName || !h.getElementsByName(_).length
            );
          })),
          n.getById
            ? ((i.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  return e.getAttribute('id') === t;
                };
              }),
              (i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((i.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  var n =
                    void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                  return n && n.value === t;
                };
              }),
              (i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                  var n,
                    i,
                    o,
                    r = t.getElementById(e);
                  if (r) {
                    if ((n = r.getAttributeNode('id')) && n.value === e)
                      return [r];
                    for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                      if ((n = r.getAttributeNode('id')) && n.value === e)
                        return [r];
                  }
                  return [];
                }
              })),
          (i.find.TAG = n.getElementsByTagName
            ? function (e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : n.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function (e, t) {
                var n,
                  i = [],
                  o = 0,
                  r = t.getElementsByTagName(e);
                if ('*' === e) {
                  for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }
                return r;
              }),
          (i.find.CLASS =
            n.getElementsByClassName &&
            function (e, t) {
              if (void 0 !== t.getElementsByClassName && g)
                return t.getElementsByClassName(e);
            }),
          (v = []),
          (m = []),
          (n.qsa = J.test(h.querySelectorAll)) &&
            (ce(function (e) {
              var t;
              (p.appendChild(e).innerHTML =
                "<a id='" +
                _ +
                "'></a><select id='" +
                _ +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  m.push('[*^$]=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")'),
                e.querySelectorAll('[selected]').length ||
                  m.push('\\[[\\x20\\t\\r\\n\\f]*(?:value|' + H + ')'),
                e.querySelectorAll('[id~=' + _ + '-]').length || m.push('~='),
                (t = h.createElement('input')).setAttribute('name', ''),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length ||
                  m.push(
                    '\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")'
                  ),
                e.querySelectorAll(':checked').length || m.push(':checked'),
                e.querySelectorAll('a#' + _ + '+*').length ||
                  m.push('.#.+[+~]'),
                e.querySelectorAll('\\\f'),
                m.push('[\\r\\n\\f]');
            }),
            ce(function (e) {
              e.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = h.createElement('input');
              t.setAttribute('type', 'hidden'),
                e.appendChild(t).setAttribute('name', 'D'),
                e.querySelectorAll('[name=d]').length &&
                  m.push('name[\\x20\\t\\r\\n\\f]*[*^$|!~]?='),
                2 !== e.querySelectorAll(':enabled').length &&
                  m.push(':enabled', ':disabled'),
                (p.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(':disabled').length &&
                  m.push(':enabled', ':disabled'),
                e.querySelectorAll('*,:x'),
                m.push(',.*:');
            })),
          (n.matchesSelector = J.test(
            (y =
              p.matches ||
              p.webkitMatchesSelector ||
              p.mozMatchesSelector ||
              p.oMatchesSelector ||
              p.msMatchesSelector)
          )) &&
            ce(function (e) {
              (n.disconnectedMatch = y.call(e, '*')),
                y.call(e, "[s!='']:x"),
                v.push('!=', F);
            }),
          (m = m.length && new RegExp(m.join('|'))),
          (v = v.length && new RegExp(v.join('|'))),
          (t = J.test(p.compareDocumentPosition)),
          (b =
            t || J.test(p.contains)
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                  return (
                    e === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains
                        ? n.contains(i)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(i))
                    )
                  );
                }
              : function (e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (A = t
            ? function (e, t) {
                if (e === t) return (f = !0), 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  i ||
                  (1 &
                    (i =
                      (e.ownerDocument || e) == (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!n.sortDetached && t.compareDocumentPosition(e) === i)
                    ? e == h || (e.ownerDocument == w && b(w, e))
                      ? -1
                      : t == h || (t.ownerDocument == w && b(w, t))
                      ? 1
                      : c
                      ? q(c, e) - q(c, t)
                      : 0
                    : 4 & i
                    ? -1
                    : 1)
                );
              }
            : function (e, t) {
                if (e === t) return (f = !0), 0;
                var n,
                  i = 0,
                  o = e.parentNode,
                  r = t.parentNode,
                  a = [e],
                  s = [t];
                if (!o || !r)
                  return e == h
                    ? -1
                    : t == h
                    ? 1
                    : o
                    ? -1
                    : r
                    ? 1
                    : c
                    ? q(c, e) - q(c, t)
                    : 0;
                if (o === r) return de(e, t);
                for (n = e; (n = n.parentNode); ) a.unshift(n);
                for (n = t; (n = n.parentNode); ) s.unshift(n);
                for (; a[i] === s[i]; ) i++;
                return i ? de(a[i], s[i]) : a[i] == w ? -1 : s[i] == w ? 1 : 0;
              }),
          h)
        : h;
    }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (d(e),
        n.matchesSelector &&
          g &&
          !k[t + ' '] &&
          (!v || !v.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (Ce) {
          k(t, !0);
        }
      return se(t, h, null, [e]).length > 0;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != h && d(e), b(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != h && d(e);
      var o = i.attrHandle[t.toLowerCase()],
        r = o && N.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
      return void 0 !== r
        ? r
        : n.attributes || !g
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + '').replace(ie, oe);
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        i = [],
        o = 0,
        r = 0;
      if (
        ((f = !n.detectDuplicates),
        (c = !n.sortStable && e.slice(0)),
        e.sort(A),
        f)
      ) {
        for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
        for (; o--; ) e.splice(i[o], 1);
      }
      return (c = null), e;
    }),
    (o = se.getText = function (e) {
      var t,
        n = '',
        i = 0,
        r = e.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; (t = e[i++]); ) n += o(t);
      return n;
    }),
    ((i = se.selectors = {
      cacheLength: 50,
      createPseudo: ue,
      match: Y,
      attrHandle: {},
      find: {},
      relative: {
        '>': { dir: 'parentNode', first: !0 },
        ' ': { dir: 'parentNode' },
        '+': { dir: 'previousSibling', first: !0 },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(te, ne)),
            (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
            '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            'nth' === e[1].slice(0, 3)
              ? (e[3] || se.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ('even' === e[3] || 'odd' === e[3]))),
                (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
              : e[3] && se.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return Y.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || '')
                : n &&
                  Q.test(n) &&
                  (t = a(n, !0)) &&
                  (t = n.indexOf(')', n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return '*' === e
            ? function () {
                return !0;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = E[e + ' '];
          return (
            t ||
            ((t = new RegExp(
              '(^|[\\x20\\t\\r\\n\\f])' + e + '(' + P + '|$)'
            )) &&
              E(e, function (e) {
                return t.test(
                  ('string' == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                    ''
                );
              }))
          );
        },
        ATTR: function (e, t, n) {
          return function (i) {
            var o = se.attr(i, e);
            return null == o
              ? '!=' === t
              : !t ||
                  ((o += ''),
                  '=' === t
                    ? o === n
                    : '!=' === t
                    ? o !== n
                    : '^=' === t
                    ? n && 0 === o.indexOf(n)
                    : '*=' === t
                    ? n && o.indexOf(n) > -1
                    : '$=' === t
                    ? n && o.slice(-n.length) === n
                    : '~=' === t
                    ? (' ' + o.replace(W, ' ') + ' ').indexOf(n) > -1
                    : '|=' === t &&
                      (o === n || o.slice(0, n.length + 1) === n + '-'));
          };
        },
        CHILD: function (e, t, n, i, o) {
          var r = 'nth' !== e.slice(0, 3),
            a = 'last' !== e.slice(-4),
            s = 'of-type' === t;
          return 1 === i && 0 === o
            ? function (e) {
                return !!e.parentNode;
              }
            : function (t, n, l) {
                var u,
                  c,
                  f,
                  d,
                  h,
                  p,
                  g = r !== a ? 'nextSibling' : 'previousSibling',
                  m = t.parentNode,
                  v = s && t.nodeName.toLowerCase(),
                  y = !l && !s,
                  b = !1;
                if (m) {
                  if (r) {
                    for (; g; ) {
                      for (d = t; (d = d[g]); )
                        if (
                          s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType
                        )
                          return !1;
                      p = g = 'only' === e && !p && 'nextSibling';
                    }
                    return !0;
                  }
                  if (((p = [a ? m.firstChild : m.lastChild]), a && y)) {
                    for (
                      b =
                        (h =
                          (u =
                            (c =
                              (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] || [])[0] === x &&
                          u[1]) && u[2],
                        d = h && m.childNodes[h];
                      (d = (++h && d && d[g]) || (b = h = 0) || p.pop());

                    )
                      if (1 === d.nodeType && ++b && d === t) {
                        c[e] = [x, h, b];
                        break;
                      }
                  } else if (
                    (y &&
                      (b = h =
                        (u =
                          (c =
                            (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] ||
                            (f[d.uniqueID] = {}))[e] || [])[0] === x && u[1]),
                    !1 === b)
                  )
                    for (
                      ;
                      (d = (++h && d && d[g]) || (b = h = 0) || p.pop()) &&
                      ((s
                        ? d.nodeName.toLowerCase() !== v
                        : 1 !== d.nodeType) ||
                        !++b ||
                        (y &&
                          ((c =
                            (f = d[_] || (d[_] = {}))[d.uniqueID] ||
                            (f[d.uniqueID] = {}))[e] = [x, b]),
                        d !== t));

                    );
                  return (b -= o) === i || (b % i == 0 && b / i >= 0);
                }
              };
        },
        PSEUDO: function (e, t) {
          var n,
            o =
              i.pseudos[e] ||
              i.setFilters[e.toLowerCase()] ||
              se.error('unsupported pseudo: ' + e);
          return o[_]
            ? o(t)
            : o.length > 1
            ? ((n = [e, e, '', t]),
              i.setFilters.hasOwnProperty(e.toLowerCase())
                ? ue(function (e, n) {
                    for (var i, r = o(e, t), a = r.length; a--; )
                      e[(i = q(e, r[a]))] = !(n[i] = r[a]);
                  })
                : function (e) {
                    return o(e, 0, n);
                  })
            : o;
        }
      },
      pseudos: {
        not: ue(function (e) {
          var t = [],
            n = [],
            i = s(e.replace(B, '$1'));
          return i[_]
            ? ue(function (e, t, n, o) {
                for (var r, a = i(e, null, o, []), s = e.length; s--; )
                  (r = a[s]) && (e[s] = !(t[s] = r));
              })
            : function (e, o, r) {
                return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
              };
        }),
        has: ue(function (e) {
          return function (t) {
            return se(e, t).length > 0;
          };
        }),
        contains: ue(function (e) {
          return (
            (e = e.replace(te, ne)),
            function (t) {
              return (t.textContent || o(t)).indexOf(e) > -1;
            }
          );
        }),
        lang: ue(function (e) {
          return (
            X.test(e || '') || se.error('unsupported lang: ' + e),
            (e = e.replace(te, ne).toLowerCase()),
            function (t) {
              var n;
              do {
                if (
                  (n = g
                    ? t.lang
                    : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                )
                  return (
                    (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-')
                  );
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1;
            }
          );
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === p;
        },
        focus: function (e) {
          return (
            e === h.activeElement &&
            (!h.hasFocus || h.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return (
            ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
          );
        },
        selected: function (e) {
          return !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !i.pseudos.empty(e);
        },
        header: function (e) {
          return G.test(e.nodeName);
        },
        input: function (e) {
          return K.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t && 'button' === e.type) || 'button' === t;
        },
        text: function (e) {
          var t;
          return (
            'input' === e.nodeName.toLowerCase() &&
            'text' === e.type &&
            (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
          );
        },
        first: me(function () {
          return [0];
        }),
        last: me(function (e, t) {
          return [t - 1];
        }),
        eq: me(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: me(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: me(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: me(function (e, t, n) {
          for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
          return e;
        }),
        gt: me(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
          return e;
        })
      }
    }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = he(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
      return i;
    }
    function _e(e, t, n) {
      var i = t.dir,
        o = t.next,
        r = o || i,
        a = n && 'parentNode' === r,
        s = T++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, o);
            return !1;
          }
        : function (t, n, l) {
            var u,
              c,
              f,
              d = [x, s];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || a)
                  if (
                    ((c =
                      (f = t[_] || (t[_] = {}))[t.uniqueID] ||
                      (f[t.uniqueID] = {})),
                    o && o === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((u = c[r]) && u[0] === x && u[1] === s)
                      return (d[2] = u[2]);
                    if (((c[r] = d), (d[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function xe(e, t, n, i, o) {
      for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
        (r = e[s]) && ((n && !n(r, i, o)) || (a.push(r), u && t.push(s)));
      return a;
    }
    function Te(e, t, n, i, o, r) {
      return (
        i && !i[_] && (i = Te(i)),
        o && !o[_] && (o = Te(o, r)),
        ue(function (r, a, s, l) {
          var u,
            c,
            f,
            d = [],
            h = [],
            p = a.length,
            g =
              r ||
              (function (e, t, n) {
                for (var i = 0, o = t.length; i < o; i++) se(e, t[i], n);
                return n;
              })(t || '*', s.nodeType ? [s] : s, []),
            m = !e || (!r && t) ? g : xe(g, d, e, s, l),
            v = n ? (o || (r ? e : p || i) ? [] : a) : m;
          if ((n && n(m, v, s, l), i))
            for (u = xe(v, h), i(u, [], s, l), c = u.length; c--; )
              (f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
          if (r) {
            if (o || e) {
              if (o) {
                for (u = [], c = v.length; c--; )
                  (f = v[c]) && u.push((m[c] = f));
                o(null, (v = []), u, l);
              }
              for (c = v.length; c--; )
                (f = v[c]) &&
                  (u = o ? q(r, f) : d[c]) > -1 &&
                  (r[u] = !(a[u] = f));
            }
          } else (v = xe(v === a ? v.splice(p, v.length) : v)), o ? o(null, a, v, l) : I.apply(a, v);
        })
      );
    }
    function Ee(e) {
      for (
        var t,
          n,
          o,
          r = e.length,
          a = i.relative[e[0].type],
          s = a || i.relative[' '],
          l = a ? 1 : 0,
          c = _e(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          f = _e(
            function (e) {
              return q(t, e) > -1;
            },
            s,
            !0
          ),
          d = [
            function (e, n, i) {
              var o =
                (!a && (i || n !== u)) ||
                ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
              return (t = null), o;
            }
          ];
        l < r;
        l++
      )
        if ((n = i.relative[e[l].type])) d = [_e(we(d), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
            for (o = ++l; o < r && !i.relative[e[o].type]; o++);
            return Te(
              l > 1 && we(d),
              l > 1 &&
                be(
                  e
                    .slice(0, l - 1)
                    .concat({ value: ' ' === e[l - 2].type ? '*' : '' })
                ).replace(B, '$1'),
              n,
              l < o && Ee(e.slice(l, o)),
              o < r && Ee((e = e.slice(o))),
              o < r && be(e)
            );
          }
          d.push(n);
        }
      return we(d);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (a = se.tokenize = function (e, t) {
        var n,
          o,
          r,
          a,
          s,
          l,
          u,
          c = C[e + ' '];
        if (c) return t ? 0 : c.slice(0);
        for (s = e, l = [], u = i.preFilter; s; ) {
          for (a in ((n && !(o = $.exec(s))) ||
            (o && (s = s.slice(o[0].length) || s), l.push((r = []))),
          (n = !1),
          (o = z.exec(s)) &&
            ((n = o.shift()),
            r.push({ value: n, type: o[0].replace(B, ' ') }),
            (s = s.slice(n.length))),
          i.filter))
            !(o = Y[a].exec(s)) ||
              (u[a] && !(o = u[a](o))) ||
              ((n = o.shift()),
              r.push({ value: n, type: a, matches: o }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? se.error(e) : C(e, l).slice(0);
      }),
      (s = se.compile = function (e, t) {
        var n,
          o = [],
          r = [],
          s = S[e + ' '];
        if (!s) {
          for (t || (t = a(e)), n = t.length; n--; )
            (s = Ee(t[n]))[_] ? o.push(s) : r.push(s);
          (s = S(
            e,
            (function (e, t) {
              var n = t.length > 0,
                o = e.length > 0,
                r = function (r, a, s, l, c) {
                  var f,
                    p,
                    m,
                    v = 0,
                    y = '0',
                    b = r && [],
                    _ = [],
                    w = u,
                    T = r || (o && i.find.TAG('*', c)),
                    E = (x += null == w ? 1 : Math.random() || 0.1),
                    C = T.length;
                  for (
                    c && (u = a == h || a || c);
                    y !== C && null != (f = T[y]);
                    y++
                  ) {
                    if (o && f) {
                      for (
                        p = 0, a || f.ownerDocument == h || (d(f), (s = !g));
                        (m = e[p++]);

                      )
                        if (m(f, a || h, s)) {
                          l.push(f);
                          break;
                        }
                      c && (x = E);
                    }
                    n && ((f = !m && f) && v--, r && b.push(f));
                  }
                  if (((v += y), n && y !== v)) {
                    for (p = 0; (m = t[p++]); ) m(b, _, a, s);
                    if (r) {
                      if (v > 0)
                        for (; y--; ) b[y] || _[y] || (_[y] = j.call(l));
                      _ = xe(_);
                    }
                    I.apply(l, _),
                      c &&
                        !r &&
                        _.length > 0 &&
                        v + t.length > 1 &&
                        se.uniqueSort(l);
                  }
                  return c && ((x = E), (u = w)), b;
                };
              return n ? ue(r) : r;
            })(r, o)
          )).selector = e;
        }
        return s;
      }),
      (l = se.select = function (e, t, n, o) {
        var r,
          l,
          u,
          c,
          f,
          d = 'function' == typeof e && e,
          h = !o && a((e = d.selector || e));
        if (((n = n || []), 1 === h.length)) {
          if (
            (l = h[0] = h[0].slice(0)).length > 2 &&
            'ID' === (u = l[0]).type &&
            9 === t.nodeType &&
            g &&
            i.relative[l[1].type]
          ) {
            if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
              return n;
            d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
          }
          for (
            r = Y.needsContext.test(e) ? 0 : l.length;
            r-- && !i.relative[(c = (u = l[r]).type)];

          )
            if (
              (f = i.find[c]) &&
              (o = f(
                u.matches[0].replace(te, ne),
                (ee.test(l[0].type) && ve(t.parentNode)) || t
              ))
            ) {
              if ((l.splice(r, 1), !(e = o.length && be(l))))
                return I.apply(n, o), n;
              break;
            }
        }
        return (
          (d || s(e, h))(
            o,
            t,
            !g,
            n,
            !t || (ee.test(e) && ve(t.parentNode)) || t
          ),
          n
        );
      }),
      (n.sortStable = _.split('').sort(A).join('') === _),
      (n.detectDuplicates = !!f),
      d(),
      (n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(h.createElement('fieldset'));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        fe(H, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      se
    );
  })(e);
  (w.find = T),
    (w.expr = T.selectors),
    (w.expr[':'] = w.expr.pseudos),
    (w.uniqueSort = w.unique = T.uniqueSort),
    (w.text = T.getText),
    (w.isXMLDoc = T.isXML),
    (w.contains = T.contains),
    (w.escapeSelector = T.escape);
  var E = function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && w(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    C = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    S = w.expr.match.needsContext;
  function k(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function N(e, t, n) {
    return p(t)
      ? w.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : 'string' != typeof t
      ? w.grep(e, function (e) {
          return s.call(t, e) > -1 !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === i.nodeType
        ? w.find.matchesSelector(i, e)
          ? [i]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ('string' != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < i; t++) if (w.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n);
        return i > 1 ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(N(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(N(this, e || [], !0));
      },
      is: function (e) {
        return !!N(this, 'string' == typeof e && S.test(e) ? w(e) : e || [], !1)
          .length;
      }
    });
  var D,
    j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || D), 'string' == typeof e)) {
      if (
        !(i =
          '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : j.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          (w.merge(
            this,
            w.parseHTML(
              i[1],
              (t = t instanceof w ? t[0] : t) && t.nodeType
                ? t.ownerDocument || t
                : m,
              !0
            )
          ),
          A.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = m.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : p(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (D = w(m));
  var O = /^(?:parents|prev(?:Until|All))/,
    I = { children: !0, contents: !0, next: !0, prev: !0 };
  function L(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        a = 'string' != typeof e && w(e);
      if (!S.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
      return this.pushStack(r.length > 1 ? w.uniqueSort(r) : r);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? s.call(w(e), this[0])
          : s.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return E(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return E(e, 'parentNode', n);
        },
        next: function (e) {
          return L(e, 'nextSibling');
        },
        prev: function (e) {
          return L(e, 'previousSibling');
        },
        nextAll: function (e) {
          return E(e, 'nextSibling');
        },
        prevAll: function (e) {
          return E(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return E(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return E(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return C((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return C(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (k(e, 'template') && (e = e.content || e),
              w.merge([], e.childNodes));
        }
      },
      function (e, t) {
        w.fn[e] = function (n, i) {
          var o = w.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (i = n),
            i && 'string' == typeof i && (o = w.filter(i, o)),
            this.length > 1 &&
              (I[e] || w.uniqueSort(o), O.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var q = /[^\x20\t\r\n\f]+/g;
  function H(e) {
    return e;
  }
  function P(e) {
    throw e;
  }
  function R(e, t, n, i) {
    var o;
    try {
      e && p((o = e.promise))
        ? o.call(e).done(t).fail(n)
        : e && p((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    e =
      'string' == typeof e
        ? (function (e) {
            var t = {};
            return (
              w.each(e.match(q) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : w.extend({}, e);
    var t,
      n,
      i,
      o,
      r = [],
      a = [],
      s = -1,
      l = function () {
        for (o = o || e.once, i = t = !0; a.length; s = -1)
          for (n = a.shift(); ++s < r.length; )
            !1 === r[s].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((s = r.length), (n = !1));
        e.memory || (n = !1), (t = !1), o && (r = n ? [] : '');
      },
      u = {
        add: function () {
          return (
            r &&
              (n && !t && ((s = r.length - 1), a.push(n)),
              (function t(n) {
                w.each(n, function (n, i) {
                  p(i)
                    ? (e.unique && u.has(i)) || r.push(i)
                    : i && i.length && 'string' !== b(i) && t(i);
                });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; (n = w.inArray(t, r, n)) > -1; )
                r.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? w.inArray(e, r) > -1 : r.length > 0;
        },
        empty: function () {
          return r && (r = []), this;
        },
        disable: function () {
          return (o = a = []), (r = n = ''), this;
        },
        disabled: function () {
          return !r;
        },
        lock: function () {
          return (o = a = []), n || t || (r = n = ''), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, n) {
          return (
            o ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || l()),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        }
      };
    return u;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            [
              'notify',
              'progress',
              w.Callbacks('memory'),
              w.Callbacks('memory'),
              2
            ],
            [
              'resolve',
              'done',
              w.Callbacks('once memory'),
              w.Callbacks('once memory'),
              0,
              'resolved'
            ],
            [
              'reject',
              'fail',
              w.Callbacks('once memory'),
              w.Callbacks('once memory'),
              1,
              'rejected'
            ]
          ],
          i = 'pending',
          o = {
            state: function () {
              return i;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, i) {
                    var o = p(e[i[4]]) && e[i[4]];
                    r[i[1]](function () {
                      var e = o && o.apply(this, arguments);
                      e && p(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + 'With'](this, o ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, o) {
              var r = 0;
              function a(t, n, i, o) {
                return function () {
                  var s = this,
                    l = arguments,
                    u = function () {
                      var e, u;
                      if (!(t < r)) {
                        if ((e = i.apply(s, l)) === n.promise())
                          throw new TypeError('Thenable self-resolution');
                        p(
                          (u =
                            e &&
                            ('object' == typeof e || 'function' == typeof e) &&
                            e.then)
                        )
                          ? o
                            ? u.call(e, a(r, n, H, o), a(r, n, P, o))
                            : (r++,
                              u.call(
                                e,
                                a(r, n, H, o),
                                a(r, n, P, o),
                                a(r, n, H, n.notifyWith)
                              ))
                          : (i !== H && ((s = void 0), (l = [e])),
                            (o || n.resolveWith)(s, l));
                      }
                    },
                    c = o
                      ? u
                      : function () {
                          try {
                            u();
                          } catch (e) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(e, c.stackTrace),
                              t + 1 >= r &&
                                (i !== P && ((s = void 0), (l = [e])),
                                n.rejectWith(s, l));
                          }
                        };
                  t
                    ? c()
                    : (w.Deferred.getStackHook &&
                        (c.stackTrace = w.Deferred.getStackHook()),
                      e.setTimeout(c));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(a(0, e, p(o) ? o : H, e.notifyWith)),
                    n[1][3].add(a(0, e, p(t) ? t : H)),
                    n[2][3].add(a(0, e, p(i) ? i : P));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, o) : o;
            }
          },
          r = {};
        return (
          w.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (o[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    i = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (r[t[0]] = function () {
                return (
                  r[t[0] + 'With'](this === r ? void 0 : this, arguments), this
                );
              }),
              (r[t[0] + 'With'] = a.fireWith);
          }),
          o.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          r = o.call(arguments),
          a = w.Deferred(),
          s = function (e) {
            return function (n) {
              (i[e] = this),
                (r[e] = arguments.length > 1 ? o.call(arguments) : n),
                --t || a.resolveWith(i, r);
            };
          };
        if (
          t <= 1 &&
          (R(e, a.done(s(n)).resolve, a.reject, !t),
          'pending' === a.state() || p(r[n] && r[n].then))
        )
          return a.then();
        for (; n--; ) R(r[n], s(n), a.reject);
        return a.promise();
      }
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      M.test(t.name) &&
      e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var F = w.Deferred();
  function W() {
    m.removeEventListener('DOMContentLoaded', W),
      e.removeEventListener('load', W),
      w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      F.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0),
          (!0 !== e && --w.readyWait > 0) || F.resolveWith(m, [w]));
      }
    }),
    (w.ready.then = F.then),
    'complete' === m.readyState ||
    ('loading' !== m.readyState && !m.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (m.addEventListener('DOMContentLoaded', W),
        e.addEventListener('load', W));
  var B = function (e, t, n, i, o, r, a) {
      var s = 0,
        l = e.length,
        u = null == n;
      if ('object' === b(n))
        for (s in ((o = !0), n)) B(e, t, s, n[s], !0, r, a);
      else if (
        void 0 !== i &&
        ((o = !0),
        p(i) || (a = !0),
        u &&
          (a
            ? (t.call(e, i), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(w(e), n);
              }))),
        t)
      )
        for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      return o ? e : u ? t.call(e) : l ? t(e[0], n) : r;
    },
    $ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function Q(e) {
    return e.replace($, 'ms-').replace(z, U);
  }
  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = w.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            X(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e);
        if ('string' == typeof t) o[Q(t)] = n;
        else for (i in t) o[Q(i)] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][Q(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(Q)
              : (t = Q(t)) in i
              ? [t]
              : t.match(q) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || w.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      }
    });
  var V = new Y(),
    K = new Y(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = 'data-' + t.replace(J, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n = (function (e) {
            return (
              'true' === e ||
              ('false' !== e &&
                ('null' === e
                  ? null
                  : e === +e + ''
                  ? +e
                  : G.test(e)
                  ? JSON.parse(e)
                  : e))
            );
          })(n);
        } catch (o) {}
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return K.hasData(e) || V.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return V.access(e, t, n);
    },
    _removeData: function (e, t) {
      V.remove(e, t);
    }
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o,
          r = this[0],
          a = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = K.get(r)), 1 === r.nodeType && !V.get(r, 'hasDataAttrs'))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (i = a[n].name).indexOf('data-') &&
                ((i = Q(i.slice(5))), Z(r, i, o[i]));
            V.set(r, 'hasDataAttrs', !0);
          }
          return o;
        }
        return 'object' == typeof e
          ? this.each(function () {
              K.set(this, e);
            })
          : B(
              this,
              function (t) {
                var n;
                if (r && void 0 === t)
                  return void 0 !== (n = K.get(r, e)) ||
                    void 0 !== (n = Z(r, e))
                    ? n
                    : void 0;
                this.each(function () {
                  K.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          K.remove(this, e);
        });
      }
    }),
    w.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (i = V.get(e, (t = (t || 'fx') + 'queue'))),
            n &&
              (!i || Array.isArray(n)
                ? (i = V.access(e, t, w.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        var n = w.queue(e, (t = t || 'fx')),
          i = n.length,
          o = n.shift(),
          r = w._queueHooks(e, t);
        'inprogress' === o && ((o = n.shift()), i--),
          o &&
            ('fx' === t && n.unshift('inprogress'),
            delete r.stop,
            o.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              r
            )),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          V.get(e, n) ||
          V.access(e, n, {
            empty: w.Callbacks('once memory').add(function () {
              V.remove(e, [t + 'queue', n]);
            })
          })
        );
      }
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  'fx' === e && 'inprogress' !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = w.Deferred(),
          r = this,
          a = this.length,
          s = function () {
            --i || o.resolveWith(r, [r]);
          };
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          a--;

        )
          (n = V.get(r[a], e + 'queueHooks')) &&
            n.empty &&
            (i++, n.empty.add(s));
        return s(), o.promise(t);
      }
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    ie = m.documentElement,
    oe = function (e) {
      return w.contains(e.ownerDocument, e);
    },
    re = { composed: !0 };
  ie.getRootNode &&
    (oe = function (e) {
      return (
        w.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && oe(e) && 'none' === w.css(e, 'display'))
    );
  };
  function se(e, t, n, i) {
    var o,
      r,
      a = 20,
      s = i
        ? function () {
            return i.cur();
          }
        : function () {
            return w.css(e, t, '');
          },
      l = s(),
      u = (n && n[3]) || (w.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (w.cssNumber[t] || ('px' !== u && +l)) &&
        te.exec(w.css(e, t));
    if (c && c[3] !== u) {
      for (u = u || c[3], c = +(l /= 2) || 1; a--; )
        w.style(e, t, c + u),
          (1 - r) * (1 - (r = s() / l || 0.5)) <= 0 && (a = 0),
          (c /= r);
      w.style(e, t, (c *= 2) + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = c), (i.end = o))),
      o
    );
  }
  var le = {};
  function ue(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      o = le[i];
    return (
      o ||
      ((t = n.body.appendChild(n.createElement(i))),
      (o = w.css(t, 'display')),
      t.parentNode.removeChild(t),
      'none' === o && (o = 'block'),
      (le[i] = o),
      o)
    );
  }
  function ce(e, t) {
    for (var n, i, o = [], r = 0, a = e.length; r < a; r++)
      (i = e[r]).style &&
        ((n = i.style.display),
        t
          ? ('none' === n &&
              ((o[r] = V.get(i, 'display') || null),
              o[r] || (i.style.display = '')),
            '' === i.style.display && ae(i) && (o[r] = ue(i)))
          : 'none' !== n && ((o[r] = 'none'), V.set(i, 'display', n)));
    for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return ce(this, !0);
    },
    hide: function () {
      return ce(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide();
          });
    }
  });
  var fe,
    de,
    he = /^(?:checkbox|radio)$/i,
    pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    ge = /^$|^module$|\/(?:java|ecma)script/i;
  (fe = m.createDocumentFragment().appendChild(m.createElement('div'))),
    (de = m.createElement('input')).setAttribute('type', 'radio'),
    de.setAttribute('checked', 'checked'),
    de.setAttribute('name', 't'),
    fe.appendChild(de),
    (h.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (fe.innerHTML = '<textarea>x</textarea>'),
    (h.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
    (fe.innerHTML = '<option></option>'),
    (h.option = !!fe.lastChild);
  var me = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', '']
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && k(e, t)) ? w.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      V.set(e[n], 'globalEval', !t || V.get(t[n], 'globalEval'));
  }
  (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
    (me.th = me.td),
    h.option ||
      (me.optgroup = me.option = [
        1,
        "<select multiple='multiple'>",
        '</select>'
      ]);
  var be = /<|&#?\w+;/;
  function _e(e, t, n, i, o) {
    for (
      var r,
        a,
        s,
        l,
        u,
        c,
        f = t.createDocumentFragment(),
        d = [],
        h = 0,
        p = e.length;
      h < p;
      h++
    )
      if ((r = e[h]) || 0 === r)
        if ('object' === b(r)) w.merge(d, r.nodeType ? [r] : r);
        else if (be.test(r)) {
          for (
            a = a || f.appendChild(t.createElement('div')),
              s = (pe.exec(r) || ['', ''])[1].toLowerCase(),
              a.innerHTML =
                (l = me[s] || me._default)[1] + w.htmlPrefilter(r) + l[2],
              c = l[0];
            c--;

          )
            a = a.lastChild;
          w.merge(d, a.childNodes), ((a = f.firstChild).textContent = '');
        } else d.push(t.createTextNode(r));
    for (f.textContent = '', h = 0; (r = d[h++]); )
      if (i && w.inArray(r, i) > -1) o && o.push(r);
      else if (
        ((u = oe(r)), (a = ve(f.appendChild(r), 'script')), u && ye(a), n)
      )
        for (c = 0; (r = a[c++]); ) ge.test(r.type || '') && n.push(r);
    return f;
  }
  var we = /^([^.]*)(?:\.(.+)|)/;
  function xe() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ee(e, t) {
    return (
      (e ===
        (function () {
          try {
            return m.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Ce(e, t, n, i, o, r) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((i = i || n), (n = void 0)), t))
        Ce(e, s, n, i, t[s], r);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ('string' == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = Te;
    else if (!o) return e;
    return (
      1 === r &&
        ((a = o),
        ((o = function (e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, o, i, n);
      })
    );
  }
  function Se(e, t, n) {
    n
      ? (V.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              r,
              a = V.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (a.length)
                (w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((a = o.call(arguments)),
                V.set(this, t, a),
                (i = n(this, t)),
                this[t](),
                a !== (r = V.get(this, t)) || i ? V.set(this, t, !1) : (r = {}),
                a !== r)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), r && r.value
                );
            } else
              a.length &&
                (V.set(this, t, {
                  value: w.event.trigger(
                    w.extend(a[0], w.Event.prototype),
                    a.slice(1),
                    this
                  )
                }),
                e.stopImmediatePropagation());
          }
        }))
      : void 0 === V.get(e, t) && w.event.add(e, t, xe);
  }
  (w.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        g,
        m = V.get(e);
      if (X(e))
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && w.find.matchesSelector(ie, o),
            n.guid || (n.guid = w.guid++),
            (l = m.events) || (l = m.events = Object.create(null)),
            (a = m.handle) ||
              (a = m.handle = function (t) {
                return void 0 !== w && w.event.triggered !== t.type
                  ? w.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
            u = (t = (t || '').match(q) || ['']).length;
          u--;

        )
          (h = g = (s = we.exec(t[u]) || [])[1]),
            (p = (s[2] || '').split('.').sort()),
            h &&
              ((f = w.event.special[h] || {}),
              (f =
                w.event.special[(h = (o ? f.delegateType : f.bindType) || h)] ||
                {}),
              (c = w.extend(
                {
                  type: h,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && w.expr.match.needsContext.test(o),
                  namespace: p.join('.')
                },
                r
              )),
              (d = l[h]) ||
                (((d = l[h] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, i, p, a)) ||
                  (e.addEventListener && e.addEventListener(h, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              o ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (w.event.global[h] = !0));
    },
    remove: function (e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        g,
        m = V.hasData(e) && V.get(e);
      if (m && (l = m.events)) {
        for (u = (t = (t || '').match(q) || ['']).length; u--; )
          if (
            ((h = g = (s = we.exec(t[u]) || [])[1]),
            (p = (s[2] || '').split('.').sort()),
            h)
          ) {
            for (
              f = w.event.special[h] || {},
                d = l[(h = (i ? f.delegateType : f.bindType) || h)] || [],
                s =
                  s[2] &&
                  new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                a = r = d.length;
              r--;

            )
              (c = d[r]),
                (!o && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (i && i !== c.selector && ('**' !== i || !c.selector)) ||
                  (d.splice(r, 1),
                  c.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) ||
                w.removeEvent(e, h, m.handle),
              delete l[h]);
          } else for (h in l) w.event.remove(e, h + t[u], n, i, !0);
        w.isEmptyObject(l) && V.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        r,
        a,
        s = new Array(arguments.length),
        l = w.event.fix(e),
        u = (V.get(this, 'events') || Object.create(null))[l.type] || [],
        c = w.event.special[l.type] || {};
      for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, l))
      ) {
        for (
          a = w.event.handlers.call(this, l, u), t = 0;
          (o = a[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== r.namespace &&
              !l.rnamespace.test(r.namespace)) ||
              ((l.handleObj = r),
              (l.data = r.data),
              void 0 !==
                (i = (
                  (w.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, s)) &&
                !1 === (l.result = i) &&
                (l.preventDefault(), l.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        a,
        s = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !('click' === e.type && e.button >= 1))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ('click' !== e.type || !0 !== u.disabled)) {
            for (r = [], a = {}, n = 0; n < l; n++)
              void 0 === a[(o = (i = t[n]).selector + ' ')] &&
                (a[o] = i.needsContext
                  ? w(o, this).index(u) > -1
                  : w.find(o, this, null, [u]).length),
                a[o] && r.push(i);
            r.length && s.push({ elem: u, handlers: r });
          }
      return (
        (u = this), l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: p(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            he.test(t.type) && t.click && k(t, 'input') && Se(t, 'click', xe),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            he.test(t.type) && t.click && k(t, 'input') && Se(t, 'click'), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (he.test(t.type) &&
              t.click &&
              k(t, 'input') &&
              V.get(t, 'click')) ||
            k(t, 'a')
          );
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? xe
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = xe),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = xe),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = xe),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
      },
      w.event.addProp
    ),
    w.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      w.event.special[e] = {
        setup: function () {
          return Se(this, e, Ee), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t
      };
    }),
    w.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = this,
              o = e.relatedTarget,
              r = e.handleObj;
            return (
              (o && (o === i || w.contains(i, o))) ||
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          }
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, i) {
        return Ce(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Ce(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            w(e.delegateTarget).off(
              i.namespace ? i.origType + '.' + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ('object' == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      }
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function De(e, t) {
    return (
      (k(e, 'table') &&
        k(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        w(e).children('tbody')[0]) ||
      e
    );
  }
  function je(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function Oe(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Ie(e, t) {
    var n, i, o, r, a, s;
    if (1 === t.nodeType) {
      if (V.hasData(e) && (s = V.get(e).events))
        for (o in (V.remove(t, 'handle events'), s))
          for (n = 0, i = s[o].length; n < i; n++) w.event.add(t, o, s[o][n]);
      K.hasData(e) && ((r = K.access(e)), (a = w.extend({}, r)), K.set(t, a));
    }
  }
  function Le(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && he.test(e.type)
      ? (t.checked = e.checked)
      : ('input' !== n && 'textarea' !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function qe(e, t, n, i) {
    t = r(t);
    var o,
      a,
      s,
      l,
      u,
      c,
      f = 0,
      d = e.length,
      g = d - 1,
      m = t[0],
      v = p(m);
    if (v || (d > 1 && 'string' == typeof m && !h.checkClone && Ae.test(m)))
      return e.each(function (o) {
        var r = e.eq(o);
        v && (t[0] = m.call(this, o, r.html())), qe(r, t, n, i);
      });
    if (
      d &&
      ((a = (o = _e(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === o.childNodes.length && (o = a),
      a || i)
    ) {
      for (l = (s = w.map(ve(o, 'script'), je)).length; f < d; f++)
        (u = o),
          f !== g &&
            ((u = w.clone(u, !0, !0)), l && w.merge(s, ve(u, 'script'))),
          n.call(e[f], u, f);
      if (l)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < l; f++)
          ge.test((u = s[f]).type || '') &&
            !V.access(u, 'globalEval') &&
            w.contains(c, u) &&
            (u.src && 'module' !== (u.type || '').toLowerCase()
              ? w._evalUrl &&
                !u.noModule &&
                w._evalUrl(
                  u.src,
                  { nonce: u.nonce || u.getAttribute('nonce') },
                  c
                )
              : y(u.textContent.replace(Ne, ''), u, c));
    }
    return e;
  }
  function He(e, t, n) {
    for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || w.cleanData(ve(i)),
        i.parentNode &&
          (n && oe(i) && ye(ve(i, 'script')), i.parentNode.removeChild(i));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        o,
        r,
        a,
        s = e.cloneNode(!0),
        l = oe(e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (a = ve(s), i = 0, o = (r = ve(e)).length; i < o; i++)
          Le(r[i], a[i]);
      if (t)
        if (n)
          for (r = r || ve(e), a = a || ve(s), i = 0, o = r.length; i < o; i++)
            Ie(r[i], a[i]);
        else Ie(e, s);
      return (
        (a = ve(s, 'script')).length > 0 && ye(a, !l && ve(e, 'script')), s
      );
    },
    cleanData: function (e) {
      for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (X(n)) {
          if ((t = n[V.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            n[V.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    }
  }),
    w.fn.extend({
      detach: function (e) {
        return He(this, e, !0);
      },
      remove: function (e) {
        return He(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return qe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            De(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return qe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = De(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ve(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !ke.test(e) &&
              !me[(pe.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (o) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return qe(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ve(this)), n && n.replaceChild(t, this));
          },
          e
        );
      }
    }),
    w.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, i = [], o = w(e), r = o.length - 1, s = 0; s <= r; s++)
            (n = s === r ? this : this.clone(!0)),
              w(o[s])[t](n),
              a.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Pe = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    Re = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Me = function (e, t, n) {
      var i,
        o,
        r = {};
      for (o in t) (r[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.call(e)), t)) e.style[o] = r[o];
      return i;
    },
    Fe = new RegExp(ne.join('|'), 'i');
  function We(e, t, n) {
    var i,
      o,
      r,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (a = w.style(e, t)),
        !h.pixelBoxStyles() &&
          Pe.test(a) &&
          Fe.test(t) &&
          ((i = s.width),
          (o = s.minWidth),
          (r = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = i),
          (s.minWidth = o),
          (s.maxWidth = r))),
      void 0 !== a ? a + '' : a
    );
  }
  function Be(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !(function () {
    function t() {
      if (c) {
        (u.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (c.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          ie.appendChild(u).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = '1%' !== t.top),
          (l = 12 === n(t.marginLeft)),
          (c.style.right = '60%'),
          (a = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = 'absolute'),
          (r = 12 === n(c.offsetWidth / 3)),
          ie.removeChild(u),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      r,
      a,
      s,
      l,
      u = m.createElement('div'),
      c = m.createElement('div');
    c.style &&
      ((c.style.backgroundClip = 'content-box'),
      (c.cloneNode(!0).style.backgroundClip = ''),
      (h.clearCloneStyle = 'content-box' === c.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), r;
        },
        reliableTrDimensions: function () {
          var t, n, i, o;
          return (
            null == s &&
              ((t = m.createElement('table')),
              (n = m.createElement('tr')),
              (i = m.createElement('div')),
              (t.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (n.style.cssText = 'border:1px solid'),
              (n.style.height = '1px'),
              (i.style.height = '9px'),
              (i.style.display = 'block'),
              ie.appendChild(t).appendChild(n).appendChild(i),
              (o = e.getComputedStyle(n)),
              (s =
                parseInt(o.height, 10) +
                  parseInt(o.borderTopWidth, 10) +
                  parseInt(o.borderBottomWidth, 10) ===
                n.offsetHeight),
              ie.removeChild(t)),
            s
          );
        }
      }));
  })();
  var $e = ['Webkit', 'Moz', 'ms'],
    ze = m.createElement('div').style,
    Ue = {};
  function Qe(e) {
    return (
      w.cssProps[e] ||
      Ue[e] ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = $e.length;
                n--;

              )
                if ((e = $e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Xe = /^(none|table(?!-c[ea]).+)/,
    Ye = /^--/,
    Ve = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ke = { letterSpacing: '0', fontWeight: '400' };
  function Ge(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
  }
  function Je(e, t, n, i, o, r) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (i ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (l += w.css(e, n + ne[a], !0, o)),
        i
          ? ('content' === n && (l -= w.css(e, 'padding' + ne[a], !0, o)),
            'margin' !== n &&
              (l -= w.css(e, 'border' + ne[a] + 'Width', !0, o)))
          : ((l += w.css(e, 'padding' + ne[a], !0, o)),
            'padding' !== n
              ? (l += w.css(e, 'border' + ne[a] + 'Width', !0, o))
              : (s += w.css(e, 'border' + ne[a] + 'Width', !0, o)));
    return (
      !i &&
        r >= 0 &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - r - l - s - 0.5
            )
          ) || 0),
      l
    );
  }
  function Ze(e, t, n) {
    var i = Re(e),
      o =
        (!h.boxSizingReliable() || n) &&
        'border-box' === w.css(e, 'boxSizing', !1, i),
      r = o,
      a = We(e, t, i),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!h.boxSizingReliable() && o) ||
        (!h.reliableTrDimensions() && k(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === w.css(e, 'display', !1, i))) &&
        e.getClientRects().length &&
        ((o = 'border-box' === w.css(e, 'boxSizing', !1, i)),
        (r = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Je(e, t, n || (o ? 'border' : 'content'), r, i, a) +
        'px'
    );
  }
  function et(e, t, n, i, o) {
    return new et.prototype.init(e, t, n, i, o);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          a,
          s = Q(t),
          l = Ye.test(t),
          u = e.style;
        if (
          (l || (t = Qe(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (o = a.get(e, !1, i)) ? o : u[t];
        'string' == (r = typeof n) &&
          (o = te.exec(n)) &&
          o[1] &&
          ((n = se(e, t, o)), (r = 'number')),
          null != n &&
            n == n &&
            ('number' !== r ||
              l ||
              (n += (o && o[3]) || (w.cssNumber[s] ? '' : 'px')),
            h.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (u[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, i))) ||
              (l ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        a,
        s = Q(t);
      return (
        Ye.test(t) || (t = Qe(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) &&
          'get' in a &&
          (o = a.get(e, !0, n)),
        void 0 === o && (o = We(e, t, i)),
        'normal' === o && t in Ke && (o = Ke[t]),
        '' === n || n
          ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
          : o
      );
    }
  }),
    w.each(['height', 'width'], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Xe.test(w.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, t, i)
              : Me(e, Ve, function () {
                  return Ze(e, t, i);
                });
        },
        set: function (e, n, i) {
          var o,
            r = Re(e),
            a = !h.scrollboxSize() && 'absolute' === r.position,
            s = (a || i) && 'border-box' === w.css(e, 'boxSizing', !1, r),
            l = i ? Je(e, t, i, s, r) : 0;
          return (
            s &&
              a &&
              (l -= Math.ceil(
                e['offset' + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(r[t]) -
                  Je(e, t, 'border', !1, r) -
                  0.5
              )),
            l &&
              (o = te.exec(n)) &&
              'px' !== (o[3] || 'px') &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Ge(0, n, l)
          );
        }
      };
    }),
    (w.cssHooks.marginLeft = Be(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    w.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, o = {}, r = 'string' == typeof n ? n.split(' ') : [n];
            i < 4;
            i++
          )
            o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        }
      }),
        'margin' !== e && (w.cssHooks[e + t].set = Ge);
    }),
    w.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              a = 0;
            if (Array.isArray(t)) {
              for (i = Re(e), o = t.length; a < o; a++)
                r[t[a]] = w.css(e, t[a], !1, i);
              return r;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      }
    }),
    (w.Tween = et),
    ((et.prototype = {
      constructor: et,
      init: function (e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (w.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          (this.pos = t = this.options.duration
            ? w.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              )
            : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      }
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!w.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }).scrollTop = et.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing'
    }),
    (w.fx = et.prototype.init),
    (w.fx.step = {});
  var tt,
    nt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function rt() {
    nt &&
      (!1 === m.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(rt)
        : e.setTimeout(rt, w.fx.interval),
      w.fx.tick());
  }
  function at() {
    return (
      e.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function st(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o['margin' + (n = ne[i])] = o['padding' + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function lt(e, t, n) {
    for (
      var i,
        o = (ut.tweeners[t] || []).concat(ut.tweeners['*']),
        r = 0,
        a = o.length;
      r < a;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function ut(e, t, n) {
    var i,
      o,
      r = 0,
      a = ut.prefilters.length,
      s = w.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var t = tt || at(),
            n = Math.max(0, u.startTime + u.duration - t),
            i = 1 - (n / u.duration || 0),
            r = 0,
            a = u.tweens.length;
          r < a;
          r++
        )
          u.tweens[r].run(i);
        return (
          s.notifyWith(e, [u, i, n]),
          i < 1 && a
            ? n
            : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
        );
      },
      u = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: tt || at(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = w.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? u.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) u.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
              : s.rejectWith(e, [u, t]),
            this
          );
        }
      }),
      c = u.props;
    for (
      (function (e, t) {
        var n, i, o, r, a;
        for (n in e)
          if (
            ((o = t[(i = Q(n))]),
            (r = e[n]),
            Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
            n !== i && ((e[i] = r), delete e[n]),
            (a = w.cssHooks[i]) && ('expand' in a))
          )
            for (n in ((r = a.expand(r)), delete e[i], r))
              (n in e) || ((e[n] = r[n]), (t[n] = o));
          else t[i] = o;
      })(c, u.opts.specialEasing);
      r < a;
      r++
    )
      if ((i = ut.prefilters[r].call(u, e, c, u.opts)))
        return (
          p(i.stop) &&
            (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      w.map(c, lt, u),
      p(u.opts.start) && u.opts.start.call(e, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      w.fx.timer(w.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
    );
  }
  (w.Animation = w.extend(ut, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        }
      ]
    },
    tweener: function (e, t) {
      p(e) ? ((t = e), (e = ['*'])) : (e = e.match(q));
      for (var n, i = 0, o = e.length; i < o; i++)
        (ut.tweeners[(n = e[i])] = ut.tweeners[n] || []).unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l,
          u,
          c,
          f = 'width' in t || 'height' in t,
          d = this,
          h = {},
          p = e.style,
          g = e.nodeType && ae(e),
          m = V.get(e, 'fxshow');
        for (i in (n.queue ||
          (null == (a = w._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          d.always(function () {
            d.always(function () {
              a.unqueued--, w.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (it.test((o = t[i]))) {
            if (
              (delete t[i],
              (r = r || 'toggle' === o),
              o === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== o || !m || void 0 === m[i]) continue;
              g = !0;
            }
            h[i] = (m && m[i]) || w.style(e, i);
          }
        if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
          for (i in (f &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (u = m && m.display) && (u = V.get(e, 'display')),
            'none' === (c = w.css(e, 'display')) &&
              (u
                ? (c = u)
                : (ce([e], !0),
                  (u = e.style.display || u),
                  (c = w.css(e, 'display')),
                  ce([e]))),
            ('inline' === c || ('inline-block' === c && null != u)) &&
              'none' === w.css(e, 'float') &&
              (l ||
                (d.done(function () {
                  p.display = u;
                }),
                null == u && (u = 'none' === (c = p.display) ? '' : c)),
              (p.display = 'inline-block'))),
          n.overflow &&
            ((p.overflow = 'hidden'),
            d.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          h))
            l ||
              (m
                ? 'hidden' in m && (g = m.hidden)
                : (m = V.access(e, 'fxshow', { display: u })),
              r && (m.hidden = !g),
              g && ce([e], !0),
              d.done(function () {
                for (i in (g || ce([e]), V.remove(e, 'fxshow'), h))
                  w.style(e, i, h[i]);
              })),
              (l = lt(g ? m[i] : 0, i, d)),
              i in m ||
                ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      }
    ],
    prefilter: function (e, t) {
      t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
    }
  })),
    (w.speed = function (e, t, n) {
      var i =
        e && 'object' == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (p(e) && e),
              duration: e,
              easing: (n && t) || (t && !p(t) && t)
            };
      return (
        w.fx.off
          ? (i.duration = 0)
          : 'number' != typeof i.duration &&
            (i.duration =
              i.duration in w.fx.speeds
                ? w.fx.speeds[i.duration]
                : w.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function () {
          p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
        }),
        i
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var o = w.isEmptyObject(e),
          r = w.speed(t, n, i),
          a = function () {
            var t = ut(this, w.extend({}, e), r);
            (o || V.get(this, 'finish')) && t.stop(!0);
          };
        return (
          (a.finish = a),
          o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              o = null != e && e + 'queueHooks',
              r = w.timers,
              a = V.get(this);
            if (o) a[o] && a[o].stop && i(a[o]);
            else for (o in a) a[o] && a[o].stop && ot.test(o) && i(a[o]);
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != e && r[o].queue !== e) ||
                (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function () {
            var t,
              n = V.get(this),
              i = n[e + 'queue'],
              o = n[e + 'queueHooks'],
              r = w.timers,
              a = i ? i.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < a; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      }
    }),
    w.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, i, o) {
        return null == e || 'boolean' == typeof e
          ? n.apply(this, arguments)
          : this.animate(st(t, !0), e, i, o);
      };
    }),
    w.each(
      {
        slideDown: st('show'),
        slideUp: st('hide'),
        slideToggle: st('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function (e, t) {
        w.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (tt = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      nt || ((nt = !0), rt());
    }),
    (w.fx.stop = function () {
      nt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        this.queue((n = n || 'fx'), function (n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (function () {
      var e = m.createElement('input'),
        t = m.createElement('select').appendChild(m.createElement('option'));
      (e.type = 'checkbox'),
        (h.checkOn = '' !== e.value),
        (h.optSelected = t.selected),
        ((e = m.createElement('input')).value = 't'),
        (e.type = 'radio'),
        (h.radioValue = 't' === e.value);
    })();
  var ct,
    ft = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return B(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }),
    w.extend({
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === r && w.isXMLDoc(e)) ||
                (o =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : o && 'set' in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ''), n)
                : o && 'get' in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = w.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && 'radio' === t && k(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          o = t && t.match(q);
        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
      }
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ft[t] || w.find.attr;
      ft[t] = function (e, t, i) {
        var o,
          r,
          a = t.toLowerCase();
        return (
          i ||
            ((r = ft[a]),
            (ft[a] = o),
            (o = null != n(e, t, i) ? a : null),
            (ft[a] = r)),
          o
        );
      };
    });
  var dt = /^(?:input|select|textarea|button)$/i,
    ht = /^(?:a|area)$/i;
  function pt(e) {
    return (e.match(q) || []).join(' ');
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function mt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(q)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return B(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }),
    w.extend({
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && w.isXMLDoc(e)) ||
              (o = w.propHooks[(t = w.propFix[t] || t)]),
            void 0 !== n
              ? o && 'set' in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && 'get' in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : dt.test(e.nodeName) || (ht.test(e.nodeName) && e.href)
              ? 0
              : -1;
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          return null;
        },
        set: function (e) {}
      }),
    w.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0;
        if (p(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, gt(this)));
          });
        if ((t = mt(e)).length)
          for (; (n = this[l++]); )
            if (((o = gt(n)), (i = 1 === n.nodeType && ' ' + pt(o) + ' '))) {
              for (a = 0; (r = t[a++]); )
                i.indexOf(' ' + r + ' ') < 0 && (i += r + ' ');
              o !== (s = pt(i)) && n.setAttribute('class', s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0;
        if (p(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, gt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((t = mt(e)).length)
          for (; (n = this[l++]); )
            if (((o = gt(n)), (i = 1 === n.nodeType && ' ' + pt(o) + ' '))) {
              for (a = 0; (r = t[a++]); )
                for (; i.indexOf(' ' + r + ' ') > -1; )
                  i = i.replace(' ' + r + ' ', ' ');
              o !== (s = pt(i)) && n.setAttribute('class', s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = 'string' === n || Array.isArray(e);
        return 'boolean' == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : p(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, gt(this), t), t);
            })
          : this.each(function () {
              var t, o, r, a;
              if (i)
                for (o = 0, r = w(this), a = mt(e); (t = a[o++]); )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 !== e && 'boolean' !== n) ||
                  ((t = gt(this)) && V.set(this, '__className__', t),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      t || !1 === e ? '' : V.get(this, '__className__') || ''
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = ' ' + e + ' '; (n = this[i++]); )
          if (1 === n.nodeType && (' ' + pt(gt(n)) + ' ').indexOf(t) > -1)
            return !0;
        return !1;
      }
    });
  var vt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = p(e)),
          this.each(function (n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, w(this).val()) : e)
                ? (o = '')
                : 'number' == typeof o
                ? (o += '')
                : Array.isArray(o) &&
                  (o = w.map(o, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((t =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in t &&
                void 0 !== t.set(this, o, 'value')) ||
                (this.value = o));
          }))
        : o
        ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) &&
          'get' in t &&
          void 0 !== (n = t.get(o, 'value'))
          ? n
          : 'string' == typeof (n = o.value)
          ? n.replace(vt, '')
          : null == n
          ? ''
          : n
        : void 0;
    }
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, 'value');
            return null != t ? t : pt(w.text(e));
          }
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              o = e.options,
              r = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              l = a ? r + 1 : o.length;
            for (i = r < 0 ? l : a ? r : 0; i < l; i++)
              if (
                ((n = o[i]).selected || i === r) &&
                !n.disabled &&
                (!n.parentNode.disabled || !k(n.parentNode, 'optgroup'))
              ) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, i, o = e.options, r = w.makeArray(t), a = o.length;
              a--;

            )
              ((i = o[a]).selected =
                w.inArray(w.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          }
        }
      }
    }),
    w.each(['radio', 'checkbox'], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = w.inArray(w(e).val(), t) > -1);
        }
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (h.focusin = 'onfocusin' in e);
  var yt = /^(?:focusinfocus|focusoutblur)$/,
    bt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var r,
        a,
        s,
        l,
        u,
        f,
        d,
        h,
        v = [i || m],
        y = c.call(t, 'type') ? t.type : t,
        b = c.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((a = h = s = i = i || m),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !yt.test(y + w.event.triggered) &&
          (y.indexOf('.') > -1 &&
            ((b = y.split('.')), (y = b.shift()), b.sort()),
          (u = y.indexOf(':') < 0 && 'on' + y),
          ((t = t[w.expando]
            ? t
            : new w.Event(y, 'object' == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = b.join('.')),
          (t.rnamespace = t.namespace
            ? new RegExp('(^|\\.)' + b.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[y] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !g(i)) {
          for (
            yt.test((l = d.delegateType || y) + y) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            v.push(a), (s = a);
          s === (i.ownerDocument || m) &&
            v.push(s.defaultView || s.parentWindow || e);
        }
        for (r = 0; (a = v[r++]) && !t.isPropagationStopped(); )
          (h = a),
            (t.type = r > 1 ? l : d.bindType || y),
            (f =
              (V.get(a, 'events') || Object.create(null))[t.type] &&
              V.get(a, 'handle')) && f.apply(a, n),
            (f = u && a[u]) &&
              f.apply &&
              X(a) &&
              ((t.result = f.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !X(i) ||
            (u &&
              p(i[y]) &&
              !g(i) &&
              ((s = i[u]) && (i[u] = null),
              (w.event.triggered = y),
              t.isPropagationStopped() && h.addEventListener(y, bt),
              i[y](),
              t.isPropagationStopped() && h.removeEventListener(y, bt),
              (w.event.triggered = void 0),
              s && (i[u] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(i, null, t);
    }
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      }
    }),
    h.focusin ||
      w.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              o = V.access(i, t);
            o || i.addEventListener(e, n, !0), V.access(i, t, (o || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              o = V.access(i, t) - 1;
            o
              ? V.access(i, t, o)
              : (i.removeEventListener(e, n, !0), V.remove(i, t));
          }
        };
      });
  var _t = e.location,
    wt = { guid: Date.now() },
    xt = /\?/;
  w.parseXML = function (t) {
    var n, i;
    if (!t || 'string' != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (o) {}
    return (
      (i = n && n.getElementsByTagName('parsererror')[0]),
      (n && !i) ||
        w.error(
          'Invalid XML: ' +
            (i
              ? w
                  .map(i.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join('\n')
              : t)
        ),
      n
    );
  };
  var Tt = /\[\]$/,
    Et = /\r?\n/g,
    Ct = /^(?:submit|button|image|reset|file)$/i,
    St = /^(?:input|select|textarea|keygen)/i;
  function kt(e, t, n, i) {
    var o;
    if (Array.isArray(t))
      w.each(t, function (t, o) {
        n || Tt.test(e)
          ? i(e, o)
          : kt(
              e + '[' + ('object' == typeof o && null != o ? t : '') + ']',
              o,
              n,
              i
            );
      });
    else if (n || 'object' !== b(t)) i(e, t);
    else for (o in t) kt(e + '[' + o + ']', t[o], n, i);
  }
  (w.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        var n = p(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        o(this.name, this.value);
      });
    else for (n in e) kt(n, e[n], t, o);
    return i.join('&');
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, 'elements');
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(':disabled') &&
              St.test(this.nodeName) &&
              !Ct.test(e) &&
              (this.checked || !he.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, '\r\n') };
                })
              : { name: t.name, value: n.replace(Et, '\r\n') };
          })
          .get();
      }
    });
  var At = /%20/g,
    Nt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    It = /^\/\//,
    Lt = {},
    qt = {},
    Ht = '*/'.concat('*'),
    Pt = m.createElement('a');
  function Rt(e) {
    return function (t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var i,
        o = 0,
        r = t.toLowerCase().match(q) || [];
      if (p(n))
        for (; (i = r[o++]); )
          '+' === i[0]
            ? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Mt(e, t, n, i) {
    var o = {},
      r = e === qt;
    function a(s) {
      var l;
      return (
        (o[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var u = s(t, n, i);
          return 'string' != typeof u || r || o[u]
            ? r
              ? !(l = u)
              : void 0
            : (t.dataTypes.unshift(u), a(u), !1);
        }),
        l
      );
    }
    return a(t.dataTypes[0]) || (!o['*'] && a('*'));
  }
  function Ft(e, t) {
    var n,
      i,
      o = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && w.extend(!0, e, i), e;
  }
  (Pt.href = _t.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: _t.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          _t.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Ht,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript'
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON'
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': w.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, w.ajaxSettings), t) : Ft(w.ajaxSettings, e);
      },
      ajaxPrefilter: Rt(Lt),
      ajaxTransport: Rt(qt),
      ajax: function (t, n) {
        'object' == typeof t && ((n = t), (t = void 0));
        var i,
          o,
          r,
          a,
          s,
          l,
          u,
          c,
          f,
          d,
          h = w.ajaxSetup({}, (n = n || {})),
          p = h.context || h,
          g = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
          v = w.Deferred(),
          y = w.Callbacks('once memory'),
          b = h.statusCode || {},
          _ = {},
          x = {},
          T = 'canceled',
          E = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (u) {
                if (!a)
                  for (a = {}; (t = jt.exec(r)); )
                    a[t[1].toLowerCase() + ' '] = (
                      a[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                t = a[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return u ? r : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == u &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (_[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == u && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (u) E.always(e[E.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return i && i.abort(t), C(0, t), this;
            }
          };
        if (
          (v.promise(E),
          (h.url = ((t || h.url || _t.href) + '').replace(
            It,
            _t.protocol + '//'
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || '*').toLowerCase().match(q) || ['']),
          null == h.crossDomain)
        ) {
          l = m.createElement('a');
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                Pt.protocol + '//' + Pt.host != l.protocol + '//' + l.host);
          } catch (S) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            'string' != typeof h.data &&
            (h.data = w.param(h.data, h.traditional)),
          Mt(Lt, h, n, E),
          u)
        )
          return E;
        for (f in ((c = w.event && h.global) &&
          0 == w.active++ &&
          w.event.trigger('ajaxStart'),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Ot.test(h.type)),
        (o = h.url.replace(Nt, '')),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (h.data = h.data.replace(At, '+'))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || 'string' == typeof h.data) &&
              ((o += (xt.test(o) ? '&' : '?') + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Dt, '$1')),
              (d = (xt.test(o) ? '&' : '?') + '_=' + wt.guid++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (w.lastModified[o] &&
            E.setRequestHeader('If-Modified-Since', w.lastModified[o]),
          w.etag[o] && E.setRequestHeader('If-None-Match', w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          E.setRequestHeader('Content-Type', h.contentType),
        E.setRequestHeader(
          'Accept',
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ('*' !== h.dataTypes[0] ? ', ' + Ht + '; q=0.01' : '')
            : h.accepts['*']
        ),
        h.headers))
          E.setRequestHeader(f, h.headers[f]);
        if (h.beforeSend && (!1 === h.beforeSend.call(p, E, h) || u))
          return E.abort();
        if (
          ((T = 'abort'),
          y.add(h.complete),
          E.done(h.success),
          E.fail(h.error),
          (i = Mt(qt, h, n, E)))
        ) {
          if (((E.readyState = 1), c && g.trigger('ajaxSend', [E, h]), u))
            return E;
          h.async &&
            h.timeout > 0 &&
            (s = e.setTimeout(function () {
              E.abort('timeout');
            }, h.timeout));
          try {
            (u = !1), i.send(_, C);
          } catch (S) {
            if (u) throw S;
            C(-1, S);
          }
        } else C(-1, 'No Transport');
        function C(t, n, a, l) {
          var f,
            d,
            m,
            _,
            x,
            T = n;
          u ||
            ((u = !0),
            s && e.clearTimeout(s),
            (i = void 0),
            (r = l || ''),
            (E.readyState = t > 0 ? 4 : 0),
            (f = (t >= 200 && t < 300) || 304 === t),
            a &&
              (_ = (function (e, t, n) {
                for (
                  var i, o, r, a, s = e.contents, l = e.dataTypes;
                  '*' === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader('Content-Type'));
                if (i)
                  for (o in s)
                    if (s[o] && s[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + ' ' + l[0]]) {
                      r = o;
                      break;
                    }
                    a || (a = o);
                  }
                  r = r || a;
                }
                if (r) return r !== l[0] && l.unshift(r), n[r];
              })(h, E, a)),
            !f &&
              w.inArray('script', h.dataTypes) > -1 &&
              w.inArray('json', h.dataTypes) < 0 &&
              (h.converters['text script'] = function () {}),
            (_ = (function (e, t, n, i) {
              var o,
                r,
                a,
                s,
                l,
                u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
              for (r = c.shift(); r; )
                if (
                  (e.responseFields[r] && (n[e.responseFields[r]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = r),
                  (r = c.shift()))
                )
                  if ('*' === r) r = l;
                  else if ('*' !== l && l !== r) {
                    if (!(a = u[l + ' ' + r] || u['* ' + r]))
                      for (o in u)
                        if (
                          (s = o.split(' '))[1] === r &&
                          (a = u[l + ' ' + s[0]] || u['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = u[o])
                            : !0 !== u[o] && ((r = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (S) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? S
                              : 'No conversion from ' + l + ' to ' + r
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(h, _, E, f)),
            f
              ? (h.ifModified &&
                  ((x = E.getResponseHeader('Last-Modified')) &&
                    (w.lastModified[o] = x),
                  (x = E.getResponseHeader('etag')) && (w.etag[o] = x)),
                204 === t || 'HEAD' === h.type
                  ? (T = 'nocontent')
                  : 304 === t
                  ? (T = 'notmodified')
                  : ((T = _.state), (d = _.data), (f = !(m = _.error))))
              : ((m = T), (!t && T) || ((T = 'error'), t < 0 && (t = 0))),
            (E.status = t),
            (E.statusText = (n || T) + ''),
            f ? v.resolveWith(p, [d, T, E]) : v.rejectWith(p, [E, T, m]),
            E.statusCode(b),
            (b = void 0),
            c && g.trigger(f ? 'ajaxSuccess' : 'ajaxError', [E, h, f ? d : m]),
            y.fireWith(p, [E, T]),
            c &&
              (g.trigger('ajaxComplete', [E, h]),
              --w.active || w.event.trigger('ajaxStop')));
        }
        return E;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, 'script');
      }
    }),
    w.each(['get', 'post'], function (e, t) {
      w[t] = function (e, n, i, o) {
        return (
          p(n) && ((o = o || i), (i = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: o, data: n, success: i },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    w.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (w._evalUrl = function (e, t, n) {
      return w.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          w.globalEval(e, t, n);
        }
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (p(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return p(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = p(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var Wt = { 0: 200, 1223: 204 },
    Bt = w.ajaxSettings.xhr();
  (h.cors = !!Bt && 'withCredentials' in Bt),
    (h.ajax = Bt = !!Bt),
    w.ajaxTransport(function (t) {
      var n, i;
      if (h.cors || (Bt && !t.crossDomain))
        return {
          send: function (o, r) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              o['X-Requested-With'] ||
              (o['X-Requested-With'] = 'XMLHttpRequest'),
            o))
              s.setRequestHeader(a, o[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                  'abort' === e
                    ? s.abort()
                    : 'error' === e
                    ? 'number' != typeof s.status
                      ? r(0, 'error')
                      : r(s.status, s.statusText)
                    : r(
                        Wt[s.status] || s.status,
                        s.statusText,
                        'text' !== (s.responseType || 'text') ||
                          'string' != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (i = s.onerror = s.ontimeout = n('error')),
              void 0 !== s.onabort
                ? (s.onabort = i)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n('abort'));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (l) {
              if (n) throw l;
            }
          },
          abort: function () {
            n && n();
          }
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return w.globalEval(e), e;
        }
      }
    }),
    w.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    w.ajaxTransport('script', function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, o) {
            (t = w('<script>')
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o('error' === e.type ? 404 : 200, e.type);
                })
              )),
              m.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          }
        };
    });
  var $t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = zt.pop() || w.expando + '_' + wt.guid++;
      return (this[e] = !0), e;
    }
  }),
    w.ajaxPrefilter('json jsonp', function (t, n, i) {
      var o,
        r,
        a,
        s =
          !1 !== t.jsonp &&
          (Ut.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 ===
                (t.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Ut.test(t.data) &&
              'data');
      if (s || 'jsonp' === t.dataTypes[0])
        return (
          (o = t.jsonpCallback = p(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Ut, '$1' + o))
            : !1 !== t.jsonp &&
              (t.url += (xt.test(t.url) ? '&' : '?') + t.jsonp + '=' + o),
          (t.converters['script json'] = function () {
            return a || w.error(o + ' was not called'), a[0];
          }),
          (t.dataTypes[0] = 'json'),
          (r = e[o]),
          (e[o] = function () {
            a = arguments;
          }),
          i.always(function () {
            void 0 === r ? w(e).removeProp(o) : (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), zt.push(o)),
              a && p(r) && r(a[0]),
              (a = r = void 0);
          }),
          'script'
        );
    }),
    (h.createHTMLDocument =
      ((($t = m.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === $t.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((i = (t = m.implementation.createHTMLDocument(
                  ''
                )).createElement('base')).href = m.location.href),
                t.head.appendChild(i))
              : (t = m)),
          (r = !n && []),
          (o = A.exec(e))
            ? [t.createElement(o[1])]
            : ((o = _e([e], t, r)),
              r && r.length && w(r).remove(),
              w.merge([], o.childNodes)));
      var i, o, r;
    }),
    (w.fn.load = function (e, t, n) {
      var i,
        o,
        r,
        a = this,
        s = e.indexOf(' ');
      return (
        s > -1 && ((i = pt(e.slice(s))), (e = e.slice(0, s))),
        p(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (o = 'POST'),
        a.length > 0 &&
          w
            .ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (r = arguments),
                a.html(i ? w('<div>').append(w.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l,
          u = w.css(e, 'position'),
          c = w(e),
          f = {};
        'static' === u && (e.style.position = 'relative'),
          (s = c.offset()),
          (r = w.css(e, 'top')),
          (l = w.css(e, 'left')),
          ('absolute' === u || 'fixed' === u) && (r + l).indexOf('auto') > -1
            ? ((a = (i = c.position()).top), (o = i.left))
            : ((a = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          p(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + o),
          'using' in t ? t.using.call(e, f) : c.css(f);
      }
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? {
                top:
                  (t = i.getBoundingClientRect()).top +
                  (n = i.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };
          if ('fixed' === w.css(i, 'position')) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === w.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((o = w(e).offset()).top += w.css(e, 'borderTopWidth', !0)),
              (o.left += w.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - o.top - w.css(i, 'marginTop', !0),
            left: t.left - o.left - w.css(i, 'marginLeft', !0)
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && 'static' === w.css(e, 'position');

          )
            e = e.offsetParent;
          return e || ie;
        });
      }
    }),
    w.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (e, t) {
        var n = 'pageYOffset' === t;
        w.fn[e] = function (i) {
          return B(
            this,
            function (e, i, o) {
              var r;
              if (
                (g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === o)
              )
                return r ? r[t] : e[i];
              r
                ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                : (e[i] = o);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    w.each(['top', 'left'], function (e, t) {
      w.cssHooks[t] = Be(h.pixelPosition, function (e, n) {
        if (n)
          return (n = We(e, t)), Pe.test(n) ? w(e).position()[t] + 'px' : n;
      });
    }),
    w.each({ Height: 'height', Width: 'width' }, function (e, t) {
      w.each(
        { padding: 'inner' + e, content: t, '': 'outer' + e },
        function (n, i) {
          w.fn[i] = function (o, r) {
            var a = arguments.length && (n || 'boolean' != typeof o),
              s = n || (!0 === o || !0 === r ? 'margin' : 'border');
            return B(
              this,
              function (t, n, o) {
                var r;
                return g(t)
                  ? 0 === i.indexOf('outer')
                    ? t['inner' + e]
                    : t.document.documentElement['client' + e]
                  : 9 === t.nodeType
                  ? ((r = t.documentElement),
                    Math.max(
                      t.body['scroll' + e],
                      r['scroll' + e],
                      t.body['offset' + e],
                      r['offset' + e],
                      r['client' + e]
                    ))
                  : void 0 === o
                  ? w.css(t, n, s)
                  : w.style(t, n, o, s);
              },
              t,
              a ? o : void 0,
              a
            );
          };
        }
      );
    }),
    w.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }),
    w.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.proxy = function (e, t) {
    var n, i, r;
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), p(e)))
      return (
        (i = o.call(arguments, 2)),
        ((r = function () {
          return e.apply(t || this, i.concat(o.call(arguments)));
        }).guid = e.guid = e.guid || w.guid++),
        r
      );
  }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = k),
    (w.isFunction = p),
    (w.isWindow = g),
    (w.camelCase = Q),
    (w.type = b),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (w.trim = function (e) {
      return null == e ? '' : (e + '').replace(Qt, '');
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return w;
      });
  var Xt = e.jQuery,
    Yt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Yt), t && e.jQuery === w && (e.jQuery = Xt), w;
    }),
    void 0 === t && (e.jQuery = e.$ = w),
    w
  );
}),
  (function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? t(exports, require('jquery'), require('popper.js'))
      : 'function' == typeof define && define.amd
      ? define(['exports', 'jquery', 'popper.js'], t)
      : t(
          ((e =
            'undefined' != typeof globalThis
              ? globalThis
              : e || self).bootstrap = {}),
          e.jQuery,
          e.Popper
        );
  })(this, function (e, t, n) {
    'use strict';
    function i(e) {
      return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    var o = i(t),
      r = i(n);
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function s(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    }
    function l() {
      return (l =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }).apply(this, arguments);
    }
    var u = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function (e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));
        return e;
      },
      getSelectorFromElement: function (e) {
        var t = e.getAttribute('data-target');
        if (!t || '#' === t) {
          var n = e.getAttribute('href');
          t = n && '#' !== n ? n.trim() : '';
        }
        try {
          return document.querySelector(t) ? t : null;
        } catch (e) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (e) {
        if (!e) return 0;
        var t = o.default(e).css('transition-duration'),
          n = o.default(e).css('transition-delay'),
          i = parseFloat(t),
          r = parseFloat(n);
        return i || r
          ? ((t = t.split(',')[0]),
            (n = n.split(',')[0]),
            1e3 * (parseFloat(t) + parseFloat(n)))
          : 0;
      },
      reflow: function (e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function (e) {
        o.default(e).trigger('transitionend');
      },
      supportsTransitionEnd: function () {
        return Boolean('transitionend');
      },
      isElement: function (e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function (e, t, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var o = n[i],
              r = t[i],
              a =
                r && u.isElement(r)
                  ? 'element'
                  : null === (s = r) || void 0 === s
                  ? '' + s
                  : {}.toString
                      .call(s)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase();
            if (!new RegExp(o).test(a))
              throw new Error(
                e.toUpperCase() +
                  ': Option "' +
                  i +
                  '" provided type "' +
                  a +
                  '" but expected type "' +
                  o +
                  '".'
              );
          }
        var s;
      },
      findShadowRoot: function (e) {
        if (!document.documentElement.attachShadow) return null;
        if ('function' == typeof e.getRootNode) {
          var t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }
        return e instanceof ShadowRoot
          ? e
          : e.parentNode
          ? u.findShadowRoot(e.parentNode)
          : null;
      },
      jQueryDetection: function () {
        if (void 0 === o.default)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var e = o.default.fn.jquery.split(' ')[0].split('.');
        if (
          (e[0] < 2 && e[1] < 9) ||
          (1 === e[0] && 9 === e[1] && e[2] < 1) ||
          e[0] >= 4
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      }
    };
    u.jQueryDetection(),
      (o.default.fn.emulateTransitionEnd = function (e) {
        var t = this,
          n = !1;
        return (
          o.default(this).one(u.TRANSITION_END, function () {
            n = !0;
          }),
          setTimeout(function () {
            n || u.triggerTransitionEnd(t);
          }, e),
          this
        );
      }),
      (o.default.event.special[u.TRANSITION_END] = {
        bindType: 'transitionend',
        delegateType: 'transitionend',
        handle: function (e) {
          if (o.default(e.target).is(this))
            return e.handleObj.handler.apply(this, arguments);
        }
      });
    var c = 'alert',
      f = o.default.fn[c],
      d = (function () {
        function e(e) {
          this._element = e;
        }
        var t = e.prototype;
        return (
          (t.close = function (e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
              this._triggerCloseEvent(t).isDefaultPrevented() ||
                this._removeElement(t);
          }),
          (t.dispose = function () {
            o.default.removeData(this._element, 'bs.alert'),
              (this._element = null);
          }),
          (t._getRootElement = function (e) {
            var t = u.getSelectorFromElement(e),
              n = !1;
            return (
              t && (n = document.querySelector(t)),
              n || (n = o.default(e).closest('.alert')[0]),
              n
            );
          }),
          (t._triggerCloseEvent = function (e) {
            var t = o.default.Event('close.bs.alert');
            return o.default(e).trigger(t), t;
          }),
          (t._removeElement = function (e) {
            var t = this;
            if (
              (o.default(e).removeClass('show'), o.default(e).hasClass('fade'))
            ) {
              var n = u.getTransitionDurationFromElement(e);
              o.default(e)
                .one(u.TRANSITION_END, function (n) {
                  return t._destroyElement(e, n);
                })
                .emulateTransitionEnd(n);
            } else this._destroyElement(e);
          }),
          (t._destroyElement = function (e) {
            o.default(e).detach().trigger('closed.bs.alert').remove();
          }),
          (e._jQueryInterface = function (t) {
            return this.each(function () {
              var n = o.default(this),
                i = n.data('bs.alert');
              i || ((i = new e(this)), n.data('bs.alert', i)),
                'close' === t && i[t](this);
            });
          }),
          (e._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          s(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.6.0';
              }
            }
          ]),
          e
        );
      })();
    o
      .default(document)
      .on(
        'click.bs.alert.data-api',
        '[data-dismiss="alert"]',
        d._handleDismiss(new d())
      ),
      (o.default.fn[c] = d._jQueryInterface),
      (o.default.fn[c].Constructor = d),
      (o.default.fn[c].noConflict = function () {
        return (o.default.fn[c] = f), d._jQueryInterface;
      });
    var h = o.default.fn.button,
      p = (function () {
        function e(e) {
          (this._element = e), (this.shouldAvoidTriggerChange = !1);
        }
        var t = e.prototype;
        return (
          (t.toggle = function () {
            var e = !0,
              t = !0,
              n = o
                .default(this._element)
                .closest('[data-toggle="buttons"]')[0];
            if (n) {
              var i = this._element.querySelector('input:not([type="hidden"])');
              if (i) {
                if ('radio' === i.type)
                  if (i.checked && this._element.classList.contains('active'))
                    e = !1;
                  else {
                    var r = n.querySelector('.active');
                    r && o.default(r).removeClass('active');
                  }
                e &&
                  (('checkbox' !== i.type && 'radio' !== i.type) ||
                    (i.checked = !this._element.classList.contains('active')),
                  this.shouldAvoidTriggerChange ||
                    o.default(i).trigger('change')),
                  i.focus(),
                  (t = !1);
              }
            }
            this._element.hasAttribute('disabled') ||
              this._element.classList.contains('disabled') ||
              (t &&
                this._element.setAttribute(
                  'aria-pressed',
                  !this._element.classList.contains('active')
                ),
              e && o.default(this._element).toggleClass('active'));
          }),
          (t.dispose = function () {
            o.default.removeData(this._element, 'bs.button'),
              (this._element = null);
          }),
          (e._jQueryInterface = function (t, n) {
            return this.each(function () {
              var i = o.default(this),
                r = i.data('bs.button');
              r || ((r = new e(this)), i.data('bs.button', r)),
                (r.shouldAvoidTriggerChange = n),
                'toggle' === t && r[t]();
            });
          }),
          s(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.6.0';
              }
            }
          ]),
          e
        );
      })();
    o
      .default(document)
      .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
        var t = e.target,
          n = t;
        if (
          (o.default(t).hasClass('btn') ||
            (t = o.default(t).closest('.btn')[0]),
          !t || t.hasAttribute('disabled') || t.classList.contains('disabled'))
        )
          e.preventDefault();
        else {
          var i = t.querySelector('input:not([type="hidden"])');
          if (
            i &&
            (i.hasAttribute('disabled') || i.classList.contains('disabled'))
          )
            return void e.preventDefault();
          ('INPUT' !== n.tagName && 'LABEL' === t.tagName) ||
            p._jQueryInterface.call(
              o.default(t),
              'toggle',
              'INPUT' === n.tagName
            );
        }
      })
      .on(
        'focus.bs.button.data-api blur.bs.button.data-api',
        '[data-toggle^="button"]',
        function (e) {
          var t = o.default(e.target).closest('.btn')[0];
          o.default(t).toggleClass('focus', /^focus(in)?$/.test(e.type));
        }
      ),
      o.default(window).on('load.bs.button.data-api', function () {
        for (
          var e = [].slice.call(
              document.querySelectorAll('[data-toggle="buttons"] .btn')
            ),
            t = 0,
            n = e.length;
          t < n;
          t++
        ) {
          var i = e[t],
            o = i.querySelector('input:not([type="hidden"])');
          o.checked || o.hasAttribute('checked')
            ? i.classList.add('active')
            : i.classList.remove('active');
        }
        for (
          var r = 0,
            a = (e = [].slice.call(
              document.querySelectorAll('[data-toggle="button"]')
            )).length;
          r < a;
          r++
        ) {
          var s = e[r];
          'true' === s.getAttribute('aria-pressed')
            ? s.classList.add('active')
            : s.classList.remove('active');
        }
      }),
      (o.default.fn.button = p._jQueryInterface),
      (o.default.fn.button.Constructor = p),
      (o.default.fn.button.noConflict = function () {
        return (o.default.fn.button = h), p._jQueryInterface;
      });
    var g = 'carousel',
      m = o.default.fn[g],
      v = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: 'hover',
        wrap: !0,
        touch: !0
      },
      y = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        slide: '(boolean|string)',
        pause: '(string|boolean)',
        wrap: 'boolean',
        touch: 'boolean'
      },
      b = { TOUCH: 'touch', PEN: 'pen' },
      _ = (function () {
        function e(e, t) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._element = e),
            (this._indicatorsElement = this._element.querySelector(
              '.carousel-indicators'
            )),
            (this._touchSupported =
              'ontouchstart' in document.documentElement ||
              navigator.maxTouchPoints > 0),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var t = e.prototype;
        return (
          (t.next = function () {
            this._isSliding || this._slide('next');
          }),
          (t.nextWhenVisible = function () {
            var e = o.default(this._element);
            !document.hidden &&
              e.is(':visible') &&
              'hidden' !== e.css('visibility') &&
              this.next();
          }),
          (t.prev = function () {
            this._isSliding || this._slide('prev');
          }),
          (t.pause = function (e) {
            e || (this._isPaused = !0),
              this._element.querySelector(
                '.carousel-item-next, .carousel-item-prev'
              ) && (u.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (t.cycle = function (e) {
            e || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._updateInterval(),
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                )));
          }),
          (t.to = function (e) {
            var t = this;
            this._activeElement = this._element.querySelector(
              '.active.carousel-item'
            );
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding)
                o.default(this._element).one('slid.bs.carousel', function () {
                  return t.to(e);
                });
              else {
                if (n === e) return this.pause(), void this.cycle();
                this._slide(e > n ? 'next' : 'prev', this._items[e]);
              }
          }),
          (t.dispose = function () {
            o.default(this._element).off('.bs.carousel'),
              o.default.removeData(this._element, 'bs.carousel'),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (t._getConfig = function (e) {
            return (e = l({}, v, e)), u.typeCheckConfig(g, e, y), e;
          }),
          (t._handleSwipe = function () {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
              var t = e / this.touchDeltaX;
              (this.touchDeltaX = 0),
                t > 0 && this.prev(),
                t < 0 && this.next();
            }
          }),
          (t._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              o.default(this._element).on('keydown.bs.carousel', function (t) {
                return e._keydown(t);
              }),
              'hover' === this._config.pause &&
                o
                  .default(this._element)
                  .on('mouseenter.bs.carousel', function (t) {
                    return e.pause(t);
                  })
                  .on('mouseleave.bs.carousel', function (t) {
                    return e.cycle(t);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (t._addTouchEventListeners = function () {
            var e = this;
            if (this._touchSupported) {
              var t = function (t) {
                  e._pointerEvent &&
                  b[t.originalEvent.pointerType.toUpperCase()]
                    ? (e.touchStartX = t.originalEvent.clientX)
                    : e._pointerEvent ||
                      (e.touchStartX = t.originalEvent.touches[0].clientX);
                },
                n = function (t) {
                  e._pointerEvent &&
                    b[t.originalEvent.pointerType.toUpperCase()] &&
                    (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    'hover' === e._config.pause &&
                      (e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval)));
                };
              o
                .default(this._element.querySelectorAll('.carousel-item img'))
                .on('dragstart.bs.carousel', function (e) {
                  return e.preventDefault();
                }),
                this._pointerEvent
                  ? (o
                      .default(this._element)
                      .on('pointerdown.bs.carousel', function (e) {
                        return t(e);
                      }),
                    o
                      .default(this._element)
                      .on('pointerup.bs.carousel', function (e) {
                        return n(e);
                      }),
                    this._element.classList.add('pointer-event'))
                  : (o
                      .default(this._element)
                      .on('touchstart.bs.carousel', function (e) {
                        return t(e);
                      }),
                    o
                      .default(this._element)
                      .on('touchmove.bs.carousel', function (t) {
                        return (function (t) {
                          e.touchDeltaX =
                            t.originalEvent.touches &&
                            t.originalEvent.touches.length > 1
                              ? 0
                              : t.originalEvent.touches[0].clientX -
                                e.touchStartX;
                        })(t);
                      }),
                    o
                      .default(this._element)
                      .on('touchend.bs.carousel', function (e) {
                        return n(e);
                      }));
            }
          }),
          (t._keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
          }),
          (t._getItemIndex = function (e) {
            return (
              (this._items =
                e && e.parentNode
                  ? [].slice.call(
                      e.parentNode.querySelectorAll('.carousel-item')
                    )
                  : []),
              this._items.indexOf(e)
            );
          }),
          (t._getItemByDirection = function (e, t) {
            var n = 'next' === e,
              i = 'prev' === e,
              o = this._getItemIndex(t);
            if (
              ((i && 0 === o) || (n && o === this._items.length - 1)) &&
              !this._config.wrap
            )
              return t;
            var r = (o + ('prev' === e ? -1 : 1)) % this._items.length;
            return -1 === r
              ? this._items[this._items.length - 1]
              : this._items[r];
          }),
          (t._triggerSlideEvent = function (e, t) {
            var n = this._getItemIndex(e),
              i = this._getItemIndex(
                this._element.querySelector('.active.carousel-item')
              ),
              r = o.default.Event('slide.bs.carousel', {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n
              });
            return o.default(this._element).trigger(r), r;
          }),
          (t._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              var t = [].slice.call(
                this._indicatorsElement.querySelectorAll('.active')
              );
              o.default(t).removeClass('active');
              var n = this._indicatorsElement.children[this._getItemIndex(e)];
              n && o.default(n).addClass('active');
            }
          }),
          (t._updateInterval = function () {
            var e =
              this._activeElement ||
              this._element.querySelector('.active.carousel-item');
            if (e) {
              var t = parseInt(e.getAttribute('data-interval'), 10);
              t
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = t))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
            }
          }),
          (t._slide = function (e, t) {
            var n,
              i,
              r,
              a = this,
              s = this._element.querySelector('.active.carousel-item'),
              l = this._getItemIndex(s),
              c = t || (s && this._getItemByDirection(e, s)),
              f = this._getItemIndex(c),
              d = Boolean(this._interval);
            if (
              ('next' === e
                ? ((n = 'carousel-item-left'),
                  (i = 'carousel-item-next'),
                  (r = 'left'))
                : ((n = 'carousel-item-right'),
                  (i = 'carousel-item-prev'),
                  (r = 'right')),
              c && o.default(c).hasClass('active'))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(c, r).isDefaultPrevented() &&
              s &&
              c
            ) {
              (this._isSliding = !0),
                d && this.pause(),
                this._setActiveIndicatorElement(c),
                (this._activeElement = c);
              var h = o.default.Event('slid.bs.carousel', {
                relatedTarget: c,
                direction: r,
                from: l,
                to: f
              });
              if (o.default(this._element).hasClass('slide')) {
                o.default(c).addClass(i),
                  u.reflow(c),
                  o.default(s).addClass(n),
                  o.default(c).addClass(n);
                var p = u.getTransitionDurationFromElement(s);
                o.default(s)
                  .one(u.TRANSITION_END, function () {
                    o
                      .default(c)
                      .removeClass(n + ' ' + i)
                      .addClass('active'),
                      o.default(s).removeClass('active ' + i + ' ' + n),
                      (a._isSliding = !1),
                      setTimeout(function () {
                        return o.default(a._element).trigger(h);
                      }, 0);
                  })
                  .emulateTransitionEnd(p);
              } else
                o.default(s).removeClass('active'),
                  o.default(c).addClass('active'),
                  (this._isSliding = !1),
                  o.default(this._element).trigger(h);
              d && this.cycle();
            }
          }),
          (e._jQueryInterface = function (t) {
            return this.each(function () {
              var n = o.default(this).data('bs.carousel'),
                i = l({}, v, o.default(this).data());
              'object' == typeof t && (i = l({}, i, t));
              var r = 'string' == typeof t ? t : i.slide;
              if (
                (n ||
                  ((n = new e(this, i)),
                  o.default(this).data('bs.carousel', n)),
                'number' == typeof t)
              )
                n.to(t);
              else if ('string' == typeof r) {
                if (void 0 === n[r])
                  throw new TypeError('No method named "' + r + '"');
                n[r]();
              } else i.interval && i.ride && (n.pause(), n.cycle());
            });
          }),
          (e._dataApiClickHandler = function (t) {
            var n = u.getSelectorFromElement(this);
            if (n) {
              var i = o.default(n)[0];
              if (i && o.default(i).hasClass('carousel')) {
                var r = l({}, o.default(i).data(), o.default(this).data()),
                  a = this.getAttribute('data-slide-to');
                a && (r.interval = !1),
                  e._jQueryInterface.call(o.default(i), r),
                  a && o.default(i).data('bs.carousel').to(a),
                  t.preventDefault();
              }
            }
          }),
          s(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.6.0';
              }
            },
            {
              key: 'Default',
              get: function () {
                return v;
              }
            }
          ]),
          e
        );
      })();
    o
      .default(document)
      .on(
        'click.bs.carousel.data-api',
        '[data-slide], [data-slide-to]',
        _._dataApiClickHandler
      ),
      o.default(window).on('load.bs.carousel.data-api', function () {
        for (
          var e = [].slice.call(
              document.querySelectorAll('[data-ride="carousel"]')
            ),
            t = 0,
            n = e.length;
          t < n;
          t++
        ) {
          var i = o.default(e[t]);
          _._jQueryInterface.call(i, i.data());
        }
      }),
      (o.default.fn[g] = _._jQueryInterface),
      (o.default.fn[g].Constructor = _),
      (o.default.fn[g].noConflict = function () {
        return (o.default.fn[g] = m), _._jQueryInterface;
      });
    var w = 'collapse',
      x = o.default.fn[w],
      T = { toggle: !0, parent: '' },
      E = { toggle: 'boolean', parent: '(string|element)' },
      C = (function () {
        function e(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  e.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  e.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(
                document.querySelectorAll('[data-toggle="collapse"]')
              ),
              i = 0,
              o = n.length;
            i < o;
            i++
          ) {
            var r = n[i],
              a = u.getSelectorFromElement(r),
              s = [].slice
                .call(document.querySelectorAll(a))
                .filter(function (t) {
                  return t === e;
                });
            null !== a &&
              s.length > 0 &&
              ((this._selector = a), this._triggerArray.push(r));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var t = e.prototype;
        return (
          (t.toggle = function () {
            o.default(this._element).hasClass('show')
              ? this.hide()
              : this.show();
          }),
          (t.show = function () {
            var t,
              n,
              i = this;
            if (
              !(
                this._isTransitioning ||
                o.default(this._element).hasClass('show') ||
                (this._parent &&
                  0 ===
                    (t = [].slice
                      .call(this._parent.querySelectorAll('.show, .collapsing'))
                      .filter(function (e) {
                        return 'string' == typeof i._config.parent
                          ? e.getAttribute('data-parent') === i._config.parent
                          : e.classList.contains('collapse');
                      })).length &&
                  (t = null),
                t &&
                  (n = o.default(t).not(this._selector).data('bs.collapse')) &&
                  n._isTransitioning)
              )
            ) {
              var r = o.default.Event('show.bs.collapse');
              if (
                (o.default(this._element).trigger(r), !r.isDefaultPrevented())
              ) {
                t &&
                  (e._jQueryInterface.call(
                    o.default(t).not(this._selector),
                    'hide'
                  ),
                  n || o.default(t).data('bs.collapse', null));
                var a = this._getDimension();
                o
                  .default(this._element)
                  .removeClass('collapse')
                  .addClass('collapsing'),
                  (this._element.style[a] = 0),
                  this._triggerArray.length &&
                    o
                      .default(this._triggerArray)
                      .removeClass('collapsed')
                      .attr('aria-expanded', !0),
                  this.setTransitioning(!0);
                var s = 'scroll' + (a[0].toUpperCase() + a.slice(1)),
                  l = u.getTransitionDurationFromElement(this._element);
                o
                  .default(this._element)
                  .one(u.TRANSITION_END, function () {
                    o
                      .default(i._element)
                      .removeClass('collapsing')
                      .addClass('collapse show'),
                      (i._element.style[a] = ''),
                      i.setTransitioning(!1),
                      o.default(i._element).trigger('shown.bs.collapse');
                  })
                  .emulateTransitionEnd(l),
                  (this._element.style[a] = this._element[s] + 'px');
              }
            }
          }),
          (t.hide = function () {
            var e = this;
            if (
              !this._isTransitioning &&
              o.default(this._element).hasClass('show')
            ) {
              var t = o.default.Event('hide.bs.collapse');
              if (
                (o.default(this._element).trigger(t), !t.isDefaultPrevented())
              ) {
                var n = this._getDimension();
                (this._element.style[n] =
                  this._element.getBoundingClientRect()[n] + 'px'),
                  u.reflow(this._element),
                  o
                    .default(this._element)
                    .addClass('collapsing')
                    .removeClass('collapse show');
                var i = this._triggerArray.length;
                if (i > 0)
                  for (var r = 0; r < i; r++) {
                    var a = this._triggerArray[r],
                      s = u.getSelectorFromElement(a);
                    null !== s &&
                      (o
                        .default([].slice.call(document.querySelectorAll(s)))
                        .hasClass('show') ||
                        o
                          .default(a)
                          .addClass('collapsed')
                          .attr('aria-expanded', !1));
                  }
                this.setTransitioning(!0), (this._element.style[n] = '');
                var l = u.getTransitionDurationFromElement(this._element);
                o.default(this._element)
                  .one(u.TRANSITION_END, function () {
                    e.setTransitioning(!1),
                      o
                        .default(e._element)
                        .removeClass('collapsing')
                        .addClass('collapse')
                        .trigger('hidden.bs.collapse');
                  })
                  .emulateTransitionEnd(l);
              }
            }
          }),
          (t.setTransitioning = function (e) {
            this._isTransitioning = e;
          }),
          (t.dispose = function () {
            o.default.removeData(this._element, 'bs.collapse'),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (t._getConfig = function (e) {
            return (
              ((e = l({}, T, e)).toggle = Boolean(e.toggle)),
              u.typeCheckConfig(w, e, E),
              e
            );
          }),
          (t._getDimension = function () {
            return o.default(this._element).hasClass('width')
              ? 'width'
              : 'height';
          }),
          (t._getParent = function () {
            var t,
              n = this;
            u.isElement(this._config.parent)
              ? ((t = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (t = this._config.parent[0]))
              : (t = document.querySelector(this._config.parent));
            var i = [].slice.call(
              t.querySelectorAll(
                '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]'
              )
            );
            return (
              o.default(i).each(function (t, i) {
                n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i]);
              }),
              t
            );
          }),
          (t._addAriaAndCollapsedClass = function (e, t) {
            var n = o.default(e).hasClass('show');
            t.length &&
              o
                .default(t)
                .toggleClass('collapsed', !n)
                .attr('aria-expanded', n);
          }),
          (e._getTargetFromElement = function (e) {
            var t = u.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null;
          }),
          (e._jQueryInterface = function (t) {
            return this.each(function () {
              var n = o.default(this),
                i = n.data('bs.collapse'),
                r = l({}, T, n.data(), 'object' == typeof t && t ? t : {});
              if (
                (!i &&
                  r.toggle &&
                  'string' == typeof t &&
                  /show|hide/.test(t) &&
                  (r.toggle = !1),
                i || ((i = new e(this, r)), n.data('bs.collapse', i)),
                'string' == typeof t)
              ) {
                if (void 0 === i[t])
                  throw new TypeError('No method named "' + t + '"');
                i[t]();
              }
            });
          }),
          s(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.6.0';
              }
            },
            {
              key: 'Default',
              get: function () {
                return T;
              }
            }
          ]),
          e
        );
      })();
    o
      .default(document)
      .on(
        'click.bs.collapse.data-api',
        '[data-toggle="collapse"]',
        function (e) {
          'A' === e.currentTarget.tagName && e.preventDefault();
          var t = o.default(this),
            n = u.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(n));
          o.default(i).each(function () {
            var e = o.default(this),
              n = e.data('bs.collapse') ? 'toggle' : t.data();
            C._jQueryInterface.call(e, n);
          });
        }
      ),
      (o.default.fn[w] = C._jQueryInterface),
      (o.default.fn[w].Constructor = C),
      (o.default.fn[w].noConflict = function () {
        return (o.default.fn[w] = x), C._jQueryInterface;
      });
    var S = 'dropdown',
      k = o.default.fn[S],
      A = new RegExp('38|40|27'),
      N = {
        offset: 0,
        flip: !0,
        boundary: 'scrollParent',
        reference: 'toggle',
        display: 'dynamic',
        popperConfig: null
      },
      D = {
        offset: '(number|string|function)',
        flip: 'boolean',
        boundary: '(string|element)',
        reference: '(string|element)',
        display: 'string',
        popperConfig: '(null|object)'
      },
      j = (function () {
        function e(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var t = e.prototype;
        return (
          (t.toggle = function () {
            if (
              !this._element.disabled &&
              !o.default(this._element).hasClass('disabled')
            ) {
              var t = o.default(this._menu).hasClass('show');
              e._clearMenus(), t || this.show(!0);
            }
          }),
          (t.show = function (t) {
            if (
              (void 0 === t && (t = !1),
              !(
                this._element.disabled ||
                o.default(this._element).hasClass('disabled') ||
                o.default(this._menu).hasClass('show')
              ))
            ) {
              var n = { relatedTarget: this._element },
                i = o.default.Event('show.bs.dropdown', n),
                a = e._getParentFromElement(this._element);
              if ((o.default(a).trigger(i), !i.isDefaultPrevented())) {
                if (!this._inNavbar && t) {
                  if (void 0 === r.default)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                    );
                  var s = this._element;
                  'parent' === this._config.reference
                    ? (s = a)
                    : u.isElement(this._config.reference) &&
                      ((s = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (s = this._config.reference[0])),
                    'scrollParent' !== this._config.boundary &&
                      o.default(a).addClass('position-static'),
                    (this._popper = new r.default(
                      s,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                'ontouchstart' in document.documentElement &&
                  0 === o.default(a).closest('.navbar-nav').length &&
                  o
                    .default(document.body)
                    .children()
                    .on('mouseover', null, o.default.noop),
                  this._element.focus(),
                  this._element.setAttribute('aria-expanded', !0),
                  o.default(this._menu).toggleClass('show'),
                  o
                    .default(a)
                    .toggleClass('show')
                    .trigger(o.default.Event('shown.bs.dropdown', n));
              }
            }
          }),
          (t.hide = function () {
            if (
              !this._element.disabled &&
              !o.default(this._element).hasClass('disabled') &&
              o.default(this._menu).hasClass('show')
            ) {
              var t = { relatedTarget: this._element },
                n = o.default.Event('hide.bs.dropdown', t),
                i = e._getParentFromElement(this._element);
              o.default(i).trigger(n),
                n.isDefaultPrevented() ||
                  (this._popper && this._popper.destroy(),
                  o.default(this._menu).toggleClass('show'),
                  o
                    .default(i)
                    .toggleClass('show')
                    .trigger(o.default.Event('hidden.bs.dropdown', t)));
            }
          }),
          (t.dispose = function () {
            o.default.removeData(this._element, 'bs.dropdown'),
              o.default(this._element).off('.bs.dropdown'),
              (this._element = null),
              (this._menu = null),
              null !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (t.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t._addEventListeners = function () {
            var e = this;
            o.default(this._element).on('click.bs.dropdown', function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (t._getConfig = function (e) {
            return (
              (e = l(
                {},
                this.constructor.Default,
                o.default(this._element).data(),
                e
              )),
              u.typeCheckConfig(S, e, this.constructor.DefaultType),
              e
            );
          }),
          (t._getMenuElement = function () {
            if (!this._menu) {
              var t = e._getParentFromElement(this._element);
              t && (this._menu = t.querySelector('.dropdown-menu'));
            }
            return this._menu;
          }),
          (t._getPlacement = function () {
            var e = o.default(this._element.parentNode),
              t = 'bottom-start';
            return (
              e.hasClass('dropup')
                ? (t = o.default(this._menu).hasClass('dropdown-menu-right')
                    ? 'top-end'
                    : 'top-start')
                : e.hasClass('dropright')
                ? (t = 'right-start')
                : e.hasClass('dropleft')
                ? (t = 'left-start')
                : o.default(this._menu).hasClass('dropdown-menu-right') &&
                  (t = 'bottom-end'),
              t
            );
          }),
          (t._detectNavbar = function () {
            return o.default(this._element).closest('.navbar').length > 0;
          }),
          (t._getOffset = function () {
            var e = this,
              t = {};
            return (
              'function' == typeof this._config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = l(
                        {},
                        t.offsets,
                        e._config.offset(t.offsets, e._element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this._config.offset),
              t
            );
          }),
          (t._getPopperConfig = function () {
            var e = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary }
              }
            };
            return (
              'static' === this._config.display &&
                (e.modifiers.applyStyle = { enabled: !1 }),
              l({}, e, this._config.popperConfig)
            );
          }),
          (e._jQueryInterface = function (t) {
            return this.each(function () {
              var n = o.default(this).data('bs.dropdown');
              if (
                (n ||
                  ((n = new e(this, 'object' == typeof t ? t : null)),
                  o.default(this).data('bs.dropdown', n)),
                'string' == typeof t)
              ) {
                if (void 0 === n[t])
                  throw new TypeError('No method named "' + t + '"');
                n[t]();
              }
            });
          }),
          (e._clearMenus = function (t) {
            if (!t || (3 !== t.which && ('keyup' !== t.type || 9 === t.which)))
              for (
                var n = [].slice.call(
                    document.querySelectorAll('[data-toggle="dropdown"]')
                  ),
                  i = 0,
                  r = n.length;
                i < r;
                i++
              ) {
                var a = e._getParentFromElement(n[i]),
                  s = o.default(n[i]).data('bs.dropdown'),
                  l = { relatedTarget: n[i] };
                if ((t && 'click' === t.type && (l.clickEvent = t), s)) {
                  var u = s._menu;
                  if (
                    o.default(a).hasClass('show') &&
                    !(
                      t &&
                      (('click' === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ('keyup' === t.type && 9 === t.which)) &&
                      o.default.contains(a, t.target)
                    )
                  ) {
                    var c = o.default.Event('hide.bs.dropdown', l);
                    o.default(a).trigger(c),
                      c.isDefaultPrevented() ||
                        ('ontouchstart' in document.documentElement &&
                          o
                            .default(document.body)
                            .children()
                            .off('mouseover', null, o.default.noop),
                        n[i].setAttribute('aria-expanded', 'false'),
                        s._popper && s._popper.destroy(),
                        o.default(u).removeClass('show'),
                        o
                          .default(a)
                          .removeClass('show')
                          .trigger(o.default.Event('hidden.bs.dropdown', l)));
                  }
                }
              }
          }),
          (e._getParentFromElement = function (e) {
            var t,
              n = u.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode;
          }),
          (e._dataApiKeydownHandler = function (t) {
            if (
              !(/input|textarea/i.test(t.target.tagName)
                ? 32 === t.which ||
                  (27 !== t.which &&
                    ((40 !== t.which && 38 !== t.which) ||
                      o.default(t.target).closest('.dropdown-menu').length))
                : !A.test(t.which)) &&
              !this.disabled &&
              !o.default(this).hasClass('disabled')
            ) {
              var n = e._getParentFromElement(this),
                i = o.default(n).hasClass('show');
              if (i || 27 !== t.which) {
                if (
                  (t.preventDefault(),
                  t.stopPropagation(),
                  !i || 27 === t.which || 32 === t.which)
                )
                  return (
                    27 === t.which &&
                      o
                        .default(n.querySelector('[data-toggle="dropdown"]'))
                        .trigger('focus'),
                    void o.default(this).trigger('click')
                  );
                var r = [].slice
                  .call(
                    n.querySelectorAll(
                      '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
                    )
                  )
                  .filter(function (e) {
                    return o.default(e).is(':visible');
                  });
                if (0 !== r.length) {
                  var a = r.indexOf(t.target);
                  38 === t.which && a > 0 && a--,
                    40 === t.which && a < r.length - 1 && a++,
                    a < 0 && (a = 0),
                    r[a].focus();
                }
              }
            }
          }),
          s(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.6.0';
              }
            },
            {
              key: 'Default',
              get: function () {
                return N;
              }
            },
            {
              key: 'DefaultType',
              get: function () {
                return D;
              }
            }
          ]),
          e
        );
      })();
    o
      .default(document)
      .on(
        'keydown.bs.dropdown.data-api',
        '[data-toggle="dropdown"]',
        j._dataApiKeydownHandler
      )
      .on(
        'keydown.bs.dropdown.data-api',
        '.dropdown-menu',
        j._dataApiKeydownHandler
      )
      .on(
        'click.bs.dropdown.data-api keyup.bs.dropdown.data-api',
        j._clearMenus
      )
      .on(
        'click.bs.dropdown.data-api',
        '[data-toggle="dropdown"]',
        function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            j._jQueryInterface.call(o.default(this), 'toggle');
        }
      )
      .on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
        e.stopPropagation();
      }),
      (o.default.fn[S] = j._jQueryInterface),
      (o.default.fn[S].Constructor = j),
      (o.default.fn[S].noConflict = function () {
        return (o.default.fn[S] = k), j._jQueryInterface;
      });
    var O = o.default.fn.modal,
      I = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      L = {
        backdrop: '(boolean|string)',
        keyboard: 'boolean',
        focus: 'boolean',
        show: 'boolean'
      },
      q = (function () {
        function e(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector('.modal-dialog')),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var t = e.prototype;
        return (
          (t.toggle = function (e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (t.show = function (e) {
            var t = this;
            if (!this._isShown && !this._isTransitioning) {
              o.default(this._element).hasClass('fade') &&
                (this._isTransitioning = !0);
              var n = o.default.Event('show.bs.modal', { relatedTarget: e });
              o.default(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  o
                    .default(this._element)
                    .on(
                      'click.dismiss.bs.modal',
                      '[data-dismiss="modal"]',
                      function (e) {
                        return t.hide(e);
                      }
                    ),
                  o
                    .default(this._dialog)
                    .on('mousedown.dismiss.bs.modal', function () {
                      o.default(t._element).one(
                        'mouseup.dismiss.bs.modal',
                        function (e) {
                          o.default(e.target).is(t._element) &&
                            (t._ignoreBackdropClick = !0);
                        }
                      );
                    }),
                  this._showBackdrop(function () {
                    return t._showElement(e);
                  }));
            }
          }),
          (t.hide = function (e) {
            var t = this;
            if (
              (e && e.preventDefault(), this._isShown && !this._isTransitioning)
            ) {
              var n = o.default.Event('hide.bs.modal');
              if (
                (o.default(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var i = o.default(this._element).hasClass('fade');
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  o.default(document).off('focusin.bs.modal'),
                  o.default(this._element).removeClass('show'),
                  o.default(this._element).off('click.dismiss.bs.modal'),
                  o.default(this._dialog).off('mousedown.dismiss.bs.modal'),
                  i)
                ) {
                  var r = u.getTransitionDurationFromElement(this._element);
                  o.default(this._element)
                    .one(u.TRANSITION_END, function (e) {
                      return t._hideModal(e);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (t.dispose = function () {
            [window, this._element, this._dialog].forEach(function (e) {
              return o.default(e).off('.bs.modal');
            }),
              o.default(document).off('focusin.bs.modal'),
              o.default.removeData(this._element, 'bs.modal'),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (t.handleUpdate = function () {
            this._adjustDialog();
          }),
          (t._getConfig = function (e) {
            return (e = l({}, I, e)), u.typeCheckConfig('modal', e, L), e;
          }),
          (t._triggerBackdropTransition = function () {
            var e = this,
              t = o.default.Event('hidePrevented.bs.modal');
            if (
              (o.default(this._element).trigger(t), !t.isDefaultPrevented())
            ) {
              var n =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              n || (this._element.style.overflowY = 'hidden'),
                this._element.classList.add('modal-static');
              var i = u.getTransitionDurationFromElement(this._dialog);
              o.default(this._element).off(u.TRANSITION_END),
                o
                  .default(this._element)
                  .one(u.TRANSITION_END, function () {
                    e._element.classList.remove('modal-static'),
                      n ||
                        o
                          .default(e._element)
                          .one(u.TRANSITION_END, function () {
                            e._element.style.overflowY = '';
                          })
                          .emulateTransitionEnd(e._element, i);
                  })
                  .emulateTransitionEnd(i),
                this._element.focus();
            }
          }),
          (t._showElement = function (e) {
            var t = this,
              n = o.default(this._element).hasClass('fade'),
              i = this._dialog
                ? this._dialog.querySelector('.modal-body')
                : null;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = 'block'),
              this._element.removeAttribute('aria-hidden'),
              this._element.setAttribute('aria-modal', !0),
              this._element.setAttribute('role', 'dialog'),
              o.default(this._dialog).hasClass('modal-dialog-scrollable') && i
                ? (i.scrollTop = 0)
                : (this._element.scrollTop = 0),
              n && u.reflow(this._element),
              o.default(this._element).addClass('show'),
              this._config.focus && this._enforceFocus();
            var r = o.default.Event('shown.bs.modal', { relatedTarget: e }),
              a = function () {
                t._config.focus && t._element.focus(),
                  (t._isTransitioning = !1),
                  o.default(t._element).trigger(r);
              };
            if (n) {
              var s = u.getTransitionDurationFromElement(this._dialog);
              o.default(this._dialog)
                .one(u.TRANSITION_END, a)
                .emulateTransitionEnd(s);
            } else a();
          }),
          (t._enforceFocus = function () {
            var e = this;
            o.default(document)
              .off('focusin.bs.modal')
              .on('focusin.bs.modal', function (t) {
                document !== t.target &&
                  e._element !== t.target &&
                  0 === o.default(e._element).has(t.target).length &&
                  e._element.focus();
              });
          }),
          (t._setEscapeEvent = function () {
            var e = this;
            this._isShown
              ? o
                  .default(this._element)
                  .on('keydown.dismiss.bs.modal', function (t) {
                    e._config.keyboard && 27 === t.which
                      ? (t.preventDefault(), e.hide())
                      : e._config.keyboard ||
                        27 !== t.which ||
                        e._triggerBackdropTransition();
                  })
              : this._isShown ||
                o.default(this._element).off('keydown.dismiss.bs.modal');
          }),
          (t._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? o.default(window).on('resize.bs.modal', function (t) {
                  return e.handleUpdate(t);
                })
              : o.default(window).off('resize.bs.modal');
          }),
          (t._hideModal = function () {
            var e = this;
            (this._element.style.display = 'none'),
              this._element.setAttribute('aria-hidden', !0),
              this._element.removeAttribute('aria-modal'),
              this._element.removeAttribute('role'),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                o.default(document.body).removeClass('modal-open'),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  o.default(e._element).trigger('hidden.bs.modal');
              });
          }),
          (t._removeBackdrop = function () {
            this._backdrop &&
              (o.default(this._backdrop).remove(), (this._backdrop = null));
          }),
          (t._showBackdrop = function (e) {
            var t = this,
              n = o.default(this._element).hasClass('fade') ? 'fade' : '';
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement('div')),
                (this._backdrop.className = 'modal-backdrop'),
                n && this._backdrop.classList.add(n),
                o.default(this._backdrop).appendTo(document.body),
                o
                  .default(this._element)
                  .on('click.dismiss.bs.modal', function (e) {
                    t._ignoreBackdropClick
                      ? (t._ignoreBackdropClick = !1)
                      : e.target === e.currentTarget &&
                        ('static' === t._config.backdrop
                          ? t._triggerBackdropTransition()
                          : t.hide());
                  }),
                n && u.reflow(this._backdrop),
                o.default(this._backdrop).addClass('show'),
                !e)
              )
                return;
              if (!n) return void e();
              var i = u.getTransitionDurationFromElement(this._backdrop);
              o.default(this._backdrop)
                .one(u.TRANSITION_END, e)
                .emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              o.default(this._backdrop).removeClass('show');
              var r = function () {
                t._removeBackdrop(), e && e();
              };
              if (o.default(this._element).hasClass('fade')) {
                var a = u.getTransitionDurationFromElement(this._backdrop);
                o.default(this._backdrop)
                  .one(u.TRANSITION_END, r)
                  .emulateTransitionEnd(a);
              } else r();
            } else e && e();
          }),
          (t._adjustDialog = function () {
            var e =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              e &&
              (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
              this._isBodyOverflowing &&
                !e &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + 'px');
          }),
          (t._resetAdjustments = function () {
            (this._element.style.paddingLeft = ''),
              (this._element.style.paddingRight = '');
          }),
          (t._checkScrollbar = function () {
            var e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing =
              Math.round(e.left + e.right) < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (t._setScrollbar = function () {
            var e = this;
            if (this._isBodyOverflowing) {
              var t = [].slice.call(
                  document.querySelectorAll(
                    '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
                  )
                ),
                n = [].slice.call(document.querySelectorAll('.sticky-top'));
              o.default(t).each(function (t, n) {
                var i = n.style.paddingRight,
                  r = o.default(n).css('padding-right');
                o.default(n)
                  .data('padding-right', i)
                  .css(
                    'padding-right',
                    parseFloat(r) + e._scrollbarWidth + 'px'
                  );
              }),
                o.default(n).each(function (t, n) {
                  var i = n.style.marginRight,
                    r = o.default(n).css('margin-right');
                  o.default(n)
                    .data('margin-right', i)
                    .css(
                      'margin-right',
                      parseFloat(r) - e._scrollbarWidth + 'px'
                    );
                });
              var i = document.body.style.paddingRight,
                r = o.default(document.body).css('padding-right');
              o.default(document.body)
                .data('padding-right', i)
                .css(
                  'padding-right',
                  parseFloat(r) + this._scrollbarWidth + 'px'
                );
            }
            o.default(document.body).addClass('modal-open');
          }),
          (t._resetScrollbar = function () {
            var e = [].slice.call(
              document.querySelectorAll(
                '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
              )
            );
            o.default(e).each(function (e, t) {
              var n = o.default(t).data('padding-right');
              o.default(t).removeData('padding-right'),
                (t.style.paddingRight = n || '');
            });
            var t = [].slice.call(document.querySelectorAll('.sticky-top'));
            o.default(t).each(function (e, t) {
              var n = o.default(t).data('margin-right');
              void 0 !== n &&
                o.default(t).css('margin-right', n).removeData('margin-right');
            });
            var n = o.default(document.body).data('padding-right');
            o.default(document.body).removeData('padding-right'),
              (document.body.style.paddingRight = n || '');
          }),
          (t._getScrollbarWidth = function () {
            var e = document.createElement('div');
            (e.className = 'modal-scrollbar-measure'),
              document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
          }),
          (e._jQueryInterface = function (t, n) {
            return this.each(function () {
              var i = o.default(this).data('bs.modal'),
                r = l(
                  {},
                  I,
                  o.default(this).data(),
                  'object' == typeof t && t ? t : {}
                );
              if (
                (i ||
                  ((i = new e(this, r)), o.default(this).data('bs.modal', i)),
                'string' == typeof t)
              ) {
                if (void 0 === i[t])
                  throw new TypeError('No method named "' + t + '"');
                i[t](n);
              } else r.show && i.show(n);
            });
          }),
          s(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.6.0';
              }
            },
            {
              key: 'Default',
              get: function () {
                return I;
              }
            }
          ]),
          e
        );
      })();
    o
      .default(document)
      .on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
        var t,
          n = this,
          i = u.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = o.default(t).data('bs.modal')
          ? 'toggle'
          : l({}, o.default(t).data(), o.default(this).data());
        ('A' !== this.tagName && 'AREA' !== this.tagName) || e.preventDefault();
        var a = o.default(t).one('show.bs.modal', function (e) {
          e.isDefaultPrevented() ||
            a.one('hidden.bs.modal', function () {
              o.default(n).is(':visible') && n.focus();
            });
        });
        q._jQueryInterface.call(o.default(t), r, this);
      }),
      (o.default.fn.modal = q._jQueryInterface),
      (o.default.fn.modal.Constructor = q),
      (o.default.fn.modal.noConflict = function () {
        return (o.default.fn.modal = O), q._jQueryInterface;
      });
    var H = [
        'background',
        'cite',
        'href',
        'itemtype',
        'longdesc',
        'poster',
        'src',
        'xlink:href'
      ],
      P = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      R = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function M(e, t, n) {
      if (0 === e.length) return e;
      if (n && 'function' == typeof n) return n(e);
      for (
        var i = new window.DOMParser().parseFromString(e, 'text/html'),
          o = Object.keys(t),
          r = [].slice.call(i.body.querySelectorAll('*')),
          a = function (e, n) {
            var i = r[e],
              a = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase()))
              return i.parentNode.removeChild(i), 'continue';
            var s = [].slice.call(i.attributes),
              l = [].concat(t['*'] || [], t[a] || []);
            s.forEach(function (e) {
              (function (e, t) {
                var n = e.nodeName.toLowerCase();
                if (-1 !== t.indexOf(n))
                  return (
                    -1 === H.indexOf(n) ||
                    Boolean(e.nodeValue.match(P) || e.nodeValue.match(R))
                  );
                for (
                  var i = t.filter(function (e) {
                      return e instanceof RegExp;
                    }),
                    o = 0,
                    r = i.length;
                  o < r;
                  o++
                )
                  if (n.match(i[o])) return !0;
                return !1;
              })(e, l) || i.removeAttribute(e.nodeName);
            });
          },
          s = 0,
          l = r.length;
        s < l;
        s++
      )
        a(s);
      return i.body.innerHTML;
    }
    var F = 'tooltip',
      W = o.default.fn[F],
      B = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
      $ = ['sanitize', 'whiteList', 'sanitizeFn'],
      z = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(number|string|function)',
        container: '(string|element|boolean)',
        fallbackPlacement: '(string|array)',
        boundary: '(string|element)',
        customClass: '(string|function)',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        whiteList: 'object',
        popperConfig: '(null|object)'
      },
      U = {
        AUTO: 'auto',
        TOP: 'top',
        RIGHT: 'right',
        BOTTOM: 'bottom',
        LEFT: 'left'
      },
      Q = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        selector: !1,
        placement: 'top',
        offset: 0,
        container: !1,
        fallbackPlacement: 'flip',
        boundary: 'scrollParent',
        customClass: '',
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
          '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
          a: ['target', 'href', 'title', 'rel'],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: []
        },
        popperConfig: null
      },
      X = {
        HIDE: 'hide.bs.tooltip',
        HIDDEN: 'hidden.bs.tooltip',
        SHOW: 'show.bs.tooltip',
        SHOWN: 'shown.bs.tooltip',
        INSERTED: 'inserted.bs.tooltip',
        CLICK: 'click.bs.tooltip',
        FOCUSIN: 'focusin.bs.tooltip',
        FOCUSOUT: 'focusout.bs.tooltip',
        MOUSEENTER: 'mouseenter.bs.tooltip',
        MOUSELEAVE: 'mouseleave.bs.tooltip'
      },
      Y = (function () {
        function e(e, t) {
          if (void 0 === r.default)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ''),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        var t = e.prototype;
        return (
          (t.enable = function () {
            this._isEnabled = !0;
          }),
          (t.disable = function () {
            this._isEnabled = !1;
          }),
          (t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (t.toggle = function (e) {
            if (this._isEnabled)
              if (e) {
                var t = this.constructor.DATA_KEY,
                  n = o.default(e.currentTarget).data(t);
                n ||
                  ((n = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  o.default(e.currentTarget).data(t, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (o.default(this.getTipElement()).hasClass('show'))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              o.default.removeData(this.element, this.constructor.DATA_KEY),
              o.default(this.element).off(this.constructor.EVENT_KEY),
              o
                .default(this.element)
                .closest('.modal')
                .off('hide.bs.modal', this._hideModalHandler),
              this.tip && o.default(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (t.show = function () {
            var e = this;
            if ('none' === o.default(this.element).css('display'))
              throw new Error('Please use show on visible elements');
            var t = o.default.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              o.default(this.element).trigger(t);
              var n = u.findShadowRoot(this.element),
                i = o.default.contains(
                  null !== n ? n : this.element.ownerDocument.documentElement,
                  this.element
                );
              if (t.isDefaultPrevented() || !i) return;
              var a = this.getTipElement(),
                s = u.getUID(this.constructor.NAME);
              a.setAttribute('id', s),
                this.element.setAttribute('aria-describedby', s),
                this.setContent(),
                this.config.animation && o.default(a).addClass('fade');
              var l =
                  'function' == typeof this.config.placement
                    ? this.config.placement.call(this, a, this.element)
                    : this.config.placement,
                c = this._getAttachment(l);
              this.addAttachmentClass(c);
              var f = this._getContainer();
              o.default(a).data(this.constructor.DATA_KEY, this),
                o.default.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || o.default(a).appendTo(f),
                o
                  .default(this.element)
                  .trigger(this.constructor.Event.INSERTED),
                (this._popper = new r.default(
                  this.element,
                  a,
                  this._getPopperConfig(c)
                )),
                o.default(a).addClass('show'),
                o.default(a).addClass(this.config.customClass),
                'ontouchstart' in document.documentElement &&
                  o
                    .default(document.body)
                    .children()
                    .on('mouseover', null, o.default.noop);
              var d = function () {
                e.config.animation && e._fixTransition();
                var t = e._hoverState;
                (e._hoverState = null),
                  o.default(e.element).trigger(e.constructor.Event.SHOWN),
                  'out' === t && e._leave(null, e);
              };
              if (o.default(this.tip).hasClass('fade')) {
                var h = u.getTransitionDurationFromElement(this.tip);
                o.default(this.tip)
                  .one(u.TRANSITION_END, d)
                  .emulateTransitionEnd(h);
              } else d();
            }
          }),
          (t.hide = function (e) {
            var t = this,
              n = this.getTipElement(),
              i = o.default.Event(this.constructor.Event.HIDE),
              r = function () {
                'show' !== t._hoverState &&
                  n.parentNode &&
                  n.parentNode.removeChild(n),
                  t._cleanTipClass(),
                  t.element.removeAttribute('aria-describedby'),
                  o.default(t.element).trigger(t.constructor.Event.HIDDEN),
                  null !== t._popper && t._popper.destroy(),
                  e && e();
              };
            if ((o.default(this.element).trigger(i), !i.isDefaultPrevented())) {
              if (
                (o.default(n).removeClass('show'),
                'ontouchstart' in document.documentElement &&
                  o
                    .default(document.body)
                    .children()
                    .off('mouseover', null, o.default.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1),
                o.default(this.tip).hasClass('fade'))
              ) {
                var a = u.getTransitionDurationFromElement(n);
                o.default(n).one(u.TRANSITION_END, r).emulateTransitionEnd(a);
              } else r();
              this._hoverState = '';
            }
          }),
          (t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (t.addAttachmentClass = function (e) {
            o.default(this.getTipElement()).addClass('bs-tooltip-' + e);
          }),
          (t.getTipElement = function () {
            return (
              (this.tip = this.tip || o.default(this.config.template)[0]),
              this.tip
            );
          }),
          (t.setContent = function () {
            var e = this.getTipElement();
            this.setElementContent(
              o.default(e.querySelectorAll('.tooltip-inner')),
              this.getTitle()
            ),
              o.default(e).removeClass('fade show');
          }),
          (t.setElementContent = function (e, t) {
            'object' != typeof t || (!t.nodeType && !t.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (t = M(t, this.config.whiteList, this.config.sanitizeFn)),
                  e.html(t))
                : e.text(t)
              : this.config.html
              ? o.default(t).parent().is(e) || e.empty().append(t)
              : e.text(o.default(t).text());
          }),
          (t.getTitle = function () {
            var e = this.element.getAttribute('data-original-title');
            return (
              e ||
                (e =
                  'function' == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              e
            );
          }),
          (t._getPopperConfig = function (e) {
            var t = this;
            return l(
              {},
              {
                placement: e,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: '.arrow' },
                  preventOverflow: { boundariesElement: this.config.boundary }
                },
                onCreate: function (e) {
                  e.originalPlacement !== e.placement &&
                    t._handlePopperPlacementChange(e);
                },
                onUpdate: function (e) {
                  return t._handlePopperPlacementChange(e);
                }
              },
              this.config.popperConfig
            );
          }),
          (t._getOffset = function () {
            var e = this,
              t = {};
            return (
              'function' == typeof this.config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = l(
                        {},
                        t.offsets,
                        e.config.offset(t.offsets, e.element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this.config.offset),
              t
            );
          }),
          (t._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : u.isElement(this.config.container)
              ? o.default(this.config.container)
              : o.default(document).find(this.config.container);
          }),
          (t._getAttachment = function (e) {
            return U[e.toUpperCase()];
          }),
          (t._setListeners = function () {
            var e = this;
            this.config.trigger.split(' ').forEach(function (t) {
              if ('click' === t)
                o.default(e.element).on(
                  e.constructor.Event.CLICK,
                  e.config.selector,
                  function (t) {
                    return e.toggle(t);
                  }
                );
              else if ('manual' !== t) {
                var n =
                    'hover' === t
                      ? e.constructor.Event.MOUSEENTER
                      : e.constructor.Event.FOCUSIN,
                  i =
                    'hover' === t
                      ? e.constructor.Event.MOUSELEAVE
                      : e.constructor.Event.FOCUSOUT;
                o.default(e.element)
                  .on(n, e.config.selector, function (t) {
                    return e._enter(t);
                  })
                  .on(i, e.config.selector, function (t) {
                    return e._leave(t);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                e.element && e.hide();
              }),
              o
                .default(this.element)
                .closest('.modal')
                .on('hide.bs.modal', this._hideModalHandler),
              this.config.selector
                ? (this.config = l({}, this.config, {
                    trigger: 'manual',
                    selector: ''
                  }))
                : this._fixTitle();
          }),
          (t._fixTitle = function () {
            var e = typeof this.element.getAttribute('data-original-title');
            (this.element.getAttribute('title') || 'string' !== e) &&
              (this.element.setAttribute(
                'data-original-title',
                this.element.getAttribute('title') || ''
              ),
              this.element.setAttribute('title', ''));
          }),
          (t._enter = function (e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || o.default(e.currentTarget).data(n)) ||
              ((t = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              o.default(e.currentTarget).data(n, t)),
              e &&
                (t._activeTrigger[
                  'focusin' === e.type ? 'focus' : 'hover'
                ] = !0),
              o.default(t.getTipElement()).hasClass('show') ||
              'show' === t._hoverState
                ? (t._hoverState = 'show')
                : (clearTimeout(t._timeout),
                  (t._hoverState = 'show'),
                  t.config.delay && t.config.delay.show
                    ? (t._timeout = setTimeout(function () {
                        'show' === t._hoverState && t.show();
                      }, t.config.delay.show))
                    : t.show());
          }),
          (t._leave = function (e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || o.default(e.currentTarget).data(n)) ||
              ((t = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              o.default(e.currentTarget).data(n, t)),
              e &&
                (t._activeTrigger[
                  'focusout' === e.type ? 'focus' : 'hover'
                ] = !1),
              t._isWithActiveTrigger() ||
                (clearTimeout(t._timeout),
                (t._hoverState = 'out'),
                t.config.delay && t.config.delay.hide
                  ? (t._timeout = setTimeout(function () {
                      'out' === t._hoverState && t.hide();
                    }, t.config.delay.hide))
                  : t.hide());
          }),
          (t._isWithActiveTrigger = function () {
            for (var e in this._activeTrigger)
              if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (t._getConfig = function (e) {
            var t = o.default(this.element).data();
            return (
              Object.keys(t).forEach(function (e) {
                -1 !== $.indexOf(e) && delete t[e];
              }),
              'number' ==
                typeof (e = l(
                  {},
                  this.constructor.Default,
                  t,
                  'object' == typeof e && e ? e : {}
                )).delay && (e.delay = { show: e.delay, hide: e.delay }),
              'number' == typeof e.title && (e.title = e.title.toString()),
              'number' == typeof e.content &&
                (e.content = e.content.toString()),
              u.typeCheckConfig(F, e, this.constructor.DefaultType),
              e.sanitize &&
                (e.template = M(e.template, e.whiteList, e.sanitizeFn)),
              e
            );
          }),
          (t._getDelegateConfig = function () {
            var e = {};
            if (this.config)
              for (var t in this.config)
                this.constructor.Default[t] !== this.config[t] &&
                  (e[t] = this.config[t]);
            return e;
          }),
          (t._cleanTipClass = function () {
            var e = o.default(this.getTipElement()),
              t = e.attr('class').match(B);
            null !== t && t.length && e.removeClass(t.join(''));
          }),
          (t._handlePopperPlacementChange = function (e) {
            (this.tip = e.instance.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (t._fixTransition = function () {
            var e = this.getTipElement(),
              t = this.config.animation;
            null === e.getAttribute('x-placement') &&
              (o.default(e).removeClass('fade'),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = t));
          }),
          (e._jQueryInterface = function (t) {
            return this.each(function () {
              var n = o.default(this),
                i = n.data('bs.tooltip'),
                r = 'object' == typeof t && t;
              if (
                (i || !/dispose|hide/.test(t)) &&
                (i || ((i = new e(this, r)), n.data('bs.tooltip', i)),
                'string' == typeof t)
              ) {
                if (void 0 === i[t])
                  throw new TypeError('No method named "' + t + '"');
                i[t]();
              }
            });
          }),
          s(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.6.0';
              }
            },
            {
              key: 'Default',
              get: function () {
                return Q;
              }
            },
            {
              key: 'NAME',
              get: function () {
                return F;
              }
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return 'bs.tooltip';
              }
            },
            {
              key: 'Event',
              get: function () {
                return X;
              }
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return '.bs.tooltip';
              }
            },
            {
              key: 'DefaultType',
              get: function () {
                return z;
              }
            }
          ]),
          e
        );
      })();
    (o.default.fn[F] = Y._jQueryInterface),
      (o.default.fn[F].Constructor = Y),
      (o.default.fn[F].noConflict = function () {
        return (o.default.fn[F] = W), Y._jQueryInterface;
      });
    var V = 'popover',
      K = o.default.fn[V],
      G = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
      J = l({}, Y.Default, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }),
      Z = l({}, Y.DefaultType, { content: '(string|element|function)' }),
      ee = {
        HIDE: 'hide.bs.popover',
        HIDDEN: 'hidden.bs.popover',
        SHOW: 'show.bs.popover',
        SHOWN: 'shown.bs.popover',
        INSERTED: 'inserted.bs.popover',
        CLICK: 'click.bs.popover',
        FOCUSIN: 'focusin.bs.popover',
        FOCUSOUT: 'focusout.bs.popover',
        MOUSEENTER: 'mouseenter.bs.popover',
        MOUSELEAVE: 'mouseleave.bs.popover'
      },
      te = (function (e) {
        var t, n;
        function i() {
          return e.apply(this, arguments) || this;
        }
        (n = e),
          ((t = i).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var r = i.prototype;
        return (
          (r.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (r.addAttachmentClass = function (e) {
            o.default(this.getTipElement()).addClass('bs-popover-' + e);
          }),
          (r.getTipElement = function () {
            return (
              (this.tip = this.tip || o.default(this.config.template)[0]),
              this.tip
            );
          }),
          (r.setContent = function () {
            var e = o.default(this.getTipElement());
            this.setElementContent(e.find('.popover-header'), this.getTitle());
            var t = this._getContent();
            'function' == typeof t && (t = t.call(this.element)),
              this.setElementContent(e.find('.popover-body'), t),
              e.removeClass('fade show');
          }),
          (r._getContent = function () {
            return (
              this.element.getAttribute('data-content') || this.config.content
            );
          }),
          (r._cleanTipClass = function () {
            var e = o.default(this.getTipElement()),
              t = e.attr('class').match(G);
            null !== t && t.length > 0 && e.removeClass(t.join(''));
          }),
          (i._jQueryInterface = function (e) {
            return this.each(function () {
              var t = o.default(this).data('bs.popover'),
                n = 'object' == typeof e ? e : null;
              if (
                (t || !/dispose|hide/.test(e)) &&
                (t ||
                  ((t = new i(this, n)), o.default(this).data('bs.popover', t)),
                'string' == typeof e)
              ) {
                if (void 0 === t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          s(i, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.6.0';
              }
            },
            {
              key: 'Default',
              get: function () {
                return J;
              }
            },
            {
              key: 'NAME',
              get: function () {
                return V;
              }
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return 'bs.popover';
              }
            },
            {
              key: 'Event',
              get: function () {
                return ee;
              }
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return '.bs.popover';
              }
            },
            {
              key: 'DefaultType',
              get: function () {
                return Z;
              }
            }
          ]),
          i
        );
      })(Y);
    (o.default.fn[V] = te._jQueryInterface),
      (o.default.fn[V].Constructor = te),
      (o.default.fn[V].noConflict = function () {
        return (o.default.fn[V] = K), te._jQueryInterface;
      });
    var ne = 'scrollspy',
      ie = o.default.fn[ne],
      oe = { offset: 10, method: 'auto', target: '' },
      re = { offset: 'number', method: 'string', target: '(string|element)' },
      ae = (function () {
        function e(e, t) {
          var n = this;
          (this._element = e),
            (this._scrollElement = 'BODY' === e.tagName ? window : e),
            (this._config = this._getConfig(t)),
            (this._selector =
              this._config.target +
              ' .nav-link,' +
              this._config.target +
              ' .list-group-item,' +
              this._config.target +
              ' .dropdown-item'),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            o
              .default(this._scrollElement)
              .on('scroll.bs.scrollspy', function (e) {
                return n._process(e);
              }),
            this.refresh(),
            this._process();
        }
        var t = e.prototype;
        return (
          (t.refresh = function () {
            var e = this,
              t =
                'auto' === this._config.method
                  ? this._scrollElement === this._scrollElement.window
                    ? 'offset'
                    : 'position'
                  : this._config.method,
              n = 'position' === t ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (e) {
                  var i,
                    r = u.getSelectorFromElement(e);
                  if ((r && (i = document.querySelector(r)), i)) {
                    var a = i.getBoundingClientRect();
                    if (a.width || a.height)
                      return [o.default(i)[t]().top + n, r];
                  }
                  return null;
                })
                .filter(function (e) {
                  return e;
                })
                .sort(function (e, t) {
                  return e[0] - t[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (t.dispose = function () {
            o.default.removeData(this._element, 'bs.scrollspy'),
              o.default(this._scrollElement).off('.bs.scrollspy'),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (t._getConfig = function (e) {
            if (
              'string' !=
                typeof (e = l({}, oe, 'object' == typeof e && e ? e : {}))
                  .target &&
              u.isElement(e.target)
            ) {
              var t = o.default(e.target).attr('id');
              t || ((t = u.getUID(ne)), o.default(e.target).attr('id', t)),
                (e.target = '#' + t);
            }
            return u.typeCheckConfig(ne, e, re), e;
          }),
          (t._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (t._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (t._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (t._process = function () {
            var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                e < this._offsets[0] &&
                this._offsets[0] > 0
              )
                return (this._activeTarget = null), void this._clear();
              for (var o = this._offsets.length; o--; )
                this._activeTarget !== this._targets[o] &&
                  e >= this._offsets[o] &&
                  (void 0 === this._offsets[o + 1] ||
                    e < this._offsets[o + 1]) &&
                  this._activate(this._targets[o]);
            }
          }),
          (t._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var t = this._selector.split(',').map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              }),
              n = o.default(
                [].slice.call(document.querySelectorAll(t.join(',')))
              );
            n.hasClass('dropdown-item')
              ? (n
                  .closest('.dropdown')
                  .find('.dropdown-toggle')
                  .addClass('active'),
                n.addClass('active'))
              : (n.addClass('active'),
                n
                  .parents('.nav, .list-group')
                  .prev('.nav-link, .list-group-item')
                  .addClass('active'),
                n
                  .parents('.nav, .list-group')
                  .prev('.nav-item')
                  .children('.nav-link')
                  .addClass('active')),
              o
                .default(this._scrollElement)
                .trigger('activate.bs.scrollspy', { relatedTarget: e });
          }),
          (t._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (e) {
                return e.classList.contains('active');
              })
              .forEach(function (e) {
                return e.classList.remove('active');
              });
          }),
          (e._jQueryInterface = function (t) {
            return this.each(function () {
              var n = o.default(this).data('bs.scrollspy');
              if (
                (n ||
                  ((n = new e(this, 'object' == typeof t && t)),
                  o.default(this).data('bs.scrollspy', n)),
                'string' == typeof t)
              ) {
                if (void 0 === n[t])
                  throw new TypeError('No method named "' + t + '"');
                n[t]();
              }
            });
          }),
          s(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.6.0';
              }
            },
            {
              key: 'Default',
              get: function () {
                return oe;
              }
            }
          ]),
          e
        );
      })();
    o.default(window).on('load.bs.scrollspy.data-api', function () {
      for (
        var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
          t = e.length;
        t--;

      ) {
        var n = o.default(e[t]);
        ae._jQueryInterface.call(n, n.data());
      }
    }),
      (o.default.fn[ne] = ae._jQueryInterface),
      (o.default.fn[ne].Constructor = ae),
      (o.default.fn[ne].noConflict = function () {
        return (o.default.fn[ne] = ie), ae._jQueryInterface;
      });
    var se = o.default.fn.tab,
      le = (function () {
        function e(e) {
          this._element = e;
        }
        var t = e.prototype;
        return (
          (t.show = function () {
            var e = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  o.default(this._element).hasClass('active')) ||
                o.default(this._element).hasClass('disabled')
              )
            ) {
              var t,
                n,
                i = o.default(this._element).closest('.nav, .list-group')[0],
                r = u.getSelectorFromElement(this._element);
              if (i) {
                var a =
                  'UL' === i.nodeName || 'OL' === i.nodeName
                    ? '> li > .active'
                    : '.active';
                n = (n = o.default.makeArray(o.default(i).find(a)))[
                  n.length - 1
                ];
              }
              var s = o.default.Event('hide.bs.tab', {
                  relatedTarget: this._element
                }),
                l = o.default.Event('show.bs.tab', { relatedTarget: n });
              if (
                (n && o.default(n).trigger(s),
                o.default(this._element).trigger(l),
                !l.isDefaultPrevented() && !s.isDefaultPrevented())
              ) {
                r && (t = document.querySelector(r)),
                  this._activate(this._element, i);
                var c = function () {
                  var t = o.default.Event('hidden.bs.tab', {
                      relatedTarget: e._element
                    }),
                    i = o.default.Event('shown.bs.tab', { relatedTarget: n });
                  o.default(n).trigger(t), o.default(e._element).trigger(i);
                };
                t ? this._activate(t, t.parentNode, c) : c();
              }
            }
          }),
          (t.dispose = function () {
            o.default.removeData(this._element, 'bs.tab'),
              (this._element = null);
          }),
          (t._activate = function (e, t, n) {
            var i = this,
              r = (!t || ('UL' !== t.nodeName && 'OL' !== t.nodeName)
                ? o.default(t).children('.active')
                : o.default(t).find('> li > .active'))[0],
              a = n && r && o.default(r).hasClass('fade'),
              s = function () {
                return i._transitionComplete(e, r, n);
              };
            if (r && a) {
              var l = u.getTransitionDurationFromElement(r);
              o.default(r)
                .removeClass('show')
                .one(u.TRANSITION_END, s)
                .emulateTransitionEnd(l);
            } else s();
          }),
          (t._transitionComplete = function (e, t, n) {
            if (t) {
              o.default(t).removeClass('active');
              var i = o
                .default(t.parentNode)
                .find('> .dropdown-menu .active')[0];
              i && o.default(i).removeClass('active'),
                'tab' === t.getAttribute('role') &&
                  t.setAttribute('aria-selected', !1);
            }
            if (
              (o.default(e).addClass('active'),
              'tab' === e.getAttribute('role') &&
                e.setAttribute('aria-selected', !0),
              u.reflow(e),
              e.classList.contains('fade') && e.classList.add('show'),
              e.parentNode && o.default(e.parentNode).hasClass('dropdown-menu'))
            ) {
              var r = o.default(e).closest('.dropdown')[0];
              if (r) {
                var a = [].slice.call(r.querySelectorAll('.dropdown-toggle'));
                o.default(a).addClass('active');
              }
              e.setAttribute('aria-expanded', !0);
            }
            n && n();
          }),
          (e._jQueryInterface = function (t) {
            return this.each(function () {
              var n = o.default(this),
                i = n.data('bs.tab');
              if (
                (i || ((i = new e(this)), n.data('bs.tab', i)),
                'string' == typeof t)
              ) {
                if (void 0 === i[t])
                  throw new TypeError('No method named "' + t + '"');
                i[t]();
              }
            });
          }),
          s(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.6.0';
              }
            }
          ]),
          e
        );
      })();
    o
      .default(document)
      .on(
        'click.bs.tab.data-api',
        '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        function (e) {
          e.preventDefault(), le._jQueryInterface.call(o.default(this), 'show');
        }
      ),
      (o.default.fn.tab = le._jQueryInterface),
      (o.default.fn.tab.Constructor = le),
      (o.default.fn.tab.noConflict = function () {
        return (o.default.fn.tab = se), le._jQueryInterface;
      });
    var ue = o.default.fn.toast,
      ce = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
      fe = { animation: !0, autohide: !0, delay: 500 },
      de = (function () {
        function e(e, t) {
          (this._element = e),
            (this._config = this._getConfig(t)),
            (this._timeout = null),
            this._setListeners();
        }
        var t = e.prototype;
        return (
          (t.show = function () {
            var e = this,
              t = o.default.Event('show.bs.toast');
            if (
              (o.default(this._element).trigger(t), !t.isDefaultPrevented())
            ) {
              this._clearTimeout(),
                this._config.animation && this._element.classList.add('fade');
              var n = function () {
                e._element.classList.remove('showing'),
                  e._element.classList.add('show'),
                  o.default(e._element).trigger('shown.bs.toast'),
                  e._config.autohide &&
                    (e._timeout = setTimeout(function () {
                      e.hide();
                    }, e._config.delay));
              };
              if (
                (this._element.classList.remove('hide'),
                u.reflow(this._element),
                this._element.classList.add('showing'),
                this._config.animation)
              ) {
                var i = u.getTransitionDurationFromElement(this._element);
                o.default(this._element)
                  .one(u.TRANSITION_END, n)
                  .emulateTransitionEnd(i);
              } else n();
            }
          }),
          (t.hide = function () {
            if (this._element.classList.contains('show')) {
              var e = o.default.Event('hide.bs.toast');
              o.default(this._element).trigger(e),
                e.isDefaultPrevented() || this._close();
            }
          }),
          (t.dispose = function () {
            this._clearTimeout(),
              this._element.classList.contains('show') &&
                this._element.classList.remove('show'),
              o.default(this._element).off('click.dismiss.bs.toast'),
              o.default.removeData(this._element, 'bs.toast'),
              (this._element = null),
              (this._config = null);
          }),
          (t._getConfig = function (e) {
            return (
              (e = l(
                {},
                fe,
                o.default(this._element).data(),
                'object' == typeof e && e ? e : {}
              )),
              u.typeCheckConfig('toast', e, this.constructor.DefaultType),
              e
            );
          }),
          (t._setListeners = function () {
            var e = this;
            o.default(this._element).on(
              'click.dismiss.bs.toast',
              '[data-dismiss="toast"]',
              function () {
                return e.hide();
              }
            );
          }),
          (t._close = function () {
            var e = this,
              t = function () {
                e._element.classList.add('hide'),
                  o.default(e._element).trigger('hidden.bs.toast');
              };
            if (
              (this._element.classList.remove('show'), this._config.animation)
            ) {
              var n = u.getTransitionDurationFromElement(this._element);
              o.default(this._element)
                .one(u.TRANSITION_END, t)
                .emulateTransitionEnd(n);
            } else t();
          }),
          (t._clearTimeout = function () {
            clearTimeout(this._timeout), (this._timeout = null);
          }),
          (e._jQueryInterface = function (t) {
            return this.each(function () {
              var n = o.default(this),
                i = n.data('bs.toast');
              if (
                (i ||
                  ((i = new e(this, 'object' == typeof t && t)),
                  n.data('bs.toast', i)),
                'string' == typeof t)
              ) {
                if (void 0 === i[t])
                  throw new TypeError('No method named "' + t + '"');
                i[t](this);
              }
            });
          }),
          s(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.6.0';
              }
            },
            {
              key: 'DefaultType',
              get: function () {
                return ce;
              }
            },
            {
              key: 'Default',
              get: function () {
                return fe;
              }
            }
          ]),
          e
        );
      })();
    (o.default.fn.toast = de._jQueryInterface),
      (o.default.fn.toast.Constructor = de),
      (o.default.fn.toast.noConflict = function () {
        return (o.default.fn.toast = ue), de._jQueryInterface;
      }),
      (e.Alert = d),
      (e.Button = p),
      (e.Carousel = _),
      (e.Collapse = C),
      (e.Dropdown = j),
      (e.Modal = q),
      (e.Popover = te),
      (e.Scrollspy = ae),
      (e.Tab = le),
      (e.Toast = de),
      (e.Tooltip = Y),
      (e.Util = u),
      Object.defineProperty(e, '__esModule', { value: !0 });
  }),
  (function (e, t, n, i) {
    function o(t, n) {
      var r = this;
      'object' == typeof n &&
        (delete n.refresh, delete n.render, e.extend(this, n)),
        (this.$element = e(t)),
        !this.imageSrc &&
          this.$element.is('img') &&
          (this.imageSrc = this.$element.attr('src'));
      var a = (this.position + '').toLowerCase().match(/\S+/g) || [];
      if (
        (a.length < 1 && a.push('center'),
        1 == a.length && a.push(a[0]),
        ('top' != a[0] &&
          'bottom' != a[0] &&
          'left' != a[1] &&
          'right' != a[1]) ||
          (a = [a[1], a[0]]),
        this.positionX !== i && (a[0] = this.positionX.toLowerCase()),
        this.positionY !== i && (a[1] = this.positionY.toLowerCase()),
        (r.positionX = a[0]),
        (r.positionY = a[1]),
        'left' != this.positionX &&
          'right' != this.positionX &&
          (this.positionX = isNaN(parseInt(this.positionX))
            ? 'center'
            : parseInt(this.positionX)),
        'top' != this.positionY &&
          'bottom' != this.positionY &&
          (this.positionY = isNaN(parseInt(this.positionY))
            ? 'center'
            : parseInt(this.positionY)),
        (this.position =
          this.positionX +
          (isNaN(this.positionX) ? '' : 'px') +
          ' ' +
          this.positionY +
          (isNaN(this.positionY) ? '' : 'px')),
        navigator.userAgent.match(/(iPod|iPhone|iPad)/))
      )
        return (
          this.imageSrc &&
            this.iosFix &&
            !this.$element.is('img') &&
            this.$element.css({
              backgroundImage: 'url("' + this.imageSrc + '")',
              backgroundSize: 'cover',
              backgroundPosition: this.position
            }),
          this
        );
      if (navigator.userAgent.match(/(Android)/))
        return (
          this.imageSrc &&
            this.androidFix &&
            !this.$element.is('img') &&
            this.$element.css({
              backgroundImage: 'url("' + this.imageSrc + '")',
              backgroundSize: 'cover',
              backgroundPosition: this.position
            }),
          this
        );
      this.$mirror = e('<div />').prependTo(this.mirrorContainer);
      var s = this.$element.find('>.parallax-slider'),
        l = !1;
      0 == s.length
        ? (this.$slider = e('<img />').prependTo(this.$mirror))
        : ((this.$slider = s.prependTo(this.$mirror)), (l = !0)),
        this.$mirror.addClass('parallax-mirror').css({
          visibility: 'hidden',
          zIndex: this.zIndex,
          position: 'fixed',
          top: 0,
          left: 0,
          overflow: 'hidden'
        }),
        this.$slider.addClass('parallax-slider').one('load', function () {
          (r.naturalHeight && r.naturalWidth) ||
            ((r.naturalHeight = this.naturalHeight || this.height || 1),
            (r.naturalWidth = this.naturalWidth || this.width || 1)),
            (r.aspectRatio = r.naturalWidth / r.naturalHeight),
            o.isSetup || o.setup(),
            o.sliders.push(r),
            (o.isFresh = !1),
            o.requestRender();
        }),
        l || (this.$slider[0].src = this.imageSrc),
        ((this.naturalHeight && this.naturalWidth) ||
          this.$slider[0].complete ||
          s.length > 0) &&
          this.$slider.trigger('load');
    }
    !(function () {
      for (
        var e = 0, n = ['ms', 'moz', 'webkit', 'o'], i = 0;
        i < n.length && !t.requestAnimationFrame;
        ++i
      )
        (t.requestAnimationFrame = t[n[i] + 'RequestAnimationFrame']),
          (t.cancelAnimationFrame =
            t[n[i] + 'CancelAnimationFrame'] ||
            t[n[i] + 'CancelRequestAnimationFrame']);
      t.requestAnimationFrame ||
        (t.requestAnimationFrame = function (n) {
          var i = new Date().getTime(),
            o = Math.max(0, 16 - (i - e)),
            r = t.setTimeout(function () {
              n(i + o);
            }, o);
          return (e = i + o), r;
        }),
        t.cancelAnimationFrame ||
          (t.cancelAnimationFrame = function (e) {
            clearTimeout(e);
          });
    })(),
      e.extend(o.prototype, {
        speed: 0.2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: 'center',
        overScrollFix: !1,
        mirrorContainer: 'body',
        refresh: function () {
          (this.boxWidth = this.$element.outerWidth()),
            (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
            (this.boxOffsetTop = this.$element.offset().top - this.bleed),
            (this.boxOffsetLeft = this.$element.offset().left),
            (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
          var e,
            t = o.winHeight,
            n = Math.min(this.boxOffsetTop, o.docHeight - t),
            i = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
            r = (this.boxHeight + (n - i) * (1 - this.speed)) | 0,
            a = ((this.boxOffsetTop - n) * (1 - this.speed)) | 0;
          r * this.aspectRatio >= this.boxWidth
            ? ((this.imageWidth = (r * this.aspectRatio) | 0),
              (this.imageHeight = r),
              (this.offsetBaseTop = a),
              (e = this.imageWidth - this.boxWidth),
              (this.offsetLeft =
                'left' == this.positionX
                  ? 0
                  : 'right' == this.positionX
                  ? -e
                  : isNaN(this.positionX)
                  ? (-e / 2) | 0
                  : Math.max(this.positionX, -e)))
            : ((this.imageWidth = this.boxWidth),
              (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
              (this.offsetLeft = 0),
              (e = this.imageHeight - r),
              (this.offsetBaseTop =
                'top' == this.positionY
                  ? a
                  : 'bottom' == this.positionY
                  ? a - e
                  : isNaN(this.positionY)
                  ? (a - e / 2) | 0
                  : a + Math.max(this.positionY, -e)));
        },
        render: function () {
          var e = o.scrollTop,
            t = o.scrollLeft,
            n = this.overScrollFix ? o.overScroll : 0;
          this.boxOffsetBottom > e && this.boxOffsetTop <= e + o.winHeight
            ? ((this.visibility = 'visible'),
              (this.mirrorTop = this.boxOffsetTop - e),
              (this.mirrorLeft = this.boxOffsetLeft - t),
              (this.offsetTop =
                this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
            : (this.visibility = 'hidden'),
            this.$mirror.css({
              transform:
                'translate3d(' +
                this.mirrorLeft +
                'px, ' +
                (this.mirrorTop - n) +
                'px, 0px)',
              visibility: this.visibility,
              height: this.boxHeight,
              width: this.boxWidth
            }),
            this.$slider.css({
              transform:
                'translate3d(' +
                this.offsetLeft +
                'px, ' +
                this.offsetTop +
                'px, 0px)',
              position: 'absolute',
              height: this.imageHeight,
              width: this.imageWidth,
              maxWidth: 'none'
            });
        }
      }),
      e.extend(o, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function () {
          if (!this.isReady) {
            var i = this,
              r = e(n),
              a = e(t),
              s = function () {
                (o.winHeight = a.height()),
                  (o.winWidth = a.width()),
                  (o.docHeight = r.height()),
                  (o.docWidth = r.width());
              },
              l = function () {
                var e = a.scrollTop(),
                  t = o.docHeight - o.winHeight,
                  n = o.docWidth - o.winWidth;
                (o.scrollTop = Math.max(0, Math.min(t, e))),
                  (o.scrollLeft = Math.max(0, Math.min(n, a.scrollLeft()))),
                  (o.overScroll = Math.max(e - t, Math.min(e, 0)));
              };
            a
              .on('resize.px.parallax load.px.parallax', function () {
                s(), i.refresh(), (o.isFresh = !1), o.requestRender();
              })
              .on('scroll.px.parallax load.px.parallax', function () {
                l(), o.requestRender();
              }),
              s(),
              l(),
              (this.isReady = !0);
            var u = -1;
            !(function e() {
              if (u == t.pageYOffset) return t.requestAnimationFrame(e), !1;
              (u = t.pageYOffset), i.render(), t.requestAnimationFrame(e);
            })();
          }
        },
        configure: function (t) {
          'object' == typeof t &&
            (delete t.refresh, delete t.render, e.extend(this.prototype, t));
        },
        refresh: function () {
          e.each(this.sliders, function () {
            this.refresh();
          }),
            (this.isFresh = !0);
        },
        render: function () {
          this.isFresh || this.refresh(),
            e.each(this.sliders, function () {
              this.render();
            });
        },
        requestRender: function () {
          this.render(), (this.isBusy = !1);
        },
        destroy: function (n) {
          var i,
            r = e(n).data('px.parallax');
          for (r.$mirror.remove(), i = 0; i < this.sliders.length; i += 1)
            this.sliders[i] == r && this.sliders.splice(i, 1);
          e(n).data('px.parallax', !1),
            0 === this.sliders.length &&
              (e(t).off(
                'scroll.px.parallax resize.px.parallax load.px.parallax'
              ),
              (this.isReady = !1),
              (o.isSetup = !1));
        }
      });
    var r = e.fn.parallax;
    (e.fn.parallax = function (i) {
      return this.each(function () {
        var r = e(this),
          a = 'object' == typeof i && i;
        this == t || this == n || r.is('body')
          ? o.configure(a)
          : r.data('px.parallax')
          ? 'object' == typeof i && e.extend(r.data('px.parallax'), a)
          : ((a = e.extend({}, r.data(), a)),
            r.data('px.parallax', new o(this, a))),
          'string' == typeof i && ('destroy' == i ? o.destroy(this) : o[i]());
      });
    }),
      (e.fn.parallax.Constructor = o),
      (e.fn.parallax.noConflict = function () {
        return (e.fn.parallax = r), this;
      }),
      e(function () {
        e('[data-parallax="scroll"]').parallax();
      });
  })(jQuery, window, document),
  (function (e, t) {
    'object' == typeof exports && 'object' == typeof module
      ? (module.exports = t())
      : 'function' == typeof define && define.amd
      ? define([], t)
      : 'object' == typeof exports
      ? (exports.AOS = t())
      : (e.AOS = t());
  })(this, function () {
    return (function (e) {
      function t(i) {
        if (n[i]) return n[i].exports;
        var o = (n[i] = { exports: {}, id: i, loaded: !1 });
        return (
          e[i].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
        );
      }
      var n = {};
      return (t.m = e), (t.c = n), (t.p = 'dist/'), t(0);
    })([
      function (e, t, n) {
        'use strict';
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          r = (i(n(1)), n(6)),
          a = i(r),
          s = i(n(7)),
          l = i(n(8)),
          u = i(n(9)),
          c = i(n(10)),
          f = i(n(11)),
          d = i(n(14)),
          h = [],
          p = !1,
          g = {
            offset: 120,
            delay: 0,
            easing: 'ease',
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: 'DOMContentLoaded',
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1
          },
          m = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if ((e && (p = !0), p))
              return (h = (0, f.default)(h, g)), (0, c.default)(h, g.once), h;
          },
          v = function () {
            (h = (0, d.default)()), m();
          };
        e.exports = {
          init: function (e) {
            (g = o(g, e)), (h = (0, d.default)());
            var t = document.all && !window.atob;
            return (function (e) {
              return (
                !0 === e ||
                ('mobile' === e && u.default.mobile()) ||
                ('phone' === e && u.default.phone()) ||
                ('tablet' === e && u.default.tablet()) ||
                ('function' == typeof e && !0 === e())
              );
            })(g.disable) || t
              ? void h.forEach(function (e, t) {
                  e.node.removeAttribute('data-aos'),
                    e.node.removeAttribute('data-aos-easing'),
                    e.node.removeAttribute('data-aos-duration'),
                    e.node.removeAttribute('data-aos-delay');
                })
              : (g.disableMutationObserver ||
                  l.default.isSupported() ||
                  (console.info(
                    '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                  ),
                  (g.disableMutationObserver = !0)),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-easing', g.easing),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-duration', g.duration),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-delay', g.delay),
                'DOMContentLoaded' === g.startEvent &&
                ['complete', 'interactive'].indexOf(document.readyState) > -1
                  ? m(!0)
                  : 'load' === g.startEvent
                  ? window.addEventListener(g.startEvent, function () {
                      m(!0);
                    })
                  : document.addEventListener(g.startEvent, function () {
                      m(!0);
                    }),
                window.addEventListener(
                  'resize',
                  (0, s.default)(m, g.debounceDelay, !0)
                ),
                window.addEventListener(
                  'orientationchange',
                  (0, s.default)(m, g.debounceDelay, !0)
                ),
                window.addEventListener(
                  'scroll',
                  (0, a.default)(function () {
                    (0, c.default)(h, g.once);
                  }, g.throttleDelay)
                ),
                g.disableMutationObserver || l.default.ready('[data-aos]', v),
                h);
          },
          refresh: m,
          refreshHard: v
        };
      },
      function (e, t) {},
      ,
      ,
      ,
      ,
      function (e, t) {
        (function (t) {
          'use strict';
          function n(e) {
            var t = void 0 === e ? 'undefined' : o(e);
            return !!e && ('object' == t || 'function' == t);
          }
          function i(e) {
            if ('number' == typeof e) return e;
            if (
              (function (e) {
                return (
                  'symbol' == (void 0 === e ? 'undefined' : o(e)) ||
                  ((function (e) {
                    return (
                      !!e && 'object' == (void 0 === e ? 'undefined' : o(e))
                    );
                  })(e) &&
                    m.call(e) == s)
                );
              })(e)
            )
              return a;
            if (n(e)) {
              var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
              e = n(t) ? t + '' : t;
            }
            if ('string' != typeof e) return 0 === e ? e : +e;
            e = e.replace(l, '');
            var i = c.test(e);
            return i || f.test(e)
              ? d(e.slice(2), i ? 2 : 8)
              : u.test(e)
              ? a
              : +e;
          }
          var o =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  },
            r = 'Expected a function',
            a = NaN,
            s = '[object Symbol]',
            l = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            f = /^0o[0-7]+$/i,
            d = parseInt,
            h =
              'object' == (void 0 === t ? 'undefined' : o(t)) &&
              t &&
              t.Object === Object &&
              t,
            p =
              'object' ==
                ('undefined' == typeof self ? 'undefined' : o(self)) &&
              self &&
              self.Object === Object &&
              self,
            g = h || p || Function('return this')(),
            m = Object.prototype.toString,
            v = Math.max,
            y = Math.min,
            b = function () {
              return g.Date.now();
            };
          e.exports = function (e, t, o) {
            var a = !0,
              s = !0;
            if ('function' != typeof e) throw new TypeError(r);
            return (
              n(o) &&
                ((a = 'leading' in o ? !!o.leading : a),
                (s = 'trailing' in o ? !!o.trailing : s)),
              (function (e, t, o) {
                function a(t) {
                  var n = d,
                    i = h;
                  return (d = h = void 0), (w = t), (g = e.apply(i, n));
                }
                function s(e) {
                  return (w = e), (m = setTimeout(u, t)), x ? a(e) : g;
                }
                function l(e) {
                  var n = e - _;
                  return void 0 === _ || n >= t || n < 0 || (T && e - w >= p);
                }
                function u() {
                  var e = b();
                  return l(e)
                    ? c(e)
                    : void (m = setTimeout(
                        u,
                        (function (e) {
                          var n = t - (e - _);
                          return T ? y(n, p - (e - w)) : n;
                        })(e)
                      ));
                }
                function c(e) {
                  return (m = void 0), E && d ? a(e) : ((d = h = void 0), g);
                }
                function f() {
                  var e = b(),
                    n = l(e);
                  if (((d = arguments), (h = this), (_ = e), n)) {
                    if (void 0 === m) return s(_);
                    if (T) return (m = setTimeout(u, t)), a(_);
                  }
                  return void 0 === m && (m = setTimeout(u, t)), g;
                }
                var d,
                  h,
                  p,
                  g,
                  m,
                  _,
                  w = 0,
                  x = !1,
                  T = !1,
                  E = !0;
                if ('function' != typeof e) throw new TypeError(r);
                return (
                  (t = i(t) || 0),
                  n(o) &&
                    ((x = !!o.leading),
                    (p = (T = 'maxWait' in o) ? v(i(o.maxWait) || 0, t) : p),
                    (E = 'trailing' in o ? !!o.trailing : E)),
                  (f.cancel = function () {
                    void 0 !== m && clearTimeout(m),
                      (w = 0),
                      (d = _ = h = m = void 0);
                  }),
                  (f.flush = function () {
                    return void 0 === m ? g : c(b());
                  }),
                  f
                );
              })(e, t, { leading: a, maxWait: t, trailing: s })
            );
          };
        }.call(
          t,
          (function () {
            return this;
          })()
        ));
      },
      function (e, t) {
        (function (t) {
          'use strict';
          function n(e) {
            var t = void 0 === e ? 'undefined' : o(e);
            return !!e && ('object' == t || 'function' == t);
          }
          function i(e) {
            if ('number' == typeof e) return e;
            if (
              (function (e) {
                return (
                  'symbol' == (void 0 === e ? 'undefined' : o(e)) ||
                  ((function (e) {
                    return (
                      !!e && 'object' == (void 0 === e ? 'undefined' : o(e))
                    );
                  })(e) &&
                    g.call(e) == a)
                );
              })(e)
            )
              return r;
            if (n(e)) {
              var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
              e = n(t) ? t + '' : t;
            }
            if ('string' != typeof e) return 0 === e ? e : +e;
            e = e.replace(s, '');
            var i = u.test(e);
            return i || c.test(e)
              ? f(e.slice(2), i ? 2 : 8)
              : l.test(e)
              ? r
              : +e;
          }
          var o =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  },
            r = NaN,
            a = '[object Symbol]',
            s = /^\s+|\s+$/g,
            l = /^[-+]0x[0-9a-f]+$/i,
            u = /^0b[01]+$/i,
            c = /^0o[0-7]+$/i,
            f = parseInt,
            d =
              'object' == (void 0 === t ? 'undefined' : o(t)) &&
              t &&
              t.Object === Object &&
              t,
            h =
              'object' ==
                ('undefined' == typeof self ? 'undefined' : o(self)) &&
              self &&
              self.Object === Object &&
              self,
            p = d || h || Function('return this')(),
            g = Object.prototype.toString,
            m = Math.max,
            v = Math.min,
            y = function () {
              return p.Date.now();
            };
          e.exports = function (e, t, o) {
            function r(t) {
              var n = f,
                i = d;
              return (f = d = void 0), (_ = t), (p = e.apply(i, n));
            }
            function a(e) {
              return (_ = e), (g = setTimeout(l, t)), w ? r(e) : p;
            }
            function s(e) {
              var n = e - b;
              return void 0 === b || n >= t || n < 0 || (x && e - _ >= h);
            }
            function l() {
              var e = y();
              return s(e)
                ? u(e)
                : void (g = setTimeout(
                    l,
                    (function (e) {
                      var n = t - (e - b);
                      return x ? v(n, h - (e - _)) : n;
                    })(e)
                  ));
            }
            function u(e) {
              return (g = void 0), T && f ? r(e) : ((f = d = void 0), p);
            }
            function c() {
              var e = y(),
                n = s(e);
              if (((f = arguments), (d = this), (b = e), n)) {
                if (void 0 === g) return a(b);
                if (x) return (g = setTimeout(l, t)), r(b);
              }
              return void 0 === g && (g = setTimeout(l, t)), p;
            }
            var f,
              d,
              h,
              p,
              g,
              b,
              _ = 0,
              w = !1,
              x = !1,
              T = !0;
            if ('function' != typeof e)
              throw new TypeError('Expected a function');
            return (
              (t = i(t) || 0),
              n(o) &&
                ((w = !!o.leading),
                (h = (x = 'maxWait' in o) ? m(i(o.maxWait) || 0, t) : h),
                (T = 'trailing' in o ? !!o.trailing : T)),
              (c.cancel = function () {
                void 0 !== g && clearTimeout(g),
                  (_ = 0),
                  (f = b = d = g = void 0);
              }),
              (c.flush = function () {
                return void 0 === g ? p : u(y());
              }),
              c
            );
          };
        }.call(
          t,
          (function () {
            return this;
          })()
        ));
      },
      function (e, t) {
        'use strict';
        function n(e) {
          var t = void 0,
            i = void 0;
          for (t = 0; t < e.length; t += 1) {
            if ((i = e[t]).dataset && i.dataset.aos) return !0;
            if (i.children && n(i.children)) return !0;
          }
          return !1;
        }
        function i() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function o(e) {
          e &&
            e.forEach(function (e) {
              var t = Array.prototype.slice.call(e.addedNodes),
                i = Array.prototype.slice.call(e.removedNodes);
              if (n(t.concat(i))) return r();
            });
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = function () {};
        t.default = {
          isSupported: function () {
            return !!i();
          },
          ready: function (e, t) {
            var n = window.document,
              a = new (i())(o);
            (r = t),
              a.observe(n.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
              });
          }
        };
      },
      function (e, t) {
        'use strict';
        function n() {
          return navigator.userAgent || navigator.vendor || window.opera || '';
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  'value' in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          l = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e);
            }
            return (
              i(e, [
                {
                  key: 'phone',
                  value: function () {
                    var e = n();
                    return !(!o.test(e) && !r.test(e.substr(0, 4)));
                  }
                },
                {
                  key: 'mobile',
                  value: function () {
                    var e = n();
                    return !(!a.test(e) && !s.test(e.substr(0, 4)));
                  }
                },
                {
                  key: 'tablet',
                  value: function () {
                    return this.mobile() && !this.phone();
                  }
                }
              ]),
              e
            );
          })();
        t.default = new l();
      },
      function (e, t) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t) {
            var n = window.pageYOffset,
              i = window.innerHeight;
            e.forEach(function (e, o) {
              !(function (e, t, n) {
                var i = e.node.getAttribute('data-aos-once');
                t > e.position
                  ? e.node.classList.add('aos-animate')
                  : void 0 !== i &&
                    ('false' === i || (!n && 'true' !== i)) &&
                    e.node.classList.remove('aos-animate');
              })(e, i + n, t);
            });
          });
      },
      function (e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(12));
        t.default = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add('aos-init'),
                (e.position = (0, i.default)(e.node, t.offset));
            }),
            e
          );
        };
      },
      function (e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(13));
        t.default = function (e, t) {
          var n = 0,
            o = 0,
            r = window.innerHeight,
            a = {
              offset: e.getAttribute('data-aos-offset'),
              anchor: e.getAttribute('data-aos-anchor'),
              anchorPlacement: e.getAttribute('data-aos-anchor-placement')
            };
          switch (
            (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor &&
              document.querySelectorAll(a.anchor) &&
              (e = document.querySelectorAll(a.anchor)[0]),
            (n = (0, i.default)(e).top),
            a.anchorPlacement)
          ) {
            case 'top-bottom':
              break;
            case 'center-bottom':
              n += e.offsetHeight / 2;
              break;
            case 'bottom-bottom':
              n += e.offsetHeight;
              break;
            case 'top-center':
              n += r / 2;
              break;
            case 'bottom-center':
              n += r / 2 + e.offsetHeight;
              break;
            case 'center-center':
              n += r / 2 + e.offsetHeight / 2;
              break;
            case 'top-top':
              n += r;
              break;
            case 'bottom-top':
              n += e.offsetHeight + r;
              break;
            case 'center-top':
              n += e.offsetHeight / 2 + r;
          }
          return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
        };
      },
      function (e, t) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            for (
              var t = 0, n = 0;
              e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

            )
              (t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0)),
                (n += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0)),
                (e = e.offsetParent);
            return { top: n, left: t };
          });
      },
      function (e, t) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            return (
              (e = e || document.querySelectorAll('[data-aos]')),
              Array.prototype.map.call(e, function (e) {
                return { node: e };
              })
            );
          });
      }
    ]);
  });
