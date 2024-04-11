import React from "react";
import Logo from "../assets/logo.svg";
import { Button } from "antd";

export const Header = () => {
    return (
        <header id="header" className="flex justify-center px-6 py-2">
            <nav className="container flex items-center justify-between">
                <img
                    className="w-40"
                    src={Logo}
                    alt="ReConnect Logo"
                />
                <div className="gap-4 hidden sm:flex">
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
