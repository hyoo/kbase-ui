define(["jquery","bluebird"],function(a,b){"use strict";function c(c,d,e){function f(){if(!i){if(i=!0,!window.console)return;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")}}function g(c,d,e,f,g){var i=a.Deferred();"function"==typeof f&&i.done(f),"function"==typeof g&&i.fail(g);var l={params:d,method:c,version:"1.1",id:String(Math.random()).slice(2)},m=null,n=k&&"function"==typeof k?k():j.token?j.token:null;null!==n&&(m=function(a){a.setRequestHeader("Authorization",n)});var o=jQuery.ajax({url:h,dataType:"text",type:"POST",processData:!1,data:JSON.stringify(l),beforeSend:m,success:function(a,b,c){var d;try{var f=JSON.parse(a);d=1===e?f.result[0]:f.result}catch(g){return void i.reject({status:503,error:g,url:h,resp:a})}i.resolve(d)},error:function(a,b,c){var d;if(a.responseText)try{var e=JSON.parse(a.responseText);d=e.error}catch(f){d="Unknown error - "+a.responseText}else d="Unknown Error";i.reject({status:500,error:d})}}),p=i.promise();return p.xhr=o,b.resolve(p)}this.url=c;var h=c,i=!1,j=d?d:{token:"",user_id:""},k=e;this.get_models=function(a,b,c){return g("fbaModelServices.get_models",[a],1,b,c)},this.get_models_async=function(a,b,c){return f(),g("fbaModelServices.get_models",[a],1,b,c)},this.get_fbas=function(a,b,c){return g("fbaModelServices.get_fbas",[a],1,b,c)},this.get_fbas_async=function(a,b,c){return f(),g("fbaModelServices.get_fbas",[a],1,b,c)},this.get_gapfills=function(a,b,c){return g("fbaModelServices.get_gapfills",[a],1,b,c)},this.get_gapfills_async=function(a,b,c){return f(),g("fbaModelServices.get_gapfills",[a],1,b,c)},this.get_gapgens=function(a,b,c){return g("fbaModelServices.get_gapgens",[a],1,b,c)},this.get_gapgens_async=function(a,b,c){return f(),g("fbaModelServices.get_gapgens",[a],1,b,c)},this.get_reactions=function(a,b,c){return g("fbaModelServices.get_reactions",[a],1,b,c)},this.get_reactions_async=function(a,b,c){return f(),g("fbaModelServices.get_reactions",[a],1,b,c)},this.get_compounds=function(a,b,c){return g("fbaModelServices.get_compounds",[a],1,b,c)},this.get_compounds_async=function(a,b,c){return f(),g("fbaModelServices.get_compounds",[a],1,b,c)},this.get_alias=function(a,b,c){return g("fbaModelServices.get_alias",[a],1,b,c)},this.get_alias_async=function(a,b,c){return f(),g("fbaModelServices.get_alias",[a],1,b,c)},this.get_aliassets=function(a,b,c){return g("fbaModelServices.get_aliassets",[a],1,b,c)},this.get_aliassets_async=function(a,b,c){return f(),g("fbaModelServices.get_aliassets",[a],1,b,c)},this.get_media=function(a,b,c){return g("fbaModelServices.get_media",[a],1,b,c)},this.get_media_async=function(a,b,c){return f(),g("fbaModelServices.get_media",[a],1,b,c)},this.get_biochemistry=function(a,b,c){return g("fbaModelServices.get_biochemistry",[a],1,b,c)},this.get_biochemistry_async=function(a,b,c){return f(),g("fbaModelServices.get_biochemistry",[a],1,b,c)},this.import_probanno=function(a,b,c){return g("fbaModelServices.import_probanno",[a],1,b,c)},this.import_probanno_async=function(a,b,c){return f(),g("fbaModelServices.import_probanno",[a],1,b,c)},this.genome_object_to_workspace=function(a,b,c){return g("fbaModelServices.genome_object_to_workspace",[a],1,b,c)},this.genome_object_to_workspace_async=function(a,b,c){return f(),g("fbaModelServices.genome_object_to_workspace",[a],1,b,c)},this.genome_to_workspace=function(a,b,c){return g("fbaModelServices.genome_to_workspace",[a],1,b,c)},this.genome_to_workspace_async=function(a,b,c){return f(),g("fbaModelServices.genome_to_workspace",[a],1,b,c)},this.domains_to_workspace=function(a,b,c){return g("fbaModelServices.domains_to_workspace",[a],1,b,c)},this.domains_to_workspace_async=function(a,b,c){return f(),g("fbaModelServices.domains_to_workspace",[a],1,b,c)},this.compute_domains=function(a,b,c){return g("fbaModelServices.compute_domains",[a],1,b,c)},this.compute_domains_async=function(a,b,c){return f(),g("fbaModelServices.compute_domains",[a],1,b,c)},this.add_feature_translation=function(a,b,c){return g("fbaModelServices.add_feature_translation",[a],1,b,c)},this.add_feature_translation_async=function(a,b,c){return f(),g("fbaModelServices.add_feature_translation",[a],1,b,c)},this.genome_to_fbamodel=function(a,b,c){return g("fbaModelServices.genome_to_fbamodel",[a],1,b,c)},this.genome_to_fbamodel_async=function(a,b,c){return f(),g("fbaModelServices.genome_to_fbamodel",[a],1,b,c)},this.translate_fbamodel=function(a,b,c){return g("fbaModelServices.translate_fbamodel",[a],1,b,c)},this.translate_fbamodel_async=function(a,b,c){return f(),g("fbaModelServices.translate_fbamodel",[a],1,b,c)},this.build_pangenome=function(a,b,c){return g("fbaModelServices.build_pangenome",[a],1,b,c)},this.build_pangenome_async=function(a,b,c){return f(),g("fbaModelServices.build_pangenome",[a],1,b,c)},this.genome_heatmap_from_pangenome=function(a,b,c){return g("fbaModelServices.genome_heatmap_from_pangenome",[a],1,b,c)},this.genome_heatmap_from_pangenome_async=function(a,b,c){return f(),g("fbaModelServices.genome_heatmap_from_pangenome",[a],1,b,c)},this.ortholog_family_from_pangenome=function(a,b,c){return g("fbaModelServices.ortholog_family_from_pangenome",[a],1,b,c)},this.ortholog_family_from_pangenome_async=function(a,b,c){return f(),g("fbaModelServices.ortholog_family_from_pangenome",[a],1,b,c)},this.pangenome_to_proteome_comparison=function(a,b,c){return g("fbaModelServices.pangenome_to_proteome_comparison",[a],1,b,c)},this.pangenome_to_proteome_comparison_async=function(a,b,c){return f(),g("fbaModelServices.pangenome_to_proteome_comparison",[a],1,b,c)},this.import_fbamodel=function(a,b,c){return g("fbaModelServices.import_fbamodel",[a],1,b,c)},this.import_fbamodel_async=function(a,b,c){return f(),g("fbaModelServices.import_fbamodel",[a],1,b,c)},this.export_fbamodel=function(a,b,c){return g("fbaModelServices.export_fbamodel",[a],1,b,c)},this.export_fbamodel_async=function(a,b,c){return f(),g("fbaModelServices.export_fbamodel",[a],1,b,c)},this.export_object=function(a,b,c){return g("fbaModelServices.export_object",[a],1,b,c)},this.export_object_async=function(a,b,c){return f(),g("fbaModelServices.export_object",[a],1,b,c)},this.export_genome=function(a,b,c){return g("fbaModelServices.export_genome",[a],1,b,c)},this.export_genome_async=function(a,b,c){return f(),g("fbaModelServices.export_genome",[a],1,b,c)},this.adjust_model_reaction=function(a,b,c){return g("fbaModelServices.adjust_model_reaction",[a],1,b,c)},this.adjust_model_reaction_async=function(a,b,c){return f(),g("fbaModelServices.adjust_model_reaction",[a],1,b,c)},this.adjust_biomass_reaction=function(a,b,c){return g("fbaModelServices.adjust_biomass_reaction",[a],1,b,c)},this.adjust_biomass_reaction_async=function(a,b,c){return f(),g("fbaModelServices.adjust_biomass_reaction",[a],1,b,c)},this.addmedia=function(a,b,c){return g("fbaModelServices.addmedia",[a],1,b,c)},this.addmedia_async=function(a,b,c){return f(),g("fbaModelServices.addmedia",[a],1,b,c)},this.export_media=function(a,b,c){return g("fbaModelServices.export_media",[a],1,b,c)},this.export_media_async=function(a,b,c){return f(),g("fbaModelServices.export_media",[a],1,b,c)},this.runfba=function(a,b,c){return g("fbaModelServices.runfba",[a],1,b,c)},this.runfba_async=function(a,b,c){return f(),g("fbaModelServices.runfba",[a],1,b,c)},this.quantitative_optimization=function(a,b,c){return g("fbaModelServices.quantitative_optimization",[a],1,b,c)},this.quantitative_optimization_async=function(a,b,c){return f(),g("fbaModelServices.quantitative_optimization",[a],1,b,c)},this.generate_model_stats=function(a,b,c){return g("fbaModelServices.generate_model_stats",[a],1,b,c)},this.generate_model_stats_async=function(a,b,c){return f(),g("fbaModelServices.generate_model_stats",[a],1,b,c)},this.minimize_reactions=function(a,b,c){return g("fbaModelServices.minimize_reactions",[a],1,b,c)},this.minimize_reactions_async=function(a,b,c){return f(),g("fbaModelServices.minimize_reactions",[a],1,b,c)},this.export_fba=function(a,b,c){return g("fbaModelServices.export_fba",[a],1,b,c)},this.export_fba_async=function(a,b,c){return f(),g("fbaModelServices.export_fba",[a],1,b,c)},this.import_phenotypes=function(a,b,c){return g("fbaModelServices.import_phenotypes",[a],1,b,c)},this.import_phenotypes_async=function(a,b,c){return f(),g("fbaModelServices.import_phenotypes",[a],1,b,c)},this.simulate_phenotypes=function(a,b,c){return g("fbaModelServices.simulate_phenotypes",[a],1,b,c)},this.simulate_phenotypes_async=function(a,b,c){return f(),g("fbaModelServices.simulate_phenotypes",[a],1,b,c)},this.add_media_transporters=function(a,b,c){return g("fbaModelServices.add_media_transporters",[a],1,b,c)},this.add_media_transporters_async=function(a,b,c){return f(),g("fbaModelServices.add_media_transporters",[a],1,b,c)},this.export_phenotypeSimulationSet=function(a,b,c){return g("fbaModelServices.export_phenotypeSimulationSet",[a],1,b,c)},this.export_phenotypeSimulationSet_async=function(a,b,c){return f(),g("fbaModelServices.export_phenotypeSimulationSet",[a],1,b,c)},this.integrate_reconciliation_solutions=function(a,b,c){return g("fbaModelServices.integrate_reconciliation_solutions",[a],1,b,c)},this.integrate_reconciliation_solutions_async=function(a,b,c){return f(),g("fbaModelServices.integrate_reconciliation_solutions",[a],1,b,c)},this.queue_runfba=function(a,b,c){return g("fbaModelServices.queue_runfba",[a],1,b,c)},this.queue_runfba_async=function(a,b,c){return f(),g("fbaModelServices.queue_runfba",[a],1,b,c)},this.queue_gapfill_model=function(a,b,c){return g("fbaModelServices.queue_gapfill_model",[a],1,b,c)},this.queue_gapfill_model_async=function(a,b,c){return f(),g("fbaModelServices.queue_gapfill_model",[a],1,b,c)},this.gapfill_model=function(a,b,c){return g("fbaModelServices.gapfill_model",[a],1,b,c)},this.gapfill_model_async=function(a,b,c){return f(),g("fbaModelServices.gapfill_model",[a],1,b,c)},this.queue_gapgen_model=function(a,b,c){return g("fbaModelServices.queue_gapgen_model",[a],1,b,c)},this.queue_gapgen_model_async=function(a,b,c){return f(),g("fbaModelServices.queue_gapgen_model",[a],1,b,c)},this.gapgen_model=function(a,b,c){return g("fbaModelServices.gapgen_model",[a],1,b,c)},this.gapgen_model_async=function(a,b,c){return f(),g("fbaModelServices.gapgen_model",[a],1,b,c)},this.queue_wildtype_phenotype_reconciliation=function(a,b,c){return g("fbaModelServices.queue_wildtype_phenotype_reconciliation",[a],1,b,c)},this.queue_wildtype_phenotype_reconciliation_async=function(a,b,c){return f(),g("fbaModelServices.queue_wildtype_phenotype_reconciliation",[a],1,b,c)},this.queue_reconciliation_sensitivity_analysis=function(a,b,c){return g("fbaModelServices.queue_reconciliation_sensitivity_analysis",[a],1,b,c)},this.queue_reconciliation_sensitivity_analysis_async=function(a,b,c){return f(),g("fbaModelServices.queue_reconciliation_sensitivity_analysis",[a],1,b,c)},this.queue_combine_wildtype_phenotype_reconciliation=function(a,b,c){return g("fbaModelServices.queue_combine_wildtype_phenotype_reconciliation",[a],1,b,c)},this.queue_combine_wildtype_phenotype_reconciliation_async=function(a,b,c){return f(),g("fbaModelServices.queue_combine_wildtype_phenotype_reconciliation",[a],1,b,c)},this.run_job=function(a,b,c){return g("fbaModelServices.run_job",[a],1,b,c)},this.run_job_async=function(a,b,c){return f(),g("fbaModelServices.run_job",[a],1,b,c)},this.queue_job=function(a,b,c){return g("fbaModelServices.queue_job",[a],1,b,c)},this.queue_job_async=function(a,b,c){return f(),g("fbaModelServices.queue_job",[a],1,b,c)},this.set_cofactors=function(a,b,c){return g("fbaModelServices.set_cofactors",[a],1,b,c)},this.set_cofactors_async=function(a,b,c){return f(),g("fbaModelServices.set_cofactors",[a],1,b,c)},this.find_reaction_synonyms=function(a,b,c){return g("fbaModelServices.find_reaction_synonyms",[a],1,b,c)},this.find_reaction_synonyms_async=function(a,b,c){return f(),g("fbaModelServices.find_reaction_synonyms",[a],1,b,c)},this.role_to_reactions=function(a,b,c){return g("fbaModelServices.role_to_reactions",[a],1,b,c)},this.role_to_reactions_async=function(a,b,c){return f(),g("fbaModelServices.role_to_reactions",[a],1,b,c)},this.reaction_sensitivity_analysis=function(a,b,c){return g("fbaModelServices.reaction_sensitivity_analysis",[a],1,b,c)},this.reaction_sensitivity_analysis_async=function(a,b,c){return f(),g("fbaModelServices.reaction_sensitivity_analysis",[a],1,b,c)},this.filter_iterative_solutions=function(a,b,c){return g("fbaModelServices.filter_iterative_solutions",[a],1,b,c)},this.filter_iterative_solutions_async=function(a,b,c){return f(),g("fbaModelServices.filter_iterative_solutions",[a],1,b,c)},this.delete_noncontributing_reactions=function(a,b,c){return g("fbaModelServices.delete_noncontributing_reactions",[a],1,b,c)},this.delete_noncontributing_reactions_async=function(a,b,c){return f(),g("fbaModelServices.delete_noncontributing_reactions",[a],1,b,c)},this.annotate_workspace_Genome=function(a,b,c){return g("fbaModelServices.annotate_workspace_Genome",[a],1,b,c)},this.annotate_workspace_Genome_async=function(a,b,c){return f(),g("fbaModelServices.annotate_workspace_Genome",[a],1,b,c)},this.gtf_to_genome=function(a,b,c){return g("fbaModelServices.gtf_to_genome",[a],1,b,c)},this.gtf_to_genome_async=function(a,b,c){return f(),g("fbaModelServices.gtf_to_genome",[a],1,b,c)},this.fasta_to_ProteinSet=function(a,b,c){return g("fbaModelServices.fasta_to_ProteinSet",[a],1,b,c)},this.fasta_to_ProteinSet_async=function(a,b,c){return f(),g("fbaModelServices.fasta_to_ProteinSet",[a],1,b,c)},this.ProteinSet_to_Genome=function(a,b,c){return g("fbaModelServices.ProteinSet_to_Genome",[a],1,b,c)},this.ProteinSet_to_Genome_async=function(a,b,c){return f(),g("fbaModelServices.ProteinSet_to_Genome",[a],1,b,c)},this.fasta_to_ContigSet=function(a,b,c){return g("fbaModelServices.fasta_to_ContigSet",[a],1,b,c)},this.fasta_to_ContigSet_async=function(a,b,c){return f(),g("fbaModelServices.fasta_to_ContigSet",[a],1,b,c)},this.ContigSet_to_Genome=function(a,b,c){return g("fbaModelServices.ContigSet_to_Genome",[a],1,b,c)},this.ContigSet_to_Genome_async=function(a,b,c){return f(),g("fbaModelServices.ContigSet_to_Genome",[a],1,b,c)},this.probanno_to_genome=function(a,b,c){return g("fbaModelServices.probanno_to_genome",[a],1,b,c)},this.probanno_to_genome_async=function(a,b,c){return f(),g("fbaModelServices.probanno_to_genome",[a],1,b,c)},this.get_mapping=function(a,b,c){return g("fbaModelServices.get_mapping",[a],1,b,c)},this.get_mapping_async=function(a,b,c){return f(),g("fbaModelServices.get_mapping",[a],1,b,c)},this.subsystem_of_roles=function(a,b,c){return g("fbaModelServices.subsystem_of_roles",[a],1,b,c)},this.subsystem_of_roles_async=function(a,b,c){return f(),g("fbaModelServices.subsystem_of_roles",[a],1,b,c)},this.adjust_mapping_role=function(a,b,c){return g("fbaModelServices.adjust_mapping_role",[a],1,b,c)},this.adjust_mapping_role_async=function(a,b,c){return f(),g("fbaModelServices.adjust_mapping_role",[a],1,b,c)},this.adjust_mapping_complex=function(a,b,c){return g("fbaModelServices.adjust_mapping_complex",[a],1,b,c)},this.adjust_mapping_complex_async=function(a,b,c){return f(),g("fbaModelServices.adjust_mapping_complex",[a],1,b,c)},this.adjust_mapping_subsystem=function(a,b,c){return g("fbaModelServices.adjust_mapping_subsystem",[a],1,b,c)},this.adjust_mapping_subsystem_async=function(a,b,c){return f(),g("fbaModelServices.adjust_mapping_subsystem",[a],1,b,c)},this.get_template_model=function(a,b,c){return g("fbaModelServices.get_template_model",[a],1,b,c)},this.get_template_model_async=function(a,b,c){return f(),g("fbaModelServices.get_template_model",[a],1,b,c)},this.import_template_fbamodel=function(a,b,c){return g("fbaModelServices.import_template_fbamodel",[a],1,b,c)},this.import_template_fbamodel_async=function(a,b,c){return f(),g("fbaModelServices.import_template_fbamodel",[a],1,b,c)},this.adjust_template_reaction=function(a,b,c){return g("fbaModelServices.adjust_template_reaction",[a],1,b,c)},this.adjust_template_reaction_async=function(a,b,c){return f(),g("fbaModelServices.adjust_template_reaction",[a],1,b,c)},this.adjust_template_biomass=function(a,b,c){return g("fbaModelServices.adjust_template_biomass",[a],1,b,c)},this.adjust_template_biomass_async=function(a,b,c){return f(),g("fbaModelServices.adjust_template_biomass",[a],1,b,c)},this.add_stimuli=function(a,b,c){return g("fbaModelServices.add_stimuli",[a],1,b,c)},this.add_stimuli_async=function(a,b,c){return f(),g("fbaModelServices.add_stimuli",[a],1,b,c)},this.import_regulatory_model=function(a,b,c){return g("fbaModelServices.import_regulatory_model",[a],1,b,c)},this.import_regulatory_model_async=function(a,b,c){return f(),g("fbaModelServices.import_regulatory_model",[a],1,b,c)},this.compare_models=function(a,b,c){return g("fbaModelServices.compare_models",[a],1,b,c)},this.compare_models_async=function(a,b,c){return f(),g("fbaModelServices.compare_models",[a],1,b,c)},this.compare_genomes=function(a,b,c){return g("fbaModelServices.compare_genomes",[a],1,b,c)},this.compare_genomes_async=function(a,b,c){return f(),g("fbaModelServices.compare_genomes",[a],1,b,c)},this.import_metagenome_annotation=function(a,b,c){return g("fbaModelServices.import_metagenome_annotation",[a],1,b,c)},this.import_metagenome_annotation_async=function(a,b,c){return f(),g("fbaModelServices.import_metagenome_annotation",[a],1,b,c)},this.models_to_community_model=function(a,b,c){return g("fbaModelServices.models_to_community_model",[a],1,b,c)},this.models_to_community_model_async=function(a,b,c){return f(),g("fbaModelServices.models_to_community_model",[a],1,b,c)},this.metagenome_to_fbamodels=function(a,b,c){return g("fbaModelServices.metagenome_to_fbamodels",[a],1,b,c)},this.metagenome_to_fbamodels_async=function(a,b,c){return f(),g("fbaModelServices.metagenome_to_fbamodels",[a],1,b,c)},this.import_expression=function(a,b,c){return g("fbaModelServices.import_expression",[a],1,b,c)},this.import_expression_async=function(a,b,c){return f(),g("fbaModelServices.import_expression",[a],1,b,c)},this.import_regulome=function(a,b,c){return g("fbaModelServices.import_regulome",[a],1,b,c)},this.import_regulome_async=function(a,b,c){return f(),g("fbaModelServices.import_regulome",[a],1,b,c)},this.create_promconstraint=function(a,b,c){return g("fbaModelServices.create_promconstraint",[a],1,b,c)},this.create_promconstraint_async=function(a,b,c){return f(),g("fbaModelServices.create_promconstraint",[a],1,b,c)},this.add_biochemistry_compounds=function(a,b,c){return g("fbaModelServices.add_biochemistry_compounds",[a],1,b,c)},this.add_biochemistry_compounds_async=function(a,b,c){return f(),g("fbaModelServices.add_biochemistry_compounds",[a],1,b,c)},this.update_object_references=function(a,b,c){return g("fbaModelServices.update_object_references",[a],1,b,c)},this.update_object_references_async=function(a,b,c){return f(),g("fbaModelServices.update_object_references",[a],1,b,c)},this.add_reactions=function(a,b,c){return g("fbaModelServices.add_reactions",[a],1,b,c)},this.add_reactions_async=function(a,b,c){return f(),g("fbaModelServices.add_reactions",[a],1,b,c)},this.remove_reactions=function(a,b,c){return g("fbaModelServices.remove_reactions",[a],1,b,c)},this.remove_reactions_async=function(a,b,c){return f(),g("fbaModelServices.remove_reactions",[a],1,b,c)},this.modify_reactions=function(a,b,c){return g("fbaModelServices.modify_reactions",[a],1,b,c)},this.modify_reactions_async=function(a,b,c){return f(),g("fbaModelServices.modify_reactions",[a],1,b,c)},this.add_features=function(a,b,c){return g("fbaModelServices.add_features",[a],1,b,c)},this.add_features_async=function(a,b,c){return f(),g("fbaModelServices.add_features",[a],1,b,c)},this.remove_features=function(a,b,c){return g("fbaModelServices.remove_features",[a],1,b,c)},this.remove_features_async=function(a,b,c){return f(),g("fbaModelServices.remove_features",[a],1,b,c)},this.modify_features=function(a,b,c){return g("fbaModelServices.modify_features",[a],1,b,c)},this.modify_features_async=function(a,b,c){return f(),g("fbaModelServices.modify_features",[a],1,b,c)},this.import_trainingset=function(a,b,c){return g("fbaModelServices.import_trainingset",[a],1,b,c)},this.import_trainingset_async=function(a,b,c){return f(),g("fbaModelServices.import_trainingset",[a],1,b,c)},this.preload_trainingset=function(a,b,c){return g("fbaModelServices.preload_trainingset",[a],1,b,c)},this.preload_trainingset_async=function(a,b,c){return f(),g("fbaModelServices.preload_trainingset",[a],1,b,c)},this.build_classifier=function(a,b,c){return g("fbaModelServices.build_classifier",[a],1,b,c)},this.build_classifier_async=function(a,b,c){return f(),g("fbaModelServices.build_classifier",[a],1,b,c)},this.classify_genomes=function(a,b,c){return g("fbaModelServices.classify_genomes",[a],1,b,c)},this.classify_genomes_async=function(a,b,c){return f(),g("fbaModelServices.classify_genomes",[a],1,b,c)},this.build_tissue_model=function(a,b,c){return g("fbaModelServices.build_tissue_model",[a],1,b,c)},this.build_tissue_model_async=function(a,b,c){return f(),g("fbaModelServices.build_tissue_model",[a],1,b,c)}}return c});