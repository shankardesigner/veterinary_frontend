import { FETCH_VENDOR } from "../utils/constant"

export const vendorInitialState = {
    vendor: [],
    error: {},
    loading: true
}

export const vendorReducer = (state, action) => {
    switch (action.type) {
        case FETCH_VENDOR:
            return {
                vendor: action.payload,
                error: {},
                loading: false
            }
        default:
            return state
    }
}