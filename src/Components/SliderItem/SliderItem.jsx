import './SliderItem.css'


const SliderItem = ({title, body}) => {
    return(
        <div className='sliderItem-main' >
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}
export default SliderItem;