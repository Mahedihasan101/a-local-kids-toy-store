import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Povider/AuthProvider';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/Firebase.init';
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const Register = () => {
    const [show, setShow] = useState(false);
    const { createUser, setUser } =
        use(AuthContext);

        const handleGoogleSignIn=(e)=>{
            e.preventDefault();
            signInWithPopup(auth,googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                
                

            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            })
        }
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target)

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!regExp.test(password)) {
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
                            <input name="password" type={show ? "text" : "password"} className="input" placeholder="Password" />
                            <span onClick={() => setShow(!show)} className='absolute right-7 top-63'>{show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                            <p className='text-center'>or</p>
                            <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Continue with Google
                            </button>
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