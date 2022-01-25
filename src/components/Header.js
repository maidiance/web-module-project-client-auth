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
    return(
        <div>
            <StyledDiv className='header'>
                <h2>FRIENDS DATABASE</h2>
                <div className='nav'>
                    <button>LOGIN</button>
                    <button>FRIENDLIST</button>
                    <button>ADDFRIEND</button>
                    <button>LOGOUT</button>
                </div>
            </StyledDiv>
            <hr />
        </div>
    )
}

export default Header;