'use strict';
angular.module('app').directive('axCartSummary', axCartSummary);

function axCartSummary() {
    return {
        restrict: 'E',
        template:
            '<a class="btn btn-lg btn-primary" href="#/cart">' +
                '<i class="glyphicon glyphicon-shopping-cart"></i>' +
                'Items: {{ numberOfItems }} | Total: {{ total | currency }}' +
            '</a>',
        replace: true,
        scope: {
            numberOfItems: "@",
            total: "@"
        }
    };
}

