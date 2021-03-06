/**
 * Adult Data Module configurations
 */
(function () {
  'use strict';

  var adultModule = angular.module('Adult.pages.adult', ["chart.js"]);
  adultModule.config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('adult', {
          url: '/',
          title: 'AdultData',
          templateUrl: 'app/pages/adult/adult.html',
          controller: 'AdultPageCtrl as AdultCtrl',
          authenticate: false,
        });
  }

  adultModule.$inject = ['$scope', '$filter'];

  adultModule.directive("customSort", function() {
  return {
      restrict: 'A',
      transclude: true,
      scope: {
        order: '=',
        sort: '='
      },
      template :
        ' <a ng-click="sort_by(order)" style="color: #555555;">'+
        '    <span ng-transclude></span>'+
        '    <i ng-class="selectedCls(order)"></i>'+
        '</a>',
      link: function(scope) {

      // change sorting order
      scope.sort_by = function(newSortingOrder) {
          var sort = scope.sort;

          if (sort.sortingOrder == newSortingOrder){
              sort.reverse = !sort.reverse;
          }

          sort.sortingOrder = newSortingOrder;
      };


      scope.selectedCls = function(column) {
          if(column == scope.sort.sortingOrder){
              return ('icon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
          }
          else{
              return'icon-sort'
          }
      };
    }// end link
  }
  });

})();
