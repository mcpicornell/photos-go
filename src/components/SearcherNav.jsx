import React from 'react';

export const SearcherNav = () => {



    return(
        <>
            <div className='searcherContainer'>
                <input placeholder='Search...' className='navSearcher'></input>
                <div className='searcherImgContainer'>
                    <img className='searcherImg' src={imgSearcher}/>
                </div>
                        
            </div>
        </>
        
    )

}