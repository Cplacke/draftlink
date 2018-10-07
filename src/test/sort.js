sort = {
    /** Sort by ABV in descending order */
    sortABVDesc: (list) => {
        list.abv.sort(a, b => {return b-a;});
    },
    /** Sort by ABV in ascending order */
    sortABVAsc: (list) => {
        list.abv.sort();
    },
    /** Sort by IBU in descending order */
    sortIBUDesc: (list) => {
        list.ibu.sort(a, b => {return b-a;});
    },
    /** Sort by IBU in ascending order */
    sortIBUAsc: (list) => {
        list.ibu.sort();
    },
    /** Sort by Beer name alphabetically */
    sortBeerABC: (list) => {
        list.name.sort();
    },
    /** Sort by Brewery name alphabetically */
    sortBreweryABC: (list) => {
        list.brewery.sort();
    },
    /** Sort by Beer Style alphabetically */
    sortStyleABC: (list) => {
        list.style.sort();
    }
}
objs.sort(function(a,b) {return (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0);} ); 
export default sort;