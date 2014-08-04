angular.module('cncApp').factory('geonamesFactory', 
    ['$http', '$q',
    function($http, $q){
        var username = "sdavern";
        var PrimaryUrl = "http://api.geonames.org/";
    return {
        getCountriesInfo: function(){
            var d = $q.defer();
            var url = PrimaryUrl + "countryInfoJSON";
            var request = {
                callback: 'JSON_CALLBACK',
                username: username
            };
            $http({
                method: 'JSONP',
                url: url,
                params: request,
                cache: true
            }).then(function(results) {
                for (i=0; i<results.data.geonames.length; i++) {
                    results.data.geonames[i].i = i;
                };
                d.resolve(results.data.geonames);
            });
            return d.promise;
        },
        getNeighbors: function(geonamesId){
            var url = PrimaryUrl + "neighborsJSON";
            var request = {
                callback: 'JSON_CALLBACK',
                formatted: true,
                geonamesId: geonamesId,
                username: username
            };
            $http({
                method: 'JSONP',
                url: url,
                params: request,
                cache: true
            }).success(function(results) {
                return results;
            }).error(function() {
                return {
                    totalResultsCount: 0
                }
            })
        },
        getCityInfo: function(cityName) {
            var d = $q.defer();
            encodedName = encodeURIComponent(cityName).replace("%20","+");
            // console.log("'"+encodedName+"'");
            var url = PrimaryUrl + "searchJSON";
            var request = {
                callback: 'JSON_CALLBACK',
                q: encodedName,
                username: username
            };
            $http({
                method: 'JSONP',
                url: url,
                params: request,
                cache: true
            }).then(function(results) {
                // console.log(results);
                d.resolve(results.data.geonames);
            // }).error(function(){
            //     alert("An error occurred searching for '" + cityName + "'")
            });
            return d.promise;
        }
    };
}])