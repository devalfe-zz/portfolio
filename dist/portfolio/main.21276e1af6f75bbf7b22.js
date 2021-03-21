(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n('zUnb');
    },
    '2QA8': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() =>
        'function' == typeof Symbol
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random())();
    },
    '2fFW': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      let r = !1;
      const s = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                t.stack
            );
          } else
            r &&
              console.log(
                'RxJS: Back to a better error behavior. Thank you. <3'
              );
          r = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        }
      };
    },
    '4I5i': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = 'argument out of range'),
            (this.name = 'ArgumentOutOfRangeError'),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    '5+tZ': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('lJxs'),
        s = n('Cfvw'),
        i = n('zx2A');
      function o(t, e, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof e
          ? (i) =>
              i.pipe(
                o(
                  (n, i) =>
                    Object(s.a)(t(n, i)).pipe(
                      Object(r.a)((t, r) => e(n, t, i, r))
                    ),
                  n
                )
              )
          : ('number' == typeof e && (n = e), (e) => e.lift(new a(t, n)));
      }
      class a {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new c(t, this.project, this.concurrent));
        }
      }
      class c extends i.b {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent
            ? this._tryNext(t)
            : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e);
        }
        _innerSub(t) {
          const e = new i.a(this),
            n = this.destination;
          n.add(e);
          const r = Object(i.c)(t, e);
          r !== e && n.add(r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyComplete() {
          const t = this.buffer;
          this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
    },
    '7o/Q': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return l;
      });
      var r = n('n6bG'),
        s = n('gRHU'),
        i = n('quSY'),
        o = n('2QA8'),
        a = n('2fFW'),
        c = n('NJ4a');
      class l extends i.a {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = s.a;
              break;
            case 1:
              if (!t) {
                this.destination = s.a;
                break;
              }
              if ('object' == typeof t) {
                t instanceof l
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new u(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new u(this, t, e, n));
          }
        }
        [o.a]() {
          return this;
        }
        static create(t, e, n) {
          const r = new l(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class u extends l {
        constructor(t, e, n, i) {
          let o;
          super(), (this._parentSubscriber = t);
          let a = this;
          Object(r.a)(e)
            ? (o = e)
            : e &&
              ((o = e.next),
              (n = e.error),
              (i = e.complete),
              e !== s.a &&
                ((a = Object.create(e)),
                Object(r.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)),
                (a.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = a),
            (this._next = o),
            (this._error = n),
            (this._complete = i);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = a.a;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n
                ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                : Object(c.a)(t),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              Object(c.a)(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling))
              throw n;
            Object(c.a)(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!a.a.useDeprecatedSynchronousErrorHandling)
            throw new Error('bad call');
          try {
            e.call(this._context, n);
          } catch (r) {
            return a.a.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (Object(c.a)(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            t.unsubscribe();
        }
      }
    },
    '8tEE': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      }),
        n.d(e, 'b', function () {
          return s;
        }),
        n.d(e, 'c', function () {
          return i;
        }),
        n.d(e, 'd', function () {
          return o;
        }),
        n.d(e, 'e', function () {
          return a;
        }),
        n.d(e, 'f', function () {
          return c;
        });
      var r = {
          prefix: 'fab',
          iconName: 'github',
          icon: [
            496,
            512,
            [],
            'f09b',
            'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
          ]
        },
        s = {
          prefix: 'fab',
          iconName: 'instagram',
          icon: [
            448,
            512,
            [],
            'f16d',
            'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
          ]
        },
        i = {
          prefix: 'fab',
          iconName: 'medium-m',
          icon: [
            512,
            512,
            [],
            'f3c7',
            'M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z'
          ]
        },
        o = {
          prefix: 'fab',
          iconName: 'twitter',
          icon: [
            512,
            512,
            [],
            'f099',
            'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
          ]
        },
        a = {
          prefix: 'fab',
          iconName: 'uikit',
          icon: [
            448,
            512,
            [],
            'f403',
            'M443.9 128v256L218 512 0 384V169.7l87.6 45.1v117l133.5 75.5 135.8-75.5v-151l-101.1-57.6 87.6-53.1L443.9 128zM308.6 49.1L223.8 0l-88.6 54.8 86 47.3 87.4-53z'
          ]
        },
        c = {
          prefix: 'fab',
          iconName: 'youtube',
          icon: [
            576,
            512,
            [],
            'f167',
            'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'
          ]
        };
    },
    '9a8T': function (t, e, n) {
      t.exports = (function (t) {
        function e(r) {
          if (n[r]) return n[r].exports;
          var s = (n[r] = { exports: {}, id: r, loaded: !1 });
          return (
            t[r].call(s.exports, s, s.exports, e), (s.loaded = !0), s.exports
          );
        }
        var n = {};
        return (e.m = t), (e.c = n), (e.p = 'dist/'), e(0);
      })([
        function (t, e, n) {
          'use strict';
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var s =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              },
            i = (r(n(1)), n(6)),
            o = r(i),
            a = r(n(7)),
            c = r(n(8)),
            l = r(n(9)),
            u = r(n(10)),
            h = r(n(11)),
            d = r(n(14)),
            f = [],
            p = !1,
            m = {
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
            g = function () {
              if (
                (arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0] &&
                  (p = !0),
                p)
              )
                return (f = (0, h.default)(f, m)), (0, u.default)(f, m.once), f;
            },
            y = function () {
              (f = (0, d.default)()), g();
            };
          t.exports = {
            init: function (t) {
              (m = s(m, t)), (f = (0, d.default)());
              var e = document.all && !window.atob;
              return (function (t) {
                return (
                  !0 === t ||
                  ('mobile' === t && l.default.mobile()) ||
                  ('phone' === t && l.default.phone()) ||
                  ('tablet' === t && l.default.tablet()) ||
                  ('function' == typeof t && !0 === t())
                );
              })(m.disable) || e
                ? void f.forEach(function (t, e) {
                    t.node.removeAttribute('data-aos'),
                      t.node.removeAttribute('data-aos-easing'),
                      t.node.removeAttribute('data-aos-duration'),
                      t.node.removeAttribute('data-aos-delay');
                  })
                : (m.disableMutationObserver ||
                    c.default.isSupported() ||
                    (console.info(
                      '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                    ),
                    (m.disableMutationObserver = !0)),
                  document
                    .querySelector('body')
                    .setAttribute('data-aos-easing', m.easing),
                  document
                    .querySelector('body')
                    .setAttribute('data-aos-duration', m.duration),
                  document
                    .querySelector('body')
                    .setAttribute('data-aos-delay', m.delay),
                  'DOMContentLoaded' === m.startEvent &&
                  ['complete', 'interactive'].indexOf(document.readyState) > -1
                    ? g(!0)
                    : 'load' === m.startEvent
                    ? window.addEventListener(m.startEvent, function () {
                        g(!0);
                      })
                    : document.addEventListener(m.startEvent, function () {
                        g(!0);
                      }),
                  window.addEventListener(
                    'resize',
                    (0, a.default)(g, m.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    'orientationchange',
                    (0, a.default)(g, m.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    'scroll',
                    (0, o.default)(function () {
                      (0, u.default)(f, m.once);
                    }, m.throttleDelay)
                  ),
                  m.disableMutationObserver || c.default.ready('[data-aos]', y),
                  f);
            },
            refresh: g,
            refreshHard: y
          };
        },
        function (t, e) {},
        ,
        ,
        ,
        ,
        function (t, e) {
          (function (e) {
            'use strict';
            function n(t) {
              var e = void 0 === t ? 'undefined' : s(t);
              return !!t && ('object' == e || 'function' == e);
            }
            function r(t) {
              if ('number' == typeof t) return t;
              if (
                (function (t) {
                  return (
                    'symbol' == (void 0 === t ? 'undefined' : s(t)) ||
                    ((function (t) {
                      return (
                        !!t && 'object' == (void 0 === t ? 'undefined' : s(t))
                      );
                    })(t) &&
                      g.call(t) == a)
                  );
                })(t)
              )
                return o;
              if (n(t)) {
                var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
                t = n(e) ? e + '' : e;
              }
              if ('string' != typeof t) return 0 === t ? t : +t;
              t = t.replace(c, '');
              var r = u.test(t);
              return r || h.test(t)
                ? d(t.slice(2), r ? 2 : 8)
                : l.test(t)
                ? o
                : +t;
            }
            var s =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    },
              i = 'Expected a function',
              o = NaN,
              a = '[object Symbol]',
              c = /^\s+|\s+$/g,
              l = /^[-+]0x[0-9a-f]+$/i,
              u = /^0b[01]+$/i,
              h = /^0o[0-7]+$/i,
              d = parseInt,
              f =
                'object' == (void 0 === e ? 'undefined' : s(e)) &&
                e &&
                e.Object === Object &&
                e,
              p =
                'object' ==
                  ('undefined' == typeof self ? 'undefined' : s(self)) &&
                self &&
                self.Object === Object &&
                self,
              m = f || p || Function('return this')(),
              g = Object.prototype.toString,
              y = Math.max,
              b = Math.min,
              v = function () {
                return m.Date.now();
              };
            t.exports = function (t, e, s) {
              var o = !0,
                a = !0;
              if ('function' != typeof t) throw new TypeError(i);
              return (
                n(s) &&
                  ((o = 'leading' in s ? !!s.leading : o),
                  (a = 'trailing' in s ? !!s.trailing : a)),
                (function (t, e, s) {
                  function o(e) {
                    var n = d,
                      r = f;
                    return (d = f = void 0), (w = e), (m = t.apply(r, n));
                  }
                  function a(t) {
                    return (w = t), (g = setTimeout(l, e)), S ? o(t) : m;
                  }
                  function c(t) {
                    var n = t - _;
                    return void 0 === _ || n >= e || n < 0 || (E && t - w >= p);
                  }
                  function l() {
                    var t = v();
                    return c(t)
                      ? u(t)
                      : void (g = setTimeout(
                          l,
                          (function (t) {
                            var n = e - (t - _);
                            return E ? b(n, p - (t - w)) : n;
                          })(t)
                        ));
                  }
                  function u(t) {
                    return (g = void 0), x && d ? o(t) : ((d = f = void 0), m);
                  }
                  function h() {
                    var t = v(),
                      n = c(t);
                    if (((d = arguments), (f = this), (_ = t), n)) {
                      if (void 0 === g) return a(_);
                      if (E) return (g = setTimeout(l, e)), o(_);
                    }
                    return void 0 === g && (g = setTimeout(l, e)), m;
                  }
                  var d,
                    f,
                    p,
                    m,
                    g,
                    _,
                    w = 0,
                    S = !1,
                    E = !1,
                    x = !0;
                  if ('function' != typeof t) throw new TypeError(i);
                  return (
                    (e = r(e) || 0),
                    n(s) &&
                      ((S = !!s.leading),
                      (p = (E = 'maxWait' in s) ? y(r(s.maxWait) || 0, e) : p),
                      (x = 'trailing' in s ? !!s.trailing : x)),
                    (h.cancel = function () {
                      void 0 !== g && clearTimeout(g),
                        (w = 0),
                        (d = _ = f = g = void 0);
                    }),
                    (h.flush = function () {
                      return void 0 === g ? m : u(v());
                    }),
                    h
                  );
                })(t, e, { leading: o, maxWait: e, trailing: a })
              );
            };
          }.call(
            e,
            (function () {
              return this;
            })()
          ));
        },
        function (t, e) {
          (function (e) {
            'use strict';
            function n(t) {
              var e = void 0 === t ? 'undefined' : s(t);
              return !!t && ('object' == e || 'function' == e);
            }
            function r(t) {
              if ('number' == typeof t) return t;
              if (
                (function (t) {
                  return (
                    'symbol' == (void 0 === t ? 'undefined' : s(t)) ||
                    ((function (t) {
                      return (
                        !!t && 'object' == (void 0 === t ? 'undefined' : s(t))
                      );
                    })(t) &&
                      m.call(t) == o)
                  );
                })(t)
              )
                return i;
              if (n(t)) {
                var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
                t = n(e) ? e + '' : e;
              }
              if ('string' != typeof t) return 0 === t ? t : +t;
              t = t.replace(a, '');
              var r = l.test(t);
              return r || u.test(t)
                ? h(t.slice(2), r ? 2 : 8)
                : c.test(t)
                ? i
                : +t;
            }
            var s =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    },
              i = NaN,
              o = '[object Symbol]',
              a = /^\s+|\s+$/g,
              c = /^[-+]0x[0-9a-f]+$/i,
              l = /^0b[01]+$/i,
              u = /^0o[0-7]+$/i,
              h = parseInt,
              d =
                'object' == (void 0 === e ? 'undefined' : s(e)) &&
                e &&
                e.Object === Object &&
                e,
              f =
                'object' ==
                  ('undefined' == typeof self ? 'undefined' : s(self)) &&
                self &&
                self.Object === Object &&
                self,
              p = d || f || Function('return this')(),
              m = Object.prototype.toString,
              g = Math.max,
              y = Math.min,
              b = function () {
                return p.Date.now();
              };
            t.exports = function (t, e, s) {
              function i(e) {
                var n = h,
                  r = d;
                return (h = d = void 0), (_ = e), (p = t.apply(r, n));
              }
              function o(t) {
                return (_ = t), (m = setTimeout(c, e)), w ? i(t) : p;
              }
              function a(t) {
                var n = t - v;
                return void 0 === v || n >= e || n < 0 || (S && t - _ >= f);
              }
              function c() {
                var t = b();
                return a(t)
                  ? l(t)
                  : void (m = setTimeout(
                      c,
                      (function (t) {
                        var n = e - (t - v);
                        return S ? y(n, f - (t - _)) : n;
                      })(t)
                    ));
              }
              function l(t) {
                return (m = void 0), E && h ? i(t) : ((h = d = void 0), p);
              }
              function u() {
                var t = b(),
                  n = a(t);
                if (((h = arguments), (d = this), (v = t), n)) {
                  if (void 0 === m) return o(v);
                  if (S) return (m = setTimeout(c, e)), i(v);
                }
                return void 0 === m && (m = setTimeout(c, e)), p;
              }
              var h,
                d,
                f,
                p,
                m,
                v,
                _ = 0,
                w = !1,
                S = !1,
                E = !0;
              if ('function' != typeof t)
                throw new TypeError('Expected a function');
              return (
                (e = r(e) || 0),
                n(s) &&
                  ((w = !!s.leading),
                  (f = (S = 'maxWait' in s) ? g(r(s.maxWait) || 0, e) : f),
                  (E = 'trailing' in s ? !!s.trailing : E)),
                (u.cancel = function () {
                  void 0 !== m && clearTimeout(m),
                    (_ = 0),
                    (h = v = d = m = void 0);
                }),
                (u.flush = function () {
                  return void 0 === m ? p : l(b());
                }),
                u
              );
            };
          }.call(
            e,
            (function () {
              return this;
            })()
          ));
        },
        function (t, e) {
          'use strict';
          function n(t) {
            var e = void 0,
              r = void 0;
            for (e = 0; e < t.length; e += 1) {
              if ((r = t[e]).dataset && r.dataset.aos) return !0;
              if (r.children && n(r.children)) return !0;
            }
            return !1;
          }
          function r() {
            return (
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver
            );
          }
          function s(t) {
            t &&
              t.forEach(function (t) {
                var e = Array.prototype.slice.call(t.addedNodes),
                  r = Array.prototype.slice.call(t.removedNodes);
                if (n(e.concat(r))) return i();
              });
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var i = function () {};
          e.default = {
            isSupported: function () {
              return !!r();
            },
            ready: function (t, e) {
              var n = window.document,
                o = new (r())(s);
              (i = e),
                o.observe(n.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0
                });
            }
          };
        },
        function (t, e) {
          'use strict';
          function n() {
            return (
              navigator.userAgent || navigator.vendor || window.opera || ''
            );
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var r = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            i = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            c = (function () {
              function t() {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError('Cannot call a class as a function');
                })(this, t);
              }
              return (
                r(t, [
                  {
                    key: 'phone',
                    value: function () {
                      var t = n();
                      return !(!s.test(t) && !i.test(t.substr(0, 4)));
                    }
                  },
                  {
                    key: 'mobile',
                    value: function () {
                      var t = n();
                      return !(!o.test(t) && !a.test(t.substr(0, 4)));
                    }
                  },
                  {
                    key: 'tablet',
                    value: function () {
                      return this.mobile() && !this.phone();
                    }
                  }
                ]),
                t
              );
            })();
          e.default = new c();
        },
        function (t, e) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = function (t, e) {
              var n = window.pageYOffset,
                r = window.innerHeight;
              t.forEach(function (t, s) {
                !(function (t, e, n) {
                  var r = t.node.getAttribute('data-aos-once');
                  e > t.position
                    ? t.node.classList.add('aos-animate')
                    : void 0 !== r &&
                      ('false' === r || (!n && 'true' !== r)) &&
                      t.node.classList.remove('aos-animate');
                })(t, r + n, e);
              });
            });
        },
        function (t, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var r = (function (t) {
            return t && t.__esModule ? t : { default: t };
          })(n(12));
          e.default = function (t, e) {
            return (
              t.forEach(function (t, n) {
                t.node.classList.add('aos-init'),
                  (t.position = (0, r.default)(t.node, e.offset));
              }),
              t
            );
          };
        },
        function (t, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var r = (function (t) {
            return t && t.__esModule ? t : { default: t };
          })(n(13));
          e.default = function (t, e) {
            var n = 0,
              s = 0,
              i = window.innerHeight,
              o = {
                offset: t.getAttribute('data-aos-offset'),
                anchor: t.getAttribute('data-aos-anchor'),
                anchorPlacement: t.getAttribute('data-aos-anchor-placement')
              };
            switch (
              (o.offset && !isNaN(o.offset) && (s = parseInt(o.offset)),
              o.anchor &&
                document.querySelectorAll(o.anchor) &&
                (t = document.querySelectorAll(o.anchor)[0]),
              (n = (0, r.default)(t).top),
              o.anchorPlacement)
            ) {
              case 'top-bottom':
                break;
              case 'center-bottom':
                n += t.offsetHeight / 2;
                break;
              case 'bottom-bottom':
                n += t.offsetHeight;
                break;
              case 'top-center':
                n += i / 2;
                break;
              case 'bottom-center':
                n += i / 2 + t.offsetHeight;
                break;
              case 'center-center':
                n += i / 2 + t.offsetHeight / 2;
                break;
              case 'top-top':
                n += i;
                break;
              case 'bottom-top':
                n += t.offsetHeight + i;
                break;
              case 'center-top':
                n += t.offsetHeight / 2 + i;
            }
            return o.anchorPlacement || o.offset || isNaN(e) || (s = e), n + s;
          };
        },
        function (t, e) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = function (t) {
              for (
                var e = 0, n = 0;
                t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);

              )
                (e += t.offsetLeft - ('BODY' != t.tagName ? t.scrollLeft : 0)),
                  (n += t.offsetTop - ('BODY' != t.tagName ? t.scrollTop : 0)),
                  (t = t.offsetParent);
              return { top: n, left: e };
            });
        },
        function (t, e) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = function (t) {
              return (
                (t = t || document.querySelectorAll('[data-aos]')),
                Array.prototype.map.call(t, function (t) {
                  return { node: t };
                })
              );
            });
        }
      ]);
    },
    '9ppp': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = 'object unsubscribed'),
            (this.name = 'ObjectUnsubscribedError'),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    Cfvw: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return h;
      });
      var r = n('HDdC'),
        s = n('SeVD'),
        i = n('quSY'),
        o = n('kJWO'),
        a = n('jZKg'),
        c = n('Lhse'),
        l = n('c2HN'),
        u = n('I55L');
      function h(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && 'function' == typeof t[o.a];
                  })(t)
                )
                  return (function (t, e) {
                    return new r.a((n) => {
                      const r = new i.a();
                      return (
                        r.add(
                          e.schedule(() => {
                            const s = t[o.a]();
                            r.add(
                              s.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                }
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (Object(l.a)(t))
                  return (function (t, e) {
                    return new r.a((n) => {
                      const r = new i.a();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t),
                                      r.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (t) => {
                                r.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (Object(u.a)(t)) return Object(a.a)(t, e);
                if (
                  (function (t) {
                    return t && 'function' == typeof t[c.a];
                  })(t) ||
                  'string' == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error('Iterable cannot be null');
                    return new r.a((n) => {
                      const r = new i.a();
                      let s;
                      return (
                        r.add(() => {
                          s && 'function' == typeof s.return && s.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (s = t[c.a]()),
                              r.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = s.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e
                                    ? n.complete()
                                    : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + ' is not observable'
              );
            })(t, e)
          : t instanceof r.a
          ? t
          : new r.a(Object(s.a)(t));
      }
    },
    DH7j: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() =>
        Array.isArray || ((t) => t && 'number' == typeof t.length))();
    },
    EQ5u: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      }),
        n.d(e, 'b', function () {
          return c;
        });
      var r = n('XNiG'),
        s = n('HDdC'),
        i = (n('7o/Q'), n('quSY')),
        o = n('x+ZX');
      class a extends s.a {
        constructor(t, e) {
          super(),
            (this.source = t),
            (this.subjectFactory = e),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (t && !t.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new i.a()),
              t.add(this.source.subscribe(new l(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = i.a.EMPTY))),
            t
          );
        }
        refCount() {
          return Object(o.a)()(this);
        }
      }
      const c = (() => {
        const t = a.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount }
        };
      })();
      class l extends r.b {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0),
              (t._subject = null),
              (t._connection = null),
              e && e.unsubscribe();
          }
        }
      }
    },
    EY2u: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      }),
        n.d(e, 'b', function () {
          return i;
        });
      var r = n('HDdC');
      const s = new r.a((t) => t.complete());
      function i(t) {
        return t
          ? (function (t) {
              return new r.a((e) => t.schedule(() => e.complete()));
            })(t)
          : s;
      }
    },
    GyhO: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('LRne'),
        s = n('bHdf');
      function i(...t) {
        return Object(s.a)(1)(Object(r.a)(...t));
      }
    },
    HDdC: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return l;
      });
      var r = n('7o/Q'),
        s = n('2QA8'),
        i = n('gRHU'),
        o = n('kJWO'),
        a = n('SpAZ'),
        c = n('2fFW');
      let l = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: o } = this,
              a = (function (t, e, n) {
                if (t) {
                  if (t instanceof r.a) return t;
                  if (t[s.a]) return t[s.a]();
                }
                return t || e || n ? new r.a(t, e, n) : new r.a(i.a);
              })(t, e, n);
            if (
              (a.add(
                o
                  ? o.call(a, this.source)
                  : this.source ||
                    (c.a.useDeprecatedSynchronousErrorHandling &&
                      !a.syncErrorThrowable)
                  ? this._subscribe(a)
                  : this._trySubscribe(a)
              ),
              c.a.useDeprecatedSynchronousErrorHandling &&
                a.syncErrorThrowable &&
                ((a.syncErrorThrowable = !1), a.syncErrorThrown))
            )
              throw a.syncErrorValue;
            return a;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              c.a.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: s } = t;
                    if (e || s) return !1;
                    t = n && n instanceof r.a ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = u(e))((e, n) => {
              let r;
              r = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [o.a]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length
              ? this
              : (0 === (e = t).length
                  ? a.a
                  : 1 === e.length
                  ? e[0]
                  : function (t) {
                      return e.reduce((t, e) => e(t), t);
                    })(this);
            var e;
          }
          toPromise(t) {
            return new (t = u(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function u(t) {
        if ((t || (t = c.a.Promise || Promise), !t))
          throw new Error('no Promise impl found');
        return t;
      }
    },
    I55L: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (t) =>
        t && 'number' == typeof t.length && 'function' != typeof t;
    },
    IzEk: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('7o/Q'),
        s = n('4I5i'),
        i = n('EY2u');
      function o(t) {
        return (e) => (0 === t ? Object(i.b)() : e.lift(new a(t)));
      }
      class a {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new s.a();
        }
        call(t, e) {
          return e.subscribe(new c(t, this.total));
        }
      }
      class c extends r.a {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e &&
            (this.destination.next(t),
            n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
    },
    KqfI: function (t, e, n) {
      'use strict';
      function r() {}
      n.d(e, 'a', function () {
        return r;
      });
    },
    LRne: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('z+Ro'),
        s = n('yCtX'),
        i = n('jZKg');
      function o(...t) {
        let e = t[t.length - 1];
        return Object(r.a)(e) ? (t.pop(), Object(i.a)(t, e)) : Object(s.a)(t);
      }
    },
    Lhse: function (t, e, n) {
      'use strict';
      function r() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      }
      n.d(e, 'a', function () {
        return s;
      });
      const s = r();
    },
    NJ4a: function (t, e, n) {
      'use strict';
      function r(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    NXyV: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('HDdC'),
        s = n('Cfvw'),
        i = n('EY2u');
      function o(t) {
        return new r.a((e) => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? Object(s.a)(n) : Object(i.b)()).subscribe(e);
        });
      }
    },
    'Nv++': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return Tt;
      }),
        n.d(e, 'b', function () {
          return Et;
        }),
        n.d(e, 'c', function () {
          return kt;
        });
      var r = n('fXoL');
      function s(t) {
        return (s =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function i(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              i(t, e, n[e]);
            });
        }
        return t;
      }
      function a(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n = [],
              r = !0,
              s = !1,
              i = void 0;
            try {
              for (
                var o, a = t[Symbol.iterator]();
                !(r = (o = a.next()).done) &&
                (n.push(o.value), !e || n.length !== e);
                r = !0
              );
            } catch (c) {
              (s = !0), (i = c);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (s) throw i;
              }
            }
            return n;
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      var c = {},
        l = {};
      try {
        'undefined' != typeof window && (c = window),
          'undefined' != typeof document && (l = document),
          'undefined' != typeof MutationObserver && MutationObserver,
          'undefined' != typeof performance && performance;
      } catch (jt) {}
      var u = (c.navigator || {}).userAgent,
        h = void 0 === u ? '' : u,
        d = c,
        f = l,
        p =
          !!f.documentElement &&
          !!f.head &&
          'function' == typeof f.addEventListener &&
          'function' == typeof f.createElement,
        m = (~h.indexOf('MSIE') || h.indexOf('Trident/'), 'svg-inline--fa'),
        g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y = g.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        b = {
          GROUP: 'group',
          SWAP_OPACITY: 'swap-opacity',
          PRIMARY: 'primary',
          SECONDARY: 'secondary'
        },
        v =
          ([
            'xs',
            'sm',
            'lg',
            'fw',
            'ul',
            'li',
            'border',
            'pull-left',
            'pull-right',
            'spin',
            'pulse',
            'rotate-90',
            'rotate-180',
            'rotate-270',
            'flip-horizontal',
            'flip-vertical',
            'flip-both',
            'stack',
            'stack-1x',
            'stack-2x',
            'inverse',
            'layers',
            'layers-text',
            'layers-counter',
            b.GROUP,
            b.SWAP_OPACITY,
            b.PRIMARY,
            b.SECONDARY
          ]
            .concat(
              g.map(function (t) {
                return ''.concat(t, 'x');
              })
            )
            .concat(
              y.map(function (t) {
                return 'w-'.concat(t);
              })
            ),
          d.FontAwesomeConfig || {});
      f &&
        'function' == typeof f.querySelector &&
        [
          ['data-family-prefix', 'familyPrefix'],
          ['data-replacement-class', 'replacementClass'],
          ['data-auto-replace-svg', 'autoReplaceSvg'],
          ['data-auto-add-css', 'autoAddCss'],
          ['data-auto-a11y', 'autoA11y'],
          ['data-search-pseudo-elements', 'searchPseudoElements'],
          ['data-observe-mutations', 'observeMutations'],
          ['data-mutate-approach', 'mutateApproach'],
          ['data-keep-original-source', 'keepOriginalSource'],
          ['data-measure-performance', 'measurePerformance'],
          ['data-show-missing-icons', 'showMissingIcons']
        ].forEach(function (t) {
          var e = a(t, 2),
            n = e[1],
            r = (function (t) {
              return '' === t || ('false' !== t && ('true' === t || t));
            })(
              (function (t) {
                var e = f.querySelector('script[' + t + ']');
                if (e) return e.getAttribute(t);
              })(e[0])
            );
          null != r && (v[n] = r);
        });
      var _ = o(
        {},
        {
          familyPrefix: 'fa',
          replacementClass: m,
          autoReplaceSvg: !0,
          autoAddCss: !0,
          autoA11y: !0,
          searchPseudoElements: !1,
          observeMutations: !0,
          mutateApproach: 'async',
          keepOriginalSource: !0,
          measurePerformance: !1,
          showMissingIcons: !0
        },
        v
      );
      _.autoReplaceSvg || (_.observeMutations = !1);
      var w = o({}, _);
      d.FontAwesomeConfig = w;
      var S = d || {};
      S.___FONT_AWESOME___ || (S.___FONT_AWESOME___ = {}),
        S.___FONT_AWESOME___.styles || (S.___FONT_AWESOME___.styles = {}),
        S.___FONT_AWESOME___.hooks || (S.___FONT_AWESOME___.hooks = {}),
        S.___FONT_AWESOME___.shims || (S.___FONT_AWESOME___.shims = []);
      var E = S.___FONT_AWESOME___,
        x = [];
      p &&
        ((f.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
          f.readyState
        ) ||
          f.addEventListener('DOMContentLoaded', function t() {
            f.removeEventListener('DOMContentLoaded', t),
              x.map(function (t) {
                return t();
              });
          }));
      var C,
        O = 'pending',
        T = 'settled',
        k = 'fulfilled',
        j = 'rejected',
        A = function () {},
        I =
          'undefined' != typeof global &&
          void 0 !== global.process &&
          'function' == typeof global.process.emit,
        P = 'undefined' == typeof setImmediate ? setTimeout : setImmediate,
        N = [];
      function R() {
        for (var t = 0; t < N.length; t++) N[t][0](N[t][1]);
        (N = []), (C = !1);
      }
      function M(t, e) {
        N.push([t, e]), C || ((C = !0), P(R, 0));
      }
      function D(t) {
        var e = t.owner,
          n = e._state,
          r = e._data,
          s = t[n],
          i = t.then;
        if ('function' == typeof s) {
          n = k;
          try {
            r = s(r);
          } catch (jt) {
            H(i, jt);
          }
        }
        L(i, r) || (n === k && F(i, r), n === j && H(i, r));
      }
      function L(t, e) {
        var n;
        try {
          if (t === e)
            throw new TypeError(
              'A promises callback cannot return that same promise.'
            );
          if (e && ('function' == typeof e || 'object' === s(e))) {
            var r = e.then;
            if ('function' == typeof r)
              return (
                r.call(
                  e,
                  function (r) {
                    n || ((n = !0), e === r ? z(t, r) : F(t, r));
                  },
                  function (e) {
                    n || ((n = !0), H(t, e));
                  }
                ),
                !0
              );
          }
        } catch (jt) {
          return n || H(t, jt), !0;
        }
        return !1;
      }
      function F(t, e) {
        (t !== e && L(t, e)) || z(t, e);
      }
      function z(t, e) {
        t._state === O && ((t._state = T), (t._data = e), M($, t));
      }
      function H(t, e) {
        t._state === O && ((t._state = T), (t._data = e), M(V, t));
      }
      function U(t) {
        t._then = t._then.forEach(D);
      }
      function $(t) {
        (t._state = k), U(t);
      }
      function V(t) {
        (t._state = j),
          U(t),
          !t._handled &&
            I &&
            global.process.emit('unhandledRejection', t._data, t);
      }
      function q(t) {
        global.process.emit('rejectionHandled', t);
      }
      function B(t) {
        if ('function' != typeof t)
          throw new TypeError('Promise resolver ' + t + ' is not a function');
        if (this instanceof B == 0)
          throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
          );
        (this._then = []),
          (function (t, e) {
            function n(t) {
              H(e, t);
            }
            try {
              t(function (t) {
                F(e, t);
              }, n);
            } catch (jt) {
              n(jt);
            }
          })(t, this);
      }
      (B.prototype = {
        constructor: B,
        _state: O,
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function (t, e) {
          var n = {
            owner: this,
            then: new this.constructor(A),
            fulfilled: t,
            rejected: e
          };
          return (
            (!e && !t) ||
              this._handled ||
              ((this._handled = !0), this._state === j && I && M(q, this)),
            this._state === k || this._state === j
              ? M(D, n)
              : this._then.push(n),
            n.then
          );
        },
        catch: function (t) {
          return this.then(null, t);
        }
      }),
        (B.all = function (t) {
          if (!Array.isArray(t))
            throw new TypeError('You must pass an array to Promise.all().');
          return new B(function (e, n) {
            var r = [],
              s = 0;
            function i(t) {
              return (
                s++,
                function (n) {
                  (r[t] = n), --s || e(r);
                }
              );
            }
            for (var o, a = 0; a < t.length; a++)
              (o = t[a]) && 'function' == typeof o.then
                ? o.then(i(a), n)
                : (r[a] = o);
            s || e(r);
          });
        }),
        (B.race = function (t) {
          if (!Array.isArray(t))
            throw new TypeError('You must pass an array to Promise.race().');
          return new B(function (e, n) {
            for (var r, s = 0; s < t.length; s++)
              (r = t[s]) && 'function' == typeof r.then ? r.then(e, n) : e(r);
          });
        }),
        (B.resolve = function (t) {
          return t && 'object' === s(t) && t.constructor === B
            ? t
            : new B(function (e) {
                e(t);
              });
        }),
        (B.reject = function (t) {
          return new B(function (e, n) {
            n(t);
          });
        });
      var W = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      function Q() {
        for (var t = 12, e = ''; t-- > 0; )
          e += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[
            (62 * Math.random()) | 0
          ];
        return e;
      }
      function G(t) {
        return ''
          .concat(t)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function Z(t) {
        return Object.keys(t || {}).reduce(function (e, n) {
          return e + ''.concat(n, ': ').concat(t[n], ';');
        }, '');
      }
      function K(t) {
        return (
          t.size !== W.size ||
          t.x !== W.x ||
          t.y !== W.y ||
          t.rotate !== W.rotate ||
          t.flipX ||
          t.flipY
        );
      }
      function J(t) {
        var e = t.transform,
          n = t.iconWidth,
          r = { transform: 'translate('.concat(t.containerWidth / 2, ' 256)') },
          s = 'translate('.concat(32 * e.x, ', ').concat(32 * e.y, ') '),
          i = 'scale('
            .concat((e.size / 16) * (e.flipX ? -1 : 1), ', ')
            .concat((e.size / 16) * (e.flipY ? -1 : 1), ') '),
          o = 'rotate('.concat(e.rotate, ' 0 0)');
        return {
          outer: r,
          inner: { transform: ''.concat(s, ' ').concat(i, ' ').concat(o) },
          path: { transform: 'translate('.concat((n / 2) * -1, ' -256)') }
        };
      }
      var Y = { x: 0, y: 0, width: '100%', height: '100%' };
      function X(t) {
        var e =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          t.attributes &&
            (t.attributes.fill || e) &&
            (t.attributes.fill = 'black'),
          t
        );
      }
      function tt(t) {
        var e = t.icons,
          n = e.main,
          r = e.mask,
          s = t.prefix,
          i = t.iconName,
          a = t.transform,
          c = t.symbol,
          l = t.title,
          u = t.maskId,
          h = t.titleId,
          d = t.extra,
          f = t.watchable,
          p = void 0 !== f && f,
          m = r.found ? r : n,
          g = m.width,
          y = m.height,
          b = 'fak' === s,
          v = b ? '' : 'fa-w-'.concat(Math.ceil((g / y) * 16)),
          _ = [
            w.replacementClass,
            i ? ''.concat(w.familyPrefix, '-').concat(i) : '',
            v
          ]
            .filter(function (t) {
              return -1 === d.classes.indexOf(t);
            })
            .filter(function (t) {
              return '' !== t || !!t;
            })
            .concat(d.classes)
            .join(' '),
          S = {
            children: [],
            attributes: o({}, d.attributes, {
              'data-prefix': s,
              'data-icon': i,
              class: _,
              role: d.attributes.role || 'img',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 '.concat(g, ' ').concat(y)
            })
          },
          E =
            b && !~d.classes.indexOf('fa-fw')
              ? { width: ''.concat((g / y) * 16 * 0.0625, 'em') }
              : {};
        p && (S.attributes['data-fa-i2svg'] = ''),
          l &&
            S.children.push({
              tag: 'title',
              attributes: {
                id: S.attributes['aria-labelledby'] || 'title-'.concat(h || Q())
              },
              children: [l]
            });
        var x = o({}, S, {
            prefix: s,
            iconName: i,
            main: n,
            mask: r,
            maskId: u,
            transform: a,
            symbol: c,
            styles: o({}, E, d.styles)
          }),
          C =
            r.found && n.found
              ? (function (t) {
                  var e,
                    n = t.children,
                    r = t.attributes,
                    s = t.main,
                    i = t.mask,
                    a = t.maskId,
                    c = s.icon,
                    l = i.icon,
                    u = J({
                      transform: t.transform,
                      containerWidth: i.width,
                      iconWidth: s.width
                    }),
                    h = {
                      tag: 'rect',
                      attributes: o({}, Y, { fill: 'white' })
                    },
                    d = c.children ? { children: c.children.map(X) } : {},
                    f = {
                      tag: 'g',
                      attributes: o({}, u.inner),
                      children: [
                        X(
                          o(
                            {
                              tag: c.tag,
                              attributes: o({}, c.attributes, u.path)
                            },
                            d
                          )
                        )
                      ]
                    },
                    p = { tag: 'g', attributes: o({}, u.outer), children: [f] },
                    m = 'mask-'.concat(a || Q()),
                    g = 'clip-'.concat(a || Q()),
                    y = {
                      tag: 'mask',
                      attributes: o({}, Y, {
                        id: m,
                        maskUnits: 'userSpaceOnUse',
                        maskContentUnits: 'userSpaceOnUse'
                      }),
                      children: [h, p]
                    },
                    b = {
                      tag: 'defs',
                      children: [
                        {
                          tag: 'clipPath',
                          attributes: { id: g },
                          children: ((e = l), 'g' === e.tag ? e.children : [e])
                        },
                        y
                      ]
                    };
                  return (
                    n.push(b, {
                      tag: 'rect',
                      attributes: o(
                        {
                          fill: 'currentColor',
                          'clip-path': 'url(#'.concat(g, ')'),
                          mask: 'url(#'.concat(m, ')')
                        },
                        Y
                      )
                    }),
                    { children: n, attributes: r }
                  );
                })(x)
              : (function (t) {
                  var e = t.children,
                    n = t.attributes,
                    r = t.main,
                    s = t.transform,
                    i = Z(t.styles);
                  if ((i.length > 0 && (n.style = i), K(s))) {
                    var a = J({
                      transform: s,
                      containerWidth: r.width,
                      iconWidth: r.width
                    });
                    e.push({
                      tag: 'g',
                      attributes: o({}, a.outer),
                      children: [
                        {
                          tag: 'g',
                          attributes: o({}, a.inner),
                          children: [
                            {
                              tag: r.icon.tag,
                              children: r.icon.children,
                              attributes: o({}, r.icon.attributes, a.path)
                            }
                          ]
                        }
                      ]
                    });
                  } else e.push(r.icon);
                  return { children: e, attributes: n };
                })(x),
          O = C.attributes;
        return (
          (x.children = C.children),
          (x.attributes = O),
          c
            ? (function (t) {
                var e = t.iconName,
                  n = t.children,
                  r = t.symbol;
                return [
                  {
                    tag: 'svg',
                    attributes: { style: 'display: none;' },
                    children: [
                      {
                        tag: 'symbol',
                        attributes: o({}, t.attributes, {
                          id:
                            !0 === r
                              ? ''
                                  .concat(t.prefix, '-')
                                  .concat(w.familyPrefix, '-')
                                  .concat(e)
                              : r
                        }),
                        children: n
                      }
                    ]
                  }
                ];
              })(x)
            : (function (t) {
                var e = t.children,
                  n = t.main,
                  r = t.mask,
                  s = t.attributes,
                  i = t.styles,
                  a = t.transform;
                if (K(a) && n.found && !r.found) {
                  var c = { x: n.width / n.height / 2, y: 0.5 };
                  s.style = Z(
                    o({}, i, {
                      'transform-origin': ''
                        .concat(c.x + a.x / 16, 'em ')
                        .concat(c.y + a.y / 16, 'em')
                    })
                  );
                }
                return [{ tag: 'svg', attributes: s, children: e }];
              })(x)
        );
      }
      var et = function (t, e, n, r) {
        var s,
          i,
          o,
          a = Object.keys(t),
          c = a.length,
          l =
            void 0 !== r
              ? (function (t, e) {
                  return function (n, r, s, i) {
                    return t.call(e, n, r, s, i);
                  };
                })(e, r)
              : e;
        for (
          void 0 === n ? ((s = 1), (o = t[a[0]])) : ((s = 0), (o = n));
          s < c;
          s++
        )
          o = l(o, t[(i = a[s])], i, t);
        return o;
      };
      function nt(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.skipHooks,
          s = void 0 !== r && r,
          i = Object.keys(e).reduce(function (t, n) {
            var r = e[n];
            return r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
          }, {});
        'function' != typeof E.hooks.addPack || s
          ? (E.styles[t] = o({}, E.styles[t] || {}, i))
          : E.hooks.addPack(t, i),
          'fas' === t && nt('fa', e);
      }
      var rt = E.styles,
        st = E.shims,
        it = function () {
          var t = function (t) {
            return et(
              rt,
              function (e, n, r) {
                return (e[r] = et(n, t, {})), e;
              },
              {}
            );
          };
          t(function (t, e, n) {
            return e[3] && (t[e[3]] = n), t;
          }),
            t(function (t, e, n) {
              var r = e[2];
              return (
                (t[n] = n),
                r.forEach(function (e) {
                  t[e] = n;
                }),
                t
              );
            });
          var e = 'far' in rt;
          et(
            st,
            function (t, n) {
              var r = n[1];
              return (
                'far' !== r || e || (r = 'fas'),
                (t[n[0]] = { prefix: r, iconName: n[2] }),
                t
              );
            },
            {}
          );
        };
      function ot(t, e, n) {
        if (t && t[e] && t[e][n])
          return { prefix: e, iconName: n, icon: t[e][n] };
      }
      function at(t) {
        var e = t.tag,
          n = t.attributes,
          r = void 0 === n ? {} : n,
          s = t.children,
          i = void 0 === s ? [] : s;
        return 'string' == typeof t
          ? G(t)
          : '<'
              .concat(e, ' ')
              .concat(
                (function (t) {
                  return Object.keys(t || {})
                    .reduce(function (e, n) {
                      return e + ''.concat(n, '="').concat(G(t[n]), '" ');
                    }, '')
                    .trim();
                })(r),
                '>'
              )
              .concat(i.map(at).join(''), '</')
              .concat(e, '>');
      }
      function ct(t) {
        (this.name = 'MissingIcon'),
          (this.message = t || 'Icon unavailable'),
          (this.stack = new Error().stack);
      }
      it(), ((ct.prototype = Object.create(Error.prototype)).constructor = ct);
      var lt = { fill: 'currentColor' },
        ut = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' },
        ht =
          (o({}, lt, {
            d:
              'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
          }),
          o({}, ut, { attributeName: 'opacity' }));
      function dt(t) {
        var e = t[0],
          n = t[1],
          r = a(t.slice(4), 1)[0];
        return {
          found: !0,
          width: e,
          height: n,
          icon: Array.isArray(r)
            ? {
                tag: 'g',
                attributes: {
                  class: ''.concat(w.familyPrefix, '-').concat(b.GROUP)
                },
                children: [
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(w.familyPrefix, '-').concat(b.SECONDARY),
                      fill: 'currentColor',
                      d: r[0]
                    }
                  },
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(w.familyPrefix, '-').concat(b.PRIMARY),
                      fill: 'currentColor',
                      d: r[1]
                    }
                  }
                ]
              }
            : { tag: 'path', attributes: { fill: 'currentColor', d: r } }
        };
      }
      function ft() {
        w.autoAddCss &&
          !bt &&
          ((function (t) {
            if (t && p) {
              var e = f.createElement('style');
              e.setAttribute('type', 'text/css'), (e.innerHTML = t);
              for (
                var n = f.head.childNodes, r = null, s = n.length - 1;
                s > -1;
                s--
              ) {
                var i = n[s],
                  o = (i.tagName || '').toUpperCase();
                ['STYLE', 'LINK'].indexOf(o) > -1 && (r = i);
              }
              f.head.insertBefore(e, r);
            }
          })(
            (function () {
              var t = 'fa',
                e = m,
                n = w.familyPrefix,
                r = w.replacementClass,
                s =
                  'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
              if (n !== t || r !== e) {
                var i = new RegExp('\\.'.concat(t, '\\-'), 'g'),
                  o = new RegExp('\\--'.concat(t, '\\-'), 'g'),
                  a = new RegExp('\\.'.concat(e), 'g');
                s = s
                  .replace(i, '.'.concat(n, '-'))
                  .replace(o, '--'.concat(n, '-'))
                  .replace(a, '.'.concat(r));
              }
              return s;
            })()
          ),
          (bt = !0));
      }
      function pt(t, e) {
        return (
          Object.defineProperty(t, 'abstract', { get: e }),
          Object.defineProperty(t, 'html', {
            get: function () {
              return t.abstract.map(function (t) {
                return at(t);
              });
            }
          }),
          Object.defineProperty(t, 'node', {
            get: function () {
              if (p) {
                var e = f.createElement('div');
                return (e.innerHTML = t.html), e.children;
              }
            }
          }),
          t
        );
      }
      function mt(t) {
        var e = t.prefix,
          n = void 0 === e ? 'fa' : e,
          r = t.iconName;
        if (r) return ot(yt.definitions, n, r) || ot(E.styles, n, r);
      }
      o({}, lt, { cx: '256', cy: '364', r: '28' }),
        o({}, ut, { attributeName: 'r', values: '28;14;28;28;14;28;' }),
        o({}, ht, { values: '1;0;1;1;0;1;' }),
        o({}, lt, {
          opacity: '1',
          d:
            'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        o({}, ht, { values: '1;0;0;0;0;1;' }),
        o({}, lt, {
          opacity: '0',
          d:
            'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
        }),
        o({}, ht, { values: '0;0;1;1;0;0;' });
      var gt,
        yt = new ((function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this.definitions = {});
          }
          var e;
          return (
            (e = [
              {
                key: 'add',
                value: function () {
                  for (
                    var t = this, e = arguments.length, n = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  var s = n.reduce(this._pullDefinitions, {});
                  Object.keys(s).forEach(function (e) {
                    (t.definitions[e] = o({}, t.definitions[e] || {}, s[e])),
                      nt(e, s[e]),
                      it();
                  });
                }
              },
              {
                key: 'reset',
                value: function () {
                  this.definitions = {};
                }
              },
              {
                key: '_pullDefinitions',
                value: function (t, e) {
                  var n = e.prefix && e.iconName && e.icon ? { 0: e } : e;
                  return (
                    Object.keys(n).map(function (e) {
                      var r = n[e],
                        s = r.prefix,
                        i = r.iconName,
                        o = r.icon;
                      t[s] || (t[s] = {}), (t[s][i] = o);
                    }),
                    t
                  );
                }
              }
            ]) &&
              (function (t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              })(t.prototype, e),
            t
          );
        })())(),
        bt = !1,
        vt =
          ((gt = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.transform,
              r = void 0 === n ? W : n,
              s = e.symbol,
              i = void 0 !== s && s,
              a = e.mask,
              c = void 0 === a ? null : a,
              l = e.maskId,
              u = void 0 === l ? null : l,
              h = e.title,
              d = void 0 === h ? null : h,
              f = e.titleId,
              p = void 0 === f ? null : f,
              m = e.classes,
              g = void 0 === m ? [] : m,
              y = e.attributes,
              b = void 0 === y ? {} : y,
              v = e.styles,
              _ = void 0 === v ? {} : v;
            if (t) {
              var S = t.prefix,
                E = t.iconName,
                x = t.icon;
              return pt(o({ type: 'icon' }, t), function () {
                return (
                  ft(),
                  w.autoA11y &&
                    (d
                      ? (b['aria-labelledby'] = ''
                          .concat(w.replacementClass, '-title-')
                          .concat(p || Q()))
                      : ((b['aria-hidden'] = 'true'), (b.focusable = 'false'))),
                  tt({
                    icons: {
                      main: dt(x),
                      mask: c
                        ? dt(c.icon)
                        : { found: !1, width: null, height: null, icon: {} }
                    },
                    prefix: S,
                    iconName: E,
                    transform: o({}, W, r),
                    symbol: i,
                    title: d,
                    maskId: u,
                    titleId: p,
                    extra: { attributes: b, styles: _, classes: g }
                  })
                );
              });
            }
          }),
          function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = (t || {}).icon ? t : mt(t || {}),
              r = e.mask;
            return (
              r && (r = (r || {}).icon ? r : mt(r || {})),
              gt(n, o({}, e, { mask: r }))
            );
          }),
        _t = n('jhN1');
      const wt = ['*'];
      let St = (() => {
          class t {
            constructor() {
              (this.defaultPrefix = 'fas'),
                (this.fallbackIcon = null),
                (this.globalLibrary = !1);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(r.Cb)({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        Et = (() => {
          class t {
            constructor() {
              this.definitions = {};
            }
            addIcons(...t) {
              for (const e of t)
                e.prefix in this.definitions ||
                  (this.definitions[e.prefix] = {}),
                  (this.definitions[e.prefix][e.iconName] = e);
            }
            addIconPacks(...t) {
              for (const e of t) {
                const t = Object.keys(e).map((t) => e[t]);
                this.addIcons(...t);
              }
            }
            getIconDefinition(t, e) {
              return t in this.definitions && e in this.definitions[t]
                ? this.definitions[t][e]
                : null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(r.Cb)({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })();
      const xt = (t) => {
        const e = {
          'fa-spin': t.spin,
          'fa-pulse': t.pulse,
          'fa-fw': t.fixedWidth,
          'fa-border': t.border,
          'fa-inverse': t.inverse,
          'fa-layers-counter': t.counter,
          'fa-flip-horizontal': 'horizontal' === t.flip || 'both' === t.flip,
          'fa-flip-vertical': 'vertical' === t.flip || 'both' === t.flip,
          [`fa-${t.size}`]: null !== t.size,
          [`fa-rotate-${t.rotate}`]: null !== t.rotate,
          [`fa-pull-${t.pull}`]: null !== t.pull,
          [`fa-stack-${t.stackItemSize}`]: null != t.stackItemSize
        };
        return Object.keys(e)
          .map((t) => (e[t] ? t : null))
          .filter((t) => t);
      };
      let Ct = (() => {
          class t {
            constructor() {
              this.stackItemSize = '1x';
            }
            ngOnChanges(t) {
              if ('size' in t)
                throw new Error(
                  'fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.'
                );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Bb({
              type: t,
              selectors: [
                ['fa-icon', 'stackItemSize', ''],
                ['fa-duotone-icon', 'stackItemSize', '']
              ],
              inputs: { stackItemSize: 'stackItemSize', size: 'size' },
              features: [r.vb]
            })),
            t
          );
        })(),
        Ot = (() => {
          class t {
            constructor(t, e) {
              (this.renderer = t), (this.elementRef = e);
            }
            ngOnInit() {
              this.renderer.addClass(this.elementRef.nativeElement, 'fa-stack');
            }
            ngOnChanges(t) {
              'size' in t &&
                (null != t.size.currentValue &&
                  this.renderer.addClass(
                    this.elementRef.nativeElement,
                    `fa-${t.size.currentValue}`
                  ),
                null != t.size.previousValue &&
                  this.renderer.removeClass(
                    this.elementRef.nativeElement,
                    `fa-${t.size.previousValue}`
                  ));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Gb(r.E), r.Gb(r.l));
            }),
            (t.ɵcmp = r.Ab({
              type: t,
              selectors: [['fa-stack']],
              inputs: { size: 'size' },
              features: [r.vb],
              ngContentSelectors: wt,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (r.Sb(), r.Rb(0));
              },
              encapsulation: 2
            })),
            t
          );
        })(),
        Tt = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.sanitizer = t),
                (this.config = e),
                (this.iconLibrary = n),
                (this.stackItem = r),
                (this.classes = []),
                null != s &&
                  null == r &&
                  console.error(
                    'FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.'
                  );
            }
            ngOnChanges(t) {
              if (null == this.icon && null == this.config.fallbackIcon)
                return (() => {
                  throw new Error(
                    'Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.'
                  );
                })();
              let e = null;
              if (
                ((e = null == this.icon ? this.config.fallbackIcon : this.icon),
                t)
              ) {
                const t = this.findIconDefinition(e);
                if (null != t) {
                  const e = this.buildParams();
                  this.renderIcon(t, e);
                }
              }
            }
            render() {
              this.ngOnChanges({});
            }
            findIconDefinition(t) {
              const e = ((t, e) => {
                return void 0 !== (n = t).prefix && void 0 !== n.iconName
                  ? t
                  : Array.isArray(t) && 2 === t.length
                  ? { prefix: t[0], iconName: t[1] }
                  : 'string' == typeof t
                  ? { prefix: e, iconName: t }
                  : void 0;
                var n;
              })(t, this.config.defaultPrefix);
              if ('icon' in e) return e;
              const n = this.iconLibrary.getIconDefinition(
                e.prefix,
                e.iconName
              );
              if (null != n) return n;
              const r = mt(e);
              if (null != r) {
                const t =
                  'Global icon library is deprecated. Consult https://github.com/FortAwesome/angular-fontawesome/blob/master/UPGRADING.md for the migration instructions.';
                if ('unset' === this.config.globalLibrary)
                  console.error('FontAwesome: ' + t);
                else if (!this.config.globalLibrary) throw new Error(t);
                return r;
              }
              return (
                ((t) => {
                  throw new Error(
                    `Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`
                  );
                })(e),
                null
              );
            }
            buildParams() {
              const t = {
                  flip: this.flip,
                  spin: this.spin,
                  pulse: this.pulse,
                  border: this.border,
                  inverse: this.inverse,
                  size: this.size || null,
                  pull: this.pull || null,
                  rotate: this.rotate || null,
                  fixedWidth:
                    'boolean' == typeof this.fixedWidth
                      ? this.fixedWidth
                      : this.config.fixedWidth,
                  stackItemSize:
                    null != this.stackItem ? this.stackItem.stackItemSize : null
                },
                e =
                  'string' == typeof this.transform
                    ? (function (t) {
                        var e = {
                          size: 16,
                          x: 0,
                          y: 0,
                          flipX: !1,
                          flipY: !1,
                          rotate: 0
                        };
                        return t
                          ? t
                              .toLowerCase()
                              .split(' ')
                              .reduce(function (t, e) {
                                var n = e.toLowerCase().split('-'),
                                  r = n[0],
                                  s = n.slice(1).join('-');
                                if (r && 'h' === s) return (t.flipX = !0), t;
                                if (r && 'v' === s) return (t.flipY = !0), t;
                                if (((s = parseFloat(s)), isNaN(s))) return t;
                                switch (r) {
                                  case 'grow':
                                    t.size = t.size + s;
                                    break;
                                  case 'shrink':
                                    t.size = t.size - s;
                                    break;
                                  case 'left':
                                    t.x = t.x - s;
                                    break;
                                  case 'right':
                                    t.x = t.x + s;
                                    break;
                                  case 'up':
                                    t.y = t.y - s;
                                    break;
                                  case 'down':
                                    t.y = t.y + s;
                                    break;
                                  case 'rotate':
                                    t.rotate = t.rotate + s;
                                }
                                return t;
                              }, e)
                          : e;
                      })(this.transform)
                    : this.transform;
              return {
                title: this.title,
                transform: e,
                classes: [...xt(t), ...this.classes],
                mask:
                  null != this.mask ? this.findIconDefinition(this.mask) : null,
                styles: null != this.styles ? this.styles : {},
                symbol: this.symbol,
                attributes: { role: this.a11yRole }
              };
            }
            renderIcon(t, e) {
              const n = vt(t, e);
              this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(
                n.html.join('\n')
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Gb(_t.b),
                r.Gb(St),
                r.Gb(Et),
                r.Gb(Ct, 8),
                r.Gb(Ot, 8)
              );
            }),
            (t.ɵcmp = r.Ab({
              type: t,
              selectors: [['fa-icon']],
              hostAttrs: [1, 'ng-fa-icon'],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t &&
                  (r.Lb('innerHTML', e.renderedIconHTML, r.Wb),
                  r.xb('title', e.title));
              },
              inputs: {
                classes: 'classes',
                icon: 'icon',
                title: 'title',
                spin: 'spin',
                pulse: 'pulse',
                mask: 'mask',
                styles: 'styles',
                flip: 'flip',
                size: 'size',
                pull: 'pull',
                border: 'border',
                inverse: 'inverse',
                symbol: 'symbol',
                rotate: 'rotate',
                fixedWidth: 'fixedWidth',
                transform: 'transform',
                a11yRole: 'a11yRole'
              },
              features: [r.vb],
              decls: 0,
              vars: 0,
              template: function (t, e) {},
              encapsulation: 2
            })),
            t
          );
        })(),
        kt = (() => {
          class t {}
          return (
            (t.ɵmod = r.Eb({ type: t })),
            (t.ɵinj = r.Db({
              factory: function (e) {
                return new (e || t)();
              }
            })),
            t
          );
        })();
    },
    SeVD: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var r = n('ngJS'),
        s = n('NJ4a'),
        i = n('Lhse'),
        o = n('kJWO'),
        a = n('I55L'),
        c = n('c2HN'),
        l = n('XoHu');
      const u = (t) => {
        if (t && 'function' == typeof t[o.a])
          return (
            (u = t),
            (t) => {
              const e = u[o.a]();
              if ('function' != typeof e.subscribe)
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              return e.subscribe(t);
            }
          );
        if (Object(a.a)(t)) return Object(r.a)(t);
        if (Object(c.a)(t))
          return (
            (n = t),
            (t) => (
              n
                .then(
                  (e) => {
                    t.closed || (t.next(e), t.complete());
                  },
                  (e) => t.error(e)
                )
                .then(null, s.a),
              t
            )
          );
        if (t && 'function' == typeof t[i.a])
          return (
            (e = t),
            (t) => {
              const n = e[i.a]();
              for (;;) {
                let e;
                try {
                  e = n.next();
                } catch (r) {
                  return t.error(r), t;
                }
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                'function' == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = Object(l.a)(t) ? 'an invalid object' : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var e, n, u;
      };
    },
    SpAZ: function (t, e, n) {
      'use strict';
      function r(t) {
        return t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    VRyK: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('HDdC'),
        s = n('z+Ro'),
        i = n('bHdf'),
        o = n('yCtX');
      function a(...t) {
        let e = Number.POSITIVE_INFINITY,
          n = null,
          a = t[t.length - 1];
        return (
          Object(s.a)(a)
            ? ((n = t.pop()),
              t.length > 1 &&
                'number' == typeof t[t.length - 1] &&
                (e = t.pop()))
            : 'number' == typeof a && (e = t.pop()),
          null === n && 1 === t.length && t[0] instanceof r.a
            ? t[0]
            : Object(i.a)(e)(Object(o.a)(t, n))
        );
      }
    },
    XNiG: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return l;
      }),
        n.d(e, 'a', function () {
          return u;
        });
      var r = n('HDdC'),
        s = n('7o/Q'),
        i = n('quSY'),
        o = n('9ppp');
      class a extends i.a {
        constructor(t, e) {
          super(),
            (this.subject = t),
            (this.subscriber = e),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (
            ((this.subject = null),
            !e || 0 === e.length || t.isStopped || t.closed)
          )
            return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
      var c = n('2QA8');
      class l extends s.a {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let u = (() => {
        class t extends r.a {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [c.a]() {
            return new l(this);
          }
          lift(t) {
            const e = new h(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new o.a();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let s = 0; s < n; s++) r[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new o.a();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let s = 0; s < n; s++) r[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new o.a();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new o.a();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new o.a();
            return this.hasError
              ? (t.error(this.thrownError), i.a.EMPTY)
              : this.isStopped
              ? (t.complete(), i.a.EMPTY)
              : (this.observers.push(t), new a(this, t));
          }
          asObservable() {
            const t = new r.a();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new h(t, e)), t;
      })();
      class h extends u {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : i.a.EMPTY;
        }
      }
    },
    XoHu: function (t, e, n) {
      'use strict';
      function r(t) {
        return null !== t && 'object' == typeof t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    bHdf: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('5+tZ'),
        s = n('SpAZ');
      function i(t = Number.POSITIVE_INFINITY) {
        return Object(r.a)(s.a, t);
      }
    },
    c2HN: function (t, e, n) {
      'use strict';
      function r(t) {
        return (
          !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then
        );
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    dgmN: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'PagesModule', function () {
          return y;
        });
      var r = n('ofXK'),
        s = n('iInd'),
        i = n('9a8T'),
        o = n.n(i),
        a = n('fXoL'),
        c = n('Nv++');
      const l = function () {
        return ['fab', 'uikit'];
      };
      let u = (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = a.Ab({
            type: t,
            selectors: [['ngx-servicios']],
            decls: 47,
            vars: 2,
            consts: [
              ['id', 'services', 1, 'services', 'section-bg'],
              [1, 'container'],
              [1, 'row'],
              [1, 'col-lg-4'],
              ['data-aos', 'fade-right', 1, 'section-title'],
              [1, 'col-lg-8'],
              [1, 'col-md-6', 'd-flex', 'align-items-stretch'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '100', 1, 'icon-box'],
              [1, 'icon', 2, 'font-size', '28px'],
              ['icon', 'file-code'],
              ['href', ''],
              [
                1,
                'col-md-6',
                'd-flex',
                'align-items-stretch',
                'mt-4',
                'mt-lg-0'
              ],
              ['data-aos', 'zoom-in', 'data-aos-delay', '200', 1, 'icon-box'],
              ['icon', 'chart-line'],
              [1, 'col-md-6', 'd-flex', 'align-items-stretch', 'mt-4'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '300', 1, 'icon-box'],
              [3, 'icon'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '400', 1, 'icon-box'],
              ['icon', 'drafting-compass']
            ],
            template: function (t, e) {
              1 & t &&
                (a.Jb(0, 'section', 0),
                a.Jb(1, 'div', 1),
                a.Jb(2, 'div', 2),
                a.Jb(3, 'div', 3),
                a.Jb(4, 'div', 4),
                a.Jb(5, 'h2'),
                a.Zb(6, 'OFERTAS DE SERVICIO'),
                a.Ib(),
                a.Jb(7, 'p'),
                a.Zb(
                  8,
                  ' Magnam dolores commodi suscipit nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas. '
                ),
                a.Ib(),
                a.Ib(),
                a.Ib(),
                a.Jb(9, 'div', 5),
                a.Jb(10, 'div', 2),
                a.Jb(11, 'div', 6),
                a.Jb(12, 'div', 7),
                a.Jb(13, 'div', 8),
                a.Hb(14, 'fa-icon', 9),
                a.Ib(),
                a.Jb(15, 'h4'),
                a.Jb(16, 'a', 10),
                a.Zb(17, 'DESARROLLO FRONT-END'),
                a.Ib(),
                a.Ib(),
                a.Jb(18, 'p'),
                a.Zb(
                  19,
                  ' Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi '
                ),
                a.Ib(),
                a.Ib(),
                a.Ib(),
                a.Jb(20, 'div', 11),
                a.Jb(21, 'div', 12),
                a.Jb(22, 'div', 8),
                a.Hb(23, 'fa-icon', 13),
                a.Ib(),
                a.Jb(24, 'h4'),
                a.Jb(25, 'a', 10),
                a.Zb(26, 'SEO OPTIMIZE'),
                a.Ib(),
                a.Ib(),
                a.Jb(27, 'p'),
                a.Zb(
                  28,
                  ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore '
                ),
                a.Ib(),
                a.Ib(),
                a.Ib(),
                a.Jb(29, 'div', 14),
                a.Jb(30, 'div', 15),
                a.Jb(31, 'div', 8),
                a.Hb(32, 'fa-icon', 16),
                a.Ib(),
                a.Jb(33, 'h4'),
                a.Jb(34, 'a', 10),
                a.Zb(35, 'DISE\xd1O UI/UX'),
                a.Ib(),
                a.Ib(),
                a.Jb(36, 'p'),
                a.Zb(
                  37,
                  ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia '
                ),
                a.Ib(),
                a.Ib(),
                a.Ib(),
                a.Jb(38, 'div', 14),
                a.Jb(39, 'div', 17),
                a.Jb(40, 'div', 8),
                a.Hb(41, 'fa-icon', 18),
                a.Ib(),
                a.Jb(42, 'h4'),
                a.Jb(43, 'a', 10),
                a.Zb(44, 'DISE\xd1O WEB'),
                a.Ib(),
                a.Ib(),
                a.Jb(45, 'p'),
                a.Zb(
                  46,
                  ' At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis '
                ),
                a.Ib(),
                a.Ib(),
                a.Ib(),
                a.Ib(),
                a.Ib(),
                a.Ib(),
                a.Ib(),
                a.Ib()),
                2 & t && (a.wb(32), a.Tb('icon', a.Ub(1, l)));
            },
            directives: [c.a],
            styles: [
              'section[_ngcontent-%COMP%]{padding:60px 0;overflow:hidden}.section-bg[_ngcontent-%COMP%]{background-color:#f6f6f7}.section-title[_ngcontent-%COMP%]{padding-bottom:30px}.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;font-weight:700;text-transform:uppercase;margin-bottom:20px;padding-bottom:20px;position:relative}.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;width:50px;height:3px;background:#ffbb38;bottom:0;left:0}.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{text-align:center;padding:40px 20px;transition:all .3s ease-in-out;background:#fff}.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:50px;border:1px solid #021c3c;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;transition:.3s ease-in-out;color:#021c3c}.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:28px}.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700;margin-bottom:15px;font-size:24px}.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#36343a;transition:.3s ease-in-out}.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:24px;font-size:14px;margin-bottom:0}.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]:hover{border-color:#fff;box-shadow:0 0 25px 0 rgba(0,0,0,.1)}.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ffbb38}.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]{color:#ffbb38;background:#021c3c}'
            ],
            changeDetection: 0
          })),
          t
        );
      })();
      const h = function () {
          return ['fab', 'github'];
        },
        d = function () {
          return ['fab', 'youtube'];
        },
        f = [
          {
            path: '',
            component: (() => {
              class t {
                constructor() {
                  o.a.init();
                }
                ngOnInit() {}
              }
              return (
                (t.ɵfac = function (e) {
                  return new (e || t)();
                }),
                (t.ɵcmp = a.Ab({
                  type: t,
                  selectors: [['ngx-home']],
                  decls: 32,
                  vars: 4,
                  consts: [
                    [
                      'id',
                      'tmWelcome',
                      'data-parallax',
                      'scroll',
                      'data-image-src',
                      './assets/mini-profile-bg-01.jpg',
                      1,
                      'parallax-window'
                    ],
                    [1, 'container-fluid', 'tm-brand-container-outer'],
                    [1, 'row'],
                    [1, 'col-12'],
                    [
                      1,
                      'ml-auto',
                      'mr-0',
                      'tm-bg-black-transparent',
                      'text-white',
                      'tm-brand-container-inner'
                    ],
                    [1, 'tm-brand-container', 'text-center'],
                    [1, 'tm-brand-description', 'mb-0'],
                    [
                      'data-aos',
                      'fade-in',
                      'data-aos-delay',
                      '200',
                      1,
                      'tm-brand-name'
                    ],
                    [1, 'social_icons', 'my-3'],
                    ['href', '#'],
                    [3, 'icon'],
                    [1, 'tm-bg-white-transparent', 'tm-welcome-container'],
                    [1, 'container-fluid'],
                    [1, 'row', 'h-100'],
                    [1, 'col-md-7', 'tm-welcome-left-col'],
                    [
                      'data-aos',
                      'fade-left',
                      'data-aos-delay',
                      '200',
                      1,
                      'section-title'
                    ],
                    [1, 'pb-0'],
                    [1, 'col-md-5'],
                    [1, 'tm-welcome-right'],
                    [
                      1,
                      'fas',
                      'fa-4x',
                      'fa-address-card',
                      'p-3',
                      'tm-welcome-icon'
                    ],
                    [
                      'data-aos',
                      'fade-right',
                      'data-aos-delay',
                      '100',
                      1,
                      'mb-0'
                    ]
                  ],
                  template: function (t, e) {
                    1 & t &&
                      (a.Jb(0, 'section', 0),
                      a.Jb(1, 'div', 1),
                      a.Jb(2, 'div', 2),
                      a.Jb(3, 'div', 3),
                      a.Jb(4, 'div', 4),
                      a.Jb(5, 'div', 5),
                      a.Jb(6, 'p', 6),
                      a.Zb(7, 'Hola'),
                      a.Ib(),
                      a.Jb(8, 'h1', 7),
                      a.Zb(9, ' Soy F\xe9lix Franco '),
                      a.Ib(),
                      a.Jb(10, 'p', 6),
                      a.Zb(11, 'Front-End Development'),
                      a.Ib(),
                      a.Jb(12, 'div', 8),
                      a.Jb(13, 'a', 9),
                      a.Hb(14, 'fa-icon', 10),
                      a.Ib(),
                      a.Jb(15, 'a', 9),
                      a.Hb(16, 'fa-icon', 10),
                      a.Ib(),
                      a.Ib(),
                      a.Ib(),
                      a.Ib(),
                      a.Ib(),
                      a.Ib(),
                      a.Ib(),
                      a.Jb(17, 'div', 11),
                      a.Jb(18, 'div', 12),
                      a.Jb(19, 'div', 13),
                      a.Jb(20, 'div', 14),
                      a.Jb(21, 'div', 15),
                      a.Jb(22, 'h2'),
                      a.Zb(23, 'SOBRE MI'),
                      a.Ib(),
                      a.Jb(24, 'p', 16),
                      a.Zb(
                        25,
                        ' Soy Ingeniero de Sistemas me encanta la programaci\xf3n poder descubrir y aprender nuevas cosas, tengo conocimiento en el framework Angular, HTML, CSS (Sass), JavaScript, TypeScript, UX & UI y conocimientos intermedios por el lado del Back-End: Laravel, PHP, NodeJs y Bases de Datos MySQL, MariaDB, MongDB, Microsoft SQL Serve. Actualmente estoy aprendiendo nuevas tecnolog\xedas com NgRx y React y un poco de VueJS. '
                      ),
                      a.Ib(),
                      a.Ib(),
                      a.Ib(),
                      a.Jb(26, 'div', 17),
                      a.Jb(27, 'div', 18),
                      a.Hb(28, 'i', 19),
                      a.Jb(29, 'p', 20),
                      a.Zb(
                        30,
                        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis distinctio magnam natus. Blanditiis velit sapiente ad, nemo facilis similique nesciunt nulla tempore consectetur ab maxime sunt reiciendis minus beatae et. '
                      ),
                      a.Ib(),
                      a.Ib(),
                      a.Ib(),
                      a.Ib(),
                      a.Ib(),
                      a.Ib(),
                      a.Ib(),
                      a.Hb(31, 'ngx-servicios')),
                      2 & t &&
                        (a.wb(14),
                        a.Tb('icon', a.Ub(2, h)),
                        a.wb(2),
                        a.Tb('icon', a.Ub(3, d)));
                  },
                  directives: [c.a, u],
                  styles: [
                    '.social_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.8);font-size:25px;display:inline-block;margin-right:16px;cursor:pointer;transition:all .2s linear;-webkit-transition:all .2s linear;-moz-transition:all .2s linear;-ms-transition:all .2s linear;-o-transition:all .2s linear}.social_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ffbb38;text-decoration:none}.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;font-weight:700;text-transform:uppercase;margin-bottom:20px;padding-bottom:20px;position:relative}.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;width:50px;height:3px;background:#ffbb38;bottom:0;left:0}.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}'
                  ],
                  changeDetection: 0
                })),
                t
              );
            })()
          }
        ];
      let p = (() => {
        class t {}
        return (
          (t.ɵmod = a.Eb({ type: t })),
          (t.ɵinj = a.Db({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[s.b.forChild(f)], s.b]
          })),
          t
        );
      })();
      var m = n('wHSu'),
        g = n('8tEE');
      let y = (() => {
        class t {
          constructor(t) {
            t.addIcons(m.c, m.a, m.h, m.g, m.i, m.f, g.a, g.c, g.d, g.b, g.f);
          }
        }
        return (
          (t.ɵmod = a.Eb({ type: t })),
          (t.ɵinj = a.Db({
            factory: function (e) {
              return new (e || t)(a.Mb(c.b));
            },
            imports: [[r.b, p, c.c], c.c]
          })),
          t
        );
      })();
    },
    eIep: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('lJxs'),
        s = n('Cfvw'),
        i = n('zx2A');
      function o(t, e) {
        return 'function' == typeof e
          ? (n) =>
              n.pipe(
                o((n, i) =>
                  Object(s.a)(t(n, i)).pipe(
                    Object(r.a)((t, r) => e(n, t, i, r))
                  )
                )
              )
          : (e) => e.lift(new a(t));
      }
      class a {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new c(t, this.project));
        }
      }
      class c extends i.b {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e);
        }
        _innerSub(t) {
          const e = this.innerSubscription;
          e && e.unsubscribe();
          const n = new i.a(this),
            r = this.destination;
          r.add(n),
            (this.innerSubscription = Object(i.c)(t, n)),
            this.innerSubscription !== n && r.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
      }
    },
    fXoL: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return tn;
      }),
        n.d(e, 'b', function () {
          return $a;
        }),
        n.d(e, 'c', function () {
          return La;
        }),
        n.d(e, 'd', function () {
          return Ma;
        }),
        n.d(e, 'e', function () {
          return Da;
        }),
        n.d(e, 'f', function () {
          return Rc;
        }),
        n.d(e, 'g', function () {
          return xc;
        }),
        n.d(e, 'h', function () {
          return Vo;
        }),
        n.d(e, 'i', function () {
          return Xa;
        }),
        n.d(e, 'j', function () {
          return fo;
        }),
        n.d(e, 'k', function () {
          return Ba;
        }),
        n.d(e, 'l', function () {
          return yo;
        }),
        n.d(e, 'm', function () {
          return br;
        }),
        n.d(e, 'n', function () {
          return ba;
        }),
        n.d(e, 'o', function () {
          return Xs;
        }),
        n.d(e, 'p', function () {
          return wn;
        }),
        n.d(e, 'q', function () {
          return I;
        }),
        n.d(e, 'r', function () {
          return Xe;
        }),
        n.d(e, 's', function () {
          return pi;
        }),
        n.d(e, 't', function () {
          return Do;
        }),
        n.d(e, 'u', function () {
          return Fo;
        }),
        n.d(e, 'v', function () {
          return qa;
        }),
        n.d(e, 'w', function () {
          return ta;
        }),
        n.d(e, 'x', function () {
          return Oc;
        }),
        n.d(e, 'y', function () {
          return Xo;
        }),
        n.d(e, 'z', function () {
          return vc;
        }),
        n.d(e, 'A', function () {
          return nc;
        }),
        n.d(e, 'B', function () {
          return Sn;
        }),
        n.d(e, 'C', function () {
          return Ua;
        }),
        n.d(e, 'D', function () {
          return Ha;
        }),
        n.d(e, 'E', function () {
          return _o;
        }),
        n.d(e, 'F', function () {
          return vo;
        }),
        n.d(e, 'G', function () {
          return Sr;
        }),
        n.d(e, 'H', function () {
          return So;
        }),
        n.d(e, 'I', function () {
          return hr;
        }),
        n.d(e, 'J', function () {
          return En;
        }),
        n.d(e, 'K', function () {
          return jc;
        }),
        n.d(e, 'L', function () {
          return Zo;
        }),
        n.d(e, 'M', function () {
          return lc;
        }),
        n.d(e, 'N', function () {
          return en;
        }),
        n.d(e, 'O', function () {
          return Eo;
        }),
        n.d(e, 'P', function () {
          return na;
        }),
        n.d(e, 'Q', function () {
          return L;
        }),
        n.d(e, 'R', function () {
          return _c;
        }),
        n.d(e, 'S', function () {
          return yc;
        }),
        n.d(e, 'T', function () {
          return Pc;
        }),
        n.d(e, 'U', function () {
          return dc;
        }),
        n.d(e, 'V', function () {
          return Va;
        }),
        n.d(e, 'W', function () {
          return ei;
        }),
        n.d(e, 'X', function () {
          return oo;
        }),
        n.d(e, 'Y', function () {
          return lr;
        }),
        n.d(e, 'Z', function () {
          return Wn;
        }),
        n.d(e, 'ab', function () {
          return Mn;
        }),
        n.d(e, 'bb', function () {
          return Ln;
        }),
        n.d(e, 'cb', function () {
          return Un;
        }),
        n.d(e, 'db', function () {
          return zn;
        }),
        n.d(e, 'eb', function () {
          return Fn;
        }),
        n.d(e, 'fb', function () {
          return Hn;
        }),
        n.d(e, 'gb', function () {
          return no;
        }),
        n.d(e, 'hb', function () {
          return Ic;
        }),
        n.d(e, 'ib', function () {
          return ro;
        }),
        n.d(e, 'jb', function () {
          return so;
        }),
        n.d(e, 'kb', function () {
          return Dn;
        }),
        n.d(e, 'lb', function () {
          return $;
        }),
        n.d(e, 'mb', function () {
          return Ei;
        }),
        n.d(e, 'nb', function () {
          return Mi;
        }),
        n.d(e, 'ob', function () {
          return Ni;
        }),
        n.d(e, 'pb', function () {
          return Ri;
        }),
        n.d(e, 'qb', function () {
          return eo;
        }),
        n.d(e, 'rb', function () {
          return Ot;
        }),
        n.d(e, 'sb', function () {
          return d;
        }),
        n.d(e, 'tb', function () {
          return Rn;
        }),
        n.d(e, 'ub', function () {
          return gi;
        }),
        n.d(e, 'vb', function () {
          return _t;
        }),
        n.d(e, 'wb', function () {
          return ls;
        }),
        n.d(e, 'xb', function () {
          return Oi;
        }),
        n.d(e, 'yb', function () {
          return Bi;
        }),
        n.d(e, 'zb', function () {
          return Ia;
        }),
        n.d(e, 'Ab', function () {
          return X;
        }),
        n.d(e, 'Bb', function () {
          return ot;
        }),
        n.d(e, 'Cb', function () {
          return S;
        }),
        n.d(e, 'Db', function () {
          return E;
        }),
        n.d(e, 'Eb', function () {
          return rt;
        }),
        n.d(e, 'Fb', function () {
          return at;
        }),
        n.d(e, 'Gb', function () {
          return Ti;
        }),
        n.d(e, 'Hb', function () {
          return Pi;
        }),
        n.d(e, 'Ib', function () {
          return Ii;
        }),
        n.d(e, 'Jb', function () {
          return Ai;
        }),
        n.d(e, 'Kb', function () {
          return Ze;
        }),
        n.d(e, 'Lb', function () {
          return Ji;
        }),
        n.d(e, 'Mb', function () {
          return bn;
        }),
        n.d(e, 'Nb', function () {
          return Ke;
        }),
        n.d(e, 'Ob', function () {
          return Ra;
        }),
        n.d(e, 'Pb', function () {
          return Di;
        }),
        n.d(e, 'Qb', function () {
          return Pa;
        }),
        n.d(e, 'Rb', function () {
          return Ui;
        }),
        n.d(e, 'Sb', function () {
          return Hi;
        }),
        n.d(e, 'Tb', function () {
          return ki;
        }),
        n.d(e, 'Ub', function () {
          return ya;
        }),
        n.d(e, 'Vb', function () {
          return Aa;
        }),
        n.d(e, 'Wb', function () {
          return dr;
        }),
        n.d(e, 'Xb', function () {
          return fr;
        }),
        n.d(e, 'Yb', function () {
          return st;
        }),
        n.d(e, 'Zb', function () {
          return Ki;
        });
      var r = n('XNiG'),
        s = n('quSY'),
        i = n('HDdC'),
        o = n('VRyK'),
        a = n('oB13'),
        c = n('x+ZX');
      function l() {
        return new r.a();
      }
      function u(t) {
        for (let e in t) if (t[e] === u) return e;
        throw Error('Could not find renamed property on target object.');
      }
      function h(t, e) {
        for (const n in e)
          e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
      }
      function d(t) {
        if ('string' == typeof t) return t;
        if (Array.isArray(t)) return '[' + t.map(d).join(', ') + ']';
        if (null == t) return '' + t;
        if (t.overriddenName) return `${t.overriddenName}`;
        if (t.name) return `${t.name}`;
        const e = t.toString();
        if (null == e) return '' + e;
        const n = e.indexOf('\n');
        return -1 === n ? e : e.substring(0, n);
      }
      function f(t, e) {
        return null == t || '' === t
          ? null === e
            ? ''
            : e
          : null == e || '' === e
          ? t
          : t + ' ' + e;
      }
      const p = u({ __forward_ref__: u });
      function m(t) {
        return (
          (t.__forward_ref__ = m),
          (t.toString = function () {
            return d(this());
          }),
          t
        );
      }
      function g(t) {
        return y(t) ? t() : t;
      }
      function y(t) {
        return (
          'function' == typeof t &&
          t.hasOwnProperty(p) &&
          t.__forward_ref__ === m
        );
      }
      class b extends Error {
        constructor(t, e) {
          super(
            (function (t, e) {
              return `${t ? `NG0${t}: ` : ''}${e}`;
            })(t, e)
          ),
            (this.code = t);
        }
      }
      function v(t) {
        return 'string' == typeof t ? t : null == t ? '' : String(t);
      }
      function _(t) {
        return 'function' == typeof t
          ? t.name || t.toString()
          : 'object' == typeof t && null != t && 'function' == typeof t.type
          ? t.type.name || t.type.toString()
          : v(t);
      }
      function w(t, e) {
        const n = e ? ` in ${e}` : '';
        throw new b('201', `No provider for ${_(t)} found${n}`);
      }
      function S(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0
        };
      }
      function E(t) {
        return {
          factory: t.factory,
          providers: t.providers || [],
          imports: t.imports || []
        };
      }
      function x(t) {
        return C(t, T) || C(t, j);
      }
      function C(t, e) {
        return t.hasOwnProperty(e) ? t[e] : null;
      }
      function O(t) {
        return t && (t.hasOwnProperty(k) || t.hasOwnProperty(A)) ? t[k] : null;
      }
      const T = u({ '\u0275prov': u }),
        k = u({ '\u0275inj': u }),
        j = u({ ngInjectableDef: u }),
        A = u({ ngInjectorDef: u });
      var I = (function (t) {
        return (
          (t[(t.Default = 0)] = 'Default'),
          (t[(t.Host = 1)] = 'Host'),
          (t[(t.Self = 2)] = 'Self'),
          (t[(t.SkipSelf = 4)] = 'SkipSelf'),
          (t[(t.Optional = 8)] = 'Optional'),
          t
        );
      })({});
      let P;
      function N(t) {
        const e = P;
        return (P = t), e;
      }
      function R(t, e, n) {
        const r = x(t);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & I.Optional
          ? null
          : void 0 !== e
          ? e
          : void w(d(t), 'Injector');
      }
      function M(t) {
        return { toString: t }.toString();
      }
      var D = (function (t) {
          return (
            (t[(t.OnPush = 0)] = 'OnPush'), (t[(t.Default = 1)] = 'Default'), t
          );
        })({}),
        L = (function (t) {
          return (
            (t[(t.Emulated = 0)] = 'Emulated'),
            (t[(t.None = 2)] = 'None'),
            (t[(t.ShadowDom = 3)] = 'ShadowDom'),
            t
          );
        })({});
      const F = 'undefined' != typeof globalThis && globalThis,
        z = 'undefined' != typeof window && window,
        H =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        U = 'undefined' != typeof global && global,
        $ = F || U || z || H,
        V = {},
        q = [],
        B = u({ '\u0275cmp': u }),
        W = u({ '\u0275dir': u }),
        Q = u({ '\u0275pipe': u }),
        G = u({ '\u0275mod': u }),
        Z = u({ '\u0275loc': u }),
        K = u({ '\u0275fac': u }),
        J = u({ __NG_ELEMENT_ID__: u });
      let Y = 0;
      function X(t) {
        return M(() => {
          const e = {},
            n = {
              type: t.type,
              providersResolver: null,
              decls: t.decls,
              vars: t.vars,
              factory: null,
              template: t.template || null,
              consts: t.consts || null,
              ngContentSelectors: t.ngContentSelectors,
              hostBindings: t.hostBindings || null,
              hostVars: t.hostVars || 0,
              hostAttrs: t.hostAttrs || null,
              contentQueries: t.contentQueries || null,
              declaredInputs: e,
              inputs: null,
              outputs: null,
              exportAs: t.exportAs || null,
              onPush: t.changeDetection === D.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: t.selectors || q,
              viewQuery: t.viewQuery || null,
              features: t.features || null,
              data: t.data || {},
              encapsulation: t.encapsulation || L.Emulated,
              id: 'c',
              styles: t.styles || q,
              _: null,
              setInput: null,
              schemas: t.schemas || null,
              tView: null
            },
            r = t.directives,
            s = t.features,
            i = t.pipes;
          return (
            (n.id += Y++),
            (n.inputs = it(t.inputs, e)),
            (n.outputs = it(t.outputs)),
            s && s.forEach((t) => t(n)),
            (n.directiveDefs = r
              ? () => ('function' == typeof r ? r() : r).map(tt)
              : null),
            (n.pipeDefs = i
              ? () => ('function' == typeof i ? i() : i).map(et)
              : null),
            n
          );
        });
      }
      function tt(t) {
        return (
          ct(t) ||
          (function (t) {
            return t[W] || null;
          })(t)
        );
      }
      function et(t) {
        return (function (t) {
          return t[Q] || null;
        })(t);
      }
      const nt = {};
      function rt(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || q,
          declarations: t.declarations || q,
          imports: t.imports || q,
          exports: t.exports || q,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null
        };
        return (
          null != t.id &&
            M(() => {
              nt[t.id] = t.type;
            }),
          e
        );
      }
      function st(t, e) {
        return M(() => {
          const n = lt(t, !0);
          (n.declarations = e.declarations || q),
            (n.imports = e.imports || q),
            (n.exports = e.exports || q);
        });
      }
      function it(t, e) {
        if (null == t) return V;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let s = t[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              e && (e[s] = i);
          }
        return n;
      }
      const ot = X;
      function at(t) {
        return {
          type: t.type,
          name: t.name,
          factory: null,
          pure: !1 !== t.pure,
          onDestroy: t.type.prototype.ngOnDestroy || null
        };
      }
      function ct(t) {
        return t[B] || null;
      }
      function lt(t, e) {
        const n = t[G] || null;
        if (!n && !0 === e)
          throw new Error(`Type ${d(t)} does not have '\u0275mod' property.`);
        return n;
      }
      const ut = 20,
        ht = 10;
      function dt(t) {
        return Array.isArray(t) && 'object' == typeof t[1];
      }
      function ft(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function pt(t) {
        return 0 != (8 & t.flags);
      }
      function mt(t) {
        return 2 == (2 & t.flags);
      }
      function gt(t) {
        return 1 == (1 & t.flags);
      }
      function yt(t) {
        return null !== t.template;
      }
      function bt(t, e) {
        return t.hasOwnProperty(K) ? t[K] : null;
      }
      class vt {
        constructor(t, e, n) {
          (this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function _t() {
        return wt;
      }
      function wt(t) {
        return t.type.prototype.ngOnChanges && (t.setInput = Et), St;
      }
      function St() {
        const t = xt(this),
          e = null == t ? void 0 : t.current;
        if (e) {
          const n = t.previous;
          if (n === V) t.previous = e;
          else for (let t in e) n[t] = e[t];
          (t.current = null), this.ngOnChanges(e);
        }
      }
      function Et(t, e, n, r) {
        const s =
            xt(t) ||
            (function (t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: V, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          c = o[a];
        (i[a] = new vt(c && c.currentValue, e, o === V)), (t[r] = e);
      }
      function xt(t) {
        return t.__ngSimpleChanges__ || null;
      }
      let Ct;
      function Ot(t) {
        Ct = t;
      }
      function Tt() {
        return void 0 !== Ct
          ? Ct
          : 'undefined' != typeof document
          ? document
          : void 0;
      }
      function kt(t) {
        return !!t.listen;
      }
      _t.ngInherit = !0;
      const jt = { createRenderer: (t, e) => Tt() };
      function At(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function It(t, e) {
        return At(e[t.index]);
      }
      function Pt(t, e) {
        return t.data[e];
      }
      function Nt(t, e) {
        const n = e[t];
        return dt(n) ? n : n[0];
      }
      function Rt(t) {
        const e = (function (t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function Mt(t) {
        return 4 == (4 & t[2]);
      }
      function Dt(t) {
        return 128 == (128 & t[2]);
      }
      function Lt(t, e) {
        return null == e ? null : t[e];
      }
      function Ft(t) {
        t[18] = 0;
      }
      function zt(t, e) {
        t[5] += e;
        let n = t,
          r = t[3];
        for (
          ;
          null !== r && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5]));

        )
          (r[5] += e), (n = r), (r = r[3]);
      }
      const Ht = {
        lFrame: oe(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1
      };
      function Ut() {
        return Ht.bindingsEnabled;
      }
      function $t() {
        return Ht.lFrame.lView;
      }
      function Vt() {
        return Ht.lFrame.tView;
      }
      function qt() {
        let t = Bt();
        for (; null !== t && 64 === t.type; ) t = t.parent;
        return t;
      }
      function Bt() {
        return Ht.lFrame.currentTNode;
      }
      function Wt(t, e) {
        const n = Ht.lFrame;
        (n.currentTNode = t), (n.isParent = e);
      }
      function Qt() {
        return Ht.lFrame.isParent;
      }
      function Gt() {
        Ht.lFrame.isParent = !1;
      }
      function Zt() {
        return Ht.isInCheckNoChangesMode;
      }
      function Kt(t) {
        Ht.isInCheckNoChangesMode = t;
      }
      function Jt() {
        return Ht.lFrame.bindingIndex++;
      }
      function Yt(t, e) {
        const n = Ht.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t), Xt(e);
      }
      function Xt(t) {
        Ht.lFrame.currentDirectiveIndex = t;
      }
      function te() {
        return Ht.lFrame.currentQueryIndex;
      }
      function ee(t) {
        Ht.lFrame.currentQueryIndex = t;
      }
      function ne(t) {
        const e = t[1];
        return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null;
      }
      function re(t, e, n) {
        if (n & I.SkipSelf) {
          let r = e,
            s = t;
          for (
            ;
            (r = r.parent),
              !(
                null !== r ||
                n & I.Host ||
                ((r = ne(s)), null === r) ||
                ((s = s[15]), 10 & r.type)
              );

          );
          if (null === r) return !1;
          (e = r), (t = s);
        }
        const r = (Ht.lFrame = ie());
        return (r.currentTNode = e), (r.lView = t), !0;
      }
      function se(t) {
        const e = ie(),
          n = t[1];
        (Ht.lFrame = e),
          (e.currentTNode = n.firstChild),
          (e.lView = t),
          (e.tView = n),
          (e.contextLView = t),
          (e.bindingIndex = n.bindingStartIndex),
          (e.inI18n = !1);
      }
      function ie() {
        const t = Ht.lFrame,
          e = null === t ? null : t.child;
        return null === e ? oe(t) : e;
      }
      function oe(t) {
        const e = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null,
          inI18n: !1
        };
        return null !== t && (t.child = e), e;
      }
      function ae() {
        const t = Ht.lFrame;
        return (
          (Ht.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t
        );
      }
      const ce = ae;
      function le() {
        const t = ae();
        (t.isParent = !0),
          (t.tView = null),
          (t.selectedIndex = -1),
          (t.contextLView = null),
          (t.elementDepthCount = 0),
          (t.currentDirectiveIndex = -1),
          (t.currentNamespace = null),
          (t.bindingRootIndex = -1),
          (t.bindingIndex = -1),
          (t.currentQueryIndex = 0);
      }
      function ue() {
        return Ht.lFrame.selectedIndex;
      }
      function he(t) {
        Ht.lFrame.selectedIndex = t;
      }
      function de() {
        const t = Ht.lFrame;
        return Pt(t.tView, t.selectedIndex);
      }
      function fe(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n].type.prototype,
            {
              ngAfterContentInit: r,
              ngAfterContentChecked: s,
              ngAfterViewInit: i,
              ngAfterViewChecked: o,
              ngOnDestroy: a
            } = e;
          r && (t.contentHooks || (t.contentHooks = [])).push(-n, r),
            s &&
              ((t.contentHooks || (t.contentHooks = [])).push(n, s),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, s)),
            i && (t.viewHooks || (t.viewHooks = [])).push(-n, i),
            o &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, o),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)),
            null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a);
        }
      }
      function pe(t, e, n) {
        ye(t, e, 3, n);
      }
      function me(t, e, n, r) {
        (3 & t[2]) === n && ye(t, e, n, r);
      }
      function ge(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n));
      }
      function ye(t, e, n, r) {
        const s = null != r ? r : -1,
          i = e.length - 1;
        let o = 0;
        for (let a = void 0 !== r ? 65535 & t[18] : 0; a < i; a++)
          if ('number' == typeof e[a + 1]) {
            if (((o = e[a]), null != r && o >= r)) break;
          } else
            e[a] < 0 && (t[18] += 65536),
              (o < s || -1 == s) &&
                (be(t, n, e, a), (t[18] = (4294901760 & t[18]) + a + 2)),
              a++;
      }
      function be(t, e, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = t[s ? -n[r] : n[r]];
        s
          ? t[2] >> 11 < t[18] >> 16 &&
            (3 & t[2]) === e &&
            ((t[2] += 2048), i.call(o))
          : i.call(o);
      }
      const ve = -1;
      class _e {
        constructor(t, e, n) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = e),
            (this.injectImpl = n);
        }
      }
      function we(t, e, n) {
        const r = kt(t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ('number' == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              c = n[s++];
            r ? t.setAttribute(e, a, c, o) : e.setAttributeNS(o, a, c);
          } else {
            const o = i,
              a = n[++s];
            Ee(o)
              ? r && t.setProperty(e, o, a)
              : r
              ? t.setAttribute(e, o, a)
              : e.setAttribute(o, a),
              s++;
          }
        }
        return s;
      }
      function Se(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function Ee(t) {
        return 64 === t.charCodeAt(0);
      }
      function xe(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            'number' == typeof s
              ? (n = s)
              : 0 === n ||
                Ce(t, n, s, null, -1 === n || 2 === n ? e[++r] : null);
          }
        }
        return t;
      }
      function Ce(t, e, n, r, s) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ('number' == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ('number' == typeof e) break;
          if (e === n) {
            if (null === r) return void (null !== s && (t[i + 1] = s));
            if (r === t[i + 1]) return void (t[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== r && t.splice(i++, 0, r),
          null !== s && t.splice(i++, 0, s);
      }
      function Oe(t) {
        return t !== ve;
      }
      function Te(t) {
        return 32767 & t;
      }
      function ke(t, e) {
        let n = t >> 16,
          r = e;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let je = !0;
      function Ae(t) {
        const e = je;
        return (je = t), e;
      }
      let Ie = 0;
      function Pe(t, e) {
        const n = Re(t, e);
        if (-1 !== n) return n;
        const r = e[1];
        r.firstCreatePass &&
          ((t.injectorIndex = e.length),
          Ne(r.data, t),
          Ne(e, null),
          Ne(r.blueprint, null));
        const s = Me(t, e),
          i = t.injectorIndex;
        if (Oe(s)) {
          const t = Te(s),
            n = ke(s, e),
            r = n[1].data;
          for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s];
        }
        return (e[i + 8] = s), i;
      }
      function Ne(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function Re(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null === e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function Me(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex;
        let n = 0,
          r = null,
          s = e;
        for (; null !== s; ) {
          const t = s[1],
            e = t.type;
          if (((r = 2 === e ? t.declTNode : 1 === e ? s[6] : null), null === r))
            return ve;
          if ((n++, (s = s[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return ve;
      }
      function De(t, e, n) {
        !(function (t, e, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(J) && (r = n[J]),
            null == r && (r = n[J] = Ie++);
          const s = 255 & r;
          e.data[t + (s >> 5)] |= 1 << s;
        })(t, e, n);
      }
      function Le(t, e, n) {
        if (n & I.Optional) return t;
        w(e, 'NodeInjector');
      }
      function Fe(t, e, n, r) {
        if (
          (n & I.Optional && void 0 === r && (r = null),
          0 == (n & (I.Self | I.Host)))
        ) {
          const s = t[9],
            i = N(void 0);
          try {
            return s ? s.get(e, r, n & I.Optional) : R(e, r, n & I.Optional);
          } finally {
            N(i);
          }
        }
        return Le(r, e, n);
      }
      function ze(t, e, n, r = I.Default, s) {
        if (null !== t) {
          const i = (function (t) {
            if ('string' == typeof t) return t.charCodeAt(0) || 0;
            const e = t.hasOwnProperty(J) ? t[J] : void 0;
            return 'number' == typeof e ? (e >= 0 ? 255 & e : Ue) : e;
          })(n);
          if ('function' == typeof i) {
            if (!re(e, t, r)) return r & I.Host ? Le(s, n, r) : Fe(e, n, r, s);
            try {
              const t = i();
              if (null != t || r & I.Optional) return t;
              w(n);
            } finally {
              ce();
            }
          } else if ('number' == typeof i) {
            let s = null,
              o = Re(t, e),
              a = ve,
              c = r & I.Host ? e[16][6] : null;
            for (
              (-1 === o || r & I.SkipSelf) &&
              ((a = -1 === o ? Me(t, e) : e[o + 8]),
              a !== ve && We(r, !1)
                ? ((s = e[1]), (o = Te(a)), (e = ke(a, e)))
                : (o = -1));
              -1 !== o;

            ) {
              const t = e[1];
              if (Be(i, o, t.data)) {
                const t = $e(o, e, n, s, r, c);
                if (t !== He) return t;
              }
              (a = e[o + 8]),
                a !== ve && We(r, e[1].data[o + 8] === c) && Be(i, o, e)
                  ? ((s = t), (o = Te(a)), (e = ke(a, e)))
                  : (o = -1);
            }
          }
        }
        return Fe(e, n, r, s);
      }
      const He = {};
      function Ue() {
        return new Qe(qt(), $t());
      }
      function $e(t, e, n, r, s, i) {
        const o = e[1],
          a = o.data[t + 8],
          c = Ve(
            a,
            o,
            n,
            null == r ? mt(a) && je : r != o && 0 != (3 & a.type),
            s & I.Host && i === a
          );
        return null !== c ? qe(e, o, c, a) : He;
      }
      function Ve(t, e, n, r, s) {
        const i = t.providerIndexes,
          o = e.data,
          a = 1048575 & i,
          c = t.directiveStart,
          l = i >> 20,
          u = s ? a + l : t.directiveEnd;
        for (let h = r ? a : a + l; h < u; h++) {
          const t = o[h];
          if ((h < c && n === t) || (h >= c && t.type === n)) return h;
        }
        if (s) {
          const t = o[c];
          if (t && yt(t) && t.type === n) return c;
        }
        return null;
      }
      function qe(t, e, n, r) {
        let s = t[n];
        const i = e.data;
        if (s instanceof _e) {
          const o = s;
          o.resolving &&
            (function (t, e) {
              throw new b('200', `Circular dependency in DI detected for ${t}`);
            })(_(i[n]));
          const a = Ae(o.canSeeViewProviders);
          o.resolving = !0;
          const c = o.injectImpl ? N(o.injectImpl) : null;
          re(t, r, I.Default);
          try {
            (s = t[n] = o.factory(void 0, i, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function (t, e, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: s,
                    ngDoCheck: i
                  } = e.type.prototype;
                  if (r) {
                    const r = wt(e);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, r);
                  }
                  s &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, i));
                })(n, i[n], e);
          } finally {
            null !== c && N(c), Ae(a), (o.resolving = !1), ce();
          }
        }
        return s;
      }
      function Be(t, e, n) {
        return !!(n[e + (t >> 5)] & (1 << t));
      }
      function We(t, e) {
        return !(t & I.Self || (t & I.Host && e));
      }
      class Qe {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return ze(this._tNode, this._lView, t, void 0, e);
        }
      }
      function Ge(t) {
        const e = t;
        if (y(t))
          return () => {
            const t = Ge(g(e));
            return t ? t() : null;
          };
        let n = bt(e);
        if (null === n) {
          const t = O(e);
          n = t && t.factory;
        }
        return n || null;
      }
      function Ze(t) {
        return M(() => {
          const e = t.prototype.constructor,
            n = e[K] || Ge(e),
            r = Object.prototype;
          let s = Object.getPrototypeOf(t.prototype).constructor;
          for (; s && s !== r; ) {
            const t = s[K] || Ge(s);
            if (t && t !== n) return t;
            s = Object.getPrototypeOf(s);
          }
          return (t) => new t();
        });
      }
      function Ke(t) {
        return (function (t, e) {
          if ('class' === e) return t.classes;
          if ('style' === e) return t.styles;
          const n = t.attrs;
          if (n) {
            const t = n.length;
            let r = 0;
            for (; r < t; ) {
              const s = n[r];
              if (Se(s)) break;
              if (0 === s) r += 2;
              else if ('number' == typeof s)
                for (r++; r < t && 'string' == typeof n[r]; ) r++;
              else {
                if (s === e) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(qt(), t);
      }
      const Je = '__parameters__';
      function Ye(t, e, n) {
        return M(() => {
          const r = (function (t) {
            return function (...e) {
              if (t) {
                const n = t(...e);
                for (const t in n) this[t] = n[t];
              }
            };
          })(e);
          function s(...t) {
            if (this instanceof s) return r.apply(this, t), this;
            const e = new s(...t);
            return (n.annotation = e), n;
            function n(t, n, r) {
              const s = t.hasOwnProperty(Je)
                ? t[Je]
                : Object.defineProperty(t, Je, { value: [] })[Je];
              for (; s.length <= r; ) s.push(null);
              return (s[r] = s[r] || []).push(e), t;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = t),
            (s.annotationCls = s),
            s
          );
        });
      }
      class Xe {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = S({
                  token: this,
                  providedIn: e.providedIn || 'root',
                  factory: e.factory
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const tn = new Xe('AnalyzeForEntryComponents'),
        en = Function;
      function nn(t, e) {
        void 0 === e && (e = t);
        for (let n = 0; n < t.length; n++) {
          let r = t[n];
          Array.isArray(r)
            ? (e === t && (e = t.slice(0, n)), nn(r, e))
            : e !== t && e.push(r);
        }
        return e;
      }
      function rn(t, e) {
        t.forEach((t) => (Array.isArray(t) ? rn(t, e) : e(t)));
      }
      function sn(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function on(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      function an(t, e) {
        const n = [];
        for (let r = 0; r < t; r++) n.push(e);
        return n;
      }
      function cn(t, e, n) {
        let r = un(t, e);
        return (
          r >= 0
            ? (t[1 | r] = n)
            : ((r = ~r),
              (function (t, e, n, r) {
                let s = t.length;
                if (s == e) t.push(n, r);
                else if (1 === s) t.push(r, t[0]), (t[0] = n);
                else {
                  for (s--, t.push(t[s - 1], t[s]); s > e; )
                    (t[s] = t[s - 2]), s--;
                  (t[e] = n), (t[e + 1] = r);
                }
              })(t, r, e, n)),
          r
        );
      }
      function ln(t, e) {
        const n = un(t, e);
        if (n >= 0) return t[1 | n];
      }
      function un(t, e) {
        return (function (t, e, n) {
          let r = 0,
            s = t.length >> 1;
          for (; s !== r; ) {
            const n = r + ((s - r) >> 1),
              i = t[n << 1];
            if (e === i) return n << 1;
            i > e ? (s = n) : (r = n + 1);
          }
          return ~(s << 1);
        })(t, e);
      }
      const hn = {},
        dn = /\n/gm,
        fn = '__source',
        pn = u({ provide: String, useValue: u });
      let mn;
      function gn(t) {
        const e = mn;
        return (mn = t), e;
      }
      function yn(t, e = I.Default) {
        if (void 0 === mn)
          throw new Error('inject() must be called from an injection context');
        return null === mn
          ? R(t, void 0, e)
          : mn.get(t, e & I.Optional ? null : void 0, e);
      }
      function bn(t, e = I.Default) {
        return (P || yn)(g(t), e);
      }
      function vn(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const r = g(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error('Arguments array must have arguments.');
            let t,
              n = I.Default;
            for (let e = 0; e < r.length; e++) {
              const s = r[e],
                i = s.__NG_DI_FLAG__;
              'number' == typeof i
                ? -1 === i
                  ? (t = s.token)
                  : (n |= i)
                : (t = s);
            }
            e.push(bn(t, n));
          } else e.push(bn(r));
        }
        return e;
      }
      function _n(t, e) {
        return (t.__NG_DI_FLAG__ = e), (t.prototype.__NG_DI_FLAG__ = e), t;
      }
      const wn = _n(
          Ye('Inject', (t) => ({ token: t })),
          -1
        ),
        Sn = _n(Ye('Optional'), 8),
        En = _n(Ye('SkipSelf'), 4);
      let xn, Cn;
      function On(t) {
        var e;
        return (
          (null ===
            (e = (function () {
              if (void 0 === xn && ((xn = null), $.trustedTypes))
                try {
                  xn = $.trustedTypes.createPolicy('angular', {
                    createHTML: (t) => t,
                    createScript: (t) => t,
                    createScriptURL: (t) => t
                  });
                } catch (e) {}
              return xn;
            })()) || void 0 === e
            ? void 0
            : e.createHTML(t)) || t
        );
      }
      function Tn(t) {
        var e;
        return (
          (null ===
            (e = (function () {
              if (void 0 === Cn && ((Cn = null), $.trustedTypes))
                try {
                  Cn = $.trustedTypes.createPolicy('angular#unsafe-bypass', {
                    createHTML: (t) => t,
                    createScript: (t) => t,
                    createScriptURL: (t) => t
                  });
                } catch (e) {}
              return Cn;
            })()) || void 0 === e
            ? void 0
            : e.createHTML(t)) || t
        );
      }
      class kn {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      class jn extends kn {
        getTypeName() {
          return 'HTML';
        }
      }
      class An extends kn {
        getTypeName() {
          return 'Style';
        }
      }
      class In extends kn {
        getTypeName() {
          return 'Script';
        }
      }
      class Pn extends kn {
        getTypeName() {
          return 'URL';
        }
      }
      class Nn extends kn {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function Rn(t) {
        return t instanceof kn ? t.changingThisBreaksApplicationSecurity : t;
      }
      function Mn(t, e) {
        const n = Dn(t);
        if (null != n && n !== e) {
          if ('ResourceURL' === n && 'URL' === e) return !0;
          throw new Error(
            `Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`
          );
        }
        return n === e;
      }
      function Dn(t) {
        return (t instanceof kn && t.getTypeName()) || null;
      }
      function Ln(t) {
        return new jn(t);
      }
      function Fn(t) {
        return new An(t);
      }
      function zn(t) {
        return new In(t);
      }
      function Hn(t) {
        return new Pn(t);
      }
      function Un(t) {
        return new Nn(t);
      }
      class $n {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = '<body><remove></remove>' + t;
          try {
            const e = new window.DOMParser().parseFromString(On(t), 'text/html')
              .body;
            return null === e
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (e.removeChild(e.firstChild), e);
          } catch (e) {
            return null;
          }
        }
      }
      class Vn {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              'sanitization-inert'
            )),
            null == this.inertDocument.body)
          ) {
            const t = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(t);
            const e = this.inertDocument.createElement('body');
            t.appendChild(e);
          }
        }
        getInertBodyElement(t) {
          const e = this.inertDocument.createElement('template');
          if ('content' in e) return (e.innerHTML = On(t)), e;
          const n = this.inertDocument.createElement('body');
          return (
            (n.innerHTML = On(t)),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(n),
            n
          );
        }
        stripCustomNsAttrs(t) {
          const e = t.attributes;
          for (let r = e.length - 1; 0 < r; r--) {
            const n = e.item(r).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) ||
              t.removeAttribute(n);
          }
          let n = t.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling);
        }
      }
      const qn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        Bn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Wn(t) {
        return (t = String(t)).match(qn) || t.match(Bn) ? t : 'unsafe:' + t;
      }
      function Qn(t) {
        const e = {};
        for (const n of t.split(',')) e[n] = !0;
        return e;
      }
      function Gn(...t) {
        const e = {};
        for (const n of t)
          for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
        return e;
      }
      const Zn = Qn('area,br,col,hr,img,wbr'),
        Kn = Qn('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Jn = Qn('rp,rt'),
        Yn = Gn(Jn, Kn),
        Xn = Gn(
          Zn,
          Gn(
            Kn,
            Qn(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          Gn(
            Jn,
            Qn(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          Yn
        ),
        tr = Qn('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        er = Qn('srcset'),
        nr = Gn(
          tr,
          er,
          Qn(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          Qn(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        rr = Qn('script,style,template');
      class sr {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let e = t.firstChild,
            n = !0;
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              n && e.firstChild)
            )
              e = e.firstChild;
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let t = this.checkClobberedElement(e, e.nextSibling);
                if (t) {
                  e = t;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const e = t.nodeName.toLowerCase();
          if (!Xn.hasOwnProperty(e))
            return (this.sanitizedSomething = !0), !rr.hasOwnProperty(e);
          this.buf.push('<'), this.buf.push(e);
          const n = t.attributes;
          for (let s = 0; s < n.length; s++) {
            const t = n.item(s),
              e = t.name,
              i = e.toLowerCase();
            if (!nr.hasOwnProperty(i)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let o = t.value;
            tr[i] && (o = Wn(o)),
              er[i] &&
                ((r = o),
                (o = (r = String(r))
                  .split(',')
                  .map((t) => Wn(t.trim()))
                  .join(', '))),
              this.buf.push(' ', e, '="', ar(o), '"');
          }
          var r;
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const e = t.nodeName.toLowerCase();
          Xn.hasOwnProperty(e) &&
            !Zn.hasOwnProperty(e) &&
            (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(ar(t));
        }
        checkClobberedElement(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`
            );
          return e;
        }
      }
      const ir = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        or = /([^\#-~ |!])/g;
      function ar(t) {
        return t
          .replace(/&/g, '&amp;')
          .replace(ir, function (t) {
            return (
              '&#' +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(or, function (t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let cr;
      function lr(t, e) {
        let n = null;
        try {
          cr =
            cr ||
            (function (t) {
              const e = new Vn(t);
              return (function () {
                try {
                  return !!new window.DOMParser().parseFromString(
                    On(''),
                    'text/html'
                  );
                } catch (t) {
                  return !1;
                }
              })()
                ? new $n(e)
                : e;
            })(t);
          let r = e ? String(e) : '';
          n = cr.getInertBodyElement(r);
          let s = 5,
            i = r;
          do {
            if (0 === s)
              throw new Error(
                'Failed to sanitize html because the input is unstable'
              );
            s--, (r = i), (i = n.innerHTML), (n = cr.getInertBodyElement(r));
          } while (r !== i);
          return On(new sr().sanitizeChildren(ur(n) || n));
        } finally {
          if (n) {
            const t = ur(n) || n;
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
        }
      }
      function ur(t) {
        return 'content' in t &&
          (function (t) {
            return (
              t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName
            );
          })(t)
          ? t.content
          : null;
      }
      var hr = (function (t) {
        return (
          (t[(t.NONE = 0)] = 'NONE'),
          (t[(t.HTML = 1)] = 'HTML'),
          (t[(t.STYLE = 2)] = 'STYLE'),
          (t[(t.SCRIPT = 3)] = 'SCRIPT'),
          (t[(t.URL = 4)] = 'URL'),
          (t[(t.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
          t
        );
      })({});
      function dr(t) {
        const e = pr();
        return e
          ? Tn(e.sanitize(hr.HTML, t) || '')
          : Mn(t, 'HTML')
          ? Tn(Rn(t))
          : lr(Tt(), v(t));
      }
      function fr(t) {
        const e = pr();
        return e
          ? e.sanitize(hr.URL, t) || ''
          : Mn(t, 'URL')
          ? Rn(t)
          : Wn(v(t));
      }
      function pr() {
        const t = $t();
        return t && t[12];
      }
      function mr(t) {
        return t.ngDebugContext;
      }
      function gr(t) {
        return t.ngOriginalError;
      }
      function yr(t, ...e) {
        t.error(...e);
      }
      class br {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function (t) {
              return t.ngErrorLogger || yr;
            })(t);
          r(this._console, 'ERROR', t),
            e && r(this._console, 'ORIGINAL ERROR', e),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(t) {
          return t ? (mr(t) ? mr(t) : this._findContext(gr(t))) : null;
        }
        _findOriginalError(t) {
          let e = gr(t);
          for (; e && gr(e); ) e = gr(e);
          return e;
        }
      }
      function vr(t, e) {
        t.__ngContext__ = e;
      }
      const _r = (() =>
        (
          ('undefined' != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind($))();
      function wr(t) {
        return t instanceof Function ? t() : t;
      }
      var Sr = (function (t) {
        return (
          (t[(t.Important = 1)] = 'Important'),
          (t[(t.DashCase = 2)] = 'DashCase'),
          t
        );
      })({});
      function Er(t, e) {
        return (void 0)(t, e);
      }
      function xr(t) {
        const e = t[3];
        return ft(e) ? e[3] : e;
      }
      function Cr(t) {
        return Tr(t[13]);
      }
      function Or(t) {
        return Tr(t[4]);
      }
      function Tr(t) {
        for (; null !== t && !ft(t); ) t = t[4];
        return t;
      }
      function kr(t, e, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          ft(r) ? (i = r) : dt(r) && ((o = !0), (r = r[0]));
          const a = At(r);
          0 === t && null !== n
            ? null == s
              ? Dr(e, n, a)
              : Mr(e, n, a, s || null, !0)
            : 1 === t && null !== n
            ? Mr(e, n, a, s || null, !0)
            : 2 === t
            ? (function (t, e, n) {
                const r = Fr(t, e);
                r &&
                  (function (t, e, n, r) {
                    kt(t) ? t.removeChild(e, n, r) : e.removeChild(n);
                  })(t, r, e, n);
              })(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != i &&
              (function (t, e, n, r, s) {
                const i = n[7];
                i !== At(n) && kr(e, t, r, i, s);
                for (let o = ht; o < n.length; o++) {
                  const s = n[o];
                  Wr(s[1], s, t, e, r, i);
                }
              })(e, t, i, n, s);
        }
      }
      function jr(t, e, n) {
        return kt(t)
          ? t.createElement(e, n)
          : null === n
          ? t.createElement(e)
          : t.createElementNS(n, e);
      }
      function Ar(t, e) {
        const n = t[9],
          r = n.indexOf(e),
          s = e[3];
        1024 & e[2] && ((e[2] &= -1025), zt(s, -1)), n.splice(r, 1);
      }
      function Ir(t, e) {
        if (t.length <= ht) return;
        const n = ht + e,
          r = t[n];
        if (r) {
          const i = r[17];
          null !== i && i !== t && Ar(i, r), e > 0 && (t[n - 1][4] = r[4]);
          const o = on(t, ht + e);
          Wr(r[1], (s = r), s[11], 2, null, null), (s[0] = null), (s[6] = null);
          const a = o[19];
          null !== a && a.detachView(o[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        var s;
        return r;
      }
      function Pr(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          kt(n) && n.destroyNode && Wr(t, e, n, 3, null, null),
            (function (t) {
              let e = t[13];
              if (!e) return Nr(t[1], t);
              for (; e; ) {
                let n = null;
                if (dt(e)) n = e[13];
                else {
                  const t = e[10];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; )
                    dt(e) && Nr(e[1], e), (e = e[3]);
                  null === e && (e = t), dt(e) && Nr(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function Nr(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]];
                  if (!(t instanceof _e)) {
                    const e = n[r + 1];
                    if (Array.isArray(e))
                      for (let n = 0; n < e.length; n += 2)
                        e[n + 1].call(t[e[n]]);
                    else e.call(t);
                  }
                }
            })(t, e),
            (function (t, e) {
              const n = t.cleanup,
                r = e[7];
              let s = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    const t = n[i + 1],
                      o = 'function' == typeof t ? t(e) : At(e[t]),
                      a = r[(s = n[i + 2])],
                      c = n[i + 3];
                    'boolean' == typeof c
                      ? o.removeEventListener(n[i], a, c)
                      : c >= 0
                      ? r[(s = c)]()
                      : r[(s = -c)].unsubscribe(),
                      (i += 2);
                  } else {
                    const t = r[(s = n[i + 1])];
                    n[i].call(t);
                  }
              if (null !== r) {
                for (let t = s + 1; t < r.length; t++) (0, r[t])();
                e[7] = null;
              }
            })(t, e),
            1 === e[1].type && kt(e[11]) && e[11].destroy();
          const n = e[17];
          if (null !== n && ft(e[3])) {
            n !== e[3] && Ar(n, e);
            const r = e[19];
            null !== r && r.detachView(t);
          }
        }
      }
      function Rr(t, e, n) {
        return (function (t, e, n) {
          let r = e;
          for (; null !== r && 40 & r.type; ) r = (e = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const e = t.data[r.directiveStart].encapsulation;
            if (e === L.None || e === L.Emulated) return null;
          }
          return It(r, n);
        })(t, e.parent, n);
      }
      function Mr(t, e, n, r, s) {
        kt(t) ? t.insertBefore(e, n, r, s) : e.insertBefore(n, r, s);
      }
      function Dr(t, e, n) {
        kt(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function Lr(t, e, n, r, s) {
        null !== r ? Mr(t, e, n, r, s) : Dr(t, e, n);
      }
      function Fr(t, e) {
        return kt(t) ? t.parentNode(e) : e.parentNode;
      }
      function zr(t, e, n) {
        return Hr(t, e, n);
      }
      let Hr = function (t, e, n) {
        return 40 & t.type ? It(t, n) : null;
      };
      function Ur(t, e, n, r) {
        const s = Rr(t, r, e),
          i = e[11],
          o = zr(r.parent || e[6], r, e);
        if (null != s)
          if (Array.isArray(n))
            for (let a = 0; a < n.length; a++) Lr(i, s, n[a], o, !1);
          else Lr(i, s, n, o, !1);
      }
      function $r(t, e) {
        if (null !== e) {
          const n = e.type;
          if (3 & n) return It(e, t);
          if (4 & n) return qr(-1, t[e.index]);
          if (8 & n) {
            const n = e.child;
            if (null !== n) return $r(t, n);
            {
              const n = t[e.index];
              return ft(n) ? qr(-1, n) : At(n);
            }
          }
          if (32 & n) return Er(e, t)() || At(t[e.index]);
          {
            const n = Vr(t, e);
            return null !== n
              ? Array.isArray(n)
                ? n[0]
                : $r(xr(t[16]), n)
              : $r(t, e.next);
          }
        }
        return null;
      }
      function Vr(t, e) {
        return null !== e ? t[16][6].projection[e.projection] : null;
      }
      function qr(t, e) {
        const n = ht + t + 1;
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild;
          if (null !== r) return $r(t, r);
        }
        return e[7];
      }
      function Br(t, e, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            c = n.type;
          if (
            (o && 0 === e && (a && vr(At(a), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & c) Br(t, e, n.child, r, s, i, !1), kr(e, t, s, a, i);
            else if (32 & c) {
              const o = Er(n, r);
              let c;
              for (; (c = o()); ) kr(e, t, s, c, i);
              kr(e, t, s, a, i);
            } else 16 & c ? Qr(t, e, r, n, s, i) : kr(e, t, s, a, i);
          n = o ? n.projectionNext : n.next;
        }
      }
      function Wr(t, e, n, r, s, i) {
        Br(n, r, t.firstChild, e, s, i, !1);
      }
      function Qr(t, e, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a))
          for (let c = 0; c < a.length; c++) kr(e, t, s, a[c], i);
        else Br(t, e, a, o[3], s, i, !0);
      }
      function Gr(t, e, n) {
        kt(t) ? t.setAttribute(e, 'style', n) : (e.style.cssText = n);
      }
      function Zr(t, e, n) {
        kt(t)
          ? '' === n
            ? t.removeAttribute(e, 'class')
            : t.setAttribute(e, 'class', n)
          : (e.className = n);
      }
      function Kr(t, e, n) {
        let r = t.length;
        for (;;) {
          const s = t.indexOf(e, n);
          if (-1 === s) return s;
          if (0 === s || t.charCodeAt(s - 1) <= 32) {
            const n = e.length;
            if (s + n === r || t.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      const Jr = 'ng-template';
      function Yr(t, e, n) {
        let r = 0;
        for (; r < t.length; ) {
          let s = t[r++];
          if (n && 'class' === s) {
            if (((s = t[r]), -1 !== Kr(s.toLowerCase(), e, 0))) return !0;
          } else if (1 === s) {
            for (; r < t.length && 'string' == typeof (s = t[r++]); )
              if (s.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Xr(t) {
        return 4 === t.type && t.value !== Jr;
      }
      function ts(t, e, n) {
        return e === (4 !== t.type || n ? t.value : Jr);
      }
      function es(t, e, n) {
        let r = 4;
        const s = t.attrs || [],
          i = (function (t) {
            for (let e = 0; e < t.length; e++) if (Se(t[e])) return e;
            return t.length;
          })(s);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const c = e[a];
          if ('number' != typeof c) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ('' !== c && !ts(t, c, n)) || ('' === c && 1 === e.length))
                ) {
                  if (ns(r)) return !1;
                  o = !0;
                }
              } else {
                const l = 8 & r ? c : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!Yr(t.attrs, l, n)) {
                    if (ns(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const u = rs(8 & r ? 'class' : c, s, Xr(t), n);
                if (-1 === u) {
                  if (ns(r)) return !1;
                  o = !0;
                  continue;
                }
                if ('' !== l) {
                  let t;
                  t = u > i ? '' : s[u + 1].toLowerCase();
                  const e = 8 & r ? t : null;
                  if ((e && -1 !== Kr(e, l, 0)) || (2 & r && l !== t)) {
                    if (ns(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !ns(r) && !ns(c)) return !1;
            if (o && ns(c)) continue;
            (o = !1), (r = c | (1 & r));
          }
        }
        return ns(r) || o;
      }
      function ns(t) {
        return 0 == (1 & t);
      }
      function rs(t, e, n, r) {
        if (null === e) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < e.length; ) {
            const r = e[s];
            if (r === t) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let t = e[++s];
                for (; 'string' == typeof t; ) t = e[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function (t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              const r = t[n];
              if ('number' == typeof r) return -1;
              if (r === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function ss(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if (es(t, e[r], n)) return !0;
        return !1;
      }
      function is(t, e) {
        t: for (let n = 0; n < e.length; n++) {
          const r = e[n];
          if (t.length === r.length) {
            for (let e = 0; e < t.length; e++) if (t[e] !== r[e]) continue t;
            return !0;
          }
        }
        return !1;
      }
      function os(t, e) {
        return t ? ':not(' + e.trim() + ')' : e;
      }
      function as(t) {
        let e = t[0],
          n = 1,
          r = 2,
          s = '',
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ('string' == typeof o)
            if (2 & r) {
              const e = t[++n];
              s += '[' + o + (e.length > 0 ? '="' + e + '"' : '') + ']';
            } else 8 & r ? (s += '.' + o) : 4 & r && (s += ' ' + o);
          else
            '' === s || ns(o) || ((e += os(i, s)), (s = '')),
              (r = o),
              (i = i || !ns(r));
          n++;
        }
        return '' !== s && (e += os(i, s)), e;
      }
      const cs = {};
      function ls(t) {
        us(Vt(), $t(), ue() + t, Zt());
      }
      function us(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks;
            null !== r && pe(e, r, n);
          } else {
            const r = t.preOrderHooks;
            null !== r && me(e, r, 0, n);
          }
        he(n);
      }
      function hs(t, e) {
        return (t << 17) | (e << 2);
      }
      function ds(t) {
        return (t >> 17) & 32767;
      }
      function fs(t) {
        return 2 | t;
      }
      function ps(t) {
        return (131068 & t) >> 2;
      }
      function ms(t, e) {
        return (-131069 & t) | (e << 2);
      }
      function gs(t) {
        return 1 | t;
      }
      function ys(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = t.data[i];
              ee(s), n.contentQueries(2, e[i], i);
            }
          }
      }
      function bs(t, e, n, r, s, i, o, a, c, l) {
        const u = e.blueprint.slice();
        return (
          (u[0] = s),
          (u[2] = 140 | r),
          Ft(u),
          (u[3] = u[15] = t),
          (u[8] = n),
          (u[10] = o || (t && t[10])),
          (u[11] = a || (t && t[11])),
          (u[12] = c || (t && t[12]) || null),
          (u[9] = l || (t && t[9]) || null),
          (u[6] = i),
          (u[16] = 2 == e.type ? t[16] : u),
          u
        );
      }
      function vs(t, e, n, r, s) {
        let i = t.data[e];
        if (null === i)
          (i = (function (t, e, n, r, s) {
            const i = Bt(),
              o = Qt(),
              a = (t.data[e] = (function (t, e, n, r, s, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: e ? e.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: s,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: e,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0
                };
              })(0, o ? i : i && i.parent, n, e, r, s));
            return (
              null === t.firstChild && (t.firstChild = a),
              null !== i &&
                (o
                  ? null == i.child && null !== a.parent && (i.child = a)
                  : null === i.next && (i.next = a)),
              a
            );
          })(t, e, n, r, s)),
            Ht.lFrame.inI18n && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = s);
          const t = (function () {
            const t = Ht.lFrame,
              e = t.currentTNode;
            return t.isParent ? e : e.parent;
          })();
          i.injectorIndex = null === t ? -1 : t.injectorIndex;
        }
        return Wt(i, !0), i;
      }
      function _s(t, e, n, r) {
        if (0 === n) return -1;
        const s = e.length;
        for (let i = 0; i < n; i++)
          e.push(r), t.blueprint.push(r), t.data.push(null);
        return s;
      }
      function ws(t, e, n) {
        se(e);
        try {
          const r = t.viewQuery;
          null !== r && Ws(1, r, n);
          const s = t.template;
          null !== s && xs(t, e, s, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && ys(t, e),
            t.staticViewQueries && Ws(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) Us(t, e[n]);
            })(e, i);
        } catch (r) {
          throw (t.firstCreatePass && (t.incompleteFirstPass = !0), r);
        } finally {
          (e[2] &= -5), le();
        }
      }
      function Ss(t, e, n, r) {
        const s = e[2];
        if (256 == (256 & s)) return;
        se(e);
        const i = Zt();
        try {
          Ft(e),
            (Ht.lFrame.bindingIndex = t.bindingStartIndex),
            null !== n && xs(t, e, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && pe(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && me(e, n, 0, null), ge(e, 0);
            }
          if (
            ((function (t) {
              for (let e = Cr(t); null !== e; e = Or(e)) {
                if (!e[2]) continue;
                const t = e[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e],
                    r = n[3];
                  0 == (1024 & n[2]) && zt(r, 1), (n[2] |= 1024);
                }
              }
            })(e),
            (function (t) {
              for (let e = Cr(t); null !== e; e = Or(e))
                for (let t = ht; t < e.length; t++) {
                  const n = e[t],
                    r = n[1];
                  Dt(n) && Ss(r, n, r.template, n[8]);
                }
            })(e),
            null !== t.contentQueries && ys(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && pe(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && me(e, n, 1), ge(e, 1);
            }
          !(function (t, e) {
            const n = t.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let t = 0; t < n.length; t++) {
                  const r = n[t];
                  if (r < 0) he(~r);
                  else {
                    const s = r,
                      i = n[++t],
                      o = n[++t];
                    Yt(i, s), o(2, e[s]);
                  }
                }
              } finally {
                he(-1);
              }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) zs(t, e[n]);
            })(e, a);
          const c = t.viewQuery;
          if ((null !== c && Ws(2, c, r), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && pe(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && me(e, n, 2), ge(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            i || (e[2] &= -73),
            1024 & e[2] && ((e[2] &= -1025), zt(e[3], -1));
        } finally {
          le();
        }
      }
      function Es(t, e, n, r) {
        const s = e[10],
          i = !Zt(),
          o = Mt(e);
        try {
          i && !o && s.begin && s.begin(), o && ws(t, e, r), Ss(t, e, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function xs(t, e, n, r, s) {
        const i = ue();
        try {
          he(-1), 2 & r && e.length > ut && us(t, e, ut, Zt()), n(r, s);
        } finally {
          he(i);
        }
      }
      function Cs(t) {
        const e = t.tView;
        return null === e || e.incompleteFirstPass
          ? (t.tView = Os(
              1,
              null,
              t.template,
              t.decls,
              t.vars,
              t.directiveDefs,
              t.pipeDefs,
              t.viewQuery,
              t.schemas,
              t.consts
            ))
          : e;
      }
      function Os(t, e, n, r, s, i, o, a, c, l) {
        const u = ut + r,
          h = u + s,
          d = (function (t, e) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(r < t ? null : cs);
            return n;
          })(u, h),
          f = 'function' == typeof l ? l() : l;
        return (d[1] = {
          type: t,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: e,
          data: d.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: h,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof i ? i() : i,
          pipeRegistry: 'function' == typeof o ? o() : o,
          firstChild: null,
          schemas: c,
          consts: f,
          incompleteFirstPass: !1
        });
      }
      function Ts(t, e, n, r) {
        const s = Gs(e);
        null === n
          ? s.push(r)
          : (s.push(n), t.firstCreatePass && Zs(t).push(r, s.length - 1));
      }
      function ks(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const s = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(e, s)
              : (n[r] = [e, s]);
          }
        return n;
      }
      function js(t, e, n, r, s, i, o, a) {
        const c = It(e, n);
        let l,
          u = e.inputs;
        var h;
        !a && null != u && (l = u[r])
          ? (Js(t, n, l, r, s),
            mt(e) &&
              (function (t, e) {
                const n = Nt(e, t);
                16 & n[2] || (n[2] |= 64);
              })(n, e.index))
          : 3 & e.type &&
            ((r =
              'class' === (h = r)
                ? 'className'
                : 'for' === h
                ? 'htmlFor'
                : 'formaction' === h
                ? 'formAction'
                : 'innerHtml' === h
                ? 'innerHTML'
                : 'readonly' === h
                ? 'readOnly'
                : 'tabindex' === h
                ? 'tabIndex'
                : h),
            (s = null != o ? o(s, e.value || '', r) : s),
            kt(i)
              ? i.setProperty(c, r, s)
              : Ee(r) || (c.setProperty ? c.setProperty(r, s) : (c[r] = s)));
      }
      function As(t, e, n, r, s, i) {
        const o = i.hostBindings;
        if (o) {
          let n = t.hostBindingOpCodes;
          null === n && (n = t.hostBindingOpCodes = []);
          const i = ~e.index;
          (function (t) {
            let e = t.length;
            for (; e > 0; ) {
              const n = t[--e];
              if ('number' == typeof n && n < 0) return n;
            }
            return 0;
          })(n) != i && n.push(i),
            n.push(r, s, o);
        }
      }
      function Is(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function Ps(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function Ns(t, e, n) {
        if (n) {
          if (e.exportAs)
            for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          yt(e) && (n[''] = t);
        }
      }
      function Rs(t, e, n) {
        (t.flags |= 1),
          (t.directiveStart = e),
          (t.directiveEnd = e + n),
          (t.providerIndexes = e);
      }
      function Ms(t, e, n, r, s) {
        t.data[r] = s;
        const i = s.factory || (s.factory = bt(s.type)),
          o = new _e(i, yt(s), null);
        (t.blueprint[r] = o),
          (n[r] = o),
          As(t, e, 0, r, _s(t, n, s.hostVars, cs), s);
      }
      function Ds(t, e, n) {
        const r = It(e, t),
          s = Cs(n),
          i = t[10],
          o = $s(
            t,
            bs(
              t,
              s,
              null,
              n.onPush ? 64 : 16,
              r,
              e,
              i,
              i.createRenderer(r, n),
              null,
              null
            )
          );
        t[e.index] = o;
      }
      function Ls(t, e, n, r, s, i) {
        const o = i[e];
        if (null !== o) {
          const t = r.setInput;
          for (let e = 0; e < o.length; ) {
            const s = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function Fs(t, e) {
        let n = null,
          r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if (0 !== s)
            if (5 !== s) {
              if ('number' == typeof s) break;
              t.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, t[s], e[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function zs(t, e) {
        const n = Nt(e, t);
        if (Dt(n)) {
          const t = n[1];
          80 & n[2] ? Ss(t, n, t.template, n[8]) : n[5] > 0 && Hs(n);
        }
      }
      function Hs(t) {
        for (let n = Cr(t); null !== n; n = Or(n))
          for (let t = ht; t < n.length; t++) {
            const e = n[t];
            if (1024 & e[2]) {
              const t = e[1];
              Ss(t, e, t.template, e[8]);
            } else e[5] > 0 && Hs(e);
          }
        const e = t[1].components;
        if (null !== e)
          for (let n = 0; n < e.length; n++) {
            const r = Nt(e[n], t);
            Dt(r) && r[5] > 0 && Hs(r);
          }
      }
      function Us(t, e) {
        const n = Nt(e, t),
          r = n[1];
        !(function (t, e) {
          for (let n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n]);
        })(r, n),
          ws(r, n, n[8]);
      }
      function $s(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function Vs(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = xr(t);
          if (0 != (512 & t[2]) && !e) return t;
          t = e;
        }
        return null;
      }
      function qs(t, e, n) {
        const r = e[10];
        r.begin && r.begin();
        try {
          Ss(t, e, t.template, n);
        } catch (s) {
          throw (Ks(e, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function Bs(t) {
        !(function (t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = Rt(n),
              s = r[1];
            Es(s, r, s.template, n);
          }
        })(t[8]);
      }
      function Ws(t, e, n) {
        ee(0), e(t, n);
      }
      const Qs = (() => Promise.resolve(null))();
      function Gs(t) {
        return t[7] || (t[7] = []);
      }
      function Zs(t) {
        return t.cleanup || (t.cleanup = []);
      }
      function Ks(t, e) {
        const n = t[9],
          r = n ? n.get(br, null) : null;
        r && r.handleError(e);
      }
      function Js(t, e, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            c = e[o],
            l = t.data[o];
          null !== l.setInput ? l.setInput(c, s, r, a) : (c[a] = s);
        }
      }
      function Ys(t, e, n) {
        let r = n ? t.styles : null,
          s = n ? t.classes : null,
          i = 0;
        if (null !== e)
          for (let o = 0; o < e.length; o++) {
            const t = e[o];
            'number' == typeof t
              ? (i = t)
              : 1 == i
              ? (s = f(s, t))
              : 2 == i && (r = f(r, t + ': ' + e[++o] + ';'));
          }
        n ? (t.styles = r) : (t.stylesWithoutHost = r),
          n ? (t.classes = s) : (t.classesWithoutHost = s);
      }
      const Xs = new Xe('INJECTOR', -1);
      class ti {
        get(t, e = hn) {
          if (e === hn) {
            const e = new Error(`NullInjectorError: No provider for ${d(t)}!`);
            throw ((e.name = 'NullInjectorError'), e);
          }
          return e;
        }
      }
      const ei = new Xe('Set Injector scope.'),
        ni = {},
        ri = {},
        si = [];
      let ii;
      function oi() {
        return void 0 === ii && (ii = new ti()), ii;
      }
      function ai(t, e = null, n = null, r) {
        return new ci(t, n, e || oi(), r);
      }
      class ci {
        constructor(t, e, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && rn(e, (n) => this.processProvider(n, t, e)),
            rn([t], (t) => this.processInjectorType(t, [], s)),
            this.records.set(Xs, ui(void 0, this));
          const i = this.records.get(ei);
          (this.scope = null != i ? i.value : null),
            (this.source = r || ('object' == typeof t ? null : d(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, e = hn, n = I.Default) {
          this.assertNotDestroyed();
          const r = gn(this);
          try {
            if (!(n & I.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n =
                  ('function' == typeof (s = t) ||
                    ('object' == typeof s && s instanceof Xe)) &&
                  x(t);
                (e = n && this.injectableDefInScope(n) ? ui(li(t), ni) : null),
                  this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & I.Self ? oi() : this.parent).get(
              t,
              (e = n & I.Optional && e === hn ? null : e)
            );
          } catch (i) {
            if ('NullInjectorError' === i.name) {
              if (
                ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(d(t)), r)
              )
                throw i;
              return (function (t, e, n, r) {
                const s = t.ngTempTokenPath;
                throw (
                  (e[fn] && s.unshift(e[fn]),
                  (t.message = (function (t, e, n, r = null) {
                    t =
                      t && '\n' === t.charAt(0) && '\u0275' == t.charAt(1)
                        ? t.substr(2)
                        : t;
                    let s = d(e);
                    if (Array.isArray(e)) s = e.map(d).join(' -> ');
                    else if ('object' == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n];
                          t.push(
                            n +
                              ':' +
                              ('string' == typeof r ? JSON.stringify(r) : d(r))
                          );
                        }
                      s = `{${t.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${s}]: ${t.replace(
                      dn,
                      '\n  '
                    )}`;
                  })('\n' + t.message, s, n, r)),
                  (t.ngTokenPath = s),
                  (t.ngTempTokenPath = null),
                  t)
                );
              })(i, t, 'R3InjectorError', this.source);
            }
            throw i;
          } finally {
            gn(r);
          }
          var s;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((e, n) => t.push(d(n))),
            `R3Injector[${t.join(', ')}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error('Injector has already been destroyed.');
        }
        processInjectorType(t, e, n) {
          if (!(t = g(t))) return !1;
          let r = O(t);
          const s = (null == r && t.ngModule) || void 0,
            i = void 0 === s ? t : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = O(s)), null == r)) return !1;
          if (null != r.imports && !o) {
            let t;
            n.push(i);
            try {
              rn(r.imports, (r) => {
                this.processInjectorType(r, e, n) &&
                  (void 0 === t && (t = []), t.push(r));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e];
                rn(r, (t) => this.processProvider(t, n, r || si));
              }
          }
          this.injectorDefTypes.add(i), this.records.set(i, ui(r.factory, ni));
          const a = r.providers;
          if (null != a && !o) {
            const e = t;
            rn(a, (t) => this.processProvider(t, e, a));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let r = di((t = g(t))) ? t : g(t && t.provide);
          const s = (function (t, e, n) {
            return hi(t)
              ? ui(void 0, t.useValue)
              : ui(
                  (function (t, e, n) {
                    let r;
                    if (di(t)) {
                      const e = g(t);
                      return bt(e) || li(e);
                    }
                    if (hi(t)) r = () => g(t.useValue);
                    else if ((s = t) && s.useFactory)
                      r = () => t.useFactory(...vn(t.deps || []));
                    else if (
                      (function (t) {
                        return !(!t || !t.useExisting);
                      })(t)
                    )
                      r = () => bn(g(t.useExisting));
                    else {
                      const e = g(t && (t.useClass || t.provide));
                      if (
                        !(function (t) {
                          return !!t.deps;
                        })(t)
                      )
                        return bt(e) || li(e);
                      r = () => new e(...vn(t.deps));
                    }
                    var s;
                    return r;
                  })(t),
                  ni
                );
          })(t);
          if (di(t) || !0 !== t.multi) this.records.get(r);
          else {
            let e = this.records.get(r);
            e ||
              ((e = ui(void 0, ni, !0)),
              (e.factory = () => vn(e.multi)),
              this.records.set(r, e)),
              (r = t),
              e.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === ni && ((e.value = ri), (e.value = e.factory())),
            'object' == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              'object' == typeof n &&
              'function' == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ('string' == typeof t.providedIn
              ? 'any' === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          );
        }
      }
      function li(t) {
        const e = x(t),
          n = null !== e ? e.factory : bt(t);
        if (null !== n) return n;
        const r = O(t);
        if (null !== r) return r.factory;
        if (t instanceof Xe)
          throw new Error(`Token ${d(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function (t) {
            const e = t.length;
            if (e > 0) {
              const n = an(e, '?');
              throw new Error(
                `Can't resolve all parameters for ${d(t)}: (${n.join(', ')}).`
              );
            }
            const n = (function (t) {
              const e = t && (t[T] || t[j]);
              if (e) {
                const n = (function (t) {
                  if (t.hasOwnProperty('name')) return t.name;
                  const e = ('' + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? '' : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error('unreachable');
      }
      function ui(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function hi(t) {
        return null !== t && 'object' == typeof t && pn in t;
      }
      function di(t) {
        return 'function' == typeof t;
      }
      const fi = function (t, e, n) {
        return (function (t, e = null, n = null, r) {
          const s = ai(t, e, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, e, t, n);
      };
      let pi = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t)
              ? fi(t, e, '')
              : fi(t.providers, t.parent, t.name || '');
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = hn),
          (t.NULL = new ti()),
          (t.ɵprov = S({ token: t, providedIn: 'any', factory: () => bn(Xs) })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      function mi(t, e) {
        fe(Rt(t)[1], qt());
      }
      function gi(t) {
        let e = Object.getPrototypeOf(t.type.prototype).constructor,
          n = !0;
        const r = [t];
        for (; e; ) {
          let s;
          if (yt(t)) s = e.ɵcmp || e.ɵdir;
          else {
            if (e.ɵcmp) throw new Error('Directives cannot inherit Components');
            s = e.ɵdir;
          }
          if (s) {
            if (n) {
              r.push(s);
              const e = t;
              (e.inputs = yi(t.inputs)),
                (e.declaredInputs = yi(t.declaredInputs)),
                (e.outputs = yi(t.outputs));
              const n = s.hostBindings;
              n && _i(t, n);
              const i = s.viewQuery,
                o = s.contentQueries;
              if (
                (i && bi(t, i),
                o && vi(t, o),
                h(t.inputs, s.inputs),
                h(t.declaredInputs, s.declaredInputs),
                h(t.outputs, s.outputs),
                yt(s) && s.data.animation)
              ) {
                const e = t.data;
                e.animation = (e.animation || []).concat(s.data.animation);
              }
            }
            const e = s.features;
            if (e)
              for (let r = 0; r < e.length; r++) {
                const s = e[r];
                s && s.ngInherit && s(t), s === gi && (n = !1);
              }
          }
          e = Object.getPrototypeOf(e);
        }
        !(function (t) {
          let e = 0,
            n = null;
          for (let r = t.length - 1; r >= 0; r--) {
            const s = t[r];
            (s.hostVars = e += s.hostVars),
              (s.hostAttrs = xe(s.hostAttrs, (n = xe(n, s.hostAttrs))));
          }
        })(r);
      }
      function yi(t) {
        return t === V ? {} : t === q ? [] : t;
      }
      function bi(t, e) {
        const n = t.viewQuery;
        t.viewQuery = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      function vi(t, e) {
        const n = t.contentQueries;
        t.contentQueries = n
          ? (t, r, s) => {
              e(t, r, s), n(t, r, s);
            }
          : e;
      }
      function _i(t, e) {
        const n = t.hostBindings;
        t.hostBindings = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      let wi = null;
      function Si() {
        if (!wi) {
          const t = $.Symbol;
          if (t && t.iterator) wi = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              'entries' !== n &&
                'size' !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (wi = n);
            }
          }
        }
        return wi;
      }
      function Ei(t) {
        return (
          !!xi(t) && (Array.isArray(t) || (!(t instanceof Map) && Si() in t))
        );
      }
      function xi(t) {
        return null !== t && ('function' == typeof t || 'object' == typeof t);
      }
      function Ci(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function Oi(t, e, n, r) {
        const s = $t();
        return (
          Ci(s, Jt(), e) &&
            (Vt(),
            (function (t, e, n, r, s, i) {
              const o = It(t, e);
              !(function (t, e, n, r, s, i, o) {
                if (null == i)
                  kt(t) ? t.removeAttribute(e, s, n) : e.removeAttribute(s);
                else {
                  const a = null == o ? v(i) : o(i, r || '', s);
                  kt(t)
                    ? t.setAttribute(e, s, a, n)
                    : n
                    ? e.setAttributeNS(n, s, a)
                    : e.setAttribute(s, a);
                }
              })(e[11], o, i, t.value, n, r, s);
            })(de(), s, t, e, n, r)),
          Oi
        );
      }
      function Ti(t, e = I.Default) {
        const n = $t();
        return null === n ? bn(t, e) : ze(qt(), n, g(t), e);
      }
      function ki(t, e, n) {
        const r = $t();
        return Ci(r, Jt(), e) && js(Vt(), de(), r, t, e, r[11], n, !1), ki;
      }
      function ji(t, e, n, r, s) {
        const i = s ? 'class' : 'style';
        Js(t, n, e.inputs[i], i, r);
      }
      function Ai(t, e, n, r) {
        const s = $t(),
          i = Vt(),
          o = ut + t,
          a = s[11],
          c = (s[o] = jr(a, e, Ht.lFrame.currentNamespace)),
          l = i.firstCreatePass
            ? (function (t, e, n, r, s, i, o) {
                const a = e.consts,
                  c = vs(e, t, 2, s, Lt(a, i));
                return (
                  (function (t, e, n, r) {
                    let s = !1;
                    if (Ut()) {
                      const i = (function (t, e, n) {
                          const r = t.directiveRegistry;
                          let s = null;
                          if (r)
                            for (let i = 0; i < r.length; i++) {
                              const o = r[i];
                              ss(n, o.selectors, !1) &&
                                (s || (s = []),
                                De(Pe(n, e), t, o.type),
                                yt(o) ? (Ps(t, n), s.unshift(o)) : s.push(o));
                            }
                          return s;
                        })(t, e, n),
                        o = null === r ? null : { '': -1 };
                      if (null !== i) {
                        (s = !0), Rs(n, t.data.length, i.length);
                        for (let t = 0; t < i.length; t++) {
                          const e = i[t];
                          e.providersResolver && e.providersResolver(e);
                        }
                        let r = !1,
                          a = !1,
                          c = _s(t, e, i.length, null);
                        for (let s = 0; s < i.length; s++) {
                          const l = i[s];
                          (n.mergedAttrs = xe(n.mergedAttrs, l.hostAttrs)),
                            Ms(t, n, e, c, l),
                            Ns(c, l, o),
                            null !== l.contentQueries && (n.flags |= 8),
                            (null === l.hostBindings &&
                              null === l.hostAttrs &&
                              0 === l.hostVars) ||
                              (n.flags |= 128);
                          const u = l.type.prototype;
                          !r &&
                            (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) &&
                            ((t.preOrderHooks || (t.preOrderHooks = [])).push(
                              n.index
                            ),
                            (r = !0)),
                            a ||
                              (!u.ngOnChanges && !u.ngDoCheck) ||
                              ((
                                t.preOrderCheckHooks ||
                                (t.preOrderCheckHooks = [])
                              ).push(n.index),
                              (a = !0)),
                            c++;
                        }
                        !(function (t, e) {
                          const n = e.directiveEnd,
                            r = t.data,
                            s = e.attrs,
                            i = [];
                          let o = null,
                            a = null;
                          for (let c = e.directiveStart; c < n; c++) {
                            const t = r[c],
                              n = t.inputs,
                              l = null === s || Xr(e) ? null : Fs(n, s);
                            i.push(l),
                              (o = ks(n, c, o)),
                              (a = ks(t.outputs, c, a));
                          }
                          null !== o &&
                            (o.hasOwnProperty('class') && (e.flags |= 16),
                            o.hasOwnProperty('style') && (e.flags |= 32)),
                            (e.initialInputs = i),
                            (e.inputs = o),
                            (e.outputs = a);
                        })(t, n);
                      }
                      o &&
                        (function (t, e, n) {
                          if (e) {
                            const r = (t.localNames = []);
                            for (let t = 0; t < e.length; t += 2) {
                              const s = n[e[t + 1]];
                              if (null == s)
                                throw new b(
                                  '301',
                                  `Export of name '${e[t + 1]}' not found!`
                                );
                              r.push(e[t], s);
                            }
                          }
                        })(n, r, o);
                    }
                    n.mergedAttrs = xe(n.mergedAttrs, n.attrs);
                  })(e, n, c, Lt(a, o)),
                  null !== c.attrs && Ys(c, c.attrs, !1),
                  null !== c.mergedAttrs && Ys(c, c.mergedAttrs, !0),
                  null !== e.queries && e.queries.elementStart(e, c),
                  c
                );
              })(o, i, s, 0, e, n, r)
            : i.data[o];
        Wt(l, !0);
        const u = l.mergedAttrs;
        null !== u && we(a, c, u);
        const h = l.classes;
        null !== h && Zr(a, c, h);
        const d = l.styles;
        null !== d && Gr(a, c, d),
          64 != (64 & l.flags) && Ur(i, s, c, l),
          0 === Ht.lFrame.elementDepthCount && vr(c, s),
          Ht.lFrame.elementDepthCount++,
          gt(l) &&
            ((function (t, e, n) {
              Ut() &&
                ((function (t, e, n, r) {
                  const s = n.directiveStart,
                    i = n.directiveEnd;
                  t.firstCreatePass || Pe(n, e), vr(r, e);
                  const o = n.initialInputs;
                  for (let a = s; a < i; a++) {
                    const r = t.data[a],
                      i = yt(r);
                    i && Ds(e, n, r);
                    const c = qe(e, t, a, n);
                    vr(c, e),
                      null !== o && Ls(0, a - s, c, r, 0, o),
                      i && (Nt(n.index, e)[8] = c);
                  }
                })(t, e, n, It(n, e)),
                128 == (128 & n.flags) &&
                  (function (t, e, n) {
                    const r = n.directiveStart,
                      s = n.directiveEnd,
                      i = n.index,
                      o = Ht.lFrame.currentDirectiveIndex;
                    try {
                      he(i);
                      for (let n = r; n < s; n++) {
                        const r = t.data[n],
                          s = e[n];
                        Xt(n),
                          (null === r.hostBindings &&
                            0 === r.hostVars &&
                            null === r.hostAttrs) ||
                            Is(r, s);
                      }
                    } finally {
                      he(-1), Xt(o);
                    }
                  })(t, e, n));
            })(i, s, l),
            (function (t, e, n) {
              if (pt(e)) {
                const r = e.directiveEnd;
                for (let s = e.directiveStart; s < r; s++) {
                  const e = t.data[s];
                  e.contentQueries && e.contentQueries(1, n[s], s);
                }
              }
            })(i, l, s)),
          null !== r &&
            (function (t, e, n = It) {
              const r = e.localNames;
              if (null !== r) {
                let s = e.index + 1;
                for (let i = 0; i < r.length; i += 2) {
                  const o = r[i + 1],
                    a = -1 === o ? n(e, t) : t[o];
                  t[s++] = a;
                }
              }
            })(s, l);
      }
      function Ii() {
        let t = qt();
        Qt() ? Gt() : ((t = t.parent), Wt(t, !1));
        const e = t;
        Ht.lFrame.elementDepthCount--;
        const n = Vt();
        n.firstCreatePass && (fe(n, t), pt(t) && n.queries.elementEnd(t)),
          null != e.classesWithoutHost &&
            (function (t) {
              return 0 != (16 & t.flags);
            })(e) &&
            ji(n, e, $t(), e.classesWithoutHost, !0),
          null != e.stylesWithoutHost &&
            (function (t) {
              return 0 != (32 & t.flags);
            })(e) &&
            ji(n, e, $t(), e.stylesWithoutHost, !1);
      }
      function Pi(t, e, n, r) {
        Ai(t, e, n, r), Ii();
      }
      function Ni(t) {
        return !!t && 'function' == typeof t.then;
      }
      function Ri(t) {
        return !!t && 'function' == typeof t.subscribe;
      }
      const Mi = Ri;
      function Di(t, e, n = !1, r) {
        const s = $t(),
          i = Vt(),
          o = qt();
        return (
          (function (t, e, n, r, s, i, o = !1, a) {
            const c = gt(r),
              l = t.firstCreatePass && Zs(t),
              u = Gs(e);
            let h = !0;
            if (3 & r.type) {
              const d = It(r, e),
                f = a ? a(d) : V,
                p = f.target || d,
                m = u.length,
                g = a ? (t) => a(At(t[r.index])).target : r.index;
              if (kt(n)) {
                let o = null;
                if (
                  (!a &&
                    c &&
                    (o = (function (t, e, n, r) {
                      const s = t.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const t = s[i];
                          if (t === n && s[i + 1] === r) {
                            const t = e[7],
                              n = s[i + 2];
                            return t.length > n ? t[n] : null;
                          }
                          'string' == typeof t && (i += 2);
                        }
                      return null;
                    })(t, e, s, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i),
                    (o.__ngLastListenerFn__ = i),
                    (h = !1);
                else {
                  i = Fi(r, e, i, !1);
                  const t = n.listen(f.name || p, s, i);
                  u.push(i, t), l && l.push(s, g, m, m + 1);
                }
              } else
                (i = Fi(r, e, i, !0)),
                  p.addEventListener(s, i, o),
                  u.push(i),
                  l && l.push(s, g, m, o);
            } else i = Fi(r, e, i, !1);
            const d = r.outputs;
            let f;
            if (h && null !== d && (f = d[s])) {
              const t = f.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[f[n]][f[n + 1]].subscribe(i),
                    o = u.length;
                  u.push(i, t), l && l.push(s, r.index, o, -(o + 1));
                }
            }
          })(i, s, s[11], o, t, e, n, r),
          Di
        );
      }
      function Li(t, e, n) {
        try {
          return !1 !== e(n);
        } catch (r) {
          return Ks(t, r), !1;
        }
      }
      function Fi(t, e, n, r) {
        return function s(i) {
          if (i === Function) return n;
          const o = 2 & t.flags ? Nt(t.index, e) : e;
          0 == (32 & e[2]) && Vs(o);
          let a = Li(e, n, i),
            c = s.__ngNextListenerFn__;
          for (; c; ) (a = Li(e, c, i) && a), (c = c.__ngNextListenerFn__);
          return r && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function zi(t, e) {
        let n = null;
        const r = (function (t) {
          const e = t.attrs;
          if (null != e) {
            const t = e.indexOf(5);
            if (0 == (1 & t)) return e[t + 1];
          }
          return null;
        })(t);
        for (let s = 0; s < e.length; s++) {
          const i = e[s];
          if ('*' !== i) {
            if (null === r ? ss(t, i, !0) : is(r, i)) return s;
          } else n = s;
        }
        return n;
      }
      function Hi(t) {
        const e = $t()[16][6];
        if (!e.projection) {
          const n = (e.projection = an(t ? t.length : 1, null)),
            r = n.slice();
          let s = e.child;
          for (; null !== s; ) {
            const e = t ? zi(s, t) : 0;
            null !== e &&
              (r[e] ? (r[e].projectionNext = s) : (n[e] = s), (r[e] = s)),
              (s = s.next);
          }
        }
      }
      function Ui(t, e = 0, n) {
        const r = $t(),
          s = Vt(),
          i = vs(s, ut + t, 16, null, n || null);
        null === i.projection && (i.projection = e),
          Gt(),
          64 != (64 & i.flags) &&
            (function (t, e, n) {
              Qr(e[11], 0, e, n, Rr(t, n, e), zr(n.parent || e[6], n, e));
            })(s, r, i);
      }
      const $i = [];
      function Vi(t, e, n, r, s) {
        const i = t[n + 1],
          o = null === e;
        let a = r ? ds(i) : ps(i),
          c = !1;
        for (; 0 !== a && (!1 === c || o); ) {
          const n = t[a + 1];
          qi(t[a], e) && ((c = !0), (t[a + 1] = r ? gs(n) : fs(n))),
            (a = r ? ds(n) : ps(n));
        }
        c && (t[n + 1] = r ? fs(i) : gs(i));
      }
      function qi(t, e) {
        return (
          null === t ||
          null == e ||
          (Array.isArray(t) ? t[1] : t) === e ||
          (!(!Array.isArray(t) || 'string' != typeof e) && un(t, e) >= 0)
        );
      }
      function Bi(t, e) {
        return (
          (function (t, e, n, r) {
            const s = $t(),
              i = Vt(),
              o = (function (t) {
                const e = Ht.lFrame,
                  n = e.bindingIndex;
                return (e.bindingIndex = e.bindingIndex + 2), n;
              })();
            i.firstUpdatePass &&
              (function (t, e, n, r) {
                const s = t.data;
                if (null === s[n + 1]) {
                  const i = s[ue()],
                    o = (function (t, e) {
                      return e >= t.expandoStartIndex;
                    })(t, n);
                  (function (t, e) {
                    return 0 != (16 & t.flags);
                  })(i) &&
                    null === e &&
                    !o &&
                    (e = !1),
                    (e = (function (t, e, n, r) {
                      const s = (function (t) {
                        const e = Ht.lFrame.currentDirectiveIndex;
                        return -1 === e ? null : t[e];
                      })(t);
                      let i = e.residualClasses;
                      if (null === s)
                        0 === e.classBindings &&
                          ((n = Qi((n = Wi(null, t, e, n, r)), e.attrs, r)),
                          (i = null));
                      else {
                        const o = e.directiveStylingLast;
                        if (-1 === o || t[o] !== s)
                          if (((n = Wi(s, t, e, n, r)), null === i)) {
                            let n = (function (t, e, n) {
                              const r = e.classBindings;
                              if (0 !== ps(r)) return t[ds(r)];
                            })(t, e);
                            void 0 !== n &&
                              Array.isArray(n) &&
                              ((n = Wi(null, t, e, n[1], r)),
                              (n = Qi(n, e.attrs, r)),
                              (function (t, e, n, r) {
                                t[ds(e.classBindings)] = r;
                              })(t, e, 0, n));
                          } else
                            i = (function (t, e, n) {
                              let r;
                              const s = e.directiveEnd;
                              for (
                                let i = 1 + e.directiveStylingLast;
                                i < s;
                                i++
                              )
                                r = Qi(r, t[i].hostAttrs, true);
                              return Qi(r, e.attrs, true);
                            })(t, e);
                      }
                      return void 0 !== i && (e.residualClasses = i), n;
                    })(s, i, e, r)),
                    (function (t, e, n, r, s, i) {
                      let o = e.classBindings,
                        a = ds(o),
                        c = ps(o);
                      t[r] = n;
                      let l,
                        u = !1;
                      if (Array.isArray(n)) {
                        const t = n;
                        (l = t[1]), (null === l || un(t, l) > 0) && (u = !0);
                      } else l = n;
                      if (s)
                        if (0 !== c) {
                          const e = ds(t[a + 1]);
                          (t[r + 1] = hs(e, a)),
                            0 !== e && (t[e + 1] = ms(t[e + 1], r)),
                            (t[a + 1] = (131071 & t[a + 1]) | (r << 17));
                        } else
                          (t[r + 1] = hs(a, 0)),
                            0 !== a && (t[a + 1] = ms(t[a + 1], r)),
                            (a = r);
                      else
                        (t[r + 1] = hs(c, 0)),
                          0 === a ? (a = r) : (t[c + 1] = ms(t[c + 1], r)),
                          (c = r);
                      u && (t[r + 1] = fs(t[r + 1])),
                        Vi(t, l, r, !0),
                        Vi(t, l, r, !1),
                        (function (t, e, n, r, s) {
                          const i = t.residualClasses;
                          null != i &&
                            'string' == typeof e &&
                            un(i, e) >= 0 &&
                            (n[r + 1] = gs(n[r + 1]));
                        })(e, l, t, r),
                        (o = hs(a, c)),
                        (e.classBindings = o);
                    })(s, i, e, n, o);
                }
              })(i, t, o, true),
              e !== cs &&
                Ci(s, o, e) &&
                (function (t, e, n, r, s, i, o, a) {
                  if (!(3 & e.type)) return;
                  const c = t.data,
                    l = c[a + 1];
                  Zi(1 == (1 & l) ? Gi(c, e, n, s, ps(l), o) : void 0) ||
                    (Zi(i) ||
                      ((function (t) {
                        return 2 == (2 & t);
                      })(l) &&
                        (i = Gi(c, null, n, s, a, o))),
                    (function (t, e, n, r, s) {
                      const i = kt(t);
                      s
                        ? i
                          ? t.addClass(n, r)
                          : n.classList.add(r)
                        : i
                        ? t.removeClass(n, r)
                        : n.classList.remove(r);
                    })(
                      r,
                      0,
                      (function (t, e) {
                        return At(e[t]);
                      })(ue(), n),
                      s,
                      i
                    ));
                })(
                  i,
                  i.data[ue()],
                  s,
                  s[11],
                  t,
                  (s[o + 1] = (function (t, e) {
                    return (
                      null == t || ('object' == typeof t && (t = d(Rn(t)))), t
                    );
                  })(e)),
                  true,
                  o
                );
          })(t, e),
          Bi
        );
      }
      function Wi(t, e, n, r, s) {
        let i = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < o && ((i = e[a]), (r = Qi(r, i.hostAttrs, s)), i !== t);

        )
          a++;
        return null !== t && (n.directiveStylingLast = a), r;
      }
      function Qi(t, e, n) {
        const r = n ? 1 : 2;
        let s = -1;
        if (null !== e)
          for (let i = 0; i < e.length; i++) {
            const o = e[i];
            'number' == typeof o
              ? (s = o)
              : s === r &&
                (Array.isArray(t) || (t = void 0 === t ? [] : ['', t]),
                cn(t, o, !!n || e[++i]));
          }
        return void 0 === t ? null : t;
      }
      function Gi(t, e, n, r, s, i) {
        const o = null === e;
        let a;
        for (; s > 0; ) {
          const e = t[s],
            i = Array.isArray(e),
            c = i ? e[1] : e,
            l = null === c;
          let u = n[s + 1];
          u === cs && (u = l ? $i : void 0);
          let h = l ? ln(u, r) : c === r ? u : void 0;
          if ((i && !Zi(h) && (h = ln(e, r)), Zi(h) && ((a = h), o))) return a;
          const d = t[s + 1];
          s = o ? ds(d) : ps(d);
        }
        if (null !== e) {
          let t = i ? e.residualClasses : e.residualStyles;
          null != t && (a = ln(t, r));
        }
        return a;
      }
      function Zi(t) {
        return void 0 !== t;
      }
      function Ki(t, e = '') {
        const n = $t(),
          r = Vt(),
          s = t + ut,
          i = r.firstCreatePass ? vs(r, s, 1, e, null) : r.data[s],
          o = (n[s] = (function (t, e) {
            return kt(t) ? t.createText(e) : t.createTextNode(e);
          })(n[11], e));
        Ur(r, n, o, i), Wt(i, !1);
      }
      function Ji(t, e, n) {
        const r = $t();
        return Ci(r, Jt(), e) && js(Vt(), de(), r, t, e, r[11], n, !0), Ji;
      }
      const Yi = void 0;
      var Xi = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Yi],
        [['AM', 'PM'], Yi, Yi],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        Yi,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        ],
        Yi,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini']
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Yi, "{1} 'at' {0}", Yi],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xd7',
          '\u2030',
          '\u221e',
          'NaN',
          ':'
        ],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === e && 0 === n ? 1 : 5;
        }
      ];
      let to = {};
      function eo(t, e, n) {
        'string' != typeof e && ((n = e), (e = t[oo.LocaleId])),
          (e = e.toLowerCase().replace(/_/g, '-')),
          (to[e] = t),
          n && (to[e][oo.ExtraData] = n);
      }
      function no(t) {
        const e = (function (t) {
          return t.toLowerCase().replace(/_/g, '-');
        })(t);
        let n = io(e);
        if (n) return n;
        const r = e.split('-')[0];
        if (((n = io(r)), n)) return n;
        if ('en' === r) return Xi;
        throw new Error(`Missing locale data for the locale "${t}".`);
      }
      function ro(t) {
        return no(t)[oo.CurrencyCode] || null;
      }
      function so(t) {
        return no(t)[oo.PluralCase];
      }
      function io(t) {
        return (
          t in to ||
            (to[t] =
              $.ng &&
              $.ng.common &&
              $.ng.common.locales &&
              $.ng.common.locales[t]),
          to[t]
        );
      }
      var oo = (function (t) {
        return (
          (t[(t.LocaleId = 0)] = 'LocaleId'),
          (t[(t.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
          (t[(t.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
          (t[(t.DaysFormat = 3)] = 'DaysFormat'),
          (t[(t.DaysStandalone = 4)] = 'DaysStandalone'),
          (t[(t.MonthsFormat = 5)] = 'MonthsFormat'),
          (t[(t.MonthsStandalone = 6)] = 'MonthsStandalone'),
          (t[(t.Eras = 7)] = 'Eras'),
          (t[(t.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
          (t[(t.WeekendRange = 9)] = 'WeekendRange'),
          (t[(t.DateFormat = 10)] = 'DateFormat'),
          (t[(t.TimeFormat = 11)] = 'TimeFormat'),
          (t[(t.DateTimeFormat = 12)] = 'DateTimeFormat'),
          (t[(t.NumberSymbols = 13)] = 'NumberSymbols'),
          (t[(t.NumberFormats = 14)] = 'NumberFormats'),
          (t[(t.CurrencyCode = 15)] = 'CurrencyCode'),
          (t[(t.CurrencySymbol = 16)] = 'CurrencySymbol'),
          (t[(t.CurrencyName = 17)] = 'CurrencyName'),
          (t[(t.Currencies = 18)] = 'Currencies'),
          (t[(t.Directionality = 19)] = 'Directionality'),
          (t[(t.PluralCase = 20)] = 'PluralCase'),
          (t[(t.ExtraData = 21)] = 'ExtraData'),
          t
        );
      })({});
      const ao = 'en-US';
      let co = ao;
      function lo(t) {
        var e, n;
        (n = 'Expected localeId to be defined'),
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error(
                `ASSERTION ERROR: ${t} [Expected=> null != ${e} <=Actual]`
              );
            })(n, e),
          'string' == typeof t && (co = t.toLowerCase().replace(/_/g, '-'));
      }
      class uo {}
      class ho {
        resolveComponentFactory(t) {
          throw (function (t) {
            const e = Error(
              `No component factory found for ${d(
                t
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let fo = (() => {
        class t {}
        return (t.NULL = new ho()), t;
      })();
      function po(...t) {}
      function mo(t, e) {
        return new yo(It(t, e));
      }
      const go = function () {
        return mo(qt(), $t());
      };
      let yo = (() => {
        class t {
          constructor(t) {
            this.nativeElement = t;
          }
        }
        return (t.__NG_ELEMENT_ID__ = go), t;
      })();
      function bo(t) {
        return t instanceof yo ? t.nativeElement : t;
      }
      class vo {}
      let _o = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => wo()), t;
      })();
      const wo = function () {
        const t = $t(),
          e = Nt(qt().index, t);
        return (function (t) {
          return t[11];
        })(dt(e) ? e : t);
      };
      let So = (() => {
        class t {}
        return (
          (t.ɵprov = S({ token: t, providedIn: 'root', factory: () => null })),
          t
        );
      })();
      class Eo {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const xo = new Eo('11.2.3');
      class Co {
        constructor() {}
        supports(t) {
          return Ei(t);
        }
        create(t) {
          return new To(t);
        }
      }
      const Oo = (t, e) => e;
      class To {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || Oo);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < Io(n, r, s)) ? e : n,
              o = Io(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const t = o - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  e <= i && i < t && (s[n] = r + 1);
                }
                s[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !Ei(t)))
            throw new Error(
              `Error trying to diff '${d(
                t
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== s && Object.is(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, e)),
                    Object.is(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, e)), (i = !0)),
                (s = s._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[Si()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, (t) => {
                (r = this._trackByFn(e, t)),
                  null !== s && Object.is(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, t, r, e)),
                      Object.is(s.item, t) || this._addIdentityChange(s, t))
                    : ((s = this._mismatch(s, t, r, e)), (i = !0)),
                  (s = s._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(s), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(n, null))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, s, r))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(n, r))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, s, r))
              : (t = this._addAfter(new ko(e, n), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new Ao()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return (
            null === e ? (this._itHead = n) : (e._next = n),
            null === n ? (this._itTail = e) : (n._prev = e),
            t
          );
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Ao()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class ko {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class jo {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if (
              (null === e || e <= n.currentIndex) &&
              Object.is(n.trackById, t)
            )
              return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class Ao {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new jo()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Io(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + e + s;
      }
      class Po {
        constructor() {}
        supports(t) {
          return t instanceof Map || xi(t);
        }
        create() {
          return new No();
        }
      }
      class No {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || xi(t)))
              throw new Error(
                `Error trying to diff '${d(
                  t
                )}'. Only maps and objects are allowed`
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n)
                this._maybeAddToChanges(e, t),
                  (this._appendAfter = e),
                  (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new Ro(t);
          return (
            this._records.set(t, n),
            (n.currentValue = e),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Object.is(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class Ro {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Mo() {
        return new Do([new Co()]);
      }
      let Do = (() => {
        class t {
          constructor(t) {
            this.factories = t;
          }
          static create(e, n) {
            if (null != n) {
              const t = n.factories.slice();
              e = e.concat(t);
            }
            return new t(e);
          }
          static extend(e) {
            return {
              provide: t,
              useFactory: (n) => t.create(e, n || Mo()),
              deps: [[t, new En(), new Sn()]]
            };
          }
          find(t) {
            const e = this.factories.find((e) => e.supports(t));
            if (null != e) return e;
            throw new Error(
              `Cannot find a differ supporting object '${t}' of type '${
                ((n = t), n.name || typeof n)
              }'`
            );
            var n;
          }
        }
        return (t.ɵprov = S({ token: t, providedIn: 'root', factory: Mo })), t;
      })();
      function Lo() {
        return new Fo([new Po()]);
      }
      let Fo = (() => {
        class t {
          constructor(t) {
            this.factories = t;
          }
          static create(e, n) {
            if (n) {
              const t = n.factories.slice();
              e = e.concat(t);
            }
            return new t(e);
          }
          static extend(e) {
            return {
              provide: t,
              useFactory: (n) => t.create(e, n || Lo()),
              deps: [[t, new En(), new Sn()]]
            };
          }
          find(t) {
            const e = this.factories.find((e) => e.supports(t));
            if (e) return e;
            throw new Error(`Cannot find a differ supporting object '${t}'`);
          }
        }
        return (t.ɵprov = S({ token: t, providedIn: 'root', factory: Lo })), t;
      })();
      function zo(t, e, n, r, s = !1) {
        for (; null !== n; ) {
          const i = e[n.index];
          if ((null !== i && r.push(At(i)), ft(i)))
            for (let t = ht; t < i.length; t++) {
              const e = i[t],
                n = e[1].firstChild;
              null !== n && zo(e[1], e, n, r);
            }
          const o = n.type;
          if (8 & o) zo(t, e, n.child, r);
          else if (32 & o) {
            const t = Er(n, e);
            let s;
            for (; (s = t()); ) r.push(s);
          } else if (16 & o) {
            const t = Vr(e, n);
            if (Array.isArray(t)) r.push(...t);
            else {
              const n = xr(e[16]);
              zo(n[1], n, t, r, !0);
            }
          }
          n = s ? n.projectionNext : n.next;
        }
        return r;
      }
      class Ho {
        constructor(t, e) {
          (this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            e = t[1];
          return zo(e, t, e.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (ft(t)) {
              const e = t[8],
                n = e ? e.indexOf(this) : -1;
              n > -1 && (Ir(t, n), on(e, n));
            }
            this._attachedToViewContainer = !1;
          }
          Pr(this._lView[1], this._lView);
        }
        onDestroy(t) {
          Ts(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Vs(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          qs(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (t, e, n) {
            Kt(!0);
            try {
              qs(t, e, n);
            } finally {
              Kt(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef)
            throw new Error(
              'This view is already attached directly to the ApplicationRef!'
            );
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null),
            Wr(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer)
            throw new Error(
              'This view is already attached to a ViewContainer!'
            );
          this._appRef = t;
        }
      }
      class Uo extends Ho {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Bs(this._view);
        }
        checkNoChanges() {
          !(function (t) {
            Kt(!0);
            try {
              Bs(t);
            } finally {
              Kt(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      const $o = qo;
      let Vo = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = $o), (t.__ChangeDetectorRef__ = !0), t;
      })();
      function qo(t = !1) {
        return (function (t, e, n) {
          if (!n && mt(t)) {
            const n = Nt(t.index, e);
            return new Ho(n, n);
          }
          return 47 & t.type ? new Ho(e[16], e) : null;
        })(qt(), $t(), t);
      }
      const Bo = [new Po()],
        Wo = new Do([new Co()]),
        Qo = new Fo(Bo),
        Go = function () {
          return Yo(qt(), $t());
        };
      let Zo = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Go), t;
      })();
      const Ko = Zo,
        Jo = class extends Ko {
          constructor(t, e, n) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = e),
              (this.elementRef = n);
          }
          createEmbeddedView(t) {
            const e = this._declarationTContainer.tViews,
              n = bs(
                this._declarationLView,
                e,
                t,
                16,
                null,
                e.declTNode,
                null,
                null,
                null,
                null
              );
            n[17] = this._declarationLView[this._declarationTContainer.index];
            const r = this._declarationLView[19];
            return (
              null !== r && (n[19] = r.createEmbeddedView(e)),
              ws(e, n, t),
              new Ho(n)
            );
          }
        };
      function Yo(t, e) {
        return 4 & t.type ? new Jo(e, t, mo(t, e)) : null;
      }
      class Xo {}
      class ta {}
      const ea = function () {
        return aa(qt(), $t());
      };
      let na = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = ea), t;
      })();
      const ra = na,
        sa = class extends ra {
          constructor(t, e, n) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = e),
              (this._hostLView = n);
          }
          get element() {
            return mo(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Qe(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Me(this._hostTNode, this._hostLView);
            if (Oe(t)) {
              const e = ke(t, this._hostLView),
                n = Te(t);
              return new Qe(e[1].data[n + 8], e);
            }
            return new Qe(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const e = ia(this._lContainer);
            return (null !== e && e[t]) || null;
          }
          get length() {
            return this._lContainer.length - ht;
          }
          createEmbeddedView(t, e, n) {
            const r = t.createEmbeddedView(e || {});
            return this.insert(r, n), r;
          }
          createComponent(t, e, n, r, s) {
            const i = n || this.parentInjector;
            if (!s && null == t.ngModule && i) {
              const t = i.get(Xo, null);
              t && (s = t);
            }
            const o = t.create(i, r, void 0, s);
            return this.insert(o.hostView, e), o;
          }
          insert(t, e) {
            const n = t._lView,
              r = n[1];
            if (ft(n[3])) {
              const e = this.indexOf(t);
              if (-1 !== e) this.detach(e);
              else {
                const e = n[3],
                  r = new sa(e, e[6], e[3]);
                r.detach(r.indexOf(t));
              }
            }
            const s = this._adjustIndex(e),
              i = this._lContainer;
            !(function (t, e, n, r) {
              const s = ht + r,
                i = n.length;
              r > 0 && (n[s - 1][4] = e),
                r < i - ht
                  ? ((e[4] = n[s]), sn(n, ht + r, e))
                  : (n.push(e), (e[4] = null)),
                (e[3] = n);
              const o = e[17];
              null !== o &&
                n !== o &&
                (function (t, e) {
                  const n = t[9];
                  e[16] !== e[3][3][16] && (t[2] = !0),
                    null === n ? (t[9] = [e]) : n.push(e);
                })(o, e);
              const a = e[19];
              null !== a && a.insertView(t), (e[2] |= 128);
            })(r, n, i, s);
            const o = qr(s, i),
              a = n[11],
              c = Fr(a, i[7]);
            return (
              null !== c &&
                (function (t, e, n, r, s, i) {
                  (r[0] = s), (r[6] = e), Wr(t, r, n, 1, s, i);
                })(r, i[6], a, n, c, o),
              t.attachToViewContainerRef(),
              sn(oa(i), s, t),
              t
            );
          }
          move(t, e) {
            return this.insert(t, e);
          }
          indexOf(t) {
            const e = ia(this._lContainer);
            return null !== e ? e.indexOf(t) : -1;
          }
          remove(t) {
            const e = this._adjustIndex(t, -1),
              n = Ir(this._lContainer, e);
            n && (on(oa(this._lContainer), e), Pr(n[1], n));
          }
          detach(t) {
            const e = this._adjustIndex(t, -1),
              n = Ir(this._lContainer, e);
            return n && null != on(oa(this._lContainer), e) ? new Ho(n) : null;
          }
          _adjustIndex(t, e = 0) {
            return null == t ? this.length + e : t;
          }
        };
      function ia(t) {
        return t[8];
      }
      function oa(t) {
        return t[8] || (t[8] = []);
      }
      function aa(t, e) {
        let n;
        const r = e[t.index];
        if (ft(r)) n = r;
        else {
          let s;
          if (8 & t.type) s = At(r);
          else {
            const n = e[11];
            s = n.createComment('');
            const r = It(t, e);
            Mr(
              n,
              Fr(n, r),
              s,
              (function (t, e) {
                return kt(t) ? t.nextSibling(e) : e.nextSibling;
              })(n, r),
              !1
            );
          }
          (e[t.index] = n = new Array(r, !0, !1, e, null, 0, t, s, null, null)),
            $s(e, n);
        }
        return new sa(n, t, e);
      }
      const ca = {};
      class la extends fo {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const e = ct(t);
          return new da(e, this.ngModule);
        }
      }
      function ua(t) {
        const e = [];
        for (let n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const ha = new Xe('SCHEDULER_TOKEN', {
        providedIn: 'root',
        factory: () => _r
      });
      class da extends uo {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(as).join(',')),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return ua(this.componentDef.inputs);
        }
        get outputs() {
          return ua(this.componentDef.outputs);
        }
        create(t, e, n, r) {
          const s = (r = r || this.ngModule)
              ? (function (t, e) {
                  return {
                    get: (n, r, s) => {
                      const i = t.get(n, ca, s);
                      return i !== ca || r === ca ? i : e.get(n, r, s);
                    }
                  };
                })(t, r.injector)
              : t,
            i = s.get(vo, jt),
            o = s.get(So, null),
            a = i.createRenderer(null, this.componentDef),
            c = this.componentDef.selectors[0][0] || 'div',
            l = n
              ? (function (t, e, n) {
                  if (kt(t)) return t.selectRootElement(e, n === L.ShadowDom);
                  let r = 'string' == typeof e ? t.querySelector(e) : e;
                  return (r.textContent = ''), r;
                })(a, n, this.componentDef.encapsulation)
              : jr(
                  i.createRenderer(null, this.componentDef),
                  c,
                  (function (t) {
                    const e = t.toLowerCase();
                    return 'svg' === e
                      ? 'http://www.w3.org/2000/svg'
                      : 'math' === e
                      ? 'http://www.w3.org/1998/MathML/'
                      : null;
                  })(c)
                ),
            u = this.componentDef.onPush ? 576 : 528,
            h = {
              components: [],
              scheduler: _r,
              clean: Qs,
              playerHandler: null,
              flags: 0
            },
            d = Os(0, null, null, 1, 0, null, null, null, null, null),
            f = bs(null, d, h, u, null, null, i, a, o, s);
          let p, m;
          se(f);
          try {
            const t = (function (t, e, n, r, s, i) {
              const o = n[1];
              n[20] = t;
              const a = vs(o, 20, 2, '#host', null),
                c = (a.mergedAttrs = e.hostAttrs);
              null !== c &&
                (Ys(a, c, !0),
                null !== t &&
                  (we(s, t, c),
                  null !== a.classes && Zr(s, t, a.classes),
                  null !== a.styles && Gr(s, t, a.styles)));
              const l = r.createRenderer(t, e),
                u = bs(
                  n,
                  Cs(e),
                  null,
                  e.onPush ? 64 : 16,
                  n[20],
                  a,
                  r,
                  l,
                  null,
                  null
                );
              return (
                o.firstCreatePass &&
                  (De(Pe(a, n), o, e.type), Ps(o, a), Rs(a, n.length, 1)),
                $s(n, u),
                (n[20] = u)
              );
            })(l, this.componentDef, f, i, a);
            if (l)
              if (n) we(a, l, ['ng-version', xo.full]);
              else {
                const { attrs: t, classes: e } = (function (t) {
                  const e = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < t.length; ) {
                    let i = t[r];
                    if ('string' == typeof i)
                      2 === s
                        ? '' !== i && e.push(i, t[++r])
                        : 8 === s && n.push(i);
                    else {
                      if (!ns(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: e, classes: n };
                })(this.componentDef.selectors[0]);
                t && we(a, l, t), e && e.length > 0 && Zr(a, l, e.join(' '));
              }
            if (((m = Pt(d, ut)), void 0 !== e)) {
              const t = (m.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = e[n];
                t.push(null != r ? Array.from(r) : null);
              }
            }
            (p = (function (t, e, n, r, s) {
              const i = n[1],
                o = (function (t, e, n) {
                  const r = qt();
                  t.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Ms(t, r, e, _s(t, e, 1, null), n));
                  const s = qe(e, t, r.directiveStart, r);
                  vr(s, e);
                  const i = It(r, e);
                  return i && vr(i, e), s;
                })(i, n, e);
              if (
                (r.components.push(o),
                (t[8] = o),
                s && s.forEach((t) => t(o, e)),
                e.contentQueries)
              ) {
                const t = qt();
                e.contentQueries(1, o, t.directiveStart);
              }
              const a = qt();
              return (
                !i.firstCreatePass ||
                  (null === e.hostBindings && null === e.hostAttrs) ||
                  (he(a.index),
                  As(n[1], a, 0, a.directiveStart, a.directiveEnd, e),
                  Is(e, o)),
                o
              );
            })(t, this.componentDef, f, h, [mi])),
              ws(d, f, null);
          } finally {
            le();
          }
          return new fa(this.componentType, p, mo(m, f), f, m);
        }
      }
      class fa extends class {} {
        constructor(t, e, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new Uo(r)),
            (this.componentType = t);
        }
        get injector() {
          return new Qe(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      const pa = new Map();
      class ma extends Xo {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new la(this));
          const n = lt(t),
            r = t[Z] || null;
          r && lo(r),
            (this._bootstrapComponents = wr(n.bootstrap)),
            (this._r3Injector = ai(
              t,
              e,
              [
                { provide: Xo, useValue: this },
                { provide: fo, useValue: this.componentFactoryResolver }
              ],
              d(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, e = pi.THROW_IF_NOT_FOUND, n = I.Default) {
          return t === pi || t === Xo || t === Xs
            ? this
            : this._r3Injector.get(t, e, n);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class ga extends ta {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== lt(t) &&
              (function (t) {
                const e = new Set();
                !(function t(n) {
                  const r = lt(n, !0),
                    s = r.id;
                  null !== s &&
                    ((function (t, e, n) {
                      if (e && e !== n)
                        throw new Error(
                          `Duplicate module registered for ${t} - ${d(
                            e
                          )} vs ${d(e.name)}`
                        );
                    })(s, pa.get(s), n),
                    pa.set(s, n));
                  const i = wr(r.imports);
                  for (const o of i) e.has(o) || (e.add(o), t(o));
                })(t);
              })(t);
        }
        create(t) {
          return new ma(this.moduleType, t);
        }
      }
      function ya(t, e, n) {
        const r =
            (function () {
              const t = Ht.lFrame;
              let e = t.bindingRootIndex;
              return (
                -1 === e &&
                  (e = t.bindingRootIndex = t.tView.bindingStartIndex),
                e
              );
            })() + t,
          s = $t();
        return s[r] === cs
          ? (function (t, e, n) {
              return (t[e] = n);
            })(s, r, n ? e.call(n) : e())
          : (function (t, e) {
              return t[e];
            })(s, r);
      }
      const ba = class extends r.a {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let r,
            i = (t) => null,
            o = () => null;
          t && 'object' == typeof t
            ? ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e));
                  }
                : (e) => {
                    t.next(e);
                  }),
              t.error &&
                (i = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e));
                    }
                  : (e) => {
                      t.error(e);
                    }),
              t.complete &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
              e &&
                (i = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
              n &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const a = super.subscribe(r, i, o);
          return t instanceof s.a && t.add(a), a;
        }
      };
      function va() {
        return this._results[Si()]();
      }
      class _a {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const e = Si(),
            n = _a.prototype;
          n[e] || (n[e] = va);
        }
        get changes() {
          return this._changes || (this._changes = new ba());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, e) {
          const n = this;
          n.dirty = !1;
          const r = nn(t);
          (this._changesDetected = !(function (t, e, n) {
            if (t.length !== e.length) return !1;
            for (let r = 0; r < t.length; r++) {
              let s = t[r],
                i = e[r];
              if ((n && ((s = n(s)), (i = n(i))), i !== s)) return !1;
            }
            return !0;
          })(n._results, r, e)) &&
            ((n._results = r),
            (n.length = r.length),
            (n.last = r[this.length - 1]),
            (n.first = r[0]));
        }
        notifyOnChanges() {
          !this._changes ||
            (!this._changesDetected && this._emitDistinctChangesOnly) ||
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class wa {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new wa(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Sa {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const e = t.queries;
          if (null !== e) {
            const n =
                null !== t.contentQueries ? t.contentQueries[0] : e.length,
              r = [];
            for (let t = 0; t < n; t++) {
              const n = e.getByIndex(t);
              r.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new Sa(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++)
            null !== Na(t, e).matches && this.queries[e].setDirty();
        }
      }
      class Ea {
        constructor(t, e, n = null) {
          (this.predicate = t), (this.flags = e), (this.read = n);
        }
      }
      class xa {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementStart(t, e);
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++)
            this.queries[e].elementEnd(t);
        }
        embeddedTView(t) {
          let e = null;
          for (let n = 0; n < this.length; n++) {
            const r = null !== e ? e.length : 0,
              s = this.getByIndex(n).embeddedTView(t, r);
            s &&
              ((s.indexInDeclarationView = n),
              null !== e ? e.push(s) : (e = [s]));
          }
          return null !== e ? new xa(e) : null;
        }
        template(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].template(t, e);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Ca {
        constructor(t, e = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e);
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, e) {
          this.elementStart(t, e);
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, e),
              new Ca(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const e = this._declarationNodeIndex;
            let n = t.parent;
            for (; null !== n && 8 & n.type && n.index !== e; ) n = n.parent;
            return e === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, e) {
          const n = this.metadata.predicate;
          if (Array.isArray(n))
            for (let r = 0; r < n.length; r++) {
              const s = n[r];
              this.matchTNodeWithReadOption(t, e, Oa(e, s)),
                this.matchTNodeWithReadOption(t, e, Ve(e, t, s, !1, !1));
            }
          else
            n === Zo
              ? 4 & e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, Ve(e, t, n, !1, !1));
        }
        matchTNodeWithReadOption(t, e, n) {
          if (null !== n) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === yo || r === na || (r === Zo && 4 & e.type))
                this.addMatch(e.index, -2);
              else {
                const n = Ve(e, t, r, !1, !1);
                null !== n && this.addMatch(e.index, n);
              }
            else this.addMatch(e.index, n);
          }
        }
        addMatch(t, e) {
          null === this.matches
            ? (this.matches = [t, e])
            : this.matches.push(t, e);
        }
      }
      function Oa(t, e) {
        const n = t.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
        return null;
      }
      function Ta(t, e, n, r) {
        return -1 === n
          ? (function (t, e) {
              return 11 & t.type ? mo(t, e) : 4 & t.type ? Yo(t, e) : null;
            })(e, t)
          : -2 === n
          ? (function (t, e, n) {
              return n === yo
                ? mo(e, t)
                : n === Zo
                ? Yo(e, t)
                : n === na
                ? aa(e, t)
                : void 0;
            })(t, e, r)
          : qe(t, t[1], n, e);
      }
      function ka(t, e, n, r) {
        const s = e[19].queries[r];
        if (null === s.matches) {
          const r = t.data,
            i = n.matches,
            o = [];
          for (let t = 0; t < i.length; t += 2) {
            const s = i[t];
            o.push(s < 0 ? null : Ta(e, r[s], i[t + 1], n.metadata.read));
          }
          s.matches = o;
        }
        return s.matches;
      }
      function ja(t, e, n, r) {
        const s = t.queries.getByIndex(n),
          i = s.matches;
        if (null !== i) {
          const o = ka(t, e, s, n);
          for (let t = 0; t < i.length; t += 2) {
            const n = i[t];
            if (n > 0) r.push(o[t / 2]);
            else {
              const s = i[t + 1],
                o = e[-n];
              for (let t = ht; t < o.length; t++) {
                const e = o[t];
                e[17] === e[3] && ja(e[1], e, s, r);
              }
              if (null !== o[9]) {
                const t = o[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e];
                  ja(n[1], n, s, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Aa(t) {
        const e = $t(),
          n = Vt(),
          r = te();
        ee(r + 1);
        const s = Na(n, r);
        if (t.dirty && Mt(e) === (2 == (2 & s.metadata.flags))) {
          if (null === s.matches) t.reset([]);
          else {
            const i = s.crossesNgTemplate ? ja(n, e, r, []) : ka(n, e, s, r);
            t.reset(i, bo), t.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Ia(t, e, n, r) {
        const s = Vt();
        if (s.firstCreatePass) {
          const i = qt();
          (function (t, e, n) {
            null === t.queries && (t.queries = new xa()),
              t.queries.track(new Ca(e, n));
          })(s, new Ea(e, n, r), i.index),
            (function (t, e) {
              const n = t.contentQueries || (t.contentQueries = []);
              e !== (n.length ? n[n.length - 1] : -1) &&
                n.push(t.queries.length - 1, e);
            })(s, t),
            2 == (2 & n) && (s.staticContentQueries = !0);
        }
        !(function (t, e, n) {
          const r = new _a(4 == (4 & n));
          Ts(t, e, r, r.destroy),
            null === e[19] && (e[19] = new Sa()),
            e[19].queries.push(new wa(r));
        })(s, $t(), n);
      }
      function Pa() {
        return (t = $t()), (e = te()), t[19].queries[e].queryList;
        var t, e;
      }
      function Na(t, e) {
        return t.queries.getByIndex(e);
      }
      function Ra(t = I.Default) {
        const e = qo(!0);
        if (null != e || t & I.Optional) return e;
        w('ChangeDetectorRef');
      }
      const Ma = new Xe('Application Initializer');
      let Da = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.resolve = po),
              (this.reject = po),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                Ni(e) && t.push(e);
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch((t) => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bn(Ma, 8));
          }),
          (t.ɵprov = S({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const La = new Xe('AppId'),
        Fa = {
          provide: La,
          useFactory: function () {
            return `${za()}${za()}${za()}`;
          },
          deps: []
        };
      function za() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Ha = new Xe('Platform Initializer'),
        Ua = new Xe('Platform ID'),
        $a = new Xe('appBootstrapListener');
      let Va = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = S({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const qa = new Xe('LocaleId'),
        Ba = new Xe('DefaultCurrencyCode');
      class Wa {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const Qa = function (t) {
          return new ga(t);
        },
        Ga = Qa,
        Za = function (t) {
          return Promise.resolve(Qa(t));
        },
        Ka = function (t) {
          const e = Qa(t),
            n = wr(lt(t).declarations).reduce((t, e) => {
              const n = ct(e);
              return n && t.push(new da(n)), t;
            }, []);
          return new Wa(e, n);
        },
        Ja = Ka,
        Ya = function (t) {
          return Promise.resolve(Ka(t));
        };
      let Xa = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = Ga),
              (this.compileModuleAsync = Za),
              (this.compileModuleAndAllComponentsSync = Ja),
              (this.compileModuleAndAllComponentsAsync = Ya);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = S({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const tc = (() => Promise.resolve(0))();
      function ec(t) {
        'undefined' == typeof Zone
          ? tc.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', t);
      }
      class nc {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: e = !1,
          shouldCoalesceRunChangeDetection: n = !1
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ba(!1)),
            (this.onMicrotaskEmpty = new ba(!1)),
            (this.onStable = new ba(!1)),
            (this.onError = new ba(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched();
          const r = this;
          (r._nesting = 0),
            (r._outer = r._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)),
            (r.shouldCoalesceEventChangeDetection = !n && e),
            (r.shouldCoalesceRunChangeDetection = n),
            (r.lastRequestAnimationFrameId = -1),
            (r.nativeRequestAnimationFrame = (function () {
              let t = $.requestAnimationFrame,
                e = $.cancelAnimationFrame;
              if ('undefined' != typeof Zone && t && e) {
                const n = t[Zone.__symbol__('OriginalDelegate')];
                n && (t = n);
                const r = e[Zone.__symbol__('OriginalDelegate')];
                r && (e = r);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: e
              };
            })().nativeRequestAnimationFrame),
            (function (t) {
              const e = () => {
                !(function (t) {
                  -1 === t.lastRequestAnimationFrameId &&
                    ((t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(
                      $,
                      () => {
                        t.fakeTopEventTask ||
                          (t.fakeTopEventTask = Zone.root.scheduleEventTask(
                            'fakeTopEventTask',
                            () => {
                              (t.lastRequestAnimationFrameId = -1),
                                ic(t),
                                sc(t);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          t.fakeTopEventTask.invoke();
                      }
                    )),
                    ic(t));
                })(t);
              };
              t._inner = t._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return oc(t), n.invokeTask(s, i, o, a);
                  } finally {
                    ((t.shouldCoalesceEventChangeDetection &&
                      'eventTask' === i.type) ||
                      t.shouldCoalesceRunChangeDetection) &&
                      e(),
                      ac(t);
                  }
                },
                onInvoke: (n, r, s, i, o, a, c) => {
                  try {
                    return oc(t), n.invoke(s, i, o, a, c);
                  } finally {
                    t.shouldCoalesceRunChangeDetection && e(), ac(t);
                  }
                },
                onHasTask: (e, n, r, s) => {
                  e.hasTask(r, s),
                    n === r &&
                      ('microTask' == s.change
                        ? ((t._hasPendingMicrotasks = s.microTask),
                          ic(t),
                          sc(t))
                        : 'macroTask' == s.change &&
                          (t.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, n, r, s) => (
                  e.handleError(r, s),
                  t.runOutsideAngular(() => t.onError.emit(s)),
                  !1
                )
              });
            })(r);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!nc.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (nc.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask('NgZoneEvent: ' + r, t, rc, po, po);
          try {
            return s.runTask(i, e, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const rc = {};
      function sc(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function ic(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          ((t.shouldCoalesceEventChangeDetection ||
            t.shouldCoalesceRunChangeDetection) &&
            -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function oc(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function ac(t) {
        t._nesting--, sc(t);
      }
      class cc {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ba()),
            (this.onMicrotaskEmpty = new ba()),
            (this.onStable = new ba()),
            (this.onError = new ba());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }
      let lc = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone =
                    'undefined' == typeof Zone
                      ? null
                      : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                }
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      nc.assertNotInAngularZone(),
                        ec(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    }
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                ec(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (e) =>
                    !e.updateCb ||
                    !e.updateCb(t) ||
                    (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let r = -1;
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (t) => t.timeoutId !== r
                  )),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(bn(nc));
            }),
            (t.ɵprov = S({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        uc = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), pc.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return pc.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = S({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class hc {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      function dc(t) {
        pc = t;
      }
      let fc,
        pc = new hc(),
        mc = !0,
        gc = !1;
      function yc() {
        if (gc)
          throw new Error('Cannot enable prod mode after platform setup.');
        mc = !1;
      }
      const bc = new Xe('AllowMultipleToken');
      class vc {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function _c(t, e, n = []) {
        const r = `Platform: ${e}`,
          s = new Xe(r);
        return (e = []) => {
          let i = wc();
          if (!i || i.injector.get(bc, !1))
            if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
            else {
              const t = n
                .concat(e)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: ei, useValue: 'platform' }
                );
              !(function (t) {
                if (fc && !fc.destroyed && !fc.injector.get(bc, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                fc = t.get(Sc);
                const e = t.get(Ha, null);
                e && e.forEach((t) => t());
              })(pi.create({ providers: t, name: r }));
            }
          return (function (t) {
            const e = wc();
            if (!e) throw new Error('No platform exists!');
            if (!e.injector.get(t, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return e;
          })(s);
        };
      }
      function wc() {
        return fc && !fc.destroyed ? fc : null;
      }
      let Sc = (() => {
        class t {
          constructor(t) {
            (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function (t, e) {
                let n;
                return (
                  (n =
                    'noop' === t
                      ? new cc()
                      : ('zone.js' === t ? void 0 : t) ||
                        new nc({
                          enableLongStackTrace: ((gc = !0), mc),
                          shouldCoalesceEventChangeDetection: !!(null == e
                            ? void 0
                            : e.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == e
                            ? void 0
                            : e.ngZoneRunCoalescing)
                        })),
                  n
                );
              })(e ? e.ngZone : void 0, {
                ngZoneEventCoalescing: (e && e.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (e && e.ngZoneRunCoalescing) || !1
              }),
              r = [{ provide: nc, useValue: n }];
            return n.run(() => {
              const e = pi.create({
                  providers: r,
                  parent: this.injector,
                  name: t.moduleType.name
                }),
                s = t.create(e),
                i = s.injector.get(br, null);
              if (!i)
                throw new Error(
                  'No ErrorHandler. Is platform module (BrowserModule) included?'
                );
              return (
                n.runOutsideAngular(() => {
                  const t = n.onError.subscribe({
                    next: (t) => {
                      i.handleError(t);
                    }
                  });
                  s.onDestroy(() => {
                    Cc(this._modules, s), t.unsubscribe();
                  });
                }),
                (function (t, e, n) {
                  try {
                    const r = n();
                    return Ni(r)
                      ? r.catch((n) => {
                          throw (
                            (e.runOutsideAngular(() => t.handleError(n)), n)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r);
                  }
                })(i, n, () => {
                  const t = s.injector.get(Da);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (
                        lo(s.injector.get(qa, ao) || ao),
                        this._moduleDoBootstrap(s),
                        s
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = Ec({}, e);
            return (function (t, e, n) {
              const r = new ga(n);
              return Promise.resolve(r);
            })(0, 0, t).then((t) => this.bootstrapModuleFactory(t, n));
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(xc);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach((t) => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${d(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bn(pi));
          }),
          (t.ɵprov = S({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Ec(t, e) {
        return Array.isArray(e)
          ? e.reduce(Ec, t)
          : Object.assign(Object.assign({}, t), e);
      }
      let xc = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this._zone = t),
              (this._injector = e),
              (this._exceptionHandler = n),
              (this._componentFactoryResolver = r),
              (this._initStatus = s),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe(
                {
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  }
                }
              ));
            const u = new i.a((t) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              h = new i.a((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    nc.assertNotInAngularZone(),
                      ec(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  nc.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = Object(o.a)(
              u,
              h.pipe((t) => Object(c.a)()(Object(a.a)(l)(t)))
            );
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n =
              t instanceof uo
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(Xo),
              s = n.create(pi.NULL, [], e || n.selector, r),
              i = s.location.nativeElement,
              o = s.injector.get(lc, null),
              a = o && s.injector.get(uc);
            return (
              o && a && a.registerApplication(i, o),
              s.onDestroy(() => {
                this.detachView(s.hostView),
                  Cc(this.components, s),
                  a && a.unregisterApplication(i);
              }),
              this._loadComponent(s),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error('ApplicationRef.tick is called recursively');
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(t)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            Cc(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get($a, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bn(nc), bn(pi), bn(br), bn(fo), bn(Da));
          }),
          (t.ɵprov = S({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Cc(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class Oc {}
      class Tc {}
      const kc = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      let jc = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || kc);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, r] = t.split('#');
            return (
              void 0 === r && (r = 'default'),
              n('zn8P')(e)
                .then((t) => t[r])
                .then((t) => Ac(t, e, r))
                .then((t) => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, r] = t.split('#'),
              s = 'NgFactory';
            return (
              void 0 === r && ((r = 'default'), (s = '')),
              n('zn8P')(
                this._config.factoryPathPrefix +
                  e +
                  this._config.factoryPathSuffix
              )
                .then((t) => t[r + s])
                .then((t) => Ac(t, e, r))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bn(Xa), bn(Tc, 8));
          }),
          (t.ɵprov = S({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Ac(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const Ic = function (t) {
          return null;
        },
        Pc = _c(null, 'core', [
          { provide: Ua, useValue: 'unknown' },
          { provide: Sc, deps: [pi] },
          { provide: uc, deps: [] },
          { provide: Va, deps: [] }
        ]),
        Nc = [
          { provide: xc, useClass: xc, deps: [nc, pi, br, fo, Da] },
          {
            provide: ha,
            deps: [nc],
            useFactory: function (t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function (t) {
                  e.push(t);
                }
              );
            }
          },
          { provide: Da, useClass: Da, deps: [[new Sn(), Ma]] },
          { provide: Xa, useClass: Xa, deps: [] },
          Fa,
          {
            provide: Do,
            useFactory: function () {
              return Wo;
            },
            deps: []
          },
          {
            provide: Fo,
            useFactory: function () {
              return Qo;
            },
            deps: []
          },
          {
            provide: qa,
            useFactory: function (t) {
              return (
                lo(
                  (t =
                    t ||
                    ('undefined' != typeof $localize && $localize.locale) ||
                    ao)
                ),
                t
              );
            },
            deps: [[new wn(qa), new Sn(), new En()]]
          },
          { provide: Ba, useValue: 'USD' }
        ];
      let Rc = (() => {
        class t {
          constructor(t) {}
        }
        return (
          (t.ɵmod = rt({ type: t })),
          (t.ɵinj = E({
            factory: function (e) {
              return new (e || t)(bn(xc));
            },
            providers: Nc
          })),
          t
        );
      })();
    },
    gRHU: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('2fFW'),
        s = n('NJ4a');
      const i = {
        closed: !0,
        next(t) {},
        error(t) {
          if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
          Object(s.a)(t);
        },
        complete() {}
      };
    },
    iInd: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return Rn;
      }),
        n.d(e, 'b', function () {
          return $n;
        }),
        n.d(e, 'c', function () {
          return In;
        });
      var r = n('ofXK'),
        s = n('fXoL'),
        i = n('Cfvw'),
        o = n('LRne'),
        a = n('XNiG'),
        c = n('9ppp');
      class l extends a.a {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new c.a();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      var u = n('z+Ro'),
        h = n('DH7j'),
        d = n('7o/Q');
      class f extends d.a {
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
      class p extends d.a {
        constructor(t, e, n) {
          super(),
            (this.parent = t),
            (this.outerValue = e),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      var m = n('SeVD'),
        g = n('HDdC');
      function y(t, e, n, r, s = new p(t, n, r)) {
        if (!s.closed)
          return e instanceof g.a ? e.subscribe(s) : Object(m.a)(e)(s);
      }
      var b = n('yCtX');
      const v = {};
      class _ {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new w(t, this.resultSelector));
        }
      }
      class w extends f {
        constructor(t, e) {
          super(t),
            (this.resultSelector = e),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(t) {
          this.values.push(v), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) this.add(y(this, t[n], void 0, n));
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n) {
          const r = this.values,
            s = this.toRespond
              ? r[n] === v
                ? --this.toRespond
                : this.toRespond
              : 0;
          (r[n] = e),
            0 === s &&
              (this.resultSelector
                ? this._tryResultSelector(r)
                : this.destination.next(r.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const S = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = 'no elements in sequence'),
            (this.name = 'EmptyError'),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      var E = n('GyhO'),
        x = n('NXyV'),
        C = n('EY2u'),
        O = n('EQ5u'),
        T = n('lJxs'),
        k = n('eIep'),
        j = n('IzEk');
      function A(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new I(t, e, n));
          }
        );
      }
      class I {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(
            new P(t, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class P extends d.a {
        constructor(t, e, n, r) {
          super(t),
            (this.accumulator = e),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      var N = n('pLZG'),
        R = n('zx2A');
      function M(t) {
        return function (e) {
          const n = new D(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class D {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new L(t, this.selector, this.caught));
        }
      }
      class L extends R.b {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new R.a(this);
            this.add(r);
            const s = Object(R.c)(n, r);
            s !== r && this.add(s);
          }
        }
      }
      var F = n('5+tZ');
      function z(t, e) {
        return Object(F.a)(t, e, 1);
      }
      var H = n('4I5i');
      function U(t) {
        return function (e) {
          return 0 === t ? Object(C.b)() : e.lift(new $(t));
        };
      }
      class $ {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new H.a();
        }
        call(t, e) {
          return e.subscribe(new V(t, this.total));
        }
      }
      class V extends d.a {
        constructor(t, e) {
          super(t),
            (this.total = e),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = e++ % n;
              t.next(r[s]);
            }
          }
          t.complete();
        }
      }
      function q(t = Q) {
        return (e) => e.lift(new B(t));
      }
      class B {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new W(t, this.errorFactory));
        }
      }
      class W extends d.a {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function Q() {
        return new S();
      }
      function G(t = null) {
        return (e) => e.lift(new Z(t));
      }
      class Z {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new K(t, this.defaultValue));
        }
      }
      class K extends d.a {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      var J = n('SpAZ');
      function Y(t, e) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            t ? Object(N.a)((e, n) => t(e, n, r)) : J.a,
            Object(j.a)(1),
            n ? G(e) : q(() => new S())
          );
      }
      var X = n('vkgz'),
        tt = n('x+ZX'),
        et = n('quSY');
      class nt {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new rt(t, this.callback));
        }
      }
      class rt extends d.a {
        constructor(t, e) {
          super(t), this.add(new et.a(e));
        }
      }
      var st = n('bHdf');
      class it {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class ot extends it {
        constructor(t, e, n = 'imperative', r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class at extends it {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class ct extends it {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class lt extends it {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class ut extends it {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ht extends it {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class dt extends it {
        constructor(t, e, n, r, s) {
          super(t, e),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class ft extends it {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class pt extends it {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class mt {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class gt {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class yt {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class bt {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class vt {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class _t {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class wt {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      const St = 'primary';
      class Et {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return Object.prototype.hasOwnProperty.call(this.params, t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function xt(t) {
        return new Et(t);
      }
      function Ct(t) {
        const e = Error('NavigationCancelingError: ' + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function Ot(t, e, n) {
        const r = n.path.split('/');
        if (r.length > t.length) return null;
        if ('full' === n.pathMatch && (e.hasChildren() || r.length < t.length))
          return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const e = r[i],
            n = t[i];
          if (e.startsWith(':')) s[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: s };
      }
      function Tt(t, e) {
        const n = t ? Object.keys(t) : void 0,
          r = e ? Object.keys(e) : void 0;
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++)
          if (((s = n[i]), !kt(t[s], e[s]))) return !1;
        return !0;
      }
      function kt(t, e) {
        if (Array.isArray(t) && Array.isArray(e)) {
          if (t.length !== e.length) return !1;
          const n = [...t].sort(),
            r = [...e].sort();
          return n.every((t, e) => r[e] === t);
        }
        return t === e;
      }
      function jt(t) {
        return Array.prototype.concat.apply([], t);
      }
      function At(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function It(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function Pt(t) {
        return Object(s.nb)(t)
          ? t
          : Object(s.ob)(t)
          ? Object(i.a)(Promise.resolve(t))
          : Object(o.a)(t);
      }
      function Nt(t, e, n) {
        return n
          ? (function (t, e) {
              return Tt(t, e);
            })(t.queryParams, e.queryParams) && Rt(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every((n) => kt(t[n], e[n]))
              );
            })(t.queryParams, e.queryParams) && Mt(t.root, e.root);
      }
      function Rt(t, e) {
        if (!Ht(t.segments, e.segments)) return !1;
        if (t.numberOfChildren !== e.numberOfChildren) return !1;
        for (const n in e.children) {
          if (!t.children[n]) return !1;
          if (!Rt(t.children[n], e.children[n])) return !1;
        }
        return !0;
      }
      function Mt(t, e) {
        return Dt(t, e, e.segments);
      }
      function Dt(t, e, n) {
        if (t.segments.length > n.length)
          return !!Ht(t.segments.slice(0, n.length), n) && !e.hasChildren();
        if (t.segments.length === n.length) {
          if (!Ht(t.segments, n)) return !1;
          for (const n in e.children) {
            if (!t.children[n]) return !1;
            if (!Mt(t.children[n], e.children[n])) return !1;
          }
          return !0;
        }
        {
          const r = n.slice(0, t.segments.length),
            s = n.slice(t.segments.length);
          return (
            !!Ht(t.segments, r) &&
            !!t.children.primary &&
            Dt(t.children.primary, e, s)
          );
        }
      }
      class Lt {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = xt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Vt.serialize(this);
        }
      }
      class Ft {
        constructor(t, e) {
          (this.segments = t),
            (this.children = e),
            (this.parent = null),
            It(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return qt(this);
        }
      }
      class zt {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = xt(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Jt(this);
        }
      }
      function Ht(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      class Ut {}
      class $t {
        parse(t) {
          const e = new ne(t);
          return new Lt(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment()
          );
        }
        serialize(t) {
          var e;
          return `/${Bt(t.root, !0)}${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e];
              return Array.isArray(n)
                ? n.map((t) => `${Qt(e)}=${Qt(t)}`).join('&')
                : `${Qt(e)}=${Qt(n)}`;
            });
            return e.length ? `?${e.join('&')}` : '';
          })(t.queryParams)}${
            'string' == typeof t.fragment
              ? `#${((e = t.fragment), encodeURI(e))}`
              : ''
          }`;
        }
      }
      const Vt = new $t();
      function qt(t) {
        return t.segments.map((t) => Jt(t)).join('/');
      }
      function Bt(t, e) {
        if (!t.hasChildren()) return qt(t);
        if (e) {
          const e = t.children.primary ? Bt(t.children.primary, !1) : '',
            n = [];
          return (
            It(t.children, (t, e) => {
              e !== St && n.push(`${e}:${Bt(t, !1)}`);
            }),
            n.length > 0 ? `${e}(${n.join('//')})` : e
          );
        }
        {
          const e = (function (t, e) {
            let n = [];
            return (
              It(t.children, (t, r) => {
                r === St && (n = n.concat(e(t, r)));
              }),
              It(t.children, (t, r) => {
                r !== St && (n = n.concat(e(t, r)));
              }),
              n
            );
          })(t, (e, n) =>
            n === St ? [Bt(t.children.primary, !1)] : [`${n}:${Bt(e, !1)}`]
          );
          return 1 === Object.keys(t.children).length &&
            null != t.children.primary
            ? `${qt(t)}/${e[0]}`
            : `${qt(t)}/(${e.join('//')})`;
        }
      }
      function Wt(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Qt(t) {
        return Wt(t).replace(/%3B/gi, ';');
      }
      function Gt(t) {
        return Wt(t)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function Zt(t) {
        return decodeURIComponent(t);
      }
      function Kt(t) {
        return Zt(t.replace(/\+/g, '%20'));
      }
      function Jt(t) {
        return `${Gt(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${Gt(t)}=${Gt(e[t])}`)
            .join(''))
        }`;
        var e;
      }
      const Yt = /^[^\/()?;=#]+/;
      function Xt(t) {
        const e = t.match(Yt);
        return e ? e[0] : '';
      }
      const te = /^[^=?&#]+/,
        ee = /^[^?&#]+/;
      class ne {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new Ft([], {})
              : new Ft([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional('&'));
          return t;
        }
        parseFragment() {
          return this.consumeOptional('#')
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const t = [];
          for (
            this.peekStartsWith('(') || t.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith('/(') &&
            (this.capture('/'), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) &&
              (n.primary = new Ft(t, e)),
            n
          );
        }
        parseSegment() {
          const t = Xt(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(t), new zt(Zt(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = Xt(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = Xt(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[Zt(e)] = Zt(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(te);
            return e ? e[0] : '';
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = (function (t) {
              const e = t.match(ee);
              return e ? e[0] : '';
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = Kt(e),
            s = Kt(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(s);
          } else t[r] = s;
        }
        parseParens(t) {
          const e = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const n = Xt(this.remaining),
              r = this.remaining[n.length];
            if ('/' !== r && ')' !== r && ';' !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s;
            n.indexOf(':') > -1
              ? ((s = n.substr(0, n.indexOf(':'))),
                this.capture(s),
                this.capture(':'))
              : t && (s = St);
            const i = this.parseChildren();
            (e[s] = 1 === Object.keys(i).length ? i.primary : new Ft([], i)),
              this.consumeOptional('//');
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class re {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = se(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = se(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = ie(t, this._root);
          return e.length < 2
            ? []
            : e[e.length - 2].children
                .map((t) => t.value)
                .filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return ie(t, this._root).map((t) => t.value);
        }
      }
      function se(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = se(t, n);
          if (e) return e;
        }
        return null;
      }
      function ie(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = ie(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class oe {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function ae(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class ce extends re {
        constructor(t, e) {
          super(t), (this.snapshot = e), pe(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function le(t, e) {
        const n = (function (t, e) {
            const n = new de([], {}, {}, '', {}, St, e, null, t.root, -1, {});
            return new fe('', new oe(n, []));
          })(t, e),
          r = new l([new zt('', {})]),
          s = new l({}),
          i = new l({}),
          o = new l({}),
          a = new l(''),
          c = new ue(r, s, o, a, i, St, e, n.root);
        return (c.snapshot = n.root), new ce(new oe(c, []), n);
      }
      class ue {
        constructor(t, e, n, r, s, i, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(Object(T.a)((t) => xt(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                Object(T.a)((t) => xt(t))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function he(t, e = 'emptyOnly') {
        const n = t.pathFromRoot;
        let r = 0;
        if ('always' !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && '' === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(
                Object.assign({}, t.resolve),
                e._resolvedData
              )
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class de {
        constructor(t, e, n, r, s, i, o, a, c, l, u) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = c),
            (this._lastPathIndex = l),
            (this._resolve = u);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = xt(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = xt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((t) => t.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class fe extends re {
        constructor(t, e) {
          super(e), (this.url = t), pe(this, e);
        }
        toString() {
          return me(this._root);
        }
      }
      function pe(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => pe(t, e));
      }
      function me(t) {
        const e =
          t.children.length > 0 ? ` { ${t.children.map(me).join(', ')} } ` : '';
        return `${t.value}${e}`;
      }
      function ge(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            Tt(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            Tt(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!Tt(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            Tt(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function ye(t, e) {
        var n, r;
        return (
          Tt(t.params, e.params) &&
          Ht((n = t.url), (r = e.url)) &&
          n.every((t, e) => Tt(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || ye(t.parent, e.parent))
        );
      }
      function be(t, e, n) {
        if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = e.value;
          const s = (function (t, e, n) {
            return e.children.map((e) => {
              for (const r of n.children)
                if (t.shouldReuseRoute(e.value, r.value.snapshot))
                  return be(t, e, r);
              return be(t, e);
            });
          })(t, e, n);
          return new oe(r, s);
        }
        {
          const n = t.retrieve(e.value);
          if (n) {
            const t = n.route;
            return ve(e, t), t;
          }
          {
            const n = new ue(
                new l((r = e.value).url),
                new l(r.params),
                new l(r.queryParams),
                new l(r.fragment),
                new l(r.data),
                r.outlet,
                r.component,
                r
              ),
              s = e.children.map((e) => be(t, e));
            return new oe(n, s);
          }
        }
        var r;
      }
      function ve(t, e) {
        if (t.value.routeConfig !== e.value.routeConfig)
          throw new Error(
            'Cannot reattach ActivatedRouteSnapshot created from a different route'
          );
        if (t.children.length !== e.children.length)
          throw new Error(
            'Cannot reattach ActivatedRouteSnapshot with a different number of children'
          );
        e.value._futureSnapshot = t.value;
        for (let n = 0; n < t.children.length; ++n)
          ve(t.children[n], e.children[n]);
      }
      function _e(t) {
        return (
          'object' == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function we(t) {
        return 'object' == typeof t && null != t && t.outlets;
      }
      function Se(t, e, n, r, s) {
        let i = {};
        return (
          r &&
            It(r, (t, e) => {
              i[e] = Array.isArray(t) ? t.map((t) => `${t}`) : `${t}`;
            }),
          new Lt(n.root === t ? e : Ee(n.root, t, e), i, s)
        );
      }
      function Ee(t, e, n) {
        const r = {};
        return (
          It(t.children, (t, s) => {
            r[s] = t === e ? n : Ee(t, e, n);
          }),
          new Ft(t.segments, r)
        );
      }
      class xe {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = n),
            t && n.length > 0 && _e(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const r = n.find(we);
          if (r && r !== At(n))
            throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class Ce {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function Oe(t, e, n) {
        if (
          (t || (t = new Ft([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return Te(t, e, n);
        const r = (function (t, e, n) {
            let r = 0,
              s = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < t.segments.length; ) {
              if (r >= n.length) return i;
              const e = t.segments[s],
                o = n[r];
              if (we(o)) break;
              const a = `${o}`,
                c = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === a) break;
              if (a && c && 'object' == typeof c && void 0 === c.outlets) {
                if (!Ie(a, c, e)) return i;
                r += 2;
              } else {
                if (!Ie(a, {}, e)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(t, e, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new Ft(t.segments.slice(0, r.pathIndex), {});
          return (
            (e.children.primary = new Ft(
              t.segments.slice(r.pathIndex),
              t.children
            )),
            Te(e, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new Ft(t.segments, {})
          : r.match && !t.hasChildren()
          ? ke(t, e, n)
          : r.match
          ? Te(t, 0, s)
          : ke(t, e, n);
      }
      function Te(t, e, n) {
        if (0 === n.length) return new Ft(t.segments, {});
        {
          const r = (function (t) {
              return we(t[0]) ? t[0].outlets : { [St]: t };
            })(n),
            s = {};
          return (
            It(r, (n, r) => {
              'string' == typeof n && (n = [n]),
                null !== n && (s[r] = Oe(t.children[r], e, n));
            }),
            It(t.children, (t, e) => {
              void 0 === r[e] && (s[e] = t);
            }),
            new Ft(t.segments, s)
          );
        }
      }
      function ke(t, e, n) {
        const r = t.segments.slice(0, e);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if (we(i)) {
            const t = je(i.outlets);
            return new Ft(r, t);
          }
          if (0 === s && _e(n[0])) {
            r.push(new zt(t.segments[e].path, Ae(n[0]))), s++;
            continue;
          }
          const o = we(i) ? i.outlets.primary : `${i}`,
            a = s < n.length - 1 ? n[s + 1] : null;
          o && a && _e(a)
            ? (r.push(new zt(o, Ae(a))), (s += 2))
            : (r.push(new zt(o, {})), s++);
        }
        return new Ft(r, {});
      }
      function je(t) {
        const e = {};
        return (
          It(t, (t, n) => {
            'string' == typeof t && (t = [t]),
              null !== t && (e[n] = ke(new Ft([], {}), 0, t));
          }),
          e
        );
      }
      function Ae(t) {
        const e = {};
        return It(t, (t, n) => (e[n] = `${t}`)), e;
      }
      function Ie(t, e, n) {
        return t == n.path && Tt(e, n.parameters);
      }
      class Pe {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t),
            ge(this.futureState.root),
            this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = ae(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            It(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(t, e, s.children);
            } else this.deactivateChildRoutes(t, e, n);
          else s && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: e,
              route: t,
              contexts: r
            });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet),
            r = n && t.value.component ? n.children : e,
            s = ae(t);
          for (const i of Object.keys(s))
            this.deactivateRouteAndItsChildren(s[i], r);
          n &&
            n.outlet &&
            (n.outlet.deactivate(), n.children.onOutletDeactivated());
        }
        activateChildRoutes(t, e, n) {
          const r = ae(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, r[t.value.outlet], n),
              this.forwardEvent(new _t(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new bt(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if ((ge(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, s.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                Ne(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = s),
                e.outlet && e.outlet.activateWith(r, s),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function Ne(t) {
        ge(t.value), t.children.forEach(Ne);
      }
      class Re {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function Me(t) {
        return 'function' == typeof t;
      }
      function De(t) {
        return t instanceof Lt;
      }
      const Le = Symbol('INITIAL_VALUE');
      function Fe() {
        return Object(k.a)((t) =>
          (function (...t) {
            let e, n;
            return (
              Object(u.a)(t[t.length - 1]) && (n = t.pop()),
              'function' == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && Object(h.a)(t[0]) && (t = t[0]),
              Object(b.a)(t, n).lift(new _(e))
            );
          })(
            t.map((t) =>
              t.pipe(
                Object(j.a)(1),
                (function (...t) {
                  const e = t[t.length - 1];
                  return Object(u.a)(e)
                    ? (t.pop(), (n) => Object(E.a)(t, n, e))
                    : (e) => Object(E.a)(t, e);
                })(Le)
              )
            )
          ).pipe(
            A((t, e) => {
              let n = !1;
              return e.reduce((t, r, s) => {
                if (t !== Le) return t;
                if ((r === Le && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === e.length - 1 || De(r)) return r;
                }
                return t;
              }, t);
            }, Le),
            Object(N.a)((t) => t !== Le),
            Object(T.a)((t) => (De(t) ? t : !0 === t)),
            Object(j.a)(1)
          )
        );
      }
      let ze = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = s.Ab({
            type: t,
            selectors: [['ng-component']],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && s.Hb(0, 'router-outlet');
            },
            directives: function () {
              return [In];
            },
            encapsulation: 2
          })),
          t
        );
      })();
      function He(t, e = '') {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          Ue(r, $e(e, r));
        }
      }
      function Ue(t, e) {
        t.children && He(t.children, e);
      }
      function $e(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? `${t}/`
              : !t && e.path
              ? e.path
              : `${t}/${e.path}`
            : ''
          : t;
      }
      function Ve(t) {
        const e = t.children && t.children.map(Ve),
          n = e
            ? Object.assign(Object.assign({}, t), { children: e })
            : Object.assign({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            n.outlet !== St &&
            (n.component = ze),
          n
        );
      }
      function qe(t) {
        return t.outlet || St;
      }
      function Be(t, e) {
        const n = t.filter((t) => qe(t) === e);
        return n.push(...t.filter((t) => qe(t) !== e)), n;
      }
      const We = {
        matched: !1,
        consumedSegments: [],
        lastChild: 0,
        parameters: {},
        positionalParamSegments: {}
      };
      function Qe(t, e, n) {
        var r;
        if ('' === e.path)
          return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? Object.assign({}, We)
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {}
              };
        const s = (e.matcher || Ot)(n, t, e);
        if (!s) return Object.assign({}, We);
        const i = {};
        It(s.posParams, (t, e) => {
          i[e] = t.path;
        });
        const o =
          s.consumed.length > 0
            ? Object.assign(
                Object.assign({}, i),
                s.consumed[s.consumed.length - 1].parameters
              )
            : i;
        return {
          matched: !0,
          consumedSegments: s.consumed,
          lastChild: s.consumed.length,
          parameters: o,
          positionalParamSegments:
            null !== (r = s.posParams) && void 0 !== r ? r : {}
        };
      }
      function Ge(t, e, n, r, s = 'corrected') {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => Ze(t, e, n) && qe(n) !== St);
          })(t, n, r)
        ) {
          const s = new Ft(
            e,
            (function (t, e, n, r) {
              const s = {};
              (s.primary = r),
                (r._sourceSegment = t),
                (r._segmentIndexShift = e.length);
              for (const i of n)
                if ('' === i.path && qe(i) !== St) {
                  const n = new Ft([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = e.length),
                    (s[qe(i)] = n);
                }
              return s;
            })(t, e, r, new Ft(n, t.children))
          );
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = e.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => Ze(t, e, n));
          })(t, n, r)
        ) {
          const i = new Ft(
            t.segments,
            (function (t, e, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (Ze(t, n, a) && !s[qe(a)]) {
                  const n = new Ft([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift =
                      'legacy' === i ? t.segments.length : e.length),
                    (o[qe(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(t, e, n, r, t.children, s)
          );
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new Ft(t.segments, t.children);
        return (
          (i._sourceSegment = t),
          (i._segmentIndexShift = e.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function Ze(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path
        );
      }
      function Ke(t, e, n, r) {
        return (
          !!(qe(t) === r || (r !== St && Ze(e, n, t))) &&
          ('**' === t.path || Qe(e, t, n).matched)
        );
      }
      function Je(t, e, n) {
        return 0 === e.length && !t.children[n];
      }
      class Ye {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class Xe {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function tn(t) {
        return new g.a((e) => e.error(new Ye(t)));
      }
      function en(t) {
        return new g.a((e) => e.error(new Xe(t)));
      }
      function nn(t) {
        return new g.a((e) =>
          e.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${t}'`
            )
          )
        );
      }
      class rn {
        constructor(t, e, n, r, i) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(s.y));
        }
        apply() {
          const t = Ge(this.urlTree.root, [], [], this.config).segmentGroup,
            e = new Ft(t.segments, t.children);
          return this.expandSegmentGroup(this.ngModule, this.config, e, St)
            .pipe(
              Object(T.a)((t) =>
                this.createUrlTree(
                  sn(t),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              M((t) => {
                if (t instanceof Xe)
                  return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof Ye) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, St)
            .pipe(
              Object(T.a)((e) =>
                this.createUrlTree(sn(e), t.queryParams, t.fragment)
              )
            )
            .pipe(
              M((t) => {
                if (t instanceof Ye) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`
          );
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new Ft([], { [St]: t }) : t;
          return new Lt(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(
                Object(T.a)((t) => new Ft([], t))
              )
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          const r = [];
          for (const s of Object.keys(n.children))
            'primary' === s ? r.unshift(s) : r.push(s);
          return Object(i.a)(r).pipe(
            z((r) => {
              const s = n.children[r],
                i = Be(e, r);
              return this.expandSegmentGroup(t, i, s, r).pipe(
                Object(T.a)((t) => ({ segment: t, outlet: r }))
              );
            }),
            A((t, e) => ((t[e.outlet] = e.segment), t), {}),
            (function (t, e) {
              const n = arguments.length >= 2;
              return (r) =>
                r.pipe(
                  t ? Object(N.a)((e, n) => t(e, n, r)) : J.a,
                  U(1),
                  n ? G(e) : q(() => new S())
                );
            })()
          );
        }
        expandSegment(t, e, n, r, s, a) {
          return Object(i.a)(n).pipe(
            z((i) =>
              this.expandSegmentAgainstRoute(t, e, n, i, r, s, a).pipe(
                M((t) => {
                  if (t instanceof Ye) return Object(o.a)(null);
                  throw t;
                })
              )
            ),
            Y((t) => !!t),
            M((t, n) => {
              if (t instanceof S || 'EmptyError' === t.name) {
                if (Je(e, r, s)) return Object(o.a)(new Ft([], {}));
                throw new Ye(e);
              }
              throw t;
            })
          );
        }
        expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
          return Ke(r, e, s, i)
            ? void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(t, e, r, s, i)
              : o && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
              : tn(e)
            : tn(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                r,
                s,
                i
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? en(s)
            : this.lineralizeSegments(n, s).pipe(
                Object(F.a)((n) => {
                  const s = new Ft(n, {});
                  return this.expandSegment(t, s, e, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: c,
            positionalParamSegments: l
          } = Qe(e, r, s);
          if (!o) return tn(e);
          const u = this.applyRedirectCommands(a, r.redirectTo, l);
          return r.redirectTo.startsWith('/')
            ? en(u)
            : this.lineralizeSegments(r, u).pipe(
                Object(F.a)((r) =>
                  this.expandSegment(t, e, n, r.concat(s.slice(c)), i, !1)
                )
              );
        }
        matchSegmentAgainstRoute(t, e, n, r, s) {
          if ('**' === n.path)
            return n.loadChildren
              ? (n._loadedConfig
                  ? Object(o.a)(n._loadedConfig)
                  : this.configLoader.load(t.injector, n)
                ).pipe(
                  Object(T.a)((t) => ((n._loadedConfig = t), new Ft(r, {})))
                )
              : Object(o.a)(new Ft(r, {}));
          const { matched: i, consumedSegments: a, lastChild: c } = Qe(e, n, r);
          if (!i) return tn(e);
          const l = r.slice(c);
          return this.getChildConfig(t, n, r).pipe(
            Object(F.a)((t) => {
              const r = t.module,
                i = t.routes,
                { segmentGroup: c, slicedSegments: u } = Ge(e, a, l, i),
                h = new Ft(c.segments, c.children);
              if (0 === u.length && h.hasChildren())
                return this.expandChildren(r, i, h).pipe(
                  Object(T.a)((t) => new Ft(a, t))
                );
              if (0 === i.length && 0 === u.length)
                return Object(o.a)(new Ft(a, {}));
              const d = qe(n) === s;
              return this.expandSegment(r, h, i, u, d ? St : s, !0).pipe(
                Object(T.a)((t) => new Ft(a.concat(t.segments), t.children))
              );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? Object(o.a)(new Re(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? Object(o.a)(e._loadedConfig)
              : this.runCanLoadGuards(t.injector, e, n).pipe(
                  Object(F.a)((n) =>
                    n
                      ? this.configLoader
                          .load(t.injector, e)
                          .pipe(Object(T.a)((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new g.a((e) =>
                            e.error(
                              Ct(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : Object(o.a)(new Re([], t));
        }
        runCanLoadGuards(t, e, n) {
          const r = e.canLoad;
          if (!r || 0 === r.length) return Object(o.a)(!0);
          const s = r.map((r) => {
            const s = t.get(r);
            let i;
            if (
              (function (t) {
                return t && Me(t.canLoad);
              })(s)
            )
              i = s.canLoad(e, n);
            else {
              if (!Me(s)) throw new Error('Invalid CanLoad guard');
              i = s(e, n);
            }
            return Pt(i);
          });
          return Object(o.a)(s).pipe(
            Fe(),
            Object(X.a)((t) => {
              if (!De(t)) return;
              const e = Ct(
                `Redirecting to "${this.urlSerializer.serialize(t)}"`
              );
              throw ((e.url = t), e);
            }),
            Object(T.a)((t) => !0 === t)
          );
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Object(o.a)(n);
            if (r.numberOfChildren > 1 || !r.children.primary)
              return nn(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n
          );
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const s = this.createSegmentGroup(t, e.root, n, r);
          return new Lt(
            s,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment
          );
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            It(t, (t, r) => {
              if ('string' == typeof t && t.startsWith(':')) {
                const s = t.substring(1);
                n[r] = e[s];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const s = this.createSegments(t, e.segments, n, r);
          let i = {};
          return (
            It(e.children, (e, s) => {
              i[s] = this.createSegmentGroup(t, e, n, r);
            }),
            new Ft(s, i)
          );
        }
        createSegments(t, e, n, r) {
          return e.map((e) =>
            e.path.startsWith(':')
              ? this.findPosParam(t, e, r)
              : this.findOrReturn(e, n)
          );
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${e.path}'.`
            );
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function sn(t) {
        const e = {};
        for (const n of Object.keys(t.children)) {
          const r = sn(t.children[n]);
          (r.segments.length > 0 || r.hasChildren()) && (e[n] = r);
        }
        return (function (t) {
          if (1 === t.numberOfChildren && t.children.primary) {
            const e = t.children.primary;
            return new Ft(t.segments.concat(e.segments), e.children);
          }
          return t;
        })(new Ft(t.segments, e));
      }
      class on {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class an {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function cn(t, e, n) {
        const r = t._root;
        return un(r, e ? e._root : null, n, [r.value]);
      }
      function ln(t, e, n) {
        const r = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function un(
        t,
        e,
        n,
        r,
        s = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const i = ae(e);
        return (
          t.children.forEach((t) => {
            !(function (
              t,
              e,
              n,
              r,
              s = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const i = t.value,
                o = e ? e.value : null,
                a = n ? n.getContext(t.value.outlet) : null;
              if (o && i.routeConfig === o.routeConfig) {
                const c = (function (t, e, n) {
                  if ('function' == typeof n) return n(t, e);
                  switch (n) {
                    case 'pathParamsChange':
                      return !Ht(t.url, e.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !Ht(t.url, e.url) || !Tt(t.queryParams, e.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !ye(t, e) || !Tt(t.queryParams, e.queryParams);
                    case 'paramsChange':
                    default:
                      return !ye(t, e);
                  }
                })(o, i, i.routeConfig.runGuardsAndResolvers);
                c
                  ? s.canActivateChecks.push(new on(r))
                  : ((i.data = o.data), (i._resolvedData = o._resolvedData)),
                  un(t, e, i.component ? (a ? a.children : null) : n, r, s),
                  c &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    s.canDeactivateChecks.push(new an(a.outlet.component, o));
              } else
                o && hn(e, a, s),
                  s.canActivateChecks.push(new on(r)),
                  un(t, null, i.component ? (a ? a.children : null) : n, r, s);
            })(t, i[t.value.outlet], n, r.concat([t.value]), s),
              delete i[t.value.outlet];
          }),
          It(i, (t, e) => hn(t, n.getContext(e), s)),
          s
        );
      }
      function hn(t, e, n) {
        const r = ae(t),
          s = t.value;
        It(r, (t, r) => {
          hn(t, s.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new an(
              s.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              s
            )
          );
      }
      class dn {}
      function fn(t) {
        return new g.a((e) => e.error(t));
      }
      class pn {
        constructor(t, e, n, r, s, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          const t = Ge(
              this.urlTree.root,
              [],
              [],
              this.config.filter((t) => void 0 === t.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            e = this.processSegmentGroup(this.config, t, St);
          if (null === e) return null;
          const n = new de(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              St,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            r = new oe(n, e),
            s = new fe(this.url, r);
          return this.inheritParamsAndData(s._root), s;
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = he(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = [];
          for (const s of Object.keys(e.children)) {
            const r = e.children[s],
              i = Be(t, s),
              o = this.processSegmentGroup(i, r, s);
            if (null === o) return null;
            n.push(...o);
          }
          const r = (function (t) {
            const e = [];
            for (const n of t) {
              if (!mn(n)) {
                e.push(n);
                continue;
              }
              const t = e.find(
                (t) => n.value.routeConfig === t.value.routeConfig
              );
              void 0 !== t ? t.children.push(...n.children) : e.push(n);
            }
            return e;
          })(n);
          return (
            r.sort((t, e) =>
              t.value.outlet === St
                ? -1
                : e.value.outlet === St
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            r
          );
        }
        processSegment(t, e, n, r) {
          for (const s of t) {
            const t = this.processSegmentAgainstRoute(s, e, n, r);
            if (null !== t) return t;
          }
          return Je(e, n, r) ? [] : null;
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo || !Ke(t, e, n, r)) return null;
          let s,
            i = [],
            o = [];
          if ('**' === t.path) {
            const r = n.length > 0 ? At(n).parameters : {};
            s = new de(
              n,
              r,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              bn(t),
              qe(t),
              t.component,
              t,
              gn(e),
              yn(e) + n.length,
              vn(t)
            );
          } else {
            const r = Qe(e, t, n);
            if (!r.matched) return null;
            (i = r.consumedSegments),
              (o = n.slice(r.lastChild)),
              (s = new de(
                i,
                r.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                bn(t),
                qe(t),
                t.component,
                t,
                gn(e),
                yn(e) + i.length,
                vn(t)
              ));
          }
          const a = (function (t) {
              return t.children
                ? t.children
                : t.loadChildren
                ? t._loadedConfig.routes
                : [];
            })(t),
            { segmentGroup: c, slicedSegments: l } = Ge(
              e,
              i,
              o,
              a.filter((t) => void 0 === t.redirectTo),
              this.relativeLinkResolution
            );
          if (0 === l.length && c.hasChildren()) {
            const t = this.processChildren(a, c);
            return null === t ? null : [new oe(s, t)];
          }
          if (0 === a.length && 0 === l.length) return [new oe(s, [])];
          const u = qe(t) === r,
            h = this.processSegment(a, c, l, u ? St : r);
          return null === h ? null : [new oe(s, h)];
        }
      }
      function mn(t) {
        const e = t.value.routeConfig;
        return e && '' === e.path && void 0 === e.redirectTo;
      }
      function gn(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function yn(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; )
          (e = e._sourceSegment),
            (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function bn(t) {
        return t.data || {};
      }
      function vn(t) {
        return t.resolve || {};
      }
      function _n(t) {
        return Object(k.a)((e) => {
          const n = t(e);
          return n ? Object(i.a)(n).pipe(Object(T.a)(() => e)) : Object(o.a)(e);
        });
      }
      class wn extends class {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      } {}
      const Sn = new s.r('ROUTES');
      class En {
        constructor(t, e, n, r) {
          (this.loader = t),
            (this.compiler = e),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(t, e) {
          if (e._loader$) return e._loader$;
          this.onLoadStartListener && this.onLoadStartListener(e);
          const n = this.loadModuleFactory(e.loadChildren).pipe(
            Object(T.a)((n) => {
              this.onLoadEndListener && this.onLoadEndListener(e);
              const r = n.create(t);
              return new Re(
                jt(r.injector.get(Sn, void 0, s.q.Self | s.q.Optional)).map(Ve),
                r
              );
            }),
            M((t) => {
              throw ((e._loader$ = void 0), t);
            })
          );
          return (
            (e._loader$ = new O.a(n, () => new a.a()).pipe(Object(tt.a)())),
            e._loader$
          );
        }
        loadModuleFactory(t) {
          return 'string' == typeof t
            ? Object(i.a)(this.loader.load(t))
            : Pt(t()).pipe(
                Object(F.a)((t) =>
                  t instanceof s.w
                    ? Object(o.a)(t)
                    : Object(i.a)(this.compiler.compileModuleAsync(t))
                )
              );
        }
      }
      class xn {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Cn()),
            (this.attachRef = null);
        }
      }
      class Cn {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new xn()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      class On {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function Tn(t) {
        throw t;
      }
      function kn(t, e, n) {
        return e.parse('/');
      }
      function jn(t, e) {
        return Object(o.a)(null);
      }
      let An = (() => {
          class t {
            constructor(t, e, n, r, i, o, c, u) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = u),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.disposed = !1),
                (this.lastLocationChangeInfo = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new a.a()),
                (this.errorHandler = Tn),
                (this.malformedUriErrorHandler = kn),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: jn,
                  afterPreactivation: jn
                }),
                (this.urlHandlingStrategy = new On()),
                (this.routeReuseStrategy = new wn()),
                (this.onSameUrlNavigation = 'ignore'),
                (this.paramsInheritanceStrategy = 'emptyOnly'),
                (this.urlUpdateStrategy = 'deferred'),
                (this.relativeLinkResolution = 'corrected'),
                (this.ngModule = i.get(s.y)),
                (this.console = i.get(s.V));
              const h = i.get(s.A);
              (this.isNgZoneEnabled =
                h instanceof s.A && s.A.isInAngularZone()),
                this.resetConfig(u),
                (this.currentUrlTree = new Lt(new Ft([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new En(
                  o,
                  c,
                  (t) => this.triggerEvent(new mt(t)),
                  (t) => this.triggerEvent(new gt(t))
                )),
                (this.routerState = le(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new l({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: 'imperative',
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                Object(N.a)((t) => 0 !== t.id),
                Object(T.a)((t) =>
                  Object.assign(Object.assign({}, t), {
                    extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
                  })
                ),
                Object(k.a)((t) => {
                  let n = !1,
                    r = !1;
                  return Object(o.a)(t).pipe(
                    Object(X.a)((t) => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(
                              Object.assign({}, this.lastSuccessfulNavigation),
                              { previousNavigation: null }
                            )
                          : null
                      };
                    }),
                    Object(k.a)((t) => {
                      const n =
                        !this.navigated ||
                        t.extractedUrl.toString() !==
                          this.browserUrlTree.toString();
                      if (
                        ('reload' === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return Object(o.a)(t).pipe(
                          Object(k.a)((t) => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(
                                new ot(
                                  t.id,
                                  this.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState
                                )
                              ),
                              n !== this.transitions.getValue()
                                ? C.a
                                : Promise.resolve(t)
                            );
                          }),
                          ((r = this.ngModule.injector),
                          (s = this.configLoader),
                          (i = this.urlSerializer),
                          (a = this.config),
                          Object(k.a)((t) =>
                            (function (t, e, n, r, s) {
                              return new rn(t, e, n, r, s).apply();
                            })(r, s, i, t.extractedUrl, a).pipe(
                              Object(T.a)((e) =>
                                Object.assign(Object.assign({}, t), {
                                  urlAfterRedirects: e
                                })
                              )
                            )
                          )),
                          Object(X.a)((t) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: t.urlAfterRedirects }
                            );
                          }),
                          (function (t, e, n, r, s) {
                            return Object(F.a)((i) =>
                              (function (
                                t,
                                e,
                                n,
                                r,
                                s = 'emptyOnly',
                                i = 'legacy'
                              ) {
                                try {
                                  const a = new pn(
                                    t,
                                    e,
                                    n,
                                    r,
                                    s,
                                    i
                                  ).recognize();
                                  return null === a
                                    ? fn(new dn())
                                    : Object(o.a)(a);
                                } catch (a) {
                                  return fn(a);
                                }
                              })(
                                t,
                                e,
                                i.urlAfterRedirects,
                                n(i.urlAfterRedirects),
                                r,
                                s
                              ).pipe(
                                Object(T.a)((t) =>
                                  Object.assign(Object.assign({}, i), {
                                    targetSnapshot: t
                                  })
                                )
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (t) => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          Object(X.a)((t) => {
                            'eager' === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(
                                  t.urlAfterRedirects,
                                  !!t.extras.replaceUrl,
                                  t.id,
                                  t.extras.state
                                ),
                              (this.browserUrlTree = t.urlAfterRedirects));
                            const n = new ut(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.next(n);
                          })
                        );
                      var r, s, i, a;
                      if (
                        n &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          this.rawUrlTree
                        )
                      ) {
                        const {
                            id: n,
                            extractedUrl: r,
                            source: s,
                            restoredState: i,
                            extras: a
                          } = t,
                          c = new ot(n, this.serializeUrl(r), s, i);
                        e.next(c);
                        const l = le(r, this.rootComponentType).snapshot;
                        return Object(o.a)(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, a), {
                              skipLocationChange: !1,
                              replaceUrl: !1
                            })
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl),
                        (this.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        C.a
                      );
                    }),
                    _n((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o }
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o
                      });
                    }),
                    Object(X.a)((t) => {
                      const e = new ht(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      this.triggerEvent(e);
                    }),
                    Object(T.a)((t) =>
                      Object.assign(Object.assign({}, t), {
                        guards: cn(
                          t.targetSnapshot,
                          t.currentSnapshot,
                          this.rootContexts
                        )
                      })
                    ),
                    (function (t, e) {
                      return Object(F.a)((n) => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: s,
                          guards: {
                            canActivateChecks: a,
                            canDeactivateChecks: c
                          }
                        } = n;
                        return 0 === c.length && 0 === a.length
                          ? Object(o.a)(
                              Object.assign(Object.assign({}, n), {
                                guardsResult: !0
                              })
                            )
                          : (function (t, e, n, r) {
                              return Object(i.a)(t).pipe(
                                Object(F.a)((t) =>
                                  (function (t, e, n, r, s) {
                                    const i =
                                      e && e.routeConfig
                                        ? e.routeConfig.canDeactivate
                                        : null;
                                    if (!i || 0 === i.length)
                                      return Object(o.a)(!0);
                                    const a = i.map((i) => {
                                      const o = ln(i, e, s);
                                      let a;
                                      if (
                                        (function (t) {
                                          return t && Me(t.canDeactivate);
                                        })(o)
                                      )
                                        a = Pt(o.canDeactivate(t, e, n, r));
                                      else {
                                        if (!Me(o))
                                          throw new Error(
                                            'Invalid CanDeactivate guard'
                                          );
                                        a = Pt(o(t, e, n, r));
                                      }
                                      return a.pipe(Y());
                                    });
                                    return Object(o.a)(a).pipe(Fe());
                                  })(t.component, t.route, n, e, r)
                                ),
                                Y((t) => !0 !== t, !0)
                              );
                            })(c, r, s, t).pipe(
                              Object(F.a)((n) =>
                                n && 'boolean' == typeof n
                                  ? (function (t, e, n, r) {
                                      return Object(i.a)(e).pipe(
                                        z((e) =>
                                          Object(E.a)(
                                            (function (t, e) {
                                              return (
                                                null !== t && e && e(new yt(t)),
                                                Object(o.a)(!0)
                                              );
                                            })(e.route.parent, r),
                                            (function (t, e) {
                                              return (
                                                null !== t && e && e(new vt(t)),
                                                Object(o.a)(!0)
                                              );
                                            })(e.route, r),
                                            (function (t, e, n) {
                                              const r = e[e.length - 1],
                                                s = e
                                                  .slice(0, e.length - 1)
                                                  .reverse()
                                                  .map((t) =>
                                                    (function (t) {
                                                      const e = t.routeConfig
                                                        ? t.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return e && 0 !== e.length
                                                        ? { node: t, guards: e }
                                                        : null;
                                                    })(t)
                                                  )
                                                  .filter((t) => null !== t)
                                                  .map((e) =>
                                                    Object(x.a)(() => {
                                                      const s = e.guards.map(
                                                        (s) => {
                                                          const i = ln(
                                                            s,
                                                            e.node,
                                                            n
                                                          );
                                                          let o;
                                                          if (
                                                            (function (t) {
                                                              return (
                                                                t &&
                                                                Me(
                                                                  t.canActivateChild
                                                                )
                                                              );
                                                            })(i)
                                                          )
                                                            o = Pt(
                                                              i.canActivateChild(
                                                                r,
                                                                t
                                                              )
                                                            );
                                                          else {
                                                            if (!Me(i))
                                                              throw new Error(
                                                                'Invalid CanActivateChild guard'
                                                              );
                                                            o = Pt(i(r, t));
                                                          }
                                                          return o.pipe(Y());
                                                        }
                                                      );
                                                      return Object(o.a)(
                                                        s
                                                      ).pipe(Fe());
                                                    })
                                                  );
                                              return Object(o.a)(s).pipe(Fe());
                                            })(t, e.path, n),
                                            (function (t, e, n) {
                                              const r = e.routeConfig
                                                ? e.routeConfig.canActivate
                                                : null;
                                              if (!r || 0 === r.length)
                                                return Object(o.a)(!0);
                                              const s = r.map((r) =>
                                                Object(x.a)(() => {
                                                  const s = ln(r, e, n);
                                                  let i;
                                                  if (
                                                    (function (t) {
                                                      return (
                                                        t && Me(t.canActivate)
                                                      );
                                                    })(s)
                                                  )
                                                    i = Pt(s.canActivate(e, t));
                                                  else {
                                                    if (!Me(s))
                                                      throw new Error(
                                                        'Invalid CanActivate guard'
                                                      );
                                                    i = Pt(s(e, t));
                                                  }
                                                  return i.pipe(Y());
                                                })
                                              );
                                              return Object(o.a)(s).pipe(Fe());
                                            })(t, e.route, n)
                                          )
                                        ),
                                        Y((t) => !0 !== t, !0)
                                      );
                                    })(r, a, t, e)
                                  : Object(o.a)(n)
                              ),
                              Object(T.a)((t) =>
                                Object.assign(Object.assign({}, n), {
                                  guardsResult: t
                                })
                              )
                            );
                      });
                    })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                    Object(X.a)((t) => {
                      if (De(t.guardsResult)) {
                        const e = Ct(
                          `Redirecting to "${this.serializeUrl(
                            t.guardsResult
                          )}"`
                        );
                        throw ((e.url = t.guardsResult), e);
                      }
                      const e = new dt(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      this.triggerEvent(e);
                    }),
                    Object(N.a)((t) => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new ct(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          ''
                        );
                        return e.next(n), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    _n((t) => {
                      if (t.guards.canActivateChecks.length)
                        return Object(o.a)(t).pipe(
                          Object(X.a)((t) => {
                            const e = new ft(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          }),
                          Object(k.a)((t) => {
                            let n = !1;
                            return Object(o.a)(t).pipe(
                              ((r = this.paramsInheritanceStrategy),
                              (s = this.ngModule.injector),
                              Object(F.a)((t) => {
                                const {
                                  targetSnapshot: e,
                                  guards: { canActivateChecks: n }
                                } = t;
                                if (!n.length) return Object(o.a)(t);
                                let a = 0;
                                return Object(i.a)(n).pipe(
                                  z((t) =>
                                    (function (t, e, n, r) {
                                      return (function (t, e, n, r) {
                                        const s = Object.keys(t);
                                        if (0 === s.length)
                                          return Object(o.a)({});
                                        const a = {};
                                        return Object(i.a)(s).pipe(
                                          Object(F.a)((s) =>
                                            (function (t, e, n, r) {
                                              const s = ln(t, e, r);
                                              return Pt(
                                                s.resolve
                                                  ? s.resolve(e, n)
                                                  : s(e, n)
                                              );
                                            })(t[s], e, n, r).pipe(
                                              Object(X.a)((t) => {
                                                a[s] = t;
                                              })
                                            )
                                          ),
                                          U(1),
                                          Object(F.a)(() =>
                                            Object.keys(a).length === s.length
                                              ? Object(o.a)(a)
                                              : C.a
                                          )
                                        );
                                      })(t._resolve, t, e, r).pipe(
                                        Object(T.a)(
                                          (e) => (
                                            (t._resolvedData = e),
                                            (t.data = Object.assign(
                                              Object.assign({}, t.data),
                                              he(t, n).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(t.route, e, r, s)
                                  ),
                                  Object(X.a)(() => a++),
                                  U(1),
                                  Object(F.a)((e) =>
                                    a === n.length ? Object(o.a)(t) : C.a
                                  )
                                );
                              })),
                              Object(X.a)({
                                next: () => (n = !0),
                                complete: () => {
                                  if (!n) {
                                    const n = new ct(
                                      t.id,
                                      this.serializeUrl(t.extractedUrl),
                                      "At least one route resolver didn't emit any value."
                                    );
                                    e.next(n), t.resolve(!1);
                                  }
                                }
                              })
                            );
                            var r, s;
                          }),
                          Object(X.a)((t) => {
                            const e = new pt(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          })
                        );
                    }),
                    _n((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o }
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o
                      });
                    }),
                    Object(T.a)((t) => {
                      const e = (function (t, e, n) {
                        const r = be(t, e._root, n ? n._root : void 0);
                        return new ce(r, e);
                      })(
                        this.routeReuseStrategy,
                        t.targetSnapshot,
                        t.currentRouterState
                      );
                      return Object.assign(Object.assign({}, t), {
                        targetRouterState: e
                      });
                    }),
                    Object(X.a)((t) => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          t.rawUrl
                        )),
                        (this.routerState = t.targetRouterState),
                        'deferred' === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              this.rawUrlTree,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            ),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((a = this.rootContexts),
                    (c = this.routeReuseStrategy),
                    (l = (t) => this.triggerEvent(t)),
                    Object(T.a)(
                      (t) => (
                        new Pe(
                          c,
                          t.targetRouterState,
                          t.currentRouterState,
                          l
                        ).activate(a),
                        t
                      )
                    )),
                    Object(X.a)({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      }
                    }),
                    ((s = () => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new ct(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        );
                        e.next(n), t.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    (t) => t.lift(new nt(s))),
                    M((n) => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = De(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl
                          ));
                        const s = new ct(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n.message
                        );
                        e.next(s),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(
                                  n.url,
                                  this.rawUrlTree
                                );
                                this.scheduleNavigation(
                                  e,
                                  'imperative',
                                  null,
                                  {
                                    skipLocationChange:
                                      t.extras.skipLocationChange,
                                    replaceUrl:
                                      'eager' === this.urlUpdateStrategy
                                  },
                                  {
                                    resolve: t.resolve,
                                    reject: t.reject,
                                    promise: t.promise
                                  }
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        this.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl
                        );
                        const r = new lt(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n
                        );
                        e.next(r);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var s;
                      return C.a;
                    })
                  );
                  var s, a, c, l;
                })
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(
                Object.assign(Object.assign({}, this.getTransition()), t)
              );
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0
                  });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  const e = this.extractLocationChangeInfoFromEvent(t);
                  this.shouldScheduleNavigation(
                    this.lastLocationChangeInfo,
                    e
                  ) &&
                    setTimeout(() => {
                      const { source: t, state: n, urlTree: r } = e,
                        s = { replaceUrl: !0 };
                      if (n) {
                        const t = Object.assign({}, n);
                        delete t.navigationId,
                          0 !== Object.keys(t).length && (s.state = t);
                      }
                      this.scheduleNavigation(r, t, n, s);
                    }, 0),
                    (this.lastLocationChangeInfo = e);
                }));
            }
            extractLocationChangeInfoFromEvent(t) {
              var e;
              return {
                source: 'popstate' === t.type ? 'popstate' : 'hashchange',
                urlTree: this.parseUrl(t.url),
                state: (
                  null === (e = t.state) || void 0 === e
                    ? void 0
                    : e.navigationId
                )
                  ? t.state
                  : null,
                transitionId: this.getTransition().id
              };
            }
            shouldScheduleNavigation(t, e) {
              if (!t) return !0;
              const n = e.urlTree.toString() === t.urlTree.toString();
              return !(
                e.transitionId === t.transitionId &&
                n &&
                (('hashchange' === e.source && 'popstate' === t.source) ||
                  ('popstate' === e.source && 'hashchange' === t.source))
              );
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              He(t),
                (this.config = t.map(Ve)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.transitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(),
                  (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(t, e = {}) {
              const {
                  relativeTo: n,
                  queryParams: r,
                  fragment: s,
                  queryParamsHandling: i,
                  preserveFragment: o
                } = e,
                a = n || this.routerState.root,
                c = o ? this.currentUrlTree.fragment : s;
              let l = null;
              switch (i) {
                case 'merge':
                  l = Object.assign(
                    Object.assign({}, this.currentUrlTree.queryParams),
                    r
                  );
                  break;
                case 'preserve':
                  l = this.currentUrlTree.queryParams;
                  break;
                default:
                  l = r || null;
              }
              return (
                null !== l && (l = this.removeEmptyProps(l)),
                (function (t, e, n, r, s) {
                  if (0 === n.length) return Se(e.root, e.root, e, r, s);
                  const i = (function (t) {
                    if (
                      'string' == typeof t[0] &&
                      1 === t.length &&
                      '/' === t[0]
                    )
                      return new xe(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const r = t.reduce((t, r, s) => {
                      if ('object' == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {};
                          return (
                            It(r.outlets, (t, n) => {
                              e[n] = 'string' == typeof t ? t.split('/') : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (r.segmentPath) return [...t, r.segmentPath];
                      }
                      return 'string' != typeof r
                        ? [...t, r]
                        : 0 === s
                        ? (r.split('/').forEach((r, s) => {
                            (0 == s && '.' === r) ||
                              (0 == s && '' === r
                                ? (n = !0)
                                : '..' === r
                                ? e++
                                : '' != r && t.push(r));
                          }),
                          t)
                        : [...t, r];
                    }, []);
                    return new xe(n, e, r);
                  })(n);
                  if (i.toRoot()) return Se(e.root, new Ft([], {}), e, r, s);
                  const o = (function (t, e, n) {
                      if (t.isAbsolute) return new Ce(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) {
                        const t = n.snapshot._urlSegment;
                        return new Ce(t, t === e.root, 0);
                      }
                      const r = _e(t.commands[0]) ? 0 : 1;
                      return (function (t, e, n) {
                        let r = t,
                          s = e,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r))
                            throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new Ce(r, !1, s - i);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        t.numberOfDoubleDots
                      );
                    })(i, e, t),
                    a = o.processChildren
                      ? Te(o.segmentGroup, o.index, i.commands)
                      : Oe(o.segmentGroup, o.index, i.commands);
                  return Se(o.segmentGroup, a, e, r, s);
                })(a, this.currentUrlTree, t, l, c)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              const n = De(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, 'imperative', null, e);
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function (t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n)
                      throw new Error(
                        `The requested path contains ${n} segment at index ${e}`
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              if (De(t)) return Nt(this.currentUrlTree, t, e);
              const n = this.parseUrl(t);
              return Nt(this.currentUrlTree, n, e);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (t) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new at(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(this.currentUrlTree)
                      )
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0);
                },
                (t) => {
                  this.console.warn('Unhandled Navigation Error: ');
                }
              );
            }
            scheduleNavigation(t, e, n, r, s) {
              if (this.disposed) return Promise.resolve(!1);
              const i = this.getTransition(),
                o =
                  'imperative' !== e &&
                  'imperative' === (null == i ? void 0 : i.source),
                a =
                  (this.lastSuccessfulId === i.id || this.currentNavigation
                    ? i.rawUrl
                    : i.urlAfterRedirects
                  ).toString() === t.toString();
              if (o && a) return Promise.resolve(!0);
              let c, l, u;
              s
                ? ((c = s.resolve), (l = s.reject), (u = s.promise))
                : (u = new Promise((t, e) => {
                    (c = t), (l = e);
                  }));
              const h = ++this.navigationId;
              return (
                this.setTransition({
                  id: h,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: c,
                  reject: l,
                  promise: u,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState
                }),
                u.catch((t) => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e, n, r) {
              const s = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(s) || e
                  ? this.location.replaceState(
                      s,
                      '',
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    )
                  : this.location.go(
                      s,
                      '',
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    );
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                { navigationId: this.lastSuccessfulId }
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Mb(s.N),
                s.Mb(Ut),
                s.Mb(Cn),
                s.Mb(r.f),
                s.Mb(s.s),
                s.Mb(s.x),
                s.Mb(s.i),
                s.Mb(void 0)
              );
            }),
            (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        In = (() => {
          class t {
            constructor(t, e, n, r, i) {
              (this.parentContexts = t),
                (this.location = e),
                (this.resolver = n),
                (this.changeDetector = i),
                (this.activated = null),
                (this._activatedRoute = null),
                (this.activateEvents = new s.n()),
                (this.deactivateEvents = new s.n()),
                (this.name = r || St),
                t.onChildOutletCreated(this.name, this);
            }
            ngOnDestroy() {
              this.parentContexts.onChildOutletDestroyed(this.name);
            }
            ngOnInit() {
              if (!this.activated) {
                const t = this.parentContexts.getContext(this.name);
                t &&
                  t.route &&
                  (t.attachRef
                    ? this.attach(t.attachRef, t.route)
                    : this.activateWith(t.route, t.resolver || null));
              }
            }
            get isActivated() {
              return !!this.activated;
            }
            get component() {
              if (!this.activated) throw new Error('Outlet is not activated');
              return this.activated.instance;
            }
            get activatedRoute() {
              if (!this.activated) throw new Error('Outlet is not activated');
              return this._activatedRoute;
            }
            get activatedRouteData() {
              return this._activatedRoute
                ? this._activatedRoute.snapshot.data
                : {};
            }
            detach() {
              if (!this.activated) throw new Error('Outlet is not activated');
              this.location.detach();
              const t = this.activated;
              return (this.activated = null), (this._activatedRoute = null), t;
            }
            attach(t, e) {
              (this.activated = t),
                (this._activatedRoute = e),
                this.location.insert(t.hostView);
            }
            deactivate() {
              if (this.activated) {
                const t = this.component;
                this.activated.destroy(),
                  (this.activated = null),
                  (this._activatedRoute = null),
                  this.deactivateEvents.emit(t);
              }
            }
            activateWith(t, e) {
              if (this.isActivated)
                throw new Error('Cannot activate an already activated outlet');
              this._activatedRoute = t;
              const n = (e = e || this.resolver).resolveComponentFactory(
                  t._futureSnapshot.routeConfig.component
                ),
                r = this.parentContexts.getOrCreateContext(this.name).children,
                s = new Pn(t, r, this.location.injector);
              (this.activated = this.location.createComponent(
                n,
                this.location.length,
                s
              )),
                this.changeDetector.markForCheck(),
                this.activateEvents.emit(this.activated.instance);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Gb(Cn),
                s.Gb(s.P),
                s.Gb(s.j),
                s.Nb('name'),
                s.Gb(s.h)
              );
            }),
            (t.ɵdir = s.Bb({
              type: t,
              selectors: [['router-outlet']],
              outputs: {
                activateEvents: 'activate',
                deactivateEvents: 'deactivate'
              },
              exportAs: ['outlet']
            })),
            t
          );
        })();
      class Pn {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === ue
            ? this.route
            : t === Cn
            ? this.childContexts
            : this.parent.get(t, e);
        }
      }
      class Nn {}
      class Rn {
        preload(t, e) {
          return e().pipe(M(() => Object(o.a)(null)));
        }
      }
      class Mn {
        preload(t, e) {
          return Object(o.a)(null);
        }
      }
      let Dn = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new En(
                  e,
                  n,
                  (e) => t.triggerEvent(new mt(e)),
                  (e) => t.triggerEvent(new gt(e))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  Object(N.a)((t) => t instanceof at),
                  z(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(s.y);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children));
              return Object(i.a)(n).pipe(
                Object(st.a)(),
                Object(T.a)((t) => {})
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                (e._loadedConfig
                  ? Object(o.a)(e._loadedConfig)
                  : this.loader.load(t.injector, e)
                ).pipe(
                  Object(F.a)(
                    (t) => (
                      (e._loadedConfig = t),
                      this.processRoutes(t.module, t.routes)
                    )
                  )
                )
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Mb(An),
                s.Mb(s.x),
                s.Mb(s.i),
                s.Mb(s.s),
                s.Mb(Nn)
              );
            }),
            (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Ln = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = 'imperative'),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration =
                  n.scrollPositionRestoration || 'disabled'),
                (n.anchorScrolling = n.anchorScrolling || 'disabled');
            }
            init() {
              'disabled' !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration('manual'),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof ot
                  ? ((this.store[
                      this.lastId
                    ] = this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState
                      ? t.restoredState.navigationId
                      : 0))
                  : t instanceof at &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(
                      t,
                      this.router.parseUrl(t.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof wt &&
                  (t.position
                    ? 'top' === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : 'enabled' === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && 'enabled' === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : 'disabled' !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new wt(
                  t,
                  'popstate' === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(An), s.Mb(r.j), s.Mb(void 0));
            }),
            (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const Fn = new s.r('ROUTER_CONFIGURATION'),
        zn = new s.r('ROUTER_FORROOT_GUARD'),
        Hn = [
          r.f,
          { provide: Ut, useClass: $t },
          {
            provide: An,
            useFactory: function (t, e, n, s, i, o, a, c = {}, l, u) {
              const h = new An(null, t, e, n, s, i, o, jt(a));
              if (
                (l && (h.urlHandlingStrategy = l),
                u && (h.routeReuseStrategy = u),
                (function (t, e) {
                  t.errorHandler && (e.errorHandler = t.errorHandler),
                    t.malformedUriErrorHandler &&
                      (e.malformedUriErrorHandler = t.malformedUriErrorHandler),
                    t.onSameUrlNavigation &&
                      (e.onSameUrlNavigation = t.onSameUrlNavigation),
                    t.paramsInheritanceStrategy &&
                      (e.paramsInheritanceStrategy =
                        t.paramsInheritanceStrategy),
                    t.relativeLinkResolution &&
                      (e.relativeLinkResolution = t.relativeLinkResolution),
                    t.urlUpdateStrategy &&
                      (e.urlUpdateStrategy = t.urlUpdateStrategy);
                })(c, h),
                c.enableTracing)
              ) {
                const t = Object(r.n)();
                h.events.subscribe((e) => {
                  t.logGroup(`Router Event: ${e.constructor.name}`),
                    t.log(e.toString()),
                    t.log(e),
                    t.logGroupEnd();
                });
              }
              return h;
            },
            deps: [
              Ut,
              Cn,
              r.f,
              s.s,
              s.x,
              s.i,
              Sn,
              Fn,
              [class {}, new s.B()],
              [class {}, new s.B()]
            ]
          },
          Cn,
          {
            provide: ue,
            useFactory: function (t) {
              return t.routerState.root;
            },
            deps: [An]
          },
          { provide: s.x, useClass: s.K },
          Dn,
          Mn,
          Rn,
          { provide: Fn, useValue: { enableTracing: !1 } }
        ];
      function Un() {
        return new s.z('Router', An);
      }
      let $n = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                Hn,
                Wn(e),
                {
                  provide: zn,
                  useFactory: Bn,
                  deps: [[An, new s.B(), new s.J()]]
                },
                { provide: Fn, useValue: n || {} },
                {
                  provide: r.g,
                  useFactory: qn,
                  deps: [r.i, [new s.p(r.a), new s.B()], Fn]
                },
                { provide: Ln, useFactory: Vn, deps: [An, r.j, Fn] },
                {
                  provide: Nn,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : Mn
                },
                { provide: s.z, multi: !0, useFactory: Un },
                [
                  Qn,
                  { provide: s.d, multi: !0, useFactory: Gn, deps: [Qn] },
                  { provide: Kn, useFactory: Zn, deps: [Qn] },
                  { provide: s.b, multi: !0, useExisting: Kn }
                ]
              ]
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [Wn(e)] };
          }
        }
        return (
          (t.ɵmod = s.Eb({ type: t })),
          (t.ɵinj = s.Db({
            factory: function (e) {
              return new (e || t)(s.Mb(zn, 8), s.Mb(An, 8));
            }
          })),
          t
        );
      })();
      function Vn(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new Ln(t, e, n);
      }
      function qn(t, e, n = {}) {
        return n.useHash ? new r.d(t, e) : new r.h(t, e);
      }
      function Bn(t) {
        return 'guarded';
      }
      function Wn(t) {
        return [
          { provide: s.a, multi: !0, useValue: t },
          { provide: Sn, multi: !0, useValue: t }
        ];
      }
      let Qn = (() => {
        class t {
          constructor(t) {
            (this.injector = t),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new a.a());
          }
          appInitializer() {
            return this.injector.get(r.e, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise((e) => (t = e)),
                n = this.injector.get(An),
                r = this.injector.get(Fn);
              return (
                'disabled' === r.initialNavigation
                  ? (n.setUpLocationChangeListener(), t(!0))
                  : 'enabled' === r.initialNavigation ||
                    'enabledBlocking' === r.initialNavigation
                  ? ((n.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? Object(o.a)(null)
                        : ((this.initNavigation = !0),
                          t(!0),
                          this.resultOfPreactivationDone)),
                    n.initialNavigation())
                  : t(!0),
                e
              );
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get(Fn),
              n = this.injector.get(Dn),
              r = this.injector.get(Ln),
              i = this.injector.get(An),
              o = this.injector.get(s.g);
            t === o.components[0] &&
              (('enabledNonBlocking' !== e.initialNavigation &&
                void 0 !== e.initialNavigation) ||
                i.initialNavigation(),
              n.setUpPreloading(),
              r.init(),
              i.resetRootComponentType(o.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(s.s));
          }),
          (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Gn(t) {
        return t.appInitializer.bind(t);
      }
      function Zn(t) {
        return t.bootstrapListener.bind(t);
      }
      const Kn = new s.r('Router Initializer');
    },
    jZKg: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('HDdC'),
        s = n('quSY');
      function i(t, e) {
        return new r.a((n) => {
          const r = new s.a();
          let i = 0;
          return (
            r.add(
              e.schedule(function () {
                i !== t.length
                  ? (n.next(t[i++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
    },
    jhN1: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return L;
      }),
        n.d(e, 'b', function () {
          return I;
        }),
        n.d(e, 'c', function () {
          return M;
        }),
        n.d(e, 'd', function () {
          return w;
        });
      var r = n('ofXK'),
        s = n('fXoL');
      class i extends r.l {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      }
      class o extends i {
        static makeCurrent() {
          Object(r.p)(new o());
        }
        getProperty(t, e) {
          return t[e];
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        getValue(t) {
          return t.value;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return 'window' === e
            ? window
            : 'document' === e
            ? t
            : 'body' === e
            ? t.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e =
            c || ((c = document.querySelector('base')), c)
              ? c.getAttribute('href')
              : null;
          return null == e
            ? null
            : ((n = e),
              a || (a = document.createElement('a')),
              a.setAttribute('href', n),
              '/' === a.pathname.charAt(0) ? a.pathname : '/' + a.pathname);
          var n;
        }
        resetBaseElement() {
          c = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return Object(r.o)(document.cookie, t);
        }
      }
      let a,
        c = null;
      const l = new s.r('TRANSITION_ID'),
        u = [
          {
            provide: s.d,
            useFactory: function (t, e, n) {
              return () => {
                n.get(s.e).donePromise.then(() => {
                  const n = Object(r.n)();
                  Array.prototype.slice
                    .apply(e.querySelectorAll('style[ng-transition]'))
                    .filter((e) => e.getAttribute('ng-transition') === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [l, r.c, s.s],
            multi: !0
          }
        ];
      class h {
        static init() {
          Object(s.U)(new h());
        }
        addToWindow(t) {
          (s.lb.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r)
              throw new Error('Could not find testability for element.');
            return r;
          }),
            (s.lb.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (s.lb.getAllAngularRootElements = () => t.getAllRootElements()),
            s.lb.frameworkStabilizers || (s.lb.frameworkStabilizers = []),
            s.lb.frameworkStabilizers.push((t) => {
              const e = s.lb.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const i = function (e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function (t) {
                t.whenStable(i);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const s = t.getTestability(e);
          return null != s
            ? s
            : n
            ? Object(r.n)().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      const d = new s.r('EventManagerPlugins');
      let f = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach((t) => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const e = n[r];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error(`No event manager plugin found for event ${t}`);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(d), s.Mb(s.A));
          }),
          (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class p {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const s = Object(r.n)().getGlobalEventTarget(this._doc, t);
          if (!s)
            throw new Error(`Unsupported event target ${s} for event ${e}`);
          return this.addEventListener(s, e, n);
        }
      }
      let m = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach((t) => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        g = (() => {
          class t extends m {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head);
            }
            _addStylesToHost(t, e) {
              t.forEach((t) => {
                const n = this._doc.createElement('style');
                (n.textContent = t), this._styleNodes.add(e.appendChild(n));
              });
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }
            removeHost(t) {
              this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((e) => this._addStylesToHost(t, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach((t) => Object(r.n)().remove(t));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(r.c));
            }),
            (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const y = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        b = /%COMP%/g;
      function v(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          Array.isArray(s) ? v(t, s, n) : ((s = s.replace(b, t)), n.push(s));
        }
        return n;
      }
      function _(t) {
        return (e) => {
          if ('__ngUnwrap__' === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let w = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new S(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case s.Q.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new E(
                      this.eventManager,
                      this.sharedStylesHost,
                      e,
                      this.appId
                    )),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case 1:
              case s.Q.ShadowDom:
                return new x(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = v(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t),
                    this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(f), s.Mb(g), s.Mb(s.c));
          }),
          (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class S {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(y[e] || e, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = 'string' == typeof t ? document.querySelector(t) : t;
          if (!n)
            throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ''), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ':' + e;
            const s = y[r];
            s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = y[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & (s.G.DashCase | s.G.Important)
            ? t.style.setProperty(e, n, r & s.G.Important ? 'important' : '')
            : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & s.G.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return 'string' == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, _(n))
            : this.eventManager.addEventListener(t, e, _(n));
        }
      }
      class E extends S {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const s = v(r + '-' + n.id, n.styles, []);
          e.addStyles(s),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(b, r + '-' + n.id)),
            (this.hostAttr = '_nghost-%COMP%'.replace(b, r + '-' + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, '');
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class x extends S {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.shadowRoot = n.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = v(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const t = document.createElement('style');
            (t.textContent = s[i]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          );
        }
      }
      let C = (() => {
        class t extends p {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return (
              t.addEventListener(e, n, !1),
              () => this.removeEventListener(t, e, n)
            );
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(r.c));
          }),
          (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const O = ['alt', 'control', 'meta', 'shift'],
        T = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS'
        },
        k = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock'
        },
        j = {
          alt: (t) => t.altKey,
          control: (t) => t.ctrlKey,
          meta: (t) => t.metaKey,
          shift: (t) => t.shiftKey
        };
      let A = (() => {
          class t extends p {
            constructor(t) {
              super(t);
            }
            supports(e) {
              return null != t.parseEventName(e);
            }
            addEventListener(e, n, s) {
              const i = t.parseEventName(n),
                o = t.eventCallback(i.fullKey, s, this.manager.getZone());
              return this.manager
                .getZone()
                .runOutsideAngular(() =>
                  Object(r.n)().onAndCancel(e, i.domEventName, o)
                );
            }
            static parseEventName(e) {
              const n = e.toLowerCase().split('.'),
                r = n.shift();
              if (0 === n.length || ('keydown' !== r && 'keyup' !== r))
                return null;
              const s = t._normalizeKey(n.pop());
              let i = '';
              if (
                (O.forEach((t) => {
                  const e = n.indexOf(t);
                  e > -1 && (n.splice(e, 1), (i += t + '.'));
                }),
                (i += s),
                0 != n.length || 0 === s.length)
              )
                return null;
              const o = {};
              return (o.domEventName = r), (o.fullKey = i), o;
            }
            static getEventFullKey(t) {
              let e = '',
                n = (function (t) {
                  let e = t.key;
                  if (null == e) {
                    if (((e = t.keyIdentifier), null == e))
                      return 'Unidentified';
                    e.startsWith('U+') &&
                      ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                      3 === t.location && k.hasOwnProperty(e) && (e = k[e]));
                  }
                  return T[e] || e;
                })(t);
              return (
                (n = n.toLowerCase()),
                ' ' === n ? (n = 'space') : '.' === n && (n = 'dot'),
                O.forEach((r) => {
                  r != n && (0, j[r])(t) && (e += r + '.');
                }),
                (e += n),
                e
              );
            }
            static eventCallback(e, n, r) {
              return (s) => {
                t.getEventFullKey(s) === e && r.runGuarded(() => n(s));
              };
            }
            static _normalizeKey(t) {
              switch (t) {
                case 'esc':
                  return 'escape';
                default:
                  return t;
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(r.c));
            }),
            (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        I = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(s.Cb)({
              factory: function () {
                return Object(s.Mb)(N);
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })();
      function P(t) {
        return new N(t.get(r.c));
      }
      let N = (() => {
        class t extends I {
          constructor(t) {
            super(), (this._doc = t);
          }
          sanitize(t, e) {
            if (null == e) return null;
            switch (t) {
              case s.I.NONE:
                return e;
              case s.I.HTML:
                return Object(s.ab)(e, 'HTML')
                  ? Object(s.tb)(e)
                  : Object(s.Y)(this._doc, String(e)).toString();
              case s.I.STYLE:
                return Object(s.ab)(e, 'Style') ? Object(s.tb)(e) : e;
              case s.I.SCRIPT:
                if (Object(s.ab)(e, 'Script')) return Object(s.tb)(e);
                throw new Error('unsafe value used in a script context');
              case s.I.URL:
                return (
                  Object(s.kb)(e),
                  Object(s.ab)(e, 'URL')
                    ? Object(s.tb)(e)
                    : Object(s.Z)(String(e))
                );
              case s.I.RESOURCE_URL:
                if (Object(s.ab)(e, 'ResourceURL')) return Object(s.tb)(e);
                throw new Error(
                  'unsafe value used in a resource URL context (see https://g.co/ng/security#xss)'
                );
              default:
                throw new Error(
                  `Unexpected SecurityContext ${t} (see https://g.co/ng/security#xss)`
                );
            }
          }
          bypassSecurityTrustHtml(t) {
            return Object(s.bb)(t);
          }
          bypassSecurityTrustStyle(t) {
            return Object(s.eb)(t);
          }
          bypassSecurityTrustScript(t) {
            return Object(s.db)(t);
          }
          bypassSecurityTrustUrl(t) {
            return Object(s.fb)(t);
          }
          bypassSecurityTrustResourceUrl(t) {
            return Object(s.cb)(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(r.c));
          }),
          (t.ɵprov = Object(s.Cb)({
            factory: function () {
              return P(Object(s.Mb)(s.o));
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      const R = [
          { provide: s.C, useValue: r.m },
          {
            provide: s.D,
            useValue: function () {
              o.makeCurrent(), h.init();
            },
            multi: !0
          },
          {
            provide: r.c,
            useFactory: function () {
              return Object(s.rb)(document), document;
            },
            deps: []
          }
        ],
        M = Object(s.R)(s.T, 'browser', R),
        D = [
          [],
          { provide: s.W, useValue: 'root' },
          {
            provide: s.m,
            useFactory: function () {
              return new s.m();
            },
            deps: []
          },
          { provide: d, useClass: C, multi: !0, deps: [r.c, s.A, s.C] },
          { provide: d, useClass: A, multi: !0, deps: [r.c] },
          [],
          { provide: w, useClass: w, deps: [f, g, s.c] },
          { provide: s.F, useExisting: w },
          { provide: m, useExisting: g },
          { provide: g, useClass: g, deps: [r.c] },
          { provide: s.M, useClass: s.M, deps: [s.A] },
          { provide: f, useClass: f, deps: [d, s.A] },
          []
        ];
      let L = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [
                { provide: s.c, useValue: e.appId },
                { provide: l, useExisting: s.c },
                u
              ]
            };
          }
        }
        return (
          (t.ɵmod = s.Eb({ type: t })),
          (t.ɵinj = s.Db({
            factory: function (e) {
              return new (e || t)(s.Mb(t, 12));
            },
            providers: D,
            imports: [r.b, s.f]
          })),
          t
        );
      })();
      'undefined' != typeof window && window;
    },
    kJWO: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() =>
        ('function' == typeof Symbol && Symbol.observable) || '@@observable')();
    },
    kiQV: function (t) {
      t.exports = JSON.parse(
        '{"name":"portfolio","version":"1.0.1","license":"MIT","scripts":{"ng":"ng","start":"ng serve --open","start:prod":"npm run build:prod && npm run server","build":"ng build","build:prod":"ng build --prod","test":"npm run lint && ng test --configuration=test","e2e":"ng e2e","watch":"ng test --configuration=test --browsers ChromeHeadless --watch --reporters dots","lint":"eslint --color -c .eslintrc --ext .ts .","lint:styles":"stylelint ./src/**/*.scss","ci":"npm run format:test && npm run lint && ng test --configuration=test --browsers ChromeTravisCi --code-coverage && npm run build:prod -- --deploy-url /portfolio/ --base-href /portfolio","format:write":"prettier src/**/*.{ts,tsx,js,jsx,json,md,css,scss,html} --write","format:test":"prettier src/**/*.{ts,json,md,scss} --list-different","release":"standard-version && git push --follow-tags origin master","build:travisci":"ng build --target production --aot --vendor-chunk --extract-css --output-hashing all --stats-json --deploy-url /portfolio/ --base-href /portfolio","clean":"rm -rf ./dist/","server":"cd dist && http-server","prod":"npm run clean && npm run build:prod && npm run server"},"husky":{"hooks":{"pre-commit":"pretty-quick --staged","commit-msg":"commitlint -E HUSKY_GIT_PARAMS"}},"commitlint":{"extends":["@commitlint/config-conventional"]},"lint-staged":{"*.{js,jsx,ts,tsx}":["prettier --write","eslint --fix","git add"],"*.{md,html,css,scss,json}":["prettier --write","git add"]},"private":true,"dependencies":{"@angular/animations":"~11.2.3","@angular/cdk":"^11.2.2","@angular/common":"~11.2.3","@angular/compiler":"~11.2.3","@angular/core":"~11.2.3","@angular/forms":"~11.2.3","@angular/material":"^11.2.2","@angular/platform-browser":"~11.2.3","@angular/platform-browser-dynamic":"~11.2.3","@angular/router":"~11.2.3","@angular/service-worker":"~11.2.3","@fortawesome/angular-fontawesome":"^0.8.0","@fortawesome/fontawesome-free":"^5.15.1","@fortawesome/fontawesome-svg-core":"^1.2.32","@fortawesome/free-brands-svg-icons":"^5.15.1","@fortawesome/free-solid-svg-icons":"^5.15.1","animate.css":"^4.1.1","aos":"^2.3.4","bootstrap":"^4.5.3","browser-detect":"^0.2.28","jquery":"^3.5.1","popper.js":"^1.14.3","rxjs":"~6.6.0","tslib":"^2.0.0","uuid":"^8.3.1","zone.js":"~0.11.3"},"devDependencies":{"@angular-devkit/build-angular":"~0.1102.2","@angular-eslint/eslint-plugin":"^0.6.0-beta.0","@angular/cli":"~11.2.2","@angular/compiler-cli":"~11.2.3","@commitlint/cli":"^11.0.0","@commitlint/config-conventional":"^11.0.0","@types/jasmine":"~3.6.0","@types/jasminewd2":"~2.0.3","@types/node":"^14.14.31","@types/uuid":"^8.3.0","@typescript-eslint/eslint-plugin":"^4.14.0","@typescript-eslint/eslint-plugin-tslint":"^4.7.0","@typescript-eslint/parser":"^4.14.0","codelyzer":"^6.0.0","cypress":"^6.6.0","eslint":"^7.18.0","eslint-config-prettier":"^7.2.0","eslint-plugin-import":"^2.22.1","eslint-plugin-prettier":"^3.3.1","husky":"^4.3.8","jasmine-core":"~3.6.0","jasmine-spec-reporter":"~6.0.0","karma":"~6.1.0","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.0.3","karma-coverage-istanbul-reporter":"^3.0.3","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"^1.5.0","karma-spec-reporter":"0.0.32","lint-staged":"^10.5.3","npm-run-all":"^4.1.5","prettier":"2.2.1","pretty-quick":"^3.1.0","protractor":"~7.0.0","rimraf":"^3.0.2","standard-version":"^9.0.0","stylelint":"^13.11.0","stylelint-config-standard":"^20.0.0","ts-node":"~9.1.1","tslint":"~6.1.0","typescript":"~4.1.2","webpack-bundle-analyzer":"^4.1.0"}}'
      );
    },
    lJxs: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('7o/Q');
      function s(t, e) {
        return function (n) {
          if ('function' != typeof t)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          return n.lift(new i(t, e));
        };
      }
      class i {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new o(t, this.project, this.thisArg));
        }
      }
      class o extends r.a {
        constructor(t, e, n) {
          super(t),
            (this.project = e),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
    },
    n6bG: function (t, e, n) {
      'use strict';
      function r(t) {
        return 'function' == typeof t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    ngJS: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (t) => (e) => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
    },
    oB13: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('EQ5u');
      function s(t, e) {
        return function (n) {
          let s;
          if (
            ((s =
              'function' == typeof t
                ? t
                : function () {
                    return t;
                  }),
            'function' == typeof e)
          )
            return n.lift(new i(s, e));
          const o = Object.create(n, r.b);
          return (o.source = n), (o.subjectFactory = s), o;
        };
      }
      class i {
        constructor(t, e) {
          (this.subjectFactory = t), (this.selector = e);
        }
        call(t, e) {
          const { selector: n } = this,
            r = this.subjectFactory(),
            s = n(r).subscribe(t);
          return s.add(e.subscribe(r)), s;
        }
      }
    },
    ofXK: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return _;
      }),
        n.d(e, 'b', function () {
          return I;
        }),
        n.d(e, 'c', function () {
          return c;
        }),
        n.d(e, 'd', function () {
          return S;
        }),
        n.d(e, 'e', function () {
          return h;
        }),
        n.d(e, 'f', function () {
          return E;
        }),
        n.d(e, 'g', function () {
          return b;
        }),
        n.d(e, 'h', function () {
          return w;
        }),
        n.d(e, 'i', function () {
          return l;
        }),
        n.d(e, 'j', function () {
          return R;
        }),
        n.d(e, 'k', function () {
          return N;
        }),
        n.d(e, 'l', function () {
          return a;
        }),
        n.d(e, 'm', function () {
          return P;
        }),
        n.d(e, 'n', function () {
          return i;
        }),
        n.d(e, 'o', function () {
          return A;
        }),
        n.d(e, 'p', function () {
          return o;
        });
      var r = n('fXoL');
      let s = null;
      function i() {
        return s;
      }
      function o(t) {
        s || (s = t);
      }
      class a {}
      const c = new r.r('DocumentToken');
      let l = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(r.Cb)({
            factory: u,
            token: t,
            providedIn: 'platform'
          })),
          t
        );
      })();
      function u() {
        return Object(r.Mb)(d);
      }
      const h = new r.r('Location Initialized');
      let d = (() => {
        class t extends l {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = i().getLocation()),
              (this._history = i().getHistory());
          }
          getBaseHrefFromDOM() {
            return i().getBaseHref(this._doc);
          }
          onPopState(t) {
            i()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('popstate', t, !1);
          }
          onHashChange(t) {
            i()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('hashchange', t, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            f() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            f()
              ? this._history.replaceState(t, e, n)
              : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Mb(c));
          }),
          (t.ɵprov = Object(r.Cb)({
            factory: p,
            token: t,
            providedIn: 'platform'
          })),
          t
        );
      })();
      function f() {
        return !!window.history.pushState;
      }
      function p() {
        return new d(Object(r.Mb)(c));
      }
      function m(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith('/') && n++,
          e.startsWith('/') && n++,
          2 == n ? t + e.substring(1) : 1 == n ? t + e : t + '/' + e
        );
      }
      function g(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ('/' === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function y(t) {
        return t && '?' !== t[0] ? '?' + t : t;
      }
      let b = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(r.Cb)({
            factory: v,
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      function v(t) {
        const e = Object(r.Mb)(c).location;
        return new w(Object(r.Mb)(l), (e && e.origin) || '');
      }
      const _ = new r.r('appBaseHref');
      let w = (() => {
          class t extends b {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
                );
              this._baseHref = e;
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return m(this._baseHref, t);
            }
            path(t = !1) {
              const e =
                  this._platformLocation.pathname +
                  y(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + y(r));
              this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + y(r));
              this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Mb(l), r.Mb(_, 8));
            }),
            (t.ɵprov = r.Cb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        S = (() => {
          class t extends b {
            constructor(t, e) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ''),
                null != e && (this._baseHref = e);
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = m(this._baseHref, t);
              return e.length > 0 ? '#' + e : e;
            }
            pushState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + y(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + y(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Mb(l), r.Mb(_, 8));
            }),
            (t.ɵprov = r.Cb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        E = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new r.n()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = g(C(n))),
                this._platformStrategy.onPopState((t) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type
                  });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = '') {
              return this.path() == this.normalize(t + y(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, C(e))
              );
            }
            prepareExternalUrl(t) {
              return (
                t && '/' !== t[0] && (t = '/' + t),
                this._platformStrategy.prepareExternalUrl(t)
              );
            }
            go(t, e = '', n = null) {
              this._platformStrategy.pushState(n, '', t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + y(e)),
                  n
                );
            }
            replaceState(t, e = '', n = null) {
              this._platformStrategy.replaceState(n, '', t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + y(e)),
                  n
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((t) => {
                    this._notifyUrlChangeListeners(t.url, t.state);
                  }));
            }
            _notifyUrlChangeListeners(t = '', e) {
              this._urlChangeListeners.forEach((n) => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({
                next: t,
                error: e,
                complete: n
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Mb(b), r.Mb(l));
            }),
            (t.normalizeQueryParams = y),
            (t.joinWithSlash = m),
            (t.stripTrailingSlash = g),
            (t.ɵprov = Object(r.Cb)({
              factory: x,
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })();
      function x() {
        return new E(Object(r.Mb)(b), Object(r.Mb)(l));
      }
      function C(t) {
        return t.replace(/\/index.html$/, '');
      }
      var O = (function (t) {
        return (
          (t[(t.Zero = 0)] = 'Zero'),
          (t[(t.One = 1)] = 'One'),
          (t[(t.Two = 2)] = 'Two'),
          (t[(t.Few = 3)] = 'Few'),
          (t[(t.Many = 4)] = 'Many'),
          (t[(t.Other = 5)] = 'Other'),
          t
        );
      })({});
      const T = r.jb;
      class k {}
      let j = (() => {
        class t extends k {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, e) {
            switch (T(e || this.locale)(t)) {
              case O.Zero:
                return 'zero';
              case O.One:
                return 'one';
              case O.Two:
                return 'two';
              case O.Few:
                return 'few';
              case O.Many:
                return 'many';
              default:
                return 'other';
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Mb(r.v));
          }),
          (t.ɵprov = r.Cb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function A(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(';')) {
          const t = n.indexOf('='),
            [r, s] = -1 == t ? [n, ''] : [n.slice(0, t), n.slice(t + 1)];
          if (r.trim() === e) return decodeURIComponent(s);
        }
        return null;
      }
      let I = (() => {
        class t {}
        return (
          (t.ɵmod = r.Eb({ type: t })),
          (t.ɵinj = r.Db({
            factory: function (e) {
              return new (e || t)();
            },
            providers: [{ provide: k, useClass: j }]
          })),
          t
        );
      })();
      const P = 'browser';
      function N(t) {
        return t === P;
      }
      let R = (() => {
        class t {}
        return (
          (t.ɵprov = Object(r.Cb)({
            token: t,
            providedIn: 'root',
            factory: () => new M(Object(r.Mb)(c), window)
          })),
          t
        );
      })();
      class M {
        constructor(t, e) {
          (this.document = t), (this.window = e), (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportsScrolling() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          var e;
          if (!this.supportsScrolling()) return;
          const n =
            null !== (e = this.document.getElementById(t)) && void 0 !== e
              ? e
              : this.document.getElementsByName(t)[0];
          void 0 !== n && (this.scrollToElement(n), this.attemptFocus(n));
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        attemptFocus(t) {
          return t.focus(), this.document.activeElement === t;
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const t =
              D(this.window.history) ||
              D(Object.getPrototypeOf(this.window.history));
            return !(!t || (!t.writable && !t.set));
          } catch (t) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              'pageXOffset' in this.window
            );
          } catch (t) {
            return !1;
          }
        }
      }
      function D(t) {
        return Object.getOwnPropertyDescriptor(t, 'scrollRestoration');
      }
    },
    pLZG: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('7o/Q');
      function s(t, e) {
        return function (n) {
          return n.lift(new i(t, e));
        };
      }
      class i {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new o(t, this.predicate, this.thisArg));
        }
      }
      class o extends r.a {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
    },
    quSY: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('DH7j'),
        s = n('XoHu'),
        i = n('n6bG');
      const o = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join('\n  ')}`
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let a = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _ctorUnsubscribe: a,
              _unsubscribe: l,
              _subscriptions: u
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof t)
            )
              n.remove(this);
            else if (null !== n)
              for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (Object(i.a)(l)) {
              a && (this._unsubscribe = void 0);
              try {
                l.call(this);
              } catch (h) {
                e = h instanceof o ? c(h.errors) : [h];
              }
            }
            if (Object(r.a)(u)) {
              let t = -1,
                n = u.length;
              for (; ++t < n; ) {
                const n = u[t];
                if (Object(s.a)(n))
                  try {
                    n.unsubscribe();
                  } catch (h) {
                    (e = e || []),
                      h instanceof o ? (e = e.concat(c(h.errors))) : e.push(h);
                  }
              }
            }
            if (e) throw new o(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case 'function':
                n = new t(e);
              case 'object':
                if (
                  n === this ||
                  n.closed ||
                  'function' != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error(
                  'unrecognized teardown ' + e + ' added to Subscription.'
                );
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof t) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        var e;
        return (t.EMPTY = (((e = new t()).closed = !0), e)), t;
      })();
      function c(t) {
        return t.reduce((t, e) => t.concat(e instanceof o ? e.errors : e), []);
      }
    },
    vkgz: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('7o/Q'),
        s = n('KqfI'),
        i = n('n6bG');
      function o(t, e, n) {
        return function (r) {
          return r.lift(new a(t, e, n));
        };
      }
      class a {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(
            new c(t, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class c extends r.a {
        constructor(t, e, n, r) {
          super(t),
            (this._tapNext = s.a),
            (this._tapError = s.a),
            (this._tapComplete = s.a),
            (this._tapError = n || s.a),
            (this._tapComplete = r || s.a),
            Object(i.a)(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || s.a),
                (this._tapError = e.error || s.a),
                (this._tapComplete = e.complete || s.a));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
    },
    wHSu: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      }),
        n.d(e, 'b', function () {
          return s;
        }),
        n.d(e, 'c', function () {
          return i;
        }),
        n.d(e, 'd', function () {
          return o;
        }),
        n.d(e, 'e', function () {
          return a;
        }),
        n.d(e, 'f', function () {
          return c;
        }),
        n.d(e, 'g', function () {
          return l;
        }),
        n.d(e, 'h', function () {
          return u;
        }),
        n.d(e, 'i', function () {
          return h;
        });
      var r = {
          prefix: 'fas',
          iconName: 'bars',
          icon: [
            448,
            512,
            [],
            'f0c9',
            'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
          ]
        },
        s = {
          prefix: 'fas',
          iconName: 'chart-line',
          icon: [
            512,
            512,
            [],
            'f201',
            'M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z'
          ]
        },
        i = {
          prefix: 'fas',
          iconName: 'cog',
          icon: [
            512,
            512,
            [],
            'f013',
            'M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z'
          ]
        },
        o = {
          prefix: 'fas',
          iconName: 'drafting-compass',
          icon: [
            512,
            512,
            [],
            'f568',
            'M457.01 344.42c-25.05 20.33-52.63 37.18-82.54 49.05l54.38 94.19 53.95 23.04c9.81 4.19 20.89-2.21 22.17-12.8l7.02-58.25-54.98-95.23zm42.49-94.56c4.86-7.67 1.89-17.99-6.05-22.39l-28.07-15.57c-7.48-4.15-16.61-1.46-21.26 5.72C403.01 281.15 332.25 320 256 320c-23.93 0-47.23-4.25-69.41-11.53l67.36-116.68c.7.02 1.34.21 2.04.21s1.35-.19 2.04-.21l51.09 88.5c31.23-8.96 59.56-25.75 82.61-48.92l-51.79-89.71C347.39 128.03 352 112.63 352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96c0 16.63 4.61 32.03 12.05 45.66l-68.3 118.31c-12.55-11.61-23.96-24.59-33.68-39-4.79-7.1-13.97-9.62-21.38-5.33l-27.75 16.07c-7.85 4.54-10.63 14.9-5.64 22.47 15.57 23.64 34.69 44.21 55.98 62.02L0 439.66l7.02 58.25c1.28 10.59 12.36 16.99 22.17 12.8l53.95-23.04 70.8-122.63C186.13 377.28 220.62 384 256 384c99.05 0 190.88-51.01 243.5-134.14zM256 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32z'
          ]
        },
        a = {
          prefix: 'fas',
          iconName: 'file-code',
          icon: [
            384,
            512,
            [],
            'f1c9',
            'M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zM123.206 400.505a5.4 5.4 0 0 1-7.633.246l-64.866-60.812a5.4 5.4 0 0 1 0-7.879l64.866-60.812a5.4 5.4 0 0 1 7.633.246l19.579 20.885a5.4 5.4 0 0 1-.372 7.747L101.65 336l40.763 35.874a5.4 5.4 0 0 1 .372 7.747l-19.579 20.884zm51.295 50.479l-27.453-7.97a5.402 5.402 0 0 1-3.681-6.692l61.44-211.626a5.402 5.402 0 0 1 6.692-3.681l27.452 7.97a5.4 5.4 0 0 1 3.68 6.692l-61.44 211.626a5.397 5.397 0 0 1-6.69 3.681zm160.792-111.045l-64.866 60.812a5.4 5.4 0 0 1-7.633-.246l-19.58-20.885a5.4 5.4 0 0 1 .372-7.747L284.35 336l-40.763-35.874a5.4 5.4 0 0 1-.372-7.747l19.58-20.885a5.4 5.4 0 0 1 7.633-.246l64.866 60.812a5.4 5.4 0 0 1-.001 7.879z'
          ]
        },
        c = {
          prefix: 'fas',
          iconName: 'play-circle',
          icon: [
            512,
            512,
            [],
            'f144',
            'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z'
          ]
        },
        l = {
          prefix: 'fas',
          iconName: 'power-off',
          icon: [
            512,
            512,
            [],
            'f011',
            'M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z'
          ]
        },
        u = {
          prefix: 'fas',
          iconName: 'rocket',
          icon: [
            512,
            512,
            [],
            'f135',
            'M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z'
          ]
        },
        h = {
          prefix: 'fas',
          iconName: 'user-circle',
          icon: [
            496,
            512,
            [],
            'f2bd',
            'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z'
          ]
        };
    },
    'x+ZX': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('7o/Q');
      function s() {
        return function (t) {
          return t.lift(new i(t));
        };
      }
      class i {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new o(t, n),
            s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class o extends r.a {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
    },
    yCtX: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('HDdC'),
        s = n('ngJS'),
        i = n('jZKg');
      function o(t, e) {
        return e ? Object(i.a)(t, e) : new r.a(Object(s.a)(t));
      }
    },
    'z+Ro': function (t, e, n) {
      'use strict';
      function r(t) {
        return t && 'function' == typeof t.schedule;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    zUnb: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('jhN1'),
        s = n('fXoL'),
        i = n('ofXK'),
        o = n('Nv++'),
        a = n('wHSu'),
        c = n('8tEE');
      let l = (() => {
        class t {
          constructor(t) {
            t.addIcons(
              a.a,
              a.i,
              a.f,
              c.a,
              c.c,
              c.d,
              c.b,
              c.f,
              a.e,
              c.e,
              a.d,
              a.b
            );
          }
        }
        return (
          (t.ɵmod = s.Eb({ type: t })),
          (t.ɵinj = s.Db({
            factory: function (e) {
              return new (e || t)(s.Mb(o.b));
            },
            imports: [[i.b, o.c], o.c]
          })),
          t
        );
      })();
      var u = n('dgmN');
      const h = n('kiQV'),
        d = {
          appName: 'portfolio',
          envName: 'PROD',
          production: !0,
          test: !1,
          versions: {
            appVersion: h.version,
            angular: h.dependencies['@angular/core'],
            material: h.dependencies['@angular/material'],
            bootstrap: h.dependencies.bootstrap,
            rxjs: h.dependencies.rxjs,
            fontAwesome: h.dependencies['@fortawesome/fontawesome-free'],
            angularCli: h.devDependencies['@angular/cli'],
            typescript: h.devDependencies.typescript,
            cypress: h.devDependencies.cypress,
            eslint: h.devDependencies.eslint
          }
        };
      class f {}
      const p = '*';
      function m(t, e = null) {
        return { type: 4, styles: e, timings: t };
      }
      function g(t, e = null) {
        return { type: 2, steps: t, options: e };
      }
      function y(t) {
        return { type: 6, styles: t, offset: null };
      }
      function b(t, e, n = null) {
        return { type: 1, expr: t, animation: e, options: n };
      }
      function v(t, e, n = null) {
        return { type: 11, selector: t, animation: e, options: n };
      }
      function _(t) {
        Promise.resolve(null).then(t);
      }
      class w {
        constructor(t = 0, e = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = t + e);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          _(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {}
        setPosition(t) {
          this._position = this.totalTime ? t * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class S {
        constructor(t) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = t);
          let e = 0,
            n = 0,
            r = 0;
          const s = this.players.length;
          0 == s
            ? _(() => this._onFinish())
            : this.players.forEach((t) => {
                t.onDone(() => {
                  ++e == s && this._onFinish();
                }),
                  t.onDestroy(() => {
                    ++n == s && this._onDestroy();
                  }),
                  t.onStart(() => {
                    ++r == s && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (t, e) => Math.max(t, e.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((t) => t.init());
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((t) => t()),
            (this._onStartFns = []));
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((t) => t.play());
        }
        pause() {
          this.players.forEach((t) => t.pause());
        }
        restart() {
          this.players.forEach((t) => t.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((t) => t.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((t) => t.destroy()),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((t) => t.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(t) {
          const e = t * this.totalTime;
          this.players.forEach((t) => {
            const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
            t.setPosition(n);
          });
        }
        getPosition() {
          const t = this.players.reduce(
            (t, e) => (null === t || e.totalTime > t.totalTime ? e : t),
            null
          );
          return null != t ? t.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach((t) => {
            t.beforeDestroy && t.beforeDestroy();
          });
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      let E = (() => {
        class t {
          constructor() {
            t.routeAnimationType = 'NONE';
          }
          static isRouteAnimationsType(e) {
            return t.routeAnimationType === e;
          }
          updateRouteAnimationType(e, n) {
            t.routeAnimationType =
              e && n ? 'ALL' : e ? 'PAGE' : n ? 'ELEMENTS' : 'NONE';
          }
        }
        return (
          (t.routeAnimationType = 'NONE'),
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac, providedIn: 'root' })),
          t
        );
      })();
      const x = [
        v(':enter > *', y({ opacity: 0, position: 'fixed' }), { optional: !0 }),
        v(':enter .route-animations-elements', y({ opacity: 0 }), {
          optional: !0
        }),
        g([
          v(
            ':leave > *',
            [
              y({ transform: 'translateY(0%)', opacity: 1 }),
              m(
                '0.2s ease-in-out',
                y({ transform: 'translateY(-3%)', opacity: 0 })
              ),
              y({ position: 'fixed' })
            ],
            { optional: !0 }
          ),
          v(
            ':enter > *',
            [
              y({
                transform: 'translateY(-3%)',
                opacity: 0,
                position: 'static'
              }),
              m(
                '0.5s ease-in-out',
                y({ transform: 'translateY(0%)', opacity: 1 })
              )
            ],
            { optional: !0 }
          )
        ]),
        v(
          ':enter .route-animations-elements',
          ((C = [
            y({ transform: 'translateY(10%)', opacity: 0 }),
            m(
              '0.5s ease-in-out',
              y({ transform: 'translateY(0%)', opacity: 1 })
            )
          ]),
          { type: 12, timings: 75, animation: C }),
          { optional: !0 }
        )
      ];
      var C;
      const O = [x[0], x[2]],
        T = [x[1], x[3]],
        k = {
          type: 7,
          name: 'routeAnimations',
          definitions: [
            b(function () {
              return E.isRouteAnimationsType('ALL');
            }, x),
            b(function () {
              return E.isRouteAnimationsType('NONE');
            }, []),
            b(function () {
              return E.isRouteAnimationsType('PAGE');
            }, O),
            b(function () {
              return E.isRouteAnimationsType('ELEMENTS');
            }, T)
          ],
          options: {}
        };
      var j = n('iInd');
      let A = (() => {
        class t {
          constructor() {
            (this.isProd = d.production),
              (this.envName = d.envName),
              (this.version = d.versions.appVersion),
              (this.year = new Date().getFullYear()),
              (this.logo = n('zwU1').default),
              (this.title = d.appName);
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = s.Ab({
            type: t,
            selectors: [['ngx-root']],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && s.Hb(0, 'router-outlet');
            },
            directives: [j.c],
            encapsulation: 2,
            data: { animation: [k] }
          })),
          t
        );
      })();
      function I() {
        return (
          'undefined' != typeof process &&
          '[object process]' === {}.toString.call(process)
        );
      }
      function P(t) {
        switch (t.length) {
          case 0:
            return new w();
          case 1:
            return t[0];
          default:
            return new S(t);
        }
      }
      function N(t, e, n, r, s = {}, i = {}) {
        const o = [],
          a = [];
        let c = -1,
          l = null;
        if (
          (r.forEach((t) => {
            const n = t.offset,
              r = n == c,
              u = (r && l) || {};
            Object.keys(t).forEach((n) => {
              let r = n,
                a = t[n];
              if ('offset' !== n)
                switch (((r = e.normalizePropertyName(r, o)), a)) {
                  case '!':
                    a = s[n];
                    break;
                  case p:
                    a = i[n];
                    break;
                  default:
                    a = e.normalizeStyleValue(n, r, a, o);
                }
              u[r] = a;
            }),
              r || a.push(u),
              (l = u),
              (c = n);
          }),
          o.length)
        ) {
          const t = '\n - ';
          throw new Error(
            `Unable to animate due to the following errors:${t}${o.join(t)}`
          );
        }
        return a;
      }
      function R(t, e, n, r) {
        switch (e) {
          case 'start':
            t.onStart(() => r(n && M(n, 'start', t)));
            break;
          case 'done':
            t.onDone(() => r(n && M(n, 'done', t)));
            break;
          case 'destroy':
            t.onDestroy(() => r(n && M(n, 'destroy', t)));
        }
      }
      function M(t, e, n) {
        const r = n.totalTime,
          s = D(
            t.element,
            t.triggerName,
            t.fromState,
            t.toState,
            e || t.phaseName,
            null == r ? t.totalTime : r,
            !!n.disabled
          ),
          i = t._data;
        return null != i && (s._data = i), s;
      }
      function D(t, e, n, r, s = '', i = 0, o) {
        return {
          element: t,
          triggerName: e,
          fromState: n,
          toState: r,
          phaseName: s,
          totalTime: i,
          disabled: !!o
        };
      }
      function L(t, e, n) {
        let r;
        return (
          t instanceof Map
            ? ((r = t.get(e)), r || t.set(e, (r = n)))
            : ((r = t[e]), r || (r = t[e] = n)),
          r
        );
      }
      function F(t) {
        const e = t.indexOf(':');
        return [t.substring(1, e), t.substr(e + 1)];
      }
      let z = (t, e) => !1,
        H = (t, e) => !1,
        U = (t, e, n) => [];
      const $ = I();
      ($ || 'undefined' != typeof Element) &&
        ((z = (t, e) => t.contains(e)),
        (H = (() => {
          if ($ || Element.prototype.matches) return (t, e) => t.matches(e);
          {
            const t = Element.prototype,
              e =
                t.matchesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector ||
                t.webkitMatchesSelector;
            return e ? (t, n) => e.apply(t, [n]) : H;
          }
        })()),
        (U = (t, e, n) => {
          let r = [];
          if (n) {
            const n = t.querySelectorAll(e);
            for (let t = 0; t < n.length; t++) r.push(n[t]);
          } else {
            const n = t.querySelector(e);
            n && r.push(n);
          }
          return r;
        }));
      let V = null,
        q = !1;
      function B(t) {
        V ||
          ((V = ('undefined' != typeof document ? document.body : null) || {}),
          (q = !!V.style && 'WebkitAppearance' in V.style));
        let e = !0;
        return (
          V.style &&
            !(function (t) {
              return 'ebkit' == t.substring(1, 6);
            })(t) &&
            ((e = t in V.style), !e && q) &&
            (e = 'Webkit' + t.charAt(0).toUpperCase() + t.substr(1) in V.style),
          e
        );
      }
      const W = H,
        Q = z,
        G = U;
      function Z(t) {
        const e = {};
        return (
          Object.keys(t).forEach((n) => {
            const r = n.replace(/([a-z])([A-Z])/g, '$1-$2');
            e[r] = t[n];
          }),
          e
        );
      }
      let K = (() => {
          class t {
            validateStyleProperty(t) {
              return B(t);
            }
            matchesElement(t, e) {
              return W(t, e);
            }
            containsElement(t, e) {
              return Q(t, e);
            }
            query(t, e, n) {
              return G(t, e, n);
            }
            computeStyle(t, e, n) {
              return n || '';
            }
            animate(t, e, n, r, s, i = [], o) {
              return new w(n, r);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        J = (() => {
          class t {}
          return (t.NOOP = new K()), t;
        })();
      const Y = 'ng-enter',
        X = 'ng-leave',
        tt = 'ng-trigger',
        et = '.ng-trigger',
        nt = 'ng-animating',
        rt = '.ng-animating';
      function st(t) {
        if ('number' == typeof t) return t;
        const e = t.match(/^(-?[\.\d]+)(m?s)/);
        return !e || e.length < 2 ? 0 : it(parseFloat(e[1]), e[2]);
      }
      function it(t, e) {
        switch (e) {
          case 's':
            return 1e3 * t;
          default:
            return t;
        }
      }
      function ot(t, e, n) {
        return t.hasOwnProperty('duration')
          ? t
          : (function (t, e, n) {
              let r,
                s = 0,
                i = '';
              if ('string' == typeof t) {
                const n = t.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === n)
                  return (
                    e.push(`The provided timing value "${t}" is invalid.`),
                    { duration: 0, delay: 0, easing: '' }
                  );
                r = it(parseFloat(n[1]), n[2]);
                const o = n[3];
                null != o && (s = it(parseFloat(o), n[4]));
                const a = n[5];
                a && (i = a);
              } else r = t;
              if (!n) {
                let n = !1,
                  i = e.length;
                r < 0 &&
                  (e.push(
                    'Duration values below 0 are not allowed for this animation step.'
                  ),
                  (n = !0)),
                  s < 0 &&
                    (e.push(
                      'Delay values below 0 are not allowed for this animation step.'
                    ),
                    (n = !0)),
                  n &&
                    e.splice(
                      i,
                      0,
                      `The provided timing value "${t}" is invalid.`
                    );
              }
              return { duration: r, delay: s, easing: i };
            })(t, e, n);
      }
      function at(t, e = {}) {
        return (
          Object.keys(t).forEach((n) => {
            e[n] = t[n];
          }),
          e
        );
      }
      function ct(t, e, n = {}) {
        if (e) for (let r in t) n[r] = t[r];
        else at(t, n);
        return n;
      }
      function lt(t, e, n) {
        return n ? e + ':' + n + ';' : '';
      }
      function ut(t) {
        let e = '';
        for (let n = 0; n < t.style.length; n++) {
          const r = t.style.item(n);
          e += lt(0, r, t.style.getPropertyValue(r));
        }
        for (const n in t.style)
          t.style.hasOwnProperty(n) &&
            !n.startsWith('_') &&
            (e += lt(
              0,
              n.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
              t.style[n]
            ));
        t.setAttribute('style', e);
      }
      function ht(t, e, n) {
        t.style &&
          (Object.keys(e).forEach((r) => {
            const s = vt(r);
            n && !n.hasOwnProperty(r) && (n[r] = t.style[s]),
              (t.style[s] = e[r]);
          }),
          I() && ut(t));
      }
      function dt(t, e) {
        t.style &&
          (Object.keys(e).forEach((e) => {
            const n = vt(e);
            t.style[n] = '';
          }),
          I() && ut(t));
      }
      function ft(t) {
        return Array.isArray(t) ? (1 == t.length ? t[0] : g(t)) : t;
      }
      const pt = new RegExp('{{\\s*(.+?)\\s*}}', 'g');
      function mt(t) {
        let e = [];
        if ('string' == typeof t) {
          let n;
          for (; (n = pt.exec(t)); ) e.push(n[1]);
          pt.lastIndex = 0;
        }
        return e;
      }
      function gt(t, e, n) {
        const r = t.toString(),
          s = r.replace(pt, (t, r) => {
            let s = e[r];
            return (
              e.hasOwnProperty(r) ||
                (n.push(`Please provide a value for the animation param ${r}`),
                (s = '')),
              s.toString()
            );
          });
        return s == r ? t : s;
      }
      function yt(t) {
        const e = [];
        let n = t.next();
        for (; !n.done; ) e.push(n.value), (n = t.next());
        return e;
      }
      const bt = /-+([a-z0-9])/g;
      function vt(t) {
        return t.replace(bt, (...t) => t[1].toUpperCase());
      }
      function _t(t, e) {
        return 0 === t || 0 === e;
      }
      function wt(t, e, n) {
        const r = Object.keys(n);
        if (r.length && e.length) {
          let i = e[0],
            o = [];
          if (
            (r.forEach((t) => {
              i.hasOwnProperty(t) || o.push(t), (i[t] = n[t]);
            }),
            o.length)
          )
            for (var s = 1; s < e.length; s++) {
              let n = e[s];
              o.forEach(function (e) {
                n[e] = Et(t, e);
              });
            }
        }
        return e;
      }
      function St(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n);
          case 0:
            return t.visitState(e, n);
          case 1:
            return t.visitTransition(e, n);
          case 2:
            return t.visitSequence(e, n);
          case 3:
            return t.visitGroup(e, n);
          case 4:
            return t.visitAnimate(e, n);
          case 5:
            return t.visitKeyframes(e, n);
          case 6:
            return t.visitStyle(e, n);
          case 8:
            return t.visitReference(e, n);
          case 9:
            return t.visitAnimateChild(e, n);
          case 10:
            return t.visitAnimateRef(e, n);
          case 11:
            return t.visitQuery(e, n);
          case 12:
            return t.visitStagger(e, n);
          default:
            throw new Error(
              `Unable to resolve animation metadata node #${e.type}`
            );
        }
      }
      function Et(t, e) {
        return window.getComputedStyle(t)[e];
      }
      const xt = '*';
      function Ct(t, e) {
        const n = [];
        return (
          'string' == typeof t
            ? t.split(/\s*,\s*/).forEach((t) =>
                (function (t, e, n) {
                  if (':' == t[0]) {
                    const r = (function (t, e) {
                      switch (t) {
                        case ':enter':
                          return 'void => *';
                        case ':leave':
                          return '* => void';
                        case ':increment':
                          return (t, e) => parseFloat(e) > parseFloat(t);
                        case ':decrement':
                          return (t, e) => parseFloat(e) < parseFloat(t);
                        default:
                          return (
                            e.push(
                              `The transition alias value "${t}" is not supported`
                            ),
                            '* => *'
                          );
                      }
                    })(t, n);
                    if ('function' == typeof r) return void e.push(r);
                    t = r;
                  }
                  const r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == r || r.length < 4)
                    return (
                      n.push(
                        `The provided transition expression "${t}" is not supported`
                      ),
                      e
                    );
                  const s = r[1],
                    i = r[2],
                    o = r[3];
                  e.push(kt(s, o)),
                    '<' != i[0] || (s == xt && o == xt) || e.push(kt(o, s));
                })(t, n, e)
              )
            : n.push(t),
          n
        );
      }
      const Ot = new Set(['true', '1']),
        Tt = new Set(['false', '0']);
      function kt(t, e) {
        const n = Ot.has(t) || Tt.has(t),
          r = Ot.has(e) || Tt.has(e);
        return (s, i) => {
          let o = t == xt || t == s,
            a = e == xt || e == i;
          return (
            !o && n && 'boolean' == typeof s && (o = s ? Ot.has(t) : Tt.has(t)),
            !a && r && 'boolean' == typeof i && (a = i ? Ot.has(e) : Tt.has(e)),
            o && a
          );
        };
      }
      const jt = new RegExp('s*:selfs*,?', 'g');
      function At(t, e, n) {
        return new It(t).build(e, n);
      }
      class It {
        constructor(t) {
          this._driver = t;
        }
        build(t, e) {
          const n = new Pt(e);
          return this._resetContextStyleTimingState(n), St(this, ft(t), n);
        }
        _resetContextStyleTimingState(t) {
          (t.currentQuerySelector = ''),
            (t.collectedStyles = {}),
            (t.collectedStyles[''] = {}),
            (t.currentTime = 0);
        }
        visitTrigger(t, e) {
          let n = (e.queryCount = 0),
            r = (e.depCount = 0);
          const s = [],
            i = [];
          return (
            '@' == t.name.charAt(0) &&
              e.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            t.definitions.forEach((t) => {
              if ((this._resetContextStyleTimingState(e), 0 == t.type)) {
                const n = t,
                  r = n.name;
                r
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((t) => {
                    (n.name = t), s.push(this.visitState(n, e));
                  }),
                  (n.name = r);
              } else if (1 == t.type) {
                const s = this.visitTransition(t, e);
                (n += s.queryCount), (r += s.depCount), i.push(s);
              } else
                e.errors.push(
                  'only state() and transition() definitions can sit inside of a trigger()'
                );
            }),
            {
              type: 7,
              name: t.name,
              states: s,
              transitions: i,
              queryCount: n,
              depCount: r,
              options: null
            }
          );
        }
        visitState(t, e) {
          const n = this.visitStyle(t.styles, e),
            r = (t.options && t.options.params) || null;
          if (n.containsDynamicStyles) {
            const s = new Set(),
              i = r || {};
            if (
              (n.styles.forEach((t) => {
                if (Nt(t)) {
                  const e = t;
                  Object.keys(e).forEach((t) => {
                    mt(e[t]).forEach((t) => {
                      i.hasOwnProperty(t) || s.add(t);
                    });
                  });
                }
              }),
              s.size)
            ) {
              const n = yt(s.values());
              e.errors.push(
                `state("${
                  t.name
                }", ...) must define default values for all the following style substitutions: ${n.join(
                  ', '
                )}`
              );
            }
          }
          return {
            type: 0,
            name: t.name,
            style: n,
            options: r ? { params: r } : null
          };
        }
        visitTransition(t, e) {
          (e.queryCount = 0), (e.depCount = 0);
          const n = St(this, ft(t.animation), e);
          return {
            type: 1,
            matchers: Ct(t.expr, e.errors),
            animation: n,
            queryCount: e.queryCount,
            depCount: e.depCount,
            options: Rt(t.options)
          };
        }
        visitSequence(t, e) {
          return {
            type: 2,
            steps: t.steps.map((t) => St(this, t, e)),
            options: Rt(t.options)
          };
        }
        visitGroup(t, e) {
          const n = e.currentTime;
          let r = 0;
          const s = t.steps.map((t) => {
            e.currentTime = n;
            const s = St(this, t, e);
            return (r = Math.max(r, e.currentTime)), s;
          });
          return (
            (e.currentTime = r), { type: 3, steps: s, options: Rt(t.options) }
          );
        }
        visitAnimate(t, e) {
          const n = (function (t, e) {
            let n = null;
            if (t.hasOwnProperty('duration')) n = t;
            else if ('number' == typeof t) return Mt(ot(t, e).duration, 0, '');
            const r = t;
            if (
              r
                .split(/\s+/)
                .some((t) => '{' == t.charAt(0) && '{' == t.charAt(1))
            ) {
              const t = Mt(0, 0, '');
              return (t.dynamic = !0), (t.strValue = r), t;
            }
            return (n = n || ot(r, e)), Mt(n.duration, n.delay, n.easing);
          })(t.timings, e.errors);
          let r;
          e.currentAnimateTimings = n;
          let s = t.styles ? t.styles : y({});
          if (5 == s.type) r = this.visitKeyframes(s, e);
          else {
            let s = t.styles,
              i = !1;
            if (!s) {
              i = !0;
              const t = {};
              n.easing && (t.easing = n.easing), (s = y(t));
            }
            e.currentTime += n.duration + n.delay;
            const o = this.visitStyle(s, e);
            (o.isEmptyStep = i), (r = o);
          }
          return (
            (e.currentAnimateTimings = null),
            { type: 4, timings: n, style: r, options: null }
          );
        }
        visitStyle(t, e) {
          const n = this._makeStyleAst(t, e);
          return this._validateStyleAst(n, e), n;
        }
        _makeStyleAst(t, e) {
          const n = [];
          Array.isArray(t.styles)
            ? t.styles.forEach((t) => {
                'string' == typeof t
                  ? t == p
                    ? n.push(t)
                    : e.errors.push(
                        `The provided style string value ${t} is not allowed.`
                      )
                  : n.push(t);
              })
            : n.push(t.styles);
          let r = !1,
            s = null;
          return (
            n.forEach((t) => {
              if (Nt(t)) {
                const e = t,
                  n = e.easing;
                if ((n && ((s = n), delete e.easing), !r))
                  for (let t in e)
                    if (e[t].toString().indexOf('{{') >= 0) {
                      r = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: n,
              easing: s,
              offset: t.offset,
              containsDynamicStyles: r,
              options: null
            }
          );
        }
        _validateStyleAst(t, e) {
          const n = e.currentAnimateTimings;
          let r = e.currentTime,
            s = e.currentTime;
          n && s > 0 && (s -= n.duration + n.delay),
            t.styles.forEach((t) => {
              'string' != typeof t &&
                Object.keys(t).forEach((n) => {
                  if (!this._driver.validateStyleProperty(n))
                    return void e.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    );
                  const i = e.collectedStyles[e.currentQuerySelector],
                    o = i[n];
                  let a = !0;
                  o &&
                    (s != r &&
                      s >= o.startTime &&
                      r <= o.endTime &&
                      (e.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${s}ms" and "${r}ms"`
                      ),
                      (a = !1)),
                    (s = o.startTime)),
                    a && (i[n] = { startTime: s, endTime: r }),
                    e.options &&
                      (function (t, e, n) {
                        const r = e.params || {},
                          s = mt(t);
                        s.length &&
                          s.forEach((t) => {
                            r.hasOwnProperty(t) ||
                              n.push(
                                `Unable to resolve the local animation param ${t} in the given list of values`
                              );
                          });
                      })(t[n], e.options, e.errors);
                });
            });
        }
        visitKeyframes(t, e) {
          const n = { type: 5, styles: [], options: null };
          if (!e.currentAnimateTimings)
            return (
              e.errors.push(
                'keyframes() must be placed inside of a call to animate()'
              ),
              n
            );
          let r = 0;
          const s = [];
          let i = !1,
            o = !1,
            a = 0;
          const c = t.steps.map((t) => {
            const n = this._makeStyleAst(t, e);
            let c =
                null != n.offset
                  ? n.offset
                  : (function (t) {
                      if ('string' == typeof t) return null;
                      let e = null;
                      if (Array.isArray(t))
                        t.forEach((t) => {
                          if (Nt(t) && t.hasOwnProperty('offset')) {
                            const n = t;
                            (e = parseFloat(n.offset)), delete n.offset;
                          }
                        });
                      else if (Nt(t) && t.hasOwnProperty('offset')) {
                        const n = t;
                        (e = parseFloat(n.offset)), delete n.offset;
                      }
                      return e;
                    })(n.styles),
              l = 0;
            return (
              null != c && (r++, (l = n.offset = c)),
              (o = o || l < 0 || l > 1),
              (i = i || l < a),
              (a = l),
              s.push(l),
              n
            );
          });
          o &&
            e.errors.push(
              'Please ensure that all keyframe offsets are between 0 and 1'
            ),
            i &&
              e.errors.push(
                'Please ensure that all keyframe offsets are in order'
              );
          const l = t.steps.length;
          let u = 0;
          r > 0 && r < l
            ? e.errors.push(
                'Not all style() steps within the declared keyframes() contain offsets'
              )
            : 0 == r && (u = 1 / (l - 1));
          const h = l - 1,
            d = e.currentTime,
            f = e.currentAnimateTimings,
            p = f.duration;
          return (
            c.forEach((t, r) => {
              const i = u > 0 ? (r == h ? 1 : u * r) : s[r],
                o = i * p;
              (e.currentTime = d + f.delay + o),
                (f.duration = o),
                this._validateStyleAst(t, e),
                (t.offset = i),
                n.styles.push(t);
            }),
            n
          );
        }
        visitReference(t, e) {
          return {
            type: 8,
            animation: St(this, ft(t.animation), e),
            options: Rt(t.options)
          };
        }
        visitAnimateChild(t, e) {
          return e.depCount++, { type: 9, options: Rt(t.options) };
        }
        visitAnimateRef(t, e) {
          return {
            type: 10,
            animation: this.visitReference(t.animation, e),
            options: Rt(t.options)
          };
        }
        visitQuery(t, e) {
          const n = e.currentQuerySelector,
            r = t.options || {};
          e.queryCount++, (e.currentQuery = t);
          const [s, i] = (function (t) {
            const e = !!t.split(/\s*,\s*/).find((t) => ':self' == t);
            return (
              e && (t = t.replace(jt, '')),
              [
                (t = t
                  .replace(/@\*/g, et)
                  .replace(/@\w+/g, (t) => '.ng-trigger-' + t.substr(1))
                  .replace(/:animating/g, rt)),
                e
              ]
            );
          })(t.selector);
          (e.currentQuerySelector = n.length ? n + ' ' + s : s),
            L(e.collectedStyles, e.currentQuerySelector, {});
          const o = St(this, ft(t.animation), e);
          return (
            (e.currentQuery = null),
            (e.currentQuerySelector = n),
            {
              type: 11,
              selector: s,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: i,
              animation: o,
              originalSelector: t.selector,
              options: Rt(t.options)
            }
          );
        }
        visitStagger(t, e) {
          e.currentQuery ||
            e.errors.push('stagger() can only be used inside of query()');
          const n =
            'full' === t.timings
              ? { duration: 0, delay: 0, easing: 'full' }
              : ot(t.timings, e.errors, !0);
          return {
            type: 12,
            animation: St(this, ft(t.animation), e),
            timings: n,
            options: null
          };
        }
      }
      class Pt {
        constructor(t) {
          (this.errors = t),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function Nt(t) {
        return !Array.isArray(t) && 'object' == typeof t;
      }
      function Rt(t) {
        var e;
        return (
          t
            ? (t = at(t)).params && (t.params = (e = t.params) ? at(e) : null)
            : (t = {}),
          t
        );
      }
      function Mt(t, e, n) {
        return { duration: t, delay: e, easing: n };
      }
      function Dt(t, e, n, r, s, i, o = null, a = !1) {
        return {
          type: 1,
          element: t,
          keyframes: e,
          preStyleProps: n,
          postStyleProps: r,
          duration: s,
          delay: i,
          totalTime: s + i,
          easing: o,
          subTimeline: a
        };
      }
      class Lt {
        constructor() {
          this._map = new Map();
        }
        consume(t) {
          let e = this._map.get(t);
          return e ? this._map.delete(t) : (e = []), e;
        }
        append(t, e) {
          let n = this._map.get(t);
          n || this._map.set(t, (n = [])), n.push(...e);
        }
        has(t) {
          return this._map.has(t);
        }
        clear() {
          this._map.clear();
        }
      }
      const Ft = new RegExp(':enter', 'g'),
        zt = new RegExp(':leave', 'g');
      function Ht(t, e, n, r, s, i = {}, o = {}, a, c, l = []) {
        return new Ut().buildKeyframes(t, e, n, r, s, i, o, a, c, l);
      }
      class Ut {
        buildKeyframes(t, e, n, r, s, i, o, a, c, l = []) {
          c = c || new Lt();
          const u = new Vt(t, e, c, r, s, l, []);
          (u.options = a),
            u.currentTimeline.setStyles([i], null, u.errors, a),
            St(this, n, u);
          const h = u.timelines.filter((t) => t.containsAnimation());
          if (h.length && Object.keys(o).length) {
            const t = h[h.length - 1];
            t.allowOnlyTimelineStyles() || t.setStyles([o], null, u.errors, a);
          }
          return h.length
            ? h.map((t) => t.buildKeyframes())
            : [Dt(e, [], [], [], 0, 0, '', !1)];
        }
        visitTrigger(t, e) {}
        visitState(t, e) {}
        visitTransition(t, e) {}
        visitAnimateChild(t, e) {
          const n = e.subInstructions.consume(e.element);
          if (n) {
            const r = e.createSubContext(t.options),
              s = e.currentTimeline.currentTime,
              i = this._visitSubInstructions(n, r, r.options);
            s != i && e.transformIntoNewTimeline(i);
          }
          e.previousNode = t;
        }
        visitAnimateRef(t, e) {
          const n = e.createSubContext(t.options);
          n.transformIntoNewTimeline(),
            this.visitReference(t.animation, n),
            e.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (e.previousNode = t);
        }
        _visitSubInstructions(t, e, n) {
          let r = e.currentTimeline.currentTime;
          const s = null != n.duration ? st(n.duration) : null,
            i = null != n.delay ? st(n.delay) : null;
          return (
            0 !== s &&
              t.forEach((t) => {
                const n = e.appendInstructionToTimeline(t, s, i);
                r = Math.max(r, n.duration + n.delay);
              }),
            r
          );
        }
        visitReference(t, e) {
          e.updateOptions(t.options, !0),
            St(this, t.animation, e),
            (e.previousNode = t);
        }
        visitSequence(t, e) {
          const n = e.subContextCount;
          let r = e;
          const s = t.options;
          if (
            s &&
            (s.params || s.delay) &&
            ((r = e.createSubContext(s)),
            r.transformIntoNewTimeline(),
            null != s.delay)
          ) {
            6 == r.previousNode.type &&
              (r.currentTimeline.snapshotCurrentStyles(),
              (r.previousNode = $t));
            const t = st(s.delay);
            r.delayNextStep(t);
          }
          t.steps.length &&
            (t.steps.forEach((t) => St(this, t, r)),
            r.currentTimeline.applyStylesToKeyframe(),
            r.subContextCount > n && r.transformIntoNewTimeline()),
            (e.previousNode = t);
        }
        visitGroup(t, e) {
          const n = [];
          let r = e.currentTimeline.currentTime;
          const s = t.options && t.options.delay ? st(t.options.delay) : 0;
          t.steps.forEach((i) => {
            const o = e.createSubContext(t.options);
            s && o.delayNextStep(s),
              St(this, i, o),
              (r = Math.max(r, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline);
          }),
            n.forEach((t) => e.currentTimeline.mergeTimelineCollectedStyles(t)),
            e.transformIntoNewTimeline(r),
            (e.previousNode = t);
        }
        _visitTiming(t, e) {
          if (t.dynamic) {
            const n = t.strValue;
            return ot(e.params ? gt(n, e.params, e.errors) : n, e.errors);
          }
          return { duration: t.duration, delay: t.delay, easing: t.easing };
        }
        visitAnimate(t, e) {
          const n = (e.currentAnimateTimings = this._visitTiming(t.timings, e)),
            r = e.currentTimeline;
          n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
          const s = t.style;
          5 == s.type
            ? this.visitKeyframes(s, e)
            : (e.incrementTime(n.duration),
              this.visitStyle(s, e),
              r.applyStylesToKeyframe()),
            (e.currentAnimateTimings = null),
            (e.previousNode = t);
        }
        visitStyle(t, e) {
          const n = e.currentTimeline,
            r = e.currentAnimateTimings;
          !r && n.getCurrentStyleProperties().length && n.forwardFrame();
          const s = (r && r.easing) || t.easing;
          t.isEmptyStep
            ? n.applyEmptyStep(s)
            : n.setStyles(t.styles, s, e.errors, e.options),
            (e.previousNode = t);
        }
        visitKeyframes(t, e) {
          const n = e.currentAnimateTimings,
            r = e.currentTimeline.duration,
            s = n.duration,
            i = e.createSubContext().currentTimeline;
          (i.easing = n.easing),
            t.styles.forEach((t) => {
              i.forwardTime((t.offset || 0) * s),
                i.setStyles(t.styles, t.easing, e.errors, e.options),
                i.applyStylesToKeyframe();
            }),
            e.currentTimeline.mergeTimelineCollectedStyles(i),
            e.transformIntoNewTimeline(r + s),
            (e.previousNode = t);
        }
        visitQuery(t, e) {
          const n = e.currentTimeline.currentTime,
            r = t.options || {},
            s = r.delay ? st(r.delay) : 0;
          s &&
            (6 === e.previousNode.type ||
              (0 == n &&
                e.currentTimeline.getCurrentStyleProperties().length)) &&
            (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = $t));
          let i = n;
          const o = e.invokeQuery(
            t.selector,
            t.originalSelector,
            t.limit,
            t.includeSelf,
            !!r.optional,
            e.errors
          );
          e.currentQueryTotal = o.length;
          let a = null;
          o.forEach((n, r) => {
            e.currentQueryIndex = r;
            const o = e.createSubContext(t.options, n);
            s && o.delayNextStep(s),
              n === e.element && (a = o.currentTimeline),
              St(this, t.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (i = Math.max(i, o.currentTimeline.currentTime));
          }),
            (e.currentQueryIndex = 0),
            (e.currentQueryTotal = 0),
            e.transformIntoNewTimeline(i),
            a &&
              (e.currentTimeline.mergeTimelineCollectedStyles(a),
              e.currentTimeline.snapshotCurrentStyles()),
            (e.previousNode = t);
        }
        visitStagger(t, e) {
          const n = e.parentContext,
            r = e.currentTimeline,
            s = t.timings,
            i = Math.abs(s.duration),
            o = i * (e.currentQueryTotal - 1);
          let a = i * e.currentQueryIndex;
          switch (s.duration < 0 ? 'reverse' : s.easing) {
            case 'reverse':
              a = o - a;
              break;
            case 'full':
              a = n.currentStaggerTime;
          }
          const c = e.currentTimeline;
          a && c.delayNextStep(a);
          const l = c.currentTime;
          St(this, t.animation, e),
            (e.previousNode = t),
            (n.currentStaggerTime =
              r.currentTime - l + (r.startTime - n.currentTimeline.startTime));
        }
      }
      const $t = {};
      class Vt {
        constructor(t, e, n, r, s, i, o, a) {
          (this._driver = t),
            (this.element = e),
            (this.subInstructions = n),
            (this._enterClassName = r),
            (this._leaveClassName = s),
            (this.errors = i),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = $t),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = a || new qt(this._driver, e, 0)),
            o.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(t, e) {
          if (!t) return;
          const n = t;
          let r = this.options;
          null != n.duration && (r.duration = st(n.duration)),
            null != n.delay && (r.delay = st(n.delay));
          const s = n.params;
          if (s) {
            let t = r.params;
            t || (t = this.options.params = {}),
              Object.keys(s).forEach((n) => {
                (e && t.hasOwnProperty(n)) || (t[n] = gt(s[n], t, this.errors));
              });
          }
        }
        _copyOptions() {
          const t = {};
          if (this.options) {
            const e = this.options.params;
            if (e) {
              const n = (t.params = {});
              Object.keys(e).forEach((t) => {
                n[t] = e[t];
              });
            }
          }
          return t;
        }
        createSubContext(t = null, e, n) {
          const r = e || this.element,
            s = new Vt(
              this._driver,
              r,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(r, n || 0)
            );
          return (
            (s.previousNode = this.previousNode),
            (s.currentAnimateTimings = this.currentAnimateTimings),
            (s.options = this._copyOptions()),
            s.updateOptions(t),
            (s.currentQueryIndex = this.currentQueryIndex),
            (s.currentQueryTotal = this.currentQueryTotal),
            (s.parentContext = this),
            this.subContextCount++,
            s
          );
        }
        transformIntoNewTimeline(t) {
          return (
            (this.previousNode = $t),
            (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(t, e, n) {
          const r = {
              duration: null != e ? e : t.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != n ? n : 0) +
                t.delay,
              easing: ''
            },
            s = new Bt(
              this._driver,
              t.element,
              t.keyframes,
              t.preStyleProps,
              t.postStyleProps,
              r,
              t.stretchStartingKeyframe
            );
          return this.timelines.push(s), r;
        }
        incrementTime(t) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
        }
        delayNextStep(t) {
          t > 0 && this.currentTimeline.delayNextStep(t);
        }
        invokeQuery(t, e, n, r, s, i) {
          let o = [];
          if ((r && o.push(this.element), t.length > 0)) {
            t = (t = t.replace(Ft, '.' + this._enterClassName)).replace(
              zt,
              '.' + this._leaveClassName
            );
            let e = this._driver.query(this.element, t, 1 != n);
            0 !== n &&
              (e = n < 0 ? e.slice(e.length + n, e.length) : e.slice(0, n)),
              o.push(...e);
          }
          return (
            s ||
              0 != o.length ||
              i.push(
                `\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          );
        }
      }
      class qt {
        constructor(t, e, n, r) {
          (this._driver = t),
            (this.element = e),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = r),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(
              e
            )),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                e,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(t) {
          const e =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || e
            ? (this.forwardTime(this.currentTime + t),
              e && this.snapshotCurrentStyles())
            : (this.startTime += t);
        }
        fork(t, e) {
          return (
            this.applyStylesToKeyframe(),
            new qt(
              this._driver,
              t,
              e || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(t) {
          this.applyStylesToKeyframe(),
            (this.duration = t),
            this._loadKeyframe();
        }
        _updateStyle(t, e) {
          (this._localTimelineStyles[t] = e),
            (this._globalTimelineStyles[t] = e),
            (this._styleSummary[t] = { time: this.currentTime, value: e });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(t) {
          t && (this._previousKeyframe.easing = t),
            Object.keys(this._globalTimelineStyles).forEach((t) => {
              (this._backFill[t] = this._globalTimelineStyles[t] || p),
                (this._currentKeyframe[t] = p);
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(t, e, n, r) {
          e && (this._previousKeyframe.easing = e);
          const s = (r && r.params) || {},
            i = (function (t, e) {
              const n = {};
              let r;
              return (
                t.forEach((t) => {
                  '*' === t
                    ? ((r = r || Object.keys(e)),
                      r.forEach((t) => {
                        n[t] = p;
                      }))
                    : ct(t, !1, n);
                }),
                n
              );
            })(t, this._globalTimelineStyles);
          Object.keys(i).forEach((t) => {
            const e = gt(i[t], s, n);
            (this._pendingStyles[t] = e),
              this._localTimelineStyles.hasOwnProperty(t) ||
                (this._backFill[t] = this._globalTimelineStyles.hasOwnProperty(
                  t
                )
                  ? this._globalTimelineStyles[t]
                  : p),
              this._updateStyle(t, e);
          });
        }
        applyStylesToKeyframe() {
          const t = this._pendingStyles,
            e = Object.keys(t);
          0 != e.length &&
            ((this._pendingStyles = {}),
            e.forEach((e) => {
              this._currentKeyframe[e] = t[e];
            }),
            Object.keys(this._localTimelineStyles).forEach((t) => {
              this._currentKeyframe.hasOwnProperty(t) ||
                (this._currentKeyframe[t] = this._localTimelineStyles[t]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((t) => {
            const e = this._localTimelineStyles[t];
            (this._pendingStyles[t] = e), this._updateStyle(t, e);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const t = [];
          for (let e in this._currentKeyframe) t.push(e);
          return t;
        }
        mergeTimelineCollectedStyles(t) {
          Object.keys(t._styleSummary).forEach((e) => {
            const n = this._styleSummary[e],
              r = t._styleSummary[e];
            (!n || r.time > n.time) && this._updateStyle(e, r.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const t = new Set(),
            e = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration;
          let r = [];
          this._keyframes.forEach((s, i) => {
            const o = ct(s, !0);
            Object.keys(o).forEach((n) => {
              const r = o[n];
              '!' == r ? t.add(n) : r == p && e.add(n);
            }),
              n || (o.offset = i / this.duration),
              r.push(o);
          });
          const s = t.size ? yt(t.values()) : [],
            i = e.size ? yt(e.values()) : [];
          if (n) {
            const t = r[0],
              e = at(t);
            (t.offset = 0), (e.offset = 1), (r = [t, e]);
          }
          return Dt(
            this.element,
            r,
            s,
            i,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class Bt extends qt {
        constructor(t, e, n, r, s, i, o = !1) {
          super(t, e, i.delay),
            (this.element = e),
            (this.keyframes = n),
            (this.preStyleProps = r),
            (this.postStyleProps = s),
            (this._stretchStartingKeyframe = o),
            (this.timings = {
              duration: i.duration,
              delay: i.delay,
              easing: i.easing
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let t = this.keyframes,
            { delay: e, duration: n, easing: r } = this.timings;
          if (this._stretchStartingKeyframe && e) {
            const s = [],
              i = n + e,
              o = e / i,
              a = ct(t[0], !1);
            (a.offset = 0), s.push(a);
            const c = ct(t[0], !1);
            (c.offset = Wt(o)), s.push(c);
            const l = t.length - 1;
            for (let r = 1; r <= l; r++) {
              let o = ct(t[r], !1);
              (o.offset = Wt((e + o.offset * n) / i)), s.push(o);
            }
            (n = i), (e = 0), (r = ''), (t = s);
          }
          return Dt(
            this.element,
            t,
            this.preStyleProps,
            this.postStyleProps,
            n,
            e,
            r,
            !0
          );
        }
      }
      function Wt(t, e = 3) {
        const n = Math.pow(10, e - 1);
        return Math.round(t * n) / n;
      }
      class Qt {}
      class Gt extends Qt {
        normalizePropertyName(t, e) {
          return vt(t);
        }
        normalizeStyleValue(t, e, n, r) {
          let s = '';
          const i = n.toString().trim();
          if (Zt[e] && 0 !== n && '0' !== n)
            if ('number' == typeof n) s = 'px';
            else {
              const e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              e &&
                0 == e[1].length &&
                r.push(`Please provide a CSS unit value for ${t}:${n}`);
            }
          return i + s;
        }
      }
      const Zt = (() =>
        (function (t) {
          const e = {};
          return t.forEach((t) => (e[t] = !0)), e;
        })(
          'width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(
            ','
          )
        ))();
      function Kt(t, e, n, r, s, i, o, a, c, l, u, h, d) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: s,
          fromState: n,
          fromStyles: i,
          toState: r,
          toStyles: o,
          timelines: a,
          queriedElements: c,
          preStyleProps: l,
          postStyleProps: u,
          totalTime: h,
          errors: d
        };
      }
      const Jt = {};
      class Yt {
        constructor(t, e, n) {
          (this._triggerName = t), (this.ast = e), (this._stateStyles = n);
        }
        match(t, e, n, r) {
          return (function (t, e, n, r, s) {
            return t.some((t) => t(e, n, r, s));
          })(this.ast.matchers, t, e, n, r);
        }
        buildStyles(t, e, n) {
          const r = this._stateStyles['*'],
            s = this._stateStyles[t],
            i = r ? r.buildStyles(e, n) : {};
          return s ? s.buildStyles(e, n) : i;
        }
        build(t, e, n, r, s, i, o, a, c, l) {
          const u = [],
            h = (this.ast.options && this.ast.options.params) || Jt,
            d = this.buildStyles(n, (o && o.params) || Jt, u),
            f = (a && a.params) || Jt,
            p = this.buildStyles(r, f, u),
            m = new Set(),
            g = new Map(),
            y = new Map(),
            b = 'void' === r,
            v = { params: Object.assign(Object.assign({}, h), f) },
            _ = l ? [] : Ht(t, e, this.ast.animation, s, i, d, p, v, c, u);
          let w = 0;
          if (
            (_.forEach((t) => {
              w = Math.max(t.duration + t.delay, w);
            }),
            u.length)
          )
            return Kt(e, this._triggerName, n, r, b, d, p, [], [], g, y, w, u);
          _.forEach((t) => {
            const n = t.element,
              r = L(g, n, {});
            t.preStyleProps.forEach((t) => (r[t] = !0));
            const s = L(y, n, {});
            t.postStyleProps.forEach((t) => (s[t] = !0)), n !== e && m.add(n);
          });
          const S = yt(m.values());
          return Kt(e, this._triggerName, n, r, b, d, p, _, S, g, y, w);
        }
      }
      class Xt {
        constructor(t, e) {
          (this.styles = t), (this.defaultParams = e);
        }
        buildStyles(t, e) {
          const n = {},
            r = at(this.defaultParams);
          return (
            Object.keys(t).forEach((e) => {
              const n = t[e];
              null != n && (r[e] = n);
            }),
            this.styles.styles.forEach((t) => {
              if ('string' != typeof t) {
                const s = t;
                Object.keys(s).forEach((t) => {
                  let i = s[t];
                  i.length > 1 && (i = gt(i, r, e)), (n[t] = i);
                });
              }
            }),
            n
          );
        }
      }
      class te {
        constructor(t, e) {
          (this.name = t),
            (this.ast = e),
            (this.transitionFactories = []),
            (this.states = {}),
            e.states.forEach((t) => {
              this.states[t.name] = new Xt(
                t.style,
                (t.options && t.options.params) || {}
              );
            }),
            ee(this.states, 'true', '1'),
            ee(this.states, 'false', '0'),
            e.transitions.forEach((e) => {
              this.transitionFactories.push(new Yt(t, e, this.states));
            }),
            (this.fallbackTransition = new Yt(
              t,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(t, e) => !0],
                options: null,
                queryCount: 0,
                depCount: 0
              },
              this.states
            ));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(t, e, n, r) {
          return (
            this.transitionFactories.find((s) => s.match(t, e, n, r)) || null
          );
        }
        matchStyles(t, e, n) {
          return this.fallbackTransition.buildStyles(t, e, n);
        }
      }
      function ee(t, e, n) {
        t.hasOwnProperty(e)
          ? t.hasOwnProperty(n) || (t[n] = t[e])
          : t.hasOwnProperty(n) && (t[e] = t[n]);
      }
      const ne = new Lt();
      class re {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(t, e) {
          const n = [],
            r = At(this._driver, e, n);
          if (n.length)
            throw new Error(
              `Unable to build the animation due to the following errors: ${n.join(
                '\n'
              )}`
            );
          this._animations[t] = r;
        }
        _buildPlayer(t, e, n) {
          const r = t.element,
            s = N(0, this._normalizer, 0, t.keyframes, e, n);
          return this._driver.animate(
            r,
            s,
            t.duration,
            t.delay,
            t.easing,
            [],
            !0
          );
        }
        create(t, e, n = {}) {
          const r = [],
            s = this._animations[t];
          let i;
          const o = new Map();
          if (
            (s
              ? ((i = Ht(this._driver, e, s, Y, X, {}, {}, n, ne, r)),
                i.forEach((t) => {
                  const e = L(o, t.element, {});
                  t.postStyleProps.forEach((t) => (e[t] = null));
                }))
              : (r.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (i = [])),
            r.length)
          )
            throw new Error(
              `Unable to create the animation due to the following errors: ${r.join(
                '\n'
              )}`
            );
          o.forEach((t, e) => {
            Object.keys(t).forEach((n) => {
              t[n] = this._driver.computeStyle(e, n, p);
            });
          });
          const a = P(
            i.map((t) => {
              const e = o.get(t.element);
              return this._buildPlayer(t, {}, e);
            })
          );
          return (
            (this._playersById[t] = a),
            a.onDestroy(() => this.destroy(t)),
            this.players.push(a),
            a
          );
        }
        destroy(t) {
          const e = this._getPlayer(t);
          e.destroy(), delete this._playersById[t];
          const n = this.players.indexOf(e);
          n >= 0 && this.players.splice(n, 1);
        }
        _getPlayer(t) {
          const e = this._playersById[t];
          if (!e)
            throw new Error(
              `Unable to find the timeline player referenced by ${t}`
            );
          return e;
        }
        listen(t, e, n, r) {
          const s = D(e, '', '', '');
          return R(this._getPlayer(t), n, s, r), () => {};
        }
        command(t, e, n, r) {
          if ('register' == n) return void this.register(t, r[0]);
          if ('create' == n) return void this.create(t, e, r[0] || {});
          const s = this._getPlayer(t);
          switch (n) {
            case 'play':
              s.play();
              break;
            case 'pause':
              s.pause();
              break;
            case 'reset':
              s.reset();
              break;
            case 'restart':
              s.restart();
              break;
            case 'finish':
              s.finish();
              break;
            case 'init':
              s.init();
              break;
            case 'setPosition':
              s.setPosition(parseFloat(r[0]));
              break;
            case 'destroy':
              this.destroy(t);
          }
        }
      }
      const se = 'ng-animate-queued',
        ie = 'ng-animate-disabled',
        oe = '.ng-animate-disabled',
        ae = [],
        ce = {
          namespaceId: '',
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1
        },
        le = {
          namespaceId: '',
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0
        };
      class ue {
        constructor(t, e = '') {
          this.namespaceId = e;
          const n = t && t.hasOwnProperty('value');
          if (((this.value = null != (r = n ? t.value : t) ? r : null), n)) {
            const e = at(t);
            delete e.value, (this.options = e);
          } else this.options = {};
          var r;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(t) {
          const e = t.params;
          if (e) {
            const t = this.options.params;
            Object.keys(e).forEach((n) => {
              null == t[n] && (t[n] = e[n]);
            });
          }
        }
      }
      const he = 'void',
        de = new ue(he);
      class fe {
        constructor(t, e, n) {
          (this.id = t),
            (this.hostElement = e),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = 'ng-tns-' + t),
            _e(e, this._hostClassName);
        }
        listen(t, e, n, r) {
          if (!this._triggers.hasOwnProperty(e))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`
            );
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${e}" because the provided event is undefined!`
            );
          if ('start' != (s = n) && 'done' != s)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`
            );
          var s;
          const i = L(this._elementListeners, t, []),
            o = { name: e, phase: n, callback: r };
          i.push(o);
          const a = L(this._engine.statesByElement, t, {});
          return (
            a.hasOwnProperty(e) ||
              (_e(t, tt), _e(t, 'ng-trigger-' + e), (a[e] = de)),
            () => {
              this._engine.afterFlush(() => {
                const t = i.indexOf(o);
                t >= 0 && i.splice(t, 1), this._triggers[e] || delete a[e];
              });
            }
          );
        }
        register(t, e) {
          return !this._triggers[t] && ((this._triggers[t] = e), !0);
        }
        _getTrigger(t) {
          const e = this._triggers[t];
          if (!e)
            throw new Error(
              `The provided animation trigger "${t}" has not been registered!`
            );
          return e;
        }
        trigger(t, e, n, r = !0) {
          const s = this._getTrigger(e),
            i = new me(this.id, e, t);
          let o = this._engine.statesByElement.get(t);
          o ||
            (_e(t, tt),
            _e(t, 'ng-trigger-' + e),
            this._engine.statesByElement.set(t, (o = {})));
          let a = o[e];
          const c = new ue(n, this.id);
          if (
            (!(n && n.hasOwnProperty('value')) &&
              a &&
              c.absorbOptions(a.options),
            (o[e] = c),
            a || (a = de),
            c.value !== he && a.value === c.value)
          ) {
            if (
              !(function (t, e) {
                const n = Object.keys(t),
                  r = Object.keys(e);
                if (n.length != r.length) return !1;
                for (let s = 0; s < n.length; s++) {
                  const r = n[s];
                  if (!e.hasOwnProperty(r) || t[r] !== e[r]) return !1;
                }
                return !0;
              })(a.params, c.params)
            ) {
              const e = [],
                n = s.matchStyles(a.value, a.params, e),
                r = s.matchStyles(c.value, c.params, e);
              e.length
                ? this._engine.reportError(e)
                : this._engine.afterFlush(() => {
                    dt(t, n), ht(t, r);
                  });
            }
            return;
          }
          const l = L(this._engine.playersByElement, t, []);
          l.forEach((t) => {
            t.namespaceId == this.id &&
              t.triggerName == e &&
              t.queued &&
              t.destroy();
          });
          let u = s.matchTransition(a.value, c.value, t, c.params),
            h = !1;
          if (!u) {
            if (!r) return;
            (u = s.fallbackTransition), (h = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: e,
              transition: u,
              fromState: a,
              toState: c,
              player: i,
              isFallbackTransition: h
            }),
            h ||
              (_e(t, se),
              i.onStart(() => {
                we(t, se);
              })),
            i.onDone(() => {
              let e = this.players.indexOf(i);
              e >= 0 && this.players.splice(e, 1);
              const n = this._engine.playersByElement.get(t);
              if (n) {
                let t = n.indexOf(i);
                t >= 0 && n.splice(t, 1);
              }
            }),
            this.players.push(i),
            l.push(i),
            i
          );
        }
        deregister(t) {
          delete this._triggers[t],
            this._engine.statesByElement.forEach((e, n) => {
              delete e[t];
            }),
            this._elementListeners.forEach((e, n) => {
              this._elementListeners.set(
                n,
                e.filter((e) => e.name != t)
              );
            });
        }
        clearElementCache(t) {
          this._engine.statesByElement.delete(t),
            this._elementListeners.delete(t);
          const e = this._engine.playersByElement.get(t);
          e &&
            (e.forEach((t) => t.destroy()),
            this._engine.playersByElement.delete(t));
        }
        _signalRemovalForInnerTriggers(t, e) {
          const n = this._engine.driver.query(t, et, !0);
          n.forEach((t) => {
            if (t.__ng_removed) return;
            const n = this._engine.fetchNamespacesByElement(t);
            n.size
              ? n.forEach((n) => n.triggerLeaveAnimation(t, e, !1, !0))
              : this.clearElementCache(t);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              n.forEach((t) => this.clearElementCache(t))
            );
        }
        triggerLeaveAnimation(t, e, n, r) {
          const s = this._engine.statesByElement.get(t);
          if (s) {
            const i = [];
            if (
              (Object.keys(s).forEach((e) => {
                if (this._triggers[e]) {
                  const n = this.trigger(t, e, he, r);
                  n && i.push(n);
                }
              }),
              i.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, t, !0, e),
                n && P(i).onDone(() => this._engine.processLeaveNode(t)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(t) {
          const e = this._elementListeners.get(t),
            n = this._engine.statesByElement.get(t);
          if (e && n) {
            const r = new Set();
            e.forEach((e) => {
              const s = e.name;
              if (r.has(s)) return;
              r.add(s);
              const i = this._triggers[s].fallbackTransition,
                o = n[s] || de,
                a = new ue(he),
                c = new me(this.id, s, t);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: t,
                  triggerName: s,
                  transition: i,
                  fromState: o,
                  toState: a,
                  player: c,
                  isFallbackTransition: !0
                });
            });
          }
        }
        removeNode(t, e) {
          const n = this._engine;
          if (
            (t.childElementCount && this._signalRemovalForInnerTriggers(t, e),
            this.triggerLeaveAnimation(t, e, !0))
          )
            return;
          let r = !1;
          if (n.totalAnimations) {
            const e = n.players.length ? n.playersByQueriedElement.get(t) : [];
            if (e && e.length) r = !0;
            else {
              let e = t;
              for (; (e = e.parentNode); )
                if (n.statesByElement.get(e)) {
                  r = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(t), r))
            n.markElementAsRemoved(this.id, t, !1, e);
          else {
            const r = t.__ng_removed;
            (r && r !== ce) ||
              (n.afterFlush(() => this.clearElementCache(t)),
              n.destroyInnerAnimations(t),
              n._onRemovalComplete(t, e));
          }
        }
        insertNode(t, e) {
          _e(t, this._hostClassName);
        }
        drainQueuedTransitions(t) {
          const e = [];
          return (
            this._queue.forEach((n) => {
              const r = n.player;
              if (r.destroyed) return;
              const s = n.element,
                i = this._elementListeners.get(s);
              i &&
                i.forEach((e) => {
                  if (e.name == n.triggerName) {
                    const r = D(
                      s,
                      n.triggerName,
                      n.fromState.value,
                      n.toState.value
                    );
                    (r._data = t), R(n.player, e.phase, r, e.callback);
                  }
                }),
                r.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      r.destroy();
                    })
                  : e.push(n);
            }),
            (this._queue = []),
            e.sort((t, e) => {
              const n = t.transition.ast.depCount,
                r = e.transition.ast.depCount;
              return 0 == n || 0 == r
                ? n - r
                : this._engine.driver.containsElement(t.element, e.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(t) {
          this.players.forEach((t) => t.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, t);
        }
        elementContainsData(t) {
          let e = !1;
          return (
            this._elementListeners.has(t) && (e = !0),
            (e = !!this._queue.find((e) => e.element === t) || e),
            e
          );
        }
      }
      class pe {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this.driver = e),
            (this._normalizer = n),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (t, e) => {});
        }
        _onRemovalComplete(t, e) {
          this.onRemovalComplete(t, e);
        }
        get queuedPlayers() {
          const t = [];
          return (
            this._namespaceList.forEach((e) => {
              e.players.forEach((e) => {
                e.queued && t.push(e);
              });
            }),
            t
          );
        }
        createNamespace(t, e) {
          const n = new fe(t, e, this);
          return (
            e.parentNode
              ? this._balanceNamespaceList(n, e)
              : (this.newHostElements.set(e, n), this.collectEnterElement(e)),
            (this._namespaceLookup[t] = n)
          );
        }
        _balanceNamespaceList(t, e) {
          const n = this._namespaceList.length - 1;
          if (n >= 0) {
            let r = !1;
            for (let s = n; s >= 0; s--)
              if (
                this.driver.containsElement(
                  this._namespaceList[s].hostElement,
                  e
                )
              ) {
                this._namespaceList.splice(s + 1, 0, t), (r = !0);
                break;
              }
            r || this._namespaceList.splice(0, 0, t);
          } else this._namespaceList.push(t);
          return this.namespacesByHostElement.set(e, t), t;
        }
        register(t, e) {
          let n = this._namespaceLookup[t];
          return n || (n = this.createNamespace(t, e)), n;
        }
        registerTrigger(t, e, n) {
          let r = this._namespaceLookup[t];
          r && r.register(e, n) && this.totalAnimations++;
        }
        destroy(t, e) {
          if (!t) return;
          const n = this._fetchNamespace(t);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement),
              delete this._namespaceLookup[t];
            const e = this._namespaceList.indexOf(n);
            e >= 0 && this._namespaceList.splice(e, 1);
          }),
            this.afterFlushAnimationsDone(() => n.destroy(e));
        }
        _fetchNamespace(t) {
          return this._namespaceLookup[t];
        }
        fetchNamespacesByElement(t) {
          const e = new Set(),
            n = this.statesByElement.get(t);
          if (n) {
            const t = Object.keys(n);
            for (let r = 0; r < t.length; r++) {
              const s = n[t[r]].namespaceId;
              if (s) {
                const t = this._fetchNamespace(s);
                t && e.add(t);
              }
            }
          }
          return e;
        }
        trigger(t, e, n, r) {
          if (ge(e)) {
            const s = this._fetchNamespace(t);
            if (s) return s.trigger(e, n, r), !0;
          }
          return !1;
        }
        insertNode(t, e, n, r) {
          if (!ge(e)) return;
          const s = e.__ng_removed;
          if (s && s.setForRemoval) {
            (s.setForRemoval = !1), (s.setForMove = !0);
            const t = this.collectedLeaveElements.indexOf(e);
            t >= 0 && this.collectedLeaveElements.splice(t, 1);
          }
          if (t) {
            const r = this._fetchNamespace(t);
            r && r.insertNode(e, n);
          }
          r && this.collectEnterElement(e);
        }
        collectEnterElement(t) {
          this.collectedEnterElements.push(t);
        }
        markElementAsDisabled(t, e) {
          e
            ? this.disabledNodes.has(t) ||
              (this.disabledNodes.add(t), _e(t, ie))
            : this.disabledNodes.has(t) &&
              (this.disabledNodes.delete(t), we(t, ie));
        }
        removeNode(t, e, n, r) {
          if (ge(e)) {
            const s = t ? this._fetchNamespace(t) : null;
            if (
              (s ? s.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r),
              n)
            ) {
              const n = this.namespacesByHostElement.get(e);
              n && n.id !== t && n.removeNode(e, r);
            }
          } else this._onRemovalComplete(e, r);
        }
        markElementAsRemoved(t, e, n, r) {
          this.collectedLeaveElements.push(e),
            (e.__ng_removed = {
              namespaceId: t,
              setForRemoval: r,
              hasAnimation: n,
              removedBeforeQueried: !1
            });
        }
        listen(t, e, n, r, s) {
          return ge(e) ? this._fetchNamespace(t).listen(e, n, r, s) : () => {};
        }
        _buildInstruction(t, e, n, r, s) {
          return t.transition.build(
            this.driver,
            t.element,
            t.fromState.value,
            t.toState.value,
            n,
            r,
            t.fromState.options,
            t.toState.options,
            e,
            s
          );
        }
        destroyInnerAnimations(t) {
          let e = this.driver.query(t, et, !0);
          e.forEach((t) => this.destroyActiveAnimationsForElement(t)),
            0 != this.playersByQueriedElement.size &&
              ((e = this.driver.query(t, rt, !0)),
              e.forEach((t) => this.finishActiveQueriedAnimationOnElement(t)));
        }
        destroyActiveAnimationsForElement(t) {
          const e = this.playersByElement.get(t);
          e &&
            e.forEach((t) => {
              t.queued ? (t.markedForDestroy = !0) : t.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(t) {
          const e = this.playersByQueriedElement.get(t);
          e && e.forEach((t) => t.finish());
        }
        whenRenderingDone() {
          return new Promise((t) => {
            if (this.players.length) return P(this.players).onDone(() => t());
            t();
          });
        }
        processLeaveNode(t) {
          const e = t.__ng_removed;
          if (e && e.setForRemoval) {
            if (((t.__ng_removed = ce), e.namespaceId)) {
              this.destroyInnerAnimations(t);
              const n = this._fetchNamespace(e.namespaceId);
              n && n.clearElementCache(t);
            }
            this._onRemovalComplete(t, e.setForRemoval);
          }
          this.driver.matchesElement(t, oe) &&
            this.markElementAsDisabled(t, !1),
            this.driver.query(t, oe, !0).forEach((t) => {
              this.markElementAsDisabled(t, !1);
            });
        }
        flush(t = -1) {
          let e = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((t, e) =>
                this._balanceNamespaceList(t, e)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              _e(this.collectedEnterElements[n], 'ng-star-inserted');
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const n = [];
            try {
              e = this._flushAnimations(n, t);
            } finally {
              for (let t = 0; t < n.length; t++) n[t]();
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((t) => t()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const t = this._whenQuietFns;
            (this._whenQuietFns = []),
              e.length
                ? P(e).onDone(() => {
                    t.forEach((t) => t());
                  })
                : t.forEach((t) => t());
          }
        }
        reportError(t) {
          throw new Error(
            `Unable to process animations due to the following failed trigger transitions\n ${t.join(
              '\n'
            )}`
          );
        }
        _flushAnimations(t, e) {
          const n = new Lt(),
            r = [],
            s = new Map(),
            i = [],
            o = new Map(),
            a = new Map(),
            c = new Map(),
            l = new Set();
          this.disabledNodes.forEach((t) => {
            l.add(t);
            const e = this.driver.query(t, '.ng-animate-queued', !0);
            for (let n = 0; n < e.length; n++) l.add(e[n]);
          });
          const u = this.bodyNode,
            h = Array.from(this.statesByElement.keys()),
            d = ve(h, this.collectedEnterElements),
            f = new Map();
          let m = 0;
          d.forEach((t, e) => {
            const n = Y + m++;
            f.set(e, n), t.forEach((t) => _e(t, n));
          });
          const g = [],
            y = new Set(),
            b = new Set();
          for (let p = 0; p < this.collectedLeaveElements.length; p++) {
            const t = this.collectedLeaveElements[p],
              e = t.__ng_removed;
            e &&
              e.setForRemoval &&
              (g.push(t),
              y.add(t),
              e.hasAnimation
                ? this.driver
                    .query(t, '.ng-star-inserted', !0)
                    .forEach((t) => y.add(t))
                : b.add(t));
          }
          const v = new Map(),
            _ = ve(h, Array.from(y));
          _.forEach((t, e) => {
            const n = X + m++;
            v.set(e, n), t.forEach((t) => _e(t, n));
          }),
            t.push(() => {
              d.forEach((t, e) => {
                const n = f.get(e);
                t.forEach((t) => we(t, n));
              }),
                _.forEach((t, e) => {
                  const n = v.get(e);
                  t.forEach((t) => we(t, n));
                }),
                g.forEach((t) => {
                  this.processLeaveNode(t);
                });
            });
          const w = [],
            S = [];
          for (let p = this._namespaceList.length - 1; p >= 0; p--)
            this._namespaceList[p].drainQueuedTransitions(e).forEach((t) => {
              const e = t.player,
                s = t.element;
              if ((w.push(e), this.collectedEnterElements.length)) {
                const t = s.__ng_removed;
                if (t && t.setForMove) return void e.destroy();
              }
              const l = !u || !this.driver.containsElement(u, s),
                h = v.get(s),
                d = f.get(s),
                p = this._buildInstruction(t, n, d, h, l);
              if (p.errors && p.errors.length) S.push(p);
              else {
                if (l)
                  return (
                    e.onStart(() => dt(s, p.fromStyles)),
                    e.onDestroy(() => ht(s, p.toStyles)),
                    void r.push(e)
                  );
                if (t.isFallbackTransition)
                  return (
                    e.onStart(() => dt(s, p.fromStyles)),
                    e.onDestroy(() => ht(s, p.toStyles)),
                    void r.push(e)
                  );
                p.timelines.forEach((t) => (t.stretchStartingKeyframe = !0)),
                  n.append(s, p.timelines),
                  i.push({ instruction: p, player: e, element: s }),
                  p.queriedElements.forEach((t) => L(o, t, []).push(e)),
                  p.preStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    if (n.length) {
                      let t = a.get(e);
                      t || a.set(e, (t = new Set())),
                        n.forEach((e) => t.add(e));
                    }
                  }),
                  p.postStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    let r = c.get(e);
                    r || c.set(e, (r = new Set())), n.forEach((t) => r.add(t));
                  });
              }
            });
          if (S.length) {
            const t = [];
            S.forEach((e) => {
              t.push(`@${e.triggerName} has failed due to:\n`),
                e.errors.forEach((e) => t.push(`- ${e}\n`));
            }),
              w.forEach((t) => t.destroy()),
              this.reportError(t);
          }
          const E = new Map(),
            x = new Map();
          i.forEach((t) => {
            const e = t.element;
            n.has(e) &&
              (x.set(e, e),
              this._beforeAnimationBuild(
                t.player.namespaceId,
                t.instruction,
                E
              ));
          }),
            r.forEach((t) => {
              const e = t.element;
              this._getPreviousPlayers(
                e,
                !1,
                t.namespaceId,
                t.triggerName,
                null
              ).forEach((t) => {
                L(E, e, []).push(t), t.destroy();
              });
            });
          const C = g.filter((t) => xe(t, a, c)),
            O = new Map();
          be(O, this.driver, b, c, p).forEach((t) => {
            xe(t, a, c) && C.push(t);
          });
          const T = new Map();
          d.forEach((t, e) => {
            be(T, this.driver, new Set(t), a, '!');
          }),
            C.forEach((t) => {
              const e = O.get(t),
                n = T.get(t);
              O.set(t, Object.assign(Object.assign({}, e), n));
            });
          const k = [],
            j = [],
            A = {};
          i.forEach((t) => {
            const { element: e, player: i, instruction: o } = t;
            if (n.has(e)) {
              if (l.has(e))
                return (
                  i.onDestroy(() => ht(e, o.toStyles)),
                  (i.disabled = !0),
                  i.overrideTotalTime(o.totalTime),
                  void r.push(i)
                );
              let t = A;
              if (x.size > 1) {
                let n = e;
                const r = [];
                for (; (n = n.parentNode); ) {
                  const e = x.get(n);
                  if (e) {
                    t = e;
                    break;
                  }
                  r.push(n);
                }
                r.forEach((e) => x.set(e, t));
              }
              const n = this._buildAnimation(i.namespaceId, o, E, s, T, O);
              if ((i.setRealPlayer(n), t === A)) k.push(i);
              else {
                const e = this.playersByElement.get(t);
                e && e.length && (i.parentPlayer = P(e)), r.push(i);
              }
            } else
              dt(e, o.fromStyles),
                i.onDestroy(() => ht(e, o.toStyles)),
                j.push(i),
                l.has(e) && r.push(i);
          }),
            j.forEach((t) => {
              const e = s.get(t.element);
              if (e && e.length) {
                const n = P(e);
                t.setRealPlayer(n);
              }
            }),
            r.forEach((t) => {
              t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy();
            });
          for (let p = 0; p < g.length; p++) {
            const t = g[p],
              e = t.__ng_removed;
            if ((we(t, X), e && e.hasAnimation)) continue;
            let n = [];
            if (o.size) {
              let e = o.get(t);
              e && e.length && n.push(...e);
              let r = this.driver.query(t, rt, !0);
              for (let t = 0; t < r.length; t++) {
                let e = o.get(r[t]);
                e && e.length && n.push(...e);
              }
            }
            const r = n.filter((t) => !t.destroyed);
            r.length ? Se(this, t, r) : this.processLeaveNode(t);
          }
          return (
            (g.length = 0),
            k.forEach((t) => {
              this.players.push(t),
                t.onDone(() => {
                  t.destroy();
                  const e = this.players.indexOf(t);
                  this.players.splice(e, 1);
                }),
                t.play();
            }),
            k
          );
        }
        elementContainsData(t, e) {
          let n = !1;
          const r = e.__ng_removed;
          return (
            r && r.setForRemoval && (n = !0),
            this.playersByElement.has(e) && (n = !0),
            this.playersByQueriedElement.has(e) && (n = !0),
            this.statesByElement.has(e) && (n = !0),
            this._fetchNamespace(t).elementContainsData(e) || n
          );
        }
        afterFlush(t) {
          this._flushFns.push(t);
        }
        afterFlushAnimationsDone(t) {
          this._whenQuietFns.push(t);
        }
        _getPreviousPlayers(t, e, n, r, s) {
          let i = [];
          if (e) {
            const e = this.playersByQueriedElement.get(t);
            e && (i = e);
          } else {
            const e = this.playersByElement.get(t);
            if (e) {
              const t = !s || s == he;
              e.forEach((e) => {
                e.queued || ((t || e.triggerName == r) && i.push(e));
              });
            }
          }
          return (
            (n || r) &&
              (i = i.filter(
                (t) => !((n && n != t.namespaceId) || (r && r != t.triggerName))
              )),
            i
          );
        }
        _beforeAnimationBuild(t, e, n) {
          const r = e.element,
            s = e.isRemovalTransition ? void 0 : t,
            i = e.isRemovalTransition ? void 0 : e.triggerName;
          for (const o of e.timelines) {
            const t = o.element,
              a = t !== r,
              c = L(n, t, []);
            this._getPreviousPlayers(t, a, s, i, e.toState).forEach((t) => {
              const e = t.getRealPlayer();
              e.beforeDestroy && e.beforeDestroy(), t.destroy(), c.push(t);
            });
          }
          dt(r, e.fromStyles);
        }
        _buildAnimation(t, e, n, r, s, i) {
          const o = e.triggerName,
            a = e.element,
            c = [],
            l = new Set(),
            u = new Set(),
            h = e.timelines.map((e) => {
              const h = e.element;
              l.add(h);
              const d = h.__ng_removed;
              if (d && d.removedBeforeQueried)
                return new w(e.duration, e.delay);
              const f = h !== a,
                p = (function (t) {
                  const e = [];
                  return Ee(t, e), e;
                })((n.get(h) || ae).map((t) => t.getRealPlayer())).filter(
                  (t) => !!t.element && t.element === h
                ),
                m = s.get(h),
                g = i.get(h),
                y = N(0, this._normalizer, 0, e.keyframes, m, g),
                b = this._buildPlayer(e, y, p);
              if ((e.subTimeline && r && u.add(h), f)) {
                const e = new me(t, o, h);
                e.setRealPlayer(b), c.push(e);
              }
              return b;
            });
          c.forEach((t) => {
            L(this.playersByQueriedElement, t.element, []).push(t),
              t.onDone(() =>
                (function (t, e, n) {
                  let r;
                  if (t instanceof Map) {
                    if (((r = t.get(e)), r)) {
                      if (r.length) {
                        const t = r.indexOf(n);
                        r.splice(t, 1);
                      }
                      0 == r.length && t.delete(e);
                    }
                  } else if (((r = t[e]), r)) {
                    if (r.length) {
                      const t = r.indexOf(n);
                      r.splice(t, 1);
                    }
                    0 == r.length && delete t[e];
                  }
                  return r;
                })(this.playersByQueriedElement, t.element, t)
              );
          }),
            l.forEach((t) => _e(t, nt));
          const d = P(h);
          return (
            d.onDestroy(() => {
              l.forEach((t) => we(t, nt)), ht(a, e.toStyles);
            }),
            u.forEach((t) => {
              L(r, t, []).push(d);
            }),
            d
          );
        }
        _buildPlayer(t, e, n) {
          return e.length > 0
            ? this.driver.animate(
                t.element,
                e,
                t.duration,
                t.delay,
                t.easing,
                n
              )
            : new w(t.duration, t.delay);
        }
      }
      class me {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.triggerName = e),
            (this.element = n),
            (this._player = new w()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(t) {
          this._containsRealPlayer ||
            ((this._player = t),
            Object.keys(this._queuedCallbacks).forEach((e) => {
              this._queuedCallbacks[e].forEach((n) => R(t, e, void 0, n));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(t.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(t) {
          this.totalTime = t;
        }
        syncPlayerEvents(t) {
          const e = this._player;
          e.triggerCallback && t.onStart(() => e.triggerCallback('start')),
            t.onDone(() => this.finish()),
            t.onDestroy(() => this.destroy());
        }
        _queueEvent(t, e) {
          L(this._queuedCallbacks, t, []).push(e);
        }
        onDone(t) {
          this.queued && this._queueEvent('done', t), this._player.onDone(t);
        }
        onStart(t) {
          this.queued && this._queueEvent('start', t), this._player.onStart(t);
        }
        onDestroy(t) {
          this.queued && this._queueEvent('destroy', t),
            this._player.onDestroy(t);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(t) {
          this.queued || this._player.setPosition(t);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(t) {
          const e = this._player;
          e.triggerCallback && e.triggerCallback(t);
        }
      }
      function ge(t) {
        return t && 1 === t.nodeType;
      }
      function ye(t, e) {
        const n = t.style.display;
        return (t.style.display = null != e ? e : 'none'), n;
      }
      function be(t, e, n, r, s) {
        const i = [];
        n.forEach((t) => i.push(ye(t)));
        const o = [];
        r.forEach((n, r) => {
          const i = {};
          n.forEach((t) => {
            const n = (i[t] = e.computeStyle(r, t, s));
            (n && 0 != n.length) || ((r.__ng_removed = le), o.push(r));
          }),
            t.set(r, i);
        });
        let a = 0;
        return n.forEach((t) => ye(t, i[a++])), o;
      }
      function ve(t, e) {
        const n = new Map();
        if ((t.forEach((t) => n.set(t, [])), 0 == e.length)) return n;
        const r = new Set(e),
          s = new Map();
        function i(t) {
          if (!t) return 1;
          let e = s.get(t);
          if (e) return e;
          const o = t.parentNode;
          return (e = n.has(o) ? o : r.has(o) ? 1 : i(o)), s.set(t, e), e;
        }
        return (
          e.forEach((t) => {
            const e = i(t);
            1 !== e && n.get(e).push(t);
          }),
          n
        );
      }
      function _e(t, e) {
        if (t.classList) t.classList.add(e);
        else {
          let n = t.$$classes;
          n || (n = t.$$classes = {}), (n[e] = !0);
        }
      }
      function we(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
          let n = t.$$classes;
          n && delete n[e];
        }
      }
      function Se(t, e, n) {
        P(n).onDone(() => t.processLeaveNode(e));
      }
      function Ee(t, e) {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          r instanceof S ? Ee(r.players, e) : e.push(r);
        }
      }
      function xe(t, e, n) {
        const r = n.get(t);
        if (!r) return !1;
        let s = e.get(t);
        return s ? r.forEach((t) => s.add(t)) : e.set(t, r), n.delete(t), !0;
      }
      class Ce {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (t, e) => {}),
            (this._transitionEngine = new pe(t, e, n)),
            (this._timelineEngine = new re(t, e, n)),
            (this._transitionEngine.onRemovalComplete = (t, e) =>
              this.onRemovalComplete(t, e));
        }
        registerTrigger(t, e, n, r, s) {
          const i = t + '-' + r;
          let o = this._triggerCache[i];
          if (!o) {
            const t = [],
              e = At(this._driver, s, t);
            if (t.length)
              throw new Error(
                `The animation trigger "${r}" has failed to build due to the following errors:\n - ${t.join(
                  '\n - '
                )}`
              );
            (o = (function (t, e) {
              return new te(t, e);
            })(r, e)),
              (this._triggerCache[i] = o);
          }
          this._transitionEngine.registerTrigger(e, r, o);
        }
        register(t, e) {
          this._transitionEngine.register(t, e);
        }
        destroy(t, e) {
          this._transitionEngine.destroy(t, e);
        }
        onInsert(t, e, n, r) {
          this._transitionEngine.insertNode(t, e, n, r);
        }
        onRemove(t, e, n, r) {
          this._transitionEngine.removeNode(t, e, r || !1, n);
        }
        disableAnimations(t, e) {
          this._transitionEngine.markElementAsDisabled(t, e);
        }
        process(t, e, n, r) {
          if ('@' == n.charAt(0)) {
            const [t, s] = F(n);
            this._timelineEngine.command(t, e, s, r);
          } else this._transitionEngine.trigger(t, e, n, r);
        }
        listen(t, e, n, r, s) {
          if ('@' == n.charAt(0)) {
            const [t, r] = F(n);
            return this._timelineEngine.listen(t, e, r, s);
          }
          return this._transitionEngine.listen(t, e, n, r, s);
        }
        flush(t = -1) {
          this._transitionEngine.flush(t);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function Oe(t, e) {
        let n = null,
          r = null;
        return (
          Array.isArray(e) && e.length
            ? ((n = ke(e[0])), e.length > 1 && (r = ke(e[e.length - 1])))
            : e && (n = ke(e)),
          n || r ? new Te(t, n, r) : null
        );
      }
      let Te = (() => {
        class t {
          constructor(e, n, r) {
            (this._element = e),
              (this._startStyles = n),
              (this._endStyles = r),
              (this._state = 0);
            let s = t.initialStylesByElement.get(e);
            s || t.initialStylesByElement.set(e, (s = {})),
              (this._initialStyles = s);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                ht(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (ht(this._element, this._initialStyles),
                this._endStyles &&
                  (ht(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (t.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (dt(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (dt(this._element, this._endStyles),
                  (this._endStyles = null)),
                ht(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (t.initialStylesByElement = new WeakMap()), t;
      })();
      function ke(t) {
        let e = null;
        const n = Object.keys(t);
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          je(s) && ((e = e || {}), (e[s] = t[s]));
        }
        return e;
      }
      function je(t) {
        return 'display' === t || 'position' === t;
      }
      const Ae = 'animation',
        Ie = 'animationend';
      class Pe {
        constructor(t, e, n, r, s, i, o) {
          (this._element = t),
            (this._name = e),
            (this._duration = n),
            (this._delay = r),
            (this._easing = s),
            (this._fillMode = i),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = (t) => this._handleCallback(t));
        }
        apply() {
          !(function (t, e) {
            const n = Fe(t, '').trim();
            n.length &&
              ((function (t, e) {
                let n = 0;
                for (let r = 0; r < t.length; r++) ',' === t.charAt(r) && n++;
              })(n),
              (e = `${n}, ${e}`)),
              Le(t, '', e);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            De(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          Ne(this._element, this._name, 'paused');
        }
        resume() {
          Ne(this._element, this._name, 'running');
        }
        setPosition(t) {
          const e = Re(this._element, this._name);
          (this._position = t * this._duration),
            Le(this._element, 'Delay', `-${this._position}ms`, e);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(t) {
          const e = t._ngTestManualTimestamp || Date.now(),
            n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
          t.animationName == this._name &&
            Math.max(e - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            De(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (t, e) {
              const n = Fe(t, '').split(','),
                r = Me(n, e);
              r >= 0 && (n.splice(r, 1), Le(t, '', n.join(',')));
            })(this._element, this._name));
        }
      }
      function Ne(t, e, n) {
        Le(t, 'PlayState', n, Re(t, e));
      }
      function Re(t, e) {
        const n = Fe(t, '');
        return n.indexOf(',') > 0 ? Me(n.split(','), e) : Me([n], e);
      }
      function Me(t, e) {
        for (let n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
        return -1;
      }
      function De(t, e, n) {
        n ? t.removeEventListener(Ie, e) : t.addEventListener(Ie, e);
      }
      function Le(t, e, n, r) {
        const s = Ae + e;
        if (null != r) {
          const e = t.style[s];
          if (e.length) {
            const t = e.split(',');
            (t[r] = n), (n = t.join(','));
          }
        }
        t.style[s] = n;
      }
      function Fe(t, e) {
        return t.style[Ae + e] || '';
      }
      class ze {
        constructor(t, e, n, r, s, i, o, a) {
          (this.element = t),
            (this.keyframes = e),
            (this.animationName = n),
            (this._duration = r),
            (this._delay = s),
            (this._finalStyles = o),
            (this._specialStyles = a),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = i || 'linear'),
            (this.totalTime = r + s),
            this._buildStyler();
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach((t) => t()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach((t) => t()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(t) {
          this._styler.setPosition(t);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          this._styler.destroy(), this._buildStyler(), this._styler.apply();
        }
        _buildStyler() {
          this._styler = new Pe(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            'forwards',
            () => this.finish()
          );
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
        beforeDestroy() {
          this.init();
          const t = {};
          if (this.hasStarted()) {
            const e = this._state >= 3;
            Object.keys(this._finalStyles).forEach((n) => {
              'offset' != n &&
                (t[n] = e ? this._finalStyles[n] : Et(this.element, n));
            });
          }
          this.currentSnapshot = t;
        }
      }
      class He extends w {
        constructor(t, e) {
          super(),
            (this.element = t),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = Z(e));
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach((t) => {
              this._startingStyles[t] = this.element.style[t];
            }),
            super.init());
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach((t) =>
              this.element.style.setProperty(t, this._styles[t])
            ),
            super.play());
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach((t) => {
              const e = this._startingStyles[t];
              e
                ? this.element.style.setProperty(t, e)
                : this.element.style.removeProperty(t);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      class Ue {
        constructor() {
          (this._count = 0), (this._head = document.querySelector('head'));
        }
        validateStyleProperty(t) {
          return B(t);
        }
        matchesElement(t, e) {
          return W(t, e);
        }
        containsElement(t, e) {
          return Q(t, e);
        }
        query(t, e, n) {
          return G(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        buildKeyframeElement(t, e, n) {
          n = n.map((t) => Z(t));
          let r = `@keyframes ${e} {\n`,
            s = '';
          n.forEach((t) => {
            s = ' ';
            const e = parseFloat(t.offset);
            (r += `${s}${100 * e}% {\n`),
              (s += ' '),
              Object.keys(t).forEach((e) => {
                const n = t[e];
                switch (e) {
                  case 'offset':
                    return;
                  case 'easing':
                    return void (
                      n && (r += `${s}animation-timing-function: ${n};\n`)
                    );
                  default:
                    return void (r += `${s}${e}: ${n};\n`);
                }
              }),
              (r += `${s}}\n`);
          }),
            (r += '}\n');
          const i = document.createElement('style');
          return (i.textContent = r), i;
        }
        animate(t, e, n, r, s, i = [], o) {
          const a = i.filter((t) => t instanceof ze),
            c = {};
          _t(n, r) &&
            a.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (c[t] = e[t]));
            });
          const l = (function (t) {
            let e = {};
            return (
              t &&
                (Array.isArray(t) ? t : [t]).forEach((t) => {
                  Object.keys(t).forEach((n) => {
                    'offset' != n && 'easing' != n && (e[n] = t[n]);
                  });
                }),
              e
            );
          })((e = wt(t, e, c)));
          if (0 == n) return new He(t, l);
          const u = 'gen_css_kf_' + this._count++,
            h = this.buildKeyframeElement(t, u, e);
          document.querySelector('head').appendChild(h);
          const d = Oe(t, e),
            f = new ze(t, e, u, n, r, s, l, d);
          return (
            f.onDestroy(() => {
              var t;
              (t = h).parentNode.removeChild(t);
            }),
            f
          );
        }
      }
      class $e {
        constructor(t, e, n, r) {
          (this.element = t),
            (this.keyframes = e),
            (this.options = n),
            (this._specialStyles = r),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const t = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            t,
            this.options
          )),
            (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
            this.domPlayer.addEventListener('finish', () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(t, e, n) {
          return t.animate(e, n);
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((t) => t()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        setPosition(t) {
          void 0 === this.domPlayer && this.init(),
            (this.domPlayer.currentTime = t * this.time);
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const t = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach((e) => {
              'offset' != e &&
                (t[e] = this._finished
                  ? this._finalKeyframe[e]
                  : Et(this.element, e));
            }),
            (this.currentSnapshot = t);
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class Ve {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            qe().toString()
          )),
            (this._cssKeyframesDriver = new Ue());
        }
        validateStyleProperty(t) {
          return B(t);
        }
        matchesElement(t, e) {
          return W(t, e);
        }
        containsElement(t, e) {
          return Q(t, e);
        }
        query(t, e, n) {
          return G(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        overrideWebAnimationsSupport(t) {
          this._isNativeImpl = t;
        }
        animate(t, e, n, r, s, i = [], o) {
          if (!o && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(t, e, n, r, s, i);
          const a = {
            duration: n,
            delay: r,
            fill: 0 == r ? 'both' : 'forwards'
          };
          s && (a.easing = s);
          const c = {},
            l = i.filter((t) => t instanceof $e);
          _t(n, r) &&
            l.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (c[t] = e[t]));
            });
          const u = Oe(t, (e = wt(t, (e = e.map((t) => ct(t, !1))), c)));
          return new $e(t, e, a, u);
        }
      }
      function qe() {
        return (
          ('undefined' != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      let Be = (() => {
        class t extends f {
          constructor(t, e) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = t.createRenderer(e.body, {
                id: '0',
                encapsulation: s.Q.None,
                styles: [],
                data: { animation: [] }
              }));
          }
          build(t) {
            const e = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const n = Array.isArray(t) ? g(t) : t;
            return (
              Ge(this._renderer, null, e, 'register', [n]),
              new We(e, this._renderer)
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(s.F), s.Mb(i.c));
          }),
          (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class We extends class {} {
        constructor(t, e) {
          super(), (this._id = t), (this._renderer = e);
        }
        create(t, e) {
          return new Qe(this._id, t, e || {}, this._renderer);
        }
      }
      class Qe {
        constructor(t, e, n, r) {
          (this.id = t),
            (this.element = e),
            (this._renderer = r),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command('create', n);
        }
        _listen(t, e) {
          return this._renderer.listen(this.element, `@@${this.id}:${t}`, e);
        }
        _command(t, ...e) {
          return Ge(this._renderer, this.element, this.id, t, e);
        }
        onDone(t) {
          this._listen('done', t);
        }
        onStart(t) {
          this._listen('start', t);
        }
        onDestroy(t) {
          this._listen('destroy', t);
        }
        init() {
          this._command('init');
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command('play'), (this._started = !0);
        }
        pause() {
          this._command('pause');
        }
        restart() {
          this._command('restart');
        }
        finish() {
          this._command('finish');
        }
        destroy() {
          this._command('destroy');
        }
        reset() {
          this._command('reset');
        }
        setPosition(t) {
          this._command('setPosition', t);
        }
        getPosition() {
          var t, e;
          return null !==
            (e =
              null === (t = this._renderer.engine.players[+this.id]) ||
              void 0 === t
                ? void 0
                : t.getPosition()) && void 0 !== e
            ? e
            : 0;
        }
      }
      function Ge(t, e, n, r, s) {
        return t.setProperty(e, `@@${n}:${r}`, s);
      }
      const Ze = '@',
        Ke = '@.disabled';
      let Je = (() => {
        class t {
          constructor(t, e, n) {
            (this.delegate = t),
              (this.engine = e),
              (this._zone = n),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (e.onRemovalComplete = (t, e) => {
                e && e.parentNode(t) && e.removeChild(t.parentNode, t);
              });
          }
          createRenderer(t, e) {
            const n = this.delegate.createRenderer(t, e);
            if (!(t && e && e.data && e.data.animation)) {
              let t = this._rendererCache.get(n);
              return (
                t ||
                  ((t = new Ye('', n, this.engine)),
                  this._rendererCache.set(n, t)),
                t
              );
            }
            const r = e.id,
              s = e.id + '-' + this._currentId;
            this._currentId++, this.engine.register(s, t);
            const i = (e) => {
              Array.isArray(e)
                ? e.forEach(i)
                : this.engine.registerTrigger(r, s, t, e.name, e);
            };
            return e.data.animation.forEach(i), new Xe(this, s, n, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(t, e, n) {
            t >= 0 && t < this._microtaskId
              ? this._zone.run(() => e(n))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((t) => {
                        const [e, n] = t;
                        e(n);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([e, n]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(s.F), s.Mb(Ce), s.Mb(s.A));
          }),
          (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class Ye {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.delegate = e),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode
              ? (t) => e.destroyNode(t)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(t, e) {
          return this.delegate.createElement(t, e);
        }
        createComment(t) {
          return this.delegate.createComment(t);
        }
        createText(t) {
          return this.delegate.createText(t);
        }
        appendChild(t, e) {
          this.delegate.appendChild(t, e),
            this.engine.onInsert(this.namespaceId, e, t, !1);
        }
        insertBefore(t, e, n, r = !0) {
          this.delegate.insertBefore(t, e, n),
            this.engine.onInsert(this.namespaceId, e, t, r);
        }
        removeChild(t, e, n) {
          this.engine.onRemove(this.namespaceId, e, this.delegate, n);
        }
        selectRootElement(t, e) {
          return this.delegate.selectRootElement(t, e);
        }
        parentNode(t) {
          return this.delegate.parentNode(t);
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t);
        }
        setAttribute(t, e, n, r) {
          this.delegate.setAttribute(t, e, n, r);
        }
        removeAttribute(t, e, n) {
          this.delegate.removeAttribute(t, e, n);
        }
        addClass(t, e) {
          this.delegate.addClass(t, e);
        }
        removeClass(t, e) {
          this.delegate.removeClass(t, e);
        }
        setStyle(t, e, n, r) {
          this.delegate.setStyle(t, e, n, r);
        }
        removeStyle(t, e, n) {
          this.delegate.removeStyle(t, e, n);
        }
        setProperty(t, e, n) {
          e.charAt(0) == Ze && e == Ke
            ? this.disableAnimations(t, !!n)
            : this.delegate.setProperty(t, e, n);
        }
        setValue(t, e) {
          this.delegate.setValue(t, e);
        }
        listen(t, e, n) {
          return this.delegate.listen(t, e, n);
        }
        disableAnimations(t, e) {
          this.engine.disableAnimations(t, e);
        }
      }
      class Xe extends Ye {
        constructor(t, e, n, r) {
          super(e, n, r), (this.factory = t), (this.namespaceId = e);
        }
        setProperty(t, e, n) {
          e.charAt(0) == Ze
            ? '.' == e.charAt(1) && e == Ke
              ? this.disableAnimations(t, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, t, e.substr(1), n)
            : this.delegate.setProperty(t, e, n);
        }
        listen(t, e, n) {
          if (e.charAt(0) == Ze) {
            const r = (function (t) {
              switch (t) {
                case 'body':
                  return document.body;
                case 'document':
                  return document;
                case 'window':
                  return window;
                default:
                  return t;
              }
            })(t);
            let s = e.substr(1),
              i = '';
            return (
              s.charAt(0) != Ze &&
                ([s, i] = (function (t) {
                  const e = t.indexOf('.');
                  return [t.substring(0, e), t.substr(e + 1)];
                })(s)),
              this.engine.listen(this.namespaceId, r, s, i, (t) => {
                this.factory.scheduleListenerCallback(t._data || -1, n, t);
              })
            );
          }
          return this.delegate.listen(t, e, n);
        }
      }
      let tn = (() => {
        class t extends Ce {
          constructor(t, e, n) {
            super(t.body, e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Mb(i.c), s.Mb(J), s.Mb(Qt));
          }),
          (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const en = [
        {
          provide: J,
          useFactory: function () {
            return 'function' == typeof qe() ? new Ve() : new Ue();
          }
        },
        {
          provide: new s.r('AnimationModuleType'),
          useValue: 'BrowserAnimations'
        },
        { provide: f, useClass: Be },
        {
          provide: Qt,
          useFactory: function () {
            return new Gt();
          }
        },
        { provide: Ce, useClass: tn },
        {
          provide: s.F,
          useFactory: function (t, e, n) {
            return new Je(t, e, n);
          },
          deps: [r.d, Ce, s.A]
        }
      ];
      let nn = (() => {
        class t {}
        return (
          (t.ɵmod = s.Eb({ type: t })),
          (t.ɵinj = s.Db({
            factory: function (e) {
              return new (e || t)();
            },
            providers: en,
            imports: [r.a]
          })),
          t
        );
      })();
      var rn = n('NXyV'),
        sn = n('HDdC');
      function on(t, e) {
        return new sn.a(
          e
            ? (n) => e.schedule(an, 0, { error: t, subscriber: n })
            : (e) => e.error(t)
        );
      }
      function an({ error: t, subscriber: e }) {
        e.error(t);
      }
      var cn = n('DH7j'),
        ln = n('n6bG'),
        un = n('lJxs');
      function hn(t, e, n, r) {
        return (
          Object(ln.a)(n) && ((r = n), (n = void 0)),
          r
            ? hn(t, e, n).pipe(
                Object(un.a)((t) => (Object(cn.a)(t) ? r(...t) : r(t)))
              )
            : new sn.a((r) => {
                dn(
                  t,
                  e,
                  function (t) {
                    r.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : t
                    );
                  },
                  r,
                  n
                );
              })
        );
      }
      function dn(t, e, n, r, s) {
        let i;
        if (
          (function (t) {
            return (
              t &&
              'function' == typeof t.addEventListener &&
              'function' == typeof t.removeEventListener
            );
          })(t)
        ) {
          const r = t;
          t.addEventListener(e, n, s),
            (i = () => r.removeEventListener(e, n, s));
        } else if (
          (function (t) {
            return t && 'function' == typeof t.on && 'function' == typeof t.off;
          })(t)
        ) {
          const r = t;
          t.on(e, n), (i = () => r.off(e, n));
        } else if (
          (function (t) {
            return (
              t &&
              'function' == typeof t.addListener &&
              'function' == typeof t.removeListener
            );
          })(t)
        ) {
          const r = t;
          t.addListener(e, n), (i = () => r.removeListener(e, n));
        } else {
          if (!t || !t.length) throw new TypeError('Invalid event target');
          for (let i = 0, o = t.length; i < o; i++) dn(t[i], e, n, r, s);
        }
        r.add(i);
      }
      var fn = n('LRne'),
        pn = n('GyhO'),
        mn = n('XNiG'),
        gn = n('KqfI');
      const yn = new sn.a(gn.a);
      var bn = n('VRyK'),
        vn = n('pLZG'),
        _n = n('eIep'),
        wn = n('oB13'),
        Sn = n('IzEk'),
        En = n('vkgz'),
        xn = n('quSY');
      class Cn extends xn.a {
        constructor(t, e) {
          super();
        }
        schedule(t, e = 0) {
          return this;
        }
      }
      class On extends Cn {
        constructor(t, e) {
          super(t, e),
            (this.scheduler = t),
            (this.work = e),
            (this.pending = !1);
        }
        schedule(t, e = 0) {
          if (this.closed) return this;
          this.state = t;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id = this.id || this.requestAsyncId(r, this.id, e)),
            this
          );
        }
        requestAsyncId(t, e, n = 0) {
          return setInterval(t.flush.bind(t, this), n);
        }
        recycleAsyncId(t, e, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return e;
          clearInterval(e);
        }
        execute(t, e) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const n = this._execute(t, e);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(t, e) {
          let n,
            r = !1;
          try {
            this.work(t);
          } catch (s) {
            (r = !0), (n = (!!s && s) || new Error(s));
          }
          if (r) return this.unsubscribe(), n;
        }
        _unsubscribe() {
          const t = this.id,
            e = this.scheduler,
            n = e.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != t && (this.id = this.recycleAsyncId(e, t, null)),
            (this.delay = null);
        }
      }
      let Tn = (() => {
        class t {
          constructor(e, n = t.now) {
            (this.SchedulerAction = e), (this.now = n);
          }
          schedule(t, e = 0, n) {
            return new this.SchedulerAction(this, t).schedule(n, e);
          }
        }
        return (t.now = () => Date.now()), t;
      })();
      class kn extends Tn {
        constructor(t, e = Tn.now) {
          super(t, () =>
            kn.delegate && kn.delegate !== this ? kn.delegate.now() : e()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(t, e = 0, n) {
          return kn.delegate && kn.delegate !== this
            ? kn.delegate.schedule(t, e, n)
            : super.schedule(t, e, n);
        }
        flush(t) {
          const { actions: e } = this;
          if (this.active) return void e.push(t);
          let n;
          this.active = !0;
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while ((t = e.shift()));
          if (((this.active = !1), n)) {
            for (; (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }
      const jn = new kn(On);
      var An = n('7o/Q'),
        In = n('EY2u');
      let Pn = (() => {
        class t {
          constructor(t, e, n) {
            (this.kind = t),
              (this.value = e),
              (this.error = n),
              (this.hasValue = 'N' === t);
          }
          observe(t) {
            switch (this.kind) {
              case 'N':
                return t.next && t.next(this.value);
              case 'E':
                return t.error && t.error(this.error);
              case 'C':
                return t.complete && t.complete();
            }
          }
          do(t, e, n) {
            switch (this.kind) {
              case 'N':
                return t && t(this.value);
              case 'E':
                return e && e(this.error);
              case 'C':
                return n && n();
            }
          }
          accept(t, e, n) {
            return t && 'function' == typeof t.next
              ? this.observe(t)
              : this.do(t, e, n);
          }
          toObservable() {
            switch (this.kind) {
              case 'N':
                return Object(fn.a)(this.value);
              case 'E':
                return on(this.error);
              case 'C':
                return Object(In.b)();
            }
            throw new Error('unexpected notification kind value');
          }
          static createNext(e) {
            return void 0 !== e ? new t('N', e) : t.undefinedValueNotification;
          }
          static createError(e) {
            return new t('E', void 0, e);
          }
          static createComplete() {
            return t.completeNotification;
          }
        }
        return (
          (t.completeNotification = new t('C')),
          (t.undefinedValueNotification = new t('N', void 0)),
          t
        );
      })();
      class Nn {
        constructor(t, e) {
          (this.delay = t), (this.scheduler = e);
        }
        call(t, e) {
          return e.subscribe(new Rn(t, this.delay, this.scheduler));
        }
      }
      class Rn extends An.a {
        constructor(t, e, n) {
          super(t),
            (this.delay = e),
            (this.scheduler = n),
            (this.queue = []),
            (this.active = !1),
            (this.errored = !1);
        }
        static dispatch(t) {
          const e = t.source,
            n = e.queue,
            r = t.scheduler,
            s = t.destination;
          for (; n.length > 0 && n[0].time - r.now() <= 0; )
            n.shift().notification.observe(s);
          if (n.length > 0) {
            const e = Math.max(0, n[0].time - r.now());
            this.schedule(t, e);
          } else this.unsubscribe(), (e.active = !1);
        }
        _schedule(t) {
          (this.active = !0),
            this.destination.add(
              t.schedule(Rn.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: t
              })
            );
        }
        scheduleNotification(t) {
          if (!0 === this.errored) return;
          const e = this.scheduler,
            n = new Mn(e.now() + this.delay, t);
          this.queue.push(n), !1 === this.active && this._schedule(e);
        }
        _next(t) {
          this.scheduleNotification(Pn.createNext(t));
        }
        _error(t) {
          (this.errored = !0),
            (this.queue = []),
            this.destination.error(t),
            this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(Pn.createComplete()), this.unsubscribe();
        }
      }
      class Mn {
        constructor(t, e) {
          (this.time = t), (this.notification = e);
        }
      }
      const Dn =
        'Service workers are disabled or not supported by this browser';
      class Ln {
        constructor(t) {
          if (((this.serviceWorker = t), t)) {
            const e = hn(t, 'controllerchange').pipe(
                Object(un.a)(() => t.controller)
              ),
              n = Object(rn.a)(() => Object(fn.a)(t.controller)),
              r = Object(pn.a)(n, e);
            (this.worker = r.pipe(Object(vn.a)((t) => !!t))),
              (this.registration = this.worker.pipe(
                Object(_n.a)(() => t.getRegistration())
              ));
            const s = hn(t, 'message')
              .pipe(Object(un.a)((t) => t.data))
              .pipe(Object(vn.a)((t) => t && t.type))
              .pipe(Object(wn.a)(new mn.a()));
            s.connect(), (this.events = s);
          } else
            this.worker = this.events = this.registration = Object(rn.a)(() =>
              on(
                new Error(
                  'Service workers are disabled or not supported by this browser'
                )
              )
            );
        }
        postMessage(t, e) {
          return this.worker
            .pipe(
              Object(Sn.a)(1),
              Object(En.a)((n) => {
                n.postMessage(Object.assign({ action: t }, e));
              })
            )
            .toPromise()
            .then(() => {});
        }
        postMessageWithStatus(t, e, n) {
          const r = this.waitForStatus(n),
            s = this.postMessage(t, e);
          return Promise.all([r, s]).then(() => {});
        }
        generateNonce() {
          return Math.round(1e7 * Math.random());
        }
        eventsOfType(t) {
          return this.events.pipe(Object(vn.a)((e) => e.type === t));
        }
        nextEventOfType(t) {
          return this.eventsOfType(t).pipe(Object(Sn.a)(1));
        }
        waitForStatus(t) {
          return this.eventsOfType('STATUS')
            .pipe(
              Object(vn.a)((e) => e.nonce === t),
              Object(Sn.a)(1),
              Object(un.a)((t) => {
                if (!t.status) throw new Error(t.error);
              })
            )
            .toPromise();
        }
        get isEnabled() {
          return !!this.serviceWorker;
        }
      }
      let Fn = (() => {
          class t {
            constructor(t) {
              if (
                ((this.sw = t),
                (this.subscriptionChanges = new mn.a()),
                !t.isEnabled)
              )
                return (
                  (this.messages = yn),
                  (this.notificationClicks = yn),
                  void (this.subscription = yn)
                );
              (this.messages = this.sw
                .eventsOfType('PUSH')
                .pipe(Object(un.a)((t) => t.data))),
                (this.notificationClicks = this.sw
                  .eventsOfType('NOTIFICATION_CLICK')
                  .pipe(Object(un.a)((t) => t.data))),
                (this.pushManager = this.sw.registration.pipe(
                  Object(un.a)((t) => t.pushManager)
                ));
              const e = this.pushManager.pipe(
                Object(_n.a)((t) => t.getSubscription())
              );
              this.subscription = Object(bn.a)(e, this.subscriptionChanges);
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            requestSubscription(t) {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Dn));
              const e = { userVisibleOnly: !0 };
              let n = this.decodeBase64(
                  t.serverPublicKey.replace(/_/g, '/').replace(/-/g, '+')
                ),
                r = new Uint8Array(new ArrayBuffer(n.length));
              for (let s = 0; s < n.length; s++) r[s] = n.charCodeAt(s);
              return (
                (e.applicationServerKey = r),
                this.pushManager
                  .pipe(
                    Object(_n.a)((t) => t.subscribe(e)),
                    Object(Sn.a)(1)
                  )
                  .toPromise()
                  .then((t) => (this.subscriptionChanges.next(t), t))
              );
            }
            unsubscribe() {
              return this.sw.isEnabled
                ? this.subscription
                    .pipe(
                      Object(Sn.a)(1),
                      Object(_n.a)((t) => {
                        if (null === t)
                          throw new Error(
                            'Not subscribed to push notifications.'
                          );
                        return t.unsubscribe().then((t) => {
                          if (!t) throw new Error('Unsubscribe failed!');
                          this.subscriptionChanges.next(null);
                        });
                      })
                    )
                    .toPromise()
                : Promise.reject(new Error(Dn));
            }
            decodeBase64(t) {
              return atob(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(Ln));
            }),
            (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        zn = (() => {
          class t {
            constructor(t) {
              if (((this.sw = t), !t.isEnabled))
                return (
                  (this.available = yn),
                  (this.activated = yn),
                  void (this.unrecoverable = yn)
                );
              (this.available = this.sw.eventsOfType('UPDATE_AVAILABLE')),
                (this.activated = this.sw.eventsOfType('UPDATE_ACTIVATED')),
                (this.unrecoverable = this.sw.eventsOfType(
                  'UNRECOVERABLE_STATE'
                ));
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            checkForUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Dn));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithStatus(
                'CHECK_FOR_UPDATES',
                { statusNonce: t },
                t
              );
            }
            activateUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Dn));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithStatus(
                'ACTIVATE_UPDATE',
                { statusNonce: t },
                t
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Mb(Ln));
            }),
            (t.ɵprov = s.Cb({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class Hn {}
      const Un = new s.r('NGSW_REGISTER_SCRIPT');
      function $n(t, e, n, r) {
        return () => {
          if (
            !Object(i.k)(r) ||
            !('serviceWorker' in navigator) ||
            !1 === n.enabled
          )
            return;
          let o;
          if (
            (navigator.serviceWorker.addEventListener(
              'controllerchange',
              () => {
                null !== navigator.serviceWorker.controller &&
                  navigator.serviceWorker.controller.postMessage({
                    action: 'INITIALIZE'
                  });
              }
            ),
            'function' == typeof n.registrationStrategy)
          )
            o = n.registrationStrategy();
          else {
            const [e, ...r] = (
              n.registrationStrategy || 'registerWhenStable:30000'
            ).split(':');
            switch (e) {
              case 'registerImmediately':
                o = Object(fn.a)(null);
                break;
              case 'registerWithDelay':
                o = Vn(+r[0] || 0);
                break;
              case 'registerWhenStable':
                o = r[0] ? Object(bn.a)(qn(t), Vn(+r[0])) : qn(t);
                break;
              default:
                throw new Error(
                  `Unknown ServiceWorker registration strategy: ${n.registrationStrategy}`
                );
            }
          }
          t.get(s.A).runOutsideAngular(() =>
            o
              .pipe(Object(Sn.a)(1))
              .subscribe(() =>
                navigator.serviceWorker
                  .register(e, { scope: n.scope })
                  .catch((t) =>
                    console.error('Service worker registration failed with:', t)
                  )
              )
          );
        };
      }
      function Vn(t) {
        return Object(fn.a)(null).pipe(
          (function (t, e = jn) {
            var n;
            const r =
              (n = t) instanceof Date && !isNaN(+n)
                ? +t - e.now()
                : Math.abs(t);
            return (t) => t.lift(new Nn(r, e));
          })(t)
        );
      }
      function qn(t) {
        return t.get(s.g).isStable.pipe(Object(vn.a)((t) => t));
      }
      function Bn(t, e) {
        return new Ln(
          Object(i.k)(e) && !1 !== t.enabled ? navigator.serviceWorker : void 0
        );
      }
      let Wn = (() => {
        class t {
          static register(e, n = {}) {
            return {
              ngModule: t,
              providers: [
                { provide: Un, useValue: e },
                { provide: Hn, useValue: n },
                { provide: Ln, useFactory: Bn, deps: [Hn, s.C] },
                {
                  provide: s.d,
                  useFactory: $n,
                  deps: [s.s, Un, Hn, s.C],
                  multi: !0
                }
              ]
            };
          }
        }
        return (
          (t.ɵmod = s.Eb({ type: t })),
          (t.ɵinj = s.Db({
            factory: function (e) {
              return new (e || t)();
            },
            providers: [Fn, zn]
          })),
          t
        );
      })();
      const Qn = [
          {
            path: '',
            loadChildren: () =>
              Promise.resolve()
                .then(n.bind(null, 'dgmN'))
                .then((t) => t.PagesModule)
          },
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: '**', redirectTo: 'home' }
        ],
        Gn = {
          useHash: !0,
          scrollPositionRestoration: 'enabled',
          preloadingStrategy: j.a
        };
      let Zn = (() => {
          class t {}
          return (
            (t.ɵmod = s.Eb({ type: t })),
            (t.ɵinj = s.Db({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[j.b.forRoot(Qn, Gn)], j.b]
            })),
            t
          );
        })(),
        Kn = (() => {
          class t {}
          return (
            (t.ɵmod = s.Eb({ type: t, bootstrap: [A] })),
            (t.ɵinj = s.Db({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [
                [
                  r.a,
                  nn,
                  Wn.register('ngsw-worker.js', { enabled: d.production }),
                  Zn,
                  u.PagesModule,
                  l
                ]
              ]
            })),
            t
          );
        })();
      d.production && Object(s.S)(),
        r
          .c()
          .bootstrapModule(Kn)
          .catch((t) => console.error(t));
    },
    zn8P: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = 'zn8P');
    },
    zwU1: function (t, e, n) {
      'use strict';
      n.r(e), (e.default = n.p + 'logo.2b6469381fc58bba38b8.png');
    },
    zx2A: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      }),
        n.d(e, 'b', function () {
          return a;
        }),
        n.d(e, 'c', function () {
          return c;
        });
      var r = n('7o/Q'),
        s = n('HDdC'),
        i = n('SeVD');
      class o extends r.a {
        constructor(t) {
          super(), (this.parent = t);
        }
        _next(t) {
          this.parent.notifyNext(t);
        }
        _error(t) {
          this.parent.notifyError(t), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class a extends r.a {
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyError(t) {
          this.destination.error(t);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function c(t, e) {
        if (!e.closed)
          return t instanceof s.a ? t.subscribe(e) : Object(i.a)(t)(e);
      }
    }
  },
  [[0, 0]]
]);
