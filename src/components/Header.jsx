import "remixicon/fonts/remixicon.css";
import logo from "../assets/logo/logo-santa-maria.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="py-8 lg:pt-6 lg:pb-14 ">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0 items-center">
        <div className="flex justify-center lg:justify-normal">
          <a href="">
            <img src={logo} alt="" className=" w-64 mx-auto" />
          </a>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          {/* Ubicacion */}
          <div className="flex w-72 justify-center items-center gap-x-2 lg:justify-normal mx-auto ">
            <i className="ri-map-pin-2-fill text-accent text-2xl"></i>
            <div className=" text-secondary">Jr. Zavála N° 580 2do Piso</div>
          </div>
          {/* Celular */}
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal ">
            <i className="ri-phone-fill text-accent text-2xl"></i>
            <div className=" text-secondary">947549721</div>
          </div>
          {/* btn */}
          <button className="btn btn-sm btn-outline w-[240px]  mx-auto cursor-pointer lg:mx-0 md:text-[15px]">
            <a href="https://wa.me/51947549721?text=Hola quiero reservar una cita">
               Reservar Cita
            </a>
           
          </button>
          {/* Mobile Nav */}

          <nav
            className={`fixed w-[300px] top-0 h-screen bg-white ${
              open ? "left-0" : "-left-[300px]"
            }  shadow-2xl lg:hidden transition-all duration-500 z-20`}>
            <div
              className=" bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
              onClick={() => setOpen(!open)}>
              {open ? (
                <i className="ri-arrow-left-s-line text-2xl text-white"></i>
              ) : (
                <i className="ri-arrow-right-s-line text-2xl text-white"></i>
              )}
            </div>
            <div className=" px-3 flex  flex-col gap-y-12 h-full ">
              <a href="#" className="px-12">
                <img src={logo} alt="" className="w-48"/>
              </a>
              <ul className="list-none -mt-8">
                <li className="flex py-5">
                  <Link to="/" className="text-secondary hover:text-accent transition-all duration-300  no-underline">Inicio</Link>
                </li>
                <li className="flex py-5">
                  <Link to="/" className="text-secondary hover:text-accent transition-all duration-300  no-underline">Especialistas</Link>
                </li>
                <li className="flex py-5">
                  <Link to="/" className="text-secondary hover:text-accent transition-all duration-300  no-underline">Promociones</Link>
                </li>
                <li className="flex py-5">
                  <Link to="/" className="text-secondary hover:text-accent transition-all duration-300  no-underline">Servicios</Link>
                </li>
                <li className="flex py-5">
                  <Link to="/" className="text-secondary hover:text-accent transition-all duration-300  no-underline">Contacto</Link>
                </li>
              </ul>
              {/* Form */}
              <form className="relative flex gap-x-[10px] left-5">
                <label htmlFor="">
                  <i className="ri-search-line text-2xl text-accent"></i>
                  
                </label>
                <input type="text" id="" placeholder="Buscar..." className="outline-none border-b-2 w-[160px] focus:border-accent placeholder:italic p-2"/>
              </form>
            </div>
          </nav>
          <nav className=" bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
          <ul className="flex gap-x-4">
                <li className="flex py-5 ">
                  <Link to="/" className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300  no-underline">Inicio</Link>
                </li>
                <li className="flex py-5">
                  <Link to="/" className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300  no-underline">Especialistas</Link>
                </li>
                <li className="flex py-5 ">
                  <Link to="/" className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300  no-underline">Promociones</Link>
                </li>
                <li className="flex py-5">
                  <Link to="/" className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300  no-underline">Servicios</Link>
                </li>
                <li className="flex py-5">
                  <Link to="/" className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300  no-underline">Contacto</Link>
                </li>
            </ul>
            <form className="relative flex gap-x-[10px]">
              <label htmlFor="search-input" className="flex justify-center items-center group">
              <i className="ri-search-line text-2xl text-accent "></i>
              </label>
              <input id="search-input" type="text" placeholder="Buscar..." className=" border-accent p-2 outline-none w-[100px] focus:w-[180] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150" />
            </form>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
