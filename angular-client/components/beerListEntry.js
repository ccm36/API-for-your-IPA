angular.module('app')
.component('beerListEntry', {
  bindings: {
    beer: '<',
    onClick: '<'
  },
  controller: function() {},
  templateUrl: '/templates/beerListEntry.html'
});
