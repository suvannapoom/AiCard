import Logo from "../assets/Logo.svg";
import TaptoShare from "../assets/TaptoShare.svg";
import ContactInstantly from "../assets/ContactInstantly.svg";
import DigitalB from "../assets/DigitalB.svg";
import Allcard from "../assets/all_card.png";

export default function Footer() {
  return (
    <>
      <div className="w-[760px] h-[540px] flex flex-col items-center ">
        <div
          className="flex flex-col items-center  mb-[200px]"
          style={{ transform: "translateX(-500px)" }}
        >
          <img src={Logo} alt="Logo" className="" />
          <img src={DigitalB} alt="DigitalB" className="mb-5 " />
          <div className="text-center mt-8 ">
            <img src={TaptoShare} alt="TaptoShare" />
          </div>
          <div className="text-center mt-16">
            <img src={ContactInstantly} alt="TaptoShare" />
          </div>
        </div>
        <div className="mb-[408px]">
          <img
            src={Allcard}
            alt="All card product"
            className="mb-5 ml-[500px]"
            style={{ marginTop: "-600px" }}
          />
        </div>
      </div>
    </>
  );
}
