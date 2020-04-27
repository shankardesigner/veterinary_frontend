import React, { useState, useReducer, useEffect } from "react";
import {
  ProductReducer,
  productInitialState
} from "../../reducers/ProductReducer";
import { imageUpload } from "../../utils/ImageUpload";
import { addProduct } from "../../actions/ProductAction";
import { getAllProductCategory } from "../../actions/ProductCategoryActions";
import { productCategoryReducer, productCategoryInitialState } from "../../reducers/ProductCategoryReducer";
import { vendorReducer, vendorInitialState } from "../../reducers/VendorReducer";
import { fetchAllVendor } from "../../actions/VendorActions";

function AddProduct() {
  const [state, dispatch] = useReducer(ProductReducer, productInitialState);
  const [stateProductCat, dispatchProductCat] = useReducer(productCategoryReducer, productCategoryInitialState);
  const [stateVendor, dispatchVendor] = useReducer(vendorReducer, vendorInitialState);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getAllProductCategories = async () => {
      return await getAllProductCategory(dispatchProductCat);
    };
    const gellAllVendors = async () => {
      return await fetchAllVendor(dispatchVendor);
    }
    getAllProductCategories();
    gellAllVendors();
  }, []);

  //how much time wil take to execute the function setTimeout() even we pass 0s time

  const allProductCat = stateProductCat.productCategory.map(item => (
   <option key={item.pcatId} value={item.pcatId}>{item.productCategory}</option> 
  ));

  const allVendor = stateVendor.vendor.map(item => (
    <option key={item.vendorId} value={item.vendorId}>{item.vendorName}</option> 
   ));

  const onchangeHandler = e => {
    e.preventDefault();

    setProduct({
      ...product,
      [e.target.name]: e.target.name === 'imagePath' ? uploadImage(e.target.files[0]) : e.target.value
    });
  };

  const uploadImage = async file => {
    const fetchUploadImage = await imageUpload(file, "product", dispatch);

    setProduct({
      ...product,
      imagePath: await fetchUploadImage.data
    });
  };

  const uploadProduct = async () => {
    await addProduct(product, dispatch);
  };

  const submitHandler = async e => {
    e.preventDefault();  
    
    // await Promise.resolve(product.imagePath).then(res => {      
    //   if(res !== undefined) {
    //     uploadProduct();
    //   }
    // });
    uploadProduct();

    console.log(state);
    
  };
  
  return (
    <div className="row">
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Add New Product</h4>
            <p className="card-description">Please fill the product details</p>
            <form className="forms-sample" onSubmit={e => submitHandler(e)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Name"
                      name="productName"
                      onChange={e => onchangeHandler(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputtext4">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputtext4"
                      placeholder="price"
                      name="price"
                      onChange={e => onchangeHandler(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vendorSelect">Vendor</label>
                    <select
                      className="form-control"
                      id="vendorSelect"
                      name="vendor"
                      onChange={e => onchangeHandler(e)}
                    >
                      <option>Select Vendor</option>
                      {allVendor}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="productCategory">Product Category</label>
                    <select
                      className="form-control"
                      id="productCategory"
                      name="productCat"
                      onChange={e => onchangeHandler(e)}
                    >
                      {allProductCat}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Product Image</label>
                    <input
                      type="file"
                      name="imagePath"
                      onChange={e => onchangeHandler(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">Product Descrition</label>
                    <textarea
                      className="form-control"
                      id="exampleTextarea1"
                      rows="4"
                      placeholder="please enter the product description"
                      name="productDesc"
                      onChange={e => onchangeHandler(e)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-gradient-primary mr-2">
                Submit
              </button>
              <button className="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
