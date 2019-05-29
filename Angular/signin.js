angular.module( "app")


.controller("signin",function($scope,$http,$location,$rootScope){
	 
	
  $scope.login=function(){
		console.log($scope.username)
		$http({
			method:'post',
			url:'/login',
			data:JSON.stringify({
				UserName:$scope.username,
				Password:$scope.password
			}),
		headers: {'Content-Type': "application/json; charset = utf-8"}
		}).then( (data)=>{
			if(data.data.length !== 0){
				console.log(data.data)
				$rootScope.data = data.data
				$location.path('/profile'); 
			}else{
				$scope.errorMessage = "username or passowrd is incorrect"
			}
			
    }).catch(function(error){
			console.log(error)
		})
}

})
