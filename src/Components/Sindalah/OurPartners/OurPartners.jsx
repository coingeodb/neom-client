import './OurPartners.css'


import Mariott from '../../../Assets/Sindalah/Partners/Mariott.png'
import FourSeasons from '../../../Assets/Sindalah/Partners/FourSeasons.png'
import Igy from '../../../Assets/Sindalah/Partners/Igy.png'
import Img from '../../../Assets/Sindalah/Partners/Img.png'
import Mdl from '../../../Assets/Sindalah/Partners/Mdl.png'
import Dive from '../../../Assets/Sindalah/Partners/Dive.png'
import Burgess from '../../../Assets/Sindalah/Partners/Burgess.png'
import Bwa from '../../../Assets/Sindalah/Partners/Bwa.png'
import MB92 from '../../../Assets/Sindalah/Partners/MB92.png'
import Camper from '../../../Assets/Sindalah/Partners/Camper.png'

const OurPartners = () => {
    return(
        <div className='ourPartners-main' >
            <div className='ourPartners-main-head' >Our Partners</div>
            <div className='ourPartners-main-partners' >
                <img src={Mariott} alt='' />
                <img src={FourSeasons} alt='' />
                <img src={Igy} alt='' />
                <img src={Img} alt='' />
                <img src={Mdl} alt='' />
                <img src={Dive} alt='' />
                <img src={Burgess} alt='' />
                <img src={Bwa} alt='' />
                <img src={MB92} alt='' />
                <img src={Camper} alt='' />
            </div>
        </div>
    )
}
export default OurPartners;