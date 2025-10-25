import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { useLocation } from 'react-router';


const auth = getAuth(app);




const ForgetPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState("");


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const emailFromQuery = params.get('email');
        if (emailFromQuery) {
            setEmail(emailFromQuery);

        }
    }, [location]);

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (!email) {
            alert("please enter our email")
            return;
        }
        const redirectUrl =
            window.location.hostname === "localhost"
                ? "http://localhost:3000/login"
                : "https://your-production-domain.com/login";

        const actionCodeSettings = {
            url: redirectUrl,
            handleCodeInApp: false,
        };
        sendPasswordResetEmail(auth, email, actionCodeSettings)
            .then(() => {
                alert('password reset email sent! Please check your Gmail inbox.');
                window.location.href = "https://mail.google.com";
            })
            .catch((error) => {
                alert(error.message);
            })
    }



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
                <form onSubmit={handleResetPassword}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded-md w-full p-2 mb-4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;