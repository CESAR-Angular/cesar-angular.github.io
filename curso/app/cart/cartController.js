(function (app) {
    'use strict';

    function cartController(cartService) {
        var vm = this;
        vm.cartItems = cartService.cartItems;
        vm.addItem = cartService.addItem;
        vm.getNumberOfItems = cartService.getNumberOfItems;
        vm.getTotal = cartService.getTotal;
    }

    app.controller('cartController', cartController);
}(angular.module('app')));