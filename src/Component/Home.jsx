import React from 'react';
import homeimg from '../assets/home bg.jpg'
import homeimg2 from '../assets/homeimg.jpg'
import homeimg3 from '../assets/homeimg3.jpg'
import homeimg4 from '../assets/homeimg4.jpg'
import Advantage from './Advantage';
import Links from '../Pages/Links';
import Allitems from './Allitems';
import Marquee from 'react-fast-marquee';
import { Link, useLoaderData } from 'react-router';
import ShoopCatagory from './ShoopCatagory';
import { Helmet } from 'react-helmet';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Home = () => {
    const toys = useLoaderData();
    const trending = toys.filter(toy => toy.subCategory === "Trending");
    const toy = trending;
    return (
        <div className=''>
            <Helmet>
                <title>Home | Toy store</title>
            </Helmet>
            <div>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                        <SwiperSlide> <div className='bg-[#f88e0f] flex flex-col md:flex-row justify-between items-center h-[610px] bg-cover bg-center'style={{ backgroundImage: `url(${homeimg})` }}>
                    <div className=' p-[60px]'>
                        <p className='font-medium text-xl bg-[#fccf39] w-fit p-2 rounded-2xl'>FREE Delivery on Orders Over $20 </p>
                        <h1 className='font-bold text-[60px] text-[#ff8c00]'>Find The Best Toys <br /> For Your kids</h1>
                        <p className='font-normal text-[#00bbae] text-[16px] my-4'>Business hen an unknown printer took a galley of type and scrambled make <br /> wype specimenlt has survived not only.</p>
                        <button className='btn bg-white p-5 rounded-4xl text-[#6b798c]'>Shop Now</button>
                    </div>
                    

                </div>
                </SwiperSlide>
                <SwiperSlide>
                     <div className='bg-[#f88e0f] flex flex-col md:flex-row justify-between items-center h-[610px]  bg-cover bg-center'style={{ backgroundImage: `url(${homeimg2})` }}>
                    <div className=' p-[60px]'>
                        <p className='font-medium text-xl bg-[#fccf39] w-fit p-2 rounded-2xl'> Trending Toys 2025 🚀</p>
                        <h1 className='font-bold text-[60px] text-white'>   The Hottest Toys <br /> Of This Year</h1>
                        <p className='font-normal text-white text-[16px] my-4'> Shop the most loved toys that every kid dreams of having.</p>
                        <button className='btn bg-white p-5 rounded-4xl text-[#6b798c]'>Shop Now</button>
                    </div>
                    

                </div>
                </SwiperSlide>
                <SwiperSlide>
                     <div className='bg-[#f88e0f] flex flex-col md:flex-row justify-between items-center h-[610px]  bg-cover bg-center'style={{ backgroundImage: `url(${homeimg3})` }}>
                    <div className=' p-[60px]'>
                        <p className='font-medium text-xl bg-[#fccf39] w-fit p-2 rounded-2xl'>New Arrival Collection! </p>
                        <h1 className='font-bold text-[60px] text-white'>    Discover Fun Learning <br /> With Smart Toys</h1>
                        <p className='font-normal text-white text-[16px] my-4'>  Let your child explore creativity and imagination with our latest toys.</p>
                        <button className='btn bg-white p-5 rounded-4xl text-[#6b798c]'> Explore Now</button>
                    </div>

                </div>
                </SwiperSlide>
                 <SwiperSlide>
                     <div className='bg-[#f88e0f] flex flex-col md:flex-row justify-between items-center h-[610px]  bg-cover bg-center'style={{ backgroundImage: `url(${homeimg4})` }}>
                    <div className=' p-[60px]'>
                        <p className='font-medium text-xl bg-[#fccf39] w-fit p-2 rounded-2xl'> Exclusive Offers 🎁</p>
                        <h1 className='font-bold text-[60px] text-white'>    Save Big On <br /> Your Favorite Toys!</h1>
                        <p className='font-normal text-white text-[16px] my-4'>  L Limited-time discounts on top-rated toys — don’t miss out!</p>
                        <button className='btn bg-white p-5 rounded-4xl text-[#6b798c]'>   Get Offer</button>
                    </div>

                </div>
                </SwiperSlide>

                </Swiper>
               
                <div className='w-11/12 mx-auto'>
                    <Advantage></Advantage>
                    <div className='bg-amber-100 my-5'>
                        <Links></Links>
                        <Marquee>
                            <div className='grid grid-cols-5 '>
                                {
                                    toy.map(toy => <div className="card bg-base-100 w-96 shadow-xl m-4  ">
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
                    </div>




                    <ShoopCatagory></ShoopCatagory>
                   
                </div>
            </div>
             <div className='bg-[#c28233]'>
                        <Marquee>
                            <p className='py-8 font-semibold text-2xl ml-15'>First your free trial and enjoy 1 months of toyup for $2/month on select plans.
                            </p>
                            <p className='py-8 font-semibold text-2xl ml-15'>Next your pro enjoy 5 months of toyup for $10/month on select plans.
                            </p>
                            <p className='py-8 font-semibold text-2xl ml-15'>Previus your pro enjoy 10 months of toyup for $20/month on select plans.
                            </p>
                        </Marquee>
                    </div>

        </div>
    );
};

export default Home;