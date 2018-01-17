'use strict'

angular.module('cyberclub.controller', ['cyberclub.services'])

.controller('SplashCtrl', function($scope, $state, $timeout){
  $timeout(function() {
   $state.go('main');
 }, 1500);
})

.controller('MainCtrl', function($scope, $state){
  $scope.forum = function() {
    $state.go('development');
  };
})

.controller('DevelopmentCtrl', function($scope, $state){
  $scope.home = function() {
    $state.go('splash');
  };
})

.controller('ForumCtrl', function($scope, $state){
  $scope.home = function() {
    $state.go('home');
  };
  $scope.signin = function() {
    $state.go('signin');
  };
  $scope.signup = function() {
    $state.go('signup');
  };
})

.controller('SigninCtrl', function($scope, $state){

})

.controller('SignupCtrl', function($scope, $state){

})
