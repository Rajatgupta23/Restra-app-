import  CartIcon from "../Carts/CartsIcon"

import classes from "./Header.module.css"




const HeaderCartButton= props=>{

    return <button className={classes.button} > 

    <span className={classes.icon}> 
    <CartIcon/>
     </span>


    <span className={classes.badge}> YOUR CART </span>
    <span> </span>

    
    

    </button>


}

export default HeaderCartButton