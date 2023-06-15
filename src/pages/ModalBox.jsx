const ModalBox = ({ desertTypes, setDesertTypes }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setDesertTypes("");
    }
  };

  return (
    <div
      className="absolute top-0  right-0 w-full h-full flex gap-24 justify-center bg-black/[.5]     dismiss overflow-y-scroll"
      onClick={handleClick}
    >
      <div className="w-min h2  ">
        <h4 className="bg-slate-100 w-[94.7%] mt-14 p-4 relative top-7 left-3  text-center text-3xl text-blue-400 ">
          Hot Desert
        </h4>
        <img
          className="block max-w-lg mt-4 m-auto"
          src={desertTypes[0]}
          alt="hottestDesert"
        />
        <p className="bg-white py-3 px-2 mt-4">Extremely hot climate</p>
        <p className="bg-white py-3 px-2 mt-4">
          Found in the tropical and sub-tropical regions (western coasts of
          continents)
        </p>
        <p className="bg-white py-3 px-2 mt-4">
          Video Play Audio for facts Click Difference Between * Hot Desert *
          Cold Desert Sahara Desert : Hottest desert on Earth Africa Extremely
          hot climate Extremely cold climate Hot Desert Covered by sand, rock,
          salt lakes, stony hills and even mountains
        </p>
        <p className="bg-white py-3 px-2 mt-4">It is red or orange in colour</p>
        <p className="bg-white py-3 px-2 mt-4">
          Precipitation levels are generally lower than cold deserts
        </p>
        <p className="bg-white py-3 px-2 mt-4">
          Commonly found animals include fennec foxes, dung beetles, bactrian
          camels, sidewinder snakes, Mexican coyotes etc
        </p>
        <p className="bg-white py-3 px-2 mt-4 mb-64">
          Vegetation is very rare and mostly includes ground-hugging shrubs and
          short woody trees.
        </p>
      </div>
      <div className="w-min h2">
        <h4 className="bg-slate-100 w-[94.7%] mt-14 p-4 relative top-7 left-3  text-center text-3xl text-blue-400 ">
          Cold Desert
        </h4>

        <img
          className="block max-w-lg mt-4 m-auto"
          src={desertTypes[1]}
          alt="coldestDesert"
        />
        <p className="bg-white  py-3 px-2 mt-4">Extremely cold climate</p>
        <p className="bg-white py-3 px-2 mt-4">
          Mostly found in temperate regions at higher latitudes
        </p>
        <p className="bg-white py-3 px-2 mt-4">
          It has sand, ice- or snow-covered land
        </p>
        <p className="bg-white py-3 px-2 mt-4">It generally appears grey</p>
        <p className="bg-white py-3 px-2 mt-4">
          Precipitation is higher than evaporation
        </p>
        <p className="bg-white py-3 px-2 mt-4">
          Commonly found animals include foxes, jackrabbits, kangaroo rats,
          pocket mice, badger etc.
        </p>
        <p className="bg-white py-3 pb-20 px-2 mt-4">
          Vegetation is scattered with needle like leaves.
        </p>
      </div>
    </div>
  );
};

export default ModalBox;
