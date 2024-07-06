import './EconomicEngine.css'


import Image1 from '../../../Assets/Home/EconomicEngine/1.svg'
import Image2 from '../../../Assets/Home/EconomicEngine/2.svg'
import Image3 from '../../../Assets/Home/EconomicEngine/3.svg'
import Image4 from '../../../Assets/Home/EconomicEngine/4.svg'
import Image5 from '../../../Assets/Home/EconomicEngine/5.svg'
import Image6 from '../../../Assets/Home/EconomicEngine/6.svg'
import Image7 from '../../../Assets/Home/EconomicEngine/7.svg'
import Image8 from '../../../Assets/Home/EconomicEngine/8.svg'
import Image9 from '../../../Assets/Home/EconomicEngine/9.svg'
import Image10 from '../../../Assets/Home/EconomicEngine/10.svg'
import Image11 from '../../../Assets/Home/EconomicEngine/11.svg'
import Image12 from '../../../Assets/Home/EconomicEngine/12.svg'
import Image13 from '../../../Assets/Home/EconomicEngine/13.svg'
import Image14 from '../../../Assets/Home/EconomicEngine/14.svg'

const EconomicEngine = () => {
    return(
        <div className='economicEngine-main' >
            <div className='economicEngine-main-title' >AN ECONOMIC ENGINE</div>
            <div className='economicEngine-main-body' >
                These distinct regions and sectors will be fueled by USD 500 billion from the Public Investment Fund
                of the Kingdom of Saudi Arabia and local and international investors. NEOM will become a
                community powered by talent and diversity across 14 sectors.
            </div>
            <div className='economicEngine-main-image-container' >
                <img src={Image1} alt='Economic Engine' />
                <img src={Image2} alt='Economic Engine' />
                <img src={Image3} alt='Economic Engine' />
                <img src={Image4} alt='Economic Engine' />
                <img src={Image5} alt='Economic Engine' />
                <img src={Image6} alt='Economic Engine' />
                <img src={Image7} alt='Economic Engine' />
                <img src={Image8} alt='Economic Engine' />
                <img src={Image9} alt='Economic Engine' />
                <img src={Image10} alt='Economic Engine' />
                <img src={Image11} alt='Economic Engine' />
                <img src={Image12} alt='Economic Engine' />
                <img src={Image13} alt='Economic Engine' />
                <img src={Image14} alt='Economic Engine' />
            </div>
        </div>
    )
}
export default EconomicEngine;