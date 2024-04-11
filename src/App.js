import "./App.scss";
import { ConfigProvider, Segmented } from "antd";
import { PricingCard } from "./components/PricingCard";
import { PrimaryPricingCard } from "./components/PrimaryPricingCard";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import ScrollReveal from 'scrollreveal';

const pricingCards = [
    {
        title: "Free",
        subtitle: "For enthusiasts who are trying to take a step forward",
        price: 0,
        primary: false,
        buttonLabel: "Start for free",
        features: [
            { included: true, label: "User management access" },
            { included: false, label: "Real time tracking" },
            { included: false, label: "24 hours support" },
            { included: false, label: "Advanced security control" },
            { included: false, label: "Unlimited team members" },
        ],
    },
    {
        title: "Basic",
        subtitle: "For small size business that have a smaller target audience",
        price: 25,
        primary: false,
        features: [
            { included: true, label: "User management access" },
            { included: true, label: "Real time tracking" },
            { included: true, label: "24 hours support" },
            { included: false, label: "Advanced security control" },
            { included: false, label: "Unlimited team members" },
        ],
    },
    {
        title: "Professional",
        subtitle: "For large size business that have a bigger target audience",
        price: 50,
        primary: true,
        features: [
            { included: true, label: "User management access" },
            { included: true, label: "Real time tracking" },
            { included: true, label: "24 hours support" },
            { included: true, label: "Advanced security control" },
            { included: false, label: "Unlimited team members" },
        ],
    },
    {
        title: "Enterprise",
        subtitle: "For major institutions who wants to have all the power",
        price: 100,
        primary: false,
        features: [
            { included: true, label: "User management access" },
            { included: true, label: "Real time tracking" },
            { included: true, label: "24 hours support" },
            { included: true, label: "Advanced security control" },
            { included: true, label: "Unlimited team members" },
        ],
    },
];

function App() {
    const [yearlyPlanSelected, setYearlyPlanSelected] = useState(false);

    useEffect(() => {
      ScrollReveal().reveal('.card-reveal', { interval: 200, delay: 200, distance: '500px' });
      ScrollReveal().reveal('.header-reveal', { interval: 200, delay: 200, distance: '100px', origin: 'top' });
    }, []);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#6057ED",
                    colorBgContainer: "transparent",
                    colorText: "#FFFF",
                },
                components: {
                    Segmented: {
                        trackBg: "#FFFFFF10",
                        itemColor: "#CCCCCC",
                        itemHoverBg: "#FFFFFF10",
                        itemSelectedBg: "#FFFFFF20",
                        itemSelectedColor: "#FFFF",
                        trackPadding: 0,
                    },
                },
            }}
        >
            <div className='main-wrapper relative w-full bg-dark'>
                <Header />
                <main className='container relative mx-auto gap-16 py-16'>
                    <div className='shadow-1 animate-jump-in shadow'></div>
                    <div className='shadow-2 animate-jump-in shadow'></div>
                    <header className='relative z-10 2xl:mt-20'>
                        <div className='grid justify-center gap-8'>
                            <div className='grid gap-4'>
                                <span className='mb-2 text-center font-semibold text-purple header-reveal xxs:text-xs'>It's time to take action</span>
                                <h1 className='text-center text-3xl font-extrabold text-white xxs:text-2xl md:text-5xl header-reveal'>
                                    Reach more people,
                                    <br />
                                    get more results.
                                </h1>
                                <span className='text-center text-neutral-300 header-reveal xxs:text-xs'>Choose your plan and unlock endless possibilities</span>
                            </div>
                            <div className='flex justify-center header-reveal'>
                                <Segmented
                                    options={["Monthly", "Yearly"]}
                                    onChange={(value) => setYearlyPlanSelected(value === "Yearly")}
                                />
                            </div>
                        </div>
                    </header>
                    <section className='relative z-10 flex items-center justify-center'>
                        <div className='grid grid-cols-none grid-rows-4 gap-0 px-4 sm:grid-cols-2 sm:grid-rows-none sm:gap-4 lg:grid-cols-4'>
                                {pricingCards.map((data) => (
                                    <div className="card-reveal">
                                        {data.primary ? (
                                            <PrimaryPricingCard
                                                data={data}
                                                yearlyPlanSelected={yearlyPlanSelected}
                                            />
                                        ) : (
                                            <PricingCard
                                                data={data}
                                                yearlyPlanSelected={yearlyPlanSelected}
                                            />
                                        )},
                                    </div>
                                ))}
                        </div>
                    </section>
                </main>
                <div className='purple-grid absolute bottom-0 z-0 w-screen animate-fade animate-duration-1000' />
            </div>
        </ConfigProvider>
    );
}

export default App;
