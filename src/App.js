import React, { useRef, useState } from "react";
import img1 from "./assets/icons/Component 74 – 1.png";
import img2 from "./assets/icons/Component61.png";
import img3 from "./assets/icons/Component 75 – 1.png";
import Footer from "./pages/Footer";

let Menu1 = [
  {
    name: "Assessment",
    icon1: img2,
    link: "/",
  },
  {
    name: "Trivia",
    icon1: img3,
    link: "/",
  },
  {
    name: "Vegetation",
    icon1: img1,
    link: "/",
  },
  {
    name: "Sand dunes",
    icon1: img1,
    link: "/",
  },
];

let Menu2 = [
  { name: "Desert", icon1: img1, icon2: "", link: "/page/desert/info/" },
  {
    name: "Type of Desert",
    icon1: img2,
    icon2: img1,
    link: "/page/desert/types/",
  },
  { name: "Habitat", icon1: img1, icon2: "", link: "/page/desert/habitat/" },
  { name: "Oasis", icon1: img1, icon2: "", link: "/page/desert/oasis/info/" },
];

const Home = () => {
  const menuRef = useRef();
  const { current } = menuRef;
  let [open, setOpen] = useState(true);
  console.log("menuref", current);
  return (
    <div className=" w-[100vw] bg-contain bg-center h-[91vh] bg-image">
      <div className="flex flex-col items-center justify-center h-full text-black">
        <div className="w-72 h-72 rounded-full mb-32 bg-gray-200  shadow-[2px_2px_2px_2px_rgb(0,0,0,0.3)]">
          <ul
            className={`md:flex md:flex-col md:items-center md:pb-9 absolute top-10 bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 rotate-180 transition-all duration-500 ease-in ${
              open ? "left-[1076px]" : "left-[1500px]"
            }`}
          >
            {Menu1.map((menu, i) => (
              <div className="bg-white my-2 py-2 px-1 rounded-r-full flex flex-grow">
                <div className="bg-blue-400">
                  <li
                    key={menu.name}
                    className="w-64 h-full pl-3 justify-center text-xl md:my-0 my-7 rotate-180 pr-6 text-end"
                  >
                    <a href="" className="relative top-4 left-1 text-white  ">
                      {menu.name}
                    </a>
                  </li>
                </div>
                <div className="flex  bg-blue-400 pr-3 py-2 rounded-r-full">
                  <img
                    src={menu.icon1}
                    alt=""
                    className={`rotate-180 h-12   ${
                      menu.icon1 ? "" : "invisible"
                    }`}
                  />
                </div>
              </div>
            ))}
          </ul>

          <ul
            className={`md:flex md:flex-col md:items-center md:pb-9  absolute top-20  bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "left-[-10px]" : "left-[-490px]"
            }`}
          >
            {Menu2.map((menu) => (
              <div className="bg-white  my-2 py-2 px-1 rounded-r-full flex flex-grow">
                <div className="bg-blue-400">
                  <li
                    key={menu.name}
                    className=" w-56 h-full pl-3 justify-center text-xl md:my-0 my-7  "
                  >
                    <a
                      href={menu.link}
                      className="relative top-4 left-1 text-white "
                    >
                      {menu.name}
                    </a>
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
        </div>
      </div>

      <Footer setOpen={setOpen} open={open} />
    </div>
  );
};

export default Home;
