"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[726], {
    3145: function(e, t, n) {
        n.d(t, {
            default: function() {
                return o.a
            }
        });
        var r = n(8461)
          , o = n.n(r)
    },
    7648: function(e, t, n) {
        n.d(t, {
            default: function() {
                return o.a
            }
        });
        var r = n(2972)
          , o = n.n(r)
    },
    5449: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "addLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(8521);
        let r = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return e
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    6958: function(e, t, n) {
        function r(e, t, n, r) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(8521),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5878: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return v
            }
        });
        let r = n(7043)
          , o = n(3099)
          , i = n(7437)
          , a = o._(n(2265))
          , l = r._(n(4887))
          , u = r._(n(8293))
          , s = n(5346)
          , c = n(128)
          , f = n(2589);
        n(1765);
        let d = n(5523)
          , p = r._(n(5084))
          , h = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function m(e, t, n, r, o, i, a) {
            let l = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l,
            ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && o(!0),
                    null == n ? void 0 : n.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let r = !1
                          , o = !1;
                        n.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => r,
                            isPropagationStopped: () => o,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                r = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                o = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == r ? void 0 : r.current) && r.current(e)
                }
            }
            ))
        }
        function g(e) {
            return a.use ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let y = (0,
        a.forwardRef)( (e, t) => {
            let {src: n, srcSet: r, sizes: o, height: l, width: u, decoding: s, className: c, style: f, fetchPriority: d, placeholder: p, loading: h, unoptimized: y, fill: b, onLoadRef: v, onLoadingCompleteRef: _, setBlurComplete: P, setShowAltText: j, sizesInput: w, onLoad: O, onError: S, ...x} = e;
            return (0,
            i.jsx)("img", {
                ...x,
                ...g(d),
                loading: h,
                width: u,
                height: l,
                decoding: s,
                "data-nimg": b ? "fill" : "1",
                className: c,
                style: f,
                sizes: o,
                srcSet: r,
                src: n,
                ref: (0,
                a.useCallback)(e => {
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (S && (e.src = e.src),
                    e.complete && m(e, p, v, _, P, y, w))
                }
                , [n, p, v, _, P, S, y, w, t]),
                onLoad: e => {
                    m(e.currentTarget, p, v, _, P, y, w)
                }
                ,
                onError: e => {
                    j(!0),
                    "empty" !== p && P(!0),
                    S && S(e)
                }
            })
        }
        );
        function b(e) {
            let {isAppRouter: t, imgAttributes: n} = e
              , r = {
                as: "image",
                imageSrcSet: n.srcSet,
                imageSizes: n.sizes,
                crossOrigin: n.crossOrigin,
                referrerPolicy: n.referrerPolicy,
                ...g(n.fetchPriority)
            };
            return t && l.default.preload ? (l.default.preload(n.src, r),
            null) : (0,
            i.jsx)(u.default, {
                children: (0,
                i.jsx)("link", {
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src,
                    ...r
                }, "__nimg-" + n.src + n.srcSet + n.sizes)
            })
        }
        let v = (0,
        a.forwardRef)( (e, t) => {
            let n = (0,
            a.useContext)(d.RouterContext)
              , r = (0,
            a.useContext)(f.ImageConfigContext)
              , o = (0,
            a.useMemo)( () => {
                var e;
                let t = h || r || c.imageConfigDefault
                  , n = [...t.deviceSizes, ...t.imageSizes].sort( (e, t) => e - t)
                  , o = t.deviceSizes.sort( (e, t) => e - t)
                  , i = null == (e = t.qualities) ? void 0 : e.sort( (e, t) => e - t);
                return {
                    ...t,
                    allSizes: n,
                    deviceSizes: o,
                    qualities: i
                }
            }
            , [r])
              , {onLoad: l, onLoadingComplete: u} = e
              , m = (0,
            a.useRef)(l);
            (0,
            a.useEffect)( () => {
                m.current = l
            }
            , [l]);
            let g = (0,
            a.useRef)(u);
            (0,
            a.useEffect)( () => {
                g.current = u
            }
            , [u]);
            let[v,_] = (0,
            a.useState)(!1)
              , [P,j] = (0,
            a.useState)(!1)
              , {props: w, meta: O} = (0,
            s.getImgProps)(e, {
                defaultLoader: p.default,
                imgConf: o,
                blurComplete: v,
                showAltText: P
            });
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(y, {
                    ...w,
                    unoptimized: O.unoptimized,
                    placeholder: O.placeholder,
                    fill: O.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: g,
                    setBlurComplete: _,
                    setShowAltText: j,
                    sizesInput: e.sizes,
                    ref: t
                }), O.priority ? (0,
                i.jsx)(b, {
                    isAppRouter: !n,
                    imgAttributes: w
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    2972: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return _
            }
        });
        let r = n(7043)
          , o = n(7437)
          , i = r._(n(2265))
          , a = n(5246)
          , l = n(3552)
          , u = n(7497)
          , s = n(3987)
          , c = n(5449)
          , f = n(5523)
          , d = n(1956)
          , p = n(6081)
          , h = n(6958)
          , m = n(1634)
          , g = n(4673)
          , y = new Set;
        function b(e, t, n, r, o, i) {
            if ("undefined" != typeof window && (i || (0,
            l.isLocalURL)(t))) {
                if (!r.bypassPrefetchedCheck) {
                    let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0);
                    if (y.has(o))
                        return;
                    y.add(o)
                }
                (async () => i ? e.prefetch(t, o) : e.prefetch(t, n, r))().catch(e => {}
                )
            }
        }
        function v(e) {
            return "string" == typeof e ? e : (0,
            u.formatUrl)(e)
        }
        let _ = i.default.forwardRef(function(e, t) {
            let n, r;
            let {href: u, as: y, children: _, prefetch: P=null, passHref: j, replace: w, shallow: O, scroll: S, locale: x, onClick: R, onMouseEnter: E, onTouchStart: C, legacyBehavior: M=!1, ...I} = e;
            n = _,
            M && ("string" == typeof n || "number" == typeof n) && (n = (0,
            o.jsx)("a", {
                children: n
            }));
            let N = i.default.useContext(f.RouterContext)
              , k = i.default.useContext(d.AppRouterContext)
              , A = null != N ? N : k
              , z = !N
              , L = !1 !== P
              , T = null === P ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL
              , {href: U, as: D} = i.default.useMemo( () => {
                if (!N) {
                    let e = v(u);
                    return {
                        href: e,
                        as: y ? v(y) : e
                    }
                }
                let[e,t] = (0,
                a.resolveHref)(N, u, !0);
                return {
                    href: e,
                    as: y ? (0,
                    a.resolveHref)(N, y) : t || e
                }
            }
            , [N, u, y])
              , W = i.default.useRef(U)
              , F = i.default.useRef(D);
            M && (r = i.default.Children.only(n));
            let q = M ? r && "object" == typeof r && r.ref : t
              , [B,K,$] = (0,
            p.useIntersection)({
                rootMargin: "200px"
            })
              , G = i.default.useCallback(e => {
                (F.current !== D || W.current !== U) && ($(),
                F.current = D,
                W.current = U),
                B(e),
                q && ("function" == typeof q ? q(e) : "object" == typeof q && (q.current = e))
            }
            , [D, q, U, $, B]);
            i.default.useEffect( () => {
                A && K && L && b(A, U, D, {
                    locale: x
                }, {
                    kind: T
                }, z)
            }
            , [D, U, K, x, L, null == N ? void 0 : N.locale, A, z, T]);
            let V = {
                ref: G,
                onClick(e) {
                    M || "function" != typeof R || R(e),
                    M && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    A && !e.defaultPrevented && function(e, t, n, r, o, a, u, s, c) {
                        let {nodeName: f} = e.currentTarget;
                        if ("A" === f.toUpperCase() && (function(e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !c && !(0,
                        l.isLocalURL)(n)))
                            return;
                        e.preventDefault();
                        let d = () => {
                            let e = null == u || u;
                            "beforePopState"in t ? t[o ? "replace" : "push"](n, r, {
                                shallow: a,
                                locale: s,
                                scroll: e
                            }) : t[o ? "replace" : "push"](r || n, {
                                scroll: e
                            })
                        }
                        ;
                        c ? i.default.startTransition(d) : d()
                    }(e, A, U, D, w, O, S, x, z)
                },
                onMouseEnter(e) {
                    M || "function" != typeof E || E(e),
                    M && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    A && (L || !z) && b(A, U, D, {
                        locale: x,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: T
                    }, z)
                },
                onTouchStart: function(e) {
                    M || "function" != typeof C || C(e),
                    M && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    A && (L || !z) && b(A, U, D, {
                        locale: x,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: T
                    }, z)
                }
            };
            if ((0,
            s.isAbsoluteUrl)(D))
                V.href = D;
            else if (!M || j || "a" === r.type && !("href"in r.props)) {
                let e = void 0 !== x ? x : null == N ? void 0 : N.locale
                  , t = (null == N ? void 0 : N.isLocaleDomain) && (0,
                h.getDomainLocale)(D, e, null == N ? void 0 : N.locales, null == N ? void 0 : N.domainLocales);
                V.href = t || (0,
                m.addBasePath)((0,
                c.addLocale)(D, e, null == N ? void 0 : N.defaultLocale))
            }
            return M ? i.default.cloneElement(r, V) : (0,
            o.jsx)("a", {
                ...I,
                ...V,
                children: n
            })
        });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    3515: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            cancelIdleCallback: function() {
                return r
            },
            requestIdleCallback: function() {
                return n
            }
        });
        let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        }
          , r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        }
        ;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5246: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "resolveHref", {
            enumerable: !0,
            get: function() {
                return f
            }
        });
        let r = n(8637)
          , o = n(7497)
          , i = n(7053)
          , a = n(3987)
          , l = n(8521)
          , u = n(3552)
          , s = n(6279)
          , c = n(7205);
        function f(e, t, n) {
            let f;
            let d = "string" == typeof t ? t : (0,
            o.formatWithValidation)(t)
              , p = d.match(/^[a-zA-Z]{1,}:\/\//)
              , h = p ? d.slice(p[0].length) : d;
            if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                console.error("Invalid href '" + d + "' passed to next/router in page: '" + e.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                let t = (0,
                a.normalizeRepeatedSlashes)(h);
                d = (p ? p[0] : "") + t
            }
            if (!(0,
            u.isLocalURL)(d))
                return n ? [d] : d;
            try {
                f = new URL(d.startsWith("#") ? e.asPath : e.pathname,"http://n")
            } catch (e) {
                f = new URL("/","http://n")
            }
            try {
                let e = new URL(d,f);
                e.pathname = (0,
                l.normalizePathTrailingSlash)(e.pathname);
                let t = "";
                if ((0,
                s.isDynamicRoute)(e.pathname) && e.searchParams && n) {
                    let n = (0,
                    r.searchParamsToUrlQuery)(e.searchParams)
                      , {result: a, params: l} = (0,
                    c.interpolateAs)(e.pathname, e.pathname, n);
                    a && (t = (0,
                    o.formatWithValidation)({
                        pathname: a,
                        hash: e.hash,
                        query: (0,
                        i.omit)(n, l)
                    }))
                }
                let a = e.origin === f.origin ? e.href.slice(e.origin.length) : e.href;
                return n ? [a, t || a] : a
            } catch (e) {
                return n ? [d] : d
            }
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    6081: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let r = n(2265)
          , o = n(3515)
          , i = "function" == typeof IntersectionObserver
          , a = new Map
          , l = [];
        function u(e) {
            let {rootRef: t, rootMargin: n, disabled: u} = e
              , s = u || !i
              , [c,f] = (0,
            r.useState)(!1)
              , d = (0,
            r.useRef)(null)
              , p = (0,
            r.useCallback)(e => {
                d.current = e
            }
            , []);
            return (0,
            r.useEffect)( () => {
                if (i) {
                    if (s || c)
                        return;
                    let e = d.current;
                    if (e && e.tagName)
                        return function(e, t, n) {
                            let {id: r, observer: o, elements: i} = function(e) {
                                let t;
                                let n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , r = l.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = a.get(r)))
                                    return t;
                                let o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target)
                                              , n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        }
                                        )
                                    }
                                    ,e),
                                    elements: o
                                },
                                l.push(n),
                                a.set(n, t),
                                t
                            }(n);
                            return i.set(e, t),
                            o.observe(e),
                            function() {
                                if (i.delete(e),
                                o.unobserve(e),
                                0 === i.size) {
                                    o.disconnect(),
                                    a.delete(r);
                                    let e = l.findIndex(e => e.root === r.root && e.margin === r.margin);
                                    e > -1 && l.splice(e, 1)
                                }
                            }
                        }(e, e => e && f(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                } else if (!c) {
                    let e = (0,
                    o.requestIdleCallback)( () => f(!0));
                    return () => (0,
                    o.cancelIdleCallback)(e)
                }
            }
            , [s, n, t, c, d.current]),
            [p, c, (0,
            r.useCallback)( () => {
                f(!1)
            }
            , [])]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    1436: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = n(7043)._(n(2265)).default.createContext({})
    },
    3964: function(e, t) {
        function n(e) {
            let {ampFirst: t=!1, hybrid: n=!1, hasQuery: r=!1} = void 0 === e ? {} : e;
            return t || n && r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    42: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "escapeStringRegexp", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = /[|\\{}()[\]^$+*?.-]/
          , r = /[|\\{}()[\]^$+*?.-]/g;
        function o(e) {
            return n.test(e) ? e.replace(r, "\\$&") : e
        }
    },
    5346: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return l
            }
        }),
        n(1765);
        let r = n(6496)
          , o = n(128);
        function i(e) {
            return void 0 !== e.default
        }
        function a(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function l(e, t) {
            var n, l;
            let u, s, c, {src: f, sizes: d, unoptimized: p=!1, priority: h=!1, loading: m, className: g, quality: y, width: b, height: v, fill: _=!1, style: P, overrideSrc: j, onLoad: w, onLoadingComplete: O, placeholder: S="empty", blurDataURL: x, fetchPriority: R, decoding: E="async", layout: C, objectFit: M, objectPosition: I, lazyBoundary: N, lazyRoot: k, ...A} = e, {imgConf: z, showAltText: L, blurComplete: T, defaultLoader: U} = t, D = z || o.imageConfigDefault;
            if ("allSizes"in D)
                u = D;
            else {
                let e = [...D.deviceSizes, ...D.imageSizes].sort( (e, t) => e - t)
                  , t = D.deviceSizes.sort( (e, t) => e - t)
                  , r = null == (n = D.qualities) ? void 0 : n.sort( (e, t) => e - t);
                u = {
                    ...D,
                    allSizes: e,
                    deviceSizes: t,
                    qualities: r
                }
            }
            if (void 0 === U)
                throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let W = A.loader || U;
            delete A.loader,
            delete A.srcSet;
            let F = "__next_img_default"in W;
            if (F) {
                if ("custom" === u.loader)
                    throw Error('Image with src "' + f + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = W;
                W = t => {
                    let {config: n, ...r} = t;
                    return e(r)
                }
            }
            if (C) {
                "fill" === C && (_ = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[C];
                e && (P = {
                    ...P,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[C];
                t && !d && (d = t)
            }
            let q = ""
              , B = a(b)
              , K = a(v);
            if ("object" == typeof (l = f) && (i(l) || void 0 !== l.src)) {
                let e = i(f) ? f.default : f;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (s = e.blurWidth,
                c = e.blurHeight,
                x = x || e.blurDataURL,
                q = e.src,
                !_) {
                    if (B || K) {
                        if (B && !K) {
                            let t = B / e.width;
                            K = Math.round(e.height * t)
                        } else if (!B && K) {
                            let t = K / e.height;
                            B = Math.round(e.width * t)
                        }
                    } else
                        B = e.width,
                        K = e.height
                }
            }
            let $ = !h && ("lazy" === m || void 0 === m);
            (!(f = "string" == typeof f ? f : q) || f.startsWith("data:") || f.startsWith("blob:")) && (p = !0,
            $ = !1),
            u.unoptimized && (p = !0),
            F && f.endsWith(".svg") && !u.dangerouslyAllowSVG && (p = !0),
            h && (R = "high");
            let G = a(y)
              , V = Object.assign(_ ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: M,
                objectPosition: I
            } : {}, L ? {} : {
                color: "transparent"
            }, P)
              , Y = T || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            r.getImageBlurSvg)({
                widthInt: B,
                heightInt: K,
                blurWidth: s,
                blurHeight: c,
                blurDataURL: x || "",
                objectFit: V.objectFit
            }) + '")' : 'url("' + S + '")'
              , H = Y ? {
                backgroundSize: V.objectFit || "cover",
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y
            } : {}
              , Q = function(e) {
                let {config: t, src: n, unoptimized: r, width: o, quality: i, sizes: a, loader: l} = e;
                if (r)
                    return {
                        src: n,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: u, kind: s} = function(e, t, n) {
                    let {deviceSizes: r, allSizes: o} = e;
                    if (n) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let r; r = e.exec(n); r)
                            t.push(parseInt(r[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: o.filter(t => t >= r[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: o,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: r,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                        kind: "x"
                    }
                }(t, o, a)
                  , c = u.length - 1;
                return {
                    sizes: a || "w" !== s ? a : "100vw",
                    srcSet: u.map( (e, r) => l({
                        config: t,
                        src: n,
                        quality: i,
                        width: e
                    }) + " " + ("w" === s ? e : r + 1) + s).join(", "),
                    src: l({
                        config: t,
                        src: n,
                        quality: i,
                        width: u[c]
                    })
                }
            }({
                config: u,
                src: f,
                unoptimized: p,
                width: B,
                quality: G,
                sizes: d,
                loader: W
            });
            return {
                props: {
                    ...A,
                    loading: $ ? "lazy" : m,
                    fetchPriority: R,
                    width: B,
                    height: K,
                    decoding: E,
                    className: g,
                    style: {
                        ...V,
                        ...H
                    },
                    sizes: Q.sizes,
                    srcSet: Q.srcSet,
                    src: j || Q.src
                },
                meta: {
                    unoptimized: p,
                    priority: h,
                    placeholder: S,
                    fill: _
                }
            }
        }
    },
    8293: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            default: function() {
                return m
            },
            defaultHead: function() {
                return f
            }
        });
        let r = n(7043)
          , o = n(3099)
          , i = n(7437)
          , a = o._(n(2265))
          , l = r._(n(7421))
          , u = n(1436)
          , s = n(8701)
          , c = n(3964);
        function f(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            i.jsx)("meta", {
                charSet: "utf-8"
            })];
            return e || t.push((0,
            i.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function d(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        n(1765);
        let p = ["name", "httpEquiv", "charSet", "itemProp"];
        function h(e, t) {
            let {inAmpMode: n} = t;
            return e.reduce(d, []).reverse().concat(f(n).reverse()).filter(function() {
                let e = new Set
                  , t = new Set
                  , n = new Set
                  , r = {};
                return o => {
                    let i = !0
                      , a = !1;
                    if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                        a = !0;
                        let t = o.key.slice(o.key.indexOf("$") + 1);
                        e.has(t) ? i = !1 : e.add(t)
                    }
                    switch (o.type) {
                    case "title":
                    case "base":
                        t.has(o.type) ? i = !1 : t.add(o.type);
                        break;
                    case "meta":
                        for (let e = 0, t = p.length; e < t; e++) {
                            let t = p[e];
                            if (o.props.hasOwnProperty(t)) {
                                if ("charSet" === t)
                                    n.has(t) ? i = !1 : n.add(t);
                                else {
                                    let e = o.props[t]
                                      , n = r[t] || new Set;
                                    ("name" !== t || !a) && n.has(e) ? i = !1 : (n.add(e),
                                    r[t] = n)
                                }
                            }
                        }
                    }
                    return i
                }
            }()).reverse().map( (e, t) => {
                let r = e.key || t;
                if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                    let t = {
                        ...e.props || {}
                    };
                    return t["data-href"] = t.href,
                    t.href = void 0,
                    t["data-optimized-fonts"] = !0,
                    a.default.cloneElement(e, t)
                }
                return a.default.cloneElement(e, {
                    key: r
                })
            }
            )
        }
        let m = function(e) {
            let {children: t} = e
              , n = (0,
            a.useContext)(u.AmpStateContext)
              , r = (0,
            a.useContext)(s.HeadManagerContext);
            return (0,
            i.jsx)(l.default, {
                reduceComponentsToState: h,
                headManager: r,
                inAmpMode: (0,
                c.isInAmpMode)(n),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    6496: function(e, t) {
        function n(e) {
            let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: o, blurDataURL: i, objectFit: a} = e
              , l = r ? 40 * r : t
              , u = o ? 40 * o : n
              , s = l && u ? "viewBox='0 0 " + l + " " + u + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + s + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (s ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    2589: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let r = n(7043)._(n(2265))
          , o = n(128)
          , i = r.default.createContext(o.imageConfigDefault)
    },
    128: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            VALID_LOADERS: function() {
                return n
            },
            imageConfigDefault: function() {
                return r
            }
        });
        let n = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , r = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: void 0,
            unoptimized: !1
        }
    },
    8461: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            default: function() {
                return u
            },
            getImageProps: function() {
                return l
            }
        });
        let r = n(7043)
          , o = n(5346)
          , i = n(5878)
          , a = r._(n(5084));
        function l(e) {
            let {props: t} = (0,
            o.getImgProps)(e, {
                defaultLoader: a.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,n] of Object.entries(t))
                void 0 === n && delete t[e];
            return {
                props: t
            }
        }
        let u = i.Image
    },
    5084: function(e, t) {
        function n(e) {
            var t;
            let {config: n, src: r, width: o, quality: i} = e
              , a = i || (null == (t = n.qualities) ? void 0 : t.reduce( (e, t) => Math.abs(t - 75) < Math.abs(e - 75) ? t : e)) || 75;
            return r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n.__next_img_default = !0;
        let r = n
    },
    5523: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "RouterContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = n(7043)._(n(2265)).default.createContext(null)
    },
    7497: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            formatUrl: function() {
                return i
            },
            formatWithValidation: function() {
                return l
            },
            urlObjectKeys: function() {
                return a
            }
        });
        let r = n(3099)._(n(8637))
          , o = /https?|ftp|gopher|file/;
        function i(e) {
            let {auth: t, hostname: n} = e
              , i = e.protocol || ""
              , a = e.pathname || ""
              , l = e.hash || ""
              , u = e.query || ""
              , s = !1;
            t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
            e.host ? s = t + e.host : n && (s = t + (~n.indexOf(":") ? "[" + n + "]" : n),
            e.port && (s += ":" + e.port)),
            u && "object" == typeof u && (u = String(r.urlQueryToSearchParams(u)));
            let c = e.search || u && "?" + u || "";
            return i && !i.endsWith(":") && (i += ":"),
            e.slashes || (!i || o.test(i)) && !1 !== s ? (s = "//" + (s || ""),
            a && "/" !== a[0] && (a = "/" + a)) : s || (s = ""),
            l && "#" !== l[0] && (l = "#" + l),
            c && "?" !== c[0] && (c = "?" + c),
            "" + i + s + (a = a.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + l
        }
        let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function l(e) {
            return i(e)
        }
    },
    6279: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            getSortedRoutes: function() {
                return r.getSortedRoutes
            },
            isDynamicRoute: function() {
                return o.isDynamicRoute
            }
        });
        let r = n(4777)
          , o = n(8104)
    },
    7205: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "interpolateAs", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let r = n(4199)
          , o = n(9964);
        function i(e, t, n) {
            let i = ""
              , a = (0,
            o.getRouteRegex)(e)
              , l = a.groups
              , u = (t !== e ? (0,
            r.getRouteMatcher)(a)(t) : "") || n;
            i = e;
            let s = Object.keys(l);
            return s.every(e => {
                let t = u[e] || ""
                  , {repeat: n, optional: r} = l[e]
                  , o = "[" + (n ? "..." : "") + e + "]";
                return r && (o = (t ? "" : "/") + "[" + o + "]"),
                n && !Array.isArray(t) && (t = [t]),
                (r || e in u) && (i = i.replace(o, n ? t.map(e => encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/")
            }
            ) || (i = ""),
            {
                params: s,
                result: i
            }
        }
    },
    8104: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isDynamicRoute", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let r = n(1182)
          , o = /\/\[[^/]+?\](?=\/|$)/;
        function i(e) {
            return (0,
            r.isInterceptionRouteAppPath)(e) && (e = (0,
            r.extractInterceptionRouteInformation)(e).interceptedRoute),
            o.test(e)
        }
    },
    3552: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isLocalURL", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let r = n(3987)
          , o = n(1283);
        function i(e) {
            if (!(0,
            r.isAbsoluteUrl)(e))
                return !0;
            try {
                let t = (0,
                r.getLocationOrigin)()
                  , n = new URL(e,t);
                return n.origin === t && (0,
                o.hasBasePath)(n.pathname)
            } catch (e) {
                return !1
            }
        }
    },
    7053: function(e, t) {
        function n(e, t) {
            let n = {};
            return Object.keys(e).forEach(r => {
                t.includes(r) || (n[r] = e[r])
            }
            ),
            n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "omit", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    8637: function(e, t) {
        function n(e) {
            let t = {};
            return e.forEach( (e, n) => {
                void 0 === t[n] ? t[n] = e : Array.isArray(t[n]) ? t[n].push(e) : t[n] = [t[n], e]
            }
            ),
            t
        }
        function r(e) {
            return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
        }
        function o(e) {
            let t = new URLSearchParams;
            return Object.entries(e).forEach(e => {
                let[n,o] = e;
                Array.isArray(o) ? o.forEach(e => t.append(n, r(e))) : t.set(n, r(o))
            }
            ),
            t
        }
        function i(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return n.forEach(t => {
                Array.from(t.keys()).forEach(t => e.delete(t)),
                t.forEach( (t, n) => e.append(n, t))
            }
            ),
            e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            assign: function() {
                return i
            },
            searchParamsToUrlQuery: function() {
                return n
            },
            urlQueryToSearchParams: function() {
                return o
            }
        })
    },
    4199: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getRouteMatcher", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = n(3987);
        function o(e) {
            let {re: t, groups: n} = e;
            return e => {
                let o = t.exec(e);
                if (!o)
                    return !1;
                let i = e => {
                    try {
                        return decodeURIComponent(e)
                    } catch (e) {
                        throw new r.DecodeError("failed to decode param")
                    }
                }
                  , a = {};
                return Object.keys(n).forEach(e => {
                    let t = n[e]
                      , r = o[t.pos];
                    void 0 !== r && (a[e] = ~r.indexOf("/") ? r.split("/").map(e => i(e)) : t.repeat ? [i(r)] : i(r))
                }
                ),
                a
            }
        }
    },
    9964: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            getNamedMiddlewareRegex: function() {
                return d
            },
            getNamedRouteRegex: function() {
                return f
            },
            getRouteRegex: function() {
                return u
            },
            parseParameter: function() {
                return a
            }
        });
        let r = n(1182)
          , o = n(42)
          , i = n(6674);
        function a(e) {
            let t = e.startsWith("[") && e.endsWith("]");
            t && (e = e.slice(1, -1));
            let n = e.startsWith("...");
            return n && (e = e.slice(3)),
            {
                key: e,
                repeat: n,
                optional: t
            }
        }
        function l(e) {
            let t = (0,
            i.removeTrailingSlash)(e).slice(1).split("/")
              , n = {}
              , l = 1;
            return {
                parameterizedRoute: t.map(e => {
                    let t = r.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t))
                      , i = e.match(/\[((?:\[.*\])|.+)\]/);
                    if (t && i) {
                        let {key: e, optional: r, repeat: u} = a(i[1]);
                        return n[e] = {
                            pos: l++,
                            repeat: u,
                            optional: r
                        },
                        "/" + (0,
                        o.escapeStringRegexp)(t) + "([^/]+?)"
                    }
                    if (!i)
                        return "/" + (0,
                        o.escapeStringRegexp)(e);
                    {
                        let {key: e, repeat: t, optional: r} = a(i[1]);
                        return n[e] = {
                            pos: l++,
                            repeat: t,
                            optional: r
                        },
                        t ? r ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                    }
                }
                ).join(""),
                groups: n
            }
        }
        function u(e) {
            let {parameterizedRoute: t, groups: n} = l(e);
            return {
                re: RegExp("^" + t + "(?:/)?$"),
                groups: n
            }
        }
        function s(e) {
            let {interceptionMarker: t, getSafeRouteKey: n, segment: r, routeKeys: i, keyPrefix: l} = e
              , {key: u, optional: s, repeat: c} = a(r)
              , f = u.replace(/\W/g, "");
            l && (f = "" + l + f);
            let d = !1;
            (0 === f.length || f.length > 30) && (d = !0),
            isNaN(parseInt(f.slice(0, 1))) || (d = !0),
            d && (f = n()),
            l ? i[f] = "" + l + u : i[f] = u;
            let p = t ? (0,
            o.escapeStringRegexp)(t) : "";
            return c ? s ? "(?:/" + p + "(?<" + f + ">.+?))?" : "/" + p + "(?<" + f + ">.+?)" : "/" + p + "(?<" + f + ">[^/]+?)"
        }
        function c(e, t) {
            let n;
            let a = (0,
            i.removeTrailingSlash)(e).slice(1).split("/")
              , l = (n = 0,
            () => {
                let e = ""
                  , t = ++n;
                for (; t > 0; )
                    e += String.fromCharCode(97 + (t - 1) % 26),
                    t = Math.floor((t - 1) / 26);
                return e
            }
            )
              , u = {};
            return {
                namedParameterizedRoute: a.map(e => {
                    let n = r.INTERCEPTION_ROUTE_MARKERS.some(t => e.startsWith(t))
                      , i = e.match(/\[((?:\[.*\])|.+)\]/);
                    if (n && i) {
                        let[n] = e.split(i[0]);
                        return s({
                            getSafeRouteKey: l,
                            interceptionMarker: n,
                            segment: i[1],
                            routeKeys: u,
                            keyPrefix: t ? "nxtI" : void 0
                        })
                    }
                    return i ? s({
                        getSafeRouteKey: l,
                        segment: i[1],
                        routeKeys: u,
                        keyPrefix: t ? "nxtP" : void 0
                    }) : "/" + (0,
                    o.escapeStringRegexp)(e)
                }
                ).join(""),
                routeKeys: u
            }
        }
        function f(e, t) {
            let n = c(e, t);
            return {
                ...u(e),
                namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
                routeKeys: n.routeKeys
            }
        }
        function d(e, t) {
            let {parameterizedRoute: n} = l(e)
              , {catchAll: r=!0} = t;
            if ("/" === n)
                return {
                    namedRegex: "^/" + (r ? ".*" : "") + "$"
                };
            let {namedParameterizedRoute: o} = c(e, !1);
            return {
                namedRegex: "^" + o + (r ? "(?:(/.*)?)" : "") + "$"
            }
        }
    },
    4777: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getSortedRoutes", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        class n {
            insert(e) {
                this._insert(e.split("/").filter(Boolean), [], !1)
            }
            smoosh() {
                return this._smoosh()
            }
            _smoosh(e) {
                void 0 === e && (e = "/");
                let t = [...this.children.keys()].sort();
                null !== this.slugName && t.splice(t.indexOf("[]"), 1),
                null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
                null !== this.optionalRestSlugName && t.splice(t.indexOf("[[...]]"), 1);
                let n = t.map(t => this.children.get(t)._smoosh("" + e + t + "/")).reduce( (e, t) => [...e, ...t], []);
                if (null !== this.slugName && n.push(...this.children.get("[]")._smoosh(e + "[" + this.slugName + "]/")),
                !this.placeholder) {
                    let t = "/" === e ? "/" : e.slice(0, -1);
                    if (null != this.optionalRestSlugName)
                        throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + t + '" and "' + t + "[[..." + this.optionalRestSlugName + ']]").');
                    n.unshift(t)
                }
                return null !== this.restSlugName && n.push(...this.children.get("[...]")._smoosh(e + "[..." + this.restSlugName + "]/")),
                null !== this.optionalRestSlugName && n.push(...this.children.get("[[...]]")._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")),
                n
            }
            _insert(e, t, r) {
                if (0 === e.length) {
                    this.placeholder = !1;
                    return
                }
                if (r)
                    throw Error("Catch-all must be the last part of the URL.");
                let o = e[0];
                if (o.startsWith("[") && o.endsWith("]")) {
                    let n = o.slice(1, -1)
                      , a = !1;
                    if (n.startsWith("[") && n.endsWith("]") && (n = n.slice(1, -1),
                    a = !0),
                    n.startsWith("...") && (n = n.substring(3),
                    r = !0),
                    n.startsWith("[") || n.endsWith("]"))
                        throw Error("Segment names may not start or end with extra brackets ('" + n + "').");
                    if (n.startsWith("."))
                        throw Error("Segment names may not start with erroneous periods ('" + n + "').");
                    function i(e, n) {
                        if (null !== e && e !== n)
                            throw Error("You cannot use different slug names for the same dynamic path ('" + e + "' !== '" + n + "').");
                        t.forEach(e => {
                            if (e === n)
                                throw Error('You cannot have the same slug name "' + n + '" repeat within a single dynamic path');
                            if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                                throw Error('You cannot have the slug names "' + e + '" and "' + n + '" differ only by non-word symbols within a single dynamic path')
                        }
                        ),
                        t.push(n)
                    }
                    if (r) {
                        if (a) {
                            if (null != this.restSlugName)
                                throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + e[0] + '" ).');
                            i(this.optionalRestSlugName, n),
                            this.optionalRestSlugName = n,
                            o = "[[...]]"
                        } else {
                            if (null != this.optionalRestSlugName)
                                throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + e[0] + '").');
                            i(this.restSlugName, n),
                            this.restSlugName = n,
                            o = "[...]"
                        }
                    } else {
                        if (a)
                            throw Error('Optional route parameters are not yet supported ("' + e[0] + '").');
                        i(this.slugName, n),
                        this.slugName = n,
                        o = "[]"
                    }
                }
                this.children.has(o) || this.children.set(o, new n),
                this.children.get(o)._insert(e.slice(1), t, r)
            }
            constructor() {
                this.placeholder = !0,
                this.children = new Map,
                this.slugName = null,
                this.restSlugName = null,
                this.optionalRestSlugName = null
            }
        }
        function r(e) {
            let t = new n;
            return e.forEach(e => t.insert(e)),
            t.smoosh()
        }
    },
    7421: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let r = n(2265)
          , o = "undefined" == typeof window
          , i = o ? () => {}
        : r.useLayoutEffect
          , a = o ? () => {}
        : r.useEffect;
        function l(e) {
            let {headManager: t, reduceComponentsToState: n} = e;
            function l() {
                if (t && t.mountedInstances) {
                    let o = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(n(o, e))
                }
            }
            if (o) {
                var u;
                null == t || null == (u = t.mountedInstances) || u.add(e.children),
                l()
            }
            return i( () => {
                var n;
                return null == t || null == (n = t.mountedInstances) || n.add(e.children),
                () => {
                    var n;
                    null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                }
            }
            ),
            i( () => (t && (t._pendingUpdate = l),
            () => {
                t && (t._pendingUpdate = l)
            }
            )),
            a( () => (t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            () => {
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    },
    3987: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            DecodeError: function() {
                return h
            },
            MiddlewareNotFoundError: function() {
                return b
            },
            MissingStaticPage: function() {
                return y
            },
            NormalizeError: function() {
                return m
            },
            PageNotFoundError: function() {
                return g
            },
            SP: function() {
                return d
            },
            ST: function() {
                return p
            },
            WEB_VITALS: function() {
                return n
            },
            execOnce: function() {
                return r
            },
            getDisplayName: function() {
                return u
            },
            getLocationOrigin: function() {
                return a
            },
            getURL: function() {
                return l
            },
            isAbsoluteUrl: function() {
                return i
            },
            isResSent: function() {
                return s
            },
            loadGetInitialProps: function() {
                return f
            },
            normalizeRepeatedSlashes: function() {
                return c
            },
            stringifyError: function() {
                return v
            }
        });
        let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function r(e) {
            let t, n = !1;
            return function() {
                for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                return n || (n = !0,
                t = e(...o)),
                t
            }
        }
        let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , i = e => o.test(e);
        function a() {
            let {protocol: e, hostname: t, port: n} = window.location;
            return e + "//" + t + (n ? ":" + n : "")
        }
        function l() {
            let {href: e} = window.location
              , t = a();
            return e.substring(t.length)
        }
        function u(e) {
            return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
        }
        function s(e) {
            return e.finished || e.headersSent
        }
        function c(e) {
            let t = e.split("?");
            return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
        }
        async function f(e, t) {
            let n = t.res || t.ctx && t.ctx.res;
            if (!e.getInitialProps)
                return t.ctx && t.Component ? {
                    pageProps: await f(t.Component, t.ctx)
                } : {};
            let r = await e.getInitialProps(t);
            if (n && s(n))
                return r;
            if (!r)
                throw Error('"' + u(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.');
            return r
        }
        let d = "undefined" != typeof performance
          , p = d && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
        class h extends Error {
        }
        class m extends Error {
        }
        class g extends Error {
            constructor(e) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + e
            }
        }
        class y extends Error {
            constructor(e, t) {
                super(),
                this.message = "Failed to load static file for page: " + e + " " + t
            }
        }
        class b extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function v(e) {
            return JSON.stringify({
                message: e.message,
                stack: e.stack
            })
        }
    }
}]);
