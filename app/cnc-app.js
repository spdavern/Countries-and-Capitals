var myApp = angular.module('cncApp', ["ui.router", "ngAnimate"]);
myApp.constant('VERSION', "0.1");
myApp.run(function(VERSION, $rootScope){
	 	$rootScope.version = VERSION;
	 });
myApp.config(function($stateProvider, $urlRouterProvider) {
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
});
