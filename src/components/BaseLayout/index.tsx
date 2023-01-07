import React from "react";
// components
import NavBar from "./Navbar";

export default function Index(props: any) {
  return (
    <div className="flex justify-center">
      <div className="bg-[#FCFCFF] h-screen">
        <NavBar />
      </div>
      {props.children}
    </div>
  );
}
