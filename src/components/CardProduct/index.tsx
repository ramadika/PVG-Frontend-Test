import React, { useState, useEffect } from "react";
// assets
import MaximLogo from "../../assets/logo-taximaxim.svg";
import TelkomselLogo from "../../assets/logo-telkomsel.svg";
import OvoLogo from "../../assets/logo-ovo.svg";
import ThreeLogo from "../../assets/logo-three.svg";
import PLNLogo from "../../assets/logo-pln.svg";

interface Props {
  title: string;
  value: string;
  note: number;
}

export default function Index(props: Props) {
  const [logoProduct, setLogoProduct] = useState("");
  const { title, value, note } = props;

  useEffect(() => {
    if (title === "Maxim") {
      setLogoProduct(MaximLogo);
    } else if (title === "Telkomsel") {
      setLogoProduct(TelkomselLogo);
    } else if (title === "Three") {
      setLogoProduct(ThreeLogo);
    } else if (title === "OVO") {
      setLogoProduct(OvoLogo);
    } else if (title === "PLN Postpaid") {
      setLogoProduct(PLNLogo);
    }
  }, [title]);

  return (
    <div className="rounded-[12px] border-[3px] border-[#989EFF] p-4">
      <div className="flex justify-center h-2/5">
        <img src={logoProduct} alt="not found" width={40} />
      </div>
      <div className="flex flex-col gap-1 text-center mt-2">
        <h3 className="text-[#545DFF] text-[14px]">
          <b>{title}</b>
        </h3>
        <h5
          className={`text-[#7A7A7A] text-[12px] ${
            value === "0" && "invisible"
          }`}
        >
          <b>{value}</b>
        </h5>
        <h2 className="text-[16px]">
          <b>{note}</b>{" "}
          <span className="text-[8px]">
            <b>transactions</b>
          </span>
        </h2>
      </div>
    </div>
  );
}
