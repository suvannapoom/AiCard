import { Link } from "react-router-dom";
import Logo from "../assets/LogoAi.svg";
import BackArrow from "../assets/back-arrow2.svg"; // import your back arrow icon

export default function Header({ text, size }) {
  return (
    <div className="h-[300px] w-[2160px] flex flex-row justify-between items-center bg-[#292929] px4 fixed z-10">
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
        "<p className="text-white text-[130px]  text-center ">{text || ""}</p>
      </div>
      <div className="flex-1 flex justify-end ">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[250px] h-[250px] pr-10" />
        </Link>
      </div>
    </div>
  );
}
