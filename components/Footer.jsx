import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { company, fastLinks } from "@/data";
import { RiMapPinFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer pt-12 xl:pt-[150px]">
      <div className="container mx-auto pb-12 xl:pb-[100px]">
        <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
          <div className="footer__item flex-1">
            <a href="">
              <Image className="mb-[30px]" src={logo} width={300} alt="" />
            </a>

            <p className="mb-[20px]">{company.slogan}</p>

            <div className="flex flex-col gap-y-3 mb-10">
              <div className="flex items-center gap-x-[6px]">
                <RiMapPinFill className="text-[24px] text-accent" />
                <div>{company.address}</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <IoMail className="text-[24px] text-accent" />
                <div>{company.email}</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <MdPhone className="text-[24px] text-accent" />
                <div>{company.phoneUi}</div>
              </div>
            </div>
          </div>

          <div className="footer__item flex-1">
            <h4 className="h4 mb-5">Enlaces Rápidos</h4>

            <ul className="flex gap-x-5 flex-wrap gap-y-3">
              {fastLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="hover:text-accent transition-all"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-[14px] text-[30px] mt-5">
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <a href={company.socialMedia.facebook} target="_blank">
                  <FaFacebook />
                </a>
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <a href={company.socialMedia.instagram} target="_blank">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="footer__item flex-1">
            <h4 className="h4 mb-5">Horario de Atención</h4>

            <div className="flex flex-col gap-5">
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Lunes a Jueves</div>
                  <div className="text-accent font-medium">
                    {company.schedule.mondayTothursday}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Viernes</div>
                  <div className="text-accent font-medium">
                    {company.schedule.friday}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Sábado y Domingo</div>
                  <div className="text-accent font-medium">
                    {company.schedule.weekends}
                  </div>
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
