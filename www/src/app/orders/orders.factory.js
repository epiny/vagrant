'use strict'

(function () {
	angular.module('epiny')
		.factory('ordersFactory', function ($http) {
			var factory = {};
			factory.getOrders = function () {
				return $http.get('orders.json');
			}
			return factory;
		});
})();
