import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./footer"
import Header from "./header";
import { ThemeProvider } from "./ThemeContext";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Everett Merrill Dev",
  description: "Everett Merrill's Portfolio of Web projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.className} antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
