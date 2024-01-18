import React from "react";
import { ScaleLoader } from "react-spinners";

function Loading() {
  return (
    <div className="w-[2160px] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <ScaleLoader
        color="#e05e15"
        height={200}
        margin={20}
        radius={49}
        width={50}
      />
    </div>
  );
}

export default Loading;
