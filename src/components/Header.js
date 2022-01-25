import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    h2 {
        width: 40%;
        margin-left: 3%;
    }
    .nav {
        width: 55%;
        display: flex;
        justify-content: flex-end;
    }
    .nav {
        margin-top: 1%;
    }
    .nav a {
        text-decoration: none;
        margin-right: 2%;
        padding: 2% 2%;
        background-color: black;
        color: white;
    }
    hr {
        display: block;
        border: 1px solid black;
    }
`

const Header = () => {
    const isLoggedIn = localStorage.getItem('token');
    return(
        <div>
            <StyledDiv className='header'>
                <h2>FRIENDS DATABASE</h2>
                <div className='nav'>
                    <a href='/login'><p>LOGIN</p></a>
                    <a href='/friends'><p>FRIENDLIST</p></a>
                    <a href='/friends/add'><p>ADDFRIEND</p></a>
                    <a href='/logout'><p>LOGOUT</p></a>
                </div>
            </StyledDiv>
            <hr />
        </div>
    )
}

export default Header;