'use strict'

angular.module('cyberclub.controller', ['cyberclub.services'])

.controller('SplashCtrl', function($scope, $state, $timeout){
  $timeout(function() {
   $state.go('main');
 }, 1500);
})

.controller('MainCtrl', function($scope, $state){
  $scope.forum = function() {
    $state.go('forum');
  };
})

.controller('ForumCtrl', function($scope, $state){
})
