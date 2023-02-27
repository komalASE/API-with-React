import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai'
import '../components/Product/ProductDetails.css'


const Star = ({ stars }) => {
    console.log("hello", stars);

    const ratingStar = Array.from({ length: 5 }, (element, index) => {

        let number = index + 0.5;

        return <span key={index}>
            {
                stars >= index + 1 
                ? ( <FaStar className='icon' />) 
                : stars >= number 
                ? ( <FaStarHalfAlt className='icon' />) 
                : ( <AiOutlineStar className='icon' />)
            }
        </span>;
    })  


    return (
            <span className='icon-style'>
            {ratingStar}
            </span>
    )
}

export default Star;

