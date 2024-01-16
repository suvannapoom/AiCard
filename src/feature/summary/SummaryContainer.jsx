import { useNavigate } from "react-router-dom";

import HeaderSum from "../../layouts/HeaderSum";
import SummaryCard from "./SummaryCard";
import { useProduct } from "../../context/ProductContextProvider";
import Iframe from "./Iframe";
import { useEffect } from "react";

export default function SummaryContainer() {
  const navigate = useNavigate();
  const { allProduct, handleSendCardList, paymentUrl, setPaymentUrl } =
    useProduct();
  console.log(setPaymentUrl, "------------------url");
  const { result, totalPrice } = allProduct;
  const handleClose = () => {
    setPaymentUrl(null);
  };
  const cardList = result?.map((el) => {
    const newData = {
      materialID: el.materialID,
      materialName: el.materialName,
      amount: el.amount,
    };
    return newData;
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      const res =
        "Transaction is completed, please do payment inquiry request for full payment information.";
      if (event.data.paymentResult?.respDesc == res) {
        setPaymentUrl(null);
        navigate("/ordercomplete");
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return (
    <div
      className={`w-[2160px] h-[3840px] bg-[#363636] flex flex-col  items-center p-0 relative ${
        paymentUrl ? "" : ""
      }`}
    >
      <HeaderSum />
      <SummaryCard result={result} totalPrice={totalPrice} />
      <button
        onClick={() => {
          handleSendCardList({
            cardList,
            totalPrice: totalPrice.replace(/,/g, ""),
          });
        }}
        className="uppercase text-white text-[110.194px] pr-[119px] pl-[119px] pt-[4px] font-normal mt-96 rounded-[73px]"
        style={{
          background:
            "linear-gradient(98deg, #FC904E 43.67%, #FF3450 81.09%, #FF00F8 118.51%)",
          boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.25)",
        }}
      >
        PAY NOW
      </button>

      {paymentUrl && (
        <div className="flex flex-col justify-center items-center gap-3 absolute z-10 top-[45%] left-[50%] w-full h-[92vh]  rounded-[16px] transform -translate-x-1/2 -translate-y-1/2 p-4 ">
          <Iframe paymentUrl={paymentUrl} handleClose={handleClose} />
        </div>
      )}
    </div>
  );
}
