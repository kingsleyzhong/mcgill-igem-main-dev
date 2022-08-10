import Link from "next/link";
import type { NextPage } from "next";

import Layout from "../components/common/layout";

const Collaborators: NextPage = () => {
  return (
    <Layout>
      <div className="bg-black text-white pt-20 pl-20">
        <div className="mb-20">
          <div className="py-10 capitalize font-signika font-light tracking-tight text-3xl">
            PARTNERS
          </div>
          <div className="capitalize font-signika font-medium tracking-tight text-8xl">
            PARTNER WITH US
          </div>
          <div className="py-10 capitalize font-mono font-bold tracking-tight text-l">
            <span className="text-mcgill-red">
              <Link href="/">HOME </Link>
            </span>
            / PARTNERS / PARTNER WITH US
          </div>
        </div>

        <div className="w-1/2 font-signika font-regular text-5xl pb-12">
          Interested in sponsoring an event, collaborating with us on our
          science, or investing in our projects?
          <p className="text-mcgill-red py-5"> Shoot us a message.</p>
        </div>
      </div>
      <h2 className="text-4xl my-8 pl-20 font-signika">
            Sponsorship Package
          </h2>
          <iframe src="https://drive.google.com/file/d/1AKULftZUtHir_HnewGkoBOIm4M4-01zs/preview" width="640" height="480" allow="autoplay" className="w-full px-20"></iframe>
    </Layout>
  );
};

export default Collaborators;
