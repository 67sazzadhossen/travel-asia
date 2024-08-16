import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/SharedComponents/Loading";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const {user, loading } = useContext(AuthContext);

    const location = useLocation();
   
    if(loading) {
        return <Loading></Loading>
    }

    if(user){
        return children;
    }



    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;