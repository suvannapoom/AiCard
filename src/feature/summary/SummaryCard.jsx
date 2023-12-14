import SummaryItem from "./SummaryItem";

export default function SummaryCard({ result, totalPrice }) {
  return (
    <>
      <div className="mt-[350px] flex flex-col items-center">
        <h1 className="text-white text-[72px] text-left w-full ml-8">
          YOUR ORDER
        </h1>

        <div className="w-[980px] h-[836px] mt-10 rounded-[73px] bg-white font-poppins font-extrabold">
          <div className="mb-[47px] ml-[55px] mr-[55px]">
            <div className="h-[600px] overflow-y-scroll scrollbar-hide">
              {/* Data */}
              {result &&
                result.map((el, i) => (
                  <SummaryItem
                    key={el.id}
                    name={el.name}
                    amount={el.amount}
                    price={el.price}
                  />
                ))}
            </div>

            {/* Total */}
            <div className="mt-[25px]">
              <div className="flex justify-between">
                <p className="text-[50px] w-full text-[#3B414B]">Total</p>
                <p className="text-[90px] from-[#FC904E] via-[#FF3450] to-[#FF00F8] bg-clip-text bg-gradient-to-r text-transparent">
                  {totalPrice}
                </p>
              </div>
              <div className="flex justify-end">
                <p className="uppercase text-[50px] ">thb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
