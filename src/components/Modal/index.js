import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { closeEditEmployeeModal } from '../../actions';

const renderAuthButton = (employeeDetails)=>{
      console.log(" OutSide: "+JSON.stringify(employeeDetails));
      if(employeeDetails && employeeDetails.personalDetails){
        return true;
      } else{
        return false;
      }
}

class EmployeeEditModal extends Component {
  constructor(props, context) {
  		super(props, context);

  		this.handleShow = this.handleShow.bind(this);
  		this.handleClose = this.handleClose.bind(this);
  	}

	handleClose() {
		this.props.closeEditEmployeeModal();
	}

	handleShow() {
		this.setState({ showModal: true });
	}

  renderModalbody() {
    return (
      <div>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        <EmployeeEditModal />
      </div>
    );
  }

  render(){
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
					Launch demo modal
        </Button>
				<Modal show={renderAuthButton(this.props.employeeDetails)} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>  {this.renderModalbody()} </Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
            </Button>
						<Button variant="primary" onClick={this.handleClose}>
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

export default connect(null, { closeEditEmployeeModal })(EmployeeEditModal);
