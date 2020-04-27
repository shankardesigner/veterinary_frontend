import { FETCH_PRODUCT_CATEGORY } from "../utils/constant"

export const productCategoryInitialState = {
    productCategory: [],
    loading: true,
    error: {}
}

export const productCategoryReducer = (state, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_CATEGORY:
            return {
                productCategory: action.payload,
                loading: false,
                error: []
            }
        default:
            return state
    }
}