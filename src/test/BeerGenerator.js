import beer_csv from './beer_list.json';

class BeerGenerator {

  constructor ( csvfile ) {
    this.beers = beer_csv;
  }

  getRandomBeer () {
    const index = Math.floor(Math.random() * this.beers.length);
    const beer = this.beers[index];
    console.log(beer);
    return beer;
  }
}

export default BeerGenerator;
