import React, { useState } from "react";
import { useEffect } from "react";
import success from "../../assets/success.png";
import { useNavigate } from "react-router-dom";
import Headerlogo from "../../layouts/Headerlogo";

const SuccessContainer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 30000); // 30000 milliseconds = 30 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  const [isNavigateToProductPageAgin, setIsNavigateToProductPageAgin] =
    useState(false);

  return (
    <div className="successContainer">
      <Headerlogo size="w-[162px] h-[300px] " />
      <div
        className="w-[2160px] h-[3840px] bg-[#363636] flex flex-col items-center justify-center "
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <img src={success} alt="success" className="w-[500px] h-[500px]  " />
        <p className="text-[250px] text-center font-bold text-white ">
          Success
        </p>

        <p className="text-[65px] text-white">
          We have sent you a receipt. Please check your email
        </p>

        <button
          onClick={() => {
            setIsNavigateToProductPageAgin(true);
            navigate("/");
          }}
          className="uppercase text-white text-[140.194px] pr-[200px] pl-[200px] pt-[4spx]  mt-40 rounded-[100px] mb-96"
          style={{
            background:
              "linear-gradient(98deg, #FC904E 43.67%, #FF3450 81.09%, #FF00F8 118.51%)",
            boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.25)",
          }}
        >
          Buy again
        </button>
      </div>
    </div>
  );
};

export default SuccessContainer;
