import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { company } from "@/data";

const MapsIcon = () => {
  return (
    <>
      <a
        href={company.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent flex items-center justify-center group gap-x-2"
      >
        <FaMapMarkerAlt className="text-2xl group-hover:text-accent-secondary" />
        <div className="text-secondary group-hover:text-accent-secondary hidden lg:block">
          {company.shortAddress}
        </div>
      </a>
      <div className="absolute info-box top-12 mb-2 hidden group-hover:flex justify-center w-full">
        <span className="bg-white text-primary text-xs border px-4 py-2">
          Google Maps
        </span>
      </div>
    </>
  );
};

export default MapsIcon;
