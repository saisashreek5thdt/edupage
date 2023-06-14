const ModalBox = ({ desertTypes, setDesertTypes }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setDesertTypes("");
    }
  };

  return (
    <>
      <div className="overlay  dismiss" onClick={handleClick}>
        <img src={desertTypes[1]} alt="hottestDesert" />
        <img src={desertTypes[1]} alt="coldestDesert" />
      </div>
    </>
  );
};

export default ModalBox;
