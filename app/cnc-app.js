var myApp = angular.module('cncApp', ['ui.router', 'ngAnimate']);
myApp.constant('VERSION', "0.2");
myApp.run( ['$rootScope', '$state', '$stateParams',
	function($rootScope, $state, $stateParams) {
		//This initialization function enables button hiding.
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
			templateUrl: "partials/home/home.html"
		})
		.state("countries", {
			url: "/countries",
			templateUrl: "partials/countries/countries.html"
		})
		.state("countryDetail", {
			url: "/countries/:countryCode",
			templateUrl: "partials/country/detail.html",
			controller: 'detailCtrl'
			})
}]);
myApp.controller('appCtrl', ['cncData',
	function(cncData){
		//This controller instantiates cncData which causes the 
		//initial GET of the countries data.
}]);
myApp.factory('cncData', ['VERSION', 'geonamesFactory',
	function(VERSION, geonamesFactory) {
		var Data = {};
	 	Data.version = VERSION;
	 	geonamesFactory.getCountriesInfo().then(function(result) {
	 		return Data.countries = result;
	 	});
	 	Data.getCityInfo = geonamesFactory.getCityInfo;
	 	Data.getNeighbors = geonamesFactory.getNeighbors;
		return Data		
}]);
