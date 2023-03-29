import imgMinusSolid from '../img/minus-solid.svg'
import imgPlusSolid from '../img/plus-solid.svg'
import imgLogo from "../img/logo.png"
import styled from 'styled-components'


// const imgMinusSolid = ("../img/minus-solid.svg");
// const imgPlusSolid = ("C:/Users7mcpic/OneDrive/Documentos/OxygenAcademy/Repositiorios/RepositoriosGitHubMarc/photos-go/src/img/plus-solid.svg");

export function Card(){
    return (
        <>
        <CardContainer>
        
        <div className="card">
        <img className='imgAPI' src={imgLogo} alt=""/>


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
        </>
        
        
    )
}

export default Card;


const CardContainer = styled.div`
    .card{
        background-color: white;
        display: flex;
        position: relative;
        padding: 10px;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        border: 5px solid black;
        height: 300px;
        width: 300px;
      

    }

    .imgAPI{
        height: 250px;
        width: 300px;
        border: 5px solid black;
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
        width: 50px;

    }
`