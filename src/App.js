import Header from "./Components/Layout/Header";

import { Fragment } from "react";

import Meals from "./Components/Meals/Meals";

function App() {
  return (

    // <div>
    //   <h1>Lets start</h1>
    // </div>
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
     
      
    </Fragment>
    
  
  )
}

export default App;
