import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="cursor-igem mt-12">
      {children}
    <Footer />
    </div>
  </>
);

export default Layout;