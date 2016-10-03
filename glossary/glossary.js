'use strict';

angular.module('blogApp.glossary', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/glossary', {
    templateUrl: 'glossary/glossary.html',
    controller: 'GlossaryCtrl'
  });
}])

.controller('GlossaryCtrl', ['$http','$scope','$sce','$filter',function($http, $scope, $sce, $filter) {
  $scope.trustAsHtml = $sce.trustAsHtml;
  $scope.checkModel = 'english';
 $http.get('https://www.healthcare.gov/api/glossary.json').success(function(data){
      console.log("data",data);
      $scope.allGlossaries = data.glossary;
      $scope.englishGlossary = $filter('filter')(data.glossary,{lang:'en'}); 
      $scope.spanishGlossary = $filter('filter')(data.glossary,{lang:'es'});
      $scope.glossaries = $scope.englishGlossary;
  });
   $scope.$watch(function(scope) { return scope.checkModel },
              function(newValue, oldValue) {
                //console.log("hi",newValue, oldValue);
                if(newValue == 'english'){
                  $scope.glossaries = $scope.englishGlossary;
                }else if(newValue == 'spanish'){
                  $scope.glossaries = $scope.spanishGlossary;
                }else{
                  $scope.glossaries = $scope.allGlossaries;
                }

                              }
             );   
}]);