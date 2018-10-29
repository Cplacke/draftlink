import { DISPLAY_BEER_DETAIL } from '../actions/types';
// import * as sorts from '../test/sorts'
import {
    SORT_ABV_ASC,
    SORT_ABV_DESC,
    SORT_IBU_ASC,
    SORT_IBU_DESC,
    SORT_BEER_ABC,
    SORT_BREWERY_ABC,
    SORT_TYPE_ABC
} from '../actions/types';
import { sortBeers } from '../test/sort';

// store
// this is the initial state that the app will start with
const initialState = {

    title: 'Clouds Brewing',
    color: {
        pri: '#262626',
        sec: '#23201d',
        ter: '#e55e13'
    },
    brewery: {
        name: 'Clouds Brewing',
        state: 'NC',
    },
    sortBy: null,
    draftList: [{
        name: '90 Minute IPA', style: 'Imperial IPA',
        abv: 9.0, ibu: 90, price: 7.00,
        description: 'Esquire Magazine calls our 90 Minute IPA., "perhaps the best I.P.A. in America." An Imperial I.P.A. brewed to be savored from a snifter. A big beer with a great malt backbone that stands up to the extreme hopping rate.',
        sizes: ['10oz', '16oz', '64oz'],
    }, {
        name: 'Namaste', style: 'Belgian-Style Wheat',
        abv: 4.8, ibu: 20, price: 7.00,
        description: 'A witbier bursting with good karma. Made with dried organic orange slices, fresh-cut lemongrass and a bit of coriander, this Belgian-style white beer is a great thirst quencher.',
        sizes: ['10oz', '16oz', '20oz'],
    }, {
        name: 'Midas Touch', style: 'Specialty Beer',
        abv: 9.0, ibu: 12, price: 10.00,
        description: 'This recipe is the actual oldest-known fermented beverage in the world! It is an ancient Turkish recipe using the original ingredients from the 2700 year old drinking vessels discovered in the tomb of King Midas. Somewhere between wine & mead; this smooth, sweet, yet dry ale will please the Chardonnay of beer drinker alike.',
        sizes: ['16oz'],
    }
    ],
    selectedBeerId: "<please select beer>",
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {

        case 'UPDATE_BEER_LIST':
            return state;

        case (DISPLAY_BEER_DETAIL):
            return Object.assign({}, state,
                {
                    selectedBeerId: action.payload.selectedId
                }
            );

        case (SORT_ABV_ASC):
        // Return the beer list here from the actions payload and pass it into the appropriate sort function
            return Object.assign({}, state, 
                {
                    draftList: sortBeers.sortABVAsc(state.draftList)
                }
            );

        case (SORT_ABV_DESC):
        // Return the beer list here from the actions payload and pass it into the appropriate sort function
            return Object.assign({}, state, 
                {
                    draftList: sortBeers.sortABVDesc(state.draftList)
                }
            );

        case (SORT_IBU_ASC):
        // Return the beer list here from the actions payload and pass it into the appropriate sort function
            return Object.assign({}, state, 
                {
                    draftList: sortBeers.sortIBUAsc(state.draftList)
                }
            );

        case (SORT_IBU_DESC):
        // Return the beer list here from the actions payload and pass it into the appropriate sort function
            return Object.assign({}, state, 
                {
                    draftList: sortBeers.sortIBUDesc(state.draftList)
                }
            );

        case (SORT_BEER_ABC):
        // Return the beer list here from the actions payload and pass it into the appropriate sort function
            return Object.assign({}, state, 
                {
                    draftList: sortBeers.sortBeerABC(state.draftList)
                }
            );

        case (SORT_BREWERY_ABC):
        // Return the beer list here from the actions payload and pass it into the appropriate sort function
            return Object.assign({}, state, 
                {
                    draftList: sortBeers.sortBreweryABC(state.draftList)
                }
            );

        case (SORT_TYPE_ABC):
        // Return the beer list here from the actions payload and pass it into the appropriate sort function
            return Object.assign({}, state, 
                {
                    draftList: sortBeers.sortStyleABC(state.draftList)
                }
            );

        default:
            return state;
    }
}

export default rootReducer;
