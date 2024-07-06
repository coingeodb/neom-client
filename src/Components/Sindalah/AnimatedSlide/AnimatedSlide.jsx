import './AnimatedSlide.css'
import {useEffect} from 'react'


import Slider1 from '../../../Assets/Sindalah/FocusSlider/Slider1.webp'
import Slider2 from '../../../Assets/Sindalah/FocusSlider/Slider2.webp'
import Slider3 from '../../../Assets/Sindalah/FocusSlider/Slider3.webp'
import Slider4 from '../../../Assets/Sindalah/FocusSlider/Slider4.webp'

const AnimatedSlide = () =>{

    useEffect(()=>{
        const panels = document.querySelectorAll(".panel");

        panels.forEach((panel) => {
        panel.addEventListener("mouseover", function () {
            panels.forEach((some) => {
            some.classList.remove("active");
            panel.classList.add("active");
            });
        });
        panel.addEventListener("mouseout", () => {
            panel.classList.remove("active");
        });
        });
    }, [])

    return(
        <div className="container">
            <div
                className="panel"
                style={{
                'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider1})`,
                }}
            >
                <div className='panel-top' >
                    <div className='panel-top-side' ></div>
                    <h1>WORLD-CLASS LUXURY</h1>
                </div>
                <div className='panel-body'>
                    Home to three breathtaking hotels, offering 413 rooms – including 88 villas – as well as 333 serviced apartments, Sindalah will combine world-class hospitality, fine dining and curated events in one perfect destination. Pulsing from day through to night, the enchanting island is set against spectacular views.
                </div>
            </div>
            <div
                className="panel"
                style={{
                'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider2})`,
                }}
            >
                <div className='panel-top' >
                    <div className='panel-top-side' ></div>
                    <h1>GLOBAL GATEWAY</h1>
                </div>
                <div className='panel-body'>
                    NEOM's entry point in the Red Sea, located 17 hours away by boat from most Mediterranean yachting destinations, makes it a perfect hub for the European, Saudi and GCC yachting communities. The close proximity to Europe and the Mediterranean means easy access to our stunning 86-berth marina and the 75 additional offshore buoys for super yachts.
                </div>

            </div>
            <div
                className="panel"
                style={{
                'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider3})`,
                }}
            >
                <div className='panel-top' >
                    <div className='panel-top-side' ></div>
                    <h1>FIRST-CLASS EXPERIENCES</h1>
                </div>
                <div className='panel-body'>
                    Sindalah will be a 840,000m² playground for the world's luxury travelers. With sophisticated cultural events, adrenaline-fueled sporting spectacles and glamorous social happenings, our exquisite island will always deliver something unique.
                </div>
            </div>
            <div
                className="panel"
                style={{
                'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Slider4})`,
                }}
            >
                <div className='panel-top' >
                    <div className='panel-top-side' ></div>
                    <h1>GAME-CHANGING DESIGN</h1>
                </div>
                <div className='panel-body'>
                    A tech-driven destination where laidback island chic meets new-age luxury, Sindalah will be a responsibly designed haven built with great care for the environment. Designed by world-leading architects including Luca Dini, it will be positioned at the forefront of modern aesthetics.
                </div>
            </div>
            
               
            
            </div>      
    )
}
export default AnimatedSlide;