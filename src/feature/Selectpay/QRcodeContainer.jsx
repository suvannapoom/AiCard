import React, { useState, useEffect } from "react";
import HeaderSpay from "../../layouts/HeaderSpay";
import QRexImage from "../../assets/QRex.png"; // Update this path to your image
import { useNavigate } from "react-router-dom";

const QRcodeContainer = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(600); // Change this line

  useEffect(() => {
    if (count > 0) {
      const timerId = setTimeout(() => {
        setCount(count - 1);
      }, 1000); // Change this line
      return () => clearTimeout(timerId);
    }
  }, [count]);

  const handleClickPay = () => {
    navigate("/request_receipt");
  };

  return (
    <div>
      <HeaderSpay />
      <div
        className="w-[2160px] h-[3840px] bg-[#363636] flex flex-col items-center justify-center"
        style={{ marginTop: "50px" }} // Add this line
      >
        <h2
          style={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "100px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "50.909px",
            letterSpacing: "0.509px",
            marginBottom: "100px", // Increase this value
          }}
        >
          Scan QR code to pay{" "}
        </h2>
        <p style={{ color: "white", fontSize: "80px" }}>
          {count > 0
            ? `Time remaining: ${Math.floor(count / 60)} minutes ${
                count % 60
              } seconds`
            : "Time is up!"}
        </p>
        <img
          src={QRexImage}
          alt="QRex"
          style={{ width: "1300px", height: "1300px" }}
        />

        <button
          onClick={handleClickPay}
          className="uppercase text-white text-[110.194px] pr-[119px] pl-[119px] pt-[4px] font-normal mt-96 rounded-[73px]"
          style={{
            background:
              "linear-gradient(98deg, #FC904E 43.67%, #FF3450 81.09%, #FF00F8 118.51%)",
            boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.25)",
          }}
        >
          PAY
        </button>
      </div>
    </div>
  );
};

export default QRcodeContainer;
