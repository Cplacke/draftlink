import {
    SORT_ABV_ASC,
    SORT_ABV_DESC,
    SORT_IBU_ASC,
    SORT_IBU_DESC,
    SORT_BEER_ABC,
    SORT_BREWERY_ABC,
    SORT_STYLE_ABC
} from './types';

export const sortABVAsc = () => (
    {
        type: SORT_ABV_ASC
    }
)

export const sortABVDesc = () => (
    {
        type: SORT_ABV_DESC
    }
)

export const sortIBUAsc = () => (
    {
        type: SORT_IBU_ASC
    }
)

export const sortIBUDesc = () => (
    {
        type: SORT_IBU_DESC
    }
)

export const sortBeerABC = () => (
    {
        type: SORT_BEER_ABC
    }
)

export const sortBreweryABC = () => (
    {
        type: SORT_BREWERY_ABC
    }
)

export const sortStyleABC = () => (
    {
        type: SORT_STYLE_ABC
    }
)