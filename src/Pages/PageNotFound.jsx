import { Link } from "react-router-dom";


const PageNotFound = () => {
    return (
        <div>
            <div className="min-h-screen text-center flex flex-col justify-center">
                

                <div className="space-y-4">
                    <h1 className="text-6xl">Opps...</h1>
                    <h2 className="text-4xl">Page Not Found</h2>
                    <Link className="btn" to={'/'}>Go Home</Link>
                </div>

            </div>
        </div>
    );
};

export default PageNotFound;