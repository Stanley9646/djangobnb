// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/navbar/Navbar";
// import LoginModal from "./components/modals/LoginModal";
// import SignupModal from "./components/modals/SignupModal";
// import AddPropertyModal from "./components/modals/AddPropertyModal";
// import SearchModal from "./components/modals/SearchModal";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Django Bnb",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {

//   const content = (
//     <p>Yo yo</p>
//   )
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar/>
        
//         <div className="pt-32">
//         {children}
//         </div>
        
//         <LoginModal/>
//         <SearchModal/>
//         <SignupModal/>
//         <AddPropertyModal/>
        
//         </body>
//     </html>
//   );
// }

import type { Metadata } from "next";

import "./globals.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import AddPropertyModal from "./components/modals/AddPropertyModal";
import SearchModal from "./components/modals/SearchModal";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Django Bnb",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.1/dist/sketchy/bootstrap.min.css"
        />
      </head>
      <body className={inter.className}>
        <Navbar />

        <div className="pt-32">
          {children}
        </div>

        <LoginModal />
        <SearchModal />
        <SignupModal />
        <AddPropertyModal />
      </body>
    </html>
  );
}
