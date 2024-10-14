import "./BuyTokenSection.css";
import progress_dot from "../../../Assets/Icons/progres_dot.png";
import ameio_logo from "../../../Assets/Icons/ameio_logo_single.png";
import USDT_logo from "../../../Assets/Icons/USDT_logo.png";

import buyOption1 from "../../../Assets/Icons/payment-1.svg";
import buyOption2 from "../../../Assets/Icons/payment-2.svg";
import buyOption3 from "../../../Assets/Icons/payment-3.svg";
import buyOption4 from "../../../Assets/Icons/payment-4.svg";
import buyOption5 from "../../../Assets/Icons/payment-5.svg";
import buyOption6 from "../../../Assets/Icons/payment-6.svg";
import buyOption7 from "../../../Assets/Icons/payment-7.svg";
import { useState } from "react";

export default function BuyToken() {
  const [IsKeyPresent, setIsKeyPresent] = useState(false);
  const [usdtAmount, setUsdtAmount] = useState("");
  const [grtAmount, setGrtAmount] = useState("");
  const [ToggleBTN, setToggleBTN] = useState(false);

  function HandleToggleBTN() {
    if (ToggleBTN === true) setToggleBTN(false);
    else setToggleBTN(true);
  }

  const handleUsdtChange = (e) => {
    const value = e.target.value;
    setUsdtAmount(value);
    setGrtAmount(value ? value * 100 : "");
  };

  const handleGrtChange = (e) => {
    const value = e.target.value;
    setGrtAmount(value);
    setUsdtAmount(value ? value / 100 : "");
  };

  function keyPresentHandle() {
    setIsKeyPresent(!IsKeyPresent);
  }

  return (
    <>
      <div className="BuyCoin_Section_Container flex justify-evenly pt-24 pb-10 gap-8 w-full">
        <div className=" Buycoin_info_container flex flex-col gap-4 justify-center items-start w-2/5">
          <h1 className="text-start text-5xl">
          Maximize Your Rewards: Buy More, Get More Airdrop Bonuses!  </h1>

         <p className="w-[100%] text-start"> Join the AMEIO MEME presale and take advantage of our exclusive offer: the more tokens you purchase,
           the greater your airdrop bonuses. This is your chance to significantly boost your holdings and be part of a revolutionary project that's set to transform the
            meme industry. Don't miss out on this unique opportunity to maximize your investment and earn substantial rewards!
          </p>            

          <div className=" buttons flex justify-center mt-3 gap-9">
            <a href="#howToBuySection"><button>How to Buy</button></a>
            <button>Refer & Earn</button>
          </div>
        </div>

        {/* buycoin payment section */}

        <div className="payment_main_container flex flex-col justify-start items-center gap-9 pb-5 w-2/5 bg-neutral-950 rounded-2xl overflow-hidden border border-solid border-orange-800	">
          <div className="bg-neutral-800 p-1 pl-5 w-full">
            <p className="text-start font-bold text-base text-slate-400">
              Current Batch <span className="font-bold text-white">BATCH1</span>
            </p>
          </div>

          <div className="buy_coin_main_container flex flex-col items-center bg-neutral-800 w-11/12 pt-4 pb-4 rounded-xl">
            <div className="coin_Seles_graph flex flex-col items-center gap-3 p-4 w-full">
              <div className=" flex w-full">
                <section className="w-2/4 text-center">
                  <span className=" text-slate-400">Total Coin Sales USD</span>{" "}
                  <br /> $19,917,343.53
                </section>
                <section className="w-2/4 text-center border-l border-slate-600">
                  <span className=" text-slate-400">Total Coin Sold</span>{" "}
                  <br /> $8,080,400,144
                </section>
              </div>

              <div className="w-[90%] bg-black rounded-full h-9 p-0.5 border border-slate-500">
                <div
                  className=" w-[60%] h-full p-1 pl-4 top-0 left-0 rounded-full relative"
                  style={{
                    background:
                      " linear-gradient(90deg, #021CC9 0%, rgb(0, 77, 150) 46%, #3BBBF9 96%)",
                  }}
                >
                  <div className="absolute top-0 left-0 h-full w-fit pl-2 text-xs flex items-center text-slate-300">
                    Remaining 16.3M
                  </div>
                  <img loading="lazy"
                    src={progress_dot}
                    alt="progres circle"
                    className="absolute top-[50%] translate-y-[-50%] right-0 w-8 h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="buy_coin_container flex flex-col items-center gap-3 p-4 w-full">
              <div className=" flex w-full">
                <section className="w-2/4 text-center">
                  0.0045 USDT = 1 Ameio
                </section>
                <section className="w-2/4 text-center ">
                  Next Batch: 0.005
                </section>
              </div>

              {/* buy now field */}

              <div
                className="  flex justify-between mb-2 items-center h-fit p-2 pl-4 pr-4 w-[90%] rounded-md"
                style={{
                  background:
                    "linear-gradient(90deg,rgba(253,190,49,1) 1%, rgb(255, 102, 36)   60%)",
                }}
              >
                <span className="font-bold">Buy coins</span>
                <img loading="lazy"
                  src={ameio_logo}
                  alt="progres circle"
                  className="w-8 h-auto"
                />
              </div>

              {/* USDT amount input field */}

              <div className="relative mb-2 w-[90%] h-fit">
                <div className="absolute inset-y-0 start-0 mx-3 flex items-center pointer-events-none">
                  <img loading="lazy"
                    loading="lazy"
                    src={USDT_logo}
                    className="h-[30px] w-[30px]"
                    alt=""
                  />
                </div>
                <input
                  type="number"
                  id="input-group-1"
                  className="bg-zinc-600 border border-gray-300 text-black text-sm rounded-lg block w-full px-14 py-3"
                  placeholder="USDT Amount"
                  value={usdtAmount}
                  onChange={handleUsdtChange}
                />
              </div>

              {/* GRT amount input field */}

              <div className="relative mb-2 w-[90%]">
                <div className="absolute inset-y-0 start-0 mx-3 flex items-center pointer-events-none">
                  <img loading="lazy"
                    loading="lazy"
                    src={ameio_logo}
                    className="w-8 h-auto"
                    alt=""
                  />
                </div>
                <input
                  type="number"
                  id="input-group-1"
                  className="bg-zinc-600 border border-gray-300 text-black text-sm rounded-lg block w-full px-14 py-3"
                  placeholder="GRT Amount"
                  value={grtAmount}
                  onChange={handleGrtChange}
                />
              </div>

              <button
                onClick={HandleToggleBTN}
                className=" px-3  py-2 rounded-lg text-sm flex items-center bg-zinc-600 hover:bg-gray-700"
                type="button"
              >
                {" "}
                {ToggleBTN ? "Buy Now" : "Approve"}
              </button>
            </div>
          </div>

          <div className="Buy_options_container flex flex-col items-center gap-4 w-full">
            <div className=" buy_option_imges flex  flex-wrap gap-5 w-full justify-center">
              <img loading="lazy" src={buyOption1} alt="" className="w-8" />
              <img loading="lazy" src={buyOption2} alt="" className="w-8" />
              <img loading="lazy" src={buyOption3} alt="" className="w-8" />
              <img loading="lazy" src={buyOption4} alt="" className="w-8" />
              <img loading="lazy" src={buyOption5} alt="" className="w-8" />
              <img loading="lazy" src={buyOption6} alt="" className="w-8" />
              <img loading="lazy" src={buyOption7} alt="" className="w-8" />
            </div>

            <div className="special_key_container flex flex-col items-center w-full gap-4">
              <p className="w-full text-sm text-center">
                Do you have Special Referral code ?
                <span
                  onClick={keyPresentHandle}
                  className="text-blue-600 font-bold cursor-pointer"
                >
                  {IsKeyPresent ? "No" : "Yes"}
                </span>
              </p>

              <form action="submit">
                <div
                  className={`${
                    IsKeyPresent ? "none" : "hidden"
                  } flex flex-col md:flex-row items-center`}
                >
                  <input
                    type="text"
                    placeholder="Enter key"
                    className="w-full md:w-auto flex-grow p-2 mb-2 md:mb-0 md:mr-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  />
                  <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        id="banner-inner"
        className="  rounded-[10px] flex  p-5 gap-10 laptop:tablet:gap-5 flex-wrap justify-evenly "
      >
        <div
          id="banner-card"
          className="flex gap-2 flex-col items-center justify-center"
        >
          <h5 className="text-xl text-white ">User Buy Token</h5>
          <p className="text-4xl font-bold ">0</p>
        </div>
        <div className="w-[3px] h-24 tablet:hidden bg-gradient-to-b from-transparent via-gray-200    via-50% to-transparent"></div>
        <div
          id="banner-card"
          className="flex gap-2 flex-col items-center justify-center"
        >
          <h5 className="text-xl text-white ">User Release Token</h5>
          <p className="text-4xl font-bold text-primary-gradient">0</p>
        </div>
        <div className="w-[3px] h-24 tablet:hidden bg-gradient-to-b from-transparent via-gray-200    via-50% to-transparent"></div>
        <div
          id="banner-card"
          className="flex gap-2 flex-col items-center justify-center"
        >
          <h5 className="text-xl text-white ">Total Buy Token</h5>
          <p className="text-4xl  font-bold text-primary-gradient">
            3345979.00
          </p>
        </div>
        <div className="w-[3px] h-24 tablet:hidden bg-gradient-to-b from-transparent via-gray-200    via-50% to-transparent"></div>
        <div
          id="banner-card"
          className="flex gap-2 flex-col items-center justify-center"
        >
          <h5 className="text-xl text-white ">Total Buyers</h5>
          <p className="text-4xl  font-bold text-primary-gradient">27</p>
        </div>
      </div>



{/* list of stacking  */}

      <div id="ref-main" className="my-10 w-[98%]">
        <div className="mb-4 w-fit ">
          <button className="px-3 py-1 text-white rounded-3xl">
            Token Buy List
          </button>
        </div>
        <div className=" w-[100%] ">
          <div className="w-[100%] relative overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-left text-gray-300">
              <thead className="text-xs text-gray-200 uppercase bg-gray-800">
                <tr className="font-bold text-sm tracking-wider">
                  <th scope="col" className="px-6 py-3">
                    S.no. & Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Buy Token
                  </th>
                  <th scope="col" className="px-6 py-3">
                    10% Releases
                  </th>
                  <th scope="col" className="px-6 py-3">
                    90% Locked
                  </th>
                  <th scope="col" className="px-6 py-3">
                   Vesting Start
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Vesting End
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    <button  className=" px-3 py-1 text-white rounded-3xl cursor-pointer">Claim</button>
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <nav
            className="flex gap-2 items-center justify-end pt-4"
            aria-label="Table navigation"
          >
            <button
              className="px-3 h-8 text-primary-gradient font-bold bg-gray-700 border-gray-600 rounded hover:text-white hover:bg-gray-600"
              disabled=""
            >
              &lt;&lt;
            </button>
            <div className="inline-flex space-x-2 text-sm">
              <button className="px-3 h-8 border font-bold border-gray-600 rounded bg-gray-500 text-primary-gradient font-bold">
                1
              </button>
            </div>
            <button
              className="px-3 h-8 text-primary-gradient font-bold bg-gray-700 border-gray-600 rounded hover:text-white hover:bg-gray-600"
              disabled=""
            >
              &gt;&gt;
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
