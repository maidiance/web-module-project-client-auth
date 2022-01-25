import React from 'react';
import styled from 'styled-components';

import axiosWithAuth from './../utils/axiosWithAuth';

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

class AddFriend extends React.Component {
    state={
        id: 0,
        name: '',
        age: 0,
        email: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const newFriend = {
            id: Date.now(),
            name: this.state.name,
            age: 22,
            email: this.state.email
        }
        axiosWithAuth().post('/friends', {headers:{authorization: token}}, newFriend)
            .then(resp => {
                console.log(resp.data);
                this.props.history.push('/friends');
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return(
            <StyledDiv>
                <h1>ADD FRIEND</h1>
                <form onSubmit={this.submit}>
                    <label className='input-container'><p>FRIEND NAME</p>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    /></label>
                    <label className='input-container'><p>FRIEND EMAIL</p>
                    <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    /></label>
                    <button>SUBMIT</button>
                </form>
            </StyledDiv>
        )
    }
}

export default AddFriend;