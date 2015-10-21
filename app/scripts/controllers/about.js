'use strict';

/**
 * @ngdoc function
 * @name tytApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tytApp
 */
angular.module('tytApp')
  .controller('AboutCtrl', function ($scope,myService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  var coords = new google.maps.LatLng(30.317945, 78.020558);
   $scope.locate = function(){
     $scope.map.setCenter(coords);
   };
   $scope.logout = function(){
     myService.usersRef.unauth();
   };
  });
