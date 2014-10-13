'use strict';

var app = angular.module('epiny', ['ngRoute']);

app.controller('Input', function($scope) {
	var timeout;

	$scope.keyBuffer = [];

	$scope.down = function(e) {
		$scope.keyBuffer.push(String.fromCharCode(e.keyCode);

		alert(e.keyCode + ' ' + String.fromCharCode(e.keyCode));
	};
})
