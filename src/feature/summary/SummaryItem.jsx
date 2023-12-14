import React from "react";
import { formatPrice } from "../../utils/formatprice";
export default function SummaryItem({ name, amount, price }) {
  const formatPrice1 = formatPrice(price * amount);
  return (
    <div className="flex text-[48px] pt-[34px]  pb-[45px] border-b-2 border-[#E7E7E7]">
      <p className="from-[#FC904E] via-[#FF3450] to-[#FF00F8] bg-clip-text bg-gradient-to-r text-transparent">
        {amount}x
      </p>
      <p className="uppercase text-[#3B414B] w-full ml-[38px]">{name}</p>
      <p className="from-[#FC904E] via-[#FF3450] to-[#FF00F8] bg-clip-text bg-gradient-to-r text-transparent">
        {formatPrice1}
      </p>
    </div>
  );
}
