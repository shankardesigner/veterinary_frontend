import React from "react";
import { Switch, Route,  } from "react-router-dom";
import { Customers, Registration, AddProduct, Home, ErrorPage, SingleCustomer, Products } from "..";


function PageRoute() {
  return (
    <Switch>
      <Route exact path="/add-customer" component={ Registration }/>
      <Route exact path="/all-customers" component={ Customers }/>
      <Route exact path="/product" component={ Products }/>
      <Route exact path="/add-product" component={ AddProduct }/>
      <Route exact path="/customers/:id" component={ SingleCustomer }/>
      <Route exact path="/" component={ Home }/>
      <Route path ="/**" component={ ErrorPage } />
    </Switch>
  );
}

export default PageRoute;
