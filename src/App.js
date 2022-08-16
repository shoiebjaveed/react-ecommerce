import { useContext, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import store from "./components/UI/store/store";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductDetail from "./components/Products/ProductDetail";
import Login from "./pages/Login";
import AuthContext from "./components/UI/store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const [showCart, setCart] = useState(false)

  const showCartHandler = () => {
    setCart(true);
  }

  const hideCartHandler = () => {
    setCart(false);
  }


  return (
    <Provider store={store}>
      <BrowserRouter>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/logout" element={<Home />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {authCtx.isLoggedIn && (<Route path="/store" element={<Products />}></Route>)}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product-detail/:productID" element={<ProductDetail />}></Route>
        <Route path="*" element={<Navigate to ="/login" />}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
