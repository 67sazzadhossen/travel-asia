import { useLoaderData } from 'react-router-dom';
import BackGround from './../Components/SharedComponents/BackGround';

const SpotDetails = () => {

    const selectedSpot = useLoaderData();

    const {  image, spot, country, location, description, cost, seasonality, travelTime, visitor} = selectedSpot;

    return (
        <div>
            <BackGround>
                <div className="hero text-white bg-[#d1d5db39] rounded-2xl sm:max-w-7xl sm:mx-auto sm:p-6 shadow-lg">
                    <div className="hero-content flex-col lg:flex-row gap-5 sm:gap-10">
                        <img src={image} className="sm:w-[45%] rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl sm:text-5xl font-bold">{spot}</h1>
                            <h1 className="text-xl sm:text-2xl font-bold mt-2">Country : {country}</h1>
                            <p className="sm:py-6 py-4">{description}</p>
                            <p className="">Location : {location}</p>
                            <div className='grid grid-cols-2 sm:grid-cols-1'>
                                <div className='grid sm:grid-cols-2 sm:mt-4 mt-2 font-semibold'>
                                    <p className="">Cost : {cost}</p>
                                    <p className="">Seasonality : {seasonality}</p>
                                </div>
                                <div className='grid sm:grid-cols-2 mt-2 font-semibold'>
                                    <p className="">Travel Time : {travelTime}</p>
                                    <p className="">Visitor : {visitor}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BackGround>
        </div>
    );
};

export default SpotDetails;