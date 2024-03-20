import "@/assets/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LCCP | Laboratorio Clínico Complejo Parroquial C.A.",
  description: "App para gestión del laboratorio y gestión de pacientes.",
  keywords:
    "Laboratorio clínico, exámenes de laboratorio, análisis clínicos, laboratorio de análisis clínicos",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="es">
      <body className="font-nunito">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
