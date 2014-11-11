'use strict';

(function () {
	angular
		.module('epiny', ['ngRoute', 'ngTable']);

		.config(function ($routeProvider) {
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
})();
