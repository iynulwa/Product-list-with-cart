import formatCurrency from "../utilities/formatCurrency";
import { UseCartContext } from "../context/cartContext";

function Modal ({ cartItems, handleNewOrder, totalPrice, modalRef }) {

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
                                <span className="modal-quantity">{quantity}X</span>
                                <span className="modal price">{ formatCurrency (item.price) }</span>  
                            </p>
                        </div>
                    </div>
                    <p className="price-quantity-total">{ formatCurrency (item.price * quantity) }</p>
                </div>
            </div>
        )
    }

    return(
        <>
        <div className="overlay"></div>
            <dialog ref={modalRef} className="modal-section">
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
                        <span className="modal-total-price">{ formatCurrency (totalPrice) }</span>
                    </p>
                    <button type="button" className="new-order-btn" onClick={handleNewOrder}>Start New Order</button>
                </div>
            </dialog>
        </>
    )
}

export default Modal;