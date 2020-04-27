import React, { useEffect, useReducer } from "react";
import { deleteCustomer, fetchCustomer } from "../../actions/CustomerActions";
import { customerReducer, customersInitaialState } from "../../reducers/CustomerReducer";
import { API_URI } from "../../utils/constant";
import {Link} from 'react-router-dom';

import { Loading } from '../../components'


const Customers = () => {
  const [state, dispatch] = useReducer(customerReducer, customersInitaialState);
  let {loading} = state;

  useEffect(() => {
    const fetchData = async () => {
      return await fetchCustomer(dispatch);
    }
    fetchData();    
  }, []);

  const deleteCustomerById = async (id) => {
    await deleteCustomer(id,dispatch, state);
  }

  const localCustomers = state.customer.map(cst => {
    return (
      <tr key={cst.customerId}>
        <td>
          <img
            src={`${API_URI}/${cst.displayPicture}`}
            className="mr-2"
            alt=''
          />
          {cst.name}
        </td>
        <td>{cst.email}</td>
        <td>{cst.mobileNo}</td>
        {/* new Date().toLocaleDateString() */}
        <td>{new Date(cst.createdAt).toLocaleDateString()}</td>
        <td>
          <div className="template-demo">
            <Link type="button" className="btn btn-md btn-gradient-primary" to={`/customers/${cst.customerId}`}>
              View
            </Link>
            <button type="button" className="btn btn-md btn-gradient-danger" onClick={() => deleteCustomerById(cst.customerId)}>
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">All Customers</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Created</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>{localCustomers}</tbody>
                  </table>
                  {state.error ? state.error : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Customers;
