/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */
 angular
   .module('art-of-playa', [])
   .controller('ArtsIndexController', ArtsIndexController);

   ArtsIndexController.$inject = ['$http'];

   function ArtsIndexController ($http) {
     var vm = this;
     vm.newArt = {};
     vm.arts = [
        {
          info: 'art',
          year: '2016'
        },
        {
          info: 'art',
          year: '2016'
        },
        {
          info: 'art',
          year: '2016'
        }
      ];

     $http({
       method: 'GET',
       url: '/api/arts'
     }).then(function successCallback(response) {
       vm.arts = response.data;
     }, function errorCallback(response) {
       console.log('There was an error getting the data', response);
     });


   }
