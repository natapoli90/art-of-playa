angular
  .module('art-of-playa')
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
      vm.newArt = {};
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  };

  vm.editArt = function (art) {
    $http({
      method: 'PUT',
      url: '/api/arts/'+art._id,
      data: art
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  };

  vm.deleteArt = function (art) {
    $http({
      method: 'DELETE',
      url: '/api/arts/'+ art._id
    }).then(function successCallback(json) {
      var index = vm.arts.indexOf(art);
      vm.arts.splice(index,1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  };

}
