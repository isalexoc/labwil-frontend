import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const MyAccountLink = ({ noText, sight }) => {
  return (
    <Link
      href="/mi-cuenta"
      className={`flex flex-col items-center justify-center cursor-pointer group ${
        sight ? sight : ""
      }`}
    >
      <FaUserCircle className="text-2xl text-accent group-hover:text-accent-secondary" />
      <span
        className={`text-md text-secondary group-hover:text-accent-secondary ${
          noText ? "hidden" : ""
        }`}
      >
        Mi Cuenta
      </span>
    </Link>
  );
};

export default MyAccountLink;
