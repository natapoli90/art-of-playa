angular
  .module('art-of-playa')
  .controller('ArtsShowController', ArtsShowController);

ArtsShowController.$inject = ['$http', '$routeParams'];

function ArtsShowController ($http, $routeParams) {
  var vm = this;


  $http({
    method: 'GET',
    url: '/api/arts/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.art = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
