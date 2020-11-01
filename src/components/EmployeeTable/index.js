import React, { Component } from 'react';
import EditEmployeeDetails from '../EditEmployeeDetails'
import './styles.css';
import { connect } from 'react-redux';
import { openEditEmployeeModal } from '../../actions';

class EmployeeTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onEdit: false
        }
    }

    componentDidMount() {

    }

    render(){
      return (
          <div>
              <div>
                  <h3 className="text-white"> PERSONAL DETAILS</h3>
                  <ul>
                      <li> First Name {this.props.personalDetails.firstName}</li>
                      <li> Middle Name {this.props.personalDetails.middleName}</li>
                      <li> Last Name {this.props.personalDetails.lastName}</li>
                      <li> Gender {this.props.personalDetails.gender}</li>
                      <li> Title {this.props.personalDetails.titile}</li>
                      <li> Address {`${this.props.personalDetails.address.unitNumber} ${this.props.personalDetails.address.street} ${this.props.personalDetails.address.city} ${this.props.personalDetails.address.province} ${this.props.personalDetails.address.region} ${this.props.personalDetails.address.zipCode} `}</li>
                  </ul>
              </div>
              <div>
                  <h3 className="text-white"> CONTACT DETAILS</h3>
                  <ul>
                      <li> Landline {this.props.personalDetails.contact.landlineNumber}</li>
                      <li> Mobile Number {this.props.personalDetails.contact.mobileNumber}</li>
                      <li> Email {this.props.personalDetails.contact.email}</li>
                  </ul>
              </div>
              <div>
                  <h3 className="text-white"> JOB DETAILS</h3>
                  <ul>
                      <li> Title {this.props.jobDetails.title}</li>
                      <li> Employee Number {this.props.jobDetails.employeeNumber}</li>
                      <li> Location {this.props.jobDetails.location}</li>
                      <li> Department {this.props.jobDetails.department}</li>
                      <li> Salary {this.props.jobDetails.salary}</li>
                  </ul>
              </div>
              <div>
                  <h3 className="text-white"> EMPLOYEE BENEFITS </h3>
                  <ul>
                      <li> SSS {this.props.benefitsDetails.SSS}</li>
                      <li> PhilHealth{this.props.benefitsDetails.PhilHealth}</li>
                      <li> PAGIBIG {this.props.benefitsDetails.PAGIBIG}</li>
                      <li> BIR {this.props.benefitsDetails.BIR}</li>
                  </ul>
              </div>
              <EditEmployeeDetails onEdit={this.state.onEdit}/>
              <button onClick={() => {
                  this.setState({
                      // onView: false,
                      onEdit: true
                  });

                  this.props.openEditEmployeeModal(
                    {
                      personalDetails: this.props.personalDetails,
                      jobDetails: this.props.jobDetails,
                      benefitsDetails: this.props.benefitsDetails,
                      id: this.props.id
                    });
              }}> Update </button>
          </div>

      )
    }
}

export default connect(null, { openEditEmployeeModal })(EmployeeTable);
