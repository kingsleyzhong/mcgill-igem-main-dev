import Link from "next/link";
import logo from "../public/vercel.svg";
import Image from "next/image";

import { useState, useEffect } from "react";

const Navbar = () => {
  // Use this code if the topbar is to change based on the scroll position
  // const [atTop, setAtTop] = useState(true);

  // const handleScroll = () => {
  //   if (window.scrollY < 200) {
  //     setAtTop(true);
  //   } else {
  //     setAtTop(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // })

  return(
  <nav className="px-4 z-50 h-auto flex md:flex-wrap flex-col md:flex-row items-center bg-white text-mcgill-red fixed w-full top-0">
    <div className="ml-5 h-10 hover:cursor-pointer">
      <Link href="/">
        <img src="mcgill-igem-logo.png" alt="McGill IGEM Logo" className="h-full w-full" />
        {/* Image */}
      </Link>
    </div>
    <div className="py-1 ml-auto group flex justify-center hover:shadow">
      <div className="hover:text-mcgill-mahogany px-4 py-2 hover:shadow">
        <Link href="/test">About Us</Link>
      </div>
      {/* Dropdown Menu */}
      <div className="group-hover:block absolute h-auto mt-10 hidden">
        <ul className="block w-full bg-white hover:shadow">
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Team</Link>
            </div>
          </li>
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Impact</Link>
            </div>
          </li>
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Join Us</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="px-4 py-3 hover:shadow hover:text-mcgill-mahogany">
      <Link href="/test">Projects</Link>
    </div>
    <div className="py-1 group flex justify-center hover:shadow">
      <div className="hover:text-mcgill-mahogany px-4 py-2 hover:shadow">
        <Link href="/test">Partners</Link>
      </div>
      {/* Dropdown Menu */}
      <div className="group-hover:block absolute h-auto mt-10 hidden">
        <ul className="block w-full bg-white hover:shadow">
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Sponsors</Link>
            </div>
          </li>
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Partner with Us</Link>
            </div>
          </li>
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Collaborations</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="px-4 py-3 hover:shadow hover:text-mcgill-mahogany">
      <Link href="/test">News</Link>
    </div>
    <div className="px-4 py-3 hover:shadow hover:text-mcgill-mahogany">
      <Link href="/test">Contact Us</Link>
    </div>

  </nav>
)
};

export default Navbar;

