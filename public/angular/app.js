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

.state('forum', {
 url: '/forum',
 templateUrl: 'templates/forum.html',
 controller: 'ForumCtrl'
})

$urlRouterProvider.otherwise("/splash");
});
