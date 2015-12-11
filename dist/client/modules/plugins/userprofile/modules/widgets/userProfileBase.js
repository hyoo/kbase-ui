define(["nunjucks","jquery","bluebird","kb/common/utils","kb/common/html","kb/service/userProfile","kb_plugin_userprofile"],function(a,b,c,d,e,f,g){"use strict";var h=Object.create({},{SocialWidget_init:{value:function(b){if(this.generatedId=0,this.localConfig={},this.initConfig=b||{},this.setupConfig(),this.params={},this.runtime=b.runtime,!this.runtime)throw{type:"ArgumentError",reason:"RuntimeMissing",message:"The runtime is required for a user profile widget."};if(d.isBlank(b.params.username)){if(!this.runtime.service("session").isLoggedIn())throw{type:"ArgumentError",reason:"username missing",message:"The username is required for a user profile widget"};this.params.userId=this.runtime.service("session").getUsername()}else this.params.userId=b.params.username;this.setupAuth(),this.setupCoreApp(),this.setup(),this.messages=[],this.error=null,this.state={},this.stateMeta={status:"none",timestamp:new Date},this.createListMaps(),this.templates={};var c=[new a.WebLoader(g.plugin.fullPath+"/"+this.widgetName+"/templates",!0)];return this.templates.env=new a.Environment(c,{autoescape:!1}),this.templates.env.addFilter("gravatar",function(a,b,c,d){return f.makeGravatarURL(a,b,c,d)}.bind(this)),this.templates.env.addFilter("kbmarkup",function(a){return a=a.replace(/\n/g,"<br>")}),this.templates.env.addFilter("avatarBackgroundColor",function(a){return this.listMaps.avatarColor[a].color}.bind(this)),this.templates.env.addFilter("avatarTextColor",function(a){return this.listMaps.avatarColor[a].textColor}.bind(this)),this.templates.cache={},this.context={},this.context.env={widgetTitle:this.widgetTitle,widgetName:this.widgetName,docsite:this.runtime.getConfig("docsite"),root:g.plugin.path,pluginPath:g.plugin.path,getConfig:function(a){return this.runtime.getConfig(a)}.bind(this)},this.context.state=this.state,this.context.params=this.params,this.runtime.recv("session","login.success",function(a){this.onLoggedIn&&this.onLoggedIn(a.session)}.bind(this)),this.runtime.recv("session","logout.success",function(){this.onLoggedOut&&this.onLoggedOut()}.bind(this)),this}},setupConfig:{value:function(){if(this.configs=[{},this.initConfig,this.localConfig],!this.hasConfig("container"))throw"A container is required by this Widget, but was not provided.";if(!this.hasConfig("name"))throw"Widget name is required";if(!this.hasConfig("title"))throw"Widget title is required"}},setupCoreApp:{value:function(){this.container=this.getConfig("container"),"string"==typeof this.container&&(this.container=b(this.container)),this.widgetName=this.getConfig("name"),this.widgetTitle=this.getConfig("title"),this.instanceId=this.genId()}},setupAuth:{value:function(){}},start:{value:function(){this.setupUI(),this.renderWaitingView(),this.setInitialState().then(function(){return this.refresh()}.bind(this))["catch"](function(a){this.setError(a)}.bind(this))}},setup:{value:function(){return this}},setupUI:{value:function(){return this.loadCSS(),this.renderLayout(),this}},stop:{value:function(){}},destroy:{value:function(){}},getConfig:{value:function(a,b){for(var c=0;c<this.configs.length;c+=1)if(void 0!==d.getProp(this.configs[c],a))return d.getProp(this.configs[c],a);return b}},setConfig:{value:function(a,b){d.setProp(this.configs[0],a,b)}},hasConfig:{value:function(a){for(var b=0;b<this.configs.length;b++)if(void 0!==d.getProp(this.configs[b],a))return!0;return!1}},setParam:{value:function(a,b){d.setProp(this.params,a,b),this.refresh().done()}},getParam:{value:function(a,b){return d.getProp(this.params,a,b)}},recalcState:{value:function(){this.setInitialState().then(function(){return this.refresh()}.bind(this))["catch"](function(a){this.setError(a)}.bind(this))}},refresh:{value:function(){return new c(function(a){this.refreshTimer?a():this.refreshTimer=window.setTimeout(function(){this.refreshTimer=null,this.render(),a()}.bind(this),0)}.bind(this))}},setState:{value:function(a,b,c){d.setProp(this.state,a,b),c||this.refresh().then(function(){return null})["catch"](function(a){})}},setError:{value:function(a){if(a){var b;"string"==typeof a?b=a:"object"==typeof a&&(b=a.message?a.message:""+a),this.error={message:b,original:a},this.refresh().done()}}},checkState:{value:function(a){return this.stateMeta.status===a?!0:!1}},setInitialState:{value:function(a){return new c(function(a,b,c){a()})}},onLoggedIn:{value:function(a){this.setupAuth(),this.setup(),this.setInitialState({force:!0}).then(function(){this.refresh()}.bind(this))}},onLoggedOut:{value:function(){this.setupAuth(),this.setup(),this.setInitialState({force:!0}).then(function(){this.refresh()}.bind(this))}},getTemplate:{value:function(a){return void 0===this.templates.cache[a]&&(this.templates.cache[a]=this.templates.env.getTemplate(a+".html")),this.templates.cache[a]}},createTemplateContext:{value:function(a){if(this.context.env.loggedIn=this.runtime.service("session").isLoggedIn(),this.runtime.service("session").isLoggedIn()?this.context.env.loggedInUser=this.runtime.service("session").getUsername():delete this.context.env.loggedInUser,this.context.env.instanceId=this.instanceId,this.context.env.generatedId=this.genId(),this.context.env.isOwner=this.isOwner(),a){var b=d.merge({},this.context);return d.merge(b,a)}return this.context}},renderTemplate:{value:function(a,b){var c=this.getTemplate(a);if(!c)throw"Template "+a+" not found";var b=b?b:this.createTemplateContext();return c.render(b)}},genId:{value:function(){return"gen_"+this.widgetName+"_"+this.generatedId++}},renderError:{value:function(){var a=this.createTemplateContext({error:{message:d.getProp(this.error,"message")}});this.places.content.html(this.getTemplate("error").render(a))}},renderErrorView:{value:function(a){if(a){var b;"string"==typeof a?b=a:"object"==typeof a&&(a instanceof Error?b=a.message:a=""+a)}var c=this.createTemplateContext({error:b});this.places.content.html(this.getTemplate("error").render(c))}},niceElapsedTime:{value:function(a){var b=/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)([\+\-])(\d\d\d\d)/,c=b.exec(a);if(!c)return"** Invalid Date Format **";if("0000"!==c[8])return"** Invalid Date TZ Offset "+c[8]+" **";var d=c[1]+"-"+c[2]+"-"+c[3]+"T"+c[4]+":"+c[5]+":"+c[6],e=new Date(d),f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g="",h=e.getMinutes();return 10>h&&(h="0"+h),g=e.getHours()>=12?12!=e.getHours()?e.getHours()-12+":"+h+"pm":"12:"+h+"pm":e.getHours()+":"+h+"am",f[e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()+" at "+g}},isOwner:{value:function(a){return a=a?a:"userId",this.runtime.service("session").isLoggedIn()&&this.runtime.service("session").getUsername()===this.params[a]?!0:!1}},render:{value:function(){return this.error?this.renderError():this.runtime.service("session").isLoggedIn()?(this.places.title.html(this.widgetTitle),this.places.content.html(this.renderTemplate("authorized"))):(this.places.title.html(this.widgetTitle),this.places.content.html(this.renderTemplate("unauthorized"))),this}},renderLayout:{value:function(){this.container.html(this.getTemplate("layout").render(this.createTemplateContext())),this.places={title:this.container.find('[data-placeholder="title"]'),alert:this.container.find('[data-placeholder="alert"]'),content:this.container.find('[data-placeholder="content"]')}}},renderWaitingView:{value:function(){this.places.content.html(e.loading())}},loadCSSResource:{value:function(a){this.cssLoaded||(this.cssLoaded={}),this.cssLoaded[a]||b("<link>").appendTo("head").attr({type:"text/css",rel:"stylesheet"}).attr("href",a)}},loadCSS:{value:function(){this.loadCSSResource(g.plugin.path+this.widgetName+"/style.css")}},renderMessages:{value:function(){if(this.places.alert){this.places.alert.empty();for(var a=0;a<this.messages.length;a++){var b=this.messages[a],c="default";switch(b.type){case"success":c="success";break;case"info":c="info";break;case"warning":c="warning";break;case"danger":case"error":c="danger"}this.places.alert.append('<div class="alert alert-dismissible alert-'+c+'" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>'+b.title+"</strong> "+b.message+"</div>")}}}},clearMessages:{value:function(){this.messages=[],this.renderMessages()}},addSuccessMessage:{value:function(a,b){void 0===b&&(b=a,a=""),this.messages.push({type:"success",title:a,message:b}),this.renderMessages()}},addWarningMessage:{value:function(a,b){void 0===b&&(b=a,a=""),this.messages.push({type:"warning",title:a,message:b}),this.renderMessages()}},addErrorMessage:{value:function(a,b){void 0===b&&(b=a,a=""),this.messages.push({type:"error",title:a,message:b}),this.renderMessages()}},makeWorkspaceObjectId:{value:function(a,b){return"ws."+a+".obj."+b}},workspace_metadata_to_object:{value:function(a){return{id:a[0],name:a[1],owner:a[2],moddate:a[3],object_count:a[4],user_permission:a[5],globalread:a[6],lockstat:a[7],metadata:a[8]}}},narrative_info_to_object:{value:function(a){return{id:a[0],name:a[1],type:a[2],save_date:a[3],version:a[4],saved_by:a[5],wsid:a[6],ws:a[7],checksum:a[8],size:a[9],metadata:a[10],ref:a[7]+"/"+a[1],obj_id:"ws."+a[6]+".obj."+a[0]}}},logNotice:{value:function(a,b){console.log("NOTICE: ["+a+"] "+b)}},logDeprecation:{value:function(a,b){console.log("DEPRECATION: ["+a+"] "+b)}},logWarning:{value:function(a,b){console.log("WARNING: ["+a+"] "+b)}},logError:{value:function(a,b){console.log("ERROR: ["+a+"] "+b)}},createListMaps:{value:function(){this.listMaps={};for(var a in this.lists){var b=this.lists[a];this.listMaps[a]={};for(var c in b)this.listMaps[a][b[c].id]=b[c]}}},lists:{value:{userRoles:[{id:"pi",label:"Principal Investigator"},{id:"gradstudent",label:"Graduate Student"},{id:"developer",label:"Developer"},{id:"tester",label:"Tester"},{id:"documentation",label:"Documentation"},{id:"general",label:"General Interest"}],userClasses:[{id:"pi",label:"Principal Investigator"},{id:"gradstudent",label:"Graduate Student"},{id:"kbase-internal",label:"KBase Staff"},{id:"kbase-test",label:"KBase Test/Beta User"},{id:"commercial",label:"Commercial User"}],userTitles:[{id:"mr",label:"Mr."},{id:"ms",label:"Ms."},{id:"dr",label:"Dr."},{id:"prof",label:"Prof."}],gravatarDefaults:[{id:"mm",label:"Mystery Man - simple, cartoon-style silhouetted outline"},{id:"identicon",label:"Identicon - a geometric pattern based on an email hash"},{id:"monsterid",label:'MonsterID - generated "monster" with different colors, faces, etc'},{id:"wavatar",label:"Wavatar - generated faces with differing features and backgrounds"},{id:"retro",label:"Retro - 8-bit arcade-style pixelated faces"},{id:"blank",label:"Blank - A Blank Space"}],avatarColors:[{id:"maroon",label:"maroon",color:"#800000",textColor:"#FFF"},{id:"red",label:"red",color:"#ff0000",textColor:"#FFF"},{id:"orange",label:"orange",color:"#ffA500",textColor:"#FFF"},{id:"yellow",label:"yellow",color:"#ffff00",textColor:"#000"},{id:"olive",label:"olive",color:"#808000",textColor:"#FFF"},{id:"purple",label:"purple",color:"#800080",textColor:"#FFF"},{id:"fuchsia",label:"fuchsia",color:"#ff00ff",textColor:"#FFF"},{id:"white",label:"white",color:"#ffffff",textColor:"#000"},{id:"lime",label:"lime",color:"#00ff00",textColor:"#000"},{id:"green",label:"green",color:"#008000",textColor:"#FFF"},{id:"navy",label:"navy",color:"#000080",textColor:"#FFF"},{id:"blue",label:"blue",color:"#0000ff",textColor:"#FFF"},{id:"aqua",label:"aqua",color:"#00ffff",textColor:"#000"},{id:"teal",label:"teal",color:"#008080",textColor:"#FFF"},{id:"black",label:"black",color:"#000000",textColor:"#FFF"},{id:"silver",label:"silver",color:"#c0c0c0",textColor:"#000"},{id:"gray",label:"gray",color:"#808080",textColor:"#FFF"}]}}});return h});