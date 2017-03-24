var app = angular.module('myApp',['ngRoute']);
	
app.config(function($routeProvider){
	$routeProvider
	.when("/dashboard",{
			resolve:{
				check($location,$rootScope){
					if(!$rootScope.loggedIn){
						$location.path('/');
					}
				}
			},
			templateUrl: "dashboard.html"
	})
	.when("/",{
		templateUrl: "login.html"
	})
	.when("/anotherPage",{
		template: "Welcome to Another Page"
	})
	.when("/anotherSomePage",{
		templateUrl : "hello.html",
		template: "Sample Data"
	})
	.otherwise({
			redirectTo:'/'
	});
});


app.controller("loginControl", function($scope,$rootScope,$location){
	$scope.submit = function(){
		$rootScope.loggedIn = false;
		
		if($scope.username == 'admin' && $scope.password == 'admin')
		{
			$rootScope.loggedIn = true;
			//window.location.hash ='#/dashboard';
			$location.path("/dashboard");
		}
	}
});



var app1 = angular.module('myApp1',['ngRoute']);
// app.controller("myControl1", function(){});
app1.config(function($routeProvider){
	$routeProvider
	.when("/",{
			template: "Welcome to Home Page1"
	})
	.when("/anotherPage",{
		template: "Welcome to Another Page1"
	})
	.when("/anotherSomePage",{
		templateUrl : "hello.html",
		template: "Sample Data"
	})
	.otherwise({
			redirectTo:'/'
	});
});

angular.
		bootstrap(document.getElementById("second"), ['myApp1']);