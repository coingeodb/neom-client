// import './SindalahSlider.css'


import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

import Slider1 from '../../../Assets/Sindalah/SliderItems2/Slider1.png'
import Slider2 from '../../../Assets/Sindalah/SliderItems2/Slider2.png'
import Slider3 from '../../../Assets/Sindalah/SliderItems2/Slider3.png'
import Slider4 from '../../../Assets/Sindalah/SliderItems2/Slider4.png'


const SindalahSlider2 = () => {
    return(
        <div className='sindalahSlider-main' >
            <AwesomeSlider 
                animation="cubeAnimation" 
                bullets={false}
                organicArrows={false}
                buttonContentRight={<ArrowCircleRightOutlinedIcon fontSize='large' />}
                buttonContentLeft={<ArrowCircleLeftOutlinedIcon fontSize='large' />}
                className='sindalahSlider-main-item-slider'
            >
                <div className='sindalahSlider-main-item' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider1})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
                    <h1>SINDALAH YACHT CLUB</h1>
                    <p>A haven for yacht enthusiasts, the Yacht Club will offer world-class amenities and fine dining onboard and in the lounge, as well as dockage, fuelling and repair services for yachts of all sizes.</p>
                </div>
                <div className='sindalahSlider-main-item' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider2})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
                    <h1>SINDALAH GOLF CLUB</h1>
                    <p>Offering an unparalleled golfing experience, the Golf Club features a 6,474-yard course with sea views. Golfers can enjoy two nine-hole experiences, a 280-meter driving range and premium technologies.</p>
                </div>
                <div className='sindalahSlider-main-item' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider3})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
                    <h1>SINDALAH BEACH CLUB</h1>
                    <p>Set on the water’s edge, the Beach Club will be home to a relaxing pool, high-end restaurant and private dining facilities. After dark, regular DJ sets will provide an al-fresco soundtrack to your night.</p>
                </div>
                <div className='sindalahSlider-main-item' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider4})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
                    <h1>SINDALAH SPORTS CLUB</h1>
                    <p>The state-of-the-art sports club offers water sports including kite surfing, wakeboarding and windsurfing, as well as a dive center. In addition to land activities such as gymnasium, tennis and sports courts.</p>
                </div>
            </AwesomeSlider>
        </div>
    )
}
export default SindalahSlider2;