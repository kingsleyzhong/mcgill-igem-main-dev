import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
  <>
    <Navbar />
    <div className="cursor-igem mt-12">
      {props.children}
    <Footer />
    </div>
  </>
);

export default Layout;