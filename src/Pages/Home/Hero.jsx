import { FaArrowRight, FaCaretRight } from "react-icons/fa";
import WebDesignandDevelopment from "../../assets/website.jpg";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {/* Background image */}
      <div
        style={{
          backgroundImage: `linear-gradient(to right, #000, #0000), url(${WebDesignandDevelopment})`,
        }}
        className="w-full h-[120vh] bg-cover bg-center bg-no-repeat text-[#fff] flex flex-col justify-center items-center bg-opacity-50 animate-zoom"
      >
        <p className="pt-20 px-20 text-[65px] max-w-[1000px] mt-12 font-barlow text-center">
          We
          <span className="font-semibold text-[#FFE665]">
            {" "}
            Cultivate Imaginative & Inventive Approaches...
          </span>
        </p>
        <div className="mt-10 flex items-center gap-6">
          <a href="/about">
            <FaCaretRight className="text-[100px] py-8 rounded-full font-bold text-white bg-[#292F42] hover:bg-[#292f428e] transition-all duration-1000 ease-in-out" />
          </a>
          <a href="/contact">
            <button className="w-[160px] h-[60px] shadow-2xl flex hover:bg-[#292F42] leading-[27px] hover:text-white cursor-pointer transition-all duration-1000 rounded text-white bg-transparent text-[18px] font-[500] font-roboto items-center justify-center gap-2">
              Call Us Now <FaArrowRight />
            </button>
          </a>
        </div>
        <div className="mt-8 flex justify-center transition-transform duration-1000 cursor-pointer ease-in-out transform hover:translate-y-4">
          <MdOutlineKeyboardDoubleArrowDown className="text-[16px] w-[200px] h-[40px] font-roboto font-[400]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
