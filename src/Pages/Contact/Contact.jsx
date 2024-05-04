import {
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import TitleBgImage from "../../assets/featured-title-bg.png";
import ITSolutions from "../../assets/inf tech.jpg";
import GetInTouch from "./GetInTouch";
import Testimonial from "./Testimonial";
import Clients from "./Clients";
import Newsletter from "./Newsletter";
const Contact = () => {
  const bulletPoints = [
    "Our goal is manufacture good quality products.",
    "Review functions of equipments and tools.",
    "Innovative manufacturing methods.",
    "A solid experience in IT company.",
  ];

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

      <div className="flex">
        <div className="w-[600px] h-[70vh] ml-20">
          <img
            src={ITSolutions}
            alt="IT Solutions"
            className="w-[900px] h-[100vh]"
          />
        </div>
        <div className="w-[700px] h-[110vh] mr-20 px-20 py-20">
          <h1 className="font-barlow text-[28px] font-[600]">
            Our goal is to provide efficiency and quality on time projects
          </h1>
          <hr className="w-[46px] h-[1vh] bg-[#FFE665] mt-2"></hr>
          <p className="pt-4 font-roboto text-[#292F42]">
            We believe that every project is unique, and can customize our
            approach to fit your particular project. This commitment to
            uniqueness not only adds value to the final product but also
            reflects our dedication to craftsmanship and excellence.
          </p>
          {bulletPoints.map((point, index) => (
            <div key={index} className="pt-10 flex items-center gap-4">
              <FaCheckCircle className="text-[18px] text-[#292F42]" />
              <p className=" w-[500px] font-roboto text-[17px] font-[500]">
                {point}
              </p>
            </div>
          ))}
          <div className="mt-10">
            <a
              href="#"
              className="py-4 bg-[#FFE665] w-[140px]  hover:text-white hover:bg-[#292F42] cursor-pointer transition-all duration-1000 rounded font-roboto text-[17px] font-[500] flex items-center justify-center gap-3"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      <div className="flex pl-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[400px] h-[40vh] border-2 hover:bg-[#FFE665] hover:text-white"
          >
            <h1 className="font-barlow text-[24px] font-600 p-6 text-center text-[#292F42]">
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

      <Testimonial/>
      <GetInTouch/>
      <Clients/>
      <Newsletter/>

    </div>
  );
};

export default Contact;
