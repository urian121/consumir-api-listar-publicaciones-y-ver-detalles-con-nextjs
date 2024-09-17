import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import "./styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Consumir API, listar publicaciones y ver detalles con Next.js",
  description: "Domina la forma de consumir API, listar publicaciones y ver detalles con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        <div className="container">
          <div className="row justify-content-md-center mt-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
