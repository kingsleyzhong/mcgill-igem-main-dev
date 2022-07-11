import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

// Temporary
import Navbar from '../components/common/navbar'


const MarqueeDemo: NextPage = () => {
    return (
        <body>

        <div className="text-8xl text-white bg-[url('/bg-circles.png')] relative h-full px-10 py-10 bg-fit">
          <Marquee
                className="text-bold"
                gradient={false}
                direction="left"
                speed={20}
                >
                  Build
        </Marquee>
          <Marquee
                className="text-bold"
                gradient={false}
                direction="right"
                speed={20}
                >
                  Biology
        </Marquee>
          <Marquee
                className="text-bold"
                gradient={false}
                direction="left"
                speed={20}
                >
                  Beyond
        </Marquee>
          {/* <Image src="/bg-circles.png" className="w-full" layout="fill"/> */}
          {/* <img className="h-full" src="/bg-circles.png" /> */}
        </div>
        </body>
      );
}

export default MarqueeDemo
