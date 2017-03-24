var app = angular.module("myApp",[]);

app.service('firstService', function(){
	var num = Math.random();
	this.generate = function(){
		return num;
	};
});

app.controller("httpcontroller", function($scope,firstService){
	
	document.querySelector("input").addEventListener("click",function(){
		$scope.randomNumber = firstService.generate();
	});	
});