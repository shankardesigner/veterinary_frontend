import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <span className="d-flex align-items-center purchase-popup">
            <p>Like what you see? Check out our premium version for more.</p>
            <Link
              to="/"
              target="_blank"
              className="btn ml-auto download-button"
            >
              Complete Your Profile
            </Link>
            <Link
              to="/"
              target="_blank"
              className="btn purchase-button"
            >
              Activate Account
            </Link>
            <i className="mdi mdi-close popup-dismiss"></i>
          </span>
        </div>
      </div>
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <i className="mdi mdi-home"></i>
          </span>
          Dashboard
        </h3>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <span></span>Overview
              <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
            </li>
          </ul>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-danger card-img-holder text-white">
            <div className="card-body">
              <img
                src="images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="font-weight-normal mb-3">
                Weekly Sales
                <i className="mdi mdi-chart-line mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">$ 15,0000</h2>
              <h6 className="card-text">Increased by 60%</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-info card-img-holder text-white">
            <div className="card-body">
              <img
                src="images/dashboard/circle.svg"
                className="card-img-absolute"
                alt=""
              />
              <h4 className="font-weight-normal mb-3">
                Weekly Orders
                <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">45,6334</h2>
              <h6 className="card-text">Decreased by 10%</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img
                src="images/dashboard/circle.svg"
                className="card-img-absolute"
                alt=""
              />
              <h4 className="font-weight-normal mb-3">
                Visitors Online
                <i className="mdi mdi-diamond mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">95,5741</h2>
              <h6 className="card-text">Increased by 5%</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="clearfix">
                <h4 className="card-title float-left">
                  Visit And Sales Statistics
                </h4>
                <div
                  id="visit-sale-chart-legend"
                  className="rounded-legend legend-horizontal legend-top-right float-right"
                ></div>
              </div>
              <canvas id="visit-sale-chart" className="mt-4"></canvas>
            </div>
          </div>
        </div>
        <div className="col-md-5 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Traffic Sources</h4>
              <canvas id="traffic-chart"></canvas>
              <div
                id="traffic-chart-legend"
                className="rounded-legend legend-vertical legend-bottom-left pt-4"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
