import { HiOutlineMinus, HiPlus } from "react-icons/hi";

export default function ProductStandVersion({
  name,
  price,
  onClickPlus,
  onClickNe,
  amount,
  imgLeft,
  imgRight,
  imgFront,
  imgBack,
}) {
  return (
    <div className=" text-[38px] mx-auto flex flex-col justify-center items-center pb-6">
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
      <div className="flex gap-8 justify-center pt-3">
        <div className="h-[100px] w-[100px] bg-[#FC904E] flex justify-center items-center rounded-full">
          <div
            className="h-[80px] w-[80px] text-[60px] flex justify-center items-center"
            onClick={onClickNe}
          >
            <HiOutlineMinus />
          </div>
        </div>
        <div className="h-[100px] w-[143px] bg-white flex justify-center items-center rounded-[5px]">
          <div className="h-[80px] w-[80px] text-[60px] flex justify-center items-center">
            {amount}
          </div>
        </div>
        <div className="h-[100px] w-[100px] bg-[#FC904E] flex justify-center items-center rounded-full">
          <div
            className="h-[80px] w-[80px] text-[60px] flex justify-center items-center"
            onClick={onClickPlus}
          >
            <HiPlus />
          </div>
        </div>
      </div>
    </div>
  );
}
