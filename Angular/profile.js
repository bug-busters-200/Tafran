angular.module( "app")
​
​
.controller("profile",function($scope,$http,$location,$rootScope){
 $scope.info = $rootScope.data
 console.log($scope.info)
  })