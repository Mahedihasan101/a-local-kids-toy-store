import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData, useParams } from 'react-router';
import { FcRating } from 'react-icons/fc';
import { FaRegStar } from 'react-icons/fa';


const ViewDetails = () => {
    const [man, setMan] = useState(null);
    const data = useLoaderData();
    const { id } = useParams();
    const [view, setView] = useState({})
    console.log(view)

    useEffect(() => {
        const viewDetails = data.find((singleView) => singleView.toyId == id);
        setView(viewDetails);
    }, [data, id])

    const submitButton = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        
        setMan({ name, email });
    }
    return (
        <div className=''>
            <div className="hero bg-[#c48d4a] md:min-h-screen max-w-11/12 mx-auto pb-40">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={view.pictureURL}
                        className="md:max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='ml-4'>
                        <div className='flex gap-2 items-center'>
                            <FaRegStar className="text-yellow-300 text-3xl" />
                            <span className='font-bold text-[30px]'>{view.rating}</span>
                        </div>
                        <h1 className="text-5xl font-bold mt-2">{view.sellerName}</h1>
                        <p className="mt-2">
                            {view.description}
                        </p>
                        <h1 className='font-semibold mt-2'><span>$</span>{view.price}</h1>
                        <h2 className='font-medium'>Available-{view.availableQuantity} pc</h2>
                        <button className="btn btn-primary mt-2">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className='ml-0 md:ml-60'>
                <form onSubmit={submitButton}>
                    <div className="  ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">

                            </div>
                            <div className="card bg-[#c48d4a] w-full max-w-sm shrink-0 shadow-2xl">
                                <div className="card-body">
                                    <fieldset className="fieldset">

                                        <label className="label">Name</label>
                                        <input name="name" type="name" className="input" placeholder="Name" required />
                                        <label className="label">Email</label>
                                        <input name="email" type="email" className="input" placeholder="Email"  required/>
                                        {man && <p className='text-green-200'>"submission successfully"</p>}


                                        <button type="submit" className="btn btn-neutral mt-4">Try Now</button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ViewDetails;