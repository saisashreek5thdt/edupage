const ModalBox = ({ desertTypes, setDesertTypes }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setDesertTypes("");
    }
  };

  const hotDesertPara = [
    {
      id: 1,
      description: "Extremely hot climate",
    },
    {
      id: 2,
      description:
        "Found in the tropical and sub-tropical regions (western coasts of continents)",
    },
    {
      id: 3,
      description:
        "Covered by sand, rock, salt lakes, stony hills and even mountains",
    },
    {
      id: 4,
      description: "It is red or orange in colour",
    },
    {
      id: 5,
      description: "Precipitation levels are generally lower than cold deserts",
    },
    {
      id: 6,
      description:
        "Commonly found animals include fennec foxes, dung beetles,bactrian camels, sidewinder snakes, Mexican coyotes etc.",
    },
    {
      id: 7,
      description:
        "Vegetation is very rare and mostly includes ground-hugging shrubs and short woody trees.",
    },
  ];

  const coldDesertPara = [
    {
      id: 1,
      description: "Extremely cold climate",
    },
    {
      id: 2,
      description: "Mostly found in temperate regions at higher latitudes",
    },
    {
      id: 3,
      description: "It has sand, ice- or snow-covered land ",
    },
    {
      id: 4,
      description: "It generally appears grey",
    },
    {
      id: 5,
      description: "Precipitation is higher than evaporation",
    },
    {
      id: 6,
      description:
        " Commonly found animals include foxes, jackrabbits, kangaroo rats, pocket mice, badger etc.",
    },
    {
      id: 7,
      description: "Vegetation is scattered with needle like leaves.",
    },
  ];
  console.log(coldDesertPara);
  console.log(hotDesertPara);

  return (
    <div className="absolute top-0  right-0 w-full h-full mb-56 flex gap-24 justify-center bg-black/[.5]     dismiss overflow-y-scroll pb-10">
      <div className="w-min h2  ">
        <h4 className="bg-slate-100 w-[94.7%] mt-14 p-4 relative top-7 left-3  text-center text-3xl text-blue-400 ">
          Hot Desert
        </h4>
        <img
          className="block max-w-lg mt-4 m-auto"
          src={desertTypes[0]}
          alt="hottestDesert"
        />
        {hotDesertPara.map((para) => (
          <p className="bg-white py-3 px-2 mt-4" key={para.id}>
            {para.description}
          </p>
        ))}
        <h2 className="py-10 px-3">{""}</h2>
      </div>
      <div className="w-min pb h2">
        <h4 className="bg-slate-100 w-[94.7%] mt-14 p-4 relative top-7 left-3  text-center text-3xl text-blue-400 ">
          Cold Desert
        </h4>

        <img
          className="block max-w-lg mt-4 m-auto"
          src={desertTypes[1]}
          alt="coldestDesert"
        />
        {coldDesertPara.map((para) => (
          <p className="bg-white py-3 px-2 mt-4" key={para.id}>
            {para.description}
          </p>
        ))}
      </div>
      <span className="dismiss overlaySpan" onClick={handleClick}>
        X
      </span>
    </div>
  );
};

export default ModalBox;
