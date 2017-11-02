angular.module('app')
.component('beerListEntry', {
  bindings: {
    beer: '<',
    onBeerEntryClick: '<'
  },
  controller: function() {
    
  },
  templateUrl: '/templates/beerListEntry.html'
});
