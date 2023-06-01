import React from "react";
import Menu from "../assets/images/MenuBtn.png";

const MenuBtn = () => {
    return (
        <>
            <a href="https://5thdt.com/schools/index.html">
                <div className="overflow-hidden flex justify-end items-end mx-40">
                    <img
                        className="overflow-hidden h-12 w-12 my-4"
                        src={Menu}
                        alt="Menu Button"
                    />
                </div>
            </a>
        </>
    );
};

export default MenuBtn;
