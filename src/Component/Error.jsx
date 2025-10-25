import React from 'react';
import error from '../assets/error-404.png'

const Error = () => {
    return (
        <div>
            <div className='flex justify-center mt-45'>
                <img src={error} alt="" />

            </div>
            <div className='text-center'>
                <h1 className='font-bold text-5xl'>Oops, page not found!
            </h1>
            <p className='font-semibold text-[16px] mt-2'>The page you are looking for is not available.</p>
            </div>
        </div>
    );
};

export default Error;