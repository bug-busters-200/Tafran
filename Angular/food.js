angular.module('app').controller('food', function($scope, $http, $location, $rootScope) {
	$scope.meals;
	$scope.resturents;
	$scope.showDesc;
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
				$scope.meals = response.data;
				console.log('data from frontEnd' , $scope.meals);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	$scope.showInfo = function(restId) {
	// 	console.log(restId)
	
	// }
		$http({
			method: 'post',
			url: '/getRest',
			data: JSON.stringify({
				info:  restId 
			}),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(function(data) {
				$scope.resturents = data.data
				console.log($scope.resturents);
				$scope.showDesc = true
				$scope.showMeals = false
			})
			.catch(function(error) {
				console.log(error);
			});

	};
});
