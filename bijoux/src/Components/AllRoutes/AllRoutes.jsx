import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Login from "../pages/SignUp-SignIn/Login";
import Products from "../pages/products/Products";
import Cart from "../pages/products/Cart";
import Favorite from "../pages/products/Favorite";
import SingleProduct from "../pages/products/SingleProduct";
import PageNotFound from "../pages/products/PageNotFound";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/favourite" element={<Favorite />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
      </Routes>
    </div>
  );
}
