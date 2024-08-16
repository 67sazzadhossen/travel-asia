import { Link, NavLink } from "react-router-dom";
import { UilUser } from '@iconscout/react-unicons'
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Loading from "./SharedComponents/Loading";

const Navbar = () => {

    const { user, logOut, loading} = useContext(AuthContext);

    const [hover, setHover] = useState(false);

    const links = [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/all-tourists-spot',
            name: 'All Tourists Spot',
        },
        {
            path: '/add-tourists-spot',
            name: 'Add Tourists Spot',
        },
        {
            path: `/my-list`,
            name: 'My List',
        },
        {
            path: `/about-us`,
            name: 'About Us',
        },
        {
            path: `/contact`,
            name: 'Contact',
        },
    ]

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="w-full fixed text-white z-50">
            <div className="navbar bg-[#00000059] rounded-3xl mt-2 text-sm sm:max-w-7xl sm:mx-auto sm:py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu p-5 text-black space-y-2 menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
                            {
                                links.map((link, idx) => <NavLink className="px-4 py-2 rounded-lg bg-slate-200" key={idx} to={link.path}>{link.name}</NavLink>)
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="sm:text-2xl text-lg flex items-center gap-2 font-bold">
                        <div className="w-12"><img src="/src/assets/logo-white.png" alt="" /></div>
                        Travel Asia
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 z-50">
                        {
                            links.map((link, idx) => <NavLink
                                className={({ isActive }) => isActive? 'border-b-2 border-red-500 py-1 px-2 rounded-lg': 'py-1 px-2'}
                            key={idx} to={link.path}>{link.name}</NavLink>)
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <div className="rounded-full border border-white overflow-hidden">
                        {
                            user ?
                                <div
                                    onMouseEnter={() => setHover(!hover)}
                                    onMouseLeave={() => setHover(!hover)}
                                >

                                    <img className="h-12 w-12" src={user?.photoURL} alt="" />

                                </div>

                                :
                                <>
                                    <div className=""><UilUser size='40'></UilUser></div>
                                </>
                        }
                    </div>

                    <div className={`absolute top-[100%] text-center bg-slate-400 p-4 rounded-xl ${hover ? '' : 'hidden'}`}>
                        <h3>{user?.displayName}</h3>
                        <h3>{user?.email}</h3>
                    </div>

                    {
                        user ?
                            <>
                                <Link onClick={logOut} className="btn btn-success">Log Out</Link>

                            </>
                            :
                            <>
                                <Link to={'/login'} className="btn btn-success">Login</Link>
                                <Link to={'/register'} className="btn btn-primary">Register</Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;