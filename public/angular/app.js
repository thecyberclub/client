'use strict'

var cyberclub = angular.module('cyberclub',['ui.router','cyberclub.controller','cyberclub.services']);
cyberclub.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider

 .state('splash', {
  url: '/splash',
  templateUrl: 'templates/splash.html',
  controller: 'SplashCtrl'
 })

.state('main', {
 url: '/main',
 templateUrl: 'templates/main.html',
 controller: 'MainCtrl'
})

.state('signin', {
 url: '/signin',
 templateUrl: 'templates/signin.html',
 controller: 'SigninCtrl'
})

.state('signup', {
 url: '/signup',
 templateUrl: 'templates/signup.html',
 controller: 'SignupCtrl'
})

.state('forum', {
 url: '/forum',
 templateUrl: 'templates/forum.html',
 controller: 'ForumCtrl'
})

$urlRouterProvider.otherwise("/splash");
});
