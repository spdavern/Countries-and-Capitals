var myApp = angular.module('cncApp', ["ui.router", "ngAnimate"]);
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
})