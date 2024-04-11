import React, { useEffect } from "react";
import Logo from "../assets/logo.svg";
import { Button } from "antd";
import ScrollReveal from 'scrollreveal';

export const Header = () => {
    useEffect(() => {
        ScrollReveal().reveal('.logo-reveal', { interval: 50, delay: 100, distance: '100px', origin: 'left' });
        ScrollReveal().reveal('.buttons-reveal', { interval: 50, delay: 100, distance: '100px', origin: 'right' });
    }, []);

    return (
        <header id="header" className="flex justify-center px-6 py-2">
            <nav className="container flex items-center justify-between">
                <img
                    className="w-40 logo-reveal"
                    src={Logo}
                    alt="ReConnect Logo"
                />
                <div className="gap-4 hidden sm:flex buttons-reveal">
                    <Button>Sign In</Button>
                    <Button
                        type="primary"
                        className="shadow-xl shadow-[#6057ED50]"
                    >
                        Get Started →
                    </Button>
                </div>
            </nav>
        </header>
    );
};
