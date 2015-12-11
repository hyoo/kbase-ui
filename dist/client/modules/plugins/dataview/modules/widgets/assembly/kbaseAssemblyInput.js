define(["jquery","kb_dataview_assembly_singleObjectBasic"],function(a){"use strict";a.KBWidget({name:"kbaseAssemblyInput",parent:"kbaseSingleObjectBasicWidget",version:"1.0.1",getDataModel:function(b){var c={description:b.dataset_description,items:[]};if(b.single_end_libs){c.items.push({header:"1",name:"Single end read library"});for(var d=0;d<b.single_end_libs.length;d++){var e=b.single_end_libs[d];e.handle&&e.handle.file_name&&c.items.push({name:a("<span />").css("padding-left","2em").appen("Reads source file name"),value:e.handle.file_name})}}if(b.paired_end_libs){c.items.push({header:1,name:"Paired end read library"});for(var d=0;d<b.paired_end_libs.length;d++){var f=b.paired_end_libs[d];f.handle_1&&f.handle_1.file_name&&f.handle_2&&f.handle_2.file_name&&(c.items.push({name:a("<span />").css("padding-left","2em").append("Left reads source file name"),value:f.handle_1.file_name}),c.items.push({name:a("<span />").css("padding-left","2em").append("Right reads source file name"),value:f.handle_2.file_name}))}}return b.expected_coverage&&c.items.push({name:"Expected coverage",value:b.expected_coverage}),b.estimated_genome_size&&c.items.push({name:"Estimated genome size",value:b.estimated_genome_size}),c}})});