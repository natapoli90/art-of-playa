/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */
 angular
   .module('art-of-playa')
   .controller('ArtsIndexController', ArtsIndexController);

   function ArtsIndexController ($http) {
     var vm = this;
     vm.newArt = {};
   }

   
