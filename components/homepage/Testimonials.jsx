"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import testimonialImage from "../../assets/images/testimonials/img.png";
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // init Swiper:
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Pagination],
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <motion.section
      className="testimonial bg-testimonials bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
    >
      <div className="testimonial__constainer container mx-auto">
        <div className="flex flex-col items-center gap-x-14 xl:flex-row">
          <div className="hidden xl:flex">
            <Image src={testimonialImage} alt="" />
          </div>

          <div className="max-w-[98%] xl:max-w-[710px]">
            <div className="swiper h-[400px]">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="h-full flex flex-col justify-center items-start">
                    <div className="max-w-[680px] mx-auto text-center xl:text-left">
                      <p className="font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7">
                        <span className="mx-2">
                          Excelente atención, personal súper calificado.
                          Altamente recomendado
                        </span>
                      </p>

                      <div className="text-[26px] text-[#4c5354] font-semibold">
                        Daniela Moron
                      </div>

                      <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                        Paciente
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="h-full flex flex-col justify-center items-start">
                    <div className="max-w-[680px] mx-auto text-center xl:text-left">
                      <p className="font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7">
                        <span className="mx-2">
                          Felicitaciones a todo el personal que allí trabaja Un
                          excelente equipo y una atención de primera
                        </span>
                      </p>

                      <div className="text-[26px] text-[#4c5354] font-semibold">
                        Elisa torres
                      </div>

                      <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                        Paciente
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
