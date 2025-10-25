import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Povider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/Firebase.init';
import { Helmet } from 'react-helmet';
import loginimg from '../assets/5597695_56636.jpg'
import loginimg2 from '../assets/10136775_17973908.jpg'


const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn } = use(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();


    const GoogleSign = (e) => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)



            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            })



    }
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                alert('successfully login')
                e.target.reset();
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            })
        const GoogleSign = (e) => {
            e.preventDefault();


        }

};

    return (
       <div>
        <Helmet>
            <title>Login Page</title>
        </Helmet>
         <div className="hero min-h-screen " style={{ backgroundImage: `url(${loginimg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse ">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body  " style={{ backgroundImage: `url(${loginimg2})` }}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input w-full rounded-3xl" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name="password" type={show ? "text" : "password"} className="input w-full rounded-3xl" placeholder="Password" />
                            <span onClick={() => setShow(!show)} className='absolute right-12 top-35'>{show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                            <p className='text-center'>or</p>
                            <button onClick={GoogleSign} className="btn bg-white text-black border-[#e5e5e5] rounded-3xl">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Continue with Google
                            </button>
                           <Link to="/forgetPassword"> <div className="link link-hover"> Forgot password?</div></Link>
                            <button className="btn btn-neutral mt-4 rounded-3xl">Login</button>
                            <p className='font-semibold text-center'>Dont,t Have An Account ? <Link className='text-red-600' to="/register">Register</Link></p>
                        </fieldset>
                    </form>
                </div>
                <div className="text-center lg:text-left ">
                    <h1 className="text-7xl font-bold text-[#ea4589] ">Login now!</h1>
                    <p className="py-6 font-bold text-[#ea4589]">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Login;