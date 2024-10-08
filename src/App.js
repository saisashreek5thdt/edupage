import React, { useState } from "react";
import img1 from "./assets/icons/Component 74 – 1.png";
import img2 from "./assets/icons/Component61.png";
import img3 from "./assets/icons/Component 75 – 1.png";
import { Link } from "react-router-dom";
import Footer from "./pages/Footer";

const Menu1 = [
  {
    id: 1,
    name: "Assessment",
    href: "page/desert/assesment",
    icon1: img2,
    icon2: "",
  },
  {
    id: 2,
    name: "Trivia",
    href: "/page/desert/trivia/",
    //href: "/",
    icon1: img3,
    icon2: "",
  },
  {
    id: 3,
    name: "Vegetation",
    href: "/page/desert/vegetation/",
    //href: "/",
    icon1: img1,
    icon2: "",
  },

  {
    id: 4,
    name: "Sand dunes",
    href: "/page/desert/sanddunes/",
    //href: "/",
    icon1: img1,
    icon2: "",
  },
];
const Menu2 = [
  {
    id: 1,
    name: "What's a Desert?",
    href: "/page/desert/info/",
    icon1: img1,
    icon2: "",
  },
  {
    id: 2,
    name: "Types of Desert",
    href: "/page/desert/types/",
    //href: "/",
    icon1: img2,
    icon2: img1,
  },
  {
    id: 3,
    name: "Habitat",
    href: "/page/desert/habitat/",
    //href: "/",
    icon1: img1,
    icon2: "",
  },

  {
    id: 4,
    name: "Oasis",
    href: "/page/desert/oasis/info/",
    //href: "/",
    icon1: img1,
    icon2: "",
  },
];

const App = () => {
  const [open, setOpen] = useState(false);
  const [isIndexPage, setIsIndexPage] = useState(true);

  return (
    <>
      <div className=" w-[100vw]  bg-cyan-500  bg-contain bg-image bg-center h-[135vh] ">
        <div className="flex flex-col items-center justify-center h-full  text-black">
          <div className="w-80 transition-shadow h-80 rounded-full mb-32 bg-gray-200  z-50 shadow-[2px_2px_2px_2px_rgb(0,0,0,0.3)]" />
          <div className="flex fixed w-full top-10 justify-between">
            <ul
              className={`md:flex md:flex-col md:items-center md:pb-9  relative top-20   bg-transparent md:z-auto z-[-1]  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in left-[-490px] ${
                open ? "left-[5px]" : ""
              }`}
            >
              {Menu2.map((menu) => (
                <div
                  key={menu.id}
                  className="bg-white ml-[-10px] my-2 py-2 px-1 rounded-r-full flex flex-grow"
                >
                  <div className="bg-blue-400">
                    <li
                      key={menu.name}
                      className=" w-56 h-full pl-3   justify-center text-xl md:my-0 my-7  "
                    >
                      <Link
                        to={menu.href}
                        className="relative top-4 left-1 hover:text-black hover:bg-transparent text-white "
                      >
                        {menu.name}
                      </Link>
                    </li>
                  </div>
                  <div className="flex bg-blue-400 pr-3 py-2 rounded-r-full">
                    <img
                      src={menu.icon2}
                      alt=""
                      className={`h-12  w-12 ${menu.icon2 ? "" : "invisible"}`}
                    />
                    <img
                      src={menu.icon1}
                      alt=""
                      className={`h-12  w-12 ${menu.icon1 ? "" : "invisible"}`}
                    />
                  </div>
                </div>
              ))}
            </ul>
            <ul
              className={`md:flex md:flex-col md:items-center md:pb-9  rotate-180 relative top-10  bg-transparent md:z-auto z-[-1]  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  left-[600px]  ${
                open ? "left-[7px]" : ""
              }`}
            >
              {Menu1.map((menu) => (
                <div
                  key={menu.id}
                  className="bg-white  my-2 py-2 px-1 rounded-r-full flex flex-grow "
                >
                  <div className="bg-blue-400 rotate-180 text-end">
                    <li
                      key={menu.name}
                      className=" w-56 h-full pl-3   justify-center text-xl md:my-0 my-7  "
                    >
                      <Link
                        to={menu.href}
                        className="relative top-4 right-4 hover:text-black hover:bg-transparent text-white "
                      >
                        {menu.name}
                      </Link>
                    </li>
                  </div>
                  <div className="flex bg-blue-400 pr-3 py-2 rounded-r-full">
                    <img
                      src={menu.icon2}
                      alt=""
                      className={`h-12 rotate-180  w-12 ${
                        menu.icon2 ? "" : "invisible"
                      }`}
                    />
                    <img
                      src={menu.icon1}
                      alt=""
                      className={`h-12 rotate-180 w-12 ${
                        menu.icon1 ? "" : "invisible"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5">
        <Footer
          isIndexPage={isIndexPage}
          setIsIndexPage={setIsIndexPage}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </>
  );
};

export default App;
