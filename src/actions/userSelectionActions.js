import { DISPLAY_BEER_DETAIL } from './types';

export const displayBeerDetail = (selectedId) => (
    {
        type : DISPLAY_BEER_DETAIL,
        payload : {
            selectedId
        }
    }
)