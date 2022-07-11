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
    <body>
      {/* <Navbar /> */}
      {/* <img className="h-full" src="/bg-circles.png" /> */}
      {/* <div className="grid grid-cols-[45%_10%_45%] grid-rows-[40%_20%_40%] text-center h-200">
        <div className=" border-black border-2 row-span-2">TEXT</div>
        <div className=" border-black border-2 col-span-2 row-span-2">
          <img src="/team_pic.png" />
        </div>
        <div className=" border-black border-2 col-span-2 row-span-2">IMAGE</div>
        <div className=" border-black border-2 row-span-2">TEXT</div>

      </div> */}

<div className="image_effect w-[110%] ml-[-10%] p-4">
          <img src="/team_pic.png" />
          </div>
          
    </body>
  );
};

export default Test;
