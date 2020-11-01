import React, { Component } from 'react';
// import { withRouter, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
import './App.css';
//Pages
import EmployeeCard from './containers/EmployeeCard/EmployeeCard';

class App extends Component {

  render() {
    return (
      <div className="app-main">
        {/* <LoginPage></LoginPage> */}
        <EmployeeCard></EmployeeCard>
      </div>
    );
  }
}

export default App;
