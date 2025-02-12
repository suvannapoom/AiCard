import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Slidebar from "../layouts/Slidebar";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card_pink_f from "../assets/card_pink_f.png";
import * as XLSX from "xlsx";
import HeaderAdmin from "../layouts/HeaderAdmin";
import moment from "moment";
import { useTranslation } from "react-i18next";

function StorageContainer() {
  const [blackCardCount, setBlackCardCount] = useState(0); // จำนวน black card ในสต็อก
  const [whiteCardCount, setWhiteCardCount] = useState(0); // จำนวน white card ในสต็อก
  const [pinkCardCount, setPinkCardCount] = useState(0); // จำนวน pink card ในสต็อก
  const [lastUpdated, setLastUpdated] = useState(null); // วันและเวลาที่อัพเดทล่าสุด
  const [addedItems, setAddedItems] = useState([]); // รายการสินค้าที่เพิ่ม
  const [isUpdatedStock, setIsUpdatedStock] = useState(false);

  useEffect(() => {
    const currentStock = JSON.parse(localStorage.getItem("cardStock"));

    if (!currentStock) return;

    setBlackCardCount(Number(currentStock.blackCard));
    setWhiteCardCount(Number(currentStock.whiteCard));
    setPinkCardCount(Number(currentStock.pinkCard));

    if (addedItems) setAddedItems(addedItems);
    const loadedItems = JSON.parse(localStorage.getItem("stockHistory"));
    if (loadedItems) {
      setAddedItems(loadedItems);
      setLastUpdated(
        moment(loadedItems[loadedItems.length - 1].time).format(
          "DD/MM/YYYY HH:mm:ss"
        )
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("stockHistory", JSON.stringify(addedItems));
  }, [addedItems]);
  const {
    register,

    handleSubmit,
    reset, // Add this line
    formState: { errors },
  } = useForm({
    defaultValues: {
      blackCard: 0,
      whiteCard: 0,
      pinkCard: 0,
    },
  });

  const exportToExcel = () => {
    //แปลงข้อมูลที่อัพเดทไปเป็น excel
    const ws = XLSX.utils.json_to_sheet(addedItems);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "update_history.xlsx");
  };

  const onSubmit = (data) => {
    console.log(data);
    const newBlackCardCount = blackCardCount + Number(data.blackCard);
    const newWhiteCardCount = whiteCardCount + Number(data.whiteCard);
    const newPinkCardCount = pinkCardCount + Number(data.pinkCard);
    setBlackCardCount(newBlackCardCount);
    setWhiteCardCount(newWhiteCardCount);
    setPinkCardCount(newPinkCardCount);
    const now = new Date();
    setLastUpdated(now); // อัพเดทวันและเวลาที่อัพเดทล่าสุด

    const obj = {
      blackCard: newBlackCardCount,
      whiteCard: newWhiteCardCount,
      pinkCard: newPinkCardCount,
    };

    localStorage.setItem("cardStock", JSON.stringify(obj));

    // localStorage.setItem("blackCardCount", newBlackCardCount);
    // localStorage.setItem("whiteCardCount", newWhiteCardCount);
    // localStorage.setItem("pinkCardCount", newPinkCardCount);
    // localStorage.setItem("lastUpdated", now.toString());
    // localStorage.setItem(
    //   "addedItems",
    //   JSON.stringify([...addedItems, ...newItems])
    // );

    const newItems = [];
    if (data.blackCard !== 0)
      newItems.push({ item: `Black Card: ${newBlackCardCount}`, time: now });
    if (data.whiteCard !== 0)
      newItems.push({ item: `White Card: ${newWhiteCardCount}`, time: now });
    if (data.pinkCard !== 0)
      newItems.push({ item: `Pink Card: ${newPinkCardCount}`, time: now });
    setAddedItems([...addedItems, ...newItems]);
    reset({
      blackCard: 0,
      whiteCard: 0,
      pinkCard: 0,
    });

    setIsUpdatedStock(!isUpdatedStock);
  };
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <HeaderAdmin isUpdatedStock={isUpdatedStock} />
      <Slidebar />
      <div style={{ marginLeft: "400px" }}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              border: "2px solid white",
              borderRadius: "20px",
              padding: "30px",
              backgroundColor: "#B794F4",
              margin: "50px", // เพิ่มระยะห่างระหว่างสินค้า
              boxShadow: "0px 0px 10px black",
            }}
          >
            <img src={card1} alt="Black Card" width="300" height="300" />
            <p
              style={{
                color: "white",
                textShadow: "0 0 5px black",
                textAlign: "center",
                fontSize: "30px",
                marginTop: "20px",
              }}
            >
              {t("storage.black")} : {blackCardCount}
            </p>
            {blackCardCount === 0 ? (
              <p
                style={{
                  color: "red",
                  textShadow: "0 0 5px black",
                  textAlign: "center",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                {t("storage.out")}
              </p>
            ) : blackCardCount <= 3 ? (
              <p
                style={{
                  color: "red",
                  textShadow: "0 0 5px black",
                  textAlign: "center",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                {t("storage.low")}
              </p>
            ) : null}
          </div>
          <div
            style={{
              border: "2px solid white",
              borderRadius: "20px",
              padding: "30px",
              backgroundColor: "#B794F4",
              margin: "50px", // เพิ่มระยะห่างระหว่างสินค้า
              boxShadow: "0px 0px 10px black",
            }}
          >
            <img src={card2} alt="White Card" width="300" height="300" />
            <p
              style={{
                color: "white",
                textShadow: "0 0 10px black",
                textAlign: "center",
                fontSize: "30px",
                marginTop: "20px",
              }}
            >
              {t("storage.white")} : {whiteCardCount}
            </p>
            {whiteCardCount === 0 ? (
              <p
                style={{
                  color: "red",
                  textShadow: "0 0 5px black",
                  textAlign: "center",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                {t("storage.out")}
              </p>
            ) : whiteCardCount <= 3 ? (
              <p
                style={{
                  color: "red",
                  textShadow: "0 0 5px black",
                  textAlign: "center",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                {t("storage.low")}
              </p>
            ) : null}
          </div>
          <div
            style={{
              border: "2px solid white",
              borderRadius: "20px",
              padding: "30px",
              backgroundColor: "#B794F4",
              margin: "50px", // เพิ่มระยะห่างระหว่างสินค้า
              boxShadow: "0px 0px 10px black",
            }}
          >
            <img src={card_pink_f} alt="Pink Card" width="300" height="300" />
            <p
              style={{
                color: "white",
                textShadow: "0 0 10px black",
                textAlign: "center",
                fontSize: "30px",
                marginTop: "20px",
              }}
            >
              {t("storage.pink")} : {pinkCardCount}
            </p>
            {pinkCardCount === 0 ? (
              <p
                style={{
                  color: "red",
                  textShadow: "0 0 5px black",
                  textAlign: "center",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                {t("storage.out")}
              </p>
            ) : pinkCardCount <= 3 ? (
              <p
                style={{
                  color: "red",
                  textShadow: "0 0 5px black",
                  textAlign: "center",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                {t("storage.low")}
              </p>
            ) : null}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: "50px", // t
          }}
        >
          <div
            style={{
              backgroundColor: "#B794F4",
              border: "2px solid white",
              boxShadow: "0px 0px 10px black",
              width: "500px",
              height: "600px",
              borderRadius: "20px",
              marginTop: "50px",
            }}
          >
            <p
              style={{
                fontSize: "40px",
                marginLeft: "20px",
                color: "black",
                marginTop: "20px",
              }}
            >
              {t("storage.manage")}
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "50px",
                marginTop: "20px",
              }}
            >
              <label
                htmlFor="blackCard"
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                {t("storage.black")}
              </label>

              <input
                id="blackCard"
                type="number"
                {...register("blackCard", {
                  required: true,
                  min: +blackCardCount * -1,
                  max: 10 - +blackCardCount,
                })}
                style={{
                  width: "400px",
                  height: "50px",
                  fontSize: "25px",
                  textAlign: "center",
                  marginTop: "5px",
                }}
              />

              <label
                htmlFor="whiteCard"
                style={{ color: "white", fontSize: "25px ", marginTop: "20px" }}
              >
                {t("storage.white")}
              </label>

              <input
                id="whiteCard"
                type="number"
                {...register("whiteCard", {
                  required: true,
                  min: +whiteCardCount * -1,
                  max: 10 - +whiteCardCount,
                })}
                style={{
                  width: "400px",
                  height: "50px",
                  fontSize: "25px",
                  textAlign: "center",
                  marginTop: "5px",
                }}
              />

              <label
                htmlFor="pinkCard"
                style={{ color: "white", fontSize: "25px", marginTop: "20px" }}
              >
                {t("storage.pink")}
              </label>
              <input
                id="pinkCard"
                type="number"
                {...register("pinkCard", {
                  required: true,
                  min: +pinkCardCount * -1,
                  max: 10 - +pinkCardCount,
                })}
                style={{
                  width: "400px",
                  height: "50px",
                  fontSize: "25px",
                  textAlign: "center",
                  marginTop: "5px",
                }}
              />

              <button
                type="submit"
                style={{
                  color: "#805AD5",
                  border: "2px solid #805AD5",
                  background: "white",
                  width: "200px",
                  height: "100px",
                  fontSize: "25px",
                  borderRadius: "20px",
                  boxShadow: "0px 0px 5px black",
                  marginTop: "35px",
                  marginLeft: "90px",
                }}
              >
                {t("storage.submit")}
              </button>
            </form>
          </div>
          <div
            style={{
              width: "600px",
              height: "400px",
              backgroundColor: "#B794F4",
              border: "2px solid white",
              boxShadow: "0px 0px 10px black",
              marginTop: "50px",
              marginLeft: "120px",
              borderRadius: "20px",
            }}
          >
            <p
              style={{
                fontSize: "40px",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              {t("storage.update")}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{ fontSize: "23px", marginLeft: "20px", color: "white" }}
              >
                {t("storage.last")}:{" "}
                {lastUpdated ? lastUpdated.toLocaleString() : "Never"}
              </p>
              <button
                onClick={exportToExcel}
                style={{
                  backgroundColor: "yellow",
                  border: "1px solid black",
                  padding: "10px",
                  marginRight: "30px",
                  borderRadius: "10px",
                  fontSize: "18px",
                }}
              >
                {t("storage.export")}
              </button>
            </div>
            <div
              style={{
                maxHeight: "200px",
                maxWidth: "500px",
                overflow: "auto",
                marginTop: "10px",
                marginLeft: "20px",
                padding: "10px",
              }}
            >
              {addedItems
                .slice()
                .reverse()
                .map((item, index) => (
                  <p
                    key={index}
                    style={{ fontSize: "20px", marginLeft: "20px" }}
                  >
                    {moment(item.time).format("DD/MM/YYYY HH:mm:ss")}{" "}
                    {item.item}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorageContainer;
