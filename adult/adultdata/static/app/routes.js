'use strict';

angular.module('Adult')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  console.log("routes entry");
  $urlRouterProvider.otherwise('/');

}]);
