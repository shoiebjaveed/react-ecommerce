
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add } from '../UI/store/cartSlice'
import Card from '../UI/Card';
import data from './dummydata';

const ProductDetail = (props) => {
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

    const handleAdd = product => {
        dispatch(add(product))
    }




    const id = useParams()
 
    console.log(id.productID);
let prod=data.filter(p=>{return id.productID===p.title})
    return (
        <section>
            <h1>Product-Detail</h1>
            <ul>{ prod.map((e) => {
               
                return <li key={Math.random()}>
                    <Card>
                    <img src={e.imageUrl} alt='img'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident</p>
                        <h3>${e.price}</h3>
                        <button onClick={()=> handleAdd(e)}>Add to cart</button>
                    </Card>
                    
                    </li>
            })}</ul>
        </section>
    ) 

    
}

export default ProductDetail;