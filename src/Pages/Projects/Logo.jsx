import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import TitleBgImage from "../../assets/featured-title-bg.png";

import MetroMaskImage from "../../assets/Logo/L32-370x370.jpg";
import GeorgiaJoyImage from "../../assets/Logo/L16-370x370.jpg";
import JKMGranitesImage from "../../assets/Logo/L30-370x370.jpg";
import EyefocImage from "../../assets/Logo/L27-370x370.jpg";
import ZoopaaImage from "../../assets/Logo/l23-370x370.jpg";
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
import FitzandMaeImage from "../../assets/Logo/L14-370x370.jpg";
import AstrumImage from "../../assets/Logo/L36-370x370.jpg";
import BYTradersImage from "../../assets/Logo/L20-370x370.jpg";
import Newsletter from "./Newsletter";

const Logo = () => {
 
   return (
    
    <div>
      {/* Banner Image */}
      <div
        className=" py-20 px-20 text-center bg-cover"
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
          <span className="ml-4 font-roboto">Logo</span>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={Pagination}
        className="py-20"
      >
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-4 px-20">
            <div className="relative">
              {/* Image */}
              <img
                src={MetroMaskImage}
                alt="Metro Mask Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Metro Mask</h2>

                  <p className="text-lg font-roboto p-2">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={GeorgiaJoyImage}
                alt="Georgia Joy Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Georgia Joy
                  </h2>

                  <p className="text-lg font-roboto p-2">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={JKMGranitesImage}
                alt="JKM Granites Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">JKM Granites</h2>

                  <p className="text-lg p-2">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={EyefocImage}
                alt="Eyefoc Image"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Eyefoc</h2>

                  <p className="text-lg p-2">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={ZoopaaImage}
                alt="Zoopaa Image"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Zoopaa</h2>
                  {/* Logo */}
                  <p className="text-lg p-2">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={EkromaImage}
                alt="Ekroma Image"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Ekroma</h2>

                  <p className="text-lg p-2">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={AdhiAExportsImage}
                alt="Adhi A Exports Image"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Adhi A Exports</h2>

                  <p className="text-lg p-2">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={AppleElectronicsImage}
                alt="Apple Electronics Image"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Apple Electronics</h2>

                  <p className="text-lg p-2">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={GraceAmenitiesImage}
                alt="Grace Amenities Image"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Grace Amenities</h2>

                  <p className="text-lg p-2">Logo</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-4 px-20">
            <div className="relative">
              {/* Image */}
              <img
                src={A2ZMobilesImage}
                alt="A2ZMobilesImage"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    A2Z Mobiles
                  </h2>

                  <p className="text-lg p-2 font-roboto">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={CPSTextilesImage}
                alt="CPS Textiles Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    CPS Textiles
                  </h2>

                  <p className="text-lg p-2 font-roboto">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={JumboMerchandisingCorpImage}
                alt="Jumbo Merchandising Corp Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Jumbo Merchandising Corp
                  </h2>

                  <p className="text-lg p-2 font-roboto">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={TheContractorsShopImage}
                alt="The Contractors Shop Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    The Contractors Shop
                  </h2>

                  <p className="text-lg p-2 font-roboto">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={ThunikadaiImage}
                alt="Thunikadai Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Thunikadai</h2>

                  <p className="text-lg p-2 font-roboto">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={HomePlusImage}
                alt="Home Plus Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Home Plus</h2>

                  <p className="text-lg p-2 font-roboto">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={FitzandMaeImage}
                alt="Fitz and Mae Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Fitz & Mae</h2>

                  <p className="text-lg p-2 font-roboto">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={AstrumImage}
                alt="Astrum Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Astrum</h2>

                  <p className="text-lg p-2 font-roboto">Logo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={BYTradersImage}
                alt="BYTradersImage"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">BY Traders</h2>

                  <p className="text-lg p-2 font-roboto">Logo</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Newsletter />
    </div>
  );
};

export default Logo;
