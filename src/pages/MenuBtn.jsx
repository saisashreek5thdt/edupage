import React from "react";
import Menu from "../assets/images/user/userIcon.png";
import { Link } from "react-router-dom"

const MenuBtn = () => {
  return (
    <>
      <Link to="/">
        <div className="overflow-hidden flex justify-end items-end mx-4">
          <img
            className="overflow-hidden h-14 w-1h-14 my-2"
            src={Menu}
            alt="Menu Button"
          />
        </div>
      </Link>
    </>
  );
};

export default MenuBtn;
