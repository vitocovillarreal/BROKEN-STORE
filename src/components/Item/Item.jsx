import './Item.css'
import {Link} from 'react-router-dom'

function Item(props){
    let {price, title, img, stock} = props
    const urlProducto = `/producto/${props.id}`
    
    return (
        <Link to={urlProducto} className='card-container'>
            <div className='card'>
                <div className='card-outer'>
                    <div className='card-inner'>
                        <div className='card__image-container'>
                            <img className='card__image' src={img} alt='card img' />
                        </div>
                        <div className='card__info-container'>
                            <div className='card__title-container'>
                                <h3 className='card__title'>{title}</h3>
                            </div>
                            <div className='card__price-stock-container'>
                                <div className='card__agotado-container'>
                                    <h4 className='card__agotado'>{stock === 0 ? 'Agotado' :'' }</h4>
                                </div>
                                <div className='card__price-container'>
                                    <h3 className='card__price'>{price}</h3>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Item