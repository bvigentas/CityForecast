import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import PubSub from 'pubsub-js';

class App extends Component {

  constructor() {
    super();
    this.state = {isActive: false};
  }

  componentDidMount() {
    PubSub.subscribe('active-loader', (topic, status) => {
      this.setState({isActive: status});
    });
  }

  render() {
    return (
      <LoadingOverlay active={this.state.isActive} spinner text='Loading...' fadeSpeed="10">
      <div id="wrapper">
          <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
              </div>
              <div class="sidebar-brand-text mx-3">HBSIS Project</div>
            </a>
            <hr class="sidebar-divider"/>
            <div class="sidebar-heading">
              City
            </div>
            <li class="nav-item menu-link">
              <a class="nav-link" href="charts.html">
                <i class="fas fa-fw fa-chart-area"></i>
                <span><Link to="/new_city">New City</Link></span></a>
            </li>
            <li class="nav-item menu-link">
              <a class="nav-link" href="charts.html">
                <i class="fas fa-fw fa-chart-area"></i>
                <span><Link to="/">Forecast</Link></span></a>
            </li>
          </ul>

          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>
              <div class="container-fluid">
                {this.props.children}
              </div>
            </div>

            <footer class="sticky-footer bg-white">
              <div class="container my-auto">
                <div class="copyright text-center my-auto">
                  <span>Bruno Geisler Vigentas. 2019</span>
                </div>
              </div>
            </footer>
          </div>

      </div>
      </LoadingOverlay>
    );
  }
}

export default App;
