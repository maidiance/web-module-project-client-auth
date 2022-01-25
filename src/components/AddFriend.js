import React from 'react';
import styled from 'styled-components';

import axiosWithAuth from './../utils/axiosWithAuth';

class AddFriend extends React.Component {
    state={
        name: '',
        email: ''
    };

    render() {
        return(
            <div>
                <h1>ADD FRIEND</h1>
                <form onSubmit={this.submit}>
                    <input
                        type='text'
                        name='friendName'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='friendEmail'
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