import formatCurrency from "../utilities/formatCurrency";
import { UseCartContext } from "../context/cartContext";

function Modal ({ cartItems, handleNewOrder, totalPrice }) {

    const { getItems } = UseCartContext();

    function createModalItems(item) {
        const quantity = getItems(item.id);

        return(
            <div key={item.id}>
                <div className="modal-order-items">
                    <div className="modal-img-stats">
                        <img src={item.image.thumbnail} alt={item.name}/> 
                        <div>
                            <h3>{item.name}</h3>
                            <p className="modal-stats">
                                <span>{quantity}X</span>
                                <span>{ formatCurrency (item.price) }</span>  
                            </p>
                        </div>
                    </div>
                    <p>{ formatCurrency (item.price * quantity) }</p>
                </div>
            </div>
        )
    }

    return(
        <>
        <div className="overlay"></div>
        <dialog className="modal-section">
            <div className="modal-content">
                <img src="/images/icon-order-confirmed.svg" alt="" />
                <div>
                    <h2>Order confirmed</h2>
                    <p>We hope you enjoy your food!</p>
                </div>
                <div className="modal-order">
                    {cartItems.map(createModalItems)}
                </div>
                <p className="modal-total">
                    <span>Order Total</span>
                    <span>{ formatCurrency (totalPrice) }</span>
                </p>
                <button className="new-order-btn" onClick={handleNewOrder}>Start New Order</button>
            </div>
        </dialog>
        </>
    )
}

export default Modal;