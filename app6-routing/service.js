angular.module('app6').service('service', function($http) {
    this.getPeople = function() {
        return $http.get('http://swapi.co/api/people/')
    }
    this.getPerson = function(url) {
        return $http.get(url)
        .then(function(response){
            return response.data;
        })
    }
})