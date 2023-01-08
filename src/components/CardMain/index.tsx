import React, { useState, useEffect } from "react";

interface Props {
  title: string;
  value: string;
  note: string;
  status: string;
}

export default function Index(props: Props) {
  const [statColor, setStatColor] = useState("");
  const [statValue, setStatValue] = useState(<></>);
  const { title, value, note, status } = props;

  useEffect(() => {
    if (status === "up") {
      setStatColor("text-[#36D189]");
      setStatValue(<>&#8599;</>);
    } else if (status === "down") {
      setStatColor("text-[#E94948]");
      setStatValue(<>&#8600;</>);
    } else if (status === "normal") {
      setStatColor("text-[#FFDC7D]");
      setStatValue(<>&#8594;</>);
    }
  }, [status]);

  return (
    <div className="w-[304px] h-[101px] rounded-[12px] shadow-[0px_0px_26px_#F0F1FF] p-[16px]">
      <h5 className="text-[#7A7A7A] text-[14px]">
        <b>{title}</b>
      </h5>
      <h3 className="text-[24px]">
        <b>{value}</b>
      </h3>
      <div className="flex justify-end">
        <h5 className={`${statColor} text-[10px]`}>
          <b>
            {statValue} &nbsp;
            {note}
          </b>
        </h5>
      </div>
    </div>
  );
}
