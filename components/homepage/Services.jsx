"use client";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import icon1 from "@/assets/icons/services/icon-1.svg";
import icon2 from "@/assets/icons/services/icon-2.svg";
import icon3 from "@/assets/icons/services/icon-3.svg";
import icon4 from "@/assets/icons/services/icon-4.svg";
import { FaMicroscope, FaFlask, FaUserMd, FaVials } from "react-icons/fa";

const Services = () => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const variantsdiv = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="services"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
    >
      <motion.div
        className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10"
        variants={variantsdiv}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto">
          <div className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
            <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
              Nuestros mejores servicios para tu salud
            </h2>
            <p className="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
              Nuestro compromiso con la comunidad va más allá de la simple
              realización de pruebas; nos dedicamos a proporcionar resultados
              precisos y confiables para garantizar tu bienestar y el de tu
              familia.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto mt-8 xl:-mt-[144px]">
        <motion.div
          className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0"
          variants={containerVariants}
        >
          <motion.div
            className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center"
            variants={variants}
          >
            <div className="mb-[15px]">
              <FaMicroscope className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-[10px]">Diagnósticos Avanzados</h3>
            <p className="font-light leading-normal max-w-[300px]">
              Ofrecemos diagnósticos avanzados para una amplia variedad de
              condiciones, utilizando tecnología de punta.
            </p>
          </motion.div>

          <motion.div
            className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center"
            variants={variants}
          >
            <div className="mb-[15px]">
              <FaFlask className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-[10px]">Investigación y Desarrollo</h3>
            <p className="font-light leading-normal max-w-[300px]">
              Nos mantenemos a la vanguardia en investigación para brindar los
              tratamientos y diagnósticos más innovadores.
            </p>
          </motion.div>

          <motion.div
            className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center"
            variants={variants}
          >
            <div className="mb-[15px]">
              <FaUserMd className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-[10px]">Consulta Especializada</h3>
            <p className="font-light leading-normal max-w-[300px]">
              Proporcionamos consultas especializadas para atender tus
              necesidades específicas y resolver todas tus dudas.
            </p>
          </motion.div>
          <motion.div
            className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center"
            variants={variants}
          >
            <div className="mb-[15px]">
              <FaVials className="text-5xl text-accent" />
            </div>
            <h3 className="h3 mb-[10px]">Análisis de Muestras</h3>
            <p className="font-light leading-normal max-w-[300px]">
              Realizamos análisis precisos de muestras para garantizar
              diagnósticos confiables y rápidos para su tranquilidad.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
