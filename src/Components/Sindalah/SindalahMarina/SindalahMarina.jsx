import './SindalahMarina.css'


import Image1 from '../../../Assets/Sindalah/SindalahMarinaImages/Image1.png'
import Image2 from '../../../Assets/Sindalah/SindalahMarinaImages/Image2.png'


const SindalahMarina = () => {
    return(
        <div className='sindalahMarina-main' >
            <div className='sindalahMarina-main-top' >
                <div className='sindalahMarina-main-content-container' >
                    <h2>SINDALAH MARINA</h2>
                    <p>Ideally located in the Red Sea and operated by industry leader IGY Marinas, Sindalah's 86-berth marina and 75 offshore buoys will cater to the world’s most spectacular superyachts of up to 180 meters in size.</p>
                </div>
                <div className='sindalahMarina-main-image-container' >
                    <img src={Image1} alt='SindalaMarina' />
                </div>
            </div>

            <div className='sindalahMarina-main-bottom' >

                <div className='sindalahMarina-main-image-container' >
                    <img src={Image2} alt='SindalaMarina' />
                </div>
                <div className='sindalahMarina-main-content-container' >
                    <h2>THE VILLAGE & PROMENADE</h2>
                    <p>The vibrant heart of Sindalah, the village will be a social space for experiential dining and late-night entertainment. While the luxurious promenade will be open 24 hours a day, seven days a week.</p>
                </div>
                
            </div>
        </div>
    )
}
export default SindalahMarina;