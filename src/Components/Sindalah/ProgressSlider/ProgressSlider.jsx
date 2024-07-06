import './ProgressSlider.css'
import Slider from 'react-slick'

import Slider1 from '../../../Assets/Sindalah/FocusSlider/Slider1.webp'


const ProgressSlider = () => {

    const settings = {
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        dotsClass: "slider-dots"
    }
    

    return(
       <div>
            <Slider {...settings}>
                <div style={{backgroundImage: `url(${Slider1})`}} >
                    Apple
                </div>
                <div style={{backgroundImage: `url(${Slider1})`}} >
                    Apple
                </div>
                <div style={{backgroundImage: `url(${Slider1})`}} >
                    Apple
                </div>
            </Slider>
       </div>
    )
}
export default ProgressSlider;