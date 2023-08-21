import { useState, useContext  } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { createBuyOrder } from '../../services/firestore'
import toast, { Toaster } from 'react-hot-toast';
import {getFirestore, doc, updateDoc} from 'firebase/firestore'
import Loader from '../Loader/Loader'
import './Checkout.css'

function Checkout(){
    const [dataForm, setDataForm] = useState({nombre:'', apellido:'', celular:'', email:'', confirmEmail:''})
    const { cart, getItemPrice, emptyCart, getOrderId} = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function inputChangeHandler(event) {
        let inputName = event.target.name
        let value = event.target.value

        const newDataForm = {...dataForm}
        newDataForm[inputName] = value
        setDataForm(newDataForm)
    } 

    function handleCheckout(event) {
        event.preventDefault()
        let arroba = dataForm.email.includes('@')
        const thetoast = (errormsg) => {
            return toast
            .error(errormsg, {
              iconTheme: {
                primary: '#b4cf0a',
              },
              style: {
                borderRadius: '9',
                background: '#2d2d2f',
                maxWidth: '100%',
                color: '#ffffff',
                textAlign: 'center',
              },
            })
            .then(() => {return});
        }
        if(dataForm.name.length < 3){  
            thetoast(`El Nombre debe contener 3 o más caracteres!`)
        }
        if(dataForm.phone.trim().length !== 9){
            thetoast(`El teléfono debe contener 9 digitos!`)
        }
        if(arroba === false){
            thetoast(`Email no valido!`)
        }
        if(dataForm.email !== dataForm.confirmEmail){
            thetoast(`Los Email no coinciden!`)
        }
        
        const orderData = {
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total: getItemPrice()
        }
        
        createBuyOrder(orderData).then( orderid => {
            getOrderId(orderid)
            emptyCart()
            updateStock()
            setIsLoading(true)
            navigate(`/checkout/${orderid}`)
        })
        .catch((error) => {
            console.log(error);
          })
    }
    const updateStock = () => {
        cart.forEach((element) => {
          const stock = {
            stock: element.stock - element.cantidad,
          };
          const db = getFirestore();
          const queryUpdate = doc(db, 'productos', element.id);
          updateDoc(queryUpdate, stock)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      };

    return (
        <div className='checkout__container'>
            <div className='form__container'>
                <form onSubmit={handleCheckout} className='form'>
                    <for className='form__item'>
                        <label>
                            <h3>Nombre</h3>
                        </label>
                        <input 
                            value={dataForm.name}
                            onChange={inputChangeHandler}
                            name='name'
                            type='text'
                            placeholder='nombre'
                            pattern='.{3,}'
                            title='3 o más caracteres'
                            errormessage='nombre no válido'
                            required 
                        />
                    </for>
                    <div className='form__item'>
                        <label>
                            <h3>Apellido</h3>
                        </label>
                        <input 
                            value={dataForm.apellido}
                            onChange={inputChangeHandler}
                            name='apellido'
                            type='text'
                            placeholder='apellido'
                            required 
                        />
                    </div>
                    <div className='form__item'>
                        <label>
                            <h3>Telefono</h3>
                        </label>
                        <input 
                            value={dataForm.phone}
                            onChange={inputChangeHandler}
                            name='phone'
                            type='text'
                            placeholder='telefono'
                            errormessage='numero no válido'
                            required 
                        />
                    </div>
                    
                    <div className='form__item'>
                        <label>
                            <h3>E-mail</h3>
                        </label>
                        <input 
                            value={dataForm.email}
                            onChange={inputChangeHandler}
                            name='email'
                            type='text'
                            placeholder='email'
                            errormessage='email no válido'
                            required 
                        />
                    </div>
                    <div className='form__item'>
                        <label>
                            <h3>Confirma tu E-mail</h3>
                        </label>
                        <input 
                            value={dataForm.confirmEmail}
                            onChange={inputChangeHandler}
                            name='confirmEmail'
                            type='text'
                            placeholder='confirmEmail'
                            required 
                        />
                    </div>
                    <div className='form__btn-container'>
                        <button type='submit' onClick={handleCheckout} className='btn'><h3>Finalizar Compra</h3></button>
                    </div>
                    <Toaster
                containerStyle={{
                  top: 10,
                }}
                toastOptions={{
                  duration: 4000,
                }}
              />
                </form>
                {isLoading && <Loader/>}
            </div>
        </div>
    )
}

export function Checkoutend() {
    const {orderId } = useContext(CartContext)
    return (
        <div className='ty__container'>
            <div>
                <h2>
                    Pedido realizado!
                </h2>
            </div>
            <div>
                <h3>Gracias por su compra, su número de orden es: {orderId}</h3>
            </div>
            <div>
                <h2>Cargando...</h2>
            </div>
        </div>
    );
}

export default Checkout