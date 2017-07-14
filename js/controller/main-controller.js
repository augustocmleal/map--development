(function() {
	'use strict';
	angular.module('module.main')
	.controller('MainController',['$scope','$window', '$http', MainController]);
	function MainController($scope, $window, $http){
		
		$scope.origens   = [{id: "1", nome: "Quality Life", endereco: "Avenida Roberto Silveira, 488 - Icaraí, Niterói - RJ"}];
		$scope.origem    = $scope.origens[0].endereco;
		$scope.destino   = $scope.origens[0].endereco;
		$scope.ponto	 = "";
		$scope.waypoints = [];


		$scope.adicionarDestino = function(){
			$scope.waypoints.push({location: $scope.ponto, stopover: true});
			$scope.ponto = "";
		}

		$scope.direcionarMenu = function(rota){
			if(rota == 'xxx'){
				rota == 'xxx.html';
			}
			$window.location.href = rota;
		}
	}
})();