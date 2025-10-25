import React from 'react';
import AnotherHome from './AnotherHome';
import Links from '../Pages/Links';
import Advantage from './Advantage';
import { Link, useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet';

const Allitems = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <div>
            <Helmet>
                <title>All Items | Toy Store</title>
            </Helmet>
            <div className='max-w-11/12 mx-auto'>
            <AnotherHome></AnotherHome>
            <Advantage></Advantage>

            <Links></Links>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  bg-[#fff7ed]'>
                {
                    toys.map(toy => <div className="card bg-base-100 md:w-96 shadow-xl m-4 ">
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
                            <div className="card-actions flex justify-between">
                                <p className='font-bold text-2xl'>${toy.price}</p>
                                <Link to={`/viewDetails/${toy.toyId}`}><button className="btn btn-primary">View More</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default Allitems;