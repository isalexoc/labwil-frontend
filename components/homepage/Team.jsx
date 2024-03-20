"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import doctor1 from "@/assets/images/team/doctor-1.png";
import doctor2 from "@/assets/images/team/doctor-2.png";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Team = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  useEffect(() => {
    Swiper.use([Pagination]);

    new Swiper(".team__slider.swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <motion.section
      className="team section"
      initial="hidden"
      variants={variants}
      whileInView="visible"
      viewport={{
        once: true,
      }}
    >
      <div className="container mx-auto">
        <h2 className="team__title h2 mb-[50px] text-center xl:text-left">
          Nuestro Equipo
        </h2>

        <div className="team__slider swiper min-h-[400px]">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="flex flex-col md:flex-row gap-9">
                <div className="flex-1 flex flex-col xl:flex-row">
                  <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                    <div className="flex-1">
                      <Image src={doctor1} alt="" />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h4 className="h4 mb-[10px]">Lic. Wilma Corrales</h4>

                      <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]">
                        Bioanalista Fundadora
                      </div>

                      <p className="font-light mb-[26px] max-w-[320px]">
                        Bioanalista pionera y fundadora, su visión y liderazgo
                        han sido fundamentales en establecer nuestro laboratorio
                        como un referente en el campo de los análisis clínicos.
                      </p>

                      <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                        <a
                          href="https://www.youtube.com/@wilmanutre"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaYoutube />
                        </a>
                        <a
                          href="https://www.facebook.com/wilmacorralest"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaFacebook />
                        </a>
                        <a
                          href="https://www.instagram.com/wilma_corrales/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <RiInstagramFill />
                        </a>
                        <a
                          href="https://twitter.com/corrales_wilma"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaXTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col xl:flex-row">
                  <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                    <div className="flex-1">
                      <Image src={doctor2} alt="" />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h4 className="h4 mb-[10px]">Dr. Zachary Brown</h4>

                      <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]">
                        Cardiologist
                      </div>

                      <p className="font-light mb-[26px] max-w-[320px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore possimus eum atque.
                      </p>

                      <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaYoutube />
                        </a>
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaFacebook />
                        </a>
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <RiInstagramFill />
                        </a>
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaXTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="flex flex-col md:flex-row gap-9">
                <div className="flex-1 flex flex-col xl:flex-row">
                  <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                    <div className="flex-1">
                      <Image src={doctor1} alt="" />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h4 className="h4 mb-[10px]">Dr. Leslie Taylor</h4>

                      <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]">
                        Pediatrician
                      </div>

                      <p className="font-light mb-[26px] max-w-[320px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore possimus eum atque.
                      </p>

                      <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaYoutube />
                        </a>
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaFacebook />
                        </a>
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <RiInstagramFill />
                        </a>
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaXTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col xl:flex-row">
                  <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                    <div className="flex-1">
                      <Image src={doctor2} alt="" />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h4 className="h4 mb-[10px]">Dr. Zachary Brown</h4>

                      <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]">
                        Cardiologist
                      </div>

                      <p className="font-light mb-[26px] max-w-[320px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore possimus eum atque.
                      </p>

                      <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaYoutube />
                        </a>
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaFacebook />
                        </a>
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <RiInstagramFill />
                        </a>
                        <a
                          href="#"
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <FaXTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Team;
