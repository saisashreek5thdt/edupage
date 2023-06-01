import React from "react";
import { Link } from "react-router-dom";

import DesertBg1 from "./assets/images/desert-bg-1.png";
import DesertBg2 from "./assets/images/desert-bg-2.png";
import DesertBg3 from "./assets/images/desert-bg-5.png";
import DesertBg4 from "./assets/images/desert-bg-4.png";

const deserts = [
  {
    id: 1,
    name: "Desert",
    href: "/page/desert/info/",
    imageSrc: DesertBg1,
    imageAlt:
      "A desert is a large region that gets very little rain each year. Most deserts get less than 10 inches of rain in a year.",
  },
  {
    id: 2,
    name: "Types of Desert",
    href: "/page/desert/types/",
    //href: "/",
    imageSrc: DesertBg2,
    imageAlt:
      "A hot desert has very high temperature during the day, but nights are quite cold, sometimes freezing cold.",
  },
  {
    id: 3,
    name: "Habitat",
    href: "/page/desert/habitat/",
    //href: "/",
    imageSrc: DesertBg3,
    imageAlt:
      "Desert plants and animals have features that help them survive in the dry climate.",
  },
  {
    id: 4,
    name: "Oasis",
    href: "/page/desert/oasis/info/",
    //href: "/",
    imageSrc: DesertBg4,
    imageAlt:
      "Oasis is a natural source of water in a desert.",
  },
  // More products...
];

const App = () => {

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {deserts.map((desert) => (
              <Link key={desert.id} to={desert.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg shadow-md xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={desert.imageSrc}
                    alt={desert.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-700">{desert.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
