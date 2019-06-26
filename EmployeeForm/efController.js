// In AngularJS, you write the code that provides the model and the methods for the view in a controller
// take global app variable and call the controller method on it to enable an angular controller
angularFormsApp.controller('efController',
	function efController($scope, $window, $routeParams, DataService) {

		if ($routeParams.id)
			$scope.employee = DataService.getEmployee($routeParams.id);
		else
			$scope.employee = { id: 0 };

		//make copy of employee object
		$scope.editableEmployee = angular.copy($scope.employee);

		$scope.departments = [
			"Engineering",
			"Marketing",
			"IT",
			"Administration"
		];

		$scope.showFullName = function () {
			return true;
		}

		$scope.submitForm = function () {

			$scope.$broadcast('show-errors-event');

			if ($scope.editableEmployee.id == 0) {
				// insert new employee
				DataService.insertEmployee($scope.editableEmployee);
			}
			else {
				// update the employee
				DataService.updateEmployee($scope.editableEmployee);
			}

			$scope.employee = angular.copy($scope.editableEmployee);
			// goes back to previous page after clicking Submit
			$window.history.back();
		};

		$scope.cancelForm = function () {
			// goes back to previous page after clicking Cancel
			$window.history.back();
		};
		
	});