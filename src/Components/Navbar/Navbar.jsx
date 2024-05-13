import CompLogo from "../../assets/Weboney New Logo.png";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdArrowDropdown , IoMdMail,  } from "react-icons/io";

const Navbar = () => {
  const menuItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    {
      href: "#",
      text: "Services",
      icon: <IoMdArrowDropdown  />,
      submenu: [
        { href: "/logo-branding-design", text: "Logo & Branding Design" },
        { href: "/website-design", text: "Website Design" },
        { href: "/digital_marketing", text: "Digital Marketing" },
        { href: "/mobile-app-development", text: "Mobile App Development" },
      ],
    },
    {
      href: "#",
      text: "Projects",
      icon: <IoMdArrowDropdown  />,
      submenu: [
        { href: "/branding", text: "Branding" },
        { href: "/digital-marketing", text: "Digital Marketing" },
        { href: "/logo", text: "Logo" },
        { href: "/website-development", text: "Website Development" },
      ],
    },
    { href: "/career", text: "Career" },
    { href: "/contact", text: "Contact" },
  ];

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
            Get a Quote
          </button>
        </div>
      </div>
      <div className="z-50 relative">
  <div className="bg-[#292F42] rounded-lg mr-20 ml-20 py-6 -mt-6 -mb-9">
    <ul
      id="menu"
      className="nav-link font-roboto flex flex-col sm:flex-row py-6 sm:py-0 sm:items-center ml-20"
      style={{ gap: "2.6rem" }}
    >
      {menuItems.map((item, index) => (
        <li key={index} className="relative group flex items-center"> {/* Modified to flex */}
          <a
            href={item.href}
            className="nav-link text-white relative hover:text-[#FFE665] flex items-center" 
          >
            <span className="absolute top-6 left-0 w-full h-0.5 bg-[#FFE665] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            {item.text}
            {item.icon && (
              <span className="ml-1 text-[16px]">{item.icon}</span>
            )}
          </a>
          {item.submenu && (
            <ul className="absolute hidden top-full left-0  w-[240px] bg-[#292F42] rounded-lg py-2 px-4 shadow-lg group-hover:block">
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <a
                    href={subItem.href}
                    className="text-white hover:text-[#FFE665] block py-2"
                  >
                    {subItem.text}
                   
                  </a> <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFE665] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
</div>
</div>
  );
};

export default Navbar;
