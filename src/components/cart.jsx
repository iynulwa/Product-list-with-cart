import { UseCartContext } from "../context/cartContext";
import CartItem from "./cartItem";
import Modal from "./modal";
import data from '../data/data.json'
import formatCurrency from "../utilities/formatCurrency";
import { useState } from "react";

function Cart() {

    // get context
    const { getItems, cartQuantity, cartItems, removeItem } = UseCartContext();

    // get id
    const cartProducts = cartItems.map(item => {
        return data.find(product => product.id === item.id);
    });

    // get total price
    const totalPrice = cartItems.reduce((total, cartItems) => {
        const product = data.find(p => p.id === cartItems.id);
        return total + (product.price * cartItems.quantity);
    }, 0);
    
    // create cart items
    function createCartItems(item) {

        const quantity = getItems(item.id)

        return(
            <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={quantity}
                removeItem={() => removeItem(item.id)}
            />
        )
    }

    // display and remove modal
    const [openModal, setOpenModal] = useState(false);

    function CompleteOrder() {
        setOpenModal(true);
    }

    function handleNewOrder() {
        setOpenModal(false);
        window.location.reload();
    }

    return (
        <section className="cart-section">
            <h2>Your Cart({cartQuantity})</h2>
            { cartQuantity === 0 ? 
                <div className="empty-cart">
                    <img src="/images/illustration-empty-cart.svg" alt=""/>
                    <p>Your added items will appear here</p>
                </div> : 
                <div className="cart-items">
                    <div className="orders-container">
                        {cartProducts.map(createCartItems)}
                    </div>
                    <p className="total">
                        <span>Order Total</span>
                        <span>{ formatCurrency (totalPrice) }</span>
                    </p>
                    <div className="carbon-status"><img src="/images/icon-carbon-neutral.svg" alt=""/>This is a carbon-neutral delivery</div>
                    <button className="confirm-btn" onClick={CompleteOrder}>Confirm Order</button>
                </div>
            }
            {openModal && 
                <Modal 
                    cartItems={cartProducts}
                    totalPrice={totalPrice}
                    handleNewOrder={handleNewOrder}
                />
            }
        </section>
    )
}

export default Cart;