import React, { createContext, useContext, useEffect, useState } from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card_pink_b from "../assets/card_pink_b.png";
import card_pink_f from "../assets/card_pink_f.png";
import card41 from "../assets/card41.png";
import card42 from "../assets/card42.png";
import card51 from "../assets/card51.png";
import card52 from "../assets/card52.png";
import card61 from "../assets/card61.png";
import card62 from "../assets/card62.png";
import * as paymentService from "../api/payment-api";

const ProductContext = createContext();
export const initialStand = [
  {
    id: "1",
    materialID: "DB52B2D9-D779-4DF2-9191-C65BF6BEFBE6",
    name: "BLACK CARD STANDARD",
    materialName: "Aicard Original Black",
    amount: 1,
    price: 599,
    imgFront: card1,
    imgBack: card1,
  },
  {
    id: "2",
    materialID: "5A3640A6-365C-4126-AABA-6AD73DF1DC2C",
    name: "WHITE CARD STANDARD",
    materialName: "Aicard White Gold",
    amount: 1,
    price: 599,
    imgFront: card2,
    imgBack: card2,
  },
  {
    id: "3",
    materialID: "7ADE910A-3217-4563-85CC-0055D77106A7",
    name: "PINK CARD STANDARD",
    materialName: "Aicard Pink Sakura",
    amount: 1,
    price: 599,
    imgFront: card_pink_f,
    imgBack: card_pink_b,
  },
];
export const initialCustom = [
  {
    id: "4",
    materialID: "905E6DC2-43BE-4432-A932-47852A3DF51F",
    materialName: "Card Custom",
    name: "CUSTOM CARD 1",
    amount: 0,
    price: 888,
    imgTop: card51,
    imgBottom: card52,
  },
  {
    id: "5",
    materialID: "905E6DC2-43BE-4432-A932-47852A3DF51F",
    materialName: "Card Custom",
    name: "CUSTOM CARD 2",
    amount: 0,
    price: 888,
    imgTop: card61,
    imgBottom: card62,
  },
  {
    id: "6",
    materialID: "905E6DC2-43BE-4432-A932-47852A3DF51F",
    materialName: "Card Custom",
    name: "สายมูการเงิน เรียกทรัพย์ CUSTOM",
    amount: 0,
    price: 888,
    imgExample1: card42,
    imgExample2: card41,
  },
];
export default function ProductContextProvider({ children }) {
  const [stand, setStand] = useState(initialStand);
  const [custom, setCustom] = useState(initialCustom);
  const [allProduct, setAllProduct] = useState([]);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [orderNo, setOrderNo] = useState(null);
  const [isNavigateToProductPageAgin, setIsNavigateToProductPageAgin] =
    useState(false);

  const handleSendCardList = async (cardList) => {
    try {
      const res = await paymentService.payment(cardList);

      if (res.data.orderNumber) {
        setOrderNo(res.data.orderNumber);
      }

      if (res.data.responsePaymentData.url)
        setPaymentUrl(res.data.responsePaymentData.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        stand,
        setStand,
        custom,
        setCustom,
        allProduct,
        setAllProduct,
        handleSendCardList,
        paymentUrl,
        setPaymentUrl,
        orderNo,
        isNavigateToProductPageAgin,
        setIsNavigateToProductPageAgin,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => {
  const ctx = useContext(ProductContext);
  return ctx;
};

export { useProduct };
