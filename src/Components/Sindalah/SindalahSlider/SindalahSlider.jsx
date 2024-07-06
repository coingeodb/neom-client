import './SindalahSlider.css'


import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

import Slider1 from '../../../Assets/Sindalah/SliderItems/Slider1.png'
import Slider2 from '../../../Assets/Sindalah/SliderItems/Slider2.png'
import Slider3 from '../../../Assets/Sindalah/SliderItems/Slider3.png'
import Slider4 from '../../../Assets/Sindalah/SliderItems/Slider4.png'
import Slider5 from '../../../Assets/Sindalah/SliderItems/Slider5.png'


const SindalahSlider = () => {
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
                    <h1>THE LUXURY COLLECTION RESORT</h1>
                    <p>This ultra-glamorous resort will offer 50 avant-garde rooms and suites, 20 villas with private pools, five distinctive restaurants and a spa and fitness center – in an exquisite island setting.</p>
                </div>
                <div className='sindalahSlider-main-item' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider2})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
                    <h1>AUTOGRAPH COLLECTION RESORT</h1>
                    <p>Featuring 16 villas, each with private pools, and 50 luxury rooms in a resort that is a tranquil retreat. Guests can immerse themselves in nature, art and design, relax at the pool and spa, dine at exquisite restaurants and dip into the Red Sea’s pristine waters from its private beach.</p>
                </div>
                <div className='sindalahSlider-main-item' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider3})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
                    <h1>THE LUXURY COLLECTION ALL-SUITES HOTEL</h1>
                    <p>The impeccably refined all-suites hotel will feature 115 one, two and three-bedroom luxury suites that boast vibrant Marina views.</p>
                </div>
                <div className='sindalahSlider-main-item' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider4})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
                    <h1>APARTMENTS BY MARRIOTT BONVOY</h1>
                    <p>Offering residential-style living, this resort will be made up of 218 apartments, ranging in size from studios to three bedrooms, and filled with all the amenities visitors could need for a longer stay.</p>
                </div>
                <div className='sindalahSlider-main-item' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider5})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
                    <h1>APARTMENTS BY MARRIOTT BONVOY</h1>
                    <p>Offering residential-style living, this resort will be made up of 218 apartments, ranging in size from studios to three bedrooms, and filled with all the amenities visitors could need for a longer stay.</p>
                </div>
            </AwesomeSlider>
        </div>
    )
}
export default SindalahSlider