import React from 'react';
import styled from 'styled-components'
import imgSearcher from '../img/magnifying-glass-solid.svg'
import { useDispatch } from 'react-redux';
import {setPhotos, removePhotos} from '../features/PhotoSlice';
import { useNavigate } from 'react-router-dom';

// import { inputSearcherValue } from '../pages/SearcherPage';
// import { searchForValue } from '../features/apiCall';


export const Navbar = (props) => {

    const nav = useNavigate();
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const inputValue = document.getElementById('inputNavValue').value;
        const inputValueRefactor = inputValue.replace(/\s+/g, "-");
        dispatch(removePhotos());
       console.log(inputValueRefactor)
        dispatch(setPhotos(inputValueRefactor));
   
        nav('/searcher');
    }


    return (
        <>
            <NavContainer>
                <div className='navBody'>
                    <h2>Photo Go!</h2>
                    <div className='searcherContainer'>
                        
                        <div className='searcherImgContainer'>
                            <form onSubmit={onSubmitHandler}>
                            <input placeholder='Search...' id='inputNavValue' className='navSearcher'></input>
                            
                            <button type='submit'><img className='searcherImg' src={imgSearcher} />
                            </button>
                            </form>
                            
                        </div>
                        
                    </div>
                    <div>
                        <a href='/'>Home</a>
                        <a href='/myProfile'>MyProfile</a>
                    </div>                    
                </div>
            </NavContainer>
        </>
    )
};



export default Navbar;




const NavContainer = styled.div`
    .navBody{
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

    

    .searcherImgContainer{
        position: relative;
    }

    #inputNavValue{
        margin-top: 20px;
    }

    .navSearcher{
        background: #FEF4F4;
        border: 1px solid #000000;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
        margin: 15px;
        width: 400px;
        height: 30px;
        position: relative;
    

    }

    .searcherImg{
        position: absolute;
        height: 10px;
        width: 10px;
        right: 60px;
        bottom: 28px;
    }

    a{
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