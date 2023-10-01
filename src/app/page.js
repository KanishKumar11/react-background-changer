"use client";
import Image from "next/image";
import Color from "./components/Color";
import { useState } from "react";
const colors = [
  {
    id: 1,
    name: "red",
  },
  {
    id: 2,
    name: "blue",
  },
  {
    id: 3,
    name: "pink",
  },
  {
    id: 4,
    name: "yellow",
  },
  {
    id: 5,
    name: "orange",
  },
  {
    id: 6,
    name: "purple",
  },
];

export default function Home() {
  const [bg, setBg] = useState("orange-500");
  const handleBg = (color) => {
    setBg(color);
    console.log(color);
    // console.log("hell");
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-${bg}-500`}
    >
      <div className="fixed bottom-12 bg-gray-300 p-5 rounded-md px-10 shadow-md shadow-gray-100">
        <ul className="flex gap-3">
          {colors.map((props) => (
            <li key={props.id} onClick={() => handleBg(props.name)}>
              <Color name={props.name} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
