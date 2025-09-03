import './scss/index.scss'
import Product from './components/product';
import Cart from './components/cart';
import { CartContextProvider } from './context/cartContext';

function App() {

  return (
    <CartContextProvider>
      <main className='main-container'>
        <Product />
        <Cart />
      </main>
    </CartContextProvider>
  )
}

export default App;