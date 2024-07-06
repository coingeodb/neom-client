import {useEffect} from 'react'
import AOS from 'aos'

import './Card1.css';
import {Link} from 'react-router-dom'


const Card1=(props)=>{

    useEffect(()=>{
        AOS.init({
            once: true,
            // disable: "phone",
            duration: 1000,
            easing: "ease-out-cubic",
        });
    },[])
    return(
        <div className='card1-main' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
            <div className='card1-main-c1' ><img src={props.image} alt={props.head1} /></div>
            <div className='card1-main-c2' >{props.head1}</div>
            <div className='card1-main-c3' >{props.head2}</div>
            <div className='card1-main-c4' >{props.bodyL1}<br/>{props.bodyL2}<br/>{props.bodyL3}<br/>{props.bodyL4}<br/>{props.bodyL5}<br/>{props.bodyL6}</div>
            <div className='card1-main-c5' ><Link to={props.buttonLink} ><button>APPLY</button></Link></div>
        </div>
    )
}
export default Card1;