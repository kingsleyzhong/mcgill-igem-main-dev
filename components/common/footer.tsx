import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
  });

  return (
    <footer className="bg-black text-left text-white py-4 px-10 z-[100] ">
      <div className="flex justify-end items-start mr mb-2">
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer hover:cursor-pointer">
            News
          </h2>
        </div>
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
            Partners
          </h2>
          <ul className="">
            <li className="hover:underline hover:cursor-pointer">Sponsors</li>
            <li className="hover:underline hover:cursor-pointer">
              Partner with us
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Collaborations
            </li>
          </ul>
        </div>
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
            Team
          </h2>
          <ul className="">
            <li className="hover:underline hover:cursor-pointer">About Us</li>
            <li className="hover:underline hover:cursor-pointer">Projects</li>
            <li className="hover:underline hover:cursor-pointer">Contact Us</li>
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
