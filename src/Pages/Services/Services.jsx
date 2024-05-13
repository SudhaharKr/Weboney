import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import TitleBgImage from "../../assets/featured-title-bg.png";
import LogoBrandingDesign from "../../assets/5156258_2701822.png";
import WebsiteDesignImg from "../../assets/2488324_353612-PAPQHP-44.png";
import DigitalMarketingImage from "../../assets/7378401_31958.jpg";
import MobileAppImage from "../../assets/representations-user-experience-interface-design.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import "swiper/css";

import "tailwindcss/tailwind.css";


// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Newsletter from "./Newsletter";


const Services = () => {
  

  return  (
  
    <div>
      {/* Banner Image */}
      <div
        className="py-20  text-center bg-cover"
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
          <span className="ml-4 font-roboto">Services</span>
        </div>
      </div>

      <div className="max-w-screen-2xl h-[160vh] pt-20 pl-20 px-10">
        <div className="text-center">
          <h1 className="font-roboto text-[15px] font-[400] uppercase text-[#292F42]">
            Website Design and Digital Marketing
          </h1>
          <h1 className="text-3xl font-bold font-barlow pt-5 ">
            Leveraging Online Platforms for Enhanced Visibility and Growth
          </h1>
        </div>
        <div className="flex">
          <div className="w-96 h-[111vh]   mt-8 p-2">
            <p className="font-barlow text-[28px] font-[600]">
              Unveiling Our Online Services for Seamless Integration into Your
              Digital Journey
            </p>
            <hr className=" w-16 h-[0.9vh] bg-[#FFE665] mt-3"></hr>
            <p className="font-roboto text-[16px] pt-4">
              The benefits of applying effective construction engineering
              solutions to a project are many:
            </p>
            <div className="pt-10 flex items-center gap-4">
              <FaCheckCircle className="text-[25px] text-[#292F42]" />
              <p className=" w-[500px] font-roboto text-[17px] font-[500]">
                Optimizing Online Costs
              </p>
            </div>
            <div className="pt-10 flex items-center gap-4">
              <FaCheckCircle className="text-[25px] text-[#292F42]" />
              <p className=" w-[500px] font-roboto text-[17px] font-[500]">
                Elevating Quality and Safety
              </p>
            </div>
            <div className="pt-10 flex items-center gap-4">
              <FaCheckCircle className="text-[25px] text-[#292F42]" />
              <p className=" w-[500px] font-roboto text-[17px] font-[500]">
                Mitigating Online Risks
              </p>
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay,Pagination]}
            pagination={{
              clickable: true,
            }}
            navigation={{
              clickable: true,
            }}
           grabCursor={true}
            onTouchMove={""}
            className="text-center"
          >
            {/* First Slider */}
            <SwiperSlide className="flex justify-center p-2 gap-6">
                <div className="w-96 h-full mt-8 border-6">
                  <img
                    src={LogoBrandingDesign}
                    alt="Logo & Branding Design"
                    className="w-full h-[full] border-2 rounded-md"
                  />
                  <div className="w-96 h-[60vh] bg-white p-6 border-2 rounded-md">
                    <h1 className="font-barlow text-2xl font-semibold">
                      Logo & Branding Design
                    </h1>
                    <hr className="w-90 h-[0.6vh] bg-[#FFE665] mt-4" />
                    <p className="p-2 text-justify font-roboto text-[16px] text-black/60">
                      At Weboney, we specialize in shaping brands to become future
                      powerhouses. Our approach combines strategic planning with
                      innovative strategies to craft the perfect brand identity
                      for an exceptional user experience. Over the years, we`ve
                      curated numerous successful logo design concepts for a
                      diverse range of branding initiatives.
                    </p>
                    <div className="text-left p-2">
                      <button className="flex items-center gap-2 hover:text-[#292F42] text-black/60 font-roboto text-[16px]">
                        Learn More <FaArrowRight className="text-[#292F42]" />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              <div className="w-96 h-[40vh] mt-8">
                <img
                  src={WebsiteDesignImg}
                  alt="Website Design Image"
                  className="w-full h-[57vh] border-2 rounded-md"
                />
                <div className="w-96 h-[60vh] bg-white border-2 rounded-md p-6">
                  <h1 className="font-barlow text-2xl font-semibold">
                    Website Design
                  </h1>
                  <hr className="w-90 h-[0.6vh] bg-[#FFE665] mt-4" />
                  <p className="p-2 px-4 text-justify font-roboto text-[16px] text-black/60">
                    In today`s digital age, establishing a digital presence
                    extends beyond merely creating a website and waiting for
                    clients to engage with your business. Your website
                    represents the cornerstone of your brand online. It acts as
                    the primary touchpoint for your consumers and a crucial
                    platform for conversions.
                  </p>
                  <div className="text-left p-2 px-4">
                    <button className="flex items-center gap-2 hover:text-[#292F42] text-black/60 font-roboto text-[16px]">
                      Learn More <FaArrowRight className="text-[#292F42]" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Second Slider */}
            <SwiperSlide className="flex justify-center p-2 gap-6">
              <div className="w-96 h-[57vh] bg-slate-400 mt-8">
                <img
                  src={DigitalMarketingImage}
                  alt="Digital Marketing Image"
                  className="w-full h-full border-2 rounded-md"
                />
                <div className="w-96 h-[60vh] bg-white p-6 border-2 rounded-md">
                  <h1 className="font-barlow text-2xl font-semibold">
                    Digital Marketing
                  </h1>
                  <hr className="w-90 h-[0.6vh] bg-[#FFE665] mt-4" />
                  <p className="p-2 px-4 text-justify font-roboto text-[16px] text-black/60">
                    The internet offers boundless opportunities for businesses
                    worldwide. Harness its potential to your advantage.
                    Establish your digital footprint today and uncover your
                    market potential with Weboney`s internet advertising and
                    digital marketing agency. 
                  </p>
                  <div className="text-left p-2 px-4">
                    <button className="absolute bottom-12 flex items-center gap-2 hover:text-[#292F42] text-black/60 font-roboto text-[16px]">
                      Learn More <FaArrowRight className="text-[#292F42]" />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-96 h-[57vh] bg-slate-400 mt-8">
                <img
                  src={MobileAppImage}
                  alt="Mobile App Image"
                  className="w-full h-full border-2 rounded-md"
                />
                <div className="w-96 h-[60vh] relative p-6 border-2 rounded-md">
                  <h1 className="font-barlow text-2xl font-semibold">
                    Mobile App Development
                  </h1>
                  <hr className="w-90 h-[0.6vh] bg-[#FFE665] mt-4" />
                  <p className="p-2 px-4 text-justify font-roboto text-[16px] text-black/60">
                    Mobile app development involves creating applications
                    specifically designed to operate on mobile devices. These
                    apps can either come pre-installed on devices or be
                    downloaded and installed later, depending on the device`s
                    network capabilities.
                  </p>
                  <div className="text-left p-2 px-4 absolute bottom-9">
                    <button className="flex items-center gap-2 hover:text-[#292F42] text-black/60 font-roboto text-[16px]">
                      Learn More <FaArrowRight className="text-[#292F42]" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Newsletter/>
    </div>
  );
};

export default Services;
