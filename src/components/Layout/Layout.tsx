import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }: any) => {
  const blobRef = useRef<any>();
  const size = useState(30);

  useEffect(() => {
    window.onpointermove = (e: any) => {
      const { clientX, clientY } = e;
      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY + 100}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <>
      <main className="bg-[#0E0E0E] bg-opacity-10 min-h-screen max-w-screen overflow-hidden">
        <div className="min-h-screen fixed  bg-black -z-[1] top-0 w-screen">
          <div className="absolute top-0 z-[1] backdrop-blur-[12vmax] h-full w-full bg-[#231F20] bg-opacity-10"></div>
          <div
            ref={blobRef}
            className={`origin-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blob aspect-square bg-gradient-to-r from-blue-600  via-purple-800 to-black  h-[40vmax]
            }] rounded-full bg-pink-300 opacity-70 animate-rotate`}
          ></div>
        </div>
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
