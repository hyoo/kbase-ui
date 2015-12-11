define(["require","./normalize"],function(a,b){function c(a){if("none"==m.optimizeCss)return a;if("undefined"!=typeof process&&process.versions&&process.versions.node&&require.nodeRequire){try{var b=require.nodeRequire("csso")}catch(c){return console.log('Compression module not installed. Use "npm install csso -g" to enable.'),a}var d=a.length;try{a=b.justDoIt(a)}catch(c){return console.log("Compression failed due to a CSS syntax error."),a}return console.log("Compressed CSS output to "+Math.round(a.length/d*100)+"%."),a}return console.log("Compression not supported outside of nodejs environments."),a}function d(a){if("undefined"!=typeof process&&process.versions&&process.versions.node&&require.nodeRequire){var b=require.nodeRequire("fs"),c=b.readFileSync(a,"utf8");return 0===c.indexOf("\ufeff")?c.substring(1):c}var d,e,c=new java.io.File(a),f=java.lang.System.getProperty("line.separator"),g=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(c),"utf-8"));try{for(d=new java.lang.StringBuffer,e=g.readLine(),e&&e.length()&&65279===e.charAt(0)&&(e=e.substring(1)),d.append(e);null!==(e=g.readLine());)d.append(f).append(e);return String(d.toString())}finally{g.close()}}function e(a,b){if("undefined"!=typeof process&&process.versions&&process.versions.node&&require.nodeRequire){var c=require.nodeRequire("fs");c.writeFileSync(a,b,"utf8")}else{var d=new java.lang.String(b),e=new java.io.BufferedWriter(new java.io.OutputStreamWriter(new java.io.FileOutputStream(a),"utf-8"));try{e.write(d,0,d.length()),e.flush()}finally{e.close()}}}function f(a){return a.replace(/(["'\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")}var g,h={},i=!!process.platform.match(/^win/),j=/^([^\:\/]+:\/)?\//,k="define('@writecss', function() {return function writeCss(c) {var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));};});",l=a.toUrl("base_url").split("/");l[l.length-1]="";var m,n=l.join("/"),o=!0,p=[],q={};return h.load=function(a,c,e,f){if(m=m||f,g||(g=path.resolve(m.dir||path.dirname(m.out),m.siteRoot||".")+"/",i&&(g=g.replace(/\\/g,"/"))),a.match(j))return e();var h=c.toUrl(a+".css");i&&(h=h.replace(/\\/g,"/"));var k=h;if(k.indexOf(n)<0){var l=c.toUrl(m.appDir);i&&(l=l.replace(/\\/g,"/")),0==k.indexOf(l)&&(k=g+k.substring(l.length))}q[a]=b(d(h),k,g),e()},h.normalize=function(a,b){return".css"==a.substr(a.length-4,4)&&(a=a.substr(0,a.length-4)),b(a)},h.write=function(a,b,d,e){var g;if(!b.match(j)&&(p.push(q[b]),global._requirejsCssData?global._requirejsCssData.usedBy.css=!0:global._requirejsCssData={usedBy:{css:!0},css:""},0!=m.buildCSS)){var h=q[b];m.writeCSSModule&&h?(o&&(o=!1,d(k)),g='define(["@writecss"], function(writeCss){\n writeCss("'+f(c(h))+'");\n})'):g="define(function(){})",d.asModule(a+"!"+b,g)}},h.onLayerEnd=function(a,b){if(m.separateCSS&&m.IESelectorLimit)throw"RequireCSS: separateCSS option is not compatible with ensuring the IE selector limit";if(m.separateCSS){var d=b.path.replace(/(\.js)?$/,".css");console.log("Writing CSS! file: "+d+"\n");var g=p.join("");process.nextTick(function(){global._requirejsCssData&&(g=global._requirejsCssData.css=g+global._requirejsCssData.css,delete global._requirejsCssData.usedBy.css,0===Object.keys(global._requirejsCssData.usedBy).length&&delete global._requirejsCssData),e(d,c(g))})}else if(0!=m.buildCSS&&1!=m.writeCSSModule)for(var h=m.IESelectorLimit?p:[p.join("")],i=0;i<h.length;i++){if(""==h[i])return;a("(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})\n('"+f(c(h[i]))+"');\n")}p=[],o=!0},h});