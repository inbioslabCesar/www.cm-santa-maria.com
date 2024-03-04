import Swiper from "swiper";
import imagenDra from "../assets/logo/imagen-dra.png";
import testimonios from "../assets/logo/testimonios.png";
import SliderPagination from "../components/SliderPagination";
import SliderEquipo from "../components/SliderEquipo";
import ReactWhatsapp from "react-whatsapp";
const Home = () => {
  return (
    <>
      <section className="bg-grey py-12 xl:pt-12 xl:pb-0 overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between h-full ">
            <div className="xl:w-[48%] text-center xl:text-left">
              <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto">
                <i className="ri-hearts-line text-2xl text-sky-400"></i>
                <div className=" uppercase text-base font-medium text-[#9ab4b7] tracking-[8px]">
                  Vive tu vida
                </div>
              </div>
              <h1 className="font-bold text-6xl mb-6">
                Nos preocupamos por tu salud
              </h1>
              <p className="mb-[26px] md:max-w-xl">
                Proporcionamos a nuestros pacientes y usuarios una excelente
                atención, calidez, oportunidad y confiabilidad en nuestros
                resultados.
              </p>
              <ReactWhatsapp number="51947549721" message="Solícito información de un especialista">
                <button className="btn btn-lg btn-accent mx-auto">
                  Contáctanos
                </button>
              </ReactWhatsapp>
            </div>
            <div className="hidden xl:flex max-w-[814px] self-end justify-center">
              <img src={imagenDra} alt="imagenDra" className=" w-[50%]" />
            </div>
          </div>
        </div>
      </section>
      <section className="stats section">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-y-6 justify-between">
            <div className="stats__item flex flex-1 xl:border-r flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                +5120
              </div>
              <div>Pacientes Felices</div>
            </div>
            <div className="stats__item flex flex-1 xl:border-r flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                3
              </div>
              <div>Médicos Especialistas</div>
            </div>
            <div className="stats__item flex flex-1 xl:border-r flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                1
              </div>
              <div>Sucursales</div>
            </div>
            <div className="stats__item flex flex-1  flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                +20
              </div>
              <div>Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="bg-accent  bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
          <div className="container mx-auto ">
            <div className="flex items-center flex-col xl:flex-row xl:mb-[60px]">
              <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
                Nuestros mejores servicios para usted y su familia
              </h2>
              <p className=" text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
                Contamos con un excelente equipo de trabajo y un staff de
                profesionales que estaran ha tu servicio.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 xl:-mt-[144px]">
          <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
            <div className="bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <i className="ri-home-gear-line text-4xl"></i>
              </div>
              <h3 className="h3 mb-[10px]">Médicos Especialistas</h3>
              <p className=" font-light leading-normal max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur amet adipisicing amet
                elit.
              </p>
            </div>
            <div className="bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <i className="ri-women-line text-4xl"></i>
              </div>
              <h3 className="h3 mb-[10px]">Apoyo en el Embarazo </h3>
              <p className=" font-light leading-normal max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur amet adipisicing amet
                elit.
              </p>
            </div>
            <div className="bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <i className="ri-body-scan-line text-4xl"></i>
              </div>
              <h3 className="h3 mb-[10px]">Ecografias 4D</h3>
              <p className=" font-light leading-normal max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur amet adipisicing amet
                elit.
              </p>
            </div>
            <div className="bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <i className="ri-shield-cross-fill text-4xl"></i>
              </div>
              <h3 className="h3 mb-[10px]">Apoyo en el Tartamiento</h3>
              <p className=" font-light leading-normal max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur amet adipisicing amet
                elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container mx-auto">
          <h2 className="h2 mb-5 xl:mb-[50px] text-center xl:text-left">
            Reservar cita o llamar:
            <span className="text-accent-tertiary">947549721</span>
          </h2>
          <form className="flex flex-col gap-y-5">
            <div className="flex flex-col xl:flex-row gap-5">
              <div className="select relative flex items-center ">
                <div className="absolute right-4">
                  <i className="ri-arrow-down-s-line text-[26px] text-primary"></i>
                </div>
                <select className=" appearance-none outline-none h-full w-full bg-transparent px-4">
                  <option value="1">Selecionar Especialidad</option>
                  <option value="2">Especialidad Ginecología</option>
                  <option value="3">Especialidad Urología</option>
                  <option value="4">Especialidad Medicina Interna</option>
                </select>
              </div>
              <div className="select relative flex items-center ">
                <div className="absolute right-4">
                  <i className="ri-arrow-down-s-line text-[26px] text-primary"></i>
                </div>
                <select className=" appearance-none outline-none h-full w-full bg-transparent px-4">
                  <option value="1">Select Doctor</option>
                  <option value="2">Dr. Miguel Valverde</option>
                  <option value="3">Dra. Susana Pézo</option>
                  <option value="4">Dr. César Pino</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-5">
              <input
                type="text"
                className="input"
                placeholder="Nombre Completo"
              />
              <input
                type="text"
                className="input"
                placeholder="Numero de Celular"
              />
            </div>
            <div className="flex flex-col xl:flex-row gap-5">
              <input className="input" type="date" />
              <input className="input" type="time" />
            </div>
            <button className="btn btn-lg btn-accent self-start" type="submit">
              Reservar una cita
            </button>
          </form>
        </div>
      </section>
      {/* mensajes */}
      <section className="flex justify-center items-center bg-grey bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-x-14 xl:flex-row">
            <div className=" hidden xl:flex">
              <img src={testimonios} alt="testimonios" className="w-1/2 mt-8" />
            </div>
            {/* slider */}
            <div className=" max-w-[98%] xl:max-w-[710px]">
              <div className="h-[400px]">
                <SliderPagination />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Nuestro Equipo */}
      <section>
        <div className="container mx-auto mt-8">
          {/* Titulo*/}
          <h2 className="h2 mb-[50px] flex items-center justify-center text-center xl:text-left">
            Nuestro Equipo
          </h2>
          <div className=" min-h-[400px] ">
            <SliderEquipo />
          </div>
        </div>
      </section>
      <div className="h-[4000px]"></div>
    </>
  );
};

export default Home;
