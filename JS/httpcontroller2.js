var app = angular.module("myApp",[]);

app.factory('firstService', function(){
	var randomObject = {};
	var num = Math.random();
	randomObject.generate = function(){
		return num;
	};
	return randomObject;
});

app.controller("httpcontroller", function($scope,firstService){
	
	document.querySelector("input").addEventListener("click",function(){
		$scope.randomNumber = firstService.generate();
	});	
});