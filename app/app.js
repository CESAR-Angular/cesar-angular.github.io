'use strict';

angular.module('app', ['ngRoute', 'ngAnimate'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/cart', {
                templateUrl: 'app/cart/cart.html'
            });
            $routeProvider.when('/', {
                templateUrl: 'app/products/homeProductsList.html',
                controller: 'productController as products'
            });
            // $locationProvider.html5Mode(true);
        });

