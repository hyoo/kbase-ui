define(["promise"],function(a){"use strict";function b(a){function b(){var a=f.shift();if(a)try{a.onRun()}catch(b){if(a.onError)try{a.onError(b)}catch(d){console.log("ERROR running onerror"),console.log(b)}else console.log("Error processing queue item"),console.log(b)}finally{c()}}function c(){e=window.setTimeout(function(){b()},g)}function d(a){h+=1,a.id=h,f.push(a),c()}var e,f=[],g=a&&a.queuePauseItme||0,h=0;return{addItem:d}}return{make:function(a){return b(a)}}});