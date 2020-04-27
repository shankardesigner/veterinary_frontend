import { FETCH_USER, FETCH_ERROR, ADD_USER, DELETE_USER } from "../utils/constant";

export const customersInitaialState = {
    loading: true,
    customer: [],
    error: {}
};

export const customerReducer = (state, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                loading: false,
                customer: action.payload,
                error: []
            };
        case ADD_USER:
            return {
                loading: false,
                customer: action.payload,
                error: []
            }
        case FETCH_ERROR:
            return {
                loading: false,
                customer: [],
                error: action.payload
            }
        case DELETE_USER:
            return {
                loading: false,
                customer: action.payload,
                error: []
            }
        default:
            return state
    }
}
