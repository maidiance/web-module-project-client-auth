import React from 'react';
import styled from 'styled-components';

import axiosWithAuth from './../utils/axiosWithAuth';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h1 {
        margin-bottom: 1%;
    }
    .friends-container {
        width: 75%;
        margin: 0 auto;
        margin-left: 30%;
        font-weight: bold;
    }
`

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
            <StyledDiv>
                <h1>FRIENDS LIST</h1>
                <div className='friends-container'>
                {
                    this.state.friends.map(friend => {
                        return(<p>- {friend.name} - {friend.email}</p>)
                    })
                }
                </div>
            </StyledDiv>
        )
    }
}

export default FriendsList;