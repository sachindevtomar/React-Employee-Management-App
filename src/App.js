import React, { Component } from 'react';
// import { withRouter, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
import './App.css';
//Pages
import LoginPage from './containers/LoginPage';
import EmployeePage from './containers/EmployeePage';

class App extends Component {

  render() {
    return (
      <div>
        {/* <LoginPage></LoginPage> */}
        <EmployeePage></EmployeePage>
      </div>
    );
  }
}

export default App;
