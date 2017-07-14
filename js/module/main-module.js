(function() {
	'use strict';
	angular.module('module.main',['ui.router', 'pascalprecht.translate', 'ngMap'])
	.config(function ( $translateProvider) {
		
		$translateProvider.translations('pt', translations_pt_BR);
		$translateProvider.preferredLanguage('pt');
		$translateProvider.useSanitizeValueStrategy('escape');
	
		
	})
})();