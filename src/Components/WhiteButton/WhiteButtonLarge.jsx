import './button.css'


const WhiteButtonLarge = (props) => {
    return(
        <button className='whiteButtonLarge-main' onClick={props.onClickFunction} >
            {props.title}
        </button>
    )
}
export default WhiteButtonLarge;