angular.module('cncApp').controller('detailCtrl', 
    ['$scope', 'cncData', '$state', '$stateParams',
    function($scope, cncData, $state, $stateParams){
        $scope.country = cncData.country;
        $scope.flag = $stateParams.countryCode.toLowerCase();
        $scope.map = $stateParams.countryCode.toUpperCase();
        cncData.getCapitalInfo($stateParams.countryCode.toUpperCase()).then(function(result){
            $scope.capital = result;
        });
        cncData.getNeighbors($stateParams.countryCode.toUpperCase()).then(function(result){
            $scope.numNeighbors = result.data.totalResultsCount;
            $scope.neighborList = result.data.geonames;
            for (i=0; i<$scope.neighborList.length; i++) {
                $scope.neighborList[i].i = i;
            };
        });
        $scope.gotoDetail = function(countryCode, index){
            cncData.country = $scope.neighborList[index];
            $state.go('countryDetail', {'countryCode':countryCode});
        }
  }])