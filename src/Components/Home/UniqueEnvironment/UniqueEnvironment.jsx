import './UniqueEnvironment.css'


import Image1 from '../../../Assets/Home/UniqueEnvironment/1.svg'
import Image2 from '../../../Assets/Home/UniqueEnvironment/2.svg'
import Image3 from '../../../Assets/Home/UniqueEnvironment/3.svg'
import Image4 from '../../../Assets/Home/UniqueEnvironment/4.svg'
import Image5 from '../../../Assets/Home/UniqueEnvironment/5.svg'

const UniqueEnvironment = () => {
    return(
        <div className='economicEngine-main uniqueEnvironment-main' >
            <div className='economicEngine-main-title' >A UNIQUE ENVIRONMENT</div>
            <div className='economicEngine-main-image-container uniqueEnvironment-main-image-container' >
                <img src={Image1} alt='Economic Engine' />
                <img src={Image2} alt='Economic Engine' />
                <img src={Image3} alt='Economic Engine' />
                <img src={Image4} alt='Economic Engine' />
                <img src={Image5} alt='Economic Engine' />
            </div>
        </div>
    )
}
export default UniqueEnvironment;