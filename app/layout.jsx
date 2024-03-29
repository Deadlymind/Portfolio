import { Outfit } from "next/font/google";
import "./globals.css";

// components

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Oussama Ayari Portfolio",
  description: "Website of Oussama Ayari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className} suppressHydrationWarning >
        <ThemeProvider attribute='class' defaulttheme='light' >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
