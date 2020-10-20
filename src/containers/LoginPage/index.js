import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <form>
                <label>
                    Username:
                <input type="text" name="username" />
                </label>
                <label>
                    Password:
                 <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default LoginPage;
