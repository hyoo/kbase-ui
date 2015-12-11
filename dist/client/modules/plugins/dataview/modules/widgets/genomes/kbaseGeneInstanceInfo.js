define(["jquery","kb/common/html","kb/service/client/cdmi","kb/service/client/cdmiEntity","kb/service/client/workspace","kb/widget/legacy/widget"],function(a,b,c,d,e){"use strict";a.KBWidget({name:"KBaseGeneInstanceInfo",parent:"kbaseWidget",version:"1.0.0",options:{featureID:null,workspaceID:null,genomeID:null,hideButtons:!1,width:350,genomeInfo:null},init:function(a){return this._super(a),this.options.featureID?(this.cdmiClient=new c(this.runtime.getConfig("services.cdmi.url")),this.entityClient=new d(this.runtime.getConfig("services.cdmi.url")),this.workspaceClient=new e(this.runtime.getConfig("services.workspace.url")),this.render(),this.options.workspaceID?this.renderWorkspace():this.renderCentralStore(),this):(this.renderError(),this)},render:function(b){var c=function(b){var c=b;return b=b.replace(/\w\S*/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()}),a("<button>").attr("id",c).attr("type","button").addClass("btn btn-primary").append(b)};this.$messagePane=a("<div/>").addClass("kbwidget-message-pane kbwidget-hide-message"),this.$elem.append(this.$messagePane),this.$infoPanel=a("<div>").css("overflow","auto"),this.$infoTable=a("<table>").addClass("table table-striped table-bordered"),this.$buttonPanel=a("<div>").attr("align","center").addClass("btn-group").append(c("sequence")).append(c("biochemistry")).append(c("structure")),this.$infoPanel.append(this.$infoTable),this.options.hideButtons||this.$infoPanel.append(this.$buttonPanel),this.$elem.append(this.$infoPanel)},renderCentralStore:function(){this.$infoPanel.hide(),this.showMessage(b.loading());var c=this,d={};this.cdmiClient.fids_to_feature_data([c.options.featureID]).then(function(a){return d.featureData=a[c.options.featureID],this.cdmiClient.fids_to_genomes([c.options.featureID])}).then(function(a){return d.genome=a[c.options.featureID],this.cdmiClient.fids_to_dna_sequences([this.options.featureID])}).then(function(b){d.dnaSeq=b[c.options.featureID],c.$infoTable.empty(),c.$infoTable.append(c.makeRow("Function",d.featureData.feature_function)),c.$infoTable.append(c.makeRow("Genome",a("<div/>").append(d.featureData.genome_name).append("<br/>").append(c.makeGenomeButton(d.genome))));var e=d.featureData.feature_length+" bp";d.featureData.protein_translation&&(e+=", "+d.featureData.protein_translation.length+" aa"),c.$infoTable.append(c.makeRow("Length",e)),c.$infoTable.append(c.makeRow("Location",a("<div/>").append(c.parseLocation(d.featureData.feature_location)))),c.$infoTable.append(c.makeRow("Aliases",d.featureData.feature_aliases.join(", "))),c.$buttonPanel.find("button#domains").click(function(a){c.trigger("showDomains",{event:a,featureID:c.options.featureID})}),c.$buttonPanel.find("button#sequence").click(function(a){c.trigger("showSequence",{event:a,featureID:c.options.featureID})}),c.$buttonPanel.find("button#biochemistry").click(function(a){c.trigger("showBiochemistry",{event:a,featureID:c.options.featureID})}),c.$buttonPanel.find("button#structure").click(function(a){c.trigger("showStructureMatches",{event:a,featureID:c.options.featureID})}),c.hideMessage(),c.$infoPanel.show()})["catch"](function(a){c.renderError(a)})},renderWorkspace:function(){var c=this;if(this.$infoPanel.hide(),this.showMessage(b.loading()),c.options.genomeInfo)c.ready(c.options.genomeInfo);else{var d=this.buildObjectIdentity(this.options.workspaceID,this.options.genomeID),e=this.workspace.get_objects([d]);a.when(e).fail(a.proxy(function(a){this.renderError(a),console.log(a)},this)),a.when(e).done(a.proxy(function(a){a=a[0],c.ready(a)},this))}},ready:function(b){var c=this,d=null;if(b.data.features){for(var e=0;e<b.data.features.length;e++)if(b.data.features[e].id===this.options.featureID){d=b.data.features[e];break}if(d){this.$infoTable.empty();var f=d["function"];f||(f="Unknown"),this.$infoTable.append(this.makeRow("Function",f)),this.$infoTable.append(this.makeRow("Genome",a("<div/>").append(b.data.scientific_name).append("<br>").append(this.makeGenomeButton(this.options.genomeID,this.options.workspaceID))));var g="Unknown";if(d.dna_sequence_length)g=d.dna_sequence_length+" bp";else if(d.dna_sequence)g=d.dna_sequence.length+" bp";else if(d.location&&d.location.length>0){g=0;for(var e=0;e<d.location.length;e++)g+=d.location[e][3];g+=" bp"}d.protein_translation&&(g+=", "+d.protein_translation.length+" aa"),this.$infoTable.append(this.makeRow("Length",g)),this.$infoTable.append(this.makeRow("Location",a("<div/>").append(this.parseLocation(d.location))));var h="No known aliases";d.aliases&&(h=d.aliases.join(", ")),c.$infoTable.append(c.makeRow("Aliases",h));var i="";if(d.protein_families&&d.protein_families.length>0){i="";for(var e=0;e<d.protein_families.length;e++){var j=d.protein_families[e];i+=j.id+": "+j.subject_description+"<br>"}}i&&this.$infoTable.append(this.makeRow("Protein Families",i)),this.$buttonPanel.find("button#domains").click(function(a){window.alert("No domain assignments available for this gene.  You will be able to compute domain assignments in the Narrative in the future.")}),this.$buttonPanel.find("button#operons").click(function(a){window.alert("No operon assignments available for this gene.  You will be able to compute operon assignments in the Narrative in the future.")}),this.$buttonPanel.find("button#structure").click(function(a){window.alert("No structure assignments available for this gene.  You will be able to compute structure assignments in the Narrative in the future.")}),this.cdmiClient.fids_to_proteins([c.options.featureID],function(a){a[c.options.featureID]===d.md5&&(c.$buttonPanel.find("button#domains").off("click"),c.$buttonPanel.find("button#domains").click(function(a){c.trigger("showDomains",{event:a,featureID:c.options.featureID})}),c.$buttonPanel.find("button#operons").off("click"),c.$buttonPanel.find("button#operons").click(function(a){c.trigger("showOperons",{event:a,featureID:c.options.featureID})}),c.$buttonPanel.find("button#structure").off("click"),c.$buttonPanel.find("button#structure").click(function(a){c.trigger("showStructureMatches",{event:a,featureID:c.options.featureID})}))}),this.$buttonPanel.find("button#sequence").click(a.proxy(function(a){this.trigger("showSequence",{event:a,featureID:this.options.featureID,genomeID:this.options.genomeID,workspaceID:this.options.workspaceID,kbCache:this.options.kbCache})},this)),this.$buttonPanel.find("button#biochemistry").click(a.proxy(function(a){this.trigger("showBiochemistry",{event:a,featureID:this.options.featureID,genomeID:this.options.genomeID,workspaceID:this.options.workspaceID,kbCache:this.options.kbCache})},this))}else this.renderError({error:"Gene '"+this.options.featureID+"' not found in the genome with object id: "+this.options.workspaceID+"/"+this.options.genomeID})}else this.renderError({error:"No genetic features found in the genome with object id: "+this.options.workspaceID+"/"+this.options.genomeID});this.hideMessage(),this.$infoPanel.show()},makeRow:function(b,c){var d=a("<tr/>").append(a("<th />").append(b)).append(a("<td />").append(c));return d},makeContigButton:function(b){if(this.options.hideButtons)return"";if(null===b||null===b[0][0])return"";var c=b[0][0],d=this,e=a("<button />").addClass("btn btn-default").append("Show Contig").on("click",function(a){d.trigger("showContig",{contig:c,centerFeature:d.options.featureID,genomeId:d.options.genomeID,workspaceId:d.options.workspaceID,kbCache:d.options.kbCache,event:a})});return e},makeGenomeButton:function(b,c){return b?(c||(c=null),a("<div>").append('<a href="#/dataview/'+c+"/"+b+'" target="_blank">'+c+"/<wbr>"+b+"</a>")):""},calculateGCContent:function(a){var b=0;a=a.toLowerCase();for(var c=0;c<a.length;c++){var d=a[c];("g"===d||"c"===d)&&b++}return b/a.length*100},parseLocation:function(a){if(0===a.length)return"Unknown";for(var b="",c=0;c<a.length;c++){var d=Number(a[c][1]),e=Number(a[c][3]),f=0;f="+"===a[c][2]?d+e-1:d-e+1,b+=d+" to "+f+" ("+a[c][2]+")<br/>"}return b},showMessage:function(b){var c=a("<span/>").append(b);this.$messagePane.empty().append(c).removeClass("hide")},hideMessage:function(){this.$messagePane.addClass("hide")},getData:function(){return{type:"Feature",id:this.options.featureID,workspace:this.options.workspaceID,genome:this.options.genomeID,title:"Gene Instance"}},renderError:function(b){errString="Sorry, an unknown error occurred","string"==typeof b?errString=b:b.error&&b.error.message&&(errString=b.error.message);var c=a("<div>").addClass("alert alert-danger").append("<b>Error:</b>").append("<br>"+errString);this.$elem.empty(),this.$elem.append(c)},buildObjectIdentity:function(a,b){var c={};return/^\d+$/.exec(a)?c.wsid=a:c.workspace=a,/^\d+$/.exec(b)?c.objid=b:c.name=b,c}})});