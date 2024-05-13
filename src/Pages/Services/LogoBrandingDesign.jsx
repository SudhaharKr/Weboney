import TitleBgImage from "../../assets/featured-title-bg.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import MetroMaskImage from "../../assets/Logo/L32-370x370.jpg";
import GeorgiaJoyImage from "../../assets/Logo/L16-370x370.jpg";
import SSTallyCareImage from "../../assets/Branding/sstallybrand-370x370.jpg";
import MetroMaskBrandImage from "../../assets/Branding/Brand-2-370x370.jpg";
import JKMGranitesImage from "../../assets/Logo/L30-370x370.jpg";
import EyefocImage from "../../assets/Logo/L27-370x370.jpg";
import ZooppaImage from "../../assets/Logo/l23-370x370.jpg";
import EkromaImage from "../../assets/Logo/L12-370x370.jpg";
import AdhiAExportsImage from "../../assets/Logo/L4-370x370.jpg";
import AppleElectronicsImage from "../../assets/Logo/L6-370x370.jpg";
import GraceAmenitiesImage from "../../assets/Logo/l7-370x370.jpg";
import A2ZMobilesImage from "../../assets/Logo/L2-370x370.jpg";
import CPSTextilesImage from "../../assets/Logo/L22-370x370.jpg";
import JumboMerchandisingCorpImage from "../../assets/Logo/L24-370x370.jpg";
import TheContractorsShopImage from "../../assets/Logo/L18-370x370.jpg";
import ThunikadaiImage from "../../assets/Logo/L34-370x370.jpg";
import HomePlusImage from "../../assets/Logo/logo-1-370x370.jpg";
import FitsMaeImage from "../../assets/Logo/L14-370x370.jpg";
import AstrumImage from "../../assets/Logo/L36-370x370.jpg";
import BYTradersImage from "../../assets/Logo/L20-370x370.jpg";
import DhanarathnaAvenueImage from "../../assets/Branding/b11-370x370.jpg";
import AgathiyarTradersImage from "../../assets/Branding/b3.jpg";
import TheFunToursImage from "../../assets/Branding/b7-1-370x370.jpg";
import TrivasiaAcademyImage from "../../assets/Branding/b17-370x370.jpg";
import VMDTextilesImage from "../../assets/Branding/b8-370x370.jpg";
import MetroMaskBrand2Image from "../../assets/Branding/b2-1-370x370.jpg";
import InfolabImage from "../../assets/Branding/b10-1-370x370.jpg";
import SVPremiumRiceImage from "../../assets/Branding/b14-370x370.jpg";
import SKTextilesImage from "../../assets/Branding/b16-370x370.jpg";
import AirBlueImage from "../../assets/Branding/b4-370x370.jpg";
import CogiproImage from "../../assets/Branding/b6-370x370.jpg";
import HomePlueRetailsImage from "../../assets/Branding/b9-370x370.jpg";
import TNNJewellarsImage from "../../assets/Branding/b13-370x370.jpg";
import AvaniFeltzImage from "../../assets/Branding/b5-370x370.jpg";
import NavaladianAirconImage from "../../assets/Branding/B1-370x370.jpg";
import MaplaBiriyaniImage from "../../assets/Branding/b15-370x370.jpg";
import VirajImage from "../../assets/Branding/b12-370x370.jpg";

// import required modules

import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { Navigation } from "swiper/modules";

