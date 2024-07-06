import './Card2.css'


const Card2 = ({image, title, body}) => {
    return(
        <div className='card2-main' >
            <div className='card2-main-image' >
                <img src={image} alt={title} /> 
            </div>
            <div className='card2-main-title' >{title}</div>
            <div className='card2-main-body' >{body}</div>
        </div>
    )
}
export default Card2;