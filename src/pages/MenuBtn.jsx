import React from "react";
import Menu from "../assets/images/user/userIcon.png";

const MenuBtn = () => {
  return (
    <>
      <a href="https://5thdt.com/schools/index.html">
        <div className="overflow-hidden flex justify-end items-end mx-4">
          <img
            className="overflow-hidden h-14 w-1h-14 my-2"
            src={Menu}
            alt="Menu Button"
          />
        </div>
      </a>
    </>
  );
};

export default MenuBtn;
