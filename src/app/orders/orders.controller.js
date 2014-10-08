'use strict';
var app = angular.module('epiny', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/orders/orders.html',
			controller: 'OrdersController'
		})
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

