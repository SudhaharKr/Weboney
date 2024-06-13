import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import TitleBgImage from "../../assets/featured-title-bg.png";

import SsTallyImage from "../../assets/Branding/sstallybrand-370x370.jpg";
import MetroMaskImage1 from "../../assets/Branding/Brand-2-370x370.jpg";
import DhanarathnaAvenueImage from "../../assets/Branding/b11-370x370.jpg";
import AgathiyarTradersImage from "../../assets/Branding/b3.jpg";
import TheFunToursImage from "../../assets/Branding/b7-1-370x370.jpg";
import TrivasiaAcademyImage from "../../assets/Branding/b17-370x370.jpg";
import VMDTradersImage from "../../assets/Branding/b8-370x370.jpg";
import MetroMaskImage2 from "../../assets/Branding/b2-1-370x370.jpg";
import InfolabImage from "../../assets/Branding/b10-1-370x370.jpg";
import SVPremiumRiceImage from "../../assets/Branding/b14-370x370.jpg";
import AirBlueImage from "../../assets/Branding/b4-370x370.jpg";
import SKTextilesImage from "../../assets/Branding/b16-370x370.jpg";
import CogiproImage from "../../assets/Branding/b6-370x370.jpg";
import HomePlusRetailsImage from "../../assets/Branding/b9-370x370.jpg";
import TNNJewallarsImage from "../../assets/Branding/b13-370x370.jpg";
import AvaniFeltzImage from "../../assets/Branding/b5-370x370.jpg";
import NavaladianAirconImage from "../../assets/Branding/B1-370x370.jpg";
import MaplaBiriyaniImage from "../../assets/Branding/b15-370x370.jpg";
import VirajImage from "../../assets/Branding/b12-370x370.jpg";
import Newsletter from "./Newsletter";
import { Pagination } from "swiper/modules";


const Branding = () => {


 
  return  (
   
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
          <span className="ml-4 font-roboto">Branding</span>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
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
                src={SsTallyImage}
                alt="Ss Tally Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Ss Tally Image
                  </h2>
                  {/* Branding */}
                  <p className="text-lg font-roboto p-2">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={MetroMaskImage1}
                alt="Metro Mask Image1"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Metro Mask</h2>
                  {/* Branding */}
                  <p className="text-lg font-roboto p-2">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={DhanarathnaAvenueImage}
                alt="Dhanarathna Avenue Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Dhanarathna Avenue</h2>
                  {/* Branding */}
                  <p className="text-lg p-2">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={AgathiyarTradersImage}
                alt="Agathiyar Traders Image"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlo">Agathiyar Traders</h2>
                  {/* Branding */}
                  <p className="text-lg p-2">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={TheFunToursImage}
                alt="The Fun Tours Image"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">The Fun Tours</h2>
                  {/* Branding */}
                  <p className="text-lg p-2">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={TrivasiaAcademyImage}
                alt="TrivasiaAcademyImage"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlo">Trivasia Academy</h2>
                  {/* Branding */}
                  <p className="text-lg p-2">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={VMDTradersImage}
                alt="VMD Traders Image"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-bold">VMD Traders</h2>
                  {/* Branding */}
                  <p className="text-lg p-2">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={MetroMaskImage2}
                alt="MetroMaskImage2"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlo">Metro Mask</h2>
                  {/* Branding */}
                  <p className="text-lg p-2">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={InfolabImage}
                alt="Infolab Image"
                className="object-cover w-[370px]"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlo">Infolab</h2>
                  {/* Branding */}
                  <p className="text-lg p-2">Branding</p>
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
                src={SVPremiumRiceImage}
                alt="SV Premium Rice Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    SV Premium Rice
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={AirBlueImage}
                alt="Air Blue Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Air Blue</h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={SKTextilesImage}
                alt="SK Textiles Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    SK Textiles
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={CogiproImage}
                alt="Cogipro Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Cogipro</h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={HomePlusRetailsImage}
                alt="Home Plus Retails Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlo">Home Plus Retails</h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={TNNJewallarsImage}
                alt="TNN Jewallars Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    TNN Jewallars
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={AvaniFeltzImage}
                alt="Avani Feltz Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Avani Feltz
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={NavaladianAirconImage}
                alt="Navaladian Aircon Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Navaladian Aircon
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={MaplaBiriyaniImage}
                alt="MaplaBiriyaniImage"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl  font-barlow">
                    Mapla Biriyani
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Branding</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-20">
          <div className="relative">
            {/* Image */}
            <img src={VirajImage} alt="Viraj Image" className="object-cover" />

            {/* Overlay for hover effect */}
            <div className="absolute inset-0 flex justify-center items-center  w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Viraj</h2>
                {/* Branding */}
                <p className="text-lg p-2 font-roboto">Branding</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Newsletter />
    </div>
  );
};

export default Branding;
