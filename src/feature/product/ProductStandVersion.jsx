import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function ProductStandVersion({
  name,
  price,
  amount,
  imgLeft,
  imgRight,
  imgFront,
  imgBack,
  handleSelect,
  index,
  select,
  currentStock,
}) {
  const navigate = useNavigate();

  // const handleButtonClick = () => {
  //   handleSelect(index);
  //   navigate("/summary");
  // };

  const disabledCard = () => {
    if (index === 0) {
      return !currentStock?.blackCard;
    } else if (index === 1) {
      return !currentStock?.whiteCard;
    } else {
      return !currentStock?.pinkCard;
    }
  };

  return (
    <div
      className={`text-[38px] mx-auto flex flex-col justify-center items-center pb-6
       
       `}
    >
      {imgLeft && (
        <div className="flex col">
          <div>
            <p className="flex-1 text-center font-normal text-white">FRONT</p>
            <img
              src={imgLeft}
              alt="imgLeft"
              className="w-[180px] h-[288.87px]"
            />
          </div>
          <div>
            <p className="flex-1 text-center font-normal text-white">BACK</p>
            <img
              src={imgRight}
              alt="imgRight"
              className="h-[288.17px] w-[180px]"
            />
          </div>
        </div>
      )}
      {imgFront && (
        <div className="flex flex-col gap-28 relative ">
          <div>
            <p className="flex-1 text-center font-normal text-white">FRONT</p>
            <img
              src={imgFront}
              alt="imgFront"
              className="h-[320px] w-[520.08px]"
            />
          </div>
          <div>
            <p className="flex-1 text-center font-normal text-white">BACK</p>
            <img
              src={imgBack}
              alt="imgBack"
              className="h-[320px] w-[520.08px]"
            />
          </div>
        </div>
      )}
      <p className="text-center pt-3 mt-4 text-white">{name}</p>
      <p className="text-[60px] mt-4 text-center  from-[#FC904E] via-[#FF3450] to-[#FF00F8] bg-clip-text bg-gradient-to-r text-transparent">
        {price} THB
      </p>

      <button
        className={`uppercase text-white text-6xl p-8 font-bebas-neue font-medium mt-4 rounded-full w-96 ${
          disabledCard()
            ? "bg-gray-600 border-white border-2"
            : select === index
            ? "bg-gray-500"
            : "bg-gradient-to-r from-orange-400 via-red-500 to-pink-600"
        }`}
        onClick={(e) => {
          handleSelect(e, index);
        }}
        disabled={disabledCard()}
      >
        {disabledCard()
          ? "Out of Stock"
          : select === index
          ? "Selected"
          : "Select"}
      </button>
    </div>
  );
}
