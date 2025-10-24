import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Povider/AuthProvider';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [show,setShow]= useState(false);
    const { createUser, setUser } = 
    use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target)

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if(!regExp.test(password)){
            alert("password must be at least 6 chatacters long and include at least one uppercase letter,one lowercase letter");
            return;
        }

        // console.log(name, email, password);
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user)
                setUser(user);
                e.target.reset();

            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset relative">
                            {/* name */}
                            <label className="label">Name</label>
                            <input name="name" type="text" className="input" placeholder="Name" />
                            {/* photo url */}
                            <label className="label">Photo URl</label>
                            <input name="photo" type="text" className="input" placeholder="Photo URl" />
                            {/* Email */}
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            {/* Password */}
                            <label className="label">Password</label>
                            <input name="password" type={show ? "text":"password"} className="input" placeholder="Password" />
                            <span onClick={()=> setShow(!show)} className='absolute right-7 top-63'>{show?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}</span>
                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button type="submit" className="btn btn-neutral mt-4">Register</button>
                            <p className='font-semibold text-center'>Allready Have An Account ? <Link className='text-red-600' to="/login">Login</Link></p>
                        </fieldset>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;