import { Link } from "react-router-dom";
import Logo from "../assets/LogoAi.svg";

export default function Headerlogo({ text, size }) {
  return (
    <div className="h-[300px] w-[2160px] flex flex-row justify-between items-center bg-[#292929] px4 fixed z-10">
      <div className="flex-1 flex items-center justify-center"></div>
      <div className="flex-1 flex justify-end ">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[250px] h-[250px] pr-10" />
        </Link>
      </div>
    </div>
  );
}
