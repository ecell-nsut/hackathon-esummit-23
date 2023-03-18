type Props = {};
import { Inter } from "@next/font/google";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "/public/Images/logo.svg";

const inter = Inter({ subsets: ["latin"], weight: "400" });

const Navbar = (props: Props) => {
  const [showmenu, setShowMenu] = useState(false);

  return (
    <div className="w-screen pt-6 px-2">
      <div className="max-w-7xl bg-gradient-to-r from-[#96969621] via-[#ffffff29] to-[#96969621] bg-opacity-20  h-20 m-auto  rounded-lg  flex items-center justify-between px-6">
        <div className="logo h-full">
          <Image src={Logo} alt="logo" className="h-full" />
        </div>
        <ul
          className={`sm:flex hidden nav-links  grow justify-around text-md text-white  ${inter.className}`}
        >
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#about"> Sponsors</a>
          </li>
          <li>
            <a href="#about">TimeLine</a>
          </li>
          <li>
            <a href="#about">Team</a>
          </li>
          <li>
            <a href="#about">Contact Us</a>
          </li>
        </ul>
        <div
          className="hamburger sm:hidden cursor-pointer text-white text-3xl relative"
          onClick={() => {
            setShowMenu(!showmenu);
          }}
        >
          <AiOutlineMenu />
        </div>
      </div>
      <div
        className={`bg-gradient-to-r from-[#96969621] via-[#ffffff29] to-[#96969621] ${
          showmenu ? "h-52" : "h-0"
        } transition-all duration-300 rounded-lg  overflow-hidden `}
      >
        <ul className="flex-col items-center flex  justify-between py-6 h-full text-white">
          <li className="hover:opacity-70 transition-all">
            <a onClick={() => setShowMenu(false)} href="#about">
              About Us
            </a>
          </li>
          <li className="hover:opacity-70 transition-all">
            <a onClick={() => setShowMenu(false)} href="#about">
              {" "}
              Sponsors
            </a>
          </li>
          <li className="hover:opacity-70 transition-all">
            <a onClick={() => setShowMenu(false)} href="#about">
              TimeLine
            </a>
          </li>
          <li className="hover:opacity-70 transition-all">
            <a onClick={() => setShowMenu(false)} href="#about">
              Team
            </a>
          </li>
          <li className="hover:opacity-70 transition-all">
            <a onClick={() => setShowMenu(false)} href="#about">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
