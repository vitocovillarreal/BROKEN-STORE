import {createContext, useState, useMemo } from 'react'

export const CartContext = createContext()

const { Provider } = CartContext

function MyProvider({children}) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) ?? [])
    const [orderId, setOrderId] =useState()
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    const getOrderId = (data) => {
        return setOrderId(data)
    }

    const addItem = (item, cantidad) => {
        const newItem = {...item, cantidad}
        if (isInCart(newItem.id)) {
            const findProduct =cart.find(prod => prod.id === newItem.id)
            const productIndex = cart.indexOf(findProduct) 
            const auxArray = [...cart]
            auxArray[productIndex].cantidad += cantidad
            setCart(auxArray)

        } else {
            setCart([...cart, newItem])
        }
    }
    const emptyCart  = () => { 
        return setCart([])  
    }
    const deleteItem  = (id) => {   
        return setCart(cart.filter(prod => prod.id !== id))
    }
    const getItemQty  = () => {
        return cart.reduce((acc, x) => acc += x.cantidad, 0)
    }
    const getItemPrice  = () => { 
        return cart.reduce((acc, x) => acc += x.price * x.cantidad, 0)
    }
    useMemo(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]); // localstorage
    return (
            <Provider value={{cart, orderId, isInCart, addItem, emptyCart, deleteItem, getItemPrice, getItemQty, getOrderId }}>
                {children}
            </Provider>
    )
}

export default MyProvider   