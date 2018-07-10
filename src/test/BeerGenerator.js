import beer_list from './beer_list.json';

  export function getRandomBeer () {
    const styles = ['IPA', 'German Lager', 'Imperial Stout', 'Sour', 'Fruit Sour', 'Oktoberfest', 'Light Lager', 'Mexican Beer', 'Dobbel Bock', 'Saison', 'Belguim-Style Wheat Ale', 'American Pale Ale', 'Aged Milk Stout', 'Imperial IPA', 'Porter', 'English Bitter', 'Pilsner', 'Kolsch', 'Irish Stout', 'Heffewizein', 'American Lager', 'Speicialty'];
    const beerlist = beer_list;
    const index = Math.floor(Math.random() * beerlist.length);
    let b = beerlist[index];
    let beer = {
      name : b.Name,
      abv : b.Abv === '?' ? Math.floor(Math.random() * 8 ) + '%' : b.Abv,
      ibu : Math.floor(Math.random() * 65 ),
      srm : null,
      style : styles[Math.floor(Math.random() * styles.length)],
      description : 'Esquire Magazine calls our 90 Minute IPA., "perhaps the best I.P.A. in America." An Imperial I.P.A. brewed to be savored from a snifter. A big beer with a great malt backbone that stands up to the extreme hopping rate.',
      price : '$6.00',
      brewery : b.Brewery,
      tags : b.Tags,
    }

    return beer;
  }


