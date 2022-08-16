import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../UI/store/cartSlice';

const Cart = props => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.cart)

    const handleRemove = (productID) => {
        dispatch(remove(productID))
    }




    const cartItems = <ul className={classes['cart-items']}>
        {products.map(item => <li key={item.id}>
            {<div className={classes.image}><img className={classes['cart-img']} src={item.imageUrl} alt="item" /></div>}
            {item.title} | {item.quantity} | {item.price} <button onClick={()=>handleRemove(item.id)}>remove</button></li>)}</ul>


    return(
        <Modal onClose={props.onClose}>
            <div className={classes.items}>{cartItems}</div>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$200</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Purchase</button>
            </div>
        </Modal>
    )
}

export default Cart;