import { FaArrowRight } from "react-icons/fa";
import BrandingImage from "../../assets/Brand-Association-vs-Brand-Personality.webp";
import DigitalMarketingImage from "../../assets/digital-marketing-agency.jpg";
import LogoImage from "../../assets/portfolio-logo.png";
import WebsiteDevelopmentImage from "../../assets/website development.png";

const Projects = () => {
  const data = [
    {
      id: 1,
      bgImage: BrandingImage,
      name: "Branding",
      text: `Branding is the process of creating the brand identity of a
      company. This process also delivers materials that support the
      brand, like a logo, tagline, visual design, or tone of voice.`,
    },
    {
      id: 2,
      bgImage: DigitalMarketingImage,
      name: "Digital Marketing",
      text: ` Digital marketing is the promotion of brands to connect with
      potential customers using the internet and other forms of
      digital communication. This includes not only email, social
      media, and web-based advertising.`,
    },
    {
      id: 3,
      bgImage: LogoImage,
      name: "Logo",
      text: `A logo is a symbol or design used to identify a company or organization, as well as its products, services, employees, etc. In its simplest definition, a logo identifies.`,
    },
    {
      id: 4,
      bgImage: WebsiteDevelopmentImage,
      name: "Website Development",
      text: `Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however also include web design, web programming, and database management.`,
    },
  ];
  return (
    <div className="mt-6  py-20 bg-[#F8F9FA]">
      <div className="ml-20 mr-20">
        <h1 className="text-center uppercase text-[#292F42] text-[15px] font-roboto leading-[22.5px]">
          Crafting Your Vision: Specialized Design Solutions Tailored to Your
          Project
        </h1>
        <h1 className="text-center mt-6 leading-[42.024px] text-[34px] font-barlow text-[#292F42]">
          Revamping Your Online Presence: Tailored Solutions for Website Design,
          Website Development, and Digital Marketing
        </h1>
      </div>
      <div className="w-full min-h-screen flex flex-wrap px-10 py-10 gap-6 justify-center">
        {data.map((res, index) => {
          return (
            <div
            key={index}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(3, 15, 39, 0.7), transparent),url(${res.bgImage})`,
            }}
            className="w-[44%] text-white h-[400px] shadow bg-cover bg-center relative group transition-all duration-2000 ease-out"
          >
            <div className="absolute py-1 flex flex-col gap-y-2 bottom-10 px-6 bg-gradient-to-b from-transparent to-[black] w-full">
              <h1 className="text-[24px] font-barlow">{res.name}</h1>
              <hr className="border-gray-400"></hr>
              <h1 className="h-0 overflow-hidden group-hover:h-[auto] mt-6 transition-all duration-2000 ease-out font-roboto">
                {res.text}
              </h1>
              <div className="group-hover:text-[#FFE665] flex items-center gap-2 mt-2">
                View More <FaArrowRight />
              </div>
            </div>
          </div>
          
          
          );
        })}
      </div>
      <div className="text-center mt-6 flex justify-center">
        <a
          href="#"
          className="px-8 py-4 w-[200px] bg-[#FFE665] hover:text-white hover:bg-[#292F42] cursor-pointer transition-all duration-1000 rounded font-roboto text-[18px] font-medium flex items-center justify-center gap-3"
        >
          All Projects <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Projects;
