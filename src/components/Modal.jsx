export const Modal = (props) => {

let modalProps = props.map();

    return (
        <>
        <dialog>
            <h3>Photo info</h3>

            <label>Width: </label>
            <span>
                {modalProps.width}
            </span>

            <label>Height: </label>
            <span>
                {modalProps.height}
            </span>


            <label>Likes: </label>
            <span>
                {modalProps.likes}
            </span>

            <label>Date added: </label>
            <span>
                {modalProps.dateAdded}
            </span>


        </dialog>
        </>
    )

}