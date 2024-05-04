import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import a2zimage from "../../assets/Clients/a2z-1.png";
import delhiimage from "../../assets/Clients/delhi-1.png";
import firstcryimage from "../../assets/Clients/firstcry-1.png";
import avatarimage from "../../assets/Clients/avatar-1.png";
import pupaimage from "../../assets/Clients/pupa-1.png";
import agathyazimage from "../../assets/Clients/agathyaz-1.png";
import funtourimage from "../../assets/Clients/funtour-1.png";
import futureimage from "../../assets/Clients/future-1.png";
import jkmimage from "../../assets/Clients/jkm-1.png";
import landgrandimage from "../../assets/Clients/landgrand-1.png";
import appleimage from "../../assets/Clients/apple-1.png";
import shristiimage from "../../assets/Clients/shristi-1.png";


const Clients = () => {
  return (
    <div>
       <div className="ml-20 mr-20 ">
      <div className="p-20 ml-10 mr-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="text-center"
        >
          <SwiperSlide>
            <img src={a2zimage} alt="a2z image" width={120} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={delhiimage} alt="delhiimage" width={120} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={firstcryimage} alt="firstcry image" width={120} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={avatarimage} alt="avatarimage" width={120} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pupaimage} alt="pupa image" width={120} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={agathyazimage} alt="agathyaz image" width={120} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={funtourimage} alt="funtour image" width={120} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={futureimage} alt="future image" width={120} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={jkmimage} alt="jkm image" width={120} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={landgrandimage} alt="landgrand image" width={120} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={appleimage} alt="apple image" width={120} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shristiimage} alt="shristi image" width={120} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </div>
  )
}

export default Clients
