
import React, { Component } from 'react';

export default class EditEmployeeDetails extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      if(this.props.onEdit){
        return (
            <form>
                <label>
                    <input type="text" name="name" placeholder="First name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
      }
      return (<></>)
    }
}
