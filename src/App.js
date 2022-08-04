import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import store from "./components/UI/store/store";

function App() {
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
        <Route path="/" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
