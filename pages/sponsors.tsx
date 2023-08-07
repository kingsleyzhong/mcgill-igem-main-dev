import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";

import Layout from "../components/common/layout";

const Standard: NextPage = () => {
  return (
    <Layout>
      <div className="bg-black text-white pt-20 pl-20">
        <div className="mb-16">
          <div className="py-10 capitalize font-signika font-light tracking-tight text-3xl">
            ABOUT US
          </div>
          <div className="capitalize font-signika font-medium tracking-tight text-8xl">
            OUR TEAM
          </div>
          <div className="py-10 capitalize font-mono font-bold tracking-tight text-l">
            <span className="text-mcgill-red">
              <Link href="/">HOME </Link>
            </span>
            / PARTNERS / SPONSORS
          </div>
        </div>

        <div className="w-1/2 font-signika font-regular text-5xl pb-12">
          Thank you to all of our sponsors, helping us usher in the next
          revolution—the
          <span className="text-mcgill-red"> biorevolution</span>.
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center py-10">
        <div className="h-full w-1/2 py-5">
          <a href="https://www.mcgill.ca/" className="">
            <Image
              width={819}
              height={193}
              layout="responsive"
              src="/sponsors/mcgill.png"
            />
          </a>
        </div>
        <div className="h-full w-[70%] py-5 flex flex-row justify-center items-center">
          {/* <div className="border-4 border-mcgill-red h-20 w-20 mx-5"></div>
            <div className="border-4 border-mcgill-red h-20 w-20"></div> */}
          <div className="h-full w-full mx-5">
            <a href="https://ssmu.ca/" className="">
              <Image
                width={306}
                height={200}
                layout="responsive"
                src="/sponsors/SSMU.png"
              />
            </a>
          </div>
          <div className="h-full w-full mx-5">
            <a href="https://www.pfizer.ca/" className="">
              <Image
                width={603}
                height={316}
                layout="responsive"
                src="/sponsors/Pfizer.png"
              />
            </a>
          </div>
        </div>

        <div className="h-full w-1/2 py-5">
          <a href="https://gairdner.org/" className="">
            <Image
              width={819}
              height={193}
              layout="responsive"
              src="/sponsors/Gairdner.png"
            />
          </a>
        </div>

        <div className="h-full w-[85%] py-5 flex flex-row justify-center items-center">
          {/* <div className="border-4 border-mcgill-red h-20 w-20 mx-5"></div>
            <div className="border-4 border-mcgill-red h-20 w-20"></div> */}
          <div className="h-full w-full mx-5">
            <a href="https://www.snapgene.com/" className="">
              <Image
                width={400}
                height={100}
                layout="responsive"
                src="/sponsors/SnapGene.png"
              />
            </a>
          </div>
          <div className="h-full w-full mx-5">
            <a href="https://www.minipcr.com/" className="">
              <Image
                width={514}
                height={229}
                layout="responsive"
                src="/sponsors/MiniPCR.png"
              />
            </a>
          </div>
          <div className="h-full w-full mx-5">
            <a href="https://www.neb.ca/" className="">
              <Image
                width={461}
                height={179}
                layout="responsive"
                src="/sponsors/New England Biolabs.png"
              />
            </a>
          </div>
        </div>

        <div className="w-[80%] py-5 flex flex-row justify-center items-center">
          {/* <div className="border-4 border-mcgill-red h-20 w-20 mx-5"></div>
            <div className="border-4 border-mcgill-red h-20 w-20"></div> */}
          <div className="h-full w-full mx-5">
            <a href="https://www.benchling.com/" className="">
              <Image
                width={495}
                height={105}
                layout="responsive"
                src="/sponsors/Benchling.png"
              />
            </a>
          </div>
          <div className="h-full w-full mx-5">
            <a href="https://www.twistbioscience.com/" className="">
              <Image
                width={586}
                height={199}
                layout="responsive"
                src="/sponsors/Twist Biosciences.png"
              />
            </a>
          </div>
          <div className="h-full w-full mx-5">
            <a href="https://zbiotics.com/" className="">
              <Image
                width={1200}
                height={158}
                layout="responsive"
                src="/sponsors/zbiotics.png"
              />
            </a>
          </div>
        </div>


        <div className="h-full w-[90%] py-5 flex flex-row justify-center items-center">
          {/* <div className="border-4 border-mcgill-red h-20 w-20 mx-5"></div>
            <div className="border-4 border-mcgill-red h-20 w-20"></div> */}
          <div className="h-full w-full mx-5">
            <a href="https://latch.bio/" className="">
              <Image
                width={385}
                height={122}
                layout="responsive"
                src="/sponsors/latch.png"
              />
            </a>
          </div>
          <div className="h-full w-full mx-5">
            <a href="https://www.idtdna.com/pages" className="">
              <Image
                width={355}
                height={124}
                layout="responsive"
                src="/sponsors/IDT.png"
              />
            </a>
          </div>
          <div className="h-full w-full mx-5">
            <a href="https://mrm.research.mcgill.ca/" className="">
              <Image
                width={466}
                height={164}
                layout="responsive"
                src="/sponsors/MRM.png"
              />
            </a>
          </div>
          <div className="h-full w-full mx-5">
            <a href="https://www.mybeckman.ca/" className="">
              <Image
                width={314}
                height={150}
                layout="responsive"
                src="/sponsors/Beckman Coulter.png"
              />
            </a>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Standard;


export async function getStaticProps() {
  return {
    props: {},
  };
}