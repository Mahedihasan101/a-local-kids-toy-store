import React from 'react';
import AnotherHome from './AnotherHome';
import Links from '../Pages/Links';
import Advantage from './Advantage';
import { useLoaderData } from 'react-router';

const Allitems = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <div className='max-w-11/12 mx-auto'>

            <AnotherHome></AnotherHome>
            <Advantage></Advantage>
            <Links></Links>
           <div className='grid grid-cols-4 gap'>
             {
                toys.map(toy => <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={toy.pictureURL}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
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

export default Allitems;