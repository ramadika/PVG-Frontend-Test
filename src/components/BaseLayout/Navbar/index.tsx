import React from "react";
// dependencies
import { MdOutlineDashboard } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import {
  RiShoppingBag2Line,
  RiExchangeLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { SlOrganization } from "react-icons/sl";

export default function index() {
  return (
    <div className=" flex flex-col p-6">
      <div className="text-xl text-center text-[#545DFF]">
        <b>SalesDash</b>
      </div>
      <div className="flex flex-col justify-start gap-10 mt-[40px] mb-[24px] font-bold">
        <div className="text-[#545DFF] flex items-center gap-2">
          <MdOutlineDashboard />
          Dashboard
        </div>
        <div className="text-[#7A7A7A] flex items-center gap-2">
          <BiWallet />
          Balance
        </div>
        <div className="text-[#7A7A7A] flex items-center gap-2">
          <RiExchangeLine />
          Transaction
        </div>
        <div className="text-[#7A7A7A] flex items-center gap-2">
          <RiShoppingBag2Line />
          Product
        </div>
        <div className="text-[#7A7A7A] flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <SlOrganization />
            Channel
          </div>{" "}
          <div>&#8963;</div>
        </div>
        <div className="text-[#7A7A7A] flex items-center gap-2 pl-6">Agent</div>
        <div className="text-[#7A7A7A] flex items-center gap-2 pl-6">
          Balance
        </div>
        <div className="text-[#7A7A7A] flex items-center gap-2 pl-6">
          Transaction
        </div>
      </div>
      <hr />
      <div className="text-[#7A7A7A] mt-6 flex items-center gap-2">
        <RiLogoutBoxRLine />
        <b>Logout</b>
      </div>
    </div>
  );
}
