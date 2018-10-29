export const sortBeers = {
    /** Sort by ABV in descending order */
    sortABVDesc: (list) => {
        console.log(list);
        list.sort((a, b) => b.abv - a.abv);
        console.log(list);
    },
    /** Sort by ABV in ascending order */
    sortABVAsc: (list) => {
        list.sort((a, b) => { 
            // a = a.toLowerCase();
            // b = b.toLowerCase();
            return a.abv > b.abv ? 1 : b.abv > a.abv ? -1 : 0;
        });
    },
    /** Sort by IBU in descending order */
    sortIBUDesc: (list) => {
        list.sort((a, b) => { 
            // a = a.toLowerCase();
            // b = b.toLowerCase();
            return a.ibu > b.ibu ? -1 : b.ibu > a.ibu ? 1 : 0;
        });
    },
    /** Sort by IBU in ascending order */
    sortIBUAsc: (list) => {
        list.sort((a, b) => { 
            // a = a.toLowerCase();
            // b = b.toLowerCase();
            return a.ibu > b.ibu ? 1 : b.ibu > a.ibu ? -1 : 0;
        });
    },
    /** Sort by Beer name alphabetically */
    sortBeerABC: (list) => {
        list.sort((a, b) => { 
            // a = a.toLowerCase();
            // b = b.toLowerCase();
            return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
        });
    },
    /** Sort by Brewery name alphabetically */
    sortBreweryABC: (list) => {
        list.brewery.sort((a, b) => { 
            // a = a.toLowerCase();
            // b = b.toLowerCase();
            return a.brewery > b.brewery ? 1 : b.brewery > a.brewery ? -1 : 0;
        });
    },
    /** Sort by Beer Style alphabetically */
    sortStyleABC: (list) => {
        list.style.sort((a, b) => { 
            // a = a.toLowerCase();
            // b = b.toLowerCase();
            return a.style > b.style ? 1 : b.style > a.style ? -1 : 0; 
        });
    }
}

