import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../components/Home.css'
import { FaUser, FaCartPlus, FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate();

  // const handleChange = (id) =>{
  //   navigate(`/Product/${id}`)
  // }

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
      <div className='outer-container'>
        <nav>
          <ul>
            <li className="logo"><img alt='' className='nav-img' src='/myntra.png' /></li>
            <li className="btn"><span className="fas fa-bars"></span></li>
            <div className="items">
              <li><a href="#" className='nav-a-text'>MEN</a><p className='nav-text'>NEW</p>
              </li>
              <li><a href="#">WOMEN</a></li>
              <li><a href="#">KIDS</a></li>
              <li><a href="#">BEAUTY</a></li>
            </div>
            <li className="search-icon">
              <input className="input-search" type="search" placeholder=" 
            🔍   Search for  products, brands, and more" />
              <span className='icon-box'>
              <span className='user-icon'><FaUser /></span>
              <span className='user-cart'><FaCartPlus /></span>
              </span>
            </li>
          </ul>
        </nav>
        <div className='card-box' >
          {
            product?.map((post) => {
              const { id, thumbnail, brand } = post;
              return <div className='card' key={id}>
                <div className='img-card'>
                  <img alt='' src={thumbnail} />
                </div>
                {/* <div className='brand-box'>
                  <div className='brand-name'> {brand} </div>
                </div> */}
                <div className='content'>
                  <button onClick={() => (navigate(`/Product/${id}`))} > <FaHeart /> BUY NOW</button>
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

