import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import logoSm from "@/assets/images/logosm.png";

const LogoLink = () => {
  return (
    <Link href="/">
      <Image
        src={logoSm}
        height={56}
        priority
        alt="Logo Small"
        className="md:hidden ms-11"
      />
      <Image
        src={logo}
        height={56}
        priority
        alt="Logo"
        className="hidden md:block ms-10"
      />
    </Link>
  );
};

export default LogoLink;
