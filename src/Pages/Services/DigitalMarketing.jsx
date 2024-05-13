import TitleBgImage from "../../assets/featured-title-bg.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import DelhiSweetsImage from "../../assets/Dig Marketing/Deldigi1.png";
import PupaImage from "../../assets/Dig Marketing/pupadigi1.png";
import A2ZMobilesImage from "../../assets/Dig Marketing/A2zdigi1.png";
import LandgrandImage from "../../assets/Dig Marketing/landgranddigi1.png";
import AvatarDreamAcademyImage from "../../assets/Dig Marketing/avaterdigi1.png";
import SreesJananiEBikesImage from "../../assets/Dig Marketing/jananidigi1.png";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const DigitalMarketing = () => {
  const contentData1 = [
    {
      title:
        "This organization makes whole complete strategies for your brand and runs them for you",
    },
    {
      text: "The internet is a goldmine of possibilities for a wide range of firms global. Leverage its power to your skills. Set up your digital presence at present and become aware of your market knowledge with weboney internet advertising and digital marketing agency’s website design services. From website design and progress to search engine optimization (SEO) and website upkeep, we’ve got you covered!",
    },
    {
      text: "Rather, weboney trusts it possesses search engine optimization (SEO) and social media optimization (SMO), and marketing abilities to power new shoppers to your website. Weboney has the experience and professionals to construct a custom internet site and use multiple digital marketing services to support any size enterprise in any business. In today’s digital world, it is primary to remain linked along with your consumers and potentialities to leverage new markets and develop what you are promoting.",
    },
  ];

  const contentData2 = [
    {
      title: "Digital Marketing Projects",
      subtitle: "We've featured a few works and case studies so far",
      titleClasses: "pt-20 text-[48px] font-barlow font-bold text-[#292F42]",
      subtitleClasses: "text-[22px] leading-10 text-[#FFE665]",
    },
  ];
  return (
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
          <span className="ml-4 font-roboto">
            Digital Marketing | SMO | SEO | SMM | Ads
          </span>
        </div>
      </div>

      <div className="px-20 py-5">
        {contentData1.map((section, index) => (
          <div key={index} className="py-4">
            {section.title && (
              <h1 className="font-barlow text-2xl font-bold ">
                {section.title}
              </h1>
            )}
            {section.text && (
              <p className="font-roboto text-base leading-7 ">
                {typeof section.text === "string" ? (
                  section.text
                ) : (
                  <span className="text-red-500">{section.text}</span>
                )}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="text-center px-20 py-10">
        {contentData2.map((section, index) => (
          <div key={index}>
            <h1 className={section.titleClasses}>{section.title}</h1>
            <p className={section.subtitleClasses}>{section.subtitle}</p>
          </div>
        ))}
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Autoplay, Navigation]}
          className="w-full mt-5 relative"
        >
          <SwiperSlide className="flex">
            <img src={DelhiSweetsImage} alt="Delhi Sweets Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PupaImage} alt="Pupa Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={A2ZMobilesImage} alt="A2Z Mobiles Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={LandgrandImage} alt="Landgrand Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={AvatarDreamAcademyImage}
              alt="Avatar Dream Academy Image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={SreesJananiEBikesImage}
              alt="Sree`s Janani E Bikes Image"
            />
          </SwiperSlide>
          <div className="absolute left-0 right-0 top-5 bottom-5">
            <div className="swiper-button-prev text-[#FFE665] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <FaCircleArrowLeft />
            </div>
            <div className="swiper-button-next text-[#FFE665] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <FaCircleArrowRight />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default DigitalMarketing;
