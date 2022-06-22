import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/common/layout";
import ReactPlayer from "react-player";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";

import Typewriter from "typewriter-effect";


const Home: NextPage = () => {
  
  return (
    <div className="bg-gray-200">
      <Layout>
        <video autoPlay muted loop className="z-10">
          <source src="videos/homepage_video.mp4" type="video/mp4"/>
        </video>
        {/* <ReactPlayer url="/videos/homepage_video.mp4" loop={true} playing={true} volume={0} className="absolute top-0 left-0 w-full h-full" /> */}
        <div className="bg-black text-white py-2 text-center font-source-code-pro">
          "People confuse what's impossible today with what's impossible
          tomorrow" -George M. Church
        </div>
        <div className="bg-[url('/cells.jpg')] text-white h-[32rem] bg-cover">
          {/* <img src="/cells.jpg"/> */}
          <div className="text-4xl ml-[48rem] pt-[20rem]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pasteString("We are ")
                  .typeString("biohackers")
                  .pauseFor(1000)
                  .deleteChars(10)
                  .typeString("academics")
                  .pauseFor(1000)
                  .deleteChars(9)
                  .typeString("adventurers")
                  .pauseFor(1000)
                  .deleteChars(11)
                  .start();
              }}
              options={{
                loop: true,
                autoStart: true,
                deleteSpeed: 8,
              }}
            />
          </div>
        </div>


        {/* <div className="h-auto">
          <Marquee
            className="text-black text-8xl"
            direction="left"
            speed={30}
            >
              Build
            </Marquee>
        </div> */}

      </Layout>
    </div>
  );
};

export default Home;
