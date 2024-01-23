import React, { useState } from "react";
import { useEffect } from "react";
import error from "../../assets/error.png";
import { useNavigate } from "react-router-dom";
import Headerlogo from "../../layouts/Headerlogo";

const ErrorContainer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 300000); // 30000 milliseconds = 30 seconds
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
        <img src={error} alt="success" className="w-[500px] h-[500px]  " />
        <p className="text-[250px] text-center font-bold text-white ">Error</p>

        <p className="text-[65px] text-white">Canceled your payment.</p>

        <button
          onClick={() => {
            setIsNavigateToProductPageAgin(true);
            navigate("/product");
          }}
          className="uppercase text-white text-[140.194px] pr-[200px] pl-[200px] pt-[4spx]  mt-40 rounded-[100px] mb-96"
          style={{
            background:
              "linear-gradient(98deg, #FC904E 43.67%, #FF3450 81.09%, #FF00F8 118.51%)",
            boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.25)",
          }}
        >
          Buy Again
        </button>
      </div>
    </div>
  );
};

export default ErrorContainer;
