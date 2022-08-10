import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
  });

  return (
    <footer className="bg-black text-left font-montserrat text-white py-4 px-10 z-[100] text-sm">
      <div className="flex justify-end items-start mr mb-2">
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
            <a href="https://mcgilligem.substack.com/">News</a>
            
          </h2>
          <h2 className="font-bold hover:underline hover:cursor-pointer"><Link href="/contact">Contact Us</Link></h2>
        </div>
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
            Initiatives
          </h2>
          <ul className="">
            <li className="hover:underline hover:cursor-pointer"><a href="https://open.spotify.com/show/1VjEbzN6Im9u79hw0WfYpK?si=a4a3e379e7d64992">STEMcast</a></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/notfound">Conference</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/notfound">Biolab Tutorials</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/notfound">McGill Course</Link></li>
          </ul>
        </div>
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
           Projects
          </h2>
          <ul className="">
            <li className="hover:underline hover:cursor-pointer"><Link href="/current">Current</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/2019">2019</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/2018">2018</Link></li>

          </ul>
        </div>
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
            Partners
          </h2>
          <ul className="">
            <li className="hover:underline hover:cursor-pointer"><Link href="/sponsors">Sponsors</Link></li>
            <li className="hover:underline hover:cursor-pointer">
              <Link href="/partner">Partner with us</Link>
            </li>
            <li className="hover:underline hover:cursor-pointer">
              <Link href="/collaborators">Collaborations</Link>
            </li>
          </ul>
        </div>
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
            About Us
          </h2>
          <ul className="">
            <li className="hover:underline hover:cursor-pointer"><Link href="/about">Our Team</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/mission">Our Mission</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/join">Join Us</Link></li>
          </ul>
        </div>
      </div>
      {/* <hr /> */}
      <div ref={titleRef} className="flex items-center flex-row py-10 px-5">
        <div>
          <p>&#169;McGill IGEM 2022</p>
        </div>
        <p className="ml-auto pr-2">Follow Us:</p>
        <div className="hover:scale-125 loadLeft">
          {titleInView && <SocialIcon
         
            url="https://twitter.com/igemmcgill"
            fgColor="white"
            bgColor="transparent"
          />}
        </div>
        <div className="hover:scale-125 ">
          <SocialIcon
            url="https://www.instagram.com/igem.mcgill/"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
        <div className="hover:scale-125">
          <SocialIcon
            url="https://www.linkedin.com/company/mcgill-igem"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
