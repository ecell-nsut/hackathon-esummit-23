type Props = {};
import { Inter } from "@next/font/google";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import eLogo from "/public/Images/elogo.svg";
import Logo from "/public/Images/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"], weight: "400" });

const Navbar = (props: Props) => {
  const router = useRouter();
  const [showmenu, setShowMenu] = useState(false);

  return (
    <div className="w-screen pt-6 px-2">
      <div className="max-w-7xl bg-gradient-to-r from-[#96969621] via-[#ffffff29] to-[#96969621] bg-opacity-20  h-20 m-auto  rounded-lg  flex items-center justify-between px-6">
        <div className="h-full flex justify-center ">
          <div className="logo h-full ">
            <Image src={Logo} alt="logo" className="h-full" />
          </div>
          <div className="logo h-20 py-1  flex flex-col ">
            <Image src={eLogo} alt="logo" className="h-[82%] w-[90px]" />
            <div className="text-[10px] text-center font-bold text-yellow-600 ">
              eCell-NSUT
            </div>
          </div>
        </div>
        <ul
          className={`sm:flex hidden nav-links  grow justify-around text-md text-white  ${inter.className}`}
        >
          <li>
            <a
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
              }}
              href="#about"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
              }}
              href="#sponser"
            >
              {" "}
              Sponsors
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
              }}
              href="#timeline"
            >
              TimeLine
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
              }}
              href="#tracks"
            >
              Tracks
            </a>
          </li>
          {/* <li>
            <a
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
              }}
              href="#speakers"
            >
              Speakers
            </a>
          </li> */}
          <li>
            <a
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
              }}
              href="#faq"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
              }}
              href="#contact"
            >
              Contact Us
            </a>
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
        className={`bg-gradient-to-r from-[#96969621] via-[#1d1111cb] to-[#96969621] ${
          showmenu ? "h-52" : "h-0"
        } transition-all duration-300 rounded-lg w-full absolute top-30 overflow-hidden `}
      >
        <ul className="flex-col items-center flex  justify-between py-6 h-full  text-white font-semibold ">
          <li className="hover:scale-105 duration-150  transition-all">
            <a
              href="#about"
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
                setShowMenu(false);
              }}
            >
              About Us
            </a>
          </li>
          <li className="hover:scale-105 duration-150  transition-all">
            <a
              href="#sponser"
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
                setShowMenu(false);
              }}
            >
              {" "}
              Sponsors
            </a>
          </li>
          <li className="hover:scale-105 duration-150  transition-all">
            <a
              href="#timeline"
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
                setShowMenu(false);
              }}
            >
              TimeLine
            </a>
          </li>
          <li className="hover:scale-105 duration-150  transition-all">
            <a
              href="#tracks"
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
                setShowMenu(false);
              }}
            >
              Tracks
            </a>
          </li>
          {/* <li className="hover:scale-105 duration-150  transition-all">
            <a
              href="#speakers"
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
                setShowMenu(false);
              }}
            >
              Speakers
            </a>
          </li> */}
          <li className="hover:scale-105 duration-150  transition-all">
            <a
              href="#faq"
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
                setShowMenu(false);
              }}
            >
              FAQ
            </a>
          </li>
          <li className="hover:scale-105 duration-150  transition-all">
            <a
              href="#contact"
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
                setShowMenu(false);
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
