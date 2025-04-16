// import localFont from "next/font/local";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/NavbarHead";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400','700','900']
})

export const metadata: Metadata = {
  title: "RyanBA | Full-stack Web Developer | Portfolio",
  description: "Ryan Bachtiar Abdalla - Full-stack Web Developer | A verstaile full-stack web developer with expertise in frontend technologies for crafting engaging user interfaces and backend systems for building robust, scalable infrastructures. Skilled in database design and search engine optimization (SEO), James creates high-performing web applications that deliver exceptional user experiences and maximize online visibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1 h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
