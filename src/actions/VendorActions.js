import Axios from "axios";
import { API_URI, FETCH_VENDOR, FETCH_ERROR } from "../utils/constant";

export const fetchAllVendor = async (dispatch) => {
    try {
        return await Axios.get(`${API_URI}/getAllVendors`).then(res => {
            dispatch({
                type: FETCH_VENDOR,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: FETCH_ERROR,
                payload: err.response.data
            })
        })
    } catch (error) {
        console.log(error);
    }
};