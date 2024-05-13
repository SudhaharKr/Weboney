import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import TitleBgImage from "../../assets/featured-title-bg.png";

import GetInTouch from "./GetInTouch";


const Contact = () => {
 

  const items = [
    { text: "Free Consultaion" },
    {
      icon: <FaPhoneAlt />,
      text: "+91 96888 85330",
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "Karur, Tamil Nadu",
    },
  ];
 
 
   return (
  
  
    <div>
      {/* Banner Image */}
      <div
        className=" py-20 px-20 text-center bg-cover"
        style={{
          backgroundImage: ` url(${TitleBgImage})`,
        }}
      >
        <h1 className="font-barlow text-3xl font-semibold">
          We Offer The Most Complete IT Solutions
        </h1>
        <div className="mt-4">
          <hr className="mx-auto w-20 h-[0.9vh] bg-[#FFE665]"></hr>
        </div>
        <div className="flex justify-center items-center pt-10">
          <a
            href="/"
            className="block mr-4 font-roboto text-[16px] font-[400] hover:text-[#FFE665]"
          >
            Home
          </a>
          <span>/</span>
          <span className="ml-4 font-roboto">Contact Us</span>
        </div>
      </div>

      
      <div className="flex pl-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[400px] h-[40vh] border-2 hover:bg-[#292F42] hover:text-white transition-all duration-1000 ease-in-out"
          >
            <h1 className="font-barlow text-[24px] font-600 p-6 text-center text-[#292F42] group hover:text-[#FFE665]">
              <span className="flex justify-center items-center gap-2">
                {item.icon}
                {item.text}
              </span>
            </h1>
            <p className="text-center font-roboto w-[300px] mx-10">
              We offer construction planning and programming from our highly
              experienced team of engineer and planners.
            </p>
            <div className="mt-8 flex justify-center">
              <button className="flex items-center gap-4 font-roboto">
                Call Us <FaArrowRight className="text-[#FFE665]" />
              </button>
            </div>
          </div>
        ))}
      </div>

     
      <GetInTouch/>
    

    </div>
  );
};

export default Contact;
