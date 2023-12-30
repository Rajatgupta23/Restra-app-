import React, { Fragment } from "react";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
import Mealsimage from '../../Assets/Mealsimage.jpg'

const Header = props =>{
    return <Fragment> 
        <div className={classes.header}> 
            <h1> Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </div >

        <div className={classes['main-image']}>
            <img src={Mealsimage}  alt="Delicious Food at Your Table"></img>

        </div>
    </Fragment>
}

export default  Header