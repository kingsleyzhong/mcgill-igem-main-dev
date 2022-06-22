import Link from "next/link";
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
    <footer className="bg-white text-center text-gray-600 py-4 px-10 ">
        <div className="flex justify-end items-start mr-10">
            <div className="px-8 py-2">
                <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">News</h2>
            </div>
            <div className="px-8 py-2">
                <h2 className="py-2 font-bold hover:underline">Partners</h2>
                <ul className="">
                    <li className="hover:underline">Sponsors</li>
                    <li className="hover:underline">Partner with us</li>
                    <li className="hover:underline">Collaborations</li>
                </ul>
            </div>
            <div className="px-8 py-2">
                <h2 className="py-2 font-bold hover:underline">Team</h2>
                <ul className="">
                    <li className="hover:underline">About Us</li>
                    <li className="hover:underline">Projects</li>
                    <li className="hover:underline">Contact Us</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="flex items-center flex-row py-2 px-5">
            <div><p>&#169;McGill IGEM 2022</p></div>
            <p className="ml-auto px-1">Follow Us:</p>
            <div className="px-1"><SocialIcon url="https://twitter.com/igemmcgill" /></div>
            <div className="px-1"><SocialIcon url="https://www.instagram.com/igem.mcgill/" /></div>
            <div className="px-1"><SocialIcon url="https://www.linkedin.com/company/mcgill-igem" /></div>
        </div>
    </footer>
  );
  
  export default Footer;
  
  