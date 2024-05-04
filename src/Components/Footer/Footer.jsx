import {
  FaInstagram,
  FaLocationDot,
  FaPhoneFlip,
  FaXTwitter,
} from "react-icons/fa6";
import WeboneyNewLogoImage from "../../assets/logo.png";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="w-[full] h-[56vh] bg-[#292F42] flex">
        <div className="ml-20 mr-20  py-14">
          <img
            src={WeboneyNewLogoImage}
            alt="Weboney New Logo Image"
            className="w-[100px] h-[100px]"
          />
          <p className="mt-5 w-[260px] font-roboto text-[15px] text-white opacity-60">
            Our computerized stage offers exhaustive B2B Branding and Website
            Development agency based in Karur and Coimbatore.
          </p>
          <div className="flex mt-4 gap-4 text-[16px] text-white opacity-60 cursor-pointer">
            <FaXTwitter className="hover:text-[#FFE665]" title="Twitter" />
            <FaFacebook className="hover:text-[#FFE665]" title="Facebook" />
            <FaLinkedinIn className="hover:text-[#FFE665]" title="LinkedIn" />
            <FaInstagram className="hover:text-[#FFE665]" title="Instagram" />
            <FaYoutube className="hover:text-[#FFE665]" title="YouTube" />
            <FaPinterest className="hover:text-[#FFE665]" title="Pinterest" />
            <IoMdMail className="hover:text-[#FFE665]" title="Mail" />
          </div>
        </div>

        <div className="py-14 w-[260px]">
          {" "}
          <h1 className="text-white font-barlow text-[24px]">Useful Links</h1>
          <ul>
            <li className="mt-6 grid grid-cols-2">
              {" "}
              <a
                href="/"
                className="text-gray-400 hover:text-white font-[16px]"
              >
                Home
              </a>
            </li>
            <li className="mt-2">
              {" "}
              <a
                href="/about"
                className="text-gray-400 hover:text-white font-[16px]"
              >
                About
              </a>
            </li>
            <li className="mt-2">
              {" "}
              <a
                href="/services"
                className="text-gray-400 hover:text-white font-[16px]"
              >
                Services
              </a>
            </li>
            <li className="mt-2">
              {" "}
              <a
                href="/projects"
                className="text-gray-400 hover:text-white font-[16px]"
              >
                Projects
              </a>
            </li>
            <li className="mt-2">
              {" "}
              <a
                href="/career"
                className="text-gray-400 hover:text-white font-[16px]"
              >
                Career
              </a>
            </li>
            <li className="mt-2">
              {" "}
              <a
                href="/contact-us"
                className="text-gray-400 hover:text-white font-[16px]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="py-14 w-[260px]">
          <h1 className="text-white font-barlow text-[24px]">Our Solutions</h1>
          <ul>
            <li className="mt-6">
              {" "}
              <a
                href="/"
                className="text-gray-400 hover:text-white font-[16px]"
              >
                Branding
              </a>
            </li>
            <li className="mt-2">
              {" "}
              <a
                href="/"
                className="text-gray-400 hover:text-white font-[16px]"
              >
                Website Design
              </a>
            </li>
            <li className="mt-2">
              {" "}
              <a
                href="/"
                className="text-gray-400 hover:text-white font-[16px]"
              >
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>
        <div className="py-14">
          {" "}
          <h1 className="text-white font-barlow text-[24px]">Contact Us</h1>
          <div className="flex items-center mt-6">
            <FaPhoneFlip className="text-[#FFE665] mt-1" />
            <span className="phone mt-1 ml-2 font-roboto text-[17px] text-white opacity-70">
              +91 96888 85330
            </span>
          </div>
          <hr className="w-[200px] h-1 mt-2 opacity-30"></hr>
          <div className="flex items-center mt-2">
            <FaLocationDot className="text-[#FFE665] mt-1" />
            <span className="phone mt-1 ml-2 font-roboto text-[17px] text-white opacity-70">
              Karur, Tamil Nadu
            </span>
          </div>
          <hr className="w-[200px] h-1 mt-2 opacity-30"></hr>
          <div className="flex items-center mt-2">
            <IoMdMail className="text-[#FFE665] mt-1" />
            <span className="phone mt-1 ml-2 font-roboto text-[17px] text-white opacity-70">
              <a href="mailto:weboneykarur@gmail.com">weboneykarur@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
      <div>
        <hr></hr>
        <div className="text-[white] bg-[#292F42] py-4">
          <p className="ml-20 font-roboto text-[15px]">
            &copy;{" "}
            <a className="text-[#FFE665]" href="/">
              Weboney
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
