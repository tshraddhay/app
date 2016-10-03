'use strict';

angular.module('blogApp.blog', ['ngRoute','ngSanitize','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: 'blog/blog.html',
    controller: 'BlogCtrl'
  });
}])

.controller('BlogCtrl', ['$http','$scope','$sce','$filter',function($http, $scope, $sce, $filter) {
  $scope.trustAsHtml = $sce.trustAsHtml;
  $scope.checkModel = 'english';
  $http.get('https://www.healthcare.gov/api/blog.json').success(function(data){
      $scope.allBlogs = data.blog;
      $scope.englishBlogs = $filter('filter')(data.blog,{lang:'en'}); 
      $scope.spanishBlogs = $filter('filter')(data.blog,{lang:'es'});
      $scope.blogs = $scope.englishBlogs;
      
      $scope.maxSize = 5;
      $scope.itemsPerPage = 5;
      $scope.bigTotalItems = $scope.blogs.length;
      $scope.bigCurrentPage = 1;
  });
   $scope.$watch(function(scope) { return scope.checkModel },
              function(newValue, oldValue) {
                //console.log("hi",newValue, oldValue);
                if(newValue == 'english'){
                  if(angular.isDefined($scope.blogs)){
                    $scope.blogs = $scope.englishBlogs;
                    $scope.bigTotalItems = $scope.blogs.length;
                  }
                }else if(newValue == 'spanish'){
                  if(angular.isDefined($scope.blogs)){
                    $scope.blogs = $scope.spanishBlogs;
                  $scope.bigTotalItems = $scope.blogs.length;
                  }
                }else{
                 
                  if(angular.isDefined($scope.blogs)){
                  $scope.blogs = $scope.allBlogs;
                  $scope.bigTotalItems = $scope.blogs.length;
                  }
                }

                              }
             ); 
  
      
}])

.filter('filteredBlogs',function(){
  return function(){
    var output = [];
  }
});