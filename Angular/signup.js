angular.module( "app")


.controller("signup",function($scope,$http,$location,$rootScope){
  $scope.fire= function (){
    console.log($scope.email);
  }
})
