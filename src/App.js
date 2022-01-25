import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
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
import AuthProvider from './pages/context/AuthProvider/AuthPorvider';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/parchage/:id" element={<Parchage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pay" element={<PayNow />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/allorders" element={<AllOrders />} />
            <Route path="/newproduct" element={<NewProduct />} />
            <Route path="/admin" element={<MakeAdmin />} />
            <Route path="/manageproducts" element={<ManageProducts />} />
            <Route path="/review" element={<Review />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
