import NavList from './components/NavList';
import Navigation from './pages/layout/Navigation';
import Men from './pages/Men';
import NewArrivals from './pages/NewArrivals';
import ProductOverView from './pages/ProductOvervier';
import ShoppingCart from './pages/ShoppingCart';
// import 'index.css';

function App() {
  return (
    <div className="app">
      <div className="mb-16">
        {/* <NavList /> */}
        <Navigation />
      </div>
      <div className="mt-16">
        <NewArrivals />      
        {/* <Men />
        <ProductOverView />
        <ShoppingCart /> */}
      </div>
    </div>
  );
}

export default App;
