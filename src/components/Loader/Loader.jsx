import loading from '../../assets/icons/loading.png'
import './Loader.css'
function Loader(){

    return (
        <div className='loader__container'>
            <div className='loader__inner'>
                <img src={loading} alt="loading" className='loader__image animation-grow'/>
            </div>
        </div>
    )
}

export default Loader