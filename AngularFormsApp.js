// only global variable used in this app
// creates a module, which is our app
// passing it the dependency ngRoute
var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

// set up routing
angularFormsApp.config(function ($routeProvider) {
	$routeProvider
		.when("/home", {
			templateUrl: "app/Home.html",
			controller: "HomeController"
		})
		.when("/newEmployeeForm", {
			templateUrl: "app/EmployeeForm/efTemplate.html",
			controller: "efController"
		})
		.when("/updateEmployeeForm/:id", {
			templateUrl: "app/EmployeeForm/efTemplate.html",
			controller: "efController"
		})
		.otherwise({
			redirectTo: "/home"
		});
});

// creating controller called HomeController
// passing it a function that accepts scope and location service
// this will re-route us to the employee form when we click 'Add New Employee' in Home.html
angularFormsApp.controller("HomeController",
	function ($scope, $location, DataService) {

		$scope.showCreateEmployeeForm = function () {
			$location.path('/newEmployeeForm');
		};

		$scope.showUpdateEmployeeForm = function (id) {
			$location.path('/updateEmployeeForm/' + id);
		};
	});