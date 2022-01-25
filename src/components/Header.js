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
    button {
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
                    <a href='/login'><button>LOGIN</button></a>
                    <a href='/friends'><button>FRIENDLIST</button></a>
                    <a href='/friends/add'><button>ADDFRIEND</button></a>
                    <a href='/logout'><button>LOGOUT</button></a>
                </div>
            </StyledDiv>
            <hr />
        </div>
    )
}

export default Header;