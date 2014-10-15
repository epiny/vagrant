'use strict';

app.controller('Input', ['$scope', function($scope) {
	$scope.keyBuffer = [];

	$('body').on('keypress', function(e) {
		if (e.keyCode == 13) {
			alert($scope.keyBuffer.join(' '));

			$scope.keyBuffer = [];
		} else {
			$scope.keyBuffer.push(String.fromCharCode(e.keyCode));
		}
	})
}]);
