// import React from "react";

// const Footer = ({ setOpen, open }) => {
//   return (
//     <nav className="fixed z-50 bottom-0 py-2 left-0 right-0 bg-sky-800">
//       <ul className="flex justify-between py-2">
//         <li className="text-white relative left-40">User Name</li>
//         <li className="text-white relative right-40">June 2023</li>
//         <li
//           className="text-white relative cursor-pointer right-56"
//           onClick={() => setOpen(!open)}
//         >
//           Index
//         </li>
//         <li className="text-white relative right-72">00 Bookmarks</li>
//       </ul>
//     </nav>
//   );
// };
// export default Footer;

import React from "react";
import footerIndex from "../assets/index/Component 9 – 2.png";

function Footer() {
  return (
    <div className="bg-footerbg flex bg-footer justify-between w-screen pt-3 pb-4 text-white text-sm">
      <div className="flex w-1/4 justify-between">
        <p className="bg-white text-black p-2 pr-10 rounded-full rounded-l-none">
          Last Name
        </p>
        <p className="p-2">User Name</p>
        <p className="p-2">June 2022</p>
      </div>
      <div className="w-1/3 flex flex-col justify-end  cursor-pointer text-center align-baseline">
        <div className="flex justify-center">
          <img src={footerIndex} className="w-24  absolute bottom-8" />
        </div>
        <p>Index</p>
      </div>
      <div className="flex w-1/4 justify-end space-x-16">
        <p className="p-2">00 Bookmarks</p>
        <p className="bg-white text-black ml-auto p-2 pl-10 rounded-full rounded-r-none">
          Next Topic
        </p>
      </div>
    </div>
  );
}

export default Footer;
