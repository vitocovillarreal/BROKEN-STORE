import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import './Navbardrawer.css';

export default function Temporarydrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width:  290, }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <nav className='drawer__nav'>
        <ul>
        <li className="nav__sections">
                        <Link to="/products">
                            <h3 className="nav__titles">Productos{<ArrowDropDownIcon/>}</h3>
                        </Link>
                        <ul className="dropdown">
                            <li><Link to="category/Poleras" >Poleras</Link></li>
                            <li><Link to="category/Polerones">Polerones</Link></li>
                            <li><Link to="category/Pantalones">Pantalones</Link></li>
                            <li><Link to="category/Accesorios">Accesorios</Link></li>
                        </ul>
                    </li>
            <li><Link to="/envios"><h2 className='drawer__title'>Envíos</h2></Link></li>
            <li><Link to="/ubicacion"><h2 className='drawer__title'>Ubicación</h2></Link></li>
            <li><Link to="/about"><h2 className='drawer__title'>About</h2></Link></li>
        </ul>
      </nav>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className='miau' fontSize='large' sx={{color: 'rgb(126, 128, 121)'}} /></Button>
          <Drawer
          
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