const LogoBrandingDesign = () => {
  const contentData1 = [
    {
      title:
        "Strengthening Your Logo & Brand Identity with a Thought-Provoking a Business",
      paragraphs: [
        "At ",
        {
          link: {
            href: "/",
            text: "Weboney",
            classes:
              "span text-[16px] font-bold font-barlow hover:text-[#FFE665] transition-all duration-1000 ease-in-out",
          },
        },
        " we shape your brand to be a BIG THING for tomorrow. To do this, we mix the best plan to approach with inventive strategies, which imply an ideal brand character for a promising user experience, and throughout the years, we’ve developed several successful ",
        { span: "Logo Design" },
        " ideas for a variety of branding projects. We always explore new directions and develop alternate options for a logo design… always pushing the boundaries. We are a ",
        {
          link: {
            href: "https://in.pinterest.com/Weboney_india/",
            text: "Branding Design Agency",
            classes: "strong",
          },
        },
        " so in addition to logo design, we also specialize in Promotion Post designs, Brand development, and all graphic design across lots of different industry sectors and graphic design disciplines.",
      ],
    },
    {
      paragraphs: [
        "While you look at successful famed brands or even hear about them, the very first thing that comes to your reminiscence is their brand that sticks right on goal aside from their names. ",
        {
          strong:
            "Ex: Apple, Amazon, Microsoft, Coca-Cola, Toyota, Mercedes-Benz…",
        },
      ],
    },
  ];

  const contentData2 = [
    {
      title: "Logo & Branding Projects",
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
          <span className="ml-4 font-roboto">Logo & Branding Design</span>
        </div>
      </div>

      <div className="px-20">
        {contentData1.map((section, index) => (
          <div key={index} className="py-4">
            {section.title && (
              <h1 className="text-[20px] font-barlow font-bold py-5">
                {section.title}
              </h1>
            )}
            <p className="font-roboto text-[16px] leading-8">
              {section.paragraphs.map((part, partIndex) =>
                typeof part === "string" ? (
                  part
                ) : part.link ? (
                  <a
                    key={partIndex}
                    href={part.link.href}
                    className={part.link.classes}
                  >
                    {part.link.text}
                  </a>
                ) : part.span ? (
                  <span key={partIndex} className="span">
                    {part.span}
                  </span>
                ) : part.strong ? (
                  <strong key={partIndex} className="strong">
                    {part.strong}
                  </strong>
                ) : null
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center py-20 px-20">
        {contentData2.map((section, index) => (
          <div key={index}>
            <h1 className={section.titleClasses}>{section.title}</h1>
            <p className={section.subtitleClasses}>{section.subtitle}</p>
          </div>
        ))}
      

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        grabCursor={true}
        navigation={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        className="w-full mt-5 relative"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={MetroMaskImage} alt="MetroMaskImage" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Metro Mask</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={GeorgiaJoyImage} alt="Georgia Joy Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Georgia Joy</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={SSTallyCareImage} alt="SS Tally Care Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">SS Tally Care</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={MetroMaskBrandImage} alt="Metro Mask Brand Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Metro Mask</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={JKMGranitesImage} alt="JKM Granites Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">JKM Granites</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={EyefocImage} alt="Eyefoc Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Eyefoc</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={ZooppaImage} alt="Zooppa Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Zooppa</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={EkromaImage} alt="Ekroma Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Ekroma</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={AdhiAExportsImage} alt="Adhi A Exports Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Adhi A Exports</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={AppleElectronicsImage} alt="Apple Electronics Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Apple Electronics</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={GraceAmenitiesImage} alt="Grace Amenities Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Grace Amenities</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={A2ZMobilesImage} alt="A2Z Mobiles Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">A2Z Mobiles</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={CPSTextilesImage} alt="CPS Textiles Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">CPS Textiles</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={JumboMerchandisingCorpImage}
              alt="Jumbo Merchandising Corp Image"
            />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">
                  Jumbo Merchandising Corp
                </h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={TheContractorsShopImage}
              alt="The Contractors Shop Image"
            />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">The Contractors Shop</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={ThunikadaiImage} alt="Thunikadai Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Thunikadai</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={HomePlusImage} alt="HomePlus Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Home Plus</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={FitsMaeImage} alt="Fits & Mae Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Fits & Mae</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={AstrumImage} alt="Astrum Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Astrum</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={BYTradersImage} alt="BY Traders Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">BY Traders</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Logo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={DhanarathnaAvenueImage} alt="Dhanarathna Avenue Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Dhanarathna Avenue</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={AgathiyarTradersImage} alt="Agathiyar Traders Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Agathiyar Traders</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={TheFunToursImage} alt="The Fun Tours Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">The Fun Tours</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={TrivasiaAcademyImage} alt="Trivasia Academy Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Trivasia Academy</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={VMDTextilesImage} alt="VMD Textiles Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">VMD Textiles</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={MetroMaskBrand2Image} alt="Metro Mask Brand Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Metro Mask</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={InfolabImage} alt="Infolab Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Infolab</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={SVPremiumRiceImage} alt="SV Premium Rice Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">SV Premium Rice</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={SKTextilesImage} alt="SK Textiles Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">SK Textiles</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={AirBlueImage} alt="Air Blue Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Air Blue Image</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={CogiproImage} alt="Cogipro Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Cogipro</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={HomePlueRetailsImage} alt="Home Plue Retails Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Home Plue Retails</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={TNNJewellarsImage} alt="TNN Jewellars Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">TNN Jewellars</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={AvaniFeltzImage} alt="Avani Feltz Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Avani Feltz</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={NavaladianAirconImage} alt="Navaladian Aircon Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Navaladi Aircon</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={MaplaBiriyaniImage} alt="Mapla Biriyani Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Mapla Biriyani</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={VirajImage} alt="Viraj Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Viraj</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Branding</p>
              </div>
            </div>
          </div>
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

export default LogoBrandingDesign;
