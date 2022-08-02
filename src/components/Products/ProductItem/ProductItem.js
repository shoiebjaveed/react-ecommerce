import classes from './ProductItem.module.css';
import ProductItemForm from './ProductItemForm';

const ProductItem = props => {
    const price = `$${props.price}`;

    return <li className={classes.product}>
        <div>
            <h3>{props.title}</h3>
            <div className={classes.image}><img src={props.imageUrl} alt="products" /></div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <p>
            Description:
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
             ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
             fugiat nulla pariatur. Excepteur
             sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <br />
            <br />

            <ProductItemForm />
        </div>
    </li>
}

export default ProductItem;