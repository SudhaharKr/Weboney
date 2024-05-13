import { FaRegEdit, FaDesktop } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import Number1Image from "../../assets/number-01_1.png";
import Number2Image from "../../assets/number-02_1.png";
import Number3Image from "../../assets/number-03_1.png";

const Creative = () => {
  const contentData = [
    {
      icon: (
        <FaRegEdit className="text-[66px] px-4 rounded-full bg-[#292F42] text-white" />
      ),
      number: "01.",
      title: "branding",
      image: Number1Image,
      description: "Provide Creative Industry to Grow Up Your Business.",
    },
    {
      icon: (
        <FaDesktop className="text-[66px] px-4 rounded-full bg-[#292F42] text-white" />
      ),
      number: "02.",
      title: "website design",
      image: Number2Image,
      description: "We provide digital web application Automation Your Work.",
    },
    {
      icon: (
        <SiGooglemarketingplatform className="text-[66px] px-4 rounded-full bg-[#292F42] text-white" />
      ),
      number: "03.",
      title: "digital marketing",
      image: Number3Image,
      description: "Helping to Your Brand Awareness with Digital Advertising.",
    },
  ];

  return (
    <div className="flex pr-10 pl-10 w-full h-[60vh] items-center bg-[#FFE665]">
    {contentData.map((item, index) => (
      <div
        key={index}
        className="mt-6 ml-6 flex gap-6 flex-wrap items-center z-40 w-[600px] relative"
      >
        {item.icon}
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-[22px] text-[#FFE665] font-barlow">
              {item.number}
            </span>
            <div className="capitalize font-semibold text-[22px] font-barlow">
              {item.title}
            </div>
            <img
              src={item.image}
              alt={`Number${index + 1} Image`}
              width={100}
              className="absolute z-10 -top-6 right-20"
            />
          </div>
          <p className="pt-2 w-[280px] text-[16px] font-roboto">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default Creative;
