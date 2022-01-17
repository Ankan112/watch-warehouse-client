import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Header from './pages/Common/Header/Header';
import Explore from './pages/Explore/Explore';
import Dashboard from './pages/Dashboard/Dashboard';
import PayNow from './pages/PayNow/PayNow';
import MyOrders from './pages/MyOrders/MyOrders';
import AllOrders from './pages/AllOrders/AllOrders';
import NewProduct from './pages/NewProduct/NewProduct';
import MakeAdmin from './pages/MakeAdmin/MakeAdmin';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import Review from './pages/Review/Review';
import Parchage from './pages/Home/Parchage/Parchage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/parchage/:id" element={<Parchage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pay" element={<PayNow />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/allorders" element={<AllOrders />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/admin" element={<MakeAdmin />} />
          <Route path="/manageproducts" element={<ManageProducts />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
