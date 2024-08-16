
import BackGround from './BackGround';

const Loading = () => {
    return (
        <div>
            <BackGround>
                <div className="flex items-center justify-center flex-col pt-40">
                    <div className=" loading loading-bars loading-lg"></div>
                </div>
            </BackGround>
        </div>
    );
};

export default Loading;