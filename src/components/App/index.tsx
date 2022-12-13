import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

import Home from '../Home';
import Product from '../Product';
import ProductGrid from '../ProductGrid';
import About from '../About';

const App = () => {
  return (
    <> 
      <ul className='list'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/products' element={<ProductGrid />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App;
