import CompLogo from "../../assets/Weboney New Logo.png";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between px-20 py-10 pr-10 sm:px-20 ">
        <a href="/">
          <img src={CompLogo} alt="CompLogo" width={200} />
        </a>
        <div className="navbar-right flex justify-end items-center gap-10 ml-10">
          <div className="flex flex-col">
            <h1 className="main-heading text-[15px] text-[#292F42] font-roboto">
              Phone Numbers
            </h1>
            <div className="flex items-center">
              <FaPhoneAlt className="text-[#FFE665] mt-1" />
              <span className="phone mt-1 ml-1 font-roboto">
                +91 96888 85330
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="main-heading font-roboto text-[#292F42] text-[15px]">
              Email Address
            </h1>
            <div className="flex items-center">
              <IoMdMail className="text-[#FFE665] mt-1" />
              <span className="email mt-1 ml-1 font-roboto">
                weboneykarur@gmail.com
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="main-heading font-roboto text-[#292F42] text-[15px]">
              Our Location
            </h1>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#FFE665] mt-1" />
              <span className="location mt-1 ml-1 font-'roboto">
                Karur, Tamil Nadu
              </span> 
            </div>
          </div>
        </div>
        <div className="items-center flex ">
          <button className="font-roboto py-3 px-6 text-white font-bold bg-[#FFE665] hover:bg-[#292F42]">
            Theme Docs
          </button>
        </div>
      </div>
      <div className="!z-50 relative">
        <div className="bg-[#292F42] rounded-lg mr-20 ml-20 py-6 -mt-6 -mb-9 ">
          <ul
            id="menu"
            className="nav-link font-roboto flex flex-col sm:flex-row py-6 sm:py-0 sm:items-center ml-20"
            style={{ gap: "2.6rem" }}
          >
            <li>
              <a
                href="/"
                className="nav-link text-white hover:text-[#FFE665] font-[16px]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="nav-link text-white hover:text-[#FFE665]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="nav-link text-white hover:text-[#FFE665]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="nav-link text-white hover:text-[#FFE665]"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/career"
                className="nav-link text-white hover:text-[#FFE665]"
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="nav-link text-white hover:text-[#FFE665]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
