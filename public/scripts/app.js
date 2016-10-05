/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
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
