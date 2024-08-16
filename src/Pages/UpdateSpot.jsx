import { ToastContainer, toast } from "react-toastify";
import BackGround from "../Components/SharedComponents/BackGround";
import { useLoaderData, useParams } from "react-router-dom";


const UpdateSpot = () => {

    const spot = useLoaderData();
    const {id} = useParams();
    console.log(id);
    


    const handleUpdateSpot = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const visitor = form.visitor.value;

        const updatedSpot = {
            image,
            spot,
            country,
            location,
            description,
            cost,
            seasonality,
            travelTime,
            visitor,
        }

        console.log(updatedSpot)

       

        fetch(`https://travel-asia-server.vercel.app/spots/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
            .then(res => res.json())
            .then(() => {
                form.reset();
                toast('Updated Spot')
            })
    }


    return (
        <BackGround>
            <h1 className="text-center text-2xl font-bold text-white mb-5">Update Spot</h1>
            <form onSubmit={handleUpdateSpot} action="" className=" bg-[#d1d5db66] sm:max-w-3xl sm:mx-auto rounded-lg p-6 space-y-3">
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Image</p>
                        <input type="text" defaultValue={spot.image} name="image" placeholder="Image URL" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Tourists Spot Name</p>
                        <input type="text" defaultValue={spot.spot} name="spot" placeholder="Tourists Spot Name" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Country Name</p>
                        <input type="text" defaultValue={spot.country} name="country" placeholder="Country Name" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Location</p>
                        <input type="text" defaultValue={spot.location}  name="location" placeholder="Location" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Short Description</p>
                        <input type="text" defaultValue={spot.description} name="description" placeholder="Short Description" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Average Cost</p>
                        <input type="text" defaultValue={spot.cost} name="cost" placeholder="Average Cost" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Seasonality</p>
                        <input type="text" defaultValue={spot.seasonality} name="seasonality" placeholder="Seasonality" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Travel Time</p>
                        <input type="text" defaultValue={spot.travelTime} name="travelTime" placeholder="Travel Time" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Total Visitor</p>
                        <input type="text" defaultValue={spot.visitor} name="visitor" placeholder="Total Visitor" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>

                </div>
                <input type="submit" value='Update' name="" id="" className="w-full  text-black bg-green-500 py-2 px-4 rounded-lg font-bold" />
            </form>
            <ToastContainer />
        </BackGround>
    );
};

export default UpdateSpot;