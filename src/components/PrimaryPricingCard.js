import React from "react";
import { Button } from "antd";
import "../App.scss";

export const PrimaryPricingCard = (props) => {
    const { title, subtitle, price, features } = props.data;

    return (
        <div
            id='pricing-card'
            className='primary-card grid w-full gap-8 rounded-md bg-white p-4'
        >
            {props.yearlyPlanSelected && price > 0 && <div className='absolute right-2 top-2 mb-3 rounded-full bg-green px-2 py-1 text-xs font-semibold text-white shadow-sm'>-25%</div>}
            <div className='grid gap-4'>
                <div>
                    <h4 className='mb-1 font-semibold text-purple'>{title}</h4>
                    <div className='text-balance text-xs leading-4 text-gray-700 opacity-90'>{subtitle}</div>
                </div>
                <hr />
                <h2 className='text-3xl font-extrabold text-purple'>{`$${props.yearlyPlanSelected ? price * 12 * 0.25 : price} / ${props.yearlyPlanSelected ? "year" : "month"}`}</h2>
            </div>
            <Button
                type='primary'
                className='shadow-xl shadow-[#6057ED50]'
            >
                Choose this plan
            </Button>
            <ul className='mb-2 grid gap-3'>
                {features.map((feature) => (
                    <li className={(feature.included ? "primary success text-dark" : "text-gray-500") + " text-sm"}>{feature.label}</li>
                ))}
            </ul>
        </div>
    );
};
