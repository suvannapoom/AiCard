import { useNavigate } from "react-router-dom";
import { HiX } from "react-icons/hi";
import HeaderSum from "../../layouts/HeaderSum";
import SummaryCard from "./SummaryCard";
import { useProduct } from "../../context/ProductContextProvider";

export default function SummaryContainer() {
  const navigate = useNavigate();
  const { allProduct, handleSendCardList, paymentUrl, setPaymentUrl } =
    useProduct();
  const { result, totalPrice } = allProduct;

  const cardList = result?.map((el) => {
    const newData = {
      materialID: el.materialID,
      materialName: el.materialName,
      amount: el.amount,
    };
  }, []);
  return (
    <div className="w-[2160px] h-[3840px] bg-[#363636] flex flex-col  items-center p-0">
      <HeaderSum />
      <SummaryCard result={result} totalPrice={totalPrice} />
      <button
        onClick={() => {
          handleSendCardList({
            cardList,
            totalPrice: totalPrice.replace(/,/g, ""),
          });
          navigate("/selectpay");
        }}
        className="uppercase text-white text-[110.194px] pr-[119px] pl-[119px] pt-[4px] font-normal mt-96 rounded-[73px]"
        style={{
          background:
            "linear-gradient(98deg, #FC904E 43.67%, #FF3450 81.09%, #FF00F8 118.51%)",
          boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.25)",
        }}
      >
        NEXT
      </button>
    </div>
  );
}
