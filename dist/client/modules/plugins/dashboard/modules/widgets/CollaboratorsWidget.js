define(["kb_dashboard_widget_base","kb/service/serviceApi","bluebird"],function(a,b,c){"use strict";var d=Object.create(a,{init:{value:function(a){return a.name="CollaboratorsWidget",a.title="Common Collaborator Network",this.DashboardWidget_init(a),this}},setup:{value:function(){this.runtime.service("session").isLoggedIn()?this.serviceApi=b.make({runtime:this.runtime}):this.userProfileClient=null}},setInitialState:{value:function(){return new c(function(a,b){this.runtime.getService("session").isLoggedIn()?this.serviceApi.getCollaborators().then(function(b){this.setState("collaborators",b),a()}.bind(this))["catch"](function(a){b(a)}):a()}.bind(this))}}});return d});