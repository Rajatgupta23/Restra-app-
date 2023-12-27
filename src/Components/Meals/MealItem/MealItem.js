import classes from "./MealItem.module.css"

import MealiItemForm from "./MealItemForm"
const MealItem=(props)=>{

    const Price= `$${props.Price.toFixed(2)}`
    return <li className={classes.meal}>
        <div className={classes.description}><h3>{props.name}</h3></div>
        <div>{props.description}</div>
        <div className={classes.Price}>{Price}</div>

        <div>
            <MealiItemForm></MealiItemForm>
        </div>
    </li>

}

export default MealItem