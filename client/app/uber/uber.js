'use strict';

angular.module('cityVisitApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('uber', {
        url: '/uber',
        templateUrl: 'app/uber/uber.html',
        controller: 'UberCtrl'
      });
  });