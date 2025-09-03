import { createContext, useContext, useState } from "react"

// create context
const cartContext = createContext({});

// use context
export const UseCartContext = () => {
    return useContext(cartContext);
}

// create context provider
export const CartContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    function getItems(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0 
    }

    function increaseQty(id) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return[...currentItems, { id, quantity: 1}]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseQty(id) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id != id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeItem(id) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id != id)
        })
    }

    return(
        <cartContext.Provider value={{ removeItem, decreaseQty, increaseQty, getItems, cartItems, cartQuantity }}>
            {children}
        </cartContext.Provider>
    )
}

