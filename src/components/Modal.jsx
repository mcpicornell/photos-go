import { useDispatch } from "react-redux";
import imgArrowLeft from '../img/arrow-left-solid.svg'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setFavoritesPhotos, setModal } from "../features/FavoritesSlice";
import {changeDescription} from '../features/FavoritesSlice'

export const Modal = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    

    const nav = useNavigate()

    const closeModal = () => {
            
            nav('/myProfile');
        }
        
        const updateDescription = (event) => {
            event.preventDefault();
            const descriptionValue = document.getElementById('editDescription').value;
            dispatch(setFavoritesPhotos(props.info))
            dispatch(changeDescription({id: props.info.id , description: descriptionValue}));
            dispatch(setModal(props.info))
            nav('/myProfile/info');
          };

          console.log(props.info)

    return (
        <>
        <ModalContainer>
        <div id='modalCardFav' >
            <h3 id='photoInfo' className="containerElements">Photo info</h3>
            
            <div id='arrowImgContainer' className="containerElements">
                <img src={imgArrowLeft} onClick={closeModal}/>
            </div>

            <div id='infoImgContainer' className='containerElements'>
                <img src={props.info.urlsFull} />
            </div>

            <form className="containerElements" onSubmit={updateDescription}>
                <label id='description' >Description</label>
                <span>
                    {props.info.description}
                </span>
                <input id='editDescription' placeholder="Write your description here..." />
                <button>Update Description</button>
            </form>

            <div className="containerElements">
                <label>Width</label>
                <span>
                    {props.info.width}
                </span>
            </div>

            <div className="containerElements">
                <label>Height</label>
                <span>
                    {props.info.height}
                </span>
            </div>

            <div className="containerElements">
                <label>Likes</label>
                <span>
                    {props.info.likes}
                </span>
            </div>
           
            <div className="containerElements">
                <label >Date added</label>
                <span>
                    {props.info.date}
                </span>

            </div>
            
        </div>
        </ModalContainer>
        </>
    )

}

const ModalContainer = styled.section`
    #modalCardFav{        
        margin-top: 5px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        border: solid 1px black;
        width: 225px;
        height: 800px;
        margin-left: 5px;
        display: flex;
        border-radius: 30px;;
        flex-direction: column;
        background-color: white;
    }

    .containerElements{
        margin-left: 20px;
        width: 180px;
        
    }

    #arrowImgContainer{
        position: relative;
    }

    #arrowImgContainer:hover{
        cursor: pointer;
    }

    #arrowImgContainer img{
        position: absolute;
        height: 20px;
        width: 20px;
        
        bottom: 70px;
    }

    #infoImgContainer img{
        height: 185px;
        width: 185px;
        border-radius: 10px;

    }


    h3{
        margin-top: 50px;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        background-color: rgba(90, 114, 98, 1);
        border-radius: 10px 40px 10px 40px;
        color: rgba(252, 247, 247, 1);

    }

    #photoInfo{
        width: 120px;
        padding-left: 15px;
    }

    form{
        display: flex;
        flex-direction: column;
        
    }

    #description{
        width: 80px;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    
    label{
        padding-left: 10px;
        padding-right: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        background-color: rgba(90, 114, 98, 1);
        border-radius: 40px 10px 40px 10px;
        color: rgba(252, 247, 247, 1);
    }

    span{
        display: flex;
        flex-direction: column;
        line-height: 20px;
        padding-left: 10px;

    }

    input{
       border-style: none;
       height: 20px;
       margin-top: 10px;
       margin-bottom: 10px;
       border-bottom: 1px solid black;
       
    }

    button{
        border-radius: 5px;
        margin-top: 5px;
        margin-bottom: 20px;
        width: 100px;
        margin-left: 45px;
        background-color: #52a1eb;

    }

 

`

export default Modal;