import { HiX } from "react-icons/hi";
export default function Iframe({ paymentUrl, handleClose }) {
  return (
    <div
      className={`w-full h-full flex flex-col justify-center items-center m-[8vh] relative ${
        paymentUrl ? "backdrop-blur-3xl bg-transparent" : ""
      }`}
    >
      <div
        className=" text-right text-[36px] w-[1000px]  font-bold flex justify-end bg-white hover:cursor-pointer"
        onClick={handleClose}
      >
        <HiX />
      </div>
      <iframe
        src={paymentUrl}
        className="w-[1000px] h-[1000px] overscroll-none"
      />
      ;
    </div>
  );
}
