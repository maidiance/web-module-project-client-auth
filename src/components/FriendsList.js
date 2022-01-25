import React from 'react';
import styled from 'styled-components';

import axiosWithAuth from './../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        // get friends
        axiosWithAuth()
            .get('/friends')
            .then(resp => {
                this.setState({
                    friends: resp.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return (
            <div>
                <h1>FRIENDS LIST</h1>
                <div className='friends-container'>
                {
                    this.state.friends.map(friend => {
                        return(<p>- {friend.name} - {friend.email}</p>)
                    })
                }
                </div>
            </div>
        )
    }
}

export default FriendsList;