"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { navLinks } from "@/data";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";
import SearchFrom from "./searchFrom";
import MapsIcon from "./MapsIcon";
import PhoneIcon from "./PhoneIcon";
import MyAccountLink from "./MyAccountLink";
import LogoLink from "./LogoLink";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showOnScroll, setShowOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set showOnScroll to true if page is scrolled more than 50 pixels, for example
      const isLgScreen = window.innerWidth >= 960;
      setShowOnScroll(isLgScreen && window.scrollY > 86);
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures the effect is only run on mount and unmount

  const handleMobileMenuButton = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="py-2 md:py-8 lg:pt-6 lg:pb-14">
      <div className="container mx-auto md:relative flex flex-col md:flex-row md:justify-between md:gap-y-0">
        {/* Header for tablets and small devices */}
        <div className="flex justify-between md:justify-normal md-6 lg:ms-0">
          <LogoLink />
          <div className="flex items-center justify-between gap-5 md:hidden">
            <MapsIcon />
            <PhoneIcon />
            <Link href="/mi-cuenta" className="flex items-center">
              <FaUserCircle className="text-2xl text-accent hover:text-accent-secondary" />
            </Link>
          </div>
        </div>

        {/* Header for desktop */}
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-10 md:gap-y-0 ">
          <div className="group relative items-center justify-center hidden md:inline-flex">
            <MapsIcon />
          </div>
          <div className="justify-center items-center relative gap-x-2 lg:justify-normal group hidden md:flex">
            <PhoneIcon />
          </div>

          <MyAccountLink noText={true} sight="hidden md:flex lg:hidden" />

          <div className="hidden md:flex">
            <button className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0">
              Agendar
            </button>
          </div>

          <nav
            className={`mnav bg-white fixed w-[280px] top-0 h-screen ${
              isNavOpen ? "left-0" : "-left-[280px]"
            } shadow-2xl transition-all duration-300 z-20`}
          >
            <button
              onClick={handleMobileMenuButton}
              className="mnav__close-btn bg-primary w-12 h-12 relative -right-full top-3 md:top-9 lg:top-2 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
            >
              {isNavOpen ? (
                <FaAnglesLeft
                  className={`mnav__close-btn-icon text-2xl text-white`}
                />
              ) : (
                <GiHamburgerMenu
                  className={`mnav__close-btn-icon text-2xl text-white`}
                />
              )}
            </button>

            <div className="px-12 flex flex-col gap-y-12 h-full max-h-[calc(100vh - 9rem)] overflow-y-auto">
              <Link href="#">
                <Image src={logo} height={56} alt="Logo" />
              </Link>

              <ul className="flex flex-col gap-y-5">
                <li>
                  <Link
                    href="/mi-cuenta"
                    className="flex items-center justify-start gap-x-2 cursor-pointer group"
                  >
                    <FaUserCircle className="text-2xl text-accent group-hover:text-accent-secondary" />
                    <span className="text-md text-secondary group-hover:text-accent-secondary">
                      Mi Cuenta
                    </span>
                  </Link>
                </li>

                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="text-secondary hover:text-accent transition-all duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <SearchFrom />
              <br />
            </div>
          </nav>

          <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
            <ul className="flex gap-x-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}

              <li>
                <SearchFrom />
              </li>
            </ul>

            <MyAccountLink />
          </nav>
        </div>
      </div>

      {/* Sticky Nav for desktop */}
      <nav
        className={`sticky-nav bg-white container mx-auto w-full shadow-custom1 h-16 rounded-[10px] ${
          showOnScroll ? "lg:flex show-nav" : "hidden"
        } lg:items-center lg:justify-between lg:px-[50px]`}
      >
        <ul className="flex gap-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
              >
                {link.title}
              </Link>
            </li>
          ))}

          <li>
            <SearchFrom />
          </li>
        </ul>

        <MyAccountLink />
      </nav>
    </header>
  );
};

export default Header;
