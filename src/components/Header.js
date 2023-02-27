import React from 'react'
import { FaUser, FaCartPlus} from "react-icons/fa";

const Header = () => {
  return (
    <div>
    <div className='upper-nav'>hello</div>
       <nav>
          <ul>
            {/* <li className="logo"><img alt='' className='nav-img' src='/logo.jpg' /></li> */}
            <li className="btn"><span className="fas fa-bars"></span></li>
            <div className="items">
              {/* <li><a href="#" className='nav-a-text'>MEN</a><p className='nav-text'>NEW</p> */}
              {/* </li> */}
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
    </div>
  )
}

export default Header
