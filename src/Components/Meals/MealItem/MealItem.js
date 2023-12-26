import classes from "./MealItem.module.css"
const MealItem=(props)=>{

    const Price= `$${props.Price.toFixed(2)}`
    return <li className={classes.meal}>
        <div className={classes.description}><h3>{props.name}</h3></div>
        <div>{props.description}</div>
        <div className={classes.Price}>{Price}</div>

        <div>
            {}
        </div>
    </li>

}

export default MealItem