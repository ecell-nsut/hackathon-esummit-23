type Props = {};
import { Inter } from "@next/font/google";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import eLogo from "/public/Images/logo.png";
import Logo from "/public/Images/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"], weight: "400" });

const Navbar = (props: Props) => {
  const router = useRouter();
  const [showmenu, setShowMenu] = useState(false);

  return (
    <div className="px-2 pt-6 w-screen">
      <div className="max-w-7xl bg-gradient-to-r from-[#96969621] via-[#ffffff29] to-[#96969621] bg-opacity-20  h-20 m-auto  rounded-lg  flex items-center justify-between px-6 py-2">
        <div className="flex justify-center h-full">
          <div className="h-full logo">
            <Link href="/">
              <Image src={Logo} alt="logo" className="h-full" />
            </Link>
          </div>
          <div className="flex flex-col py-1 h-20 logo">
            <Link href="/">
              <Image src={eLogo} alt="logo" className="w-[45px]" />
              <div className="text-[10px] text-center font-bold text-yellow-600 ">
                eCell-NSUT
              </div>
            </Link>
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
              Timeline
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
          <li>
            <a
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
              }}
              href="#speakers"
            >
              Mentors
            </a>
          </li>
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
          className="relative text-3xl text-white cursor-pointer hamburger sm:hidden"
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
        <ul className="flex flex-col justify-between items-center py-6 h-full font-semibold text-white">
          <li className="transition-all duration-150 hover:scale-105">
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
          <li className="transition-all duration-150 hover:scale-105">
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
          <li className="transition-all duration-150 hover:scale-105">
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
          <li className="transition-all duration-150 hover:scale-105">
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
          <li className="transition-all duration-150 hover:scale-105">
            <a
              href="#speakers"
              onClick={() => {
                if (router.pathname != "/") {
                  router.push("/");
                }
                setShowMenu(false);
              }}
            >
              Mentors
            </a>
          </li>
          <li className="transition-all duration-150 hover:scale-105">
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
          <li className="transition-all duration-150 hover:scale-105">
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
