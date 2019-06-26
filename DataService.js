// call factory method on the global app variable
// in AngularJS, the factory method creates a service
// this service is responsible for movement of data to and from the server
angularFormsApp.factory('DataService',
	function () {
		var getEmployee = function (id) {
			if (id == 123) {
				return {
					id: 123,
					fullName: "Elaine",
					notes: "The ideal employee!",
					department: "IT",
					dateHired: "7/7/2019",
					perkCar: true,
					perkStock: false,
					perkSixWeeks: true,
					payrollType: "none"
				};
			}
			return undefined;
		};

			var insertEmployee = function (newEmployee) {
				return true;
			};

			var updateEmployee = function (employee) {
				return true;
			};

			return {
				insertEmployee: insertEmployee,
				updateEmployee: updateEmployee,
				getEmployee: getEmployee
			};
	});