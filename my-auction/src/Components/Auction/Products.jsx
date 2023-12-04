import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/auction/getitem');
        console.log("Response", response);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul className='products-container'>
        {products.map((product) => (
          <li key={product._id}>
            <div className='item-container'>
              <img
                src={product.productPictureLink}
                alt={`Product: ${product.productName}`}
                style={{ width: '100%', height: '280px' }} // Adjust height as needed
              />
              <p className='name'>{product.productName}</p>
              <p className='type'>Type: {product.productType}</p>

              <Link to={`/zygler-arospace/auction/product/${product._id}`}>
                <button className='button'>Click To Bid</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
