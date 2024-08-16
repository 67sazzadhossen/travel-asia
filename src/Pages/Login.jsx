/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import BackGround from "../Components/SharedComponents/BackGround";
import { createContext, useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Email = createContext(null);

const Login = () => {

    const { logInWithEmail, logInWithFacebook, loginWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLoginWithFacebook = () => {
        logInWithFacebook()
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInWithEmail(email, password)
            .then(result => {
                if (result.user) {
                    toast('Login successful')
                    form.reset()

                }
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.error(err.message)
                return toast.warn('Invalid Email or Password')
            })

    }

    return (
        <div>
            <BackGround>
                <h1 className="text-center font-bold text-4xl text-white mb-6">Please Login</h1>

                <div className="bg-[#d1d5db66] sm:max-w-3xl sm:mx-auto rounded-lg p-6 space-y-3">
                    <form onSubmit={handleLogin} action="" className="">

                        <div className="w-full">
                            <p className="font-semibold">Email</p>
                            <input type="email" name="email" placeholder="Your Email" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>
                        <div className="w-full">
                            <p className="font-semibold">Password</p>
                            <input type="password" name="password" placeholder="Password" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>

                        <input value='Login' type="submit" className="w-full  bg-green-500 py-2 px-4 rounded-lg font-semibold text-white mt-3" name="" id="" />


                    </form>

                    <button onClick={handleLoginWithGoogle} className="w-full  bg-green-500 py-2 px-4 rounded-lg font-semibold text-white">Login With Google</button>
                    <button onClick={handleLoginWithFacebook} className="w-full  bg-green-500 py-2 px-4 rounded-lg font-semibold text-white">
                        Login With Facebook
                    </button>
                    <p className="text-white">Don't have an account? <span className="text-green-400"><Link to={'/register'}>Register</Link></span></p>
                </div>

            </BackGround>

            <ToastContainer />
        </div>
    );
};

export default Login;