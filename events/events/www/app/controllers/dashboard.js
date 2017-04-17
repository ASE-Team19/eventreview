define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('DashboardCtrl', [
    '$scope',
    '$state',
    'eventService',
    function ($scope, $state, eventService) {
      $scope.search = {};
      $scope.retry = true;

      $scope.goToList = function () {
        $state.go('results', { search: $scope.search.string });
      };

      $scope.goToAddEvent = function () {
        $state.go('event');
      };

      $scope.loadNext = function () {
        eventService.getNext().then(function (events) {
          if (events.length === 0 && $scope.retry) {
            $scope.retry = false;
            setTimeout(function () {
              $scope.loadNext();
            }, 5000);
          } else {
            $scope.events = events;
          }
        }).finally(function () {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
      };
    }
  ]);
});
