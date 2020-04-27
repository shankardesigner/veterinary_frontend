import axios from "axios"
import { API_URI, FETCH_PRODUCT, FETCH_ERROR, ADD_PRODUCT } from "../utils/constant"

export const getAllProducts = async(dispatch) => {
    try {
        return await axios.get(`${API_URI}/getAllProducts`).then(res => {
            dispatch({
                type: FETCH_PRODUCT,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: FETCH_ERROR,
                payload: err.response.data
            });
        })
    } catch (error) {
        console.log(error)
    }
}

export const addProduct = async(product, distpatch) => {
    try {
        axios.post(`${API_URI}/saveProduct`, product).then(res => {
            distpatch({
                type: ADD_PRODUCT,
                payload: res.data
            });
        }).catch(err => {
            distpatch({
                type: FETCH_ERROR,
                payload: err.response.data
            })
        })
    } catch (error) {
        console.log(error);
    }
}

export const getProductCategory = async (id) => {
    try {
         return await axios.get(`${API_URI}/getProductCat/${id}`).then(res => {
             return res.data.productCategory;
         });
    } catch (error) {
        console.log(error);
    }
}