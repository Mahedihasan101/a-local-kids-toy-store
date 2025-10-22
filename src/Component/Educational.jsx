import React from 'react';
import AnotherHome from './AnotherHome';
import Advantage from './Advantage';
import Links from '../Pages/Links';
import { useLoaderData } from 'react-router';

const Educational = () => {
    const toys = useLoaderData();
    const educationalToys = toys.filter(toy => toy.subCategory === "Educational");
    const toy = educationalToys;
    console.log(toy)
    return (
        <div className='max-w-11/12 mx-auto'>
            <AnotherHome></AnotherHome>
            <Advantage></Advantage>
            <Links></Links>
            <div className='grid grid-cols-4 bg-[#e5edf8]'>
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
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Educational;