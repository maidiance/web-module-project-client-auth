import React from 'react';
import styled from 'styled-components';

import axiosWithAuth from './../utils/axiosWithAuth';

class AddFriend extends React.Component {
    state={
        name: '',
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
        axiosWithAuth().post('/friends', {headers:{authorization: token}}, this.state)
            .then(resp => {
                console.log(resp.data);
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return(
            <div>
                <h1>ADD FRIEND</h1>
                <form onSubmit={this.submit}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;