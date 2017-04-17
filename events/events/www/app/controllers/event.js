define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('EventCtrl', [
    '$scope',
    '$state',
    'eventService',
    function ($scope, $state, eventService) {
      $scope.event = {};

      $scope.addEvent = function () {
        console.log($scope.event);

        eventService.add($scope.event);
      };
    }
  ]);
});
