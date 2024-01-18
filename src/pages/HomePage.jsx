import Logo from "../assets/Logo.svg";
import TaptoShare from "../assets/TaptoShare.svg";
import ContactInstantly from "../assets/ContactInstantly.svg";
import DigitalB from "../assets/DigitalB.svg";
import Allcard from "../assets/all_card.png";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <>
      <div className="w-[2160px] h-[3840px] bg-[#292929] flex flex-col items-center">
        <div className=" flex flex-col items-center mt-[280px] mb-[200px]">
          <img src={Logo} alt="Logo" className="" />
          <img src={DigitalB} alt="DigitalB" className="mb-5" />

          <div className="text-center mt-8 ">
            <img src={TaptoShare} alt="TaptoShare" />
          </div>
          <div className="text-center mt-16">
            <img src={ContactInstantly} alt="TaptoShare" />
          </div>
        </div>

        <div className="mb-[408px]">
          <img src={Allcard} alt="All card product" />
        </div>
        <div>
          <Link
            to="/product"
            className="uppercase text-white text-[150px] pr-[200px] pl-[200px] pt-[20px] font-normal mt-60 rounded-[100px]"
            style={{
              width: "600px",
              background:
                "linear-gradient(98deg, #FC904E 43.67%, #FF3450 81.09%, #FF00F8 118.51%)",
              boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.25)",
            }}
          >
            BUY NOW
          </Link>
        </div>
        <div className="flex justify-end items-center h-screen space-x-48"></div>
      </div>
    </>
  );
}
