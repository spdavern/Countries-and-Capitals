angular.module('cncApp').controller('detailCtrl', 
    ['$scope', 'cncData', '$state', '$stateParams',
    function($scope, cncData, $state, $stateParams){
        $scope.country = cncData.countries[cncData.index];
        $scope.flag = $stateParams.countryCode.toLowerCase();
        $scope.map = $stateParams.countryCode.toUpperCase();
        // $scope.capital = cncData.getCityInfo($scope.country.capital);
        cncData.getCityInfo($scope.country.capital).then(function(result){
            return $scope.capital = result;
        });
        console.log($scope.capital);
  }])