import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { RiMapPinFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer pt-12 xl:pt-[150px]">
      <div className="container mx-auto pb-12 xl:pb-[100px]">
        <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
          <div className="footer__item flex-1">
            <a href="">
              <Image className="mb-[30px]" src={logo} width={300} alt="" />
            </a>

            <p className="mb-[20px]">
              Especializados en análisis clínicos y diagnósticos precisos para
              su tranquilidad y bienestar.
            </p>

            <div className="flex flex-col gap-y-3 mb-10">
              <div className="flex items-center gap-x-[6px]">
                <RiMapPinFill className="text-[24px] text-accent" />
                <div>NRO 38 C. Mariño, Turmero 2115, Aragua.</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <IoMail className="text-[24px] text-accent" />
                <div>l.c.complejo.parroquial@gmail.com</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <MdPhone className="text-[24px] text-accent" />
                <div>(412) 299 4614</div>
              </div>
            </div>

            <div className="flex gap-[14px] text-[30px]">
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <FaFacebook />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <FaInstagram />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <BsTwitterX />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <BsLinkedin />
              </div>
            </div>
          </div>

          <div className="footer__item flex-1">
            <h4 className="h4 mb-5">Enlaces Rápidos</h4>
            <div className="flex gap-x-5">
              <ul className="flex-1 flex flex-col gap-y-5">
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Blog
                  </a>
                </li>
              </ul>

              <ul className="flex-1 flex flex-col gap-y-5">
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Resultados
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Políticas de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Términos y Condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__item flex-1">
            <h4 className="h4 mb-5">Horario de Atención</h4>

            <div className="flex flex-col gap-5">
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Lunes a Jueves</div>
                  <div className="text-accent font-medium">
                    6:30 Am - 3:00 Pm
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Viernes</div>
                  <div className="text-accent font-medium">
                    6:30 Am - 2:30 Pm
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Sábado y Domingo</div>
                  <div className="text-accent font-medium">Cerrado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] border-t">
        <div className="container mx-auto text-center">
          <div className="font-light text-base">
            &copy; 2024 LCCP - Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
