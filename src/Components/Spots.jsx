import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Spots = ({ spots }) => {

    const { _id, image, spot, cost, seasonality, travelTime, visitor, } = spots;

    return (

        <div className="card bg-base-100 shadow-xl">
            <figure className="h-52"><img className="w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{spot}</h2>
                <div className="font-semibold space-y-1">
                    <p>Average Cost : {cost}</p>
                    <p>Total Visitor Per Year : {visitor}</p>
                    <p>Travel Time : {travelTime}</p>
                    <p>Season : {seasonality}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/spot-details/${_id}`}><button className="btn btn-primary w-full">View Details</button></Link>
                </div>
            </div>
        </div>

    );
};

Spots.propTypes = {
    spots: PropTypes.object,
}

export default Spots;