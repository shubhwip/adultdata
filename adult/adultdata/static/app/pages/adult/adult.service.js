/**
 * Register Service
 */
(function () {
  'use strict';

  angular.module('Adult.pages.adult')
      .service('AdultService',AdultService);

  /** @ngInject */
  function AdultService($http) {

	  var self = this;

	  self.getAdults = function() {
      $http.defaults.headers.post["Content-Type"] = "application/json";
		  return $http.get("http://localhost:8000/api/adults/");
	  }

    self.getMaleAdults = function() {
      $http.defaults.headers.post["Content-Type"] = "application/json";
      return $http.get("http://localhost:8000/api/malecount/");
    }

    self.getFemaleAdults = function() {
      $http.defaults.headers.post["Content-Type"] = "application/json";
      return $http.get("http://localhost:8000/api/femalecount/");
    }

    self.getWifeRelationAdults = function() {
      $http.defaults.headers.post["Content-Type"] = "application/json";
      return $http.get("http://localhost:8000/api/wifecount/");
    }

    self.getOwnChildRelationAdults = function() {
      $http.defaults.headers.post["Content-Type"] = "application/json";
      return $http.get("http://localhost:8000/api/ownchildcount/");
    }

    self.getHusbandRelationAdults = function() {
      $http.defaults.headers.post["Content-Type"] = "application/json";
      return $http.get("http://localhost:8000/api/husbandcount/");
    }

    self.getNotInFamilyRelationAdults = function() {
      $http.defaults.headers.post["Content-Type"] = "application/json";
      return $http.get("http://localhost:8000/api/notinfamilycount/");
    }

    self.getOtherRelativeRelationAdults = function() {
      $http.defaults.headers.post["Content-Type"] = "application/json";
      return $http.get("http://localhost:8000/api/otherelativecount/");
    }

    self.getUnmarriedRelationAdults = function() {
      $http.defaults.headers.post["Content-Type"] = "application/json";
      return $http.get("http://localhost:8000/api/unmarriedcount/");
    }

  }

})();
