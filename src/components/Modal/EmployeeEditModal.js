import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { closeEditEmployeeModal, updateEmployee } from '../../actions';
import './styles.css'

const renderModalIf = (employeeDetails)=>{
      if(employeeDetails && employeeDetails.personalDetails){
        return true;
      } else{
        return false;
      }
}

class EmployeeEditModal extends Component {
  constructor(props, context) {
  		super(props, context);
      this.state = {
        empFirstName: renderModalIf(this.props.employeeDetails) ? this.props.employeeDetails.personalDetails.firstName : "",
        empLastName: renderModalIf(this.props.employeeDetails) ? this.props.employeeDetails.personalDetails.lastName : "",
        empRoleName: renderModalIf(this.props.employeeDetails) ? this.props.employeeDetails.jobDetails.title : ""
      }
  		this.handleShow = this.handleShow.bind(this);
  		this.handleClose = this.handleClose.bind(this);
      this.updateEmployeeObject = this.updateEmployeeObject.bind(this);
  	}

  changeEmpFirstName = (event) =>{
    this.setState({
      empFirstName: event.target.value
    });
  }
  changeEmpLastName = (event) =>{
    this.setState({
      empLastName: event.target.value
    });
  }
  changeEmpRoleName = (event) =>{
    this.setState({
      empRoleName: event.target.value
    });
  }

  updateEmployeeObject(){
    let objToBeUpdated = this.props.employeeDetails;
    objToBeUpdated.personalDetails.firstName = this.state.empFirstName ? this.state.empFirstName : this.props.employeeDetails.personalDetails.firstName;
    objToBeUpdated.personalDetails.lastName = this.state.empLastName ? this.state.empLastName : this.props.employeeDetails.personalDetails.lastName;
    objToBeUpdated.jobDetails.title = this.state.empRoleName ? this.state.empRoleName : this.props.employeeDetails.jobDetails.title;

    this.props.updateEmployee({id:this.props.employeeDetails.id, data: objToBeUpdated})
    //Set the state using reducer to close the edit employee modal
		this.props.closeEditEmployeeModal();
  }

	handleClose() {
    //Set the state using reducer to close the edit employee modal
		this.props.closeEditEmployeeModal();
	}

	handleShow() {
		this.setState({ showModal: true });
	}

  renderModalbody() {
    if(this.props.employeeDetails && this.props.employeeDetails.personalDetails){

      return (
        <div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="first-name-edit-emp">First Name:</label>
              <input type="text" className="form-control" id="first-name-edit-emp" defaultValue={this.props.employeeDetails.personalDetails.firstName} onChange={this.changeEmpFirstName}/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="last-name-edit-emp">Last Name:</label>
              <input type="text" className="form-control" id="last-name-edit-emp"
                defaultValue={this.props.employeeDetails.personalDetails.lastName} onChange={this.changeEmpLastName}/>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="role-edit-emp">Role:</label>
              <input type="text" className="form-control" id="role-edit-emp"
                defaultValue={this.props.employeeDetails.jobDetails.title} onChange={this.changeEmpRoleName}/>
            </div>
          </div>
        </div>
      );
    }

    return;
  }

  render(){
    return (
      <div>
				<Modal show={renderModalIf(this.props.employeeDetails)} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Update Record</Modal.Title>
					</Modal.Header>
					<Modal.Body className="employee-edit-modal-body">  {this.renderModalbody()} </Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
            </Button>
						<Button variant="primary" className="employee-edit-modal-save-btn" onClick={this.updateEmployeeObject}>
							Save Changes
            </Button>
					</Modal.Footer>
				</Modal>
      </div>
    );
  }
}

// const mapStatetoProps = ({ helper }) => {
//     const { editEmployeeInfo } = helper;
//     return {
//         editEmployeeInfo: editEmployeeInfo
//     }
// }

export default connect(null, { closeEditEmployeeModal, updateEmployee })(EmployeeEditModal);
