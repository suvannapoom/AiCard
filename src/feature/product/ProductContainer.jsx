import { useNavigate } from "react-router-dom";
import {
  useProduct,
  initialStand,
  initialCustom,
} from "../../context/ProductContextProvider";
import Header from "../../layouts/Header";
import ProductStandVersion from "./ProductStandVersion";
import { formatPrice } from "../../utils/formatprice";
import { sumPrice } from "../../utils/sumprice";
import { useEffect } from "react";

export default function ProductContainer() {
  const navigate = useNavigate();

  const {
    stand,
    setStand,
    custom,
    setCustom,
    setAllProduct,
    isNavigateToProductPageAgin,
    setIsNavigateToProductPageAgin,
  } = useProduct();

  const product = [...stand, ...custom];
  const handleCountStand = (i, check) => {
    if (stand[i].amount <= 0 && check === -1) return;

    const updateQuantity = [...stand];
    updateQuantity[i].amount += check;
    setStand(updateQuantity);
  };

  const handleCountCustom = (i, check) => {
    if (custom[i].amount <= 0 && check === -1) return;
    const updateQuantity = [...custom];
    updateQuantity[i].amount += check;
    setCustom(updateQuantity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [...stand, ...custom];
    const result = newData.filter((el) => el.amount > 0);
    if (result.length <= 0) return;
    const totalPrice = sumPrice(result);
    const formatTotalPrice = formatPrice(totalPrice);
    const productDetail = { result, totalPrice: formatTotalPrice };
    setAllProduct(productDetail);
    navigate("/summary");
  };

  const totalPrice = sumPrice(product);
  const formatTotalPrice = formatPrice(totalPrice);

  useEffect(() => {
    if (!isNavigateToProductPageAgin) return;
    initialStand.reduce((acc, cur) => {
      const check = initialStand.some((el) => el.amount > 0);
      if (cur.amount > 0) {
        if (check) cur.amount = 0;
      }
      if (cur.amount <= 0 || !check) {
        acc.push(cur);
      }
      return acc;
    }, []);
    initialCustom.reduce((acc, cur) => {
      const check = initialCustom.some((el) => el.amount > 0);
      if (cur.amount > 0) {
        if (check) cur.amount = 0;
      }
      if (cur.amount <= 0 || !check) {
        acc.push(cur);
      }
      return acc;
    }, []);
    setIsNavigateToProductPageAgin(false);
  }, [isNavigateToProductPageAgin]);
  return (
    <div className="flex flex-col justify-between overflow-y-scroll scrollbar-hide">
      <Header text="SELECT CARD" />
      <form
        className="bg-[#363636]  w-[2160px] h-[3840px] pt-[200px]  flex flex-col items-center justify-between pb-[200px]"
        onSubmit={handleSubmit}
      >
        <div
          className=" font-bold text-[24px]  "
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <div className="grid grid-cols-3 mx-auto gap-x-11 w-[100%] pt-[300px]">
            {stand.map((el, i) => (
              <div
                className="w-[650px] h-[1250px] p-4 rounded-[26px]"
                style={{
                  background:
                    "linear-gradient(170deg, rgba(175, 130, 111, 0.50) 1.32%, rgba(81, 81, 81, 0.00) 54.28%, rgba(147, 112, 152, 0.50) 101%)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <ProductStandVersion
                  key={el.name}
                  name={el.name}
                  price={el.price}
                  onClickPlus={() => handleCountStand(i, 1)}
                  onClickNe={() => handleCountStand(i, -1)}
                  amount={el.amount}
                  imgFront={el.imgFront}
                  imgBack={el.imgBack}
                  imgLeft={el.imgLeft}
                  imgRight={el.imgRight}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center h-screen space-x-48">
          <div className="text-[110px] text-[#B4B4B4]">
            TOTAL :{" "}
            <span className="w-[190px] text-center text-[#F95E72]">
              {formatTotalPrice}
            </span>{" "}
            THB
          </div>

          <button
            className="text-[130px] text-white rounded-[100px]"
            style={{
              width: "500px",
              background:
                "linear-gradient(98deg, #FC904E 43.67%, #FF3450 81.09%, #FF00F8 118.51%)",
              boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.25)",
            }}
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
}
