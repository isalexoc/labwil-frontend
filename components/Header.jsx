"use client";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMobileMenuButton = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="py-8 lg:pt-6 lg:pb-14">
      <div className="container mx-auto md:relative flex flex-col md:flex-row md:justify-between gap-y-4 md:gap-y-0">
        <div className="flex justify-center md:justify-normal ms-6 lg:ms-0">
          <Link href="/">
            <Image src={logo} height={56} priority alt="" />
          </Link>
        </div>

        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-10 md:gap-y-0">
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <FaMapMarkerAlt className="text-2xl text-accent" />
            <div className="text-secondary md:hidden lg:block">
              Turmero, Aragua.
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <FaPhoneAlt className="text-2xl text-accent" />
            <div className="text-secondary md:hidden lg:block">
              (412) 299 4614
            </div>
          </div>

          <button className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0">
            Agendar
          </button>

          <nav
            className={`mnav bg-white fixed w-[300px] top-0 h-screen ${
              isNavOpen ? "left-0" : "-left-[300px]"
            } shadow-2xl lg:hidden transition-all duration-300 z-20`}
          >
            <button
              onClick={handleMobileMenuButton}
              className="mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
            >
              <GiHamburgerMenu
                className={`mnav__close-btn-icon text-2xl text-white ${
                  isNavOpen ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line"
                }`}
              />
            </button>

            <div className="px-12 flex flex-col gap-y-12 h-full">
              <Link href="#">
                <Image src={logo} height={56} alt="" />
              </Link>

              <ul className="flex flex-col gap-y-5">
                <li>
                  <Link
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Personal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Para Empresas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Contactanos
                  </Link>
                </li>
              </ul>

              <form
                className="relative flex gap-x-[10px]"
                id="form-search-header"
              >
                <label htmlFor="mnav-search-input">
                  <LuSearch className="text-2xl text-accent" />
                </label>
                <input
                  type="text"
                  id="mnav-search-input"
                  placeholder="Buscar..."
                  className="outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent placeholder:italic"
                />
              </form>
            </div>
          </nav>

          <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
            <ul className="flex gap-x-4">
              <li>
                <Link
                  href="#"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Para Empresas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary hover:text-accent transition-all duration-300"
                >
                  Contactanos
                </Link>
              </li>
            </ul>

            <form
              className="relative flex gap-x-[10px]"
              id="form-search-header"
            >
              <label
                htmlFor="search-input"
                className="flex justify-center items-center group"
              >
                <LuSearch className="text-2xl text-accent" />
              </label>
              <input
                type="text"
                id="search-input"
                placeholder="Buscar..."
                className="outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150"
              />
            </form>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
