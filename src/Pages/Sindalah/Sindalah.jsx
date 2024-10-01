import './Sindalah.css'


import SindalahBanner from '../../Components/Sindalah/SindalahBanner/SindalahBanner';
import TimelineContainer from '../../Components/TimelineContainer/TimelineContainner';
import DiscoverSindalah from '../../Components/Sindalah/DiscoverSindalah/DIscoverSindalah';
import AnimatedSlide from '../../Components/Sindalah/AnimatedSlide/AnimatedSlide';
import SindalahSlider from '../../Components/Sindalah/SindalahSlider/SindalahSlider';
import SindalahMarina from '../../Components/Sindalah/SindalahMarina/SindalahMarina';
import InvestInSindalah from '../../Components/Sindalah/InvestInSindalah/InvestInSindalah';
import OurPartners from '../../Components/Sindalah/OurPartners/OurPartners';

import ContactUs from '../../Components/ContactUs/ContactUs';
import SindalahSlider2 from '../../Components/Sindalah/SindalahSlider2/SindalahSlider2';
import ProgressSlider from '../../Components/Sindalah/ProgressSlider/ProgressSlider';
const Sindalah = () => {
    return(
        <div className='sindalah-main' >
            <SindalahBanner/>
            <TimelineContainer
                title='AN ESCAPE LIKE NO OTHER'
                body="Sindalah will be NEOM’s first luxury island and yacht club destination. Providing a scenic
                    gateway to the Red Sea, it will be an exciting and attractive tourism location. With a
                    perfect year-round climate, Sindalah will become a global yachting hub and a sustainable
                    luxury destination featuring world-class cuisine, shopping and wellness. Spread over
                    840,000 square meters, this island escape will offer a fine hospitality and unforgettable
                    experiences above and below the water, while conserving the area's natural beauty."
                timlineText1='HOME'
                timlineText2='INVEST'
                timlineText3='SINDALAH'

            />
            <DiscoverSindalah/>
            <AnimatedSlide/>
            <SindalahSlider/>
            <SindalahMarina/>
            <SindalahSlider2/>
            <InvestInSindalah/>
            <ProgressSlider/>
            <OurPartners/>
            <ContactUs/>
        </div>
    )
}
export default Sindalah;
