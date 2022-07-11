import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
  <>
    <div className="">
    <Navbar />
      {props.children}
    <Footer />
    </div>
  </>
);

export default Layout;