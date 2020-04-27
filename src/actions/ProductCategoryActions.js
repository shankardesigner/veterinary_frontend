import axios from "axios"
import { API_URI, FETCH_PRODUCT_CATEGORY, FETCH_ERROR } from "../utils/constant"

export const getAllProductCategory = async(dispatch) => {
    try {
        return await axios.get(`${API_URI}/getAllProductCategory`).then(res => {
            dispatch({
                type: FETCH_PRODUCT_CATEGORY,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: FETCH_ERROR,
                payload: err.response.data
            })
        });
    } catch (error) {
        console.log(error);
    }
}