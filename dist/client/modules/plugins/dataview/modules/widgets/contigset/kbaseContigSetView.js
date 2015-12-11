define(["jquery","bluebird","kb/service/client/workspace","kb/common/html","datatables_bootstrap","kb/widget/legacy/authenticatedWidget"],function(a,b,c,d){"use strict";a.KBWidget({name:"kbaseContigSetView",parent:"kbaseAuthenticatedWidget",version:"1.0.0",ws_id:null,ws_name:null,token:null,job_id:null,options:{ws_id:null,ws_name:null,width:850},init:function(a){return this._super(a),this.ws_name=a.ws_name,this.ws_id=a.ws_id,a.ws&&a.id&&(this.ws_id=a.id,this.ws_name=a.ws),this.ws_service=new c(this.runtime.getConfig("services.workspace.url"),{token:this.token}),this.render(),this},render:function(){var c=this,e=this.uuid(),f=this.$elem,g=function(){f.empty(),f.append(d.loading("loading data...")),b.resolve(c.ws_service.get_object_subset([{ref:c.ws_name+"/"+c.ws_id,included:["contigs/[*]/id","contigs/[*]/length","id","name","source","source_id","type"]}])).then(function(b){f.empty();var d,g=b[0].data,h=["Overview","Contigs"],i=["overview","contigs"],j=a('<ul id="'+e+'table-tabs" class="nav nav-tabs"/>');for(j.append('<li class="active"><a href="#'+e+i[0]+'" data-toggle="tab" >'+h[0]+"</a></li>"),d=1;d<i.length;d+=1)j.append('<li><a href="#'+e+i[d]+'" data-toggle="tab">'+h[d]+"</a></li>");f.append(j);var k=a('<div id="'+e+'tab-content" class="tab-content"/>');for(k.append('<div class="tab-pane in active" id="'+e+i[0]+'"/>'),d=1;d<i.length;d+=1)k.append(a('<div class="tab-pane in" id="'+e+i[d]+'"/>'));f.append(k),a("#"+e+"table-tabs a").click(function(b){b.preventDefault(),a(this).tab("show")}),a("#"+e+"overview").append('<table class="table table-striped table-bordered" style="margin-left: auto; margin-right: auto;" id="'+e+'overview-table"/>');var l=["KBase ID","Name","Object ID","Source","Source ID","Type"],m=[g.id,g.name,c.ws_id,g.source,g.source_id,g.type],n=a("#"+e+"overview-table");for(d=0;d<m.length;d+=1)n.append("<tr><td>"+l[d]+"</td> <td>"+m[d]+"</td></tr>");a("#"+e+"contigs").append('<table cellpadding="0" cellspacing="0" border="0" id="'+e+'contigs-table" class="table table-bordered table-striped" style="width: 100%; margin-left: 0px; margin-right: 0px;"/>');var o=g.contigs.map(function(a){return{name:a.id,length:a.length}}),p={sPaginationType:"full_numbers",iDisplayLength:10,aoColumns:[{sTitle:"Contig name",mData:"name"},{sTitle:"Length",mData:"length"}],aaData:o,oLanguage:{sSearch:"Search contig:",sEmptyTable:"No contigs found."}};a("#"+e+"contigs-table").dataTable(p)})["catch"](function(a){f.empty();var b;b=a.error&&a.error.message?a.error.message:a.message?a.message:a,f.append('<div class="alert alert-danger"><p>[Error] '+b+"</p></div>")})};return g(),this},getData:function(){return{type:"NarrativeTempCard",id:this.ws_id,workspace:this.ws_name,title:"Contig-set"}},loggedInCallback:function(a,b){return this.token=b.token,this},loggedOutCallback:function(a,b){return this.token=null,this},uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"===a?b:3&b|8;return c.toString(16)})}})});