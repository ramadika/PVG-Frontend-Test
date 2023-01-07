import React from "react";

export default function index() {
  return (
    <div className="w-2/12 flex flex-col p-8">
      <div className="text-xl text-center text-[#545DFF]">
        <b>SalesDash</b>
      </div>
      <div className="flex flex-col justify-start gap-8 mt-[40px]">
        <div className="text-[#545DFF]">Dashboard</div>
        <div className="text-[#7A7A7A]">Balance</div>
        <div className="text-[#7A7A7A]">Transaction</div>
        <div className="text-[#7A7A7A]">Product</div>
        <div className="text-[#7A7A7A]">Channel</div>
        <div className="text-[#7A7A7A]">Agent</div>
        <div className="text-[#7A7A7A]">Balance</div>
        <div className="text-[#7A7A7A]">Transaction</div>
      </div>
      <hr />
      <div className="text-[#7A7A7A] mt-8">Logout</div>
    </div>
  );
}
