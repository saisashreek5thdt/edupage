import React from "react";
import Menu from "../assets/images/user/userIcon.png";

const MenuBtn = () => {
  return (
    <>
      <a href="https://5thdt.com/schools/index.html">
        <div className="overflow-hidden flex justify-end items-end mx-16">
          <img
            className="overflow-hidden h-16 w-1h-16 my-4"
            src={Menu}
            alt="Menu Button"
          />
        </div>
      </a>
    </>
  );
};

export default MenuBtn;
