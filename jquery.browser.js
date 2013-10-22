/**
 *  jQuery Browser Plugin 1.0 beta
 *  http://github.com/icai/jquery-browser-plugin
 *  
 *  Released under the MIT license
 *
 *  Date:2013-03-11
 *
 *  this plugin first post : http://hi.baidu.com/tp100/item/004a66010088337bbfe97ea8
 * 
 */

(function($,undefined){

    $.browser =  (function(){
         var W = navigator.userAgent.toLowerCase(),
             match = false,
             t = {
                // you can add your Regexs to test others ,in here
                msie6: /msie\s+6\.0/,
                //msie7: /msie\s+7\.0/,
                // msie8: /msie\s+8\.0/,
                // msie9: /msie\s+9\.0/,
                // msie10: /msie\s+10\.0/,
                iPad: /ipad/,
                iPhone: /iphone/,
                mac:/mac/,
                //android:/android/,
                //linux:/linux/,
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
                 version = RegExp.$2;
                 RegExp.$2 = undefined;
            }
            t[v] = match;
        };
        t.version = version;
        return t;
    })()

})(jQuery)


