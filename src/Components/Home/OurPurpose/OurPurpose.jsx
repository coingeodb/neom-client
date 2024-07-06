import './OurPurpose.css'


import Card2 from '../../Card2/Card2'



import Image1 from '../../../Assets/Home/OurPurpose/Vision.svg'
import Image2 from '../../../Assets/Home/OurPurpose/Values.svg'


const OurPurpose = () => {
    return(
        <div className='ourVision-main ourPurpose-main' >
            <div className='ourVision-main-head' >OUR VISION</div>
            <div className='ourVision-main-subHead' >NEOM is the land of the future, with an ambition to redefine
                livability, business and conservation at its heart.
            </div>
            <div className='ourVision-main-card-container' >
                <Card2
                    image={Image1}
                    title='BUSINESS'
                    body="  NEOM is a global hub open for
                            business. We're building a future-
                            oriented and sustainable economy,
                            pioneering new benchmarks for
                            talent and enterprise."
                />
                <Card2
                    image={Image2}
                    title='LIVABILITY'
                    body="  NEOM is reimagining urbanism to be
                            people-first and nature-friendly. THE
                            LINE and the connectivity of our
                            regions will be a model for the
                            future- setting new global standards
                            for livability."
                />
            </div>
        </div>
    )
}
export default OurPurpose;