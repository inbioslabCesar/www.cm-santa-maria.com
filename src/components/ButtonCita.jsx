import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ButtonCita = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dido5zf", "template_olgd0hg", form.current, {
        publicKey: "uKX7C-76C-IKSpEAh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-5">
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="select relative flex items-center ">
            <div className="absolute right-4">
              <i className="ri-arrow-down-s-line text-[26px] text-primary"></i>
            </div>
            <select name="user_especialista"  className=" appearance-none outline-none h-full w-full bg-transparent px-4">
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
            <select name="user_doctor" className=" appearance-none outline-none h-full w-full bg-transparent px-4">
              <option value="1">Select Doctor</option>
              <option value="2">Dr. Miguel Valverde</option>
              <option value="3">Dra. Susana Pézo</option>
              <option value="4">Dr. César Pino</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-5">
          <input type="text" className="input" placeholder="Nombre Completo" name="user_name"/>
          <input
            type="text"
            className="input"
                      placeholder="Numero de Celular"
                      name="user_phone"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-5">
          <input className="input" type="date" name="user_date" placeholder="Fecha de cita"/>
          <input className="input" type="time" name="user_time" placeholder="Hora de cita "/>
        </div>
        <button className="btn btn-lg btn-accent self-start" type="submit">
          Reservar una cita
        </button>
      </form>
    </>
  );
};
