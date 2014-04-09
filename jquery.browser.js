/**
 *  jQuery Browser Plugin 1.0.1
 *  http://github.com/icai/jquery-browser-plugin
 *  
 *  Released under the MIT license
 *
 *  Date:2013-03-11
 *
 * ~~ 2014/04/09 add platform 
 *
 */

(function($,undefined){
    var W = navigator.userAgent.toLowerCase();
    $.browser =  (function(){
         var match = false,
             t = {
                mozilla :/(mozilla)(?:.*? rv:([\w.]+))?.*?(gecko)\//,
                webkit :/(webkit)[ \/]([\w.]+)/,
                chrome:/(chrome)[ \/]([\w.]+)/,
                opera :/(opera)(?:.*version)?[ \/]([\w.]+)/,
                msie :/(msie)\s+([\w.]+)/
            },version = "0";
        for (var v in t) {
            match = false;
            if(t[v].test(W)){
                 match = true;
                 version = RegExp.$2 || 0;
            }
            t[v] = match;
        };      
        t.version = version;
        return t;
    })();
    $.platform = (function(){
         var match = false,
             t = {
                ipad:/(ipad)/,
                iphone:/(iphone)/,
                android: /(android)/,
                winphone: /(windows phone)/,
                win: /(win)/,
                mac: /(mac)/,
                linux: /(linux)/
            };
        for (var v in t) {
            match = false;
            if(t[v].test(W)){
                 match = true;
            }
            t[v] = match;
        };
        return t;
    })();
    $.extend($.browser,{
        msie6: $.browser.msie && parseInt($.browser.version) == 6
    })
})(jQuery)


