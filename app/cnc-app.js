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
			templateUrl: "partials/home/home.html"
		})
		.state("countries", {
			url: "/countries",
			templateUrl: "partials/countries/countries.html"
		})
		.state("countryDetail", {
			url: "/countries/:countryCode",
			templateUrl: "partials/country/detail.html"
		})
}]);
myApp.factory('cncData', ['VERSION',
	function(VERSION) {
		var Data = {};
	 	Data.version = VERSION;
		return Data		
	}]);
myApp.controller('countriesDataCtrl', ['$scope', '$http', 'cncData', '$state', '$stateParams',
	function($scope, $http, cncData, $state, $stateParams){
		var url = "http://api.geonames.org/countryInfo?username=sdavern"
		$http({
			method: 'GET',
			url: url,
			cache: true
		}).success(function(results) {
			$scope.countries = xml2json.parser(results).geonames.country;
			// if (results.meta.code == 200) {
			// 	if (results.geonames.length > 0) {
			// 		$scope.haveCountryData = true;
			// 		$scope.message = 'Have data for ' + results.geonames.length 
			// 			+ ' countries.';
			// 		$scope.countries = results.geonames
			// 	} else {
			// 		$scope.haveCountryData = true;
			// 		$scope.message = 'No countries returned.'
			// 	}
			// } else {
			// 	$scope.message = 'Fetch unsuccessful. Message returned: ' 
			// 		+ results.meta.error_message
			// }
		}).error(function() {
			$scope.message = "";
		})
}])