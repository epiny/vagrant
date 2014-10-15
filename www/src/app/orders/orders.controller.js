'use strict';

app.controller('OrdersController', ['$scope', 'ordersFactory', function ($scope, ordersFactory) {
	$scope.orders = [];

	ordersFactory.getOrders().success(function (orders) {
		$scope.orders = orders;
	});
}]);
