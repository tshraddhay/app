'use strict';

angular.module('blogApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$http','$scope',function($http, $scope) {
 $scope.contactReasons = [
      {reason:'Healthcare Marketplace'},
      {reason:'Technical support'},
      {reason:'Website feedback'}
      ];
 $scope.conReason = $scope.contactReasons[2]     
}]).directive('submit', function(){
     return {
       restrict: 'A',
       scope: true,
      link: function(scope, element, attr){
         
         
         var clicked = 0;
          var clickingCallback = function() {
            var invalidForm = scope.$parent.sentMessage.$invalid;
              console.log("asa",scope.$parent.sentMessage.$invalid)
              if(invalidForm){
                alert('This Form is invalid.')
              }else{
                alert('This Form is valid.')
              }
              
            };
          element.bind('click', clickingCallback);
    }
     }
   });