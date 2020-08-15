import React, { Component } from "react";
import "./Dashboard.css";
import Footer from "./components/Footer";
import { NavLink, Link, withRouter } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <>
        <header className="navbar-fixed-top">
          <div className="row">
            <div className="container-fluid">
              <div className="pull-left">
                <div className="pull-left logo text-center">
                  <span
                    style={{
                      fontFamily: "Dancing Script",
                      fontWeight: "600",
                      fontSize: "30px"
                    }}
                  >
                    {" "}
                    eValid <em style={{ color: "#f2545f" }}> ! </em>
                  </span>
                </div>
                <button className="btn btn-danger menu">
                  <span className="fa fa-bars" />
                </button>
              </div>
              <div className="pull-right">
                <div className="marr20">
                  <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown task">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                      >
                        <i className="fa fa-tasks fa-fw" />
                        <i className="fa fa-caret-down" />
                      </a>
                      <ul className="dropdown-menu dropdown-tasks">
                        <li>
                          <a href="#">
                            <div>
                              <p>
                                <strong>Task 1</strong>{" "}
                                <span className="pull-right text-muted">
                                  40% Complete
                                </span>
                              </p>
                              <div className="progress progress-striped active">
                                <div
                                  aria-valuemax={100}
                                  aria-valuemin={0}
                                  aria-valuenow={40}
                                  className="progress-bar progress-bar-success"
                                  role="progressbar"
                                  style={{ width: "40%" }}
                                >
                                  <span className="sr-only">
                                    40% Complete (success)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">
                            <div>
                              <p>
                                <strong>Task 2</strong>{" "}
                                <span className="pull-right text-muted">
                                  20% Complete
                                </span>
                              </p>
                              <div className="progress progress-striped active">
                                <div
                                  aria-valuemax={100}
                                  aria-valuemin={0}
                                  aria-valuenow={20}
                                  className="progress-bar progress-bar-info"
                                  role="progressbar"
                                  style={{ width: "20%" }}
                                >
                                  <span className="sr-only">20% Complete</span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">
                            <div>
                              <p>
                                <strong>Task 3</strong>{" "}
                                <span className="pull-right text-muted">
                                  60% Complete
                                </span>
                              </p>
                              <div className="progress progress-striped active">
                                <div
                                  aria-valuemax={100}
                                  aria-valuemin={0}
                                  aria-valuenow={60}
                                  className="progress-bar progress-bar-warning"
                                  role="progressbar"
                                  style={{ width: "60%" }}
                                >
                                  <span className="sr-only">
                                    60% Complete (warning)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">
                            <div>
                              <p>
                                <strong>Task 4</strong>{" "}
                                <span className="pull-right text-muted">
                                  80% Complete
                                </span>
                              </p>
                              <div className="progress progress-striped active">
                                <div
                                  aria-valuemax={100}
                                  aria-valuemin={0}
                                  aria-valuenow={80}
                                  className="progress-bar progress-bar-danger"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                >
                                  <span className="sr-only">
                                    80% Complete (danger)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a className="text-center" href="#">
                            <strong>See All Tasks</strong>{" "}
                            <i className="fa fa-angle-right" />
                          </a>
                        </li>
                      </ul>
                      {/* /.dropdown-tasks */}
                    </li>
                    {/* /.dropdown */}
                    <li className="dropdown bell">
                      <a
                        aria-expanded="false"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                      >
                        <i className="fa fa-bell fa-fw" />{" "}
                        <i className="fa fa-caret-down" />
                      </a>
                      <ul className="dropdown-menu dropdown-alerts">
                        <li>
                          <a href="#">
                            <div>
                              <i className="fa fa-comment fa-fw" /> New Comment{" "}
                              <span className="pull-right text-muted small">
                                4 minutes ago
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">
                            <div>
                              <i className="fa fa-twitter fa-fw" /> 3 New
                              Followers{" "}
                              <span className="pull-right text-muted small">
                                12 minutes ago
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">
                            <div>
                              <i className="fa fa-envelope fa-fw" /> Message
                              Sent{" "}
                              <span className="pull-right text-muted small">
                                4 minutes ago
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">
                            <div>
                              <i className="fa fa-tasks fa-fw" /> New Task{" "}
                              <span className="pull-right text-muted small">
                                4 minutes ago
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">
                            <div>
                              <i className="fa fa-upload fa-fw" /> Server
                              Rebooted{" "}
                              <span className="pull-right text-muted small">
                                4 minutes ago
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a className="text-center" href="#">
                            <strong>See All Alerts</strong>{" "}
                            <i className="fa fa-angle-right" />
                          </a>
                        </li>
                      </ul>
                      {/* /.dropdown-alerts */}
                    </li>
                    {/* /.dropdown */}
                    <li className="dropdown user">
                      <a
                        aria-expanded="false"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                      >
                        <i className="fa fa-user fa-fw" />{" "}
                        <i className="fa fa-caret-down" />
                      </a>
                      <ul className="dropdown-menu dropdown-user">
                        <li>
                          <NavLink to={"/"}>
                            <i className="fa fa-user fa-fw" /> User Profile
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/">
                            <i className="fa fa-gear fa-fw" /> Settings
                          </NavLink>
                        </li>
                        <li className="divider" />
                        <li>
                          <Link to="/">
                            <i className="fa fa-sign-out fa-fw" /> Logout
                          </Link>
                        </li>
                      </ul>
                      {/* /.dropdown-user */}
                    </li>
                    {/* /.dropdown */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="wrap">
          <div className="side-menu">
            <nav className="navbar navbar-default" role="navigation">
              <div className="navbar-header">
                <div className="brand-wrapper">
                  <div className="brand-name-wrapper">
                    <a className="navbar-brand" href="#">
                      Navigation Menu
                    </a>
                  </div>
                  <a
                    className="btn btn-default"
                    data-toggle="collapse"
                    href="#search"
                    id="search-trigger"
                  >
                    <span className="fa fa-search" />
                  </a>
                  <div className="panel-collapse collapse" id="search">
                    <div className="panel-body">
                      <form className="navbar-form" role="search">
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Search"
                            type="text"
                          />
                        </div>
                        <button className="btn btn-default" type="submit">
                          <span className="fa fa-check-square" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Main Menu */}
              <div className="side-menu-container">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="#">
                      <span className="fa fa-tachometer" /> Dashboard
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <span className="fa fa-tasks" /> Tasks
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-cloud-upload" /> Cloud
                    </a>
                  </li>
                  {/* Dropdown*/}

                  <li>
                    <a href="#">
                      <span className="fa fa-product-hunt" /> Projects
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </nav>
          </div>
          {/* Main Content */}
          <div className="container-fluid">
            <div className="side-body">
              <div className="page-title-box">
                <h3 className="page-title pull-left">Dashboard</h3>
                <ol className="breadcrumb pull-right">
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li className="active">Dashboard</li>
                </ol>
                <div className="clearfix" />
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="panel panel-primary">
                        <div className="panel-heading">
                          <div className="row">
                            <div className="col-xs-9">
                              <div className="huge">09</div>
                              <div>New Clients!</div>
                            </div>
                            <div className="col-xs-3 text-right">
                              <i className="fa fa-cogs fa-5x" />
                            </div>
                          </div>
                        </div>
                        <a href="#">
                          <div className="panel-footer">
                            <span className="pull-left">View Details</span>{" "}
                            <span className="pull-right">
                              <i className="fa fa-arrow-circle-right" />
                            </span>
                            <div className="clearfix" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="panel panel-green">
                        <div className="panel-heading">
                          <div className="row">
                            <div className="col-xs-9">
                              <div className="huge">612</div>
                              <div>New Deals!</div>
                            </div>
                            <div className="col-xs-3 text-right">
                              <i className="fa fa-laptop fa-5x" />
                            </div>
                          </div>
                        </div>
                        <a href="#">
                          <div className="panel-footer">
                            <span className="pull-left">View Details</span>{" "}
                            <span className="pull-right">
                              <i className="fa fa-arrow-circle-right" />
                            </span>
                            <div className="clearfix" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="panel panel-yellow">
                        <div className="panel-heading">
                          <div className="row">
                            <div className="col-xs-9">
                              <div className="huge">2148</div>
                              <div>Total Sales!</div>
                            </div>
                            <div className="col-xs-3 text-right">
                              <i className="fa fa-shopping-cart fa-5x" />
                            </div>
                          </div>
                        </div>
                        <a href="#">
                          <div className="panel-footer">
                            <span className="pull-left">View Details</span>{" "}
                            <span className="pull-right">
                              <i className="fa fa-arrow-circle-right" />
                            </span>
                            <div className="clearfix" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="panel panel-red">
                        <div className="panel-heading">
                          <div className="row">
                            <div className="col-xs-9">
                              <div className="huge">$56M</div>
                              <div>Total Income!</div>
                            </div>
                            <div className="col-xs-3 text-right">
                              <i className="fa fa-dollar fa-5x" />
                            </div>
                          </div>
                        </div>
                        <a href="#">
                          <div className="panel-footer">
                            <span className="pull-left">View Details</span>{" "}
                            <span className="pull-right">
                              <i className="fa fa-arrow-circle-right" />
                            </span>
                            <div className="clearfix" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <i className="fa fa-bell" /> Notification
                    </div>
                    <p className="padd20">Welcome to Softcom !</p>
                    <img src="../images/softcom.png" width="33%" />
                  </div>
                </div>
              </div>
              <div className="row"></div>
            </div>
            <div className="side-footer">
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Dashboard);
