import '../Header/Header.css';
import * as React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import Cartwidget from '../Cartwidget/Cartwidget'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
    return (
        <div className="App-header__nav-container">
            <nav className="App-header__nav">
                <ul>
                    <li className="nav__sections">
                        <Link to="/products">
                            <h3 className="nav__titles">Productos{<ArrowDropDownIcon/>}</h3>
                        </Link>
                        <ul className="dropdown">
                            <li><Link to="category/Poleras" >Poleras</Link></li>
                            <li><Link to="category/Polerones">Polerones</Link></li>
                            <li><Link to="category/Pantalones">Pantalones</Link></li>
                            <li><Link to="category/probioticos">Accesorios</Link></li>
                        </ul>
                    </li>
                    <li className="nav__sections"><Link to="/envios"><h3 className="nav__titles">Envíos</h3></Link></li>
                    <li className="nav__sections"><Link to="/ubicacion"><h3 className="nav__titles">Ubicación</h3></Link></li>
                    <li className="nav__sections"><Link to="/about"><h3 className="nav__titles">Sobre nosotros</h3></Link></li>
                </ul>
            </nav>
            <Cartwidget/>
        </div>
    )
}

export default Navbar;