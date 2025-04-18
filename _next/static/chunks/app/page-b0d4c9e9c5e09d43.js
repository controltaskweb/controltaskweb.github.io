(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    6658: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 4880)),
        Promise.resolve().then(n.bind(n, 4114))
    },
    4880: function(e, t, n) {
        "use strict";
        n.d(t, {
            default: function() {
                return i
            }
        });
        var s = n(7437);
        function i() {
            let e = e => {
                let t = document.getElementById(e);
                t && t.scrollIntoView({
                    behavior: "smooth"
                })
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: "relative min-h-screen flex items-center justify-center overflow-hidden",
                children: [(0,
                s.jsx)("div", {
                    className: "absolute z-10 w-64 h-64 md:w-96 md:h-96 opacity-80",
                    children: (0,
                    s.jsxs)("div", {
                        className: "relative w-full h-full",
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute inset-0 bg-teal-400 rounded-lg transform rotate-12 translate-x-4 translate-y-4"
                        }), (0,
                        s.jsx)("div", {
                            className: "absolute inset-0 bg-white/30 backdrop-blur-sm rounded-lg transform -rotate-6"
                        })]
                    })
                }), (0,
                s.jsxs)("div", {
                    className: "relative z-20 text-center px-4 max-w-5xl",
                    children: [(0,
                    s.jsx)("h1", {
                        className: "text-5xl md:text-7xl font-bold text-white mb-6",
                        children: "Control Task Technology Consulting"
                    }), (0,
                    s.jsx)("p", {
                        className: "text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto",
                        children: "Guiding organizations through digital transformation with strategic discipline, specializing in AI agent design, hosting, training, optimization, and operation."
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [(0,
                        s.jsx)("button", {
                            onClick: () => e("services"),
                            className: "px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-black/80 transition-colors",
                            children: "Our Services"
                        }), (0,
                        s.jsx)("button", {
                            onClick: () => e("contact"),
                            className: "px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-md border border-white/30 hover:bg-white/20 transition-colors",
                            children: "Get in Touch"
                        })]
                    })]
                })]
            })
        }
        n(2265)
    },
    4114: function(e, t, n) {
        "use strict";
        n.d(t, {
            default: function() {
                return a
            }
        });
        var s = n(7437)
          , i = n(7648)
          , o = n(3145);
        function a() {
            let e = e => {
                let t = document.getElementById(e);
                t && t.scrollIntoView({
                    behavior: "smooth"
                })
            }
            ;
            return (0,
            s.jsx)("nav", {
                className: "fixed top-0 left-0 right-0 z-50 px-4 py-3",
                children: (0,
                s.jsxs)("div", {
                    className: "max-w-7xl mx-auto flex items-center justify-between",
                    children: [(0,
                    s.jsx)(i.default, {
                        href: "/",
                        className: "flex items-center",
                        children: (0,
                        s.jsx)(o.default, {
                            src: "/controltask_logo.gif",
                            alt: "ControlTask Logo",
                            width: 240,
                            height: 76,
                            className: "h-auto",
                            quality: 100
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "hidden md:flex space-x-1",
                        children: [{
                            name: "SERVICES",
                            id: "services"
                        }, {
                            name: "ABOUT",
                            id: "about"
                        }, {
                            name: "AI AGENTS",
                            id: "ai-agents"
                        }, {
                            name: "CONTACT",
                            id: "contact"
                        }].map(t => (0,
                        s.jsx)("button", {
                            onClick: () => e(t.id),
                            className: "px-4 py-2 text-white hover:bg-black/10 rounded-md font-medium cursor-pointer",
                            children: t.name
                        }, t.name))
                    }), (0,
                    s.jsx)("button", {
                        className: "md:hidden text-white",
                        children: (0,
                        s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            className: "w-6 h-6",
                            children: (0,
                            s.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 6h16M4 12h16M4 18h16"
                            })
                        })
                    })]
                })
            })
        }
    }
}, function(e) {
    e.O(0, [726, 971, 117, 744], function() {
        return e(e.s = 6658)
    }),
    _N_E = e.O()
}
]);
