import classes from "./input.module.css"

const Input=(props)=>{
    return <div className={classes.input}>

        <label htmlFor={props.input.id}>{props.label}</label>
{/* using a trick   : spread operator */}
        <input {...props.input} />

    </div>
}

export default Input