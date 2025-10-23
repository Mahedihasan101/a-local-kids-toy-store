import React from 'react';
import homeimg from '../assets/home bg.jpg'
import Advantage from './Advantage';
import Links from '../Pages/Links';
import Allitems from './Allitems';
import Marquee from 'react-fast-marquee';


const Home = () => {

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
                <div className="card bg-base-100 w-96 shadow-sm ml-4">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm ml-4">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm ml-4">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm ml-4">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm ml-4">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Home;