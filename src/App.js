import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Users from "./pages/userList/Users";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/user/:userId" element={<User/>}></Route>
          <Route path="/newUser" element={<NewUser/>}></Route>
          <Route path="/products" element={<ProductList/>}></Route>
          <Route path="/product/:productId" element={<Product/>}></Route>
          <Route path="/newProduct" element={<NewProduct/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
