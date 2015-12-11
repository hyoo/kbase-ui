define(["jquery","bluebird","uuid","kb/common/html","kb/service/client/workspace","kb/service/client/userAndJobState","kb_dataview_easyTree","kb/widget/legacy/authenticatedWidget"],function(a,b,c,d,e,f,g){"use strict";a.KBWidget({name:"kbaseTree",parent:"kbaseAuthenticatedWidget",version:"0.0.1",options:{treeID:null,workspaceID:null,treeObjVer:null,jobID:null,token:null,width:1045,height:600},treeWsRef:null,pref:null,timer:null,init:function(b){return this._super(b),this.pref=c.v4(),this.options.treeID?this.options.workspaceID?(this.wsClient=new e(this.runtime.getConfig("services.workspace.url"),{token:this.runtime.service("session").getAuthToken()}),this.$messagePane=a("<div/>").addClass("kbwidget-message-pane kbwidget-hide-message"),this.$elem.append(this.$messagePane),this.render(),this):(this.renderError("No workspace given!"),this):(this.renderError("No tree to render!"),this)},render:function(){if(this.loading(!1),this.treeWsRef||null===this.options.jobID)this.loadTree();else{var b=this,c=new f(this.runtime.getConfig("services.ujs.url"),{token:this.runtime.service("session").getAuthToken()});b.$elem.empty();var e=a('<div class="loader-table"/>');b.$elem.append(e);var g=a('<table class="table table-striped table-bordered" style="margin-left: auto; margin-right: auto;" id="'+b.pref+'overview-table"/>');e.append(g),g.append("<tr><td>Job was created with id</td><td>"+b.options.jobID+"</td></tr>"),g.append("<tr><td>Output result will be stored as</td><td>"+b.options.treeID+"</td></tr>"),g.append('<tr><td>Current job state is</td><td id="'+b.pref+'job"></td></tr>');var h=function(e){c.get_job_status(b.options.jobID,function(c){var e=c[2],f=c[5],g=c[6],h=a("#"+b.pref+"job");"running"===e?h.html(d.loading(e)):h.html(e),1===f&&(clearInterval(b.timer),this.treeWsRef||0===g&&b.loadTree())},function(c){if(clearInterval(b.timer),this.treeWsRef);else{var d=a("#"+b.pref+"job");d.html("Error accessing job status: "+c.error.message)}})};h(),b.timer=setInterval(h,5e3)}},loadTree:function(){var b=this.buildObjectIdentity(this.options.workspaceID,this.options.treeID,this.options.treeObjVer,this.treeWsRef),c=this;this.wsClient.get_objects([b]).then(function(b){c.$elem.empty();var d="knhx-canvas-div-"+c.pref;if(c.canvasId="knhx-canvas-"+c.pref,c.$canvas=a('<div id="'+d+'">').append(a('<canvas id="'+c.canvasId+'">')),c.options.height&&c.$canvas.css({"max-height":c.options.height-85,overflow:"scroll"}),c.$elem.append(c.$canvas),!c.treeWsRef){var e=b[0].info;c.treeWsRef=e[6]+"/"+e[0]+"/"+e[4]}var f=b[0].data,h={},i=[];if(f.ws_refs){var j;for(j in f.ws_refs)i.push({ref:f.ws_refs[j].g[0]})}i.length>0&&c.wsClient.get_object_info_new({objects:i},function(a){var b;for(b in a){var c=a[b];h[i[b].ref]=c}},function(a){console.log("Error getting genomes info:"),console.log(a)}),new g(c.canvasId,f.tree,f.default_node_labels,function(a){if(f.ws_refs&&f.ws_refs[a.id]){var b=f.ws_refs[a.id].g[0],d=h[b];if(d){var e="#dataview/"+d[7]+"/"+d[1];window.open(e,"_blank")}}else{var g=f.default_node_labels[a.id];if(g.indexOf("/")>0){var e="#genes/"+c.options.workspaceID+"/"+g;window.open(e,"_blank")}}},function(a){return a.id&&0===a.id.indexOf("user")?"#0000ff":null}),c.loading(!0)})["catch"](function(a){this.renderError(a)})},renderError:function(b){var c="Sorry, an unknown error occurred";"string"==typeof b?c=b:b.error&&b.error.message&&(c=b.error.message);var d=a("<div>").addClass("alert alert-danger").append("<b>Error:</b>").append("<br>"+c);this.$elem.empty(),this.$elem.append(d)},getData:function(){return{type:"Tree",id:this.options.treeID,workspace:this.options.workspaceID,title:"Tree"}},buildObjectIdentity:function(a,b,c,d){var e={};return d?e.ref=d:(/^\d+$/.exec(a)?e.wsid=a:e.workspace=a,/^\d+$/.exec(b)?e.objid=b:e.name=b,c&&(e.ver=c)),e},loading:function(a){a?this.hideMessage():this.showMessage(d.loading())},showMessage:function(b){var c=a("<span/>").append(b);this.$messagePane.append(c),this.$messagePane.show()},hideMessage:function(){this.$messagePane.hide(),this.$messagePane.empty()},getState:function(){var a=this,b={treeWsRef:a.treeWsRef};return b},loadState:function(a){var b=this;a&&a.treeWsRef&&(b.treeWsRef=a.treeWsRef,b.render())}})});