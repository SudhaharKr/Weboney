
import Hero from "./Hero";
import { FaCheckCircle } from "react-icons/fa";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import VisionMission from "./VisionMission";
import WebDesignImage from "../../assets/web design.jpg";
import DigitalMarketingImage from "../../assets/digital marketing.jpg";
import Creative from "./Creative";


const Home = () => {
  const featureList = [
    { icon: <FaCheckCircle className="text-[#292F42]" />, text: "Creative" },
    { icon: <FaCheckCircle className="text-[#292F42]" />, text: "Passionate" },
    {
      icon: <FaCheckCircle className="text-[#292F42]" />,
      text: "Fully Customizable",
    },
    { icon: <FaCheckCircle className="text-[#292F42]" />, text: "Experience" },
    { icon: <FaCheckCircle className="text-[#292F42]" />, text: "Best Team" },
    {
      icon: <FaCheckCircle className="text-[#292F42]" />,
      text: "Great Support",
    },
  ];

 
  
  return (
   
    <div>
      <Hero />
      <div className="ml-20 mr-20 min-h-[120vh]">
        <div className="text-center">
          <h1 className="uppercase text-[#292F42] font-roboto text-[15px] mt-16 ml-10">
            A full service Complete Website Works, website designing and digital
            marketing Company
          </h1>
          <p className="text-[34px] w-[980px]  ml-[100px] p-6 font-semibold font-barlow">
            Relax knowing that our team will deliver your project promptly, with
            meticulous attention to detail.
          </p>
        </div>
        <div>
          <p className="w-[560px] mt-6 text-[26px] font-semibold font-barlow leading-[34.608px]">
            Our expertise in design, branding, and digital marketing ensures we
            connect you with the best professionals who`ll bring your vision to
            life. Get started today and let us make your dream project a
            reality.
          </p>
          <div className="flex gap-[200px]">
            <div className="grid grid-cols-2 w-[900px] h-[200px]">
              {featureList.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 mt-6 text-[18px]"
                >
                  {feature.icon}
                  <p className="font-roboto text-[17px]">{feature.text}</p>
                </div>
              ))}
              <div className="mt-10">
                <a
                  href="#"
                  className="px-8 py-4 bg-[#FFE665] w-[200px]  hover:text-white hover:bg-[#292F42] cursor-pointer transition-all duration-1000 rounded font-roboto text-[18px] font-medium flex items-center justify-center gap-3"
                >
                  Our Services
                </a>
              </div>
            </div>

            <div className="flex relative ml-40">
              <img
                src={WebDesignImage}
                alt="Web Design Image"
                className="w-[400px] h-[360px] -mt-[190px] rounded-lg mr-80 relative z-30"
              />
              <img
                src={DigitalMarketingImage}
                alt="Digital Marketing Image"
                className="absolute -top-[100px] w-[260px] h-[360px] ml-20 rounded-lg z-20"
              />
            </div>
          </div>
        </div>
      </div>

      <Creative/>
      <Services />
      <Projects />
      <VisionMission />
      <Contact />
      <Newsletter />
    </div>
  );
};

export default Home;
