import BackGround from "../Components/SharedComponents/BackGround";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSpots = () => {

    const handleSpotSubmit = (e) => {
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
        const userEmail = form.userEmail.value;
        const username = form.username.value;

        const addedSpot = {
            image,
            spot,
            country,
            location,
            description,
            cost,
            seasonality,
            travelTime,
            visitor,
            userEmail,
            username,
        }

        fetch('https://travel-asia-server.vercel.app/spots',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedSpot)
        })
        .then(res => res.json())
        .then(() => {
            form.reset();
            toast('Added Spot')
        })
    }

    return (
       <div className="scrollbar-hide">
            <BackGround>
                <form onSubmit={handleSpotSubmit} action="" className=" bg-[#d1d5db66] sm:max-w-3xl sm:mx-auto rounded-lg p-6 space-y-3">
                    <div className="flex gap-4">
                        <div className="w-full">
                            <p className="font-semibold">Image</p>
                            <input type="text" name="image" placeholder="Image URL" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>
                        <div className="w-full">
                            <p className="font-semibold">Tourists Spot Name</p>
                            <input type="text" name="spot" placeholder="Tourists Spot Name" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-full">
                            <p className="font-semibold">Country Name</p>
                            <input type="text" name="country" placeholder="Country Name" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>
                        <div className="w-full">
                            <p className="font-semibold">Location</p>
                            <input type="text" name="location" placeholder="Location" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-full">
                            <p className="font-semibold">Short Description</p>
                            <input type="text" name="description" placeholder="Short Description" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>
                        <div className="w-full">
                            <p className="font-semibold">Average Cost</p>
                            <input type="text" name="cost" placeholder="Average Cost" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-full">
                            <p className="font-semibold">Seasonality</p>
                            <input type="text" name="seasonality" placeholder="Seasonality" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>
                        <div className="w-full">
                            <p className="font-semibold">Travel Time</p>
                            <input type="text" name="travelTime" placeholder="Travel Time" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>
                    </div>

                    <div className="flex gap-4">

                        <div className="w-full">
                            <p className="font-semibold">User Email</p>
                            <input type="email" name="userEmail" placeholder="User Email" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>
                        <div className="w-full">
                            <p className="font-semibold">User Name</p>
                            <input type="text" name="username" placeholder="User Name" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-full">
                            <p className="font-semibold">Total Visitor</p>
                            <input type="text" name="visitor" placeholder="Total Visitor" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                        </div>

                    </div>
                    <input type="submit" name="" id="" className="w-full  text-black bg-green-500 py-2 px-4 rounded-lg" />
                </form>
                <ToastContainer />
            </BackGround>
       </div>
    );
};

export default AddSpots;