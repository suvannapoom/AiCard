import React from "react";
import Slidebar from "../layouts/Slidebar";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";
import revenueData from "../data/revenueData.json";
import HeaderAdmin from "../layouts/HeaderAdmin";
import { useTranslation } from "react-i18next";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const DashboardContainer = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ overflowY: "auto", height: "1800px" }}>
      <HeaderAdmin />
      <Slidebar />
      <div style={{ marginLeft: "400px" }}>
        <h1
          style={{
            fontSize: "60px",
            marginTop: "50px",
            animation: "fadeIn 2s ease-in-out",
            textShadow: "0px 0px 10px #805AD5", // add shadow
            color: "black", // change the color
            WebkitTextStroke: "0.5px white", // add this line
          }}
        >
          {t("dashboard.main dashboard")}
        </h1>

        <div
          className="dataCard revenueCard"
          style={{
            width: "1400px",
            height: "550px",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px #805AD5",
            marginTop: "50px",
          }}
        >
          <Line
            data={{
              labels: revenueData.map((data) => data.label),
              datasets: [
                {
                  label: "Black Card",
                  data: revenueData.map((data) => data.black),
                  backgroundColor: "#00B5D8",
                  borderColor: "#00B5D8",
                },
                {
                  label: "White card",
                  data: revenueData.map((data) => data.white),
                  backgroundColor: "#805AD5",
                  borderColor: "#805AD5",
                },
                {
                  label: "Pink card",
                  data: revenueData.map((data) => data.pink),
                  backgroundColor: "#D53F8C",
                  borderColor: "#D53F8C",
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                title: {
                  text: t("dashboard.Annual sales"),
                },
              },
              devicePixelRatio: 4,
            }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="Bar Chart"
            style={{
              width: "700px",
              height: "500px",
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              marginRight: "160px",
              marginTop: "60px",
              boxShadow: "0px 0px 10px #805AD5",
            }}
          >
            <Bar
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Count",
                    data: sourceData.map((data) => data.value),
                    backgroundColor: ["#00B5D8", "#805AD5", "#D53F8C"],
                    borderRadius: 5,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: t("dashboard.Bar"),
                  },
                },
                devicePixelRatio: 4,
                maintainAspectRatio: false,
              }}
            />
          </div>
          <div
            className="Pie Charts"
            style={{
              width: "540px",
              height: "500px",
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              marginTop: "60px",
              boxShadow: "0px 0px 10px #805AD5",
            }}
          >
            <Doughnut
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Count",
                    data: sourceData.map((data) => data.value),
                    backgroundColor: ["#00B5D8", "#805AD5", "#D53F8C"],
                    borderColor: [
                      "rgba(255, 255, 255, 0.8)",
                      "rgba(255, 255, 255, 0.8)",
                      "rgba(255, 255, 255, 0.8)",
                    ],
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: t("dashboard.Pie"),
                  },
                },
                devicePixelRatio: 4,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
