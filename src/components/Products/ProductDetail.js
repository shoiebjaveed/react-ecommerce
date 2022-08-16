
import { useParams } from 'react-router-dom';
import data from './dummydata';




const ProductDetail = (props) => {
    const id = useParams()

   
    console.log(id.productID);

    
    

    return (
        <section>
            <h1>Product-Detail</h1>
            <div>{id === data.data.map((e) => {
                return <div><img src={e.imageUrl} alt='img'></img></div>
            })}</div>
        </section>
    ) 

    
}

export default ProductDetail;