angular.module('two-way-binding')
.directive('nameDirective', function() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    templateUrl: './nameDirective.html'
  }
})