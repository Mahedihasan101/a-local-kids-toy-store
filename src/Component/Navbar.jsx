import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import img from '../assets/ChatGPT Image Oct 22, 2025, 06_01_41 AM.png'
import { AuthContext } from '../Povider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const handleLogOut = () => {
        console.log("user trying to logout");
        logOut()
            .then(() => {
                alert("You logged Out")
            }).catch((error) => {
                console.log(error)
            });
    }

    const links = <>

        <NavLink to="/"><li className='m-2 text-[#636c76]'>Home</li></NavLink>
        <NavLink><li className='m-2 text-[#636c76]'>Contact</li></NavLink>
        <NavLink><li className='m-2 text-[#636c76]'>MY Profile</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img src={img} alt="" className='w-12' />
                <a className="text-xl font-bold ml-1">Baby<br />Toyshop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className='navbar-end flex'>
                <div>
                    {user && (
                        <img
                            src={user.photoURL}
                            alt="User"
                            className="w-10 h-10 rounded-full mx-auto"
                            
                        />
                    )}
                </div>
                <div>
                    {
                        user ? <button onClick={handleLogOut} className='btn btn-primary'>Logout</button> : <Link to="/login"><a className="btn btn-primary">Login</a></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;