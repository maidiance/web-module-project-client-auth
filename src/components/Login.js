import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <form onSubmit={this.login}>
                    <label>USERNAME
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    /></label>
                    <label>PASSWORD
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    /></label>
                </form>
                <button>SUBMIT</button>
            </div>
        )
    }
}

export default Login;