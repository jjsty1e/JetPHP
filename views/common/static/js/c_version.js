/*! CHANGYAN2.5 2015-09-09 */
!function () {
    "use strict";

    function a(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    }

    function define(b, d, e) {
        if (c[b])throw new Error("Module " + b + " has been defined already.");
        a(d) && (e = d), c[b] = {factory: e, inited: !1, exports: null}
    }

    function b(b) {
        var module, exports, d, e;
        if (module = c[b], exports = {}, d = {}, !a(module.factory))throw new Error("Module " + b + " has no factory.");
        e = module.factory.call(void 0, require, exports, d), void 0 !== e ? module.exports = e : d.hasOwnProperty("exports") ? module.exports = d.exports : module.exports = exports, module.inited = !0
    }

    function require(a) {
        var module;
        if (module = c[a], !module)throw new Error("Module " + a + " is not defined.");
        return module.inited === !1 && b(a), module.exports
    }

    var c = {};
    define("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/app.js", function (require, exports, module) {
        exports.exec = function (a) {
            var b = require("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/util.js");
            window.SOHUCS = {};
            var c = {
                skinRedBlack: a.uri.res + "src/css/skin/black_red/default.css",
                skinRedBlackIE6: a.uri.res + "src/css/skin/black_red/changyan2-ie6-default.css",
                skinGreyBlack: a.uri.res + "src/css/skin/black_grey/default.css",
                skinGreyBlackIE6: a.uri.res + "src/css/skin/black_grey/changyan2-ie6-default.css",
                sinkRed: a.uri.res + "src/css/skin/default_red/default.css",
                sinkRedIE6: a.uri.res + "src/css/skin/default_red/changyan2-ie6-default.css",
                skinOrange: a.uri.res + "src/css/skin/default_orange/default.css",
                skinOrangeIE6: a.uri.res + "src/css/skin/default_orange/changyan2-ie6-default.css",
                skinIndigo: a.uri.res + "src/css/skin/default_indigo/default.css",
                skinIndigoIE6: a.uri.res + "src/css/skin/default_indigo/changyan2-ie6-default.css",
                sinkGreen: a.uri.res + "src/css/skin/default_green/default.css",
                sinkGreenIE6: a.uri.res + "src/css/skin/default_green/changyan2-ie6-default.css"
            };
            b.loadJs(a.uri.res + "src/lib/seajs/sea.v2.2.0.js?" + a.v, function () {
                window.changyan.seajs.version = a.v, window.changyan.seajs.config({
                    base: a.uri.res,
                    charset: "utf-8",
                    timeout: 1e3,
                    alias: c
                }), "custom" === a.cookie.debug && "true" === a.cookie.debug_res ? window.changyan.seajs.use("src/changyan.v2.5.js") : b.loadJs(a.uri.res + "app-build.js?" + a.v)
            })
        }
    }), define("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/getUuid.js", function (require, exports, module) {
        exports.getUUid = function () {
            function a() {
                this.id = this.createUUID()
            }

            a.prototype.valueOf = function () {
                return this.id
            }, a.prototype.toString = function () {
                return this.id
            }, a.prototype.createUUID = function () {
                var b = new Date(1582, 10, 15, 0, 0, 0, 0), c = new Date, d = c.getTime() - b.getTime(), e = a.getIntegerBits(d, 0, 31), f = a.getIntegerBits(d, 32, 47), g = a.getIntegerBits(d, 48, 59) + "1", h = a.getIntegerBits(a.rand(4095), 0, 7), i = a.getIntegerBits(a.rand(4095), 0, 7), j = a.getIntegerBits(a.rand(8191), 0, 7) + a.getIntegerBits(a.rand(8191), 8, 15) + a.getIntegerBits(a.rand(8191), 0, 7) + a.getIntegerBits(a.rand(8191), 8, 15) + a.getIntegerBits(a.rand(8191), 0, 15);
                return e + f + g + h + i + j
            }, a.getIntegerBits = function (b, c, d) {
                var e = a.returnBase(b, 16), f = new Array, g = "", h = 0;
                for (h = 0; h < e.length; h++)f.push(e.substring(h, h + 1));
                for (h = Math.floor(c / 4); h <= Math.floor(d / 4); h++)g += f[h] && "" != f[h] ? f[h] : "0";
                return g
            }, a.returnBase = function (a, b) {
                return a.toString(b).toUpperCase()
            }, a.rand = function (a) {
                return Math.floor(Math.random() * (a + 1))
            };
            var b = a.prototype.createUUID();
            return b
        }
    }), define("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/isv-config.js", function (require, exports, module) {
        var a = {
            _version: null,
            _script: {},
            _config: {},
            _pageConfig: {},
            _readyHandles: [],
            _useIframe: null,
            _sid: null,
            _url: null,
            _title: null
        };
        !function () {
            !function () {
                var b = "2015090990";
                b.indexOf("##CY") >= 0 && (b = (+new Date).toString()), a._version = b
            }(), function () {
                var b = function () {
                    var a, b, c = document.getElementsByTagName("script");
                    for (a = 0; a < c.length; a++)if (/changyan\.js/gi.test(c[a].src) || /changyan-plus\.js/gi.test(c[a].src)) {
                        b = c[a];
                        break
                    }
                    return b
                }, c = function (a) {
                    var b = {};
                    if (!a || "string" != typeof a)return b;
                    var c, d, e = a.split("?")[1] || "", f = e.split("&");
                    if (f.length)for (c = 0; c < f.length; c++)d = f[c].split("="), b[d[0]] || (b[d[0]] = d[1]);
                    return b
                }, d = b(), e = d && d.src || "", f = c(e);
                a._script.appid = f.appid, a._script.conf = f.conf
            }(), "object" == typeof window._config && (a._config = window._config || {}), window.changyan && window.changyan.api && window.changyan.api.tmpIsvPageConfig && (a._pageConfig = window.changyan.api.tmpIsvPageConfig || {}), window.changyan && window.changyan.api && window.changyan.api.tmpHandles && (a._readyHandles = window.changyan.api.tmpHandles || []), function () {
                window.SCS_NO_IFRAME === !0 ? a._useIframe = !1 : window.changyan && window.changyan.api && window.changyan.api.tmpIsvPageConfig ? a._useIframe = !1 : a._useIframe = !0
            }(), function () {
                var b = window.document.getElementById("SOHUCS");

                try {
                    a._sid = b.getAttribute("sid")
                } catch (c) {
                }
            }(), a._url = window.location.href, a._title = window.document.title, function () {
                var a = require("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/util.js");
                a.deleteProperty(window.changyan.api, "config"), a.deleteProperty(window.changyan.api, "tmpHandles"), a.deleteProperty(window.changyan.api, "tmpIsvPageConfig")
            }()
        }();
        var b = {};
        !function () {
            b.appid = a._pageConfig.appid || a._script.appid, b.conf = a._pageConfig.conf || a._script.conf, b.v = a._version, b.useIframe = a._useIframe, b.sid = a._sid, b.url = a._url, b.title = a._title, void 0 !== a._config.categoryId && (b.categoryId = a._config.categoryId), void 0 !== a._config.ymUpdate && (b.ymUpdate = a._config.ymUpdate), b.displayFloatBar = a._pageConfig.displayFloatBar === !1 ? !1 : !0, b.smallerVersion = a._pageConfig.smallerVersion === !0 ? !0 : !1, b.simpleCbox = a._pageConfig.simpleCbox === !0 ? !0 : !1, b.readyHandles = a._readyHandles || []
        }(), module.exports = b
    }), define("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/util.js", function (require, exports, module) {
        exports.loadJs = function (a, b) {
            var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement, d = document.createElement("script");
            d.setAttribute("type", "text/javascript"), d.setAttribute("charset", "UTF-8"), d.setAttribute("src", a), "function" == typeof b && (window.attachEvent ? d.onreadystatechange = function () {
                var a = d.readyState;
                ("loaded" === a || "complete" === a) && (d.onreadystatechange = null, b())
            } : d.onload = b), c.appendChild(d)
        }, exports.trim = function () {
            var a = /^\s+/, b = /\s+$/, c = String.prototype.trim;
            return c ? function (a) {
                return null === a ? "" : c.call(a)
            } : function (c) {
                return null === c ? "" : c.toString().replace(a, "").replace(b, "")
            }
        }(), exports.deleteProperty = function (a, b) {
            if ("object" == typeof a)try {
                delete a[b]
            } catch (c) {
                a[b] = void 0
            }
        }
    }), define("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/init.js", function (require, exports, module) {
        var a = require("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/util.js"), b = require("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/isv-config.js");
        if ("cyrAvpLyq" === b.appid && document.getElementById("wyswyg.js"))return void function () {
            try {
                var a, b, c, d = document.getElementsByTagName("script");
                for (a = 0; a < d.length; a++)b = d[a], c = b.src, "string" == typeof c && c.indexOf("changyan.sohu.com") >= 0 && b.parentNode.removeChild(b)
            } catch (e) {
            }
        }();
        var c = function (b) {
            var c = "changyan" + Math.floor(1e3 * Math.random() * 1e3 * 1e3), d = "http://changyan.sohu.com/debug/cookie?callback=" + c;
            window[c] = function (a) {
                "function" == typeof b && b(a)
            }, a.loadJs(d, function () {
                a.deleteProperty(window, c)
            })
        }, d = function (b, c, d) {
            var e = "changyan" + Math.floor(1e3 * Math.random() * 1e3 * 1e3), f = b + "api/2/config/get/" + c + "?callback=" + e;
            window[e] = function (a) {
                "function" == typeof d && d(a)
            }, a.loadJs(f, function () {
                a.deleteProperty(window, e)
            })
        };
        c(function (c) {
            var e = c && c.cookie, f = function (b) {
                var c = {};
                if ("string" != typeof b)return c;
                var d, e, f = b.split(";");
                for (d = 0; d < f.length; d++)e = f[d], e = a.trim(e), e = e.split("="), e = [a.trim(e[0]), a.trim(e.slice(1, e.length).join("="))], "" !== e[0] && "" !== e[1] && (c[e[0]] = e[1]);
                return c
            }, g = f(e);
            b.cookie = g, b.uri = {
                api: "http://changyan.sohu.com/",
                res: "http://changyan.itc.cn/v2.5/v" + b.v + "/",
                res2: "http://changyan.itc.cn/v2/"
            }, "rc" === g.debug && (b.uri.api = "http://10.10.124.153/", b.uri.res = "http://10.10.124.153/v2.5/", b.uri.res2 = "http://10.10.124.153/v2/"), "custom" === g.debug && (b.uri.api = b.cookie.debug_changyan_sohu_com ? decodeURIComponent(b.cookie.debug_changyan_sohu_com) : b.uri.api, b.uri.res = b.cookie.debug_changyan_itc_cn ? decodeURIComponent(b.cookie.debug_changyan_itc_cn) : b.uri.res, b.uri.res2 = b.cookie.debug_changyan_itc_cn_v2 ? decodeURIComponent(b.cookie.debug_changyan_itc_cn_v2) : b.uri.res2), function () {
                var b = require("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/getUuid.js");
                if ("string" != typeof g.debug_uuid || 32 !== g.debug_uuid.length) {
                    g.debug_uuid = b.getUUid();
                    var c = new Date;
                    c = new Date(c.setDate(c.getDate() + 365)).toString();
                    var d = "debug_uuid=" + g.debug_uuid + "; expires=" + c + "; path=/; domain=.changyan.sohu.com";
                    a.loadJs("http://changyan.sohu.com/debug/cookie?setCookie=" + d + "&callback=changyan01234567890&" + +new Date)
                }
            }(), d(b.uri.api, b.appid, function (c) {
                c = c && c.data && c.data.main || {}, b.config = c, "false" === c.is_iframe && (b.useIframe = !1), b.useIframe === !1 && (window.SCS_NO_IFRAME = !0);
                var d = function (a) {
                    var b = a + "-APP-ACCESS";
                    e(b)
                }, e = function (c) {
                    var d = function (a) {
                        if ("string" != typeof a)return "";
                        for (var b = /^[a-z]$/, c = "", d = 0; d < a.length; d++)c += b.test(a.charAt(d)) ? String.fromCharCode(a.charCodeAt(d) - 32) : a.charAt(d);
                        return c
                    }, e = "LOG-" + c, f = b.uri.api + "stat/event?clientid=" + (b.appid || "cyrkKYELy") + "&topicId=0&uuid=" + (b.cookie && b.cookie.debug_uuid || "NULL") + "&type=" + d(e) + "&" + +new Date;
                    a.loadJs(f)
                }, f = function () {
                    window.SOHUCS = {}, window.SOHUCS.isvConfig = b, d("V20"), a.loadJs("http://changyan.itc.cn/v2/changyan.v2.0.js?appid=" + b.appid + "&conf=" + b.conf + "&" + b.v)
                };
                if ("cyrvvWpuq" === b.appid) {
                    try {

                        var g = '\n                        <div style="text-align: right;">\n                            <span style="color: #444444; font-size: 12px; line-height: 19px;">Powered by Jetstar</span>\n                        </div>\n                    ', h = document.getElementById("SOHUCS");
                        h.innerHTML = g
                    } catch (i) {
                    }

                    return void d("V25-STABLE")
                }
                return window.changyan && window.changyan.api && "function" == typeof window.changyan.api.ready ? (window.changyan.api.tmpIsvConfig = b, window.XMLHttpRequest ? "old" !== c.isv_type || "cyqQwkOU4" === b.appid && b.ymUpdate === !0 ? b.useIframe !== !1 ? void("old" !== c.isv_type ? (d("beta" === c.isv_type ? "V25-BETA" : "V25-STABLE"), e("V25-APP-ACCESS-IFRAME-" + c.isv_type), a.loadJs(b.uri.res + "app-build-iframe.js?" + b.v)) : (f(), e("V20-APP-ACCESS-IFRAME"))) : (d("beta" === c.isv_type ? "V25-BETA" : "V25-STABLE"), "true" === b.config.is_new_cdn && (b.uri.res = "http://a9720e8c2dac4.cdn.sohucs.com/v2.5/v" + b.v + "/"), void require("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/app.js").exec(b)) : void f() : (f(), void e("V20-APP-ACCESS-IE6"))) : (f(), void e("V20-APP-ACCESS-CHANGYAN-DEFINED"))
            })
        })
    }), b("/data/jenkins/workspace/changyan-fe-prod-cyf-v25-deploy/v2.5/tmp-build/version/init.js")
}();