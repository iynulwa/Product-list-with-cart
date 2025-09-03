import Button from './button';
import formatCurrency from "../utilities/formatCurrency";
import { UseCartContext } from '../context/cartContext';

function Card({ id, name, price, category, mobile_img, tablet_img, desktop_img }) {

    const { getItems, increaseQty, decreaseQty } = UseCartContext();
    const quantity = getItems(id);

    return(
        <section className='card-section'>
            <div className='product-image-container'>
                <picture className='product-image'>
                    <source media='(min-width: 60rem)' srcSet={desktop_img} />
                    <source media='(min-width: 35rem) and (max-width: 59.99rem)' srcSet={tablet_img} />
                    <img src={mobile_img} alt='product image'/>
                </picture>
            </div>
            <div className='btn-container'>
                <Button 
                    id={id}
                    increaseQty={() => increaseQty(id)}
                    decreaseQty={() => decreaseQty(id)}
                    quantity={quantity}
                />
            </div>
            <div className='product-stats'>
                <p className="category">{category}</p>
                <p className="name">{name}</p>
                <p className="price">{ formatCurrency(price) }</p>
            </div>
        </section>
    )
}

export default Card;