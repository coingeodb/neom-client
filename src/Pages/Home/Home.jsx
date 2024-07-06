import './Home.css'


import HomeBanner from '../../Components/Home/HomeBanner/HomeBanner';
import OurVision from '../../Components/Home/OurVision/OurVision';
import EconomicEngine from '../../Components/Home/EconomicEngine/EconomicEngine';
import OurPurpose from '../../Components/Home/OurPurpose/OurPurpose';
import UniqueEnvironment from '../../Components/Home/UniqueEnvironment/UniqueEnvironment';
import ContactUs from '../../Components/ContactUs/ContactUs'

const Home = () => {
    return(
        <div>
            <HomeBanner/>
            <OurVision/>
            <EconomicEngine/>
            <OurPurpose/>
            <UniqueEnvironment/>
            <ContactUs/>
        </div>
    )
}
export default Home;