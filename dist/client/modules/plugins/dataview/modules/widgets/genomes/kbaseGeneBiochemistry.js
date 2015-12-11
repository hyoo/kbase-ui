define(["jquery","kb/common/html","kb/service/client/cdmi","kb/service/client/cdmiEntity","kb/service/client/workspace","kb/widget/legacy/widget"],function(a,b,c,d,e){"use strict";a.KBWidget({name:"KBaseGeneBiochemistry",parent:"kbaseWidget",version:"1.0.0",options:{featureID:null,embedInCard:!1,genomeID:null,workspaceID:null,genomeInfo:null},init:function(a){return this._super(a),null===this.options.featureID?this:(this.cdmiClient=new c(this.runtime.getConfig("services.cdmi.url")),this.entityClient=new d(this.runtime.getConfig("services.cdmi.url")),this.render(),this.options.workspaceID?this.renderWorkspace():this.renderCentralStore(),this)},render:function(){this.$messagePane=a("<div/>").addClass("kbwidget-message-pane kbwidget-hide-message"),this.$elem.append(this.$messagePane),this.$infoPanel=a("<div>").css("overflow","auto"),this.$infoTable=a("<table>").addClass("table table-striped table-bordered"),this.$elem.append(this.$infoPanel.append(this.$infoTable))},renderCentralStore:function(){var a=this;this.$infoPanel.hide(),this.showMessage(b.loading()),this.cdmiClient.fids_to_roles([this.options.featureID],function(b){b=b[a.options.featureID];var c="None found";b&&(c=b.join("<br>")),a.$infoTable.append(a.makeRow("Roles",c)),a.cdmiClient.fids_to_subsystems([a.options.featureID],function(b){b=b[a.options.featureID];var c="None found";b&&(c=b.join("<br/>")),a.$infoTable.append(a.makeRow("Subsystems",c)),a.hideMessage(),a.$infoPanel.show()},a.renderError)},this.renderError)},makeRow:function(b,c){var d=a("<tr>").append(a("<th>").append(b)).append(a("<td>").append(c));return d},renderWorkspace:function(){var a=this;if(this.showMessage(b.loading()),this.$infoPanel.hide(),this.options.genomeInfo)a.ready(this.options.genomeInfo);else{var c=this.buildObjectIdentity(this.options.workspaceID,this.options.genomeID),d=new e(this.runtime.getConfig("service.workspace.url"),{token:this.runtime.service("session").getAuthToken()});d.get_objects([c]).then(function(b){a.ready(b[0])})["catch"](function(b){a.renderError(b)})}},ready:function(a){if(a.data.features){for(var b=null,c=0;c<a.data.features.length;c++)if(a.data.features[c].id===this.options.featureID){b=a.data.features[c];break}var d=b["function"];d||(d="Unknown"),this.$infoTable.append(this.makeRow("Function",d));var e="No subsystem data found.";if(b.subsystem_data){e="";for(var c=0;c<b.subsystem_data.length;c++){var f=b.subsystem_data[c];e+="<p>Subsystem: "+f[0]+"<br>Variant: "+f[1]+"<br>Role: "+f[2]}}this.$infoTable.append(this.makeRow("Subsystems",e));var g="No annotation comments found.";if(b.annotations){g="";for(var c=0;c<b.annotations.length;c++){var h=b.annotations[c];g+=h[0]+" ("+h[1]+", timestamp:"+h[2]+")<br>"}}this.$infoTable.append(this.makeRow("Annotation Comments",g))}else this.renderError({error:"No genetic features found in the genome with object id: "+this.options.workspaceID+"/"+this.options.genomeID});this.hideMessage(),this.$infoPanel.show()},buildObjectIdentity:function(a,b){var c={};return/^\d+$/.exec(a)?c.wsid=a:c.workspace=a,/^\d+$/.exec(b)?c.objid=b:c.name=b,c},getData:function(){return{type:"Feature",id:this.options.featureID,workspace:this.options.workspaceID,title:"Biochemical Function"}},showMessage:function(b){var c=a("<span/>").append(b);this.$messagePane.empty().append(c).removeClass("hide")},hideMessage:function(){this.$messagePane.addClass("hide")},makeErrorString:function(a){return"string"==typeof a?a:a.error&&a.error.message?a.error.message:"Sorry, an unknown error occurred"},renderError:function(b){var c=this.makeErrorString(b),d=a("<div>").addClass("alert alert-danger").append("<b>Error:</b>").append("<br>"+c);this.$elem.empty(),this.$elem.append(d)}})});