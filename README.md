jQuery browser plugin 
=========

A jQuery plugin for browser detection.

version:1.0 beta


##Todo##

Test for my browser ,just return the following.

    $.browser = {
    	chrome: true
    	iPad: false
    	iPhone: false
    	mac: false
    	mozilla: false
    	msie: false
    	msie6: false
    	opera: false
    	version: "32.0.1671.4"
    	webkit: true
    }


##Notice##

 if sure,you can add your Regexs to test others,in here

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
    }


##License##

The MIT License (MIT)

Copyright (c) 2013 icai

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



