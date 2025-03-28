import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './pages/layout/Navigation';
import NewArrivals from './pages/NewArrivals';
import ProductOverView from './pages/ProductOvervier';
import PromotionSection from './pages/PromotionSection';
import ShoppingCart from './pages/ShoppingCart';
import HomePage from './pages/Home';
import { Footer } from './pages/Footer';
import CheckoutPage from './pages/CheckOutPage';
import ProductListPage from './pages/ProductListPage';


function App() {
  return (
    <div className="app">
      <div className="mb-16">
        <Navigation />
      </div>
      <div className="mt-16 pt-12">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/new' element={<NewArrivals />} />
            <Route path='/view' element={<ProductOverView />} />
            <Route path='/promo' element={<PromotionSection />} />
            <Route path='/shop' element={<ShoppingCart />} />
            <Route path='/check' element={<CheckoutPage />} />
            <Route path='/productlist' element={<ProductListPage />} />
          </Routes>
        </BrowserRouter>

      </div>
      <Footer />
    </div>
  );
}

export default App;
