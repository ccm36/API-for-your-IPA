angular.module('app')

.controller('SearchController', function() {
  this.handleClick = () => {
    this.service.search(this.input, (data) => {
      console.log(data);
      this.result(data);
    });
  };
})
.component('search', {

  bindings: {
    service: '<',
    result: '<'
  },
  controller: 'SearchController',
  templateUrl: '/templates/search.html'
  });