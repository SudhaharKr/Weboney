import TitleBgImage from "../../assets/featured-title-bg.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import SriPonbalaCoirImage from "../../assets/Website Development/Sri-pon-bala-coir-logo-weboney-370x370.jpg";
import TexmartExportsImage from "../../assets/Website Development/textmart-logo-weboney-370x370.jpg";
import SriGokulTexImage from "../../assets/Website Development/sri-gokul-tex-logo-weboney.jpg";
import MahaExportImage from "../../assets/Website Development/Mahaexport-logo-weboney-370x370.jpg";
import KarurExpressImage from "../../assets/Website Development/Karurxpress-logo-370x370.jpg";
import HomeAharaaImage from "../../assets/Website Development/Homeaharaa-logo-370x370.jpg";
import GPTextilesImage from "../../assets/Website Development/Gp-textiles-logo-370x370.jpg";
import CoralGraphicsImage from "../../assets/Website Development/coral-graphics-logo-370x370.jpg";
import APRTradersImage from "../../assets/Website Development/apr-logo-WEBONEY-370x370.jpg";
import JaiHandloomsImage from "../../assets/Website Development/WhatsApp-Image-2022-07-01-at-4.14.43-PM-370x370.jpeg";
import IndyeurImage from "../../assets/Website Development/indyeur-logo-weboney1-4-370x370.jpg";
import KonguMessImage from "../../assets/Website Development/kongu-logo-weboney-1-370x370.jpg";
import JeyamVegetablesImage from "../../assets/Website Development/Jeyam-Vegetables_eCommerce-Web-Design-Custom-eCommerce-Website-370x370.jpg";
import HomelinenImage from "../../assets/Website Development/homlinen_E-Commerce-Website-Design-Development-Agency-370x370.jpg";
import JkmExportImage from "../../assets/Website Development/JKM-EXPORTT-Manufacture-And-Exportt-Of-Granites-Marbles-Tiles-370x370.jpg";
import SankoATextileImage from "../../assets/Website Development/sanko-textile-logo-weboney-370x370.jpg";
import SSTallySoftCareImage from "../../assets/Website Development/SS-TALLY-SOFT-CARE_Top-Website-Design-Company-1-370x370.jpg";
import RainbowhomefabImage from "../../assets/Website Development/Rainbow-Home-Fab-–-Export-Textile-Web-Design-ideas-design-web-design-fabric1-370x370.jpg";
import GreatsgsImage from "../../assets/Website Development/Great-Sg-Pte-Ltd_Top-Website-Design-Company-370x370.jpg";
import greanworldexportImage from "../../assets/Website Development/green-370x370.jpg";
import PraniflexImage from "../../assets/Website Development/Praniflex-Supreme-Soft-Hotel-linen-products_Top-Website-Design-Company-370x370.jpg";
import LandgrandImage from "../../assets/Website Development/Landgrand_Best-Real-Estate-Websites-Ideas-Web-Design-Inspirations-370x370.jpg";
import AstrumHomeTextilesImage from "../../assets/Website Development/Astrum-Home-Textile-website_Top-Web-Design-Companies-370x370.jpg";
import HexapetalImage from "../../assets/Website Development/hexapetal-website_Top-Website-Design-Company-370x370.jpg";
import SAPharmacyImage from "../../assets/Website Development/Sa-Pharmacy_Web-Design-India-Web-Development-Company-India-370x370.jpg";
import PraticaImage from "../../assets/Website Development/Pratica-–-A-Home-Fabrics_eCommerce-Web-Design-We-Build-eCommerce-Websites-370x370.jpg";
import SoneyFabricsImage from "../../assets/Website Development/soney-370x370.jpg";
import ManishTexImage from "../../assets/Website Development/manish-logo-1-370x370.jpg";
import CosmoTextilesImage from "../../assets/Website Development/cosmo-logo-370x370.jpg";
import HoneyCombTextilesImage from "../../assets/Website Development/honey-logo-demo-370x370.jpg";
import SanthamExportsImage from "../../assets/Website Development/santham-logo-370x370.jpg";
import TheKarurPolytechnicCollegeImage from "../../assets/Website Development/tkpt-collage_Top-Website-Design-Company-370x370.jpg";
import DelhiSweetsandBakeryImage from "../../assets/Website Development/Delhi-Sweets-Bakery_-Best-Restaurant-Websites-Ideas-Web-Design-Inspirations-370x370.jpg";
import TrichyAgroIndustriesImage from "../../assets/Website Development/trichyagro_Web-Development-Company-India-370x370.jpg";
import AvaniFeltzINCImage from "../../assets/Website Development/textile_Websites-Ideas-Web-Design-Inspirations-370x370.jpg";
import LOYALTapesImage from "../../assets/Website Development/loyal-taps_Home-Decor-Fabric-Designer-Fabric-Online-370x370.jpg";
import TamilPharmaImage from "../../assets/Website Development/tamilpharma-Medical-Website-Development-Develop-Ecommerce-Website-370x370.jpg";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const WebsiteDesign = () => {
  const contentData1 = [
    {
      title: "Digital Website is like painting, except the paint never dries",
    },
    {
      text: "Weboney, creating a digital presence doesn’t mean simply building a website and prepared for clients to deal with your organization. Your website is your manufacturer’s online foundation. It serves as your dominating buyer touchpoint and conversion desktop. As such, you have got to be certain it ranks high in engines like google, stands out from the competitors, and pertains to your visitors’ expectations. Put money into responsive website design and build trust and self-belief in your company offerings.",
    },
    {
      text: "Plan a session with our Website design agency at present and allow us to support you build a Website design that drives certified site visitors and increases your conversion expense.",
    },
    {
      text: "Weboney provides the best website design in Coimbatore & Karur.",
    },
  ];

  const contentData2 = [
    {
      title: "Website Design Projects",
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
          <span className="ml-4 font-roboto">Website Design</span>
        </div>
      </div>

      <div className="px-20 py-5">
        {contentData1.map((section, index) => (
          <div key={index}>
            <h1 className="font-barlow text-2xl font-bold text-gray-800 mt-6">
              {section.title}
            </h1>
            <p className="font-roboto text-base leading-7">
              {section.text}
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
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        className="w-full mt-10"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={SriPonbalaCoirImage} alt="Sri Ponbala Coir Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Sri Ponbala Coir</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={TexmartExportsImage} alt="Texmart Exports Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Texmart Exports</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={SriGokulTexImage} alt="Sri Gokul Tex Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Sri Gokul Tex</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={MahaExportImage} alt="Maha Export Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Maha Export</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={KarurExpressImage} alt="Karur Express Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Karur Express</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={HomeAharaaImage} alt="HomeAharaa Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">HomeAharaa</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={GPTextilesImage} alt="G P Textiles Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">G P Textiles</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={CoralGraphicsImage} alt="Coral Graphics Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Coral Graphics</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={APRTradersImage} alt="APR Traders Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">APR Traders</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={JaiHandloomsImage} alt="Jai Handlooms Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Jai Handlooms</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={IndyeurImage} alt="Indyeur Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Indyeur</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={KonguMessImage} alt="Kongu Mess Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Kongu Mess</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={JeyamVegetablesImage} alt="Jeyam Vegetables Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Jeyam Vegetables</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={HomelinenImage} alt="Homelinen Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Homelinen</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={JkmExportImage} alt="Jkm Export Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Jkm Export</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={SankoATextileImage} alt="Sanko A Textile Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Sanko A Textile</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={SSTallySoftCareImage} alt="SS Tally Soft Care Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">SS Tally Soft Care</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={RainbowhomefabImage} alt="Rainbowhomefab Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Rainbowhomefab</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={GreatsgsImage} alt="Greatsgs Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Greatsgs</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={greanworldexportImage} alt="greanworldexport Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">greanworldexport</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={PraniflexImage} alt="Praniflex Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Praniflex Image</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={LandgrandImage} alt="Landgrand Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Landgrand Image</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={AstrumHomeTextilesImage}
              alt="Astrum Home Textiles Image"
            />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Astrum Home Textiles</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={HexapetalImage} alt="Hexapetal Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Hexapetal</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={SAPharmacyImage} alt="SA Pharmacy Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">SA Pharmacy </h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={PraticaImage} alt="Pratica Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Pratica</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={SoneyFabricsImage} alt="Soney Fabrics Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Soney Fabrics</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={ManishTexImage} alt="Manish Tex Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Manish Tex</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={CosmoTextilesImage} alt="Cosmo Textiles Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Cosmo Textiles</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={HoneyCombTextilesImage} alt="HoneyComb Textiles Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">HoneyComb Textiles</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={SanthamExportsImage} alt="Santham Exports Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Santham Exports</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={TheKarurPolytechnicCollegeImage}
              alt="The Karur Polytechnic College Image"
            />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">
                  The Karur Polytechnic College
                </h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={DelhiSweetsandBakeryImage}
              alt="Delhi Sweets and Bakery Image"
            />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">
                  Delhi Sweets and Bakery
                </h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={TrichyAgroIndustriesImage}
              alt="Trichy Agro Industries Image"
            />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Trichy Agro Industries</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={AvaniFeltzINCImage} alt="Avani Feltz INC Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Avani Feltz INC</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={LOYALTapesImage} alt="LOYAL Tapes Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">LOYAL Tapes</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={TamilPharmaImage} alt="Tamil Pharma Image" />
            <div className="absolute inset-0 flex justify-center items-center w-[275px] bg-[#292F42] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Content container */}
              <div className="text-white text-center">
                {/* Image name */}
                <h2 className="text-3xl font-barlow">Tamil Pharma</h2>
                {/* Branding */}
                <p className="text-lg font-roboto p-2">Website Development</p>
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

export default WebsiteDesign;
