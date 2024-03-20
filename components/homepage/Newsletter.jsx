"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import pattern from "@/assets/images/newsletter/pattern.svg";

const Newsletter = () => {
  return (
    <motion.section
      className="newsletter bg-accent md:h-[444px] py-12 flex items-center relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute left-0 bottom-0">
        <Image src={pattern} alt="" />
      </div>

      <div className="newsletter__container container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[58px]">
          <div className="flex-1 z-10 text-center md:text-left">
            <div className="text-base uppercase text-white tracking-[2.24px] font-medium">
              Boletín de Noticias
            </div>
            <h1 className="h1 mb-4 text-white">
              Suscríbete para recibir actualizaciones
            </h1>
          </div>

          <form className="flex-1" id="newsletter-form">
            <div className="flex flex-col md:flex-row relative gap-y-4">
              <input
                type="text"
                placeholder="Ingresa tu correo"
                className="rounded-full w-full h-[66px] bg-transparent border-2 border-white outline-none pl-[30px] placeholder:text-white focus:text-white"
              />
              <button className="btn btn-lg btn-white md:absolute right-0">
                Suscribirse
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Newsletter;
