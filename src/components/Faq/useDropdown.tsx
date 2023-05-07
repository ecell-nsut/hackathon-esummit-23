import { Bungee_Inline } from "@next/font/google";
import { useEffect, useState } from "react";

const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

export default function Dropdown(props: {
  title: string;
  description: string;
}) {
  const [show, setShow] = useState(false);
  const [deg, setDeg] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(
      document.getElementById(
        `hidden-content-${props.title.replaceAll(" ", "-")}`
      )!.offsetHeight
    );
  }, []);
  return (
    <div id="dropdown">
      <p
        style={{ fontSize: 15.3, cursor: "pointer" }}
        onClick={() => {
          setShow(!show);
          setDeg(deg + 45);
        }}
        id="title"
        className={`${bungee.className} text-1xl md:text-2xl     text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
      >
        {props.title}
        <div className="right">
          <p
            style={{
              cursor: "pointer",
              transform: `rotate(${deg}deg)`,
              transition: "transform 1s",
            }}
            onClick={() => {
              setShow(!show);
              setDeg(deg + 45);
            }}
          >
            +
          </p>
        </div>
      </p>
      <hr></hr>
      <p
        style={{
          height: show ? `${height}px` : "0px",
          overflow: "hidden",
          transition: "height 1s",
        }}
      >
        <p
          id={`hidden-content-${props.title.replaceAll(" ", "-")}`}
          className="hidden-content-default"
        >
          {props.description}
        </p>
      </p>
    </div>
  );
}
