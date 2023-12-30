import Header from "./Components/Layout/Header";

import { Fragment,useState } from "react";

import Meals from "./Components/Meals/Meals";

import Cart from "./Components/Carts/Cart";

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
    <Fragment>
      { cartIsshown && <Cart onClose={hideCartHandler}/> }
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
     
      
    </Fragment>
    
  
  )
}

export default App;
