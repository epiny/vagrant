'use strict';
var app = angular.module('epiny', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/orders/orders.html',
			controller: 'OrdersController'
		})
		// .when('/new', {
		// 	templateUrl: 'app/orders/new.html',
		// 	controller: 'NewOrderController'
		// })
		.otherwise({
			redirectTo: '/'
		});
});

app.controller('OrdersController', function ($scope, ordersFactory) {
	$scope.orders = null;

	function init () {
		ordersFactory.getOrders().success(function (orders) {
			$scope.orders = orders;
		});
	}

	init();
});

app.factory('ordersFactory', function ($http) {
	var factory = {};
	factory.getOrders = function () {
		return $http.get('orders.json');
	}
	return factory;
});

app.controller('Input', function($scope) {
	var timeout;

	$scope.keyBuffer = [];

	function onTimeout () {
		alert($scope.keyBuffer.join(' '));

		$scope.keyBuffer = [];
	}

	$scope.press = function(e) {
		clearTimeout(timeout);

		$scope.keyBuffer.push(String.fromCharCode(e.keyCode));

		timeout = setTimeout(onTimeout, 2000);
	};

})
