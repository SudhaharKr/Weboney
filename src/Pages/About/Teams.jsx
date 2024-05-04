import TeamMembers from "../../assets/silhouette-confident-businesspeople.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import DirectorImage from "../../assets/img-1.jpg";
import CollExecImage from "../../assets/img-2.jpg";
import ManSecImage from "../../assets/img-3.jpg";
import ExecDirImage from "../../assets/img-4.jpg";
import TeamLeaderImage from "../../assets/img-5.jpg";

// Import Swiper styles
import "swiper/css";

import "tailwindcss/tailwind.css";

// import required modules
import { Autoplay } from "swiper/modules";

const Teams = () => {
  // Define an array of team members with their data

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Background image */}
      <div
        className="h-[136vh] bg-cover bg-center bg-no-repeat text-[#292F42] relative"
        style={{
          backgroundImage: `linear-gradient(to right, #000, #2e35488f), url(${TeamMembers})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center mr-20 ml-20">
          <h1 className="text-[15px] font-normal font-roboto uppercase">
            We Are Trusted IT Partner
          </h1>
          <h1 className="text-[52px] leading-[60px] font-barlow mt-6">
            <p className="font-light">
              We have a<span className="font-semibold"> professional team</span>{" "}
              of website for our company.
            </p>
          </h1>
          <div className="pt-16">
            <button className="px-8 py-4 bg-white text-[#292F42] font-roboto text-[17px] font-semibold rounded-md hover:bg-[#292F42] hover:text-white transition-all duration-1000 ease-in-out">
              Get Started
            </button>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 8500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay]}
              className="text-center mr-10 ml-10 w-[1100px] pt-10"
            >
              <SwiperSlide className="flex justify-center gap-8 p-2">
                <div
                  style={{ backgroundImage: `url(${DirectorImage})` }}
                  className="group relative size-[300px] bg-cover rounded-md"
                >
                  <div className="absolute bottom-0 flex h-0 w-full items-center justify-center rounded-lg bg-[#85864c6b] transition-all duration-300 group-hover:h-full">
                    <div>
                      <div className="hidden group-hover:block text-white font-semibold text-xl">
                        Nivas
                      </div>
                      <div className="hidden group-hover:block text-white font-semibold italic">
                        Director
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${CollExecImage})` }}
                  className="group relative size-[300px]  bg-cover rounded-md"
                >
                  <div className="absolute bottom-0 flex h-0 w-full items-center justify-center rounded-lg bg-[#85864c6b] transition-all duration-300 group-hover:h-full">
                    <div>
                      <div className="hidden group-hover:block text-white font-semibold text-xl">
                        Raju
                      </div>
                      <div className="hidden group-hover:block text-white font-semibold italic">
                        Collection Executive
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${ManSecImage})` }}
                  className="group relative size-[300px]  bg-cover rounded-md"
                >
                  <div className="absolute bottom-0 flex h-0 w-full items-center justify-center rounded-lg bg-[#85864c6b] transition-all duration-300 group-hover:h-full">
                    <div>
                      <div className="hidden group-hover:block text-white font-semibold text-xl">
                        Keerthana Rajan
                      </div>
                      <div className="hidden group-hover:block text-white font-semibold italic">
                        Managing Secretary
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center gap-8 p-2">
                <div
                  style={{ backgroundImage: `url(${ExecDirImage})` }}
                  className="group relative size-[300px]  bg-cover rounded-md"
                >
                  <div className="absolute bottom-0 flex h-0 w-full items-center justify-center rounded-lg bg-[#85864c6b] transition-all duration-300 group-hover:h-full">
                    <div>
                      <div className="hidden group-hover:block text-white font-semibold text-xl">
                        Manoj Dhanapal
                      </div>
                      <div className="hidden group-hover:block text-white font-semibold italic">
                        Executive Director
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${TeamLeaderImage})` }}
                  className="group relative size-[300px]  bg-cover rounded-md"
                >
                  <div className="absolute bottom-0 flex h-0 w-full items-center justify-center rounded-lg bg-[#85864c6b] transition-all duration-300 group-hover:h-full">
                    <div>
                      <div className="hidden group-hover:block text-white font-semibold text-xl">
                        Dinesh M
                      </div>
                      <div className="hidden group-hover:block text-white font-semibold italic">
                        TeamLeader
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
