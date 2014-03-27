(function (app) {
    'use strict';

    function cartService() {

        var cartItems = [];

        return {
            addItem: addItem,
            getNumberOfItems: getNumberOfItems,
            getTotal: getTotal,
            cartItems: cartItems
        };

        function addItem(product) {
            var productIndex = getProductIndex(product);
            if (productIndex === -1) {
                pushItem(product);
            } else {
                updateItem(productIndex, 1);
            }
        }

        function getProductIndex(product) {
            return cartItems.map(function (item) {
                return item.product;
            }).indexOf(product);
        }

        function pushItem(product) {
            cartItems.push(new CartItem(product));
        }

        function updateItem(productIndex, value) {
            cartItems[productIndex].quantity += value;
        }

        function CartItem(product) {
            this.product = product;
            this.quantity = 1;
            this.getSubTotal = function() {
                return this.quantity * this.product.price;
            };
        }

        function getNumberOfItems() {
            var numberOfItems = 0;
            angular.forEach(cartItems, function(item) {
                numberOfItems += item.quantity;
            });
            return numberOfItems;
        }

        function getTotal() {
            var total = 0;
            angular.forEach(cartItems, function(item) {
                total += item.getSubTotal();
            });
            return total;
        }
    }

    app.service('cartService', cartService);
}(angular.module('app')));