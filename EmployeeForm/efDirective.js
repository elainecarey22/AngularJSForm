// call directive method and pass it the name of the directive 
angularFormsApp.directive('employeeForm',

	function () {
		return {
			// only use directive as an element
			restrict: 'E',
			// pass our html file as the template url 
			templateUrl: 'app/EmployeeForm/efTemplate.html'
		}
	});