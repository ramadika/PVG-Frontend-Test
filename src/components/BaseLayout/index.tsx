import React from "react";
// components
import NavBar from "./Navbar";
import UserInfo from "./UserInfo";

export default function Index(props: any) {
  return (
    <div className="flex justify-center">
      <div className="w-2/12 bg-[#FCFCFF] h-screen">
        <NavBar />
      </div>
      <div className="w-10/12">{props.children}</div>
      <div className="w-3/12 bg-[#F3F4FF] h-screen">
        <UserInfo />
      </div>
    </div>
  );
}
