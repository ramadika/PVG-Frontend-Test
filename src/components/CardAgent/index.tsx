import React, { useState, useEffect } from "react";
// assets
import JktLogo from "../../assets/logo-agent-jakarta.svg";
import SusiLogo from "../../assets/logo-agent-susi.svg";
import PulsaLogo from "../../assets/logo-agent-pulsa.svg";
import BogorLogo from "../../assets/logo-agent-bogor.svg";
import AntonLogo from "../../assets/logo-agent-anton.svg";

interface Props {
  title: string;
  profit: string;
  sales: string;
  transaction: number;
}

export default function Index(props: Props) {
  const [logoAgent, setLogoAgent] = useState("");
  const { title, profit, sales, transaction } = props;

  useEffect(() => {
    if (title === "PT Suka Maju Jakarta") {
      setLogoAgent(JktLogo);
    } else if (title === "Susi Susanti") {
      setLogoAgent(SusiLogo);
    } else if (title === "Toko Pulsa III Depok") {
      setLogoAgent(PulsaLogo);
    } else if (title === "PT Suka Maju Bogor") {
      setLogoAgent(BogorLogo);
    } else if (title === "Anton Antoman") {
      setLogoAgent(AntonLogo);
    }
  }, [title]);

  return (
    <div className="flex justify-center items-center gap-2">
      <div>
        <img
          src={logoAgent}
          alt="not found"
          className="rounded-full max-w-full h-auto align-middle border-[#989EFF] border-2"
        />
      </div>
      <div>
        <h2 className="text-[#545DFF] text-[12px]">
          <b>{title}</b>
        </h2>
        <div className="flex flex-col">
          <div className="flex justify-between text-[10px]">
            <h5 className="text-[#7A7A7A]">
              <b>Profit</b>
            </h5>
            <span>
              <b>{profit}</b>
            </span>
          </div>
          <div className="flex justify-between text-[10px]">
            <h5 className="text-[#7A7A7A]">
              <b>Sales</b>
            </h5>
            <span>
              <b>{sales}</b>
            </span>
          </div>
          <div className="flex justify-between gap-2 text-[10px]">
            <h5 className="text-[#7A7A7A]">
              <b>Transaction</b>
            </h5>
            <span>
              <b>{transaction} transactions</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
