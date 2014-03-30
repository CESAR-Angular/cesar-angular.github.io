(function (app) {
    'use strict';

    function homeController() {
        var vm = this;
        vm.getProducts = function () {
            return products;
        }
    }
    app.controller('homeController', homeController);
}(angular.module('app')));