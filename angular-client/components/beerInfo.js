angular.module('app')

.controller('BeerInfoController', function() {
  // access each beer from the url
})
.component('beerInfo', {

  bindings: {
    beer: '<'
  },
  controller: 'BeerInfoController',
  templateUrl: '/templates/beerInfo.html'
  });