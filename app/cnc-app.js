var myApp = angular.module('cncApp', ['ui.router', 'ngAnimate']);
myApp.constant('VERSION', "0.2");
myApp.run( ['$rootScope', 'cncData', '$state', '$stateParams',
			function($rootScope, cncData, $state, $stateParams) {
				$rootScope.data = cncData;
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
}]);
myApp.config( ['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /
	$urlRouterProvider.otherwise("/");
	//
	//State definitions
	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "partials/home/home.html",
		})
		.state("countries", {
			url: "/countries",
			templateUrl: "partials/countries/countries.html",
		})
}]);
myApp.factory('cncData', ['VERSION',
	function(VERSION) {
		var Data = {};
	 	Data.version = VERSION;
		return Data		
	}]);