import React from "react";
// assets
import Logo from "../../assets/logo-taximaxim.svg";

interface Props {
  title: string;
  value: string;
  note: number;
}

export default function Index(props: Props) {
  const { title, value, note } = props;

  return (
    <div className="rounded-[12px] border-[3px] border-[#989EFF] p-4">
      <div className="flex justify-center">
        <img src={Logo} alt="not found" width={40} />
      </div>
      <div className="flex flex-col text-center">
        <h3 className="text-[#545DFF] text-[16px]">
          <b>{title}</b>
        </h3>
        <h5
          className={`text-[#7A7A7A] text-[14px] ${
            value === "0" && "invisible"
          }`}
        >
          {value}
        </h5>
        <h2 className="text-[18px]">
          {note} <span className="text-[12px]">transactions</span>
        </h2>
      </div>
    </div>
  );
}
