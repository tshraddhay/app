'use strict';

// Declare app level module which depends on views, and components
angular.module('blogApp', [
  'ngRoute',
  'ngSanitize',
  'ui.bootstrap',
  'blogApp.blog',
  'blogApp.glossary',
  'blogApp.contact'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/blog'});
}]);
