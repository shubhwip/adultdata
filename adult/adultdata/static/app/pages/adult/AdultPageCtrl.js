/**
 * Adult Data Controller
 */
(function () {
  'use strict';

  angular.module('Adult.pages.adult')
    .controller('AdultPageCtrl', AdultPageCtrl);

  /** @ngInject */
  function AdultPageCtrl($scope, $filter, $http, $q, AdultService) {

    $scope.drawPieCharts = function() {
          $q.all ([
            AdultService.getMaleAdults(),
            AdultService.getFemaleAdults(),
            AdultService.getWifeRelationAdults(),
            AdultService.getOwnChildRelationAdults(),
            AdultService.getHusbandRelationAdults(),
            AdultService.getNotInFamilyRelationAdults(),
            AdultService.getOtherRelativeRelationAdults(),
            AdultService.getUnmarriedRelationAdults()

          ]).then(function(data){
            $scope.sexLabels = ["Male", "Female"];
            $scope.maleCount = data[0].data.length;
            $scope.femaleCount = data[1].data.length;
            $scope.sexData = [$scope.maleCount, $scope.femaleCount];

            $scope.relationLabels = ["Wife", "Own-child", "Husband", "Not-in-family", "Other-relative", "Unmarried"];
            $scope.wife = data[2].data.length;
            $scope.ownchild = data[3].data.length;
            $scope.husband = data[4].data.length;
            $scope.notinfamily = data[5].data.length;
            $scope.otherelative = data[6].data.length;
            $scope.unmarried = data[7].data.length;

            $scope.relationData = [$scope.wife, $scope.ownchild0, $scope.Husband, $scope.notinfamily , $scope.otherelative, $scope.unmarried];

          });

    }

    $scope.drawPieCharts();

    $scope.sort = {
                sortingOrder : 'id',
                reverse : false
            };

    $scope.gap = 5;

    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 10;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    $scope.displayAdultData = function() {
			AdultService.getAdults().then(function(response) {
				  console.log(response.data);
	  			$scope.items = response.data;

          var searchMatch = function (haystack, needle) {
              if (!needle) {
                  return true;
              }
              return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
          };

          // init the filtered items
          $scope.search = function () {
              $scope.filteredItems = $filter('filter')($scope.items, function (item) {
                  for(var attr in item) {
                      if (searchMatch(item[attr], $scope.query))
                          return true;
                  }
                  return false;
              });
              // take care of the sorting order
              if ($scope.sort.sortingOrder !== '') {
                  $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
              }
              $scope.currentPage = 0;
              // now group by pages
              $scope.groupToPages();
          };


          // calculate page in place
          $scope.groupToPages = function () {
              $scope.pagedItems = [];

              for (var i = 0; i < $scope.filteredItems.length; i++) {
                  if (i % $scope.itemsPerPage === 0) {
                      $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
                  } else {
                      $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
                  }
              }
          };

          $scope.range = function (size,start, end) {
              var ret = [];
              console.log(size,start, end);

              if (size < end) {
                  end = size;
                  start = size-$scope.gap;
              }
              for (var i = start; i < end; i++) {
                  ret.push(i);
              }
               console.log(ret);
              return ret;
          };

          $scope.prevPage = function () {
              if ($scope.currentPage > 0) {
                  $scope.currentPage--;
              }
          };

          $scope.nextPage = function () {
              if ($scope.currentPage < $scope.pagedItems.length - 1) {
                  $scope.currentPage++;
              }
          };

          $scope.setPage = function () {
              $scope.currentPage = this.n;
          };

          // functions have been describe process the data for display
          $scope.search();



		  },function(errResponse){
		  		  $scope.items = [];
				    console.log("Error in getting adult data");
		  });
	   }

	  $scope.displayAdultData();
  }

})();
