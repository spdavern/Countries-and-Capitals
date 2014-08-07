angular.module('cncApp').controller('countriesDataCtrl', 
	['$scope', 'cncData', '$state', '$stateParams', '$q',
	function($scope, cncData, $state, $stateParams, $q){
		//Bind the countries data onto $scope when it becomes available:
	 	$q.when(cncData.countries).then(function(result){
	 		$scope.countries = result;
	 	});
        $scope.gotoDetail = function(countryCode, index){
        	//Populate the country info into the cncData service:
            cncData.country = $scope.countries[index];
            //Then go to the route:
            $state.go('countryDetail', 
                {'countryCode': countryCode});
        }
}])