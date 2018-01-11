'use strict'

angular.module('cyberclub.controller', ['cyberclub.services'])

.controller('SplashCtrl', function($scope, $state, $timeout){
  $timeout(function() {
   $state.go('main');
 }, 1500);
})

.controller('MainCtrl', function($scope, $state){
})

.controller('ForumCtrl', function($scope, $state){
})
