(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
$scope.name="Jakub";
$scope.sayHello = function () {
    return 'Hello';
};
})

})();