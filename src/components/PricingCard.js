import React from "react";
import { Button } from "antd";
import "../App.scss";

export const PricingCard = (props) => {
  const { title, subtitle, price, features, buttonLabel } = props.data;

  return (
    <div
      className="grid gap-8 p-4 w-full bg-[#07075F50] border-[#FFFFFF25] rounded-lg relative"
      id="pricing-card"
      style={{ borderWidth: "1px", backdropFilter: "blur(5px)" }}
    >
      {props.yearlyPlanSelected && price > 0 && (
        <div className="absolute right-2 top-2 bg-green px-2 py-1 rounded-full shadow-sm text-xs font-semibold text-white mb-3">
          -25%
        </div>
      )}
      <div className="grid gap-4">
        <div>
          <h4 className="text-white font-semibold mb-1">{title}</h4>
          <div className="text-gray-300 opacity-90 text-xs leading-4 text-nowrap lg:text-balance xxs:text-balance">
            {subtitle}
          </div>
        </div>
        <hr />
        <h2 className="text-white text-3xl font-extrabold">
          {price === 0
            ? "Free"
            : `$${props.yearlyPlanSelected ? price * 12 * 0.25 : price} / ${
              props.yearlyPlanSelected ? "year" : "month"
            }`}
        </h2>
      </div>
      <Button style={{ backgroundColor: "#01010D90" }}>
        {buttonLabel || "Choose this plan"}
      </Button>
      <ul className="grid gap-3 mb-2 whitespace-nowrap">
        {features.map((feature) => (
          <li
          className={
            (feature.included ? "text-white success" : "text-gray-500") +
            " text-sm"
          }
          >
            {feature.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
