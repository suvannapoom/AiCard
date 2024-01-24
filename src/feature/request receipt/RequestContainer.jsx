import React, { useState } from "react";
import HeaderEmail from "../../layouts/HeaderEmail";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../../api/email-api";
import { useProduct } from "../../context/ProductContextProvider";

const RequestContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const [emailError, setEmailError] = useState(false);
  const { orderNo } = useProduct();

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    let value = event.target.value;

    const specialCharRegex = /[!#$%^&*()+[\]{};':"\\|,<>/?]/;
    if (specialCharRegex.test(value)) {
      value = value.replace(specialCharRegex, "");
    }

    setInputValue(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const handleSubmit = () => {
    const response = sendEmail({
      email: inputValue,
      orderNumber: orderNo,
    });

    navigate("/success");
  };
  return (
    <div className="w-[2160px] h-[3840px] bg-[#363636] flex flex-col  items-center p-0">
      <HeaderEmail />

      <div
        style={{
          background:
            "linear-gradient(170deg, rgba(175, 130, 111, 0.50) 1.32%, rgba(81, 81, 81, 0.00) 54.28%, rgba(147, 112, 152, 0.50) 101%)",
          backdropFilter: "blur(5px)",
          padding: "100px",
          borderRadius: "50px",
          width: "1700px",
          height: "1000px",
          marginTop: "600px",
          display: "flex",
          flexDirection: "column", // Add this line
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "80px",
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          Please enter your email
        </h2>
        <input
          required
          autoComplete="off"
          value={inputValue}
          onChange={handleInputChange}
          name={"test2"}
          placeholder={"Enter your email here..."}
          style={{
            marginTop: "100px",
            fontSize: "70px",
            height: "100px",
            width: "1300px",
            fontFamily: "-moz-initial",
            padding: "100px",
            borderColor: emailError ? "red" : "initial",
          }}
        />
        {emailError && (
          <div
            style={{
              color: "red",
              marginTop: "50px",
              fontSize: "80px",
              fontStyle: "normal",
            }}
          >
            Please enter a valid email.
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="uppercase text-white text-[110.194px] pr-[119px] pl-[119px] pt-[4px] font-normal mt-32 rounded-[73px]"
        style={{
          background:
            "linear-gradient(98deg, #FC904E 43.67%, #FF3450 81.09%, #FF00F8 118.51%)",
          boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.25)",
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default RequestContainer;
