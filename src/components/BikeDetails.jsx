import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import bikes from '../bikes'
import {AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const BikeDetails = () => {
    const {id} = useParams();
    const [bike, setBike] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect( () => {
        const existingBike = bikes.find((bike)=> bike.id == id)
              setBike(existingBike);
   }, [id])

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };

  return (
      <div className='w-full bg-[#FFFFFF] h-full mt-20 mb-20'>
         <div className="mt-6 flex gap-2 sm:gap-20 flex-col sm:flex-row items-center justify-center m-auto bg-white text-black ">
            <div className=''>
                <img src={bike.image} className="rounded-lg" width={600} height={400}/>
            </div> 
            <div className='flex flex-col items-start space-y-4 font-verdana p-10 w-full sm:w-1/3 text-justify'>
                <span className='text-xl sm:text-2xl'>{bike.name}</span>
                <div className='flex  items-center justify-center gap-1 text-red-600'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiOutlineStar/>
                <span className='text-black text-sm'>(201)</span>
               </div>
              <span className='text-xl'>{bike.price}.00</span>
              <p>{bike.desc}</p>

              <div className='flex w-full justify-between pb-2 sm:pb-8'>
                <span className='text-base sm:text-xl'>Qty: {quantity}</span>
                <div className='flex gap-4 items-center justify-center border border-gray-400 w-20 py-1 '>
                    <span className="cursor-pointer" onClick={()=>handleDecrement()}><AiOutlineMinus/></span>                
                    <span className="cursor-pointer" onClick={()=>handleIncrement()}><AiOutlinePlus/></span>
                </div>
              </div>
              <button className='flex items-center justify-center w-96  text-black bg-white font-medium border-[1px] border-[#000000]  py-2.5
                               hover:bg-black hover:text-white hover:border-white'
                               onClick="" >
                  Buy Now
              </button>
                
              
          </div>
      </div> 
    </div>
  )
}

export default BikeDetails