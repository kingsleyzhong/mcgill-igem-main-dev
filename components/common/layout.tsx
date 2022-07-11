import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
  <>
    <Head>
      <title>McGill IGEM</title>
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </Head>
    <div className="">
    <Navbar />
      {props.children}
    <Footer />
    </div>
  </>
);

export default Layout;