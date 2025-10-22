import React from 'react';
import { NavLink } from 'react-router';

const Links = () => {
    const links = <>
        <NavLink to="/all items"><li className='m-2 '>All items</li></NavLink>
        <NavLink to="/educational"><li className='m-3 '>Educational</li></NavLink>
        <NavLink><li className='m-3 '>Baby Toys</li></NavLink>
        <NavLink><li className='m-3 '>Playsets</li></NavLink>
    </>
    return (
        <div>
           <div className='flex justify-between mt-10'>
            <h1 className='font-bold text-[36px]'>Trending Toy</h1>
            <ul>
                <li className='flex items-center font-medium text-[18px] bg-[#f88e0f] 
                text-white rounded-2xl'>{links}</li>
            </ul>
           </div>
        </div>
    );
};

export default Links;