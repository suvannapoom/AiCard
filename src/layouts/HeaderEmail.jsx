import { Link } from "react-router-dom";
import Logo from "../assets/LogoAi.svg";
import BackArrow from "../assets/back-arrow2.svg"; // replace with actual path

export default function HeaderEmail() {
  return (
    <div className="h-[8vh] w-[2160px] bg-[#292929] flex flex-row justify-between items-center  px4 fixed z-10">
      <div className="flex-1">
        <Link to="/QRcodepay">
          <img
            src={BackArrow}
            alt="Back"
            className="w-[220px] h-[220px] pr-10"
          />{" "}
          {/* Back arrow button */}
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center"></div>
      <div className="flex-1 flex justify-end ">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[250px] h-[250px] pr-10" />
        </Link>
      </div>
    </div>
  );
}
