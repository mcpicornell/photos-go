import {useSelector } from "react-redux";
import {Modal} from '../components/Modal'
import { getModaldata } from "../features/FavoritesSlice";

export function InfoPage(){

    const modalData = useSelector(getModaldata);

    return(
        <>

        <Modal info={modalData}/> 
    
        </>
    )
}