import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import AddSpots from "../Pages/AddSpots";
import AllSpots from "../Pages/AllSpots";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import MyList from "../Pages/MyList";
import SpotDetails from "../Pages/SpotDetails";
import UpdateSpot from "../Pages/UpdateSpot";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import PageNotFound from "../Pages/PageNotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://travel-asia-server.vercel.app/spots'),

            },
            {
                path: "/add-tourists-spot",
                element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>
            },
            {
                path: "/all-tourists-spot",
                element: <AllSpots></AllSpots>,
                loader: () => fetch('https://travel-asia-server.vercel.app/spots')
            },
            {
                path: "/my-list",
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                loader: () => fetch(`https://travel-asia-server.vercel.app/spots`)
            },
            {
                path: "/spot-details/:id",
                element: <SpotDetails></SpotDetails>,
                loader: ({ params }) => fetch(`https://travel-asia-server.vercel.app/spots/${params.id}`)
            },
            {
                path: "/register",
                element: <Register></Register>,

            },
            {
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/update-spot/:id",
                element: <UpdateSpot></UpdateSpot>,
                loader: ({ params }) => fetch(`https://travel-asia-server.vercel.app/spots/${params.id}`)

            },
            {
                path: "/about-us",
                element: <About></About>,

            },
            {
                path: "/contact",
                element: <Contact></Contact>,

            },
        ]
    },
]);