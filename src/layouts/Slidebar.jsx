import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_aicom.png";
import { useTranslation } from "react-i18next";

function Slidebar() {
  const [isOpen, setIsOpen] = useState(false); // Add this line
  const navigate = useNavigate();

  const handleSignOut = (event) => {
    if (!window.confirm("Are you sure exist?")) {
      event.preventDefault();
    }
    localStorage.removeItem("isChecked");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const handleButtonClick = (buttonName) => {
    // Add this function
    setSelectedButton(buttonName);
  };
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <button
        onClick={toggleSidebar} // Add this line
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        {isOpen ? (
          // This is the close button
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          // This is the hamburger button
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        )}
      </button>
      <aside
        id="default-sidebar"
        class={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div
          class="h-full px-3 py-4 overflow-y-auto bg-white"
          style={{ boxShadow: "0px 0px 10px #805AD5" }}
        >
          <ul class="space-y-2 font-medium">
            <img
              src={logo}
              alt="AICom Logo"
              width="100"
              height="100"
              style={{
                marginTop: "10px",
                marginLeft: "50px",
              }}
            />
            <li style={{ marginTop: "30px" }}>
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center p-2 text-[#805AD5] rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 w-[250px] h-[50px] group"
              >
                <svg
                  class="flex-shrink w-5 h-5 text-[#805AD5]  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ms-3"> {t("slidebar.dashboard")}</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/table")}
                className="flex items-center p-2 text-[#805AD5] rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 w-[250px] h-[50px] group"
              >
                <svg
                  className="flex-shrink w-5 h-5 text-[#805AD5]  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ms-3 whitespace-nowrap">
                  {t("slidebar.data")}
                </span>
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/storage")}
                className="flex items-center p-2 text-[#805AD5] rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 w-[250px] h-[50px] group"
              >
                <svg
                  class="flex-shrink w-5 h-5 text-[#805AD5]  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span class=" ms-3 whitespace-nowrap">
                  {" "}
                  {t("slidebar.products")}
                </span>
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  handleSignOut();
                  navigate("/loginadmin");
                }}
                className="flex items-center p-2 text-[#805AD5] rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 w-[250px] h-[50px] group"
              >
                <svg
                  class="flex-shrink w-5 h-5 text-[#805AD5]  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="ms-3 whitespace-nowrap">
                  {" "}
                  {t("slidebar.sign out")}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Slidebar;
