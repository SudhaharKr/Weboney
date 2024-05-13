import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import TitleBgImage from "../../assets/featured-title-bg.png";

import SriPonbalaCoirImage from "../../assets/Website Development/Sri-pon-bala-coir-logo-weboney-370x370.jpg";
import TexmartExportsImage from "../../assets/Website Development/textmart-logo-weboney-370x370.jpg";
import SriGokulTexImage from "../../assets/Website Development/sri-gokul-tex-logo-weboney.jpg";
import MahaExportImage from "../../assets/Website Development/Mahaexport-logo-weboney-370x370.jpg";
import KarurExpressImage from "../../assets/Website Development/Karurxpress-logo-370x370.jpg";
import HomeAharaaImage from "../../assets/Website Development/Homeaharaa-logo-370x370.jpg";
import GPTextilesImage from "../../assets/Website Development/Gp-textiles-logo-370x370.jpg";
import CoralGraphicsImage from "../../assets/Website Development/coral-graphics-logo-370x370.jpg";
import AprTradersImage from "../../assets/Website Development/apr-logo-WEBONEY-370x370.jpg";
import JaiHandloomsImage from "../../assets/Website Development/WhatsApp-Image-2022-07-01-at-4.14.43-PM-370x370.jpeg";
import IndyeurImage from "../../assets/Website Development/indyeur-logo-weboney1-4-370x370.jpg";
import KonguMessImage from "../../assets/Website Development/kongu-logo-weboney-1-370x370.jpg";
import JeyamVegetablesImage from "../../assets/Website Development/Jeyam-Vegetables_eCommerce-Web-Design-Custom-eCommerce-Website-370x370.jpg";
import HomelinenImage from "../../assets/Website Development/homlinen_E-Commerce-Website-Design-Development-Agency-370x370.jpg";
import JkmExportImage from "../../assets/Website Development/JKM-EXPORTT-Manufacture-And-Exportt-Of-Granites-Marbles-Tiles-370x370.jpg";
import SankoATextileImage from "../../assets/Website Development/sanko-textile-logo-weboney-370x370.jpg";
import SsTallySoftCareImage from "../../assets/Website Development/SS-TALLY-SOFT-CARE_Top-Website-Design-Company-1-370x370.jpg";
import RainbowhomefabImage from "../../assets/Website Development/Rainbow-Home-Fab-–-Export-Textile-Web-Design-ideas-design-web-design-fabric1-370x370.jpg";
import GreatsgsImage from "../../assets/Website Development/Great-Sg-Pte-Ltd_Top-Website-Design-Company-370x370.jpg";
import greenworldexportImage from "../../assets/Website Development/green-370x370.jpg";
import PraniflexImage from "../../assets/Website Development/Praniflex-Supreme-Soft-Hotel-linen-products_Top-Website-Design-Company-370x370.jpg";
import LandgrandImage from "../../assets/Website Development/Landgrand_Best-Real-Estate-Websites-Ideas-Web-Design-Inspirations-370x370.jpg";
import HomestyleexportsImage from "../../assets/Website Development/homestyleexports_Home-Textiles-Fabrics_Websites-Ideas-Website-Design-Inspirations-370x370.jpg";
import AstrumHomeTextileImage from "../../assets/Website Development/Astrum-Home-Textile-website_Top-Web-Design-Companies-370x370.jpg";
import HexapetalImage from "../../assets/Website Development/hexapetal-website_Top-Website-Design-Company-370x370.jpg";
import SapharmacyImage from "../../assets/Website Development/Sa-Pharmacy_Web-Design-India-Web-Development-Company-India-370x370.jpg";
import PraticaImage from "../../assets/Website Development/Pratica-–-A-Home-Fabrics_eCommerce-Web-Design-We-Build-eCommerce-Websites-370x370.jpg";
import SoneyFabricsImage from "../../assets/Website Development/soney-370x370.jpg";
import ManishTexImage from "../../assets/Website Development/manish-logo-1-370x370.jpg";
import CosmoTextilesImage from "../../assets/Website Development/cosmo-logo-370x370.jpg";
import HoneyCombTextilesImage from "../../assets/Website Development/honey-logo-demo-370x370.jpg";
import SanthamExportsImage from "../../assets/Website Development/santham-logo-370x370.jpg";
import TKPCImage from "../../assets/Website Development/tkpt-collage_Top-Website-Design-Company-370x370.jpg";
import DelhisweetsandbakeryImage from "../../assets/Website Development/trichyagro_Web-Development-Company-India-370x370.jpg";
import TrichyAgroIndustriesImage from "../../assets/Website Development/Delhi-Sweets-Bakery_-Best-Restaurant-Websites-Ideas-Web-Design-Inspirations-370x370.jpg";
import AvaniFeltzINCImage from "../../assets/Website Development/textile_Websites-Ideas-Web-Design-Inspirations-370x370.jpg";
import LOYALTapesImage from "../../assets/Website Development/loyal-taps_Home-Decor-Fabric-Designer-Fabric-Online-370x370.jpg";
import TamilPharmaImage from "../../assets/Website Development/tamilpharma-Medical-Website-Development-Develop-Ecommerce-Website-370x370.jpg";


