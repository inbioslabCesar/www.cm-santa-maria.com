import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Comillas from "./Comillas";

export default function SliderPagination() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="">
        {/* slide 1 */}
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center items-start">
            <div className=" max-w-[680px] mx-auto text-center xl:text-left">
              <p className=" font-light relative text-[18px] text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft">
                {/* messaje */}
                <Comillas/>
                <span className=" mx-2">
                Quería agradecerles desde el fondo de mi corazón por la atención que me brindaron. Fue algo que no esperaba y me dio mucha energía para volver a creer en mí otra vez.
                </span>
              </p>
              {/* name */}
              <div className="text-[26px] text-[#4c5354] font-semibold my-2">Annder Pérez</div>
              {/* job */}
              <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">Cliente</div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */} 
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center items-start">
            <div className=" max-w-[680px] mx-auto text-center xl:text-left">
              <p className=" font-light relative text-[18px] text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft">
                {/* messaje */}
                <Comillas/>
                <span className=" mx-2">
                Sin su apoyo, no sé si lo hubiera logrado. Gracias por acompañarme todo este camino. Gracias por cada minuto de tu atención y dedicación. Mi corazón tiene una enorme gratitud por todo lo que han hecho.
                </span>
              </p>
              {/* name */}
              <div className="text-[26px] text-[#4c5354] font-semibold my-2">Leonardo Pérez</div>
              {/* job */}
              <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">Cliente</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
