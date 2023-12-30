import Header from "./Components/Layout/Header";

import { Fragment,useState } from "react";

import Meals from "./Components/Meals/Meals";

import Cart from "./Components/Carts/Cart";

import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsshown,setCartIsShown]= useState(false)
  const showCartHandler=()=>{
    setCartIsShown(true)
  }

  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (

    // <div>
    //   <h1>Lets start</h1>
    // </div>
    <CartProvider>
      { cartIsshown && <Cart onClose={hideCartHandler}/> }
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
     
      
    </CartProvider>
    
  
  )
}

export default App;
