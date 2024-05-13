import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import TitleBgImage from "../../assets/featured-title-bg.png";
import TNNImage from '../../assets/Digital Marketing/tnnsmm-370x370.png'
import DelhiSweetsImage from "../../assets/Digital Marketing/delhismm-370x370.png";
import SankaraaPromotersImage from "../../assets/Digital Marketing/sankarasmm-370x370.png";
import MPDentalClinicImage from "../../assets/Digital Marketing/mpdentalsmm-370x370.png";
import AvataDreamAcademyImage from "../../assets/Digital Marketing/avatarsmm-370x370.png";
import SrishtiEventzImage from "../../assets/Digital Marketing/shristismm-370x370.png";
import SreesJananiEBikesImage from "../../assets/Digital Marketing/jananismm-370x370.png";
import LandgrandImage from "../../assets/Digital Marketing/landgrandsmm-370x370.png";
import A2ZMobilesImage from "../../assets/Digital Marketing/a2zsmm-370x370.png";
import TamilCardsImage from "../../assets/Digital Marketing/tamilcardsmm-370x370.png";
import SSTallySoftCareImage from "../../assets/Digital Marketing/sstallysmm-370x370.png";
import PupaImage from "../../assets/Digital Marketing/pupasmm-370x370.png";

import Newsletter from "./Newsletter";
import { Pagination } from "swiper/modules";


const Digital = () => {
 

  return (
    
    <div>
       {/* Banner Image */}
       <div
        className=" py-20 px-20 text-center bg-cover"
        style={{
          backgroundImage: `url(${TitleBgImage})`,
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
          <span className="ml-4 font-roboto">Digital Marketing</span>
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
                      src={TNNImage}
                      alt="TNN Image"
                      className="object-cover"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlow">
                        TNN
                        </h2>
                        {/* Branding */}
                        <p className="text-lg font-roboto p-2">Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={DelhiSweetsImage}
                      alt="Delhi Sweets Image"
                      className="object-cover"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlow">
                        Delhi Sweets and Bakery
                        </h2>
                        {/* Branding */}
                        <p className="text-lg font-roboto p-2">Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={SankaraaPromotersImage}
                      alt="Sankaraa Promoters Image"
                      className="object-cover"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlow">
                          Sri Sankaraa Promoters
                        </h2>
                        {/* Branding */}
                        <p className="text-lg p-2 font-roboto">Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={MPDentalClinicImage}
                      alt="M.P Dental Clinic Image"
                      className="object-cover w-[370px]"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlow">
                        M.P Dental Clinic
                        </h2>
                        {/* Branding */}
                        <p className="text-lg p-2 font-roboto">Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={AvataDreamAcademyImage}
                      alt="Avata Dream Academy Image"
                      className="object-cover w-[370px]"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlow">Avatar Dream Academy - Zee Litera Valley School</h2>
                        {/* Branding */}
                        <p className="text-lg p-2">Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={
                        SrishtiEventzImage}
                      alt="SrishtiEventzImage"
                      className="object-cover w-[370px]"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlo">Srishti Eventz</h2>
                        {/* Branding */}
                        <p className="text-lg p-2">Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={SreesJananiEBikesImage}
                      alt="Sree's Janani E Bikes Image"
                      className="object-cover w-[370px]"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlow">Sree`s Janani E Bikes</h2>
                        {/* Branding */}
                        <p className="text-lg p-2 font-roboto">Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={LandgrandImage}
                      alt="Landgrand Image"
                      className="object-cover w-[370px]"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlow">Landgrand</h2>
                        {/* Branding */}
                        <p className="text-lg p-2 font-roboto">Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={A2ZMobilesImage}
                      alt="A2Z Mobiles Image"
                      className="object-cover w-[370px]"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlow">A2Z Mobiles</h2>
                        {/* Branding */}
                        <p className="text-lg p-2 font-roboto">Digital Marketing</p>
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
                      src={TamilCardsImage}
                      alt="Tamil Cards Image"
                      className="object-cover"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlow">
                        Tamil Cards
                        </h2>
                        {/* Branding */}
                        <p className="text-lg p-2 font-roboto">Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={SSTallySoftCareImage}
                      alt="SS Tally Soft Care Image"
                      className="object-cover"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlow">
                        SS Tally Soft Care
                        </h2>
                        {/* Branding */}
                        <p className="text-lg p-2 font-roboto">Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={PupaImage}
                      alt="Pupa Image"
                      className="object-cover"
                    />

                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Content container */}
                      <div className="text-white text-center">
                        {/* Image name */}
                        <h2 className="text-3xl font-barlow">
                        Pupa
                        </h2>
                        {/* Branding */}
                        <p className="text-lg p-2 font-roboto">Digital Marketing</p>
                      </div>
                    </div>
                  </div>
                  </div>
              </SwiperSlide>
              </Swiper>
    <Newsletter/>
    </div>
  )
}

export default Digital
