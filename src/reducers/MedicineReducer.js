import { ADD_MEDICINE, FETCH_ERROR } from "../utils/constant"

export const medicineState = {
    medicine: {},
    loading: true,
    error: {},
}

export const medicineReducer = (state, action) => {
    switch (action.type) {
        case ADD_MEDICINE:
            return  {
                medicine: action.payload,
                loading: false,
                error: {}
            }
        case FETCH_ERROR:
            return {
                medicine: {},
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}