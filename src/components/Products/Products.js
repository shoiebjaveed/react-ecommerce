import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from '../UI/store/cartSlice'
import classes from './Products.module.css';
import Card from '../UI/Card'
import data from "./dummydata";
import { Link } from 'react-router-dom';
import axios from "axios";



const Products =  ()=> {

    const dispatch = useDispatch()

    const [products, setProducts] = useState([])



    useEffect(() => {
        const fetchProducts = async () => {
            // const res = await fetch('https://fakestoreapi.com/products');
            // const data = await res.json();
            // console.log(data);
            setProducts(data)
        }

        fetchProducts();
    }, [])

    const handleAdd = async (product) => {
        dispatch(add(product), 
        axios.post(`https://crudcrud.com/api/7c91f9ec64564769a14f4e3363c5a969/cartAdmin`, product)
            )
    }

    

    return <div className="productWrapper">
        {
        products.map(product => (
            <div key={product.id} className='card'>
                <Card>
                <div >
                    <img className={classes['product-img']} src={product.imageUrl} alt='img' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Link to={`/product-detail/${product.title}`}><h4>{product.title}</h4></Link> 
                    <h5>{`$${product.price}`}</h5>
                    <button classes={classes['add-btn']} onClick={()=> handleAdd(product)}>Add to cart</button>
                </div>
                </Card>
            </div>
        ))
        }</div>
}

export default Products;