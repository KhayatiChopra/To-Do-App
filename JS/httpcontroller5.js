var app = angular.module("myApp",[]);


app.controller("httpcontroller", function($scope){
	$scope.tasks = [];
	
	var taskData = localStorage['taskList'];
	if(taskData != undefined){
		$scope.tasks = JSON.parse(taskData);
	}

	$scope.searchEnter = function(){
		if(event.which == '13' && $scope.task != ''){
			$scope.addTask();
		};
	}
	$scope.addTask = function(){
		$scope.tasks.push({'taskName':$scope.task,'taskStatus':false});
		console.log($scope.tasks);
		$scope.task = '';
		localStorage['taskList'] = JSON.stringify($scope.tasks);
		console.log(localStorage['taskList']);
	}

	$scope.contentEdit = function(){
		console.log(event.target.contentEditable);
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	}
	$scope.contentNonEdit = function(){
		if(event.which == '13')
		event.target.contentEditable = "false";
	}	
});