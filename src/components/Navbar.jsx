import React from 'react';
import styled from 'styled-components'


function Navbar(){
    return (
        <>
            <NavContainer>
                <div className='navBody'>
                    <h2>Photo Go!</h2>
                    <div>
                        <input placeholder='Search...' className='navSearcher'></input>
                    </div>
                    <div>
                        <a href='/home'>Home</a>
                        <a href='/myProfile'>MyProfile</a>
                    </div>                    
                </div>
            </NavContainer>
        </>
    )
};

export default Navbar;


const NavContainer = styled.nav`
    .navBody{
        width: 100%;
        background-color: rgba(90, 114, 98, 1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .2rem;
        position: fixed;
        z-index: 5;

    }
    h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 48px;
        color: rgba(252, 247, 247, 1);
        margin: 15px;
    }

    .navSearcher{
        justify-content: center;
    }

    a{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;º
        line-height: 48px;
        color: rgba(252, 247, 247, 1);
        text-decoration: none;
        margin-right: 2rem;
    }

`