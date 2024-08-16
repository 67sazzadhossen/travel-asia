import { useLoaderData } from "react-router-dom";
import BackGround from "../Components/SharedComponents/BackGround";
import Spots from "../Components/Spots";
import { useState } from "react";


const AllSpots = () => {

    const spots = useLoaderData();
    const [data, setData] = useState(spots);

    const sortByPrice = () => {
        const sortedData = [...data].sort((a, b) => parseInt(b.cost) - parseInt(a.cost));
        setData(sortedData);
    };

    return (
        <div className="scrollbar-hide overflow-scroll">
            <BackGround>

                <div className="dropdown block w-52 mx-auto scroh">
                    <div tabIndex={0} role="button" className="btn btn-success text-white w-full">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={sortByPrice}>Sort By Average Cost</a></li>

                    </ul>
                </div>
                <div className="grid grid-cols-1 h-screen  scrollbar-hide overflow-y-scroll sm:h-[500px] sm:grid-cols-3 mt-5 gap-6 sm:max-w-7xl sm:mx-auto bg-transparent px-1 sm:px-0">
                    {
                        data.map((spot, idx) => <Spots key={idx} spots={spot}></Spots>)
                    }
                </div>

            </BackGround>
            

        </div>
    );
};

export default AllSpots;