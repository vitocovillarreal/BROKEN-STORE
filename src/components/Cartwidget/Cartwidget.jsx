import './Cartwidget.css';
import cartIcon from '../../assets/icons/cart.png'
import { useContext, useState } from 'react' 
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Popper from '@mui/material/Popper';
import '../Cart/Cart.css'
import Cartmini from '../Cart/Cartmini'

function Cartwidget() {
    const { cart } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => { 
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;  
  
    function getCartNumber(){
        let number = cart.reduce((acc, el) => acc + el.cantidad, 0)
        console.log(number)
        return number
    }

    return ( 
        <div className='cart-widget__container-outer'>
            <div className='cart-widget__container-inner' onMouseEnter={handleClick} onMouseLeave={handleClick} >
                    <div className='cart-widget__outer'>
                        <div className='cart-widget__inner'>
                            <Link to='./cart'  className='cart-widget__container' >
                                <div className='cart-widget__image'>
                                        <img src={cartIcon} alt='carrito' />
                                        <div className='cart-widget__counter'>
                                            <h2>{getCartNumber()}</h2>
                                        </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                <Popper  className='cart-widget__popper' onClick={handleClick} placement='bottom-end' id={id} open={open} anchorEl={anchorEl} modifiers={[
    {
      name: 'flip',
      enabled: false,
    },
    {
      name: 'preventOverflow',
      enabled: true,
      options: {
        altAxis: true,
        altBoundary: true,
        tether: true,
        rootBoundary: 'document',
      },
    },
    {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, -10],
        },
    },
    ]} >
                    <Cartmini className='cart-widget__popper' ></Cartmini> 
                </Popper>
            </div>
        </div>
    )
}

export default Cartwidget;