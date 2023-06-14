import React from "react";

const Footer = ({ setOpen, open }) => {
  return (
    <nav className="fixed z-50 bottom-0 py-2 left-0 right-0 bg-sky-800">
      <ul className="flex justify-between py-2">
        <li className="text-white relative left-40">User Name</li>
        <li className="text-white relative right-40">June 2023</li>
        <li
          className="text-white relative cursor-pointer right-56"
          onClick={() => setOpen(!open)}
        >
          Index
        </li>
        <li className="text-white relative right-72">00 Bookmarks</li>
      </ul>
    </nav>
  );
};
export default Footer;
