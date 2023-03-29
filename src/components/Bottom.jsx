import React from 'react';
import styled from 'styled-components'


export function Bottom(){
    return (
        <>
        
        <FooterContainer>
            <footer className='footerBody'>
                    <h2>Photo Go!</h2>
                    
                    <span>Contact</span>
                   
            </footer>
        </FooterContainer>
        
        </>
    )
};

export default Bottom;


const FooterContainer = styled.footer`
    .footerBody{
        width: 100%;
        background-color: rgba(90, 114, 98, 1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .2rem;
        position: fixed;
        z-index: 5;
        height: 90px;

    }
    h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 38px;
        color: rgba(252, 247, 247, 1);
        margin: 15px;
        padding-right: 10px;
        width: 50px;
    }
    span{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 48px;
        color: rgba(252, 247, 247, 1);
        text-decoration: none;
        margin-right: 2rem;
    }

`