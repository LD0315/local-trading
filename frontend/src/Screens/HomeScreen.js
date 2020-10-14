import React, { useState, useEffect, useSelector } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
const dispatch = useDispatch();

function HomeScreen(props) {

  // react hook
  const [products, setProduct] = useState([]); // default value is empty array
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  // fetch data from server
  useEffect(() => {
    /*
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProduct(data);
    }
    fetchData();
    */
    return () => {
      //
    };
  }, [])

    return <ul className="products">
    {
      products.map(product => 
        <li key={product._id}> 
          <div className="product">
          <Link to={'/product/' + product._id}>
              <img className="product-image" src={product.image} alt="product" /></Link>
              <div className="product-name">{product.name}</div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">{product.rating} Stars {product.numReviews} Reviews </div>
          </div>
       </li>)
      }
  </ul>
}

export default HomeScreen;