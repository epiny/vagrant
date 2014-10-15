'use strict'

app.factory('ordersFactory', function ($http) {
	var factory = {};
	factory.getOrders = function () {
		return $http.get('orders.json');
	}
	return factory;
});
