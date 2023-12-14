import React, { useState } from "react";
import KeyboardedInput from "react-touch-screen-keyboard";
import "react-touch-screen-keyboard/lib/Keyboard.css"; // if you just want css
import Headerlogo from "../../layouts/Headerlogo";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-[2160px] h-[3840px] bg-[#363636] flex flex-col  items-center p-0">
      <Headerlogo />
      <div
        style={{
          backgroundColor: "white",
          padding: "500px",
          borderRadius: "10px",
          width: "1000px", // Add this line
          height: "1000px", // Add this line
        }}
      >
        <KeyboardedInput
          enabled
          required
          alwaysOpen={true}
          value={inputValue}
          onChange={(value) => setInputValue(value)}
          name={"test2"}
          placeholder={"ใส่อีเมล"}
          defaultKeyboard="us"
          style={{ marginTop: "20px" }}
        />
      </div>
    </div>
  );
};

export default Input;
