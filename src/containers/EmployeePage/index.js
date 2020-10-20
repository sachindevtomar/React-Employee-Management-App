import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEmployees, deleteEmployee } from '../../actions';
import './styles.css';
import EmployeeTable from '../../components/EmployeeTable'

class EmployeePage extends Component {

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
                <div key={_id} className="employee-card">
                    <div> {`${personalDetails.firstName} ${personalDetails.lastName}`} </div>
                    <div> {jobDetails.employeeNumber} </div>
                    <div> {jobDetails.title} </div>
                    {/* View */}
                    <button className="button btn-view-emp" onClick={() => {
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
                    }}> View </button>
                    {/* Delete */}
                    <button className="button btn-delete-emp" onClick={() => { this.props.deleteEmployee({id:_id})} }> Delete </button>
                    {
                        this.state.employeesCanView.includes(_id)? <EmployeeTable personalDetails={personalDetails} jobDetails={jobDetails} benefitsDetails={benefitsDetails}/> : null
                    }
                </div>
            );
        });
        return employeeItem;
    }

    render() {
        return (
            <div>
                <div className="employee-art">
                    <img src={require('../../assets/employee.png')} />
                </div>
                <div className="employee-list">
                    {this.renderData()}
                </div>
            </div>

        );
    }
}


const mapStatetoProps = ({ employee }) => {
    const { employees, error, employeeInfo } = employee;
    console.log("Map State to Prop: ", JSON.stringify(employees));
    return {
        employees, error, employeeInfo
    }
}


export default connect(mapStatetoProps, { readEmployees, deleteEmployee })(EmployeePage);
