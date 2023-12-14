import { Link } from "react-router-dom";
import Logo from "../assets/LogoAi.svg";
import BackArrow from "../assets/back-arrow2.svg";

export default function HeaderSpay({ text, size }) {
  return (
    <div
      className="h-[300px] w-[2160px] bg-[#292929] flex flex-row justify-between items-center px4 fixed z-10"
      style={{ position: "fixed", top: 0 }}
    >
      <div className="flex-1">
        <Link to="/">
          <img
            src={BackArrow}
            alt="Back"
            className="w-[220px] h-[220px] pr-10"
          />{" "}
          {/* Back arrow button */}
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-[130px] text-white">select payment</h1>
      </div>
      <div className="flex-1 flex justify-end ">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[250px] h-[250px] pr-10" />
        </Link>
      </div>
    </div>
  );
}
