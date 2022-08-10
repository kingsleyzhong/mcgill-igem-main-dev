import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";

import Layout from "../components/common/layout";

const Mission: NextPage = () => {
  return (
    <Layout>
      <div className="w-full bg-black text-white pt-20  tracking-tight">
        <div className="mb-10 pl-[10rem]">
          <div className="py-10 capitalize font-signika font-light text-3xl">
            ABOUT US
          </div>
          <div className="capitalize font-signika font-medium text-8xl">
            OUR MISSION
          </div>
          <div className="py-10 capitalize font-mono font-bold  text-l">
            <span className="text-mcgill-red">HOME </span>/ ABOUT US / OUR
            MISSION
          </div>
        </div>

        <div className="py-10 pl-40">
          <div className="w-1/2 font-signika font-regular text-5xl">
            The training grounds for a{" "}
            <span className="text-mcgill-red">new</span> generation of
            scientists & engineers.
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-l">
            The sciences are no longer the siloed study of individal fields.{" "}
            <br />
            <br />
            In lieu of individuals seeking erudition, highly interdisciplinary
            teams are now the ones on the cutting edge of research. <br />
            <br />
            Biology especially is a field that increasingly requires this kind
            of collaboration. The study of complex phoenomena in our natural
            world demands the confluence of this generation’s greatest minds,
            armed with scientific weaponry from every discipline.
          </div>
        </div>
        {/* <div className="h-10 w-full bg-blue-400"/> */}

        <div className="py-10 my-5 px-40 bg-mcgill-red font-signika font-medium text-7xl ">
          Experience the entire research life cycle, from benchtop to bedside.
        </div>

        <div className="py-10 pl-40">
          <Link href="/about">
            <div className="float-right hover:translate-x-0.5 pr-10 font-signika text-mcgill-red cursor-pointer">
              &#10230; <span className="hover:underline">Our Team</span>
            </div>
          </Link>
          <div className="w-1/2 font-signika font-regular text-5xl">
            We are students and teachers, engineers and philosophers.
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-l">
            The McGill iGEM team is a group consisting of PhD students, masters
            students, and undergraduates all with one goal: to change the world
            with synthetic biology. <br />
            <br />
            We seek to establish a community of the most innovative young minds
            from all disciplines.
            <br />
            <br />
            We seek to step into the great unknown and discover the secrets of
            nature.
            <br />
            <br />
            Most of all, we seek to be curious about the world, and to never
            falter in our endless pursuit of scientific erudition. <br />
            <br />
            Together.
          </div>
        </div>


        <div className="py-10 pl-40 bg-white text-black relative">
       
        <Link href="/join">
            <div className="float-right hover:translate-x-0.5 pr-10 font-signika text-mcgill-red cursor-pointer">
              &#10230; <span className="hover:underline">Join Us</span>
            </div>
          </Link>


          {/* <div className="float-right w-1/3 translate-y-[100%] translate-x-10">
          <div className="translate-y-[50%]">
              <Image
                src="/igem.png"
                layout="responsive"
                width={563}
                height={382}
                className=""
              />
            </div>
          </div> */}

            <div className="w-1/2 font-signika font-regular text-5xl">
              Representing McGill on the international stage.
            </div>
            <div className="w-1/2 mt-14 font-mono font-regular text-l">
              The McGill iGEM team, as the name suggests, revolves around the
              annual iGEM (Internationally Genetically Engineered Machine)
              competition. iGEM is an international competition in the field of
              synthetic biology, where teams around the world perform research
              and eventually attend the “Grand Jamboree”, the largest science
              conference in the world, to present their findings.
              <br />
              <br />
              The McGill iGEM team manages and selects the McGill team for the
              competition, in addition to promoting synthetic biology on campus
              and in the Montreal area. <br />
              <br />
              Each year, the McGill iGEM team usually recruits new members
              exclusively at the start of fall semester, but exceptions have
              been made in the past. If you are an ambitious individual
              interested in joining us, please reach out.
            </div>
          </div>

      

        </div>
    </Layout>
  );
};

export default Mission;
