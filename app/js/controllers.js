'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.togglePawel = false;
    $scope.toggleRoland = false;
    $scope.toggleHenk = false;
    $scope.toggleJeroen = false;

    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);



phonecatControllers.controller('PhoneListCtrl', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    },
    $scope.clear = function() {
        $scope.togglePawel = false;
        $scope.toggleRoland = false;
        $scope.toggleHenk = false;
        $scope.toggleJeroen = false;
    }
});

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
