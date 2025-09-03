import formatCurrency from "../utilities/formatCurrency";

function CartItem ({ quantity, name, price }) {
    return(
        <>
            <img src="/images/icon-order-confirmed.svg" alt="" />
            <h2>Order confirmed</h2>
            <p>We hope you enjoy your food!</p>
            <div>
                <h3>{name}</h3>
                <div>
                    <p>{quantity}X</p>
                    <p>{ formatCurrency (price) }</p>
                    <p>{ formatCurrency (price * quantity) }</p>
                </div>
            </div>
        </>
    )
}

export default CartItem;