angular.module('app').controller('signup', function($scope, $http, $location, $rootScope) {
	$scope.fire = function() {
		$http({
			method: 'post',
			url: '/registered',
			data: JSON.stringify({
				email: $scope.email,
				password: $scope.password,
				location: $scope.location,
				phoneNumber: $scope.phoneNumber,
				resturantName: $scope.resturantName,
				description: $scope.description
			}),
			headers: { 'Content-Type': 'application/json' }
		})
			.then((data) => {
				console.log(data);
				$location.path('/profile');
			})
			.catch((err) => {
				console.log(err);
			});
		// console.log($scope.email);
	}; // end fire function
});
