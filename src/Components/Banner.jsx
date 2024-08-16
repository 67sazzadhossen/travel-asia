import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';
import { useLoaderData } from 'react-router-dom';

const Banner = () => {

    const spots = useLoaderData()

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className='sm:h-screen h-[250px] w-full'
        >
            {
                spots.map((spot, idx) =>
                    <SwiperSlide key={idx}>
                        <img className='w-full relative h-full' src={spot.image} alt="" />
                        <div className='absolute text-center text-white bottom-[20%] top-[20%] sm:bottom-[35%] sm:top-[35%] sm:max-w-7xl sm:left-[10%] sm:right-[10%] block space-y-2 bg-[#00000019] p-6 rounded-xl'>
                            <h1 className='font-bold sm:text-4xl text-2xl'>{spot.spot}</h1>
                            <p>{spot.description.slice(0,200)}</p>
                        </div>
                    </SwiperSlide>
                )
            }

            ...
        </Swiper>
    );
};

export default Banner;