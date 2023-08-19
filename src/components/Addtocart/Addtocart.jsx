import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './Addtocart.css'
import { useState } from 'react';
import icon from '../../assets/icons/addcart.png'

function Itemcount({stock, onAddToCart, initial}) {
    let [count, setCount] = useState(parseInt(initial))
    
    function handleAdd() {
        if (count < stock) {
            setCount(count+1)
        }
    }

    function handleSubstract(){
        if (count > initial){
            setCount(count-1)
        }
    }

    return (
        <div className='item-count__container'>
            <div className='flex-stock'>
                <h4>Stock disponible:</h4>
                <div className='item-detail__stock-container'>
                    <h4> {stock}</h4>
                </div>
                <h4 className='item-detail__stock-empty'>Producto Agotado </h4>
            </div>
            <div className='item-count__inner'>
                <div className='item-count__minus'>
                    <button className='item-count__btn'><RemoveIcon onClick={handleSubstract}/></button>
                </div>
                <div className='item-count__number'>{count}</div>
                <div className='item-count__plus'>
                    <button className='item-count__btn'><AddIcon onClick={handleAdd} /></button>
                </div>
            </div>
            <div className='item-count__add-container'>
                <div className='flexbtn'>
                    <button className='item-count__btn-add' onClick={() => onAddToCart(count)}>
                        <img className='item-count__cart-icon' src={icon} alt='carrito'/>agregar al carrito
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Itemcount