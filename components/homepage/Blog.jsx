"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/assets/images/blog/img-1.png";
import img2 from "@/assets/images/blog/img-2.png";
import img3 from "@/assets/images/blog/img-3.png";

const Blog = () => {
  // Variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between each child animation
      },
    },
  };

  // Variants for individual blog posts
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <section className="blog">
      <div className="container mx-auto">
        <h2 className="blog__title h2 mb-[50px] text-center xl:text-left">
          Artículos Recientes
        </h2>

        <motion.div
          className="flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-[50px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all duration-500"
                src={img1}
                alt="blog image"
              />

              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Bienestar
              </div>
            </div>

            <div className="px-5 py-6">
              <div className="mb-4">2 de enero, 2023</div>

              <h4 className="h4 mb-[10px]">
                Consejos para Mantener un Estilo de Vida Saludable
              </h4>

              <p className="font-light">
                Aprende cómo pequeños cambios en tu día a día pueden mejorar
                significativamente tu salud y bienestar general...
                <a href="" className="italic underline text-[#4c5354]">
                  Read more
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all duration-500"
                src={img2}
                alt=""
              />

              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Salud
              </div>
            </div>

            <div className="px-5 py-6">
              <div className="mb-4">2 de enero, 2023</div>

              <h4 className="h4 mb-[10px]">
                5 Pruebas Clínicas Esenciales para la Salud Preventiva
              </h4>

              <p className="font-light">
                La prevención es clave para una vida larga y saludable. Descubre
                las pruebas que no debes pasar por alto...
                <a href="" className="italic underline text-[#4c5354]">
                  Leer más
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all duration-500"
                src={img3}
                alt=""
              />

              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Innovación
              </div>
            </div>

            <div className="px-5 py-6">
              <div className="mb-4">2 de enero, 2023</div>

              <h4 className="h4 mb-[10px]">
                Avances Tecnológicos en el Laboratorio Clínico
              </h4>

              <p className="font-light">
                Exploramos las últimas innovaciones en el campo de la medicina
                de laboratorio y cómo impactan en tu atención...
                <a href="" className="italic underline text-[#4c5354]">
                  Leer más
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
