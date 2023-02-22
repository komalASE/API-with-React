import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../components/Home.css'

const Home = () => {

  let [product, setproduct] = useState([]);

  async function fetchData() {
    let response = await axios(
      `https://dummyjson.com/products`
    );
    console.log(response.data.products);
    let user = await response.data;
    setproduct(user.products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    {/* <div className='navBar'>
      <div className='inner-nav-box'>
        <ul>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
        </ul>
      </div>
    </div> */}
      <div className='outer-container'>
        <div className='card-box' >
          {
            product.map((post) => {
              const { id, title, description, price, discountPercentage, thumbnail } = post;
              return <div className='card' key={id}>
                <div className='img-card'>
                  <img alt='' src={thumbnail} />
                </div>
                <div className='content'>
                  <h2>{title}</h2>
                  <p> {description} </p>
                  <p> {price} </p>
                  <p> {discountPercentage} </p>
                </div>


              </div>

            })
          }
        </div>
      </div>
    </>
  )
}

export default Home;

