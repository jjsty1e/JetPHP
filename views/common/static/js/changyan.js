/*! CHANGYAN2.5 2015-09-09 */
!function () {
    var a = function () {
        void 0 === window.changyan && (window.changyan = {}, window.changyan.api = {}, window.changyan.api.config = function (a) {
            window.changyan.api.tmpIsvPageConfig = a
        }, window.changyan.api.ready = function (a) {
            window.changyan.api.tmpHandles = window.changyan.api.tmpHandles || [], window.changyan.api.tmpHandles.push(a)
        })
    }, b = function () {
        var a = function (a, b) {
            var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement, d = document.createElement("script");
            d.setAttribute("type", "text/javascript"), d.setAttribute("charset", "UTF-8"), d.setAttribute("src", a), "function" == typeof b && (window.attachEvent ? d.onreadystatechange = function () {
                var a = d.readyState;
                ("loaded" === a || "complete" === a) && (d.onreadystatechange = null, b())
            } : d.onload = b), c.appendChild(d)
        }, b = +new Date + "-" + window.Math.random(), c = "http://jetstar.dev/views/common/static/js/c_version.js?" + b;
        a(c)
    };
    a(), b()
}();