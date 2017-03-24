var app = angular.module("myApp",[]);


app.controller("httpcontroller", function($scope){
	$scope.msg = 'msg1';
	document.querySelector("input").addEventListener("click",function(){
		$scope.msg = $scope.msg == 'msg1' ? 'msg2' :'msg1' ;
	});	
});