'use strict';

(function () {
	angular.module('epiny')
		.controller('OrdersController', ['$scope', 'ordersFactory', function ($scope, ordersFactory) {
			$scope.orders = [];

			ordersFactory.getOrders().success(function (orders) {
				$scope.orders = orders;
			});
		}]);
})();
