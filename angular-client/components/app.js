angular.module('app')
.controller('AppCtrl', function(itemsService, randomService) {
  
  itemsService.getAll((data) => {
    this.beers = data

    this.matchedBeers = data;
    this.currentBeer = this.beers[9];
  }),

  this.selectBeer = (beer) => {
    this.currentBeer = beer;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },

  this.input = '',

  this.getSearchResults = (query) => {
    query = query.toLowerCase();
    var matchingBeers = this.beers.filter((beer) => {
      return (
        beer.abv <= +query ||
        beer.ibu <= +query ||
        beer.name.toLowerCase().includes(query) ||
        beer.tagline.toLowerCase().includes(query) ||
        beer.description.toLowerCase().includes(query) ||
        beer.food_pairing.forEach((pairing) => {
          pairing.toLowerCase().includes(query);
        })
      )
    })
    this.currentBeer = matchingBeers[0];
    matchingBeers.shift();
    this.matchedBeers = matchingBeers;
  },

  this.getRandomBeer = () => {
    var randomIndex = Math.floor(Math.random() * this.beers.length);
    this.currentBeer = this.beers[randomIndex];
  }

})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
})
.service('randomService', function($http) {
  this.getAll = function(callback) {
    $http.get('https://api.punkapi.com/v2/beers/random')
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