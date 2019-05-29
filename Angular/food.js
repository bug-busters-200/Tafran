angular.module('app').controller('food', function($scope, $http, $location, $rootScope) {
	$scope.meals;
	$scope.info;
	$scope.search = function() {
		$http({
			method: 'post',
			url: '/getMealsByPrice',
			data: JSON.stringify({
				price: $scope.input
			}),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(function(response) {
				console.log(response.data);
				$scope.meals = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	$scope.showInfo = function(restId) {
		$http({
			method: 'post',
			url: '/getRest',
			data: JSON.stringify({
				info: restId
			}),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(function(response) {
				console.log(response.data);
				$scope.info = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
		console.log(restId);
	};
});
