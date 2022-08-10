import Link from "next/link";
import Image from "next/image";
import Person from "../components/about/person";
import type { NextPage } from "next";

import Layout from "../components/common/layout";

const About: NextPage = () => {
  return (
    <Layout>
      <div className="bg-white text-black pt-20 px-20">
        <div className="mb-15">
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
            / ABOUT US / OUR TEAM
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-10 pr-10">
        <div className="text-right w-full font-mono px-2 pb-4">2022</div>
        <div className="grid grid-cols-5 gap-2">
            <div className="font-mono text-center uppercase">Leadership</div>
            <Person name="Jesse Lee"/>
            <Person name="Albert Nitu"/>
            <Person name="Hanwen Wang"/>
            <Person name="Anna Li"/>
            <div></div>
            <Person name="Thomas Lai"/>
            <Person name="Chandler Ochs"/>
            <Person name="Dan Voicu"/>
            <Person name="Hyerin Kim"/>
            <div></div>
            <Person name="Emily Martin"/>
            <Person name="Justin Kashi"/>
        
      </div>
        <div className="grid grid-cols-5 gap-2 py-10">
            <div className="font-mono text-center uppercase">Wet Lab</div>
            <Person name="Jade Tong"/>
            <Person name="Elliott Cole"/>
            <Person name="Jonathan Cheng"/>
            <Person name="Rylan Donohoe"/>

            <div></div>
            <Person name="IMG_0743 1"/>
            <Person name="Huanyi Zhang"/>
            <Person name="Stephen Lu"/>        
      </div>
      
        <div className="grid grid-cols-5 gap-2 py-10">
            <div className="font-mono text-center uppercase">Dry Lab</div>
            <Person name="Huilin Liang"/>
            <Person name="Anita Kriz"/>
            <Person name="Jessica Zhu"/>
            <Person name="Kingsley Zhong"/>
 
      </div>

        <div className="grid grid-cols-5 gap-2 py-10">
            <div className="font-mono text-center uppercase">Graduate Advisor</div>
            <Person name="Ansley Gnana-pragasam"/>
            <Person name="Faiz Hussain"/>
            <Person name="Christien Dykstra"/>
            <Person name="Clara MacMahon"/>
            <div />
            <Person name="Eduardo Cepeda-Canedo"/>
            <Person name="Smriti Suresh"/>
            <Person name="Jesse Lee2"/>
 
      </div>
      </div>
    </Layout>
  );
};

export default About;
