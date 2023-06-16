import React, { useState } from "react";
import img1 from "./assets/icons/Component 74 – 1.png";
import img2 from "./assets/icons/Component61.png";
import img3 from "./assets/icons/Component 75 – 1.png";
import { Link } from "react-router-dom";
import Footer from "./pages/Footer";
import { useNavigate } from "react-router-dom";

const Menu1 = [
  {
    id: 1,
    name: "Assessment",
    href: "/page/desert/info/",
    icon1: img2,
    icon2: "",
  },
  {
    id: 2,
    name: "Trivia",
    href: "/page/desert/trivia/",
    //href: "/",
    icon1: img3,
    icon2: img3,
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
  const [open, setOpen] = useState(true);
  const [isIndexPage, setIsIndexPage] = useState(true);

  return (
    <>
      <div className=" w-[100vw] bg-contain bg-center h-[90vh] bg-image">
        <div className="flex flex-col items-center justify-center h-full text-black">
          <div className="w-72 h-72 rounded-full mb-32 bg-gray-200  shadow-[2px_2px_2px_2px_rgb(0,0,0,0.3)]">
            <ul
              className={`md:flex md:flex-col md:items-center md:pb-9 absolute top-10 bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 rotate-180 transition-all duration-500 ease-in ${
                open ? "left-[1076px]" : "left-[1500px]"
              }`}
            >
              {Menu1.map((menu) => (
                <div
                  key={menu.id}
                  className="bg-white relative right-4 my-2 py-2 px-1 rounded-r-full flex flex-grow"
                >
                  <div className="bg-blue-400 ">
                    <li
                      key={menu.name}
                      className="w-64 h-full pl-3 justify-center text-xl md:my-0 my-7 rotate-180 pr-6 text-end"
                    >
                      <Link
                        to={menu.href}
                        className="relative top-4 left-1 text-white hover:text-black hover:bg-transparent  "
                      >
                        {menu.name}
                      </Link>
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
                <div
                  key={menu.id}
                  className="bg-white  my-2 py-2 px-1 rounded-r-full flex flex-grow"
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
