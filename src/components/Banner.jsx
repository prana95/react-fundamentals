import logo from '../assets/GloboLogo.png'
import {logo as logoClass} from './Banner.module.css'

const subTitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
}

const Banner = ({headerText}) =>{

    return (
        <header className='row mb-4'>
            <div className='col-5'>
                <img src= {logo} className={logoClass}  alt="logo" />
            </div>
            <div className='col-7 mt-5' style={subTitleStyle}>
                {headerText}
            </div>
        </header>
    );
    
}

export default Banner;