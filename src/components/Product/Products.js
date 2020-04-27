import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ProductReducer,
  productInitialState
} from "../../reducers/ProductReducer";
import { getAllProducts } from "../../actions/ProductAction";
import {Loading} from "../../components";
import { API_URI } from "../../utils/constant";
import {
  productCategoryInitialState,
  productCategoryReducer
} from "../../reducers/ProductCategoryReducer";
import { getAllProductCategory } from "../../actions/ProductCategoryActions";

const Products = () => {
  const [state, dispatch] = useReducer(ProductReducer, productInitialState);

  const [categoryState, dispatchTwo] = useReducer(
    productCategoryReducer,
    productCategoryInitialState
  );

  useEffect(() => {
    const fetchProducts = async () => {
      return await getAllProducts(dispatch);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchAllProductCategory = async () => {
      //setFetchCategory(true);
      return await getAllProductCategory(dispatchTwo);
    };
    fetchAllProductCategory();
  }, [state.product]);

  /*
    const getProductCategoryById = async id => {
      return await getProductCategory(id);
    };

    getProductCategoryById(9).then(res => {
      console.log(res);
    });
    */

  // const getProductCategoryNameByProductId = id => {
  //   return categoryState.productCategory.filter(pcat => {
  //     if (pcat.pcatId !== id) {
  //       return pcat.productCategory;
  //     } else {
  //       return "Category not found";
  //     }
  //   });
  // }; 
  
  // console.log(categoryState)

  const localProducts = state.product.map(product => {
    return (
      <div
        className="col-md-4 grid-margin stretch-card"
        key={product.productId}
      >
        <div className="card">
          <div className="card-body">
            <img
              src={`${API_URI}/${product.imagePath}`}
              className="mw-100 w-100 rounded mb-2"
              alt=""
            />
            <h4 className="card-title">{product.productName}</h4>
            <ul className="list-ticked">
              <li>ProductId :- {product.productId}</li>
              <li>Price :- {product.price}</li>
              <li>
                Product Category :-
                {product.productCat}
              </li>
              <li>Vendor :- {product.vendor}</li>
            </ul>
            <p className="card-description">{product.productDesc}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {state.product ? (
        <div className="row">
          <div className="col-12">
            <span className="d-flex align-items-center justify-content-between purchase-popup">
              <p>Want to add more product?</p>
              <Link to="/add-product" className="btn purchase-button">
                Add Product
              </Link>
            </span>
          </div>
          {localProducts}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Products;
