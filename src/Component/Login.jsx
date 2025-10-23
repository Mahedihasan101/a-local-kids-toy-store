import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Povider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                alert ('successfully login')
                e.target.reset();
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            })


    }
    return (
        <div className="hero bg-[#c48d4a] min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className='font-semibold text-center'>Dont,t Have An Account ? <Link className='text-red-600' to="/register">Register</Link></p>
                        </fieldset>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;