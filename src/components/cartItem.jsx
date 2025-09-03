import formatCurrency from "../utilities/formatCurrency";

function CartItem ({  id, quantity, name, price, removeItem }) {
    return(
        <div className="orders">
            <div className="order-info">
                <h3>{name}</h3>
                <div className="order-stats">
                    <p>{quantity}X</p>
                    <p>@{ formatCurrency (price) }</p>
                    <p>{ formatCurrency (price * quantity) }</p>
                </div>
            </div>
            <button className="remove-btn" onClick={removeItem}><img src="/images/icon-remove-item.svg" alt="remove order" /></button>
        </div>
    )
}

export default CartItem;