

export function Card(){
    return (
        <div className="card">
            <img src="../img/logo.png" alt=""/>
            <div className='cardButtons'>
                {/* https://fontawesome.com/icons/plus?f=classic&s=solid */}
                <button className='add'><img src="../img/minus-solid.svg" /></button>
                
                {/* https://fontawesome.com/icons/minus?f=sharp&s=light */}
                <button className='remove'><img src="../img/minus-solid.svg"/></button>
            </div>
        </div>
    )
}

export default Card;

