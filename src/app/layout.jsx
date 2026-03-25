import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tienda Ecommerce",
  description: "Tienda Ecommerce desarrollada con Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable}`} 
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <CartProvider>
          <Header />
          <div style={{ flex: '1 0 auto' }}>
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
