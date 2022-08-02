import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {
  const [showCart, setCart] = useState(false)

  const showCartHandler = () => {
    setCart(true);
  }

  const hideCartHandler = () => {
    setCart(false);
  }


  return (
    <Fragment>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}

export default App;
