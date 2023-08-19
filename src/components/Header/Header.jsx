import logo from '../../assets/logo1.png'
import './Header.css';
import Navbar from '../Navbar/Navbar'
import Temporarydrawer from '../Navbar/Navbardrawer'
import Cartwidget from '../Cartwidget/Cartwidget';
function Header() {

    return (
        <div className='header-container'>
            <header className='header'>
                <div className='header__logo-container'>
                    
                    <a className='header__logo-link' href='/'>
                        <img src={logo} className='header__logo' alt='logo2' />
                    </a>
                    <div className='header__btns'>
                        <div className='header__burger'>
                            <Temporarydrawer className='header__icon-burger'/>
                        </div>
                        <div className='header__cartwidget-container'>
                            <Cartwidget/>
                        </div>
                    </div>


                </div>
                
                <Navbar />
            </header>
        </div>
    );
}

export default Header;