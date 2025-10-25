import React from 'react';
import homeimg from '../assets/home bg.jpg'
import homeimg2 from '../assets/homeimg.jpg'
import homeimg3 from '../assets/homeimg3.jpg'
import homeimg4 from '../assets/homeimg4.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const AnotherHome = () => {
    return (
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
        </div>
    );
};

export default AnotherHome;