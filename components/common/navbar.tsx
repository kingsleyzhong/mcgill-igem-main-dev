import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.scss";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  function handleNavClick() {
    setNavOpen(!navOpen);
  }

  return (
    <nav className="fixed w-full z-[1000] h-[4.5rem] bg-[#ffffff0]">
      <div className="hover:cursor-pointer fixed float-left ml-4 mt-4 h-10 z-[2000]">
        <Link href="/">
          <img
            src="mcgill-igem-logo.png"
            alt="McGill IGEM Logo"
            className="h-full w-full"
          />
        </Link>
      </div>

      <div className={navOpen ? styles.bgoopen : ""}></div>
      <div className={!navOpen ? styles.bg : ""}></div>

      <div className={styles.burgerAlign}>
        <div
          className={`${styles.simplyburger} ${
            navOpen ? styles.simplyburgeropen : null
          }`}
          onClick={handleNavClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {navOpen && (
        <div className="fixed w-full h-full text-white">
          <div className="bothalign">
            <ul className={styles.navanim}>
              <li className="text-center">1 About Us</li>
              <li className="text-center">2 Stuff</li>
              <li className="text-center">3 Stuff</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

{
  /* 
Old Navbar


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

<nav className="px-4 z-50 h-auto flex md:flex-wrap flex-col md:flex-row items-center bg-white text-mcgill-red fixed w-full top-0">
    <div className="ml-5 h-10 hover:cursor-pointer">
      <Link href="/">
        <img src="mcgill-igem-logo.png" alt="McGill IGEM Logo" className="h-full w-full" />

      </Link>
    </div>

  </nav>


    <div className="py-1 ml-auto group flex justify-center hover:shadow">
      <div className="hover:text-mcgill-mahogany px-4 py-2 hover:shadow">
        <Link href="/test">About Us</Link>
      </div>
      
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

*/
}
