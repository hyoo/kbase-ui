define(["jquery","bootstrap","kb/widget/legacy/widget"],function(a){a.KBWidget({name:"kbaseSearchControls",version:"1.0.0",options:{controls:[],onMouseover:!0,position:"top",type:"floating"},init:function(b){return this._super(b),this.appendUI(a(this.$elem)),this},appendUI:function(b){var c=this,d=this.options.onMouseover;"floating"==this.options.type&&b.css("position","relative");var e=a.jqElem("div").addClass("input-group input-group-sm").append(a.jqElem("input").attr("type","text").addClass("form-control").attr("id","searchBox").on("keyup",function(a){27==a.keyCode&&c.value(void 0);var b=c.value();b.length?(c.data("searchIcon").removeClass("fa-search"),c.data("searchIcon").addClass("fa-times"),c.options.onMouseover=!1):(c.data("searchIcon").addClass("fa-search"),c.data("searchIcon").removeClass("fa-times"),d&&(c.options.onMouseover=!0)),c.options.searchCallback.call(this,a,b,c.options.context)})).append(a.jqElem("span").addClass("input-group-btn").append(a.jqElem("button").addClass("btn btn-default").attr("id","searchButton").append(a.jqElem("i").attr("id","searchIcon").addClass("fa fa-search")).on("click",function(a){c.data("searchIcon").hasClass("fa-times")&&(c.value(void 0),c.data("searchBox").focus(),d&&(c.options.onMouseover=!0)),c.options.searchCallback.call(this,a,c.value(),c.options.context)})));return"floating"==this.options.type&&e.css("right","0px").css("top","0px").css("position","absolute").css("margin-right","3px").attr("z-index",1e4),this._rewireIds(e,this),b.append(e),b.data("searchControls",e),b.on("mouseover.kbaseSearchControls",function(a){c.options.onMouseover&&e.show()}).on("mouseout.kbaseSearchControls",function(a){c.options.onMouseover&&e.hide(),c.data("searchBox").blur()}),this.options.onMouseover&&e.hide(),this},value:function(a){return arguments.length&&this.data("searchBox").val(a),this.data("searchBox").val()}})});