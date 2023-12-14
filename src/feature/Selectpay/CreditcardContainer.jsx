import React from "react";
import HeaderSpay from "../../layouts/HeaderSpay";
import CreditpayTmage from "../../assets/Creditpay.png"; // Update this path to your
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvider";
const CreditcardContainer = () => {
  const {} = useProduct();
  const navigate = useNavigate();
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
          creadit{" "}
        </h2>
        <img
          src={CreditpayTmage}
          alt="QRex"
          style={{ width: "1300px", height: "1300px" }}
        />
        <button
          onClick={() => {
            navigate("/ordercomplete");
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
    </div>
  );
};

export default CreditcardContainer;
