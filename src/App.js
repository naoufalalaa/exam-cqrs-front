import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import Customers from './pages/customers/Customers';
import AddVehicule from './pages/customers/AddVehicule';
import Products from './pages/products/Products';
import AddProduct from './pages/products/AddProduct';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/customers" element={<Customers/>} />
          <Route path="/customers/addCustomer" element={<AddVehicule/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/addProduct" element={<AddProduct/>} />
          <Route path="/products/:id" element={<Products/>} />
        </Routes>
    </Router>
  );
}

export default App;
