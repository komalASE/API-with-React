import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../Product/ProductDetails.css'
import Header from '../Header';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import Star from '../Star';

const ProductDetails = (match) => {
    const [product, setproduct] = useState([]);
    const { id } = useParams()

    const fetchData = async () => {
        let response = await axios(
            `https://dummyjson.com/products/${id}`
        );
        console.log("our intial response--", response);
        setproduct(response.data);
    }

    useEffect(() => {
        console.log('=======>>> 22');
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className='btn-box'>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }} className='back-btn'>
                    <FaArrowLeft />
                    &nbsp; &nbsp; Go Back
                </Link>
            </div>
            <div className='outer-box'>
                <div className='img-box'>
                    <img alt='' src={product.thumbnail} />
                </div>

                <div className='detail-box'>
                    <div>
                        <Star stars={product.rating} />
                    </div>
                    <br />
                    <hr />
                    <div>
                        <h3> {product.brand} </h3>
                        <br />
                    </div>
                    <div>
                        <h3> {product.title} </h3>
                        <br />
                    </div>
                    <hr />
                    <br />
                    <div> {product.description} </div>
                    <br />
                    <hr />
                    <br />
                    <div> Price : ${product.price} </div>
                </div>
                <div className='cart-box'>
                    <div className='cart-inner-box'>
                        <div className='cart'>
                            <span>Status :</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>{product.stock > 0 ? 'In Stock ' + " - " + (product.stock) : "Out of Stock"}</span>
                        </div>
                        <div className='add-cart'>
                            <button className='cart-btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
