import React, { useState } from "react";

import HeaderEmail from "../../layouts/HeaderEmail";
import { useNavigate } from "react-router-dom";

const RequestContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-[2160px] h-[3840px] bg-[#363636] flex flex-col  items-center p-0">
      <HeaderEmail />

      <div
        style={{
          background:
            "linear-gradient(170deg, rgba(175, 130, 111, 0.50) 1.32%, rgba(81, 81, 81, 0.00) 54.28%, rgba(147, 112, 152, 0.50) 101%)",
          backdropFilter: "blur(5px)",
          padding: "500px",
          borderRadius: "50px",
          width: "1700px",
          height: "1500px",
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
          onChange={(event) => setInputValue(event.target.value)}
          name={"test2"}
          placeholder={"Enter your email here..."}
          style={{
            marginTop: "50px",
            fontSize: "70px",
            height: "100px",
            width: "1300px",
            border: "8px solid red",
            borderRadius: "20px",
            padding: "100px",
          }}
        />
      </div>
      <button
        onClick={() => {
          navigate("/success");
        }}
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
