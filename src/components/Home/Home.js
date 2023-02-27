import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Home/Home.css'
// import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Star from '../Star';


const Home = () => {

  let navigate = useNavigate();

  let [product, setproduct] = useState([]);

  async function fetchData() {
    try {
      let response = await axios(
        `https://dummyjson.com/products`
      );
      console.log("our intial response--", response);
      let user = response.data;
      setproduct(user.products);
    }
    catch (e) {
      console.log("ERR--", e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className='outer-container'>
        <div className='offer-outer-box'>
          <div className='offer-inner-box'><p className='offer-text'>FLAT $ 30 OFF ON FIRST ORDER</p></div>
        </div>
        <div className='card-box' >
          {
            product?.map((post) => {
              const { id, thumbnail, rating, price } = post;
              return <div className='card' key={id}>
                <div className='img-card'>
                  <img alt='' src={thumbnail} />
                </div>
                <span className='star'>
                  <Star stars={rating} />
                </span>
                <span className='price'>
                  <p className='price-p'> $ {price}</p>
                </span>
                <div className='content'>
                  <button onClick={() => (navigate(`/Product/${id}`))} >BUY NOW</button>
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

