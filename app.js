var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController',
        controllerAs: 'ctrl'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    // '555 Main St., New York, NY 11111'
    var ctrl = this;
    ctrl.person = [{
        name: 'John Doe',
        address: '555 Main St',
        city: 'New York',
        state: 'NY',
        zipCode:11111
    },
    {
        name: 'Jane Doe',
        address: '555 Main St',
        city: 'New York',
        state: 'NY',
        zipCode:11111
    },
    {
        name: 'Martin Doe',
        address: '555 Main St',
        city: 'New York',
        state: 'NY',
        zipCode:11111
    }];
    
    $scope.formatted = ((person) => person.address + "., " + person.city + ", " + person.state + " " + person.zipCode)
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formatted: "&"
       }
   }
});
