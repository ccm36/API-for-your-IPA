angular.module('app')

.controller('SearchController', function() {
  
})

.component('search', {

  bindings: {
    onUpdate: '<',
  },
  controller: 'SearchController',
  templateUrl: '/templates/search.html'
});
