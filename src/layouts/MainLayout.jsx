import React from "react";
import clsx from "clsx";
import Navbar from "../partials/Navbar/Navbar";
import Footer from "../partials/Footer/Footer";

const MainLayout = ({ rootClassName, children }) => {
  return (
    <>
      <Navbar />

      <div className={clsx(rootClassName, "main-screen-content")}>
        {children}
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
