
import BackGround from '../Components/SharedComponents/BackGround';

const Contact = () => {
    return (
        <div>
            <BackGround>
                <div className="sm:max-w-7xl sm:mx-auto bg-[#d1d5db66] rounded-2xl sm:h-[500px]">

                    <h1 className='text-2xl font-bold text-center pt-20'>Contact Us</h1>
                    <p className='text-center leading-8 px-64'>
                        Email: info@exploreasiatravels.com <br />
                        Phone: +1 (555) 123-4567 <br />
                        Address: 123 Main Street, City, Country, ZIP Code <br />
                        Social Media: Facebook, Instagram, Twitter <br />

                        For inquiries, bookings, or any assistance, feel free to reach out to us via email or phone. Our team is dedicated to ensuring you have a seamless and unforgettable travel experience in Asia.
                    </p>


                </div>
            </BackGround>
        </div>
    );
};

export default Contact;