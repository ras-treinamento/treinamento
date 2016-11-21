'use strict';

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', 
    function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/404');

    $stateProvider
      .state('app', {
        templateUrl: 'partials/app/app.html'
      })

      /**
       *    'Java'
       */
      .state('app.java', {
        abstract: true,
        url: '/java',
        template: '<div ui-view></div>'
      })
      .state('app.java.start', {
        url: '/',
        templateUrl: 'partials/app/java/start.html',
        controller: 'JavaController'
      })
      .state('app.java.introduction', {
        url: '/introduction',
        templateUrl: 'partials/app/java/introduction.html',
        controller: 'JavaController'
      });

  }])