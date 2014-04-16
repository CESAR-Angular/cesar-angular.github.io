'use strict';
angular.module('app').controller('productController', productController);

function productController() {
    var vm = this;
    vm.getProducts = function () {
        return products;
    }
}

