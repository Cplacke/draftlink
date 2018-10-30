export const sortBeers = {
    /** Sort by ABV in descending order */
    sortABVDesc: (list) => {
        console.log('ABV Desc');
        let sortedList = list.sort((a, b) => b.abv - a.abv);
        console.log(sortedList);
        return sortedList;
    },
    /** Sort by ABV in ascending order */
    sortABVAsc: (list) => {
        console.log('ABV Asc');
        let sortedList = list.sort((a, b) => a.abv - b.abv);
        console.log(sortedList);
        return sortedList;
    },
    /** Sort by IBU in descending order */
    sortIBUDesc: (list) => {
        console.log('IBU Desc');
        let sortedList = list.sort((a, b) => b.ibu - a.ibu);
        console.log(sortedList);
        return sortedList;
    },
    /** Sort by IBU in ascending order */
    sortIBUAsc: (list) => {
        console.log('IBU Asc');
        let sortedList = list.sort((a, b) => a.ibu - b.ibu);
        console.log(sortedList);
        return sortedList;
    },
    /** Sort by Beer name alphabetically */
    sortBeerABC: (list) => {
        console.log('Beer ABC');
        let sortedList = list.sort((a, b) => a.name.localeCompare(b.name));
        console.log(sortedList);
        return sortedList;
    },
    /** Sort by Brewery name alphabetically */
    // sortBreweryABC: (list) => {
    //     console.log(list);
    //     let sortedList = list.sort((a, b) => a.name - b.abv);
    //     console.log(sortedList);
    //     return sortedList;
    // },
    /** Sort by Beer Style alphabetically */
    sortStyleABC: (list) => {
        console.log('Style ABC');
        let sortedList = list.sort((a, b) => a.style.localeCompare(b.style));
        console.log(sortedList);
        return sortedList;
    }
}

