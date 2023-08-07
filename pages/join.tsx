import Link from "next/link";
import type { NextPage } from "next";
import Marquee from "react-fast-marquee";
import Script from "next/script";

import Layout from "../components/common/layout";

const Join: NextPage = () => {
  return (
    <Layout>

      <div className="bg-black text-white pt-20 pl-20">
        <div className="">
          <div className="py-10 capitalize font-signika font-light tracking-tight text-3xl">
            ABOUT US
          </div>
          <div className="capitalize font-signika font-medium tracking-tight text-8xl">
            JOIN US
          </div>
          <div className="py-10 capitalize font-mono font-bold tracking-tight text-l">
            <span className="text-mcgill-red">
              <Link href="/">HOME </Link>
            </span>
            / ABOUT US / JOIN US
          </div>
        </div>
      </div>

      <Marquee gradient={false} speed={45}>
        <img src="img/Photo Chain.png" />
      </Marquee>

      <div className="bg-black text-white py-16 px-20 grid grid-cols-10 gap-16 font-signika">
        <div className="col-span-6 px-10">
          <h2 className="text-left text-4xl my-2">
            Want to join one of the only groups on campus that invests in its
            members?
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-5">
            <div className="border-mcgill-red border-t">
              <h3 className="text-2xl py-3 ">Wet Lab</h3>
              <p className="font-mono leading-5 text-justify pr-[10%]">
                Wet lab research members are responsible for conducting hands-on
                research and performing molecular biology experiments in the
                lab.{" "}
              </p>

              <p className="font-mono pt-2 text-justify leading-5 pr-[10%]">
                Prior experience in a life sciences or chemistry lab is
                preferred, but by no means required as we will provide training.
                Wet lab requires a lot of time dedicated to it, so we care more
                if you are able to come in and do the work. Positions are not
                remote and presence on campus over the summer is required.
              </p>
            </div>
            <div className="border-mcgill-red border-t">
              <h3 className="text-2xl py-3">Dry Lab</h3>
              <p className="font-mono leading-5 text-justify pr-[10%]">
                Dry lab research members are responsible for all the
                computational aspects of the project, including mathematical
                modelling, protein modelling, genomic analysis, and more.
              </p>

              <p className="font-mono pt-2 leading-5 text-justify pr-[10%]">
                Prior computational experience is preferred, especially in areas
                of mathematical modelling and protein modelling. Dry lab
                research can be done with the majority of it being remote.
              </p>
            </div>
            <div className="border-mcgill-red border-t">
              <h3 className="text-2xl py-3">Human Practices</h3>
              <p className="font-mono leading-5 text-justify pr-[10%]">
                Members of our human practices team are responsible for
                conducting interviews with leaders of industry, professors, and
                people who will be affected by our project, whatever it may be.
                Members must consider the ethics and implications of our
                project.
              </p>

              <p className="font-mono pt-2 leading-5 text-justify pr-[10%]">
                Prior experience with running surveys is preferred. Strong
                interpersonal skills are required, and members of our human
                practices team may be sent as representatives of our
                organization to local and international conferences. Position is
                mostly remote.
              </p>
            </div>
            <div className="border-mcgill-red border-t">
              <h3 className="text-2xl py-3">Media & Design</h3>
              <p className="font-mono leading-5 text-justify pr-[10%]">
                Members of our media & design team will be responsible for the
                design and maintenance of all of our organization’s branding and
                outreach communications.
              </p>

              <p className="font-mono pt-2 leading-5 text-justify pr-[10%]">
                Prior experience with design software (ie. Figma, Adobe Creative
                Suite), photography, and/or videography is strongly preferred.
                Position is mostly remote.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 font-signika px-10 my-10">
            <h4 className="my-4 text-2xl">Newsletter</h4>
            <iframe src="https://mcgilligem.substack.com/embed" width="350" height="80" className="border-mcgill-red border-1 -ml-5" scrolling="no" style={{textTransform: "uppercase"}}></iframe>
            {/* style="border:1px solid #EEE; background:white;" frameborder="0" */}
            {/* <input type="text" placeholder="Email"></input> */}
            <h4 className="my-6 text-2xl">Location</h4>


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.0705811945377!2d-73.58294048444097!3d45.508657779101526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a374170c221%3A0x6722b2a9457b3c01!2sDuff%20Medical%20Building!5e0!3m2!1sen!2sca!4v1660872117712!5m2!1sen!2sca" width="450" height="450" loading="lazy"></iframe>
            
        </div>
      </div>

      <div data-tf-widget="SSyNYsHq" data-tf-iframe-props="title=McGill iGEM 2022-2023 Application Form" className="px-20 pb-10 h-[100vh] bg-black" data-tf-medium="snippet"></div>

      <Script src="//embed.typeform.com/next/embed.js"/>



      
    </Layout>
  );
};

export default Join;


// export async function getStaticProps() {}

export async function getStaticProps() {
  return {
    props: {},
  };
}

