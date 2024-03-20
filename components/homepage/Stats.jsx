"use client";
import { motion } from "framer-motion";

function Stats() {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="stats section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
    >
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row gap-y-6 justify-between"
          variants={containerVariants}
        >
          <motion.div
            className="stats__item flex-1 lg:border-r flex flex-col items-center"
            variants={variants}
          >
            <div className="text-4xl lg:text-[64px] font-semibold text-accent-tertiary lg:mb-2">
              +870000
            </div>
            <div>Pacientes Atendidos</div>
          </motion.div>

          <motion.div
            className="stats__item flex-1 lg:border-r flex flex-col items-center"
            variants={variants}
          >
            <div className="text-4xl lg:text-[64px] font-semibold text-accent-tertiary lg:mb-2">
              +30
            </div>
            <div>Años de Experiencia</div>
          </motion.div>

          <motion.div
            className="stats__item flex-1 lg:border-r flex flex-col items-center"
            variants={variants}
          >
            <div className="text-4xl lg:text-[64px] font-semibold text-accent-tertiary lg:mb-2">
              100%
            </div>
            <div>Satisfacción del Cliente</div>
          </motion.div>

          <motion.div
            className="stats__item flex-1 flex flex-col items-center"
            variants={variants}
          >
            <div className="text-4xl lg:text-[64px] font-semibold text-accent-tertiary lg:mb-2">
              +100
            </div>
            <div>Tipos de Análisis</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Stats;
