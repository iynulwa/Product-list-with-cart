import data from '../data/data.json';
import Card from './card';

function createCards(info) {
    return(
        <Card
            key={info.id}
            id={info.id}
            price={info.price}
            category={info.category}
            name={info.name}
            desktop_img={info.image.desktop}
            tablet_img={info.image.tablet}
            mobile_img={info.image.mobile}
        />
    )
}

function Product() {
    
    return (
        <section className='product-section'>
            <h1>Dessert</h1>
            <div className='product-grid'>
                {data.map(createCards)}
            </div>
        </section>
    )
}

export default Product;