import axios from "axios";
import {
  FETCH_USER,
  FETCH_ERROR,
  API_URI,
  DELETE_USER,
  ADD_USER
} from "../utils/constant";

export const fetchCustomer = async dispatch => {
  try {
    return await axios
      .get(`${API_URI}/getAllCustomer`)
      .then(res => {
        dispatch({
          type: FETCH_USER,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_ERROR,
          payload: err.response.data
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCustomer = async (id, dispatch, state) => {
  try {
    return await axios
      .delete(`${API_URI}/deleteCustomer/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_USER,
          payload: state.customer.filter(item => item.customerId !== id)
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_ERROR,
          payload: err.response.data
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const addCustomer = async (customer, dispatch) => {
  try {
    return await axios
      .post(`${API_URI}/saveCustomer`, customer)
      .then(res => {
        dispatch({
          type: ADD_USER,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_ERROR,
          payload: err.response.data
        });
      });
  } catch (error) {}
};


export const getCustomerById = async(id, dispatch) => {
    try {
        return await axios.get(`${API_URI}/customer/${id}`).then(res => {
            dispatch({
                type: FETCH_USER,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: FETCH_ERROR,
                payload: err.response.data
            })
        })
    } catch (error) {
        
    }
}