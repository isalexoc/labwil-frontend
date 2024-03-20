"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/assets/images/hero/img.png";
import { PiHeartbeat } from "react-icons/pi";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="hero bg-grey py-12 xl:pt-12 xl:pb-0 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between h-full">
          <motion.div
            className="hero__text xl:w-[48%] text-center xl:text-left"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
              <PiHeartbeat className="text-2xl text-accent" />
              <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">
                Tu salud es prioridad
              </div>
            </div>

            <h1 className="h1 mb-6">Nos preocupamos por tu bienestar</h1>

            <p className="mb-[42px] md:max-w-xl indent-8">
              Entendemos la importancia de un diagnóstico preciso y rápido para
              tu tranquilidad y la de tu familia. Nos comprometemos con la
              excelencia en cada análisis, proporcionando resultados fiables y
              detallados. Confía en nosotros para cuidar de ti y de los tuyos."
            </p>

            <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
              Contáctanos
            </button>
          </motion.div>

          <motion.div
            className="hero__img hidden xl:flex max-w-[814px] self-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image src={heroImage} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
