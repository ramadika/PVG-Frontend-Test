import React from "react";
// assets
import UserPic from "../../../assets/user-pic.svg";
import ThreeDots from "../../../assets/three-dots.svg";

export default function index() {
  return (
    <div className="w-12/12 p-4 flex flex-col">
      <div className="flex justify-start items-center gap-2">
        <div>
          <img src={UserPic} alt="not found" />
        </div>
        <div>
          <h2 className="text-[14px]">
            <b>Budi Budiman</b>
          </h2>
          <h5 className="text-[#7A7A7A] text-[10px]">
            <b>Owner at PT Suka Maju</b>
          </h5>
        </div>
        <div>&#8964;</div>
      </div>
      <div className="rounded-[12px] shadow-[0px_0px_26px_#DDDFFF] p-[16px] mt-6">
        <div className="flex flex-col text-center gap-4">
          <div className="flex justify-center relative">
            <h4 className="text-[#7A7A7A] text-[12px]">
              <b>Total balance</b>
            </h4>
            <div className="flex justify-end absolute right-[10px]">
              <img src={ThreeDots} alt="not found" />
            </div>
          </div>
          <h2 className="text-[16px]">
            <b>Rp 1.580.000.000</b>
          </h2>
          <button className="bg-[#545DFF] rounded-[12px] p-[12px] text-[#FFFFFF] flex justify-center">
            <b>Top Up</b>
          </button>
        </div>
      </div>
    </div>
  );
}
