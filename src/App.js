
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import './App.css';
import Listarticles from './components/articles/Listarticles';
import NavScroll from './components/NavScroll';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cart from './components/articles/Cart';
import StripePayment from './components/articles/StripePayment';
import PdfCart from './components/articles/PdfCart';
import Banner from './admin/components/Banner';
import CarouselCategories from './admin/components/CarouselCategories';
function App() {
  

  return (
    <div className="App">
     
      <ToastContainer/>
      <Router>
        
      <NavScroll/>
      <Banner/>
      <CarouselCategories/>
      <Routes>
      
        <Route path='/articlescard' element={<Listarticles/>}/>
        <Route path='/articlesadmin' element={<ProductsAppAdmin/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pay/:total' element={<StripePayment/>}/>
        <Route path="/pdfcart" element={<PdfCart/>}/>
  
   
       
      </Routes>
     
      </Router>
      </div>
  );
}

export default App;
