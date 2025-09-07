function Button({id, increaseQty, decreaseQty, quantity}) {

    return (
        <div className="btn">
            { quantity === 0 ? 
                <button type="button" className="add-btn" onClick={increaseQty}><img src="/images/icon-add-to-cart.svg" alt=""/>Add to cart</button> : 
                <div>
                    <button type="button" className="qty-btn" onClick={increaseQty}><img src="/images/icon-increment-quantity.svg" alt="increase order"/></button>
                    {quantity}
                    <button type="button" className="qty-btn" onClick={decreaseQty}><img src="/images/icon-decrement-quantity.svg" alt="decrease order"/></button>
                </div>
            }
        </div>
    )
}

export default Button;