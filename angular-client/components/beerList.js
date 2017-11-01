angular.module('app')
.component('beerList', {
  bindings: {
    beers: '<',
    onClick: '<'
  },
  controller: function() {},
  templateUrl: '/templates/beerList.html'
});

