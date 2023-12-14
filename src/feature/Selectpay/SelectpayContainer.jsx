import React from "react";
import HeaderSpay from "../../layouts/HeaderSpay";
import { BsQrCodeScan } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectpayContainer = () => {
  const [selectedPage, setSelectedPage] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between overflow-y-scroll scrollbar-hide">
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
          Select your payment method
        </h2>
        <div>
          <div className="flex justify-between">
            <button
              style={{
                width: "600px",
                height: "600px",
                background:
                  "linear-gradient(170deg, rgba(175, 130, 111, 0.50) 1.32%, rgba(81, 81, 81, 0.00) 54.28%, rgba(147, 112, 152, 0.50) 101%)",
                backdropFilter: "blur(5px)",
                flexShrink: 0,
                borderRadius: "10%", // Add this line
              }}
              className="flex flex-col items-center justify-center focus:border-orange-400 focus:border-[18px] focus:outline-none mr-24 "
              onClick={() => setSelectedPage("QRcodepay")}
            >
              <BsQrCodeScan
                style={{ fontSize: "250px" }}
                className="text-white mb-24"
              />
              <span
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontSize: "60px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "46.532px",
                  letterSpacing: "0.465px",
                  textTransform: "capitalize",
                }}
              >
                QR SCAN{" "}
              </span>
            </button>
            <button
              style={{
                width: "600px",
                height: "600px",
                background:
                  "linear-gradient(170deg, rgba(175, 130, 111, 0.50) 1.32%, rgba(81, 81, 81, 0.00) 54.28%, rgba(147, 112, 152, 0.50) 101%)",
                backdropFilter: "blur(5px)",
                flexShrink: 0,
                borderRadius: "10%", // Add this line
              }}
              className="flex flex-col items-center justify-center focus:outline-none focus:ring-[18px] focus:ring-orange-400 border-11 border-transparent focus:border-gradient"
              onClick={() => setSelectedPage("Creditcardpay")}
            >
              <MdOutlinePayment
                style={{ fontSize: "300px" }}
                className="text-white mb-14"
              />
              <span
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontSize: "60px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "46.532px",
                  letterSpacing: "0.465px",
                  textTransform: "capitalize",
                }}
              >
                Credit Card
              </span>
            </button>
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="uppercase text-white text-[170.194px] pr-[119px] pl-[119px] pt-[4px] font-normal mt-96 rounded-[73px]"
              style={{
                background:
                  "linear-gradient(98deg, #FC904E 43.67%, #FF3450 81.09%, #FF00F8 118.51%)",
                boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => {
                if (selectedPage) {
                  // If a page has been selected, navigate to that page
                  navigate(`/${selectedPage}`);
                } else {
                  // If no page has been selected, show an alert
                  alert("Please select a payment method first.");
                }
              }}
            >
              PAY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectpayContainer;
