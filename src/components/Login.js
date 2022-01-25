import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto;
    h1 {
        margin: 1% auto;
    }
    form {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }
    .input-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .input-container p {
        margin-left: 25%;
        margin-top: 0%;
        margin-bottom: 0%;
        width: 100%;
    }
    .input-container input {
        width: 50%;
        background-color: black;
        color: white;
        padding: 2% 0;
        margin: 1% auto;
    }
    button {
        background-color: black;
        color: white;
        padding: 2% 2%;
        width: 50%;
        margin: 0 auto;
    }
`

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', this.state.credentials)
            .then(resp => {
                localStorage.setItem('token', resp.data.token);
                localStorage.setItem('role', resp.data.role);
                localStorage.setItem('username', resp.data.username);
                this.props.history.push('/friendsList');
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return (
            <StyledDiv>
                <h1>LOGIN</h1>
                <form onSubmit={this.login}>
                    <label className='input-container'><p>USERNAME</p>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    /></label>
                    <label className='input-container'><p>PASSWORD</p>
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    /></label>
                    <button>SUBMIT</button>
                </form>
            </StyledDiv>
        )
    }
}

export default Login;