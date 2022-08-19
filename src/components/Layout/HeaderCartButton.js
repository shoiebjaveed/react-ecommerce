import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useSelector } from 'react-redux';

const HeaderCartButton = props => {
    const items = useSelector((state) => state.product)

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Cart</span>
        <span className={classes.badge}>{items.data.length}</span>
    </button>
}

export default HeaderCartButton;