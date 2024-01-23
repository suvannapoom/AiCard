import React, { useEffect, useState } from "react";
import success from "../../assets/success.png";
import { useNavigate } from "react-router-dom";
import Headerlogo from "../../layouts/Headerlogo";
import { productTrigger } from "../../api/product";
import { useProduct } from "../../context/ProductContextProvider";

const OrdercomContainer = () => {
  const navigate = useNavigate();
  const [isNavigateToProductPageAgin, setIsNavigateToProductPageAgin] =
    useState(false);
  const { trigger } = useProduct();

  useEffect(() => {
    productTrigger({ Trigger: "p1" });
  }, []);

  return (
    <div className="ordercompletepage">
      <Headerlogo size="w-[162px] h-[300px] " />
      <div
        className="w-[2160px] h-[3840px] bg-[#363636] flex flex-col items-center justify-center"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <img src={success} alt="success" className="w-[500px] h-[500px]" />
        <p className="text-[250px] text-center font-bold text-white">Order</p>
        <p className="text-[250px] text-center -mt-11 font-bold text-white">
          Completed
        </p>
        <p className="text-[65px] text-white">Please take your card.</p>

        <button
          onClick={() => {
            setIsNavigateToProductPageAgin(true);
            navigate("/request_receipt");
          }}
          className="uppercase text-white text-[140.194px] pr-[200px] pl-[200px] pt-[4spx]  mt-96 rounded-[100px]"
          style={{
            background:
              "linear-gradient(98deg, #FC904E 43.67%, #FF3450 81.09%, #FF00F8 118.51%)",
            boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.25)",
            fontStyle: "Bebas Neue",
          }}
        >
          request receipt
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="uppercase text-white text-[80px] pr-[119px] pl-[119px] pt-[9px] font-normal mt-96 rounded-[73px]"
          style={{
            marginTop: "50px", // Add some margin to separate from the other button
            textDecoration: "underline", // Add this line
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default OrdercomContainer;
