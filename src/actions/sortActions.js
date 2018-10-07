import {
    SORT_ABV_ASC,
    SORT_ABV_DESC,
    SORT_IBU_ASC,
    SORT_IBU_DESC,
    SORT_BEER_ABC,
    SORT_BREWERY_ABC,
    SORT_TYPE_ABC
} from './types';

export const sortABVAsc = () => (
    {
        type: SORT_ABV_ASC,
        payload: {
            
        }
    }
)

export const sortABVDesc = () => (
    {
        type: SORT_ABV_DESC,
        payload: {

        }
    }
)

export const sortIBUAsc = () => (
    {
        type: SORT_IBU_ASC,
        payload: {

        }
    }
)

export const sortIBUDesc = () => (
    {
        type: SORT_IBU_DESC,
        payload: {

        }
    }
)

export const sortBeerABC = () => (
    {
        type: SORT_BEER_ABC,
        payload: {

        }
    }
)

export const sortBreweryABC = () => (
    {
        type: SORT_BREWERY_ABC,
        payload: {

        }
    }
)

export const sortTypeABC = () => (
    {
        type: SORT_TYPE_ABC,
        payload: {

        }
    }
)