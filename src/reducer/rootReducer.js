import { DISPLAY_BEER_DETAIL } from '../actions/types';

// this is the initial state that the app will start with
const initialState = {

    title : 'Clouds Brewing',
    color : {
        pri : '#262626',
        sec : '#23201d',
        ter : '#e55e13'
    },
    brewery : {
        name : 'Clouds Brewing',
        state : 'NC',
    },
    sortBy : null, 
    draftList : [{
            name : '90 Minute IPA',            style : 'Imperial IPA',
            abv : 9.0,            ibu : 90,    price : 7.00 ,
            description : 'Esquire Magazine calls our 90 Minute IPA., "perhaps the best I.P.A. in America." An Imperial I.P.A. brewed to be savored from a snifter. A big beer with a great malt backbone that stands up to the extreme hopping rate.',
            sizes : [ '10oz', '16oz'],
        },{
            name : 'Namaste',            style : 'Belgian-Style Wheat',
            abv : 4.8,            ibu : 20,    price : 7.00 ,
            description : 'A witbier bursting with good karma. Made with dried organic orange slices, fresh-cut lemongrass and a bit of coriander, this Belgian-style white beer is a great thirst quencher.',
            sizes : [ '10oz', '16oz', '20oz'],
        },{
            name : 'Midas Touch',            style : 'Specialty Beer',
            abv : 9.0,            ibu : 12,    price : 10.00 ,
            description : 'This recipe is the actual oldest-known fermented beverage in the world! It is an ancient Turkish recipe using the original ingredients from the 2700 year old drinking vessels discovered in the tomb of King Midas. Somewhere between wine & mead; this smooth, sweet, yet dry ale will please the Chardonnay of beer drinker alike.',
            sizes : ['16oz'],
        }
    ],
    selectedBeerId : "<please select beer>",
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {

        case 'UPDATE_BEER_LIST':
            return state;

        case (DISPLAY_BEER_DETAIL):
            return Object.assign({}, state,
                {
                    selectedBeerId : action.payload.selectedId
                }
            );
            
        default:
            return state;

        // case 'ACTION_TYPE' :
        //     let ns = state.nav.navigationStack, index = state.nav.index;
        //     return Object.assign( {}, state,
        //         {
        //           nav : { // remove from the top of the stack, but never take the last element
        //             navigationStack : ns.length > 1 ? ns.slice(0, ns.length-1) : ns,
        //             index : index > 0 ? index - 1 : 0, // decrement, but never negitive
        //           }
        //         }
        //    );

       
    }
}

export default rootReducer;