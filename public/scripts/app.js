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


     $http({
       method: 'GET',
       url: '/api/arts'
     }).then(function successCallback(response) {
       vm.arts = response.data;
     }, function errorCallback(response) {
       console.log('There was an error getting the data', response);
     });

     vm.createArt = function () {
         $http({
           method: 'POST',
           url: '/api/arts',
           data: vm.newArt,
         }).then(function successCallback(response) {
           vm.arts.push(response.data);
         }, function errorCallback(response) {
           console.log('There was an error posting the data', response);
         });
       };


   }
