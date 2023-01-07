import React from "react";
// assets
import Logo from "../../assets/logo-agent.svg";

interface Props {
  title: string;
  profit: string;
  sales: string;
  transaction: number;
}

export default function Index(props: Props) {
  const { title, profit, sales, transaction } = props;

  return (
    <div className="flex justify-center items-center gap-2">
      <div>
        <img
          src={Logo}
          alt="not found"
          className="rounded-full max-w-full h-auto align-middle border-[#989EFF] border-2"
        />
      </div>
      <div>
        <h2 className="text-[#545DFF] text-[16px]">
          <b>{title}</b>
        </h2>
        <div className="flex flex-col">
          <div className="flex justify-between text-[14px]">
            <h5 className="text-[#7A7A7A]">Profit</h5>
            <span>{profit}</span>
          </div>
          <div className="flex justify-between text-[14px]">
            <h5 className="text-[#7A7A7A]">Sales</h5>
            <span>{sales}</span>
          </div>
          <div className="flex justify-between gap-2 text-[14px]">
            <h5 className="text-[#7A7A7A]">Transaction</h5>
            <span>{transaction} transactions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
