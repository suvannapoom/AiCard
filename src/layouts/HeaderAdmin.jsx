import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/Adolf-Hitler.png";
import { FaRegBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ukFlag from "../assets/flag-uk.png";
import thFlag from "../assets/flag-th.png";

function HeaderAdmin({ isUpdatedStock }) {
  const [isOpen, setIsOpen] = useState(false);
  const [warningStock, setWarningStock] = useState([]);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const currentStock = JSON.parse(localStorage.getItem("cardStock"));

    if (!currentStock) return;

    const newStock = [];
    for (const [key, value] of Object.entries(currentStock)) {
      if (value <= 3) {
        newStock.push({ itemName: key, total: value });
      }
    }
    setWarningStock(newStock);
  }, [isUpdatedStock]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [t, i18n] = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("lng") || "en"
  );

  const handleChangeLanguage = (lng) => {
    localStorage.setItem("lng", lng);
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 flex justify-between items-center shadow-lg">
      <h1 className="text-white text-xl">My App</h1>
      <div className="relative flex items-center justify-start space-x-8">
        <img
          src={selectedLanguage === "en" ? ukFlag : thFlag}
          alt="Flag"
          width="50"
          height="50"
        />
        <select
          onChange={(e) => handleChangeLanguage(e.target.value)}
          style={{
            padding: "5px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
          }}
          defaultValue={localStorage.getItem("lng") || "en"}
        >
          <option
            value="en"
            style={{ backgroundColor: "#f8f9fa", color: "#495057" }}
          >
            EN
          </option>
          <option
            value="th"
            style={{ backgroundColor: "#f8f9fa", color: "#495057" }}
          >
            TH
          </option>
        </select>
        <FaRegBell
          onClick={toggleDropdown}
          size={25}
          className="text-white cursor-pointer transform transition duration-500 ease-in-out hover:scale-105"
        />
        <FaUser
          size={25}
          className="text-white cursor-pointer transform transition duration-500 ease-in-out hover:scale-105"
        />
        <span className="text-white text-lg">User: ADMIN</span>
        <div
          className="absolute flex items-center justify-center"
          style={{
            backgroundColor: warningStock.length > 0 ? "white" : "transparent",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            right: "140px",
            top: "-10px",
            color: "red",
          }}
        >
          {warningStock.length > 0 && warningStock.length}
        </div>
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
            style={{
              border: "2px solid #805AD5",
              marginTop: `${warningStock.length ? "210px" : "130px"}`,
              marginLeft: "-30px",
            }}
          >
            {warningStock.length > 0 ? (
              <>
                <p className="px-4 py-2 text-[20px] text-red-500 text-center underline">
                  Warning!
                </p>
                {warningStock.map((el, idx) => {
                  return (
                    <p
                      key={idx}
                      className="px-4 py-2 text-[15px] text-gray-700 text-center "
                    >
                      {el.itemName} have :{" "}
                      {el.total === 0 ? (
                        <span style={{ color: "red" }}>out of stock</span>
                      ) : (
                        `${el.total} in stock`
                      )}
                    </p>
                  );
                })}
                <hr />
                <Link
                  to="/storage"
                  className="block px-4 py-2 text-lg text-gray-700 hover:bg-indigo-500 hover:text-white bg-purple-500 text-center"
                >
                  Manage
                </Link>
              </>
            ) : (
              <p className="px-4 py-2 text-[20px] text-gray-700 text-center">
                No notifications
              </p>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderAdmin;
