import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Typewriter from "typewriter-effect";

// Temporary
import Navbar from "../components/common/navbar";

// CSS Grid:
// Col: 40 20 40
// Row: 40 20 404

const Test: NextPage = () => {
  return (
      <div className="snap-y snap-mandatory w-[100vw] h-[100vw]">
        <div className="snap-y snap-mandatory snap-center">
          <img className="h-full" src="/cells.jpg" />
        </div>
        <div className="snap-y snap-mandatory snap-center">
          <img className="h-full" src="/cells.jpg" />
        </div>
      </div>
  );
};

export default Test;
