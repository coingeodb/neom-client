import './button.css'


const WhiteButtonMedium = (props) => {
    return(
        <button className='whiteButtonMedium-main' onClick={props.onClickFunction} >
            {props.title}
        </button>
    )
}
export default WhiteButtonMedium;