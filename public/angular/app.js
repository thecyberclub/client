'use strict'

var cyberclub = angular.module('cyberclub',['ui.router','ngQuill','cyberclub.controller','cyberclub.services']);
cyberclub.config(function($stateProvider, $urlRouterProvider, ngQuillConfigProvider) {
  // ngQuillConfigProvider.set();

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

.state('development', {
 url: '/development',
 templateUrl: 'templates/development.html',
 controller: 'DevelopmentCtrl'
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
