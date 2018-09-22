import { DISPLAY_BEER_DETAIL } from './types';

export const displayBeerDetail = (beer) => (
    {
        type : DISPLAY_BEER_DETAIL,
        payload : {
            beer
        }
    }
)