const WebsiteDevelopment = () => {
 
 
  
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
          <span className="ml-4 font-roboto">Website Development</span>
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
                src={SriPonbalaCoirImage}
                alt="Sri Ponbala Coir Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Sri Ponbala Coir
                  </h2>
                  {/* Branding */}
                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={TexmartExportsImage}
                alt="Texmart Exports Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Texmart Exports
                  </h2>
                  {/* Branding */}
                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={SriGokulTexImage}
                alt="Sri Gokul Tex Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Sri Gokul Tex
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={MahaExportImage}
                alt="Maha Export Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Maha Export
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto font-roboto">
                    Website Development
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={KarurExpressImage}
                alt="Karur Express Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Karur Express
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={HomeAharaaImage}
                alt="HomeAharaa Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">HomeAharaa</h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={GPTextilesImage}
                alt="G P Textiles Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    G P Textiles
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={CoralGraphicsImage}
                alt="Coral Graphics Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Coral Graphics
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={AprTradersImage}
                alt="Apr Traders Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Apr Traders
                  </h2>
                  {/* Branding */}
                  <p className="text-lg p-2 font-roboto">Website Development</p>
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
                src={JaiHandloomsImage}
                alt="Jai Handlooms Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Jai Handlooms
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={IndyeurImage}
                alt="Indyeur Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow ">Indyeur</h2>
                  {/* Branding */}
                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={KonguMessImage}
                alt="Kongu Mess Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Kongu Mess</h2>
                  {/* Branding */}
                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={JeyamVegetablesImage}
                alt="Jeyam Vegetables Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Jeyam vegetables
                  </h2>
                  {/* Branding */}
                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={HomelinenImage}
                alt="Homelinen Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Homelinen</h2>
                  {/* Branding */}
                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={JkmExportImage}
                alt="Jkm Export Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Jkm Export</h2>
                  {/* Branding */}
                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={SankoATextileImage}
                alt="Sanko A Textile Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Sanko A Textile
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={SsTallySoftCareImage}
                alt="Ss Tally Soft Care Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Ss Tally Soft Care
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={RainbowhomefabImage}
                alt="Rainbowhomefab Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Rainbowhomefab
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
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
                src={GreatsgsImage}
                alt="Greatsgs Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Greatsgs</h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={greenworldexportImage}
                alt="greenworldexport Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    greenworldexport
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={PraniflexImage}
                alt="Praniflex Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Praniflex</h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={LandgrandImage}
                alt="Landgrand Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Landgrand</h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={HomestyleexportsImage}
                alt="Homestyleexports Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Homestyleexports
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={AstrumHomeTextileImage}
                alt="Astrum Home Textile Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow ">
                    Astrum Home Textile
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={HexapetalImage}
                alt="Hexapetal Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Hexapetal</h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={SapharmacyImage}
                alt="Sapharmacy Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Sapharmacy</h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={PraticaImage}
                alt="Pratica Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Pratica</h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
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
                src={SoneyFabricsImage}
                alt="Soney Fabrics Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow ">
                    Soney Fabrics
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={ManishTexImage}
                alt="Manish Tex Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">Manish Tex</h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={CosmoTextilesImage}
                alt="Cosmo Textiles Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Cosmo Textiles
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={HoneyCombTextilesImage}
                alt="HoneyComb Textiles Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    HoneyComb Textiles
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={SanthamExportsImage}
                alt="Santham Exports Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Santham Exports
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img src={TKPCImage} alt="TKPC Image" className="object-cover" />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    The Karur Polytechnic College
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={DelhisweetsandbakeryImage}
                alt="Trichy Agro Industries Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Trichy Agro Industries
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={TrichyAgroIndustriesImage}
                alt="Delhi sweets and bakery Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow ">
                    Delhi sweets and bakery
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={AvaniFeltzINCImage}
                alt="Avani Feltz INC Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Avani Feltz INC
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
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
                src={LOYALTapesImage}
                alt="LOYAL Tapes Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    LOYAL Tapes
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <img
                src={TamilPharmaImage}
                alt="Tamil Pharma Image"
                className="object-cover"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex justify-center items-center w-[370px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Content container */}
                <div className="text-white text-center">
                  {/* Image name */}
                  <h2 className="text-3xl font-barlow">
                    Tamil Pharma
                  </h2>

                  <p className="text-lg font-roboto p-2">Website Development</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WebsiteDevelopment;
