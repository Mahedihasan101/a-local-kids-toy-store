import React from 'react';
import img1 from '../assets/26e84257591cdb0c0424c64a824e4761.jpg'
import img2 from '../assets/4fe03f7a2f6c42a1b897f84f21fba071.jpg'
import img3 from '../assets/eaf51fceff4440a43040f0203edbd8b8.jpg'
import { Link } from 'react-router';

const ShoopCatagory = () => {
    return (
        <div className='bg-[#00bbae] py-50 rounded-2xl '>
            
            <h1 className='font-bold text-4xl text-center '>Shop by Categories</h1>
           <div className='grid grid-cols-3 gap-10 mt-10'>
             <div className='border-2 flex flex-col items-center p-10 mx-10 bg-[#edfbfa] rounded-3xl'>
                <img src={img1} alt="" className='w-25 h-25 rounded-full border-2' />
                <Link to="/babytoys"><p className='font-bold text-3xl'>Baby Toys</p></Link>
            </div>
            <div className='border-2 flex flex-col items-center p-10 mx-10  bg-[#edfbfa] rounded-3xl'>
                <img src={img2} alt="" className='w-25 h-25 rounded-full border-2'/>
                <Link to="/educational"><p className='font-bold text-3xl'>Educational</p></Link>
               
            </div>
            <div className='border-2 flex flex-col items-center p-10 mx-10  bg-[#edfbfa] rounded-3xl'>
                <img src={img3} alt="" className='w-25 h-25 rounded-full border-2'/>
                <Link to="/playsets"><p className='font-bold text-3xl'>Play sets</p></Link>
                
            </div>
        
           </div>
           
        </div>
    );
};

export default ShoopCatagory;