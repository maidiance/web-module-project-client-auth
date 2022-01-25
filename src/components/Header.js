import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Link } from 'react-router-dom';

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
                    <Link to='/login'><button>LOGIN</button></Link>
                    <Link to='/friends'><button>FRIENDLIST</button></Link>
                    <Link to='/friends/add'><button>ADDFRIEND</button></Link>
                    <Link to='/logout'><button>LOGOUT</button></Link>
                </div>
            </StyledDiv>
            <hr />
        </div>
    )
}

export default Header;