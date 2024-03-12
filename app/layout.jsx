import Header from "@/components/Header";
import "@/assets/styles/global.css";

export const metadata = {
  title: "LCCP | Laboratorio Clínico Complejo Parroquial C.A.",
  description: "App para gestión del laboratorio y gestión de pacientes.",
  keywords:
    "Laboratorio clínico, exámenes de laboratorio, análisis clínicos, laboratorio de análisis clínicos",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
