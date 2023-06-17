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
import { Link } from "react-router-dom";

function Footer({
  isIndexPage,
  hideFirstTopicBtn,
  setOpen,
  open,
  next,
  last,
  hideLastTopicBtn,
}) {
  return (
    <div className="bg-sky-700 z-0 relative top-5 flex justify-between h-13 w-screen pt-2 pb-2 text-white text-sm">
      <div className="flex w-1/4 justify-between">
        <Link to={last}>
          <p
            className={`bg-white text-black ${
              isIndexPage || hideFirstTopicBtn ? "invisible" : ""
            } p-2 pr-10 rounded-full rounded-l-none`}
          >
            Last Topic
          </p>
        </Link>

        <p className="p-2">User Name</p>
        <p className="p-2">June 2022</p>
      </div>
      <div className="w-1/3 flex flex-col justify-end text-center align-baseline">
        <Link to={"/"} className="flex justify-center">
          <img
            src={footerIndex}
            className="w-20 absolute bottom-8 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </Link>
        <p>Index</p>
      </div>
      <div className="flex w-1/4 justify-end space-x-16">
        <p className="p-2">00 Bookmarks</p>
        <Link to={next}>
          <p
            className={`bg-white text-black ml-auto p-2 pl-10 rounded-full rounded-r-none ${
              isIndexPage || hideLastTopicBtn ? "invisible" : ""
            }`}
          >
            Next Topic
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
