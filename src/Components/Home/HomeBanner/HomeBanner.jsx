import './HomeBanner.css'
import HomeMain from '../../../Assets/Home/HomeBanner.mp4'

import WhiteButtonLarge from '../../WhiteButton/WhiteButtonLarge'
const HomeBanner = () => {
    return(
        <div className='homeBanner-main' >
            <video autoPlay loop muted className='bg-video'>
                <source  src={HomeMain}  type='video/mp4'/>
            </video>

            <div className='homeBanner-main-container' >
                <h1>WHAT IS NEOM ?</h1>

                <div className='homeBanner-main-button' >
                    <WhiteButtonLarge title='CREATE ACCOUNT' />
                </div>
            </div>
            
        </div>
    )
}
export default HomeBanner;