import React, { useReducer, useState } from "react";
import { addCustomer } from "../../actions/CustomerActions";
import {
  customerReducer,
  customersInitaialState
} from "../../reducers/CustomerReducer";
import { imageUpload } from "../../utils/ImageUpload";
import { Loading } from "..";

function Registration() {
  const [state, dispatch] = useReducer(customerReducer, customersInitaialState);

  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(false);
  const [uploadImage, setUploadImage] = useState(null);

  const uploadFile = async file => {
    const fetchUploadImage = await imageUpload(file, "customer", dispatch);

    setCustomer({
      ...customer,
      displayPicture: await fetchUploadImage.data
    });
  };

  function onchangeHandler(e) {
    setCustomer({
      ...customer,
      [e.target.name]:
        e.target.name === "displayPicture"
          ? uploadFile(e.target.files[0])
          : e.target.value
    });
  }

  const uploadCustomer = async () => {
    await addCustomer(customer, dispatch);
  };

  const submitHandler = async e => {
    e.preventDefault();
    setLoading(true);

    await Promise.resolve(customer.displayPicture).then(res => {
      if (res !== undefined) {
        setUploadImage(false);
        uploadCustomer();
        setLoading(false);
      } else {
        setLoading(false);
        setUploadImage(true);
      }
    });
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Add Customer</h4>
              <form className="form-sample" onSubmit={e => submitHandler(e)}>
                <p className="card-description">Personal info</p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">
                        Full Name
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          onChange={e => onchangeHandler(e)}
                        />
                        {state.error.name ? (
                          <span className="text-danger d-inline-block mt-2">
                            {state.error.name}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">Email</label>
                      <div className="col-sm-8">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={e => onchangeHandler(e)}
                        />
                        {state.error.email ? (
                          <span className="text-danger d-inline-block mt-2">
                            {state.error.email}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">
                        Mobile No
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          name="mobileNo"
                          onChange={e => onchangeHandler(e)}
                        />
                        {state.error.mobileNo ? (
                          <span className="text-danger d-inline-block mt-2">
                            {state.error.mobileNo}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">
                        Display Picture
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="file"
                          className="form-control"
                          placeholder="upload picture"
                          name="displayPicture"
                          onChange={e => onchangeHandler(e)}
                        />
                        {state.error.displayPicture || uploadImage ? (
                          <span className="text-danger d-inline-block mt-2">
                            {state.error.displayPicture}
                          </span>
                        ) : null}
                        {uploadImage != null && uploadImage === true ? (
                          <span className="text-danger d-inline-block mt-2">
                            image uploading in process
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-gradient-primary mr-2">
                  Save
                </button>

                {/* <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Gender</label>
                    <div className="col-sm-8">
                      <select className="form-control">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label">
                      Date of Birth
                    </label>
                    <div className="col-sm-8">
                      <inp onChange={(e) => onchangeHandler(e)}ut
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Registration;
