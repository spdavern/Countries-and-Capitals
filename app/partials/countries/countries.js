angular.module('cncApp').controller('countriesDataCtrl', 
	['$scope', 'cncData', '$state', '$stateParams',
	function($scope, cncData, $state, $stateParams){
		$scope.countries = cncData.countries;
        $scope.gotoDetail = function(countryCode, index){
            cncData.index = index;
            $state.go('countryDetail', 
                {'countryCode': countryCode});
        }
}])