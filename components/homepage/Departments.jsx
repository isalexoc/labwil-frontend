"use client";
import { motion } from "framer-motion";

const Departments = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };
  return (
    <section className="departments section">
      <motion.div
        className="departments__bg bg-departments bg-cover xl:bg-auto bg-center bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12 xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="departments__container container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-5">
            <motion.div
              className="xl:w-[310px] flex flex-col gap-y-[30px] xl:gap-y-[40px] font-medium uppercase text-center xl:text-left text-base text-[#9ab4b7] xl:pt-3 xl:text-[17px] mb-[50px] xl:mb-0"
              variants={containerVariants}
            >
              <div className="cursor-pointer hover:text-accent transition-all">
                Análisis Clínicos
              </div>
              <div className="cursor-pointer hover:text-accent transition-all">
                Microbiología
              </div>
              <div className="cursor-pointer hover:text-accent transition-all">
                Hematología
              </div>
              <div className="cursor-pointer hover:text-accent transition-all">
                Bioquímica
              </div>
              <div className="cursor-pointer hover:text-accent transition-all">
                Inmunología
              </div>
              <div className="cursor-pointer hover:text-accent transition-all">
                Citología
              </div>
            </motion.div>
            <motion.div className="xl:w-[640px]" variants={containerVariants}>
              <h2 className="h2 mb-[20px] text-center xl:text-left">
                Servicios de Laboratorio Clínico
              </h2>

              <p className="mb-[30px] font-light text-center xl:text-left">
                Nuestro laboratorio está equipado con tecnología de punta y un
                equipo de profesionales altamente capacitados para proporcionar
                resultados precisos y confiables.
                <br />
                <br />
                Con más de 30 años de experiencia, nos comprometemos con la
                calidad y la exactitud en cada uno de nuestros servicios,
                asegurando confianza y tranquilidad.
              </p>
              <div className="flex flex-col xl:flex-row items-center xl:justify-between max-w-[555px] mb-[50px] mx-auto xl:mx-0">
                <div className="text-accent xl:border-r border-[#dcdcdc] xl:pr-6">
                  Atención Personalizada
                </div>
                <div className="text-accent xl:border-r border-[#dcdcdc] xl:pr-6">
                  Resultados Confiables
                </div>
                <div className="text-accent">Geriatric Neurology</div>
              </div>
              <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
                Todos los servicios
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Departments;
