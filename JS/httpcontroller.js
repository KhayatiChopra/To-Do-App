var app = angular.module("myApp",[]);
app.controller("httpcontroller", function($scope, $http){
	$http.get('http://localhost:83/database.json')
	.success(function(response){
		$scope.persons = response.records;
		$scope.output = $scope.persons.Name;
	});

	//ng-repeat loop multiple times
	var array = new Array(100);
	$scope.someArray = array;

	//$scope.$watch
	$scope.counter = -1;
	$scope.$watch("searchName",function(oldValue, newValue){
		$scope.counter++;
	});

	//$scope.$digest
	$scope.randomNumber = Math.random();
	document.querySelector("input").addEventListener("click",function(){
		console.log("I am Clicked");
		$scope.randomNumber = Math.random();
		$scope.$digest();
		console.log("I am Clicked");
	});
	

})