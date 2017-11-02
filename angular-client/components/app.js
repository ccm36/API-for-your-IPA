angular.module('app')
.controller('AppCtrl', function(itemsService) {
  
  itemsService.getAll((data) => {
    this.beers = data;
    this.currentBeer = this.beers[0];
  }),

  this.selectBeer = (beer) => {
    this.currentBeer = beer;
  },

  this.updateBeers = (beers) => {
    this.beers = beers;
    this.currentBeer = this.beers[0];
  }
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});