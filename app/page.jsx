import Hero from "@/components/homepage/Hero";
import Stats from "@/components/homepage/Stats";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";
import Team from "@/components/homepage/Team";
import Faq from "@/components/homepage/Faq";
import Departments from "@/components/homepage/Departments";
import Blog from "@/components/homepage/Blog";
import Brands from "@/components/homepage/Brands";
import Newsletter from "@/components/homepage/Newsletter";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Team />
      <Testimonials />
      <Faq />
      <Departments />
      <Blog />
      <Brands />
      <Newsletter />
    </>
  );
};

export default HomePage;
