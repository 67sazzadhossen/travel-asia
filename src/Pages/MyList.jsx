import { useContext, useState } from "react";
import BackGround from "../Components/SharedComponents/BackGround";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import Loading from "../Components/SharedComponents/Loading";
import { UilEye, UilEdit, UilTrash } from '@iconscout/react-unicons'
import Swal from "sweetalert2";

const MyList = () => {

    const { user, loading } = useContext(AuthContext)
    const spots = useLoaderData();

    const email = user.email;
    const myPlace = spots.filter(place => place.userEmail === email)
    const [currentSpots, setCurrentSpots] = useState(myPlace);
    console.log(myPlace);

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });

                fetch(`https://travel-asia-server.vercel.app/spots/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if (result.deletedCount > 0) {
                            const remainingPlaces = currentSpots.filter(pl => pl._id !== id);
                            setCurrentSpots(remainingPlaces);
                        }
                    })
            }
        });



    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div>
                <BackGround>
                    <div className="overflow-x-auto sm:max-w-7xl sm:mx-auto bg-[#d1d5db66] rounded-2xl sm:h-[500px] overflow-scroll ">
                        <table className="table text-white">
                            {/* head */}
                            <thead>
                                <tr className="text-white">
                                    <th>Spot</th>
                                    <th>Location</th>
                                    <th>Seasonality</th>
                                    <th>Cost</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    currentSpots.map((place, idx) =>
                                        <tr key={idx}>

                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={place.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{place.spot}</div>
                                                        <div className="text-sm opacity-50">{place.country}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="underline">
                                                {place.location}
                                            </td>
                                            <td>{place.seasonality}</td>
                                            <td>
                                                {place.cost}
                                            </td>
                                            <td className="space-x-2">
                                                <Link to={`/spot-details/${place._id}`}>
                                                    <button className="bg-green-500 rounded-lg px-2 py-1"><UilEye size='15' /></button>
                                                </Link>
                                                <Link to={`/update-spot/${place._id}`}>
                                                    <button className="bg-blue-500 rounded-lg px-2 py-1"><UilEdit size='15' /></button>
                                                </Link>
                                                <button onClick={() => handleDelete(place._id)} className="bg-red-600 rounded-lg px-2 py-1"><UilTrash size='15' /></button>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </BackGround>
            </div>
        </>
    );
};

export default MyList;