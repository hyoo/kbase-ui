define(["jquery","bluebird"],function(a,b){"use strict";function c(c,d,e){function f(){if(!i){if(i=!0,!window.console)return;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")}}function g(c,d,e,f,g){var i=a.Deferred();"function"==typeof f&&i.done(f),"function"==typeof g&&i.fail(g);var l={params:d,method:c,version:"1.1",id:String(Math.random()).slice(2)},m=null,n=k&&"function"==typeof k?k():j.token?j.token:null;null!==n&&(m=function(a){a.setRequestHeader("Authorization",n)});var o=jQuery.ajax({url:h,dataType:"text",type:"POST",processData:!1,data:JSON.stringify(l),beforeSend:m,success:function(a,b,c){var d;try{var f=JSON.parse(a);d=1===e?f.result[0]:f.result}catch(g){return void i.reject({status:503,error:g,url:h,resp:a})}i.resolve(d)},error:function(a,b,c){var d;if(a.responseText)try{var e=JSON.parse(a.responseText);d=e.error}catch(f){d="Unknown error - "+a.responseText}else d="Unknown Error";i.reject({status:500,error:d})}}),p=i.promise();return p.xhr=o,b.resolve(p)}this.url=c;var h=c,i=!1,j=d?d:{token:"",user_id:""},k=e;this.all_datasets=function(a,b){return g("KBaseNetworks.all_datasets",[],1,a,b)},this.all_datasets_async=function(a,b){return f(),g("KBaseNetworks.all_datasets",[],1,a,b)},this.all_dataset_sources=function(a,b){return g("KBaseNetworks.all_dataset_sources",[],1,a,b)},this.all_dataset_sources_async=function(a,b){return f(),g("KBaseNetworks.all_dataset_sources",[],1,a,b)},this.all_network_types=function(a,b){return g("KBaseNetworks.all_network_types",[],1,a,b)},this.all_network_types_async=function(a,b){return f(),g("KBaseNetworks.all_network_types",[],1,a,b)},this.dataset_source2datasets=function(a,b,c){return g("KBaseNetworks.dataset_source2datasets",[a],1,b,c)},this.dataset_source2datasets_async=function(a,b,c){return f(),g("KBaseNetworks.dataset_source2datasets",[a],1,b,c)},this.taxon2datasets=function(a,b,c){return g("KBaseNetworks.taxon2datasets",[a],1,b,c)},this.taxon2datasets_async=function(a,b,c){return f(),g("KBaseNetworks.taxon2datasets",[a],1,b,c)},this.network_type2datasets=function(a,b,c){return g("KBaseNetworks.network_type2datasets",[a],1,b,c)},this.network_type2datasets_async=function(a,b,c){return f(),g("KBaseNetworks.network_type2datasets",[a],1,b,c)},this.entity2datasets=function(a,b,c){return g("KBaseNetworks.entity2datasets",[a],1,b,c)},this.entity2datasets_async=function(a,b,c){return f(),g("KBaseNetworks.entity2datasets",[a],1,b,c)},this.build_first_neighbor_network=function(a,b,c,d,e){return g("KBaseNetworks.build_first_neighbor_network",[a,b,c],1,d,e)},this.build_first_neighbor_network_async=function(a,b,c,d,e){return f(),g("KBaseNetworks.build_first_neighbor_network",[a,b,c],1,d,e)},this.build_first_neighbor_network_limted_by_strength=function(a,b,c,d,e,f){return g("KBaseNetworks.build_first_neighbor_network_limted_by_strength",[a,b,c,d],1,e,f)},this.build_first_neighbor_network_limted_by_strength_async=function(a,b,c,d,e,h){return f(),g("KBaseNetworks.build_first_neighbor_network_limted_by_strength",[a,b,c,d],1,e,h)},this.build_internal_network=function(a,b,c,d,e){return g("KBaseNetworks.build_internal_network",[a,b,c],1,d,e)},this.build_internal_network_async=function(a,b,c,d,e){return f(),g("KBaseNetworks.build_internal_network",[a,b,c],1,d,e)},this.build_internal_network_limited_by_strength=function(a,b,c,d,e,f){return g("KBaseNetworks.build_internal_network_limited_by_strength",[a,b,c,d],1,e,f)},this.build_internal_network_limited_by_strength_async=function(a,b,c,d,e,h){return f(),g("KBaseNetworks.build_internal_network_limited_by_strength",[a,b,c,d],1,e,h)}}return c});