import { useContext } from "react"
import  CartIcon from "../Carts/CartsIcon"

import CartContext from "../../store/cart-context"

import classes from "./HeaderCartButtom.module.css"




const HeaderCartButton= props=>{
    const CartCtx =useContext(CartContext)

    const NumberofCartItems= CartCtx.items.reduce((currNumber, item)=>{
        return currNumber+ item.amount 
    },0) 

    return (
        <button className={classes.button}  onClick={props.onClick}> 

            <span className={classes.icon}> <CartIcon/> </span>


            <span > YOUR CART </span>
            <span className={classes.badge}> {NumberofCartItems}</span>

    
    

        </button>

    ) 

}

export default HeaderCartButton