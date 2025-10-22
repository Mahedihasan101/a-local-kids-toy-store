import React from 'react';
import homeimg from '../assets/home bg.jpg'


const AnotherHome = () => {
    return (
        <div>
             <div className='bg-[#f88e0f] flex flex-col md:flex-row justify-between items-center h-[610px] rounded-4xl mt-5'>
                        <div className=' p-[60px]'>
                            <p className='font-medium text-xl bg-[#fccf39] w-fit p-2 rounded-2xl'>FREE Delivery on Orders Over $20 </p>
                            <h1 className='font-bold text-[60px] text-white'>Find The Best Toys <br /> For Your kids</h1>
                            <p className='font-normal text-white text-[16px] my-4'>Business hen an unknown printer took a galley of type and scrambled make <br /> wype specimenlt has survived not only.</p>
                            <button className='btn bg-white p-5 rounded-4xl text-[#6b798c]'>Shop Now</button>
                        </div>
                         <img src={homeimg} alt=""className='max-w-[600px] h-[550px] m-5 rounded-2xl' />
                        
                       </div>
        </div>
    );
};

export default AnotherHome;