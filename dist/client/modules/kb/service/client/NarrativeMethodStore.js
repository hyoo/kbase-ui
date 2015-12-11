define(["jquery","bluebird"],function(a,b){"use strict";function c(c,d,e){function f(){if(!i){if(i=!0,!window.console)return;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")}}function g(c,d,e,f,g){var i=a.Deferred();"function"==typeof f&&i.done(f),"function"==typeof g&&i.fail(g);var l={params:d,method:c,version:"1.1",id:String(Math.random()).slice(2)},m=null,n=k&&"function"==typeof k?k():j.token?j.token:null;null!==n&&(m=function(a){a.setRequestHeader("Authorization",n)});var o=jQuery.ajax({url:h,dataType:"text",type:"POST",processData:!1,data:JSON.stringify(l),beforeSend:m,success:function(a,b,c){var d;try{var f=JSON.parse(a);d=1===e?f.result[0]:f.result}catch(g){return void i.reject({status:503,error:g,url:h,resp:a})}i.resolve(d)},error:function(a,b,c){var d;if(a.responseText)try{var e=JSON.parse(a.responseText);d=e.error}catch(f){d="Unknown error - "+a.responseText}else d="Unknown Error";i.reject({status:500,error:d})}}),p=i.promise();return p.xhr=o,b.resolve(p)}this.url=c;var h=c,i=!1;("string"!=typeof h||0===h.length)&&(h="https://kbase.us/services/narrative_method_store/rpc");var j=d?d:{token:"",user_id:""},k=e;this.ver=function(a,b){return g("NarrativeMethodStore.ver",[],1,a,b)},this.ver_async=function(a,b){return f(),g("NarrativeMethodStore.ver",[],1,a,b)},this.status=function(a,b){return g("NarrativeMethodStore.status",[],1,a,b)},this.status_async=function(a,b){return f(),g("NarrativeMethodStore.status",[],1,a,b)},this.list_categories=function(a,b,c){return g("NarrativeMethodStore.list_categories",[a],4,b,c)},this.list_categories_async=function(a,b,c){return f(),g("NarrativeMethodStore.list_categories",[a],4,b,c)},this.get_category=function(a,b,c){return g("NarrativeMethodStore.get_category",[a],1,b,c)},this.get_category_async=function(a,b,c){return f(),g("NarrativeMethodStore.get_category",[a],1,b,c)},this.list_methods=function(a,b,c){return g("NarrativeMethodStore.list_methods",[a],1,b,c)},this.list_methods_async=function(a,b,c){return f(),g("NarrativeMethodStore.list_methods",[a],1,b,c)},this.list_methods_full_info=function(a,b,c){return g("NarrativeMethodStore.list_methods_full_info",[a],1,b,c)},this.list_methods_full_info_async=function(a,b,c){return f(),g("NarrativeMethodStore.list_methods_full_info",[a],1,b,c)},this.list_methods_spec=function(a,b,c){return g("NarrativeMethodStore.list_methods_spec",[a],1,b,c)},this.list_methods_spec_async=function(a,b,c){return f(),g("NarrativeMethodStore.list_methods_spec",[a],1,b,c)},this.list_method_ids_and_names=function(a,b){return g("NarrativeMethodStore.list_method_ids_and_names",[],1,a,b)},this.list_method_ids_and_names_async=function(a,b){return f(),g("NarrativeMethodStore.list_method_ids_and_names",[],1,a,b)},this.list_apps=function(a,b,c){return g("NarrativeMethodStore.list_apps",[a],1,b,c)},this.list_apps_async=function(a,b,c){return f(),g("NarrativeMethodStore.list_apps",[a],1,b,c)},this.list_apps_full_info=function(a,b,c){return g("NarrativeMethodStore.list_apps_full_info",[a],1,b,c)},this.list_apps_full_info_async=function(a,b,c){return f(),g("NarrativeMethodStore.list_apps_full_info",[a],1,b,c)},this.list_apps_spec=function(a,b,c){return g("NarrativeMethodStore.list_apps_spec",[a],1,b,c)},this.list_apps_spec_async=function(a,b,c){return f(),g("NarrativeMethodStore.list_apps_spec",[a],1,b,c)},this.list_app_ids_and_names=function(a,b){return g("NarrativeMethodStore.list_app_ids_and_names",[],1,a,b)},this.list_app_ids_and_names_async=function(a,b){return f(),g("NarrativeMethodStore.list_app_ids_and_names",[],1,a,b)},this.list_types=function(a,b,c){return g("NarrativeMethodStore.list_types",[a],1,b,c)},this.list_types_async=function(a,b,c){return f(),g("NarrativeMethodStore.list_types",[a],1,b,c)},this.get_method_brief_info=function(a,b,c){return g("NarrativeMethodStore.get_method_brief_info",[a],1,b,c)},this.get_method_brief_info_async=function(a,b,c){return f(),g("NarrativeMethodStore.get_method_brief_info",[a],1,b,c)},this.get_method_full_info=function(a,b,c){return g("NarrativeMethodStore.get_method_full_info",[a],1,b,c)},this.get_method_full_info_async=function(a,b,c){return f(),g("NarrativeMethodStore.get_method_full_info",[a],1,b,c)},this.get_method_spec=function(a,b,c){return g("NarrativeMethodStore.get_method_spec",[a],1,b,c)},this.get_method_spec_async=function(a,b,c){return f(),g("NarrativeMethodStore.get_method_spec",[a],1,b,c)},this.get_app_brief_info=function(a,b,c){return g("NarrativeMethodStore.get_app_brief_info",[a],1,b,c)},this.get_app_brief_info_async=function(a,b,c){return f(),g("NarrativeMethodStore.get_app_brief_info",[a],1,b,c)},this.get_app_full_info=function(a,b,c){return g("NarrativeMethodStore.get_app_full_info",[a],1,b,c)},this.get_app_full_info_async=function(a,b,c){return f(),g("NarrativeMethodStore.get_app_full_info",[a],1,b,c)},this.get_app_spec=function(a,b,c){return g("NarrativeMethodStore.get_app_spec",[a],1,b,c)},this.get_app_spec_async=function(a,b,c){return f(),g("NarrativeMethodStore.get_app_spec",[a],1,b,c)},this.get_type_info=function(a,b,c){return g("NarrativeMethodStore.get_type_info",[a],1,b,c)},this.get_type_info_async=function(a,b,c){return f(),g("NarrativeMethodStore.get_type_info",[a],1,b,c)}}return c});