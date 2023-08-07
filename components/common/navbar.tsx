import a from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.scss";

import { useState, useEffect } from "react";
import Link from "next/link";

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
            src="img/mcgill-igem-logo.png"
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
        <div className="fixed w-full h-full text-white font-signika font-medium">
          <div className="bothalign">
            <div className={styles.navanim}>
              <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full lg:gap-x-60 lg:gap-y-10 gap-5">
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">About Us</h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer"><Link href="/about">Our Team</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/mission">Our Mission</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/join">Join Us</Link></li>
                    </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">Partners</h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer"><Link href="/sponsors">Sponsors</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/collaborators">Collaborators</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/partner">Partner With Us</Link></li>
                    </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">Projects</h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer"><Link href="/current">Current</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/2019">2019</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/2018">2018</Link></li>
                    </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">Initiatives</h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer"><a href="https://open.spotify.com/show/1VjEbzN6Im9u79hw0WfYpK?si=a4a3e379e7d64992">STEMcast</a></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/notfound">Conference</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><a href="https://www.youtube.com/channel/UCwqaOp6Mkj4Ekhd9QRchd6w">Biolab Tutorials</a></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/notfound">McGill Course</Link></li>
                    </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1 hover:underline hover:cursor-pointer"><a href="https://mcgilligem.substack.com/">NEWS</a></h1>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1 hover:underline hover:cursor-pointer"><Link href="/contact">Contact Us</Link></h1>
                </div>



              </div>
          
            </div>
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
