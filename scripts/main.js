var app = angular.module('MyAwesomeApp', [])

app.controller('ItemCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$scope.selectedItem = "";

	$scope.searchFilter = "";

	$scope.removeSpaces = function(str){
		return str.replace(/\s+/g, '');
	}

	$scope.items = [];

	$scope.addItem = function(item){
		$scope.items.push(item);		
	}

	$('body').remove();

	$scope.fetchAjax = function(){
		$http.get('http://localhost:3000/items').then(function(response){
			$scope.items = $scope.items.concat(response.data);
		})
	}

	$scope.fetchAjax();


	$scope.removeItem = function(index){
		$scope.items.splice(index, 1);
	}

}])
