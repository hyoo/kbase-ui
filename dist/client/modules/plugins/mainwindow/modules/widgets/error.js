define(["kb/common/html","kb/common/dom"],function(a,b){"use strict";function c(c){function d(a){h=a,i=b.createElement("div"),h.appendChild(i)}function e(b){var c,d=b.error;"string"==typeof d?d={message:d}:d instanceof Error&&(d={message:d.message}),console.error("ERROR"),console.error(d),b.error.data&&console.error(b.error.data),c=a.makePanel({title:b.title,"class":"danger",content:a.makeRotatedTable([d],[{key:"type",label:"Type"},{key:"reason",label:"Reason"},{key:"blame",label:"Blame"},{key:"message",label:"Message"},{key:"suggestions",label:"Suggestions"}])}),i.innerHTML=c}function f(){}function g(){h&&h.removeChild(i)}var h,i;c.runtime;return{attach:d,start:e,stop:f,detach:g}}return{make:function(a){return c(a)}}});