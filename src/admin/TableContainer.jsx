import React, { useEffect, useState } from "react";
import Slidebar from "../layouts/Slidebar";
import moment from "moment";
import HeaderAdmin from "../layouts/HeaderAdmin";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";

const TableContainer = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("test-sale"));

    if (data) {
      setTableData(data);
    }
  }, []);
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "tableData.xlsx");
  };

  return (
    <div>
      <HeaderAdmin />
      <Slidebar />
      <div style={{ marginLeft: "350px" }}>
        <p style={{ fontSize: "50px", marginTop: "25px" }}>
          {t("table.transactions")}
        </p>
        <table
          style={{
            width: "1500px",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#805AD5", color: "white" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                {t("table.Product")}
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                {t("table.Price")}
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                {t("table.Email")}
              </th>

              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                {t("table.Time")}
              </th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white",
                }}
              >
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {item.name || ""}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {item.price || ""}
                </td>

                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {item.email || "Guest"}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {moment(item.date).format("DD/MM/YYYY HH:mm:ss") || "Guest"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={exportToExcel}
          style={{
            backgroundColor: "yellow",
            border: "1px solid black",
            padding: "10px",
            marginRight: "30px",
            borderRadius: "10px",
            fontSize: "18px",
            position: "relative",
            left: "1380px",
            top: "20px",
          }}
        >
          {t("storage.export")}
        </button>
      </div>
    </div>
  );
};

export default TableContainer;
