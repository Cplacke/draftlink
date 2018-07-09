import beer_list from './beer_list.json';

  export function getRandomBeer () {
    const beerlist = beer_list;
    const index = Math.floor(Math.random() * beerlist.length);
    const beer = beerlist[index];
    return beer;
  }


