"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Animation settings for the list
  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3, // Adjust time between animations of children here
      },
    },
    hidden: { opacity: 0 },
  };

  // Animation settings for the items
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }, // Adjust the fade in effect duration here
  };

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "¿Cuánto tiempo tardan los resultados de los análisis?",
      answer:
        "Los resultados de los análisis clínicos suelen estar listos entre 24 y 48 horas. Algunos estudios especiales pueden demorar un poco más. Siempre nos esforzamos por entregar resultados de manera oportuna sin comprometer la calidad.",
    },
    {
      question: "¿Necesito ayunar antes de mi análisis?",
      answer:
        "Dependiendo del tipo de análisis, podría ser necesario que ayunes durante 8 a 12 horas antes de tu cita. Sin embargo, siempre es recomendable consultar las instrucciones específicas que te brindemos al programar tu cita.",
    },
    {
      question: "¿Puedo realizar mis análisis sin orden médica?",
      answer:
        "Algunos análisis pueden realizarse sin orden médica. Sin embargo, para la mayoría de los exámenes clínicos es necesario que cuentes con una prescripción del médico, lo que nos ayuda a asegurar que el análisis sea el adecuado para tu condición.",
    },
    {
      question:
        "¿Qué medidas de seguridad se están tomando en el laboratorio frente al COVID-19?",
      answer:
        "La seguridad de nuestros pacientes y empleados es nuestra prioridad. Estamos siguiendo todas las recomendaciones de las autoridades de salud, incluyendo el uso de equipos de protección personal, sanitización frecuente de todas las áreas, y la implementación de un protocolo de distancia social en nuestras instalaciones.",
    },
  ];

  return (
    <section className="faq pt-12">
      <div className="container mx-auto">
        <h2 className="faq__title h2 text-center mb-[50px]">
          Tenemos la respuesta
        </h2>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className={`faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none ${
                openIndex === index ? "open" : ""
              }`}
              onClick={() => handleClick(index)}
              variants={itemVariants}
              viewport={{
                once: true,
              }}
            >
              <div className="flex items-center justify-between mb-[10px]">
                <h4 className="h4">{item.question}</h4>
                <div className="faq__btn text-accent">
                  <MdAdd className="text-2xl" />
                </div>
              </div>
              <div className="faq__answer h-0 overflow-hidden">
                <p className="font-light">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
