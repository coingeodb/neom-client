import './Header.css'
import Logo from '../../Assets/Main/Logo.png'

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


import WhiteButtonMedium from '../WhiteButton/WhiteButtonMedium';

const Header = () => {
    return(
        <div className='header-main' >
            <div><img src={Logo} alt='logo' /></div>
            <div className='header-main-navLinks' >
                <div className='header-main-navLinks-link' >HOME<KeyboardArrowDownRoundedIcon/></div>
                <div className='header-main-navLinks-link' >INVEST<KeyboardArrowDownRoundedIcon/></div>
                <div className='header-main-navLinks-link' >ACCOUNT<KeyboardArrowDownRoundedIcon/></div>
            </div>
            <div className='header-main-getInTouch' >
                <div className='header-main-getInTouch-link' ><SearchRoundedIcon/></div>
                <div className='header-main-getInTouch-link' >ENGLISH<KeyboardArrowDownRoundedIcon/></div>
                <div><WhiteButtonMedium title='GET IN TOUCH' /></div>
            </div>
        </div>
    )
}
export default Header;