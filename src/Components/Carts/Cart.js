import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart=(props)=>{
    const cartitems = <ul  className={classes['cart-items']}>
        {[{id:'1254',Itemname:"sudhamilk",cost:"30rs"}].map((item)=><li>{item.Itemname}</li>)}</ul> 
    return <Modal>
        {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>355</span>
        </div >
        <div className={classes.actions}>
            <button className={classes['button--alt'] } onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>

    </Modal>
}

export default Cart