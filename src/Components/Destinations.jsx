import { useLoaderData } from "react-router-dom";
import Spots from "./Spots";

const Destinations = () => {
    const spots = useLoaderData();
    console.log(spots)
    return (
        <div className="mt-10 space-y-4 ">
            <h1 className="text-4xl font-bold text-center">Best Destinations</h1>
            <p className="text-center">
                Explore the enchanting landscapes of Southeast Asia, from
                the breathtaking seas to the stunning coastal shores.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 gap-6 sm:max-w-7xl sm:mx-auto bg-transparent px-1 sm:px-0">
                {
                    spots.map((spot,idx) => <Spots spots={spot} key={idx} ></Spots>)
                }
            </div>
        </div>
    );
};

export default Destinations;