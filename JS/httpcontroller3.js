var app = angular.module("myApp",[]);

app.provider('myProvider', function(){
	return{
		$get : function(){
			return{
				sayHi: function(){
					return("Hie Khyati Gorgeous Girl");
				}
			}
		}
	}
});

app.controller("httpcontroller", function($scope,myProvider){
	
	document.querySelector("input").addEventListener("click",function(){
		$scope.randomNumber = myProvider.sayHi();
	});	
});