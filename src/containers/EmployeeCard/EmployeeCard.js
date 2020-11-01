import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEmployees, deleteEmployee, openEditEmployeeModal } from '../../actions';
import './styles.css';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import  EmployeeEditModal  from '../../components/Modal/EmployeeEditModal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { SolarSystemLoading } from 'react-loadingg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

class EmployeeCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            employeesCanView: []
        }
    }

    componentDidMount() {
        this.props.readEmployees();
    }


    renderData() {

        // console.log("Render Data Props Info: ", JSON.stringify(this.state.employees));
        const employeeItem = this.props.employees.map(({ _id, personalDetails, jobDetails, benefitsDetails }) => {
            return (
              <Col key={_id} md={4}>
                <div className="employee-card">
                    {/* Delete */}
                    <FontAwesomeIcon className="btn-delete-emp" icon={faTrashAlt} onClick={() => { this.props.deleteEmployee({id:_id})
                    }}/>

                    <div> {`${personalDetails.firstName} ${personalDetails.lastName}`} </div>
                    <div> {jobDetails.employeeNumber} </div>
                    <div> {jobDetails.title} </div>
                    {/* View */}
                    <FontAwesomeIcon className="btn-view-emp" icon={this.state.employeesCanView.includes(_id) ? faChevronUp : faChevronDown} onClick={() => {
                        if(!this.state.employeesCanView.includes(_id)){
                          this.setState({
                              employeesCanView: this.state.employeesCanView.concat(_id)
                          })
                        }
                        else{
                          this.setState({employeesCanView: this.state.employeesCanView.filter(function(employee) {
                              return employee !== _id
                          })});
                        }
                    }}/>

                    {
                        this.state.employeesCanView.includes(_id) ?
                        <EmployeeTable personalDetails={personalDetails} jobDetails={jobDetails} benefitsDetails={benefitsDetails} id={_id}/> : null
                    }
                </div>
              </Col>
            );
        });
        return employeeItem;
    }

    render() {
        return (
          <Container>

            <div>
                <div className="main-page-upper-section">
                  <div className="col-md-4 col-sm-12">
                    <img src={require('../../assets/employee.png')} alt="" className="img-responsive"/>
                  </div>
                </div>
                <div className="employee-list">
                    <Row>
                      {this.props.employees.length > 0 ? this.renderData() : <SolarSystemLoading style={{marginLeft: 'auto', marginTop: '100px', marginRight: 'auto'}}/>}
                    </Row>
                </div>
                <EmployeeEditModal employeeDetails={this.props.editEmployeeInfo}/>
            </div>
          </Container>
        );
    }
}


const mapStatetoProps = ({ employee, helper }) => {
    const { employees, error, employeeInfo } = employee;
    const { editEmployeeInfo } = helper;
    return {
        employees, error, employeeInfo, editEmployeeInfo
    }
}


export default connect(mapStatetoProps, { readEmployees, deleteEmployee, openEditEmployeeModal })(EmployeeCard);
