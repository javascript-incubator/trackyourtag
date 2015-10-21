'use strict';

/**
 * @ngdoc service
 * @name tytApp.myService
 * @description
 * # myService
 * Service in the tytApp.
 */
angular.module('tytApp')
  .service('myService', function ($firebaseAuth,Firebase) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var usersRef = new Firebase('https://trackyourtag.firebaseio.com/users');
    return $firebaseAuth(usersRef);
  });
