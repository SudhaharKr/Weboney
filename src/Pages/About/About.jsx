import { FaCheckCircle } from "react-icons/fa";
import TitleBgImage from "../../assets/featured-title-bg.png";
import WebDesignImage from "../../assets/2488324_353612-PAPQHP-44.jpg";
import WebDevelopmentImage from "../../assets/25001216_7040859.jpg";
import Counter from "./Counter";

import Newsletter from "./Newsletter";
import Clients from "./Clients";
import Testimonial from "./Testimonial";

const About = () => {
  

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
          <span className="ml-4 font-roboto">About</span>
        </div>
      </div>
      <div className="flex">
        <div className="w-[800px]">
          <div className="ml-20 mr-20 pt-20">
            <h1 className="font-barlow text-[28px] font-[600] w-[580px]">
              Empowering businesses with unique digital solutions.
            </h1>
            <div className="mt-2">
              <hr className=" w-20 h-[0.7vh] bg-[#FFE665]"></hr>
            </div>
            <p className="pt-10 w-[510px] font-roboto text-[16px] font-[400] text-black/60">
              Our approach to website design mirrors construction: client
              collaboration lays the foundation for success.
            </p>
            <div className="pt-10 flex items-center gap-4">
              <FaCheckCircle className="text-[18px] text-[#292F42]" />
              <p className=" w-[500px] font-roboto text-[17px] font-[500]">
                Each website we develop is a testament to our unique fusion of
                engineering and digital craftsmanship.
              </p>
            </div>
            <div className="pt-10 flex items-center gap-4">
              <FaCheckCircle className="text-[18px] text-[#292F42]" />
              <p className=" w-[500px] font-roboto text-[17px] font-[500]">
                Transforming our clients digital dreams into reality, one
                website at a time.
              </p>
            </div>
            <div className="pt-10 flex items-center gap-4">
              <FaCheckCircle className="text-[18px] text-[#292F42]" />
              <p className=" w-[500px] font-roboto text-[17px] font-[500]">
                Each website we develop is a testament to our unique fusion of
                engineering and digital craftsmanship.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="#"
                className="py-4 bg-[#FFE665] w-[140px]  hover:text-white hover:bg-[#292F42] cursor-pointer transition-all duration-1000 rounded font-roboto text-[17px] font-[500] flex items-center justify-center gap-3"
              >
                Our Projects
              </a>
            </div>
          </div>
        </div>
        <div className="flex relative mr-40 mt-20">
          <img
            src={WebDevelopmentImage}
            alt="Web Development Image"
            className=" w-[260px] h-[360px] -bottom-[100px] mr-20 rounded-lg relative z-30"
          />
          <img
            src={WebDesignImage}
            alt="Web Design Image"
            className="absolute top-[180px] -mt-[190px] rounded-lg ml-20"
          />
        </div>
      </div>
      <Counter />
      <Testimonial/>
      <Clients />
      <Newsletter />
    </div>
  );
};

export default About;
