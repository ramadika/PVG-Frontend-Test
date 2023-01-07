import React from "react";
// dependencies
import {
  mock_main_card,
  mock_product_card,
  mock_agent,
} from "../../utils/contants";
// components
import CardMain from "../../components/CardMain";
import CardProduct from "../../components/CardProduct";
import CardAgent from "../../components/CardAgent";
// assets
import Chart from "../../assets/sales-chart.svg";

export default function index() {
  return (
    <div className="w-full flex flex-col p-4">
      <div className="flex flex-col">
        <h2 className="text-[#212121] text-xl">
          <b>Dashboard</b>
        </h2>
        <h5 className="text-[#7A7A7A] text-[12px]">
          <b>Today’s date: Sun, 10 April 2022</b>
        </h5>
      </div>
      <div className="flex justify-start gap-2 mt-8">
        {mock_main_card.map((item: any, i: number) => (
          <CardMain
            title={item.title}
            value={item.value}
            note={item.note}
            status={item.status}
            key={i}
          />
        ))}
      </div>
      <div className="flex justify-start mt-4">
        <div className="flex flex-col">
          <div>
            <img src={Chart} alt="not found" />
          </div>
          <div className="flex flex-col rounded-[12px] shadow-[0px_0px_26px_#F0F1FF] p-[16px]">
            <h5 className="text-[#7A7A7A]">
              <b>Top 5 Products</b>
            </h5>
            <div className="flex justify-start gap-2 mt-4">
              {mock_product_card.map((item: any, i: number) => (
                <CardProduct
                  title={item.title}
                  value={item.value}
                  note={item.note}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-[12px] shadow-[0px_0px_26px_#F0F1FF] p-[16px]">
          <h5 className="text-[#7A7A7A]">
            <b>Top 5 Agents</b>
          </h5>
          <div className="flex flex-col gap-4 mt-4">
            {mock_agent.map((item: any, i: number) => (
              <CardAgent
                title={item.title}
                profit={item.profit}
                sales={item.sales}
                transaction={item.transaction}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
