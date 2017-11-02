angular.module('app')
.component('beerList', {
  bindings: {
    beers: '<',
    onBeerEntryClick: '<'
  },
  controller: function() {},
  templateUrl: '/templates/beerList.html'
});

