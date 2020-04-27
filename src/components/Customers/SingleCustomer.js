import React, { useReducer, useEffect } from "react";
import {
  customerReducer,
  customersInitaialState
} from "../../reducers/CustomerReducer";
import { getCustomerById } from "../../actions/CustomerActions";
import { API_URI } from "../../utils/constant";
import { Loading } from "..";

const SingleCustomer = props => {
  const singleUser = props.match.params.id;
  const [state, dispatch] = useReducer(customerReducer, customersInitaialState);

  useEffect(() => {
    const fetchUser = async () => {
      return await getCustomerById(singleUser, dispatch);
    };
    fetchUser();
  }, []);

  const user = state.customer;

  const userDetails = (
    <div className="row">
      <div className="col-md-6">
        <ul className="list-arrow">
          <li>
            <strong>User Id :- </strong> {user.customerId}
          </li>
          <li>
            <strong>Name :- </strong> {user.name}
          </li>
          <li>
            <strong>Email :- </strong> {user.email}
          </li>
          <li>
            <strong>Mobile No :- </strong> {user.mobileNo}
          </li>
          <li>
            <strong>Registered Date :- </strong>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <p>
          <b>Profile Picture</b>
        </p>
        <img src={`${API_URI}/${user.displayPicture}`} className="mw-100 w-100 rounded" alt="" />
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-md-7 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Personal Information</h4>
            <p className="card-description">
              personal information of selected customer
            </p>
            {user ? userDetails : <Loading />}
          </div>
        </div>
      </div>
      <div className="col-md-5 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Address</h4>
            <p className="card-description">Address of the selected customer</p>
            <div className="row">
              <div className="col-md-12">
                  
                {user.address !== 0 ? (
                  <address>
                    <p className="font-weight-bold">Purple imc</p>
                    <p>695 lsom Ave,</p>
                    <p>Suite 00</p>
                    <p>San Francisco, CA 94107</p>
                  </address>
                ) : (
                  "Address is not set"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCustomer;
