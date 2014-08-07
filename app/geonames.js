angular.module('cncApp').factory('geonamesFactory', 
    ['$http', '$q',
    function($http, $q){
        var username = "sdavern";
        var PrimaryUrl = "http://api.geonames.org/";
    return {
        getCountriesInfo: function(){
            var url = PrimaryUrl + "countryInfoJSON";
            var request = {
                callback: 'JSON_CALLBACK',
                username: username
            };
            return $http({
                    method: 'JSONP',
                    url: url,
                    params: request,
                    cache: true
                }).then(function(results) {
                    for (i=0; i<results.data.geonames.length; i++) {
                        results.data.geonames[i].i = i;
                    };
                    return results.data.geonames;
                });
        },
        getNeighbors: function(countryCode){
            var url = PrimaryUrl + "neighboursJSON";
            var request = {
                callback: 'JSON_CALLBACK',
                country: countryCode,
                username: username
            };
            return $http({
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
        getCapitalInfo: function(countryCode) {
            var d = $q.defer();
            // encodedName = encodeURIComponent(cityName).replace("%20","+");
            // console.log("'"+encodedName+"'");
            var url = PrimaryUrl + "searchJSON";
            var request = {
                callback: 'JSON_CALLBACK',
                q: "capital",
                formatted: true,
                country: countryCode,
                maxRows: 1,
                username: username
            };
            $http({
                method: 'JSONP',
                url: url,
                params: request,
                cache: true
            }).then(function(results) {
                d.resolve(results.data.geonames[0]);
            // }).error(function(){
            //     alert("An error occurred searching for '" + cityName + "'")
            });
            return d.promise;
        }
    };
}])