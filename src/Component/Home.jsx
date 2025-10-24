import React from 'react';
import homeimg from '../assets/home bg.jpg'
import Advantage from './Advantage';
import Links from '../Pages/Links';
import Allitems from './Allitems';
import Marquee from 'react-fast-marquee';
import { Link, useLoaderData } from 'react-router';
import ShoopCatagory from './ShoopCatagory';



const Home = () => {
    const toys = useLoaderData();
    const trending = toys.filter(toy => toy.subCategory === "Trending");
    const toy = trending;
    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='bg-[#f88e0f] flex flex-col md:flex-row justify-between items-center h-[610px] rounded-4xl mt-5'>
                <div className=' p-[60px]'>
                    <p className='font-medium text-xl bg-[#fccf39] w-fit p-2 rounded-2xl'>FREE Delivery on Orders Over $20 </p>
                    <h1 className='font-bold text-[60px] text-white'>Find The Best Toys <br /> For Your kids</h1>
                    <p className='font-normal text-white text-[16px] my-4'>Business hen an unknown printer took a galley of type and scrambled make <br /> wype specimenlt has survived not only.</p>
                    <button className='btn bg-white p-5 rounded-4xl text-[#6b798c]'>Shop Now</button>
                </div>
                <img src={homeimg} alt="" className='max-w-[600px] h-[550px] m-5 rounded-2xl' />

            </div>
            <Advantage></Advantage>
            <Links></Links>


           <Marquee>
             <div className='grid grid-cols-5 bg-amber-100'>
                {
                    toy.map(toy => <div className="card bg-base-100 w-96 shadow-xl m-4 ">
                        <figure className='bg-gray-100'>
                            <img
                                src={toy.pictureURL}
                                alt="Shoes" className='w-[385px] h-[385px] p-2' />
                        </figure>
                        <div className="p-5">
                            <h2 className="card-title text-[#69778a]">{toy.subCategory}</h2>
                            <div className='flex justify-between'>
                                <p className='font-bold text-[18px]'>{toy.toyName}</p>
                                <div>
                                    <img src="" alt="" />
                                    <h1 className='font-bold text-[18px]'>{toy.rating}</h1>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <Link to={`/viewDetails/${toy.toyId}`}><button className="btn btn-primary">View More</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
           </Marquee>
           <ShoopCatagory></ShoopCatagory>
           
        </div>
    );
};

export default Home;