"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import brand1 from "@/assets/images/brands/brand-1.svg";
import brand2 from "@/assets/images/brands/brand-2.svg";
import brand3 from "@/assets/images/brands/brand-3.svg";
import brand4 from "@/assets/images/brands/brand-4.svg";
import brand5 from "@/assets/images/brands/brand-5.svg";

const Brands = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5];

  return (
    <section className="brands section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-12 xl:gap-y-0 justify-between items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="brands__logo"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileInView={{ opacity: 1, y: 0 }} // This ensures the item becomes visible and moves into position when in view
              viewport={{ once: true }} // Ensures animation only plays once when the element comes into view
            >
              <Image src={brand} alt={`Brand ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
