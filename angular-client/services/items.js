angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http.get('https://api.punkapi.com/v2/beers?per_page=80')
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});
