
// eslint-disable-next-line react/prop-types
const BackGround = ({children}) => {
    return (
        <div className="h-screen bg-banner bg-no-repeat bg-cover bg-fixed">
            <div className="h-screen bg-[#00000059] pt-28 ">
               {children}
            </div>
        </div>
    );
};

export default BackGround;