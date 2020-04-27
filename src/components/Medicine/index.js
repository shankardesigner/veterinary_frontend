import React, {useState, useReducer} from 'react'
import { medicineReducer, medicineState } from '../../reducers/MedicineReducer';
import axios from 'axios';
import { ADD_MEDICINE, FETCH_ERROR } from '../../utils/constant';

function Medicine() {
    const [medicine, setMedicine] = useState({});
    const [state, dispatch] = useReducer(medicineReducer, medicineState);

    function submitHandler(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/save-medicine', medicine).then(res => {
            dispatch({
                type: ADD_MEDICINE,
                payload: res.data
            })
        }).catch( err => {  
            
            dispatch({
                type: FETCH_ERROR,
                payload: err.response.data
            })
        })
        console.log(state);
        
    }

    function onchangeHandler(e) {
        setMedicine({
            medicineName: e.target.value,
            price: 450
        })
    }

    return (
        <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Default form</h4>
                  <p className="card-description">
                    Basic form layout
                  </p>
                  <form className="forms-sample" onSubmit={(e) => submitHandler(e)}>
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Username</label>
                      <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Username" onChange={(e) => onchangeHandler(e)} />
                    </div>
                    <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                  </form>
                </div>
              </div>
            </div>

          </div>
    )
}

export default Medicine
