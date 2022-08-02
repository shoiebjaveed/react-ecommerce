import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const dummyItems = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }
    ]

const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>
        {dummyItems.map(item => <li>
            {<div className={classes.image}><img src={item.imageUrl} alt="item" /></div>}
            {item.title} | {item.quantity} | {item.price}</li>)}</ul>


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