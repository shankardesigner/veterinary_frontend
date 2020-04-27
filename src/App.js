import React from "react";
import "./App.css";
import "./vendors/css/vendor.bundle.base.css";
import "./vendors/iconfonts/mdi/css/materialdesignicons.min.css";
import "./css/style.css";


import { BrowserRouter as Router } from "react-router-dom";
import { TopBar, Sidebar, MainPanel } from "./components";

function App() {
  return (
    <Router>
      <div className="container-scroller">
        <TopBar />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <MainPanel />
        </div>
      </div>
    </Router>
  );
}

export default App;
