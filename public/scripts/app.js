/* CLIENT-SIDE JS
 */
angular
 .module('art-of-playa', ['ngRoute'])
 .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/arts',
      controllerAs: 'artsIndexCtrl',
      controller: 'ArtsIndexController'
    })
   .when('/:id', {
      templateUrl: 'templates/arts-show',
      controllerAs: 'artsShowCtrl',
      controller: 'ArtsShowController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
