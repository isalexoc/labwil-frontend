import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { company } from "@/data";

const PhoneIcon = () => {
  return (
    <>
      <a
        href={`tel:${company.phone}`}
        className="text-accent flex items-center group gap-x-2"
      >
        <FaPhoneAlt className="text-2xl group-hover:text-accent-secondary" />
        <div className="text-secondary group-hover:text-accent-secondary hidden lg:block">
          {company.phoneUi}
        </div>
      </a>
      <div className="absolute info-box top-12 mb-2 hidden group-hover:flex justify-center w-full">
        <span className="bg-white text-primary text-xs border px-4 py-2">
          Llamar
        </span>
      </div>
    </>
  );
};

export default PhoneIcon;
