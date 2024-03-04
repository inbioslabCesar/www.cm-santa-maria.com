import { Swiper, SwiperSlide } from "swiper/react";
import medico1 from "../assets/medicos/medico1.jpg";
import medico2 from "../assets/medicos/medico2.jpg";
import medico3 from "../assets/medicos/medico3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Comillas from "./Comillas";

export default function SliderEquipo() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="p-20">
        {/* slide 1 */}
        <SwiperSlide className="">
          <div className="flex-1 flex flex-col xl:flex-row">
            {/* item */}
            <div className="flex flex-col xl:flex-row items-center gap-[30px]">
              {/* img */}
              <div className="flex-1 ">
                <img src={medico1} alt="medico1" className="w-40 rounded-lg" />
              </div>
              {/* info */}
              <div className="flex flex-col justify-center items-center">
                {/* name */}
                <h4 className="h4">Dr. Miguel A. Valverde</h4>
                {/* job */}
                <div className="-mt-1 uppercase font-medium tracking-[2.24px] text-[#9ab4b7]">
                  Ginecología
                </div>
                {/* desc */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide className="">
          <div className="flex-1 flex flex-col xl:flex-row">
            {/* item */}
            <div className="flex flex-col xl:flex-row items-center gap-[30px]">
              {/* img */}
              <div className="flex-1 ">
                <img src={medico2} alt="medico2" className="w-40 rounded-lg" />
              </div>
              {/* info */}
              <div className="flex flex-col justify-center items-center">
                {/* name */}
                <h4 className="h4">Dra. Susana Pézo</h4>
                {/* job */}
                <div className="-mt-1 uppercase font-medium tracking-[2.24px] text-[#9ab4b7]">Urología</div>
                {/* desc */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide className="">
          <div className="flex-1 flex flex-col xl:flex-row">
            {/* item */}
            <div className="flex flex-col xl:flex-row items-center gap-[30px]">
              {/* img */}
              <div className="flex-1 ">
                <img src={medico3} alt="medico3" className="w-40 rounded-lg" />
              </div>
              {/* info */}
              <div className="flex flex-col justify-center items-center">
                {/* name */}
                <h4 className="h4">Dr. César Pino</h4>
                {/* job */}
                <div className="-mt-1 uppercase font-medium tracking-[2.24px] text-[#9ab4b7]">Medicina Interna</div>
                {/* desc */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
