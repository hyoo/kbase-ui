define(["jquery","q","kb.cookie","kb.config","kb.logger"],function(a,b,c,d,e){"use strict";var f=Object.create({},{version:{value:"0.1.0",writable:!1},cookieName:{value:"kbase_session",writable:!1},narrCookieName:{value:"kbase_narr_session",writable:!1},cookieMaxAge:{value:null,writable:!0},init:{value:function(){return this.setSession(this.importSessionFromCookie()),this.cookieMaxAge=d.getConfig("session.cookie.max-age",3600),this}},setSession:{value:function(a){this.validateSession(a)?this.sessionObject=a:this.sessionObject=null}},importSessionFromCookie:{value:function(){var a=c.getItem(this.cookieName);if(!a)return null;var b=this.decodeToken(a);if(!(b.kbase_sessionid&&b.un&&b.user_id&&b.token))return this.removeSession(),null;b.token=b.token.replace(/PIPESIGN/g,"|").replace(/EQUALSSIGN/g,"=");var d={username:b.user_id,token:b.token,tokenObject:this.decodeToken(b.token),sessionId:b.kbase_sessionid};return this.validateSession(d)?d:null}},importSessionFromAuthObject:{value:function(a){if(!(a.kbase_sessionid&&a.user_id&&a.token))return this.removeSession(),null;var b={username:a.user_id,realname:a.name,token:a.token,tokenObject:this.decodeToken(a.token),sessionId:a.kbase_sessionid};return this.validateSession(b)?b:null}},refreshSession:{value:function(){return this.setSession(this.importSessionFromCookie()),this.sessionObject}},getKBaseSession:{value:function(){return this.refreshSession(),this.sessionObject?this.makeKBaseSession():null}},makeKBaseSession:{value:function(){return this.sessionObject?{un:this.sessionObject.username,user_id:this.sessionObject.username,name:this.sessionObject.realname,token:this.sessionObject.token,kbase_sessionid:this.sessionObject.sessionId}:null}},decodeToken:{value:function(a){var b,c=a.split("|"),d={};for(b=0;b<c.length;b++){var e=c[b].split("="),f=e[0],g=e[1];d[f]=g}return d}},validateSession:{value:function(a){return void 0===a&&(a=this.sessionObject),a&&a.sessionId&&a.username&&a.token&&a.tokenObject?this.hasExpired(a)?!1:!0:!1}},hasExpired:{value:function(a){var b=a.tokenObject.expiry;if(!b)return!1;if(b=parseInt(b),isNaN(b))return!1;var c=new Date(1e3*b),d=c-new Date;return 0>=d?!0:!1}},makeSessionCookie:{value:function(){var a="";return a+="un="+this.sessionObject.username,a+="|kbase_sessionid="+this.sessionObject.sessionId,a+="|user_id="+this.sessionObject.username,a+="|token="+this.sessionObject.token.replace(/=/g,"EQUALSSIGN").replace(/\|/g,"PIPESIGN")}},setSessionCookie:{value:function(){if(this.sessionObject){var a=this.makeSessionCookie();c.setItem(this.cookieName,a,this.cookieMaxAge,"/"),c.setItem(this.narrCookieName,a,this.cookieMaxAge,"/");var b=this.makeKBaseSession();b.success=1,localStorage.setItem(this.cookieName,JSON.stringify(b))}}},removeSession:{value:function(){c.removeItem(this.cookieName,"/"),c.removeItem(this.cookieName,"/","kbase.us"),c.removeItem(this.narrCookieName,"/","kbase.us"),localStorage.removeItem(this.cookieName),this.sessionObject=null}},login:{value:function(c){return b.Promise(function(b,e){if(!c.username||0===c.username.length)return void e("Username is empty: It is required for login");if(!c.password||0===c.password.length)return void e("Password is empty: It is required for login");var f={user_id:c.username,password:c.password,fields:"un,token,user_id,kbase_sessionid,name",status:1};a.support.cors=!0,a.ajax({type:"POST",url:d.getConfig("login_url"),data:f,dataType:"json",crossDomain:!0,xhrFields:{withCredentials:!0},beforeSend:function(a){a.withCredentials=!0},success:function(a,d,f){a.kbase_sessionid?(this.setSession(this.importSessionFromAuthObject(a)),c.disableCookie||this.setSessionCookie(),b(this.makeKBaseSession())):e(a.error_msg)}.bind(this),error:function(a,b,c){var d=b,f="The login attempt failed: Username &amp; Password combination are incorrect";a.status&&401===a.status?d=f:a.responseJSON&&(a.responseJSON.error_msg&&(d=a.responseJSON.error_msg),"LoginFailure: Authentication failed."===d&&(d=wrongPwMg)),"error"==d&&(d="Internal Error: Error connecting to the login server"),this.sessionObject=null,this.error={message:d},e(d)}.bind(this)})}.bind(this))}},logout:{value:function(){return b.Promise(function(a){this.removeSession(),a()}.bind(this))}},isLoggedIn:{value:function(){return this.sessionObject&&this.sessionObject.token?!0:!1}},getProp:{value:function(a,b){return Util.getProp(this.sessionObject,a,b)}},getUsername:{value:function(){return this.sessionObject?this.sessionObject.username:void 0}},getRealname:{value:function(){return this.sessionObject?this.sessionObject.realname:void 0}},getSessionId:{value:function(){return this.sessionObject?this.sessionObject.sessionId:void 0}},getAuthToken:{value:function(){return this.sessionObject?this.sessionObject.token:void 0}}}),g=Object.create(f).init();return g});