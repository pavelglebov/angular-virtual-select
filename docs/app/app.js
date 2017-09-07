'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'angular-virtual-select'
])
.controller('MainController', ['$scope', function($scope) {
    $scope.test = "TEST";
    // $scope.selectedItem = null;
    // $scope.items = [{
    //     id: 1,
    //     name: "Igar"
    // },{
    //     id: 2,
    //     name: "Vitya"
    // }];
}]);
