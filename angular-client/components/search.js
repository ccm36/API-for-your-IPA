angular.module('app')

.controller('SearchController', function() {

})

.component('search', {

  bindings: {
    getRandomBeer: '<',
    getSearchResults: '<',
    beers: '<',
    input: '<'
  },
  controller: 'SearchController',
  templateUrl: '/templates/search.html'
});
