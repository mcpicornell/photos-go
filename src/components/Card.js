import imgMinusSolid from '../img/minus-solid.svg'
import imgPlusSolid from '../img/plus-solid.svg'
import imgCrossSolid from '../img/xmark-solid.svg'
import styled from 'styled-components'
import React from 'react';
 


// const imgMinusSolid = ("../img/minus-solid.svg");
// const imgPlusSolid = ("C:/Users7mcpic/OneDrive/Documentos/OxygenAcademy/Repositiorios/RepositoriosGitHubMarc/photos-go/src/img/plus-solid.svg");

export function Card(props){

    const showModal = () => {
        document.getElementById('modal').showModal();
    }

    const closeModal = () => {
        document.getElementById('modal').close();
    }
    
    return (
        <>
        <CardContainer >
        
        <div className="card">
            <img className='imgAPI' src={props.photo.urls.regular} onClick={showModal} alt=""/>


            <div className='cardButtonsContainer'>

                <div id='addButtonContainer' className='buttonsContainer'>
                    <img className='buttonsImg' src={imgPlusSolid} />
                </div>
                                
                <div id='removeButtonContainer' className='buttonsContainer'>
                    <img className='buttonsImg' src={imgMinusSolid} />
                </div>
            </div>
        </div>
        </CardContainer>

        <dialog id='modal' >
            <h3>Photo info</h3>
            
            <div>
                <img src={imgCrossSolid} onClick={closeModal}/>
            </div>
            

            <label>Description: </label>
            <span>
                {props.photo.description}
            </span>

            <label>Width: </label>
            <span>
                {props.photo.width}
            </span>

            <label>Height: </label>
            <span>
                {props.photo.height}
            </span>


            <label>Likes: </label>
            <span>
                {props.photo.likes}
            </span>

            <label>Date added: </label>
            <span>
                {props.photo.dateAdded}
            </span>


        </dialog>
        </>
        
        
    )
}

export default Card;


const CardContainer = styled.div`
    .card{
        background-color: white;
        display: flex;
        position: relative;
        
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        border: 0.5px solid black;
        height: 300px;
        width: 300px;
        background-color: #fff;
        border-radius: 0.5rem;
        box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 0.5rem;
      

    }

    .imgAPI{
        height: 250px;
        width: 300px;
        border: 0.5px solid black;
    }

    .cardButtonsContainer{
        display: flex;
        position: relative;
        height: 50px;
        width: 100px;
        padding-left: 100px;
        padding-right: 100x;
        margin-bottom: -35px;
        position: relative;     
    }

    .buttonsContainer {
        position: absolute;
        height: 100px;
        width: 100px;
        left: 10px;
        bottom: -35px;

    }

    #removeButtonContainer{
        left: 150px;
    }
    .buttonsImg{
        height: 50px;
        width: 15px;

    }
`