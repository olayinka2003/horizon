import { useState } from "react";

export const Dashboard = () => {
  const [active, setIsactive] = useState("chase");
  return (
    <div className="lg:grid lg:grid-cols-custom overflow-x-hidden ">
      <div className="flex flex-col justify-center gap-10 border-r-2 p-2  h-screen">
        <div className="flex items-center gap-1">
          <img src="logo.svg" alt="" />{" "}
          <p className="font-inter text-[1.5rem] text-[#00214f] font-[500]">
            Horizon
          </p>
        </div>
        <div className="rounded-[8px] py-[8px] px-[10px] border-[1px] border-[#d0d5dd] w-full flex items-center space-x-1 cursor-pointer">
          <img src="search.svg" alt="" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full text-sm"
          />
        </div>

        <ul className="cursor-pointer">
          <li className="flex items-center gap-1 py-[16px] px-[12px] rounded-[6px] bg-gradient-to-r from-[#0179FE] to-[#4893FF] text-white">
            <img src="home.svg" alt="" /> Home
          </li>
          <li className="flex items-center gap-1 py-[16px] px-[12px] rounded-[6px]">
            <img src="dollar-circle.svg" alt="" />
            My Banks
          </li>
          <li className="flex items-center gap-1 py-[16px] px-[12px] rounded-[6px]">
            <img src="receipt.svg" alt="" />
            Transaction History
          </li>
          <li className="flex items-center gap-1 py-[16px] px-[12px] rounded-[6px]">
            <img src="money.svg" alt="" />
            Payment Transfer
          </li>
          <li className="flex items-center gap-1 py-[16px] px-[12px] rounded-[6px]">
            {" "}
            <img src="card.svg" alt="" />
            Connect Bank
          </li>
        </ul>

        <div className="border-t-2 flex items-center justify-between mt-10">
          <img src="Avatar.svg" alt="" />
          <span className="space-y-2">
            <p>Adrian Hajdin</p>
            adrian@jsmastery.pro
          </span>
          <img src="log-out.svg" alt="" />
        </div>
      </div>

      <div className="p-5 ">
        <div>
          <p className="font-inter font-[600] text-[1.9rem]">
            Welcome,{" "}
            <span className="bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent">
              Adrian
            </span>
          </p>
          <p className="font-inter text-[#475467] font-[400] text-[16px]">
            Access & manage your account and transactions efficiently.
          </p>
        </div>

        <div className="p-[24px] rounded-[12px] border-[1px] border-[#eaecf0] w-full mt-10 shadow-sm">
          <div className="flex items-center gap-4">
            <img src="pie.svg" alt="" />
            <div className="flex flex-col gap-4 w-[80%]">
              <span className="flex justify-between">
                <p className="font-inter text-[#101828] font-[600] text-[1rem]">
                  2 Bank Accounts
                </p>
                <p
                  className="flex items-center font-inter font-[600] text-[0.9rem] bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent gap-2
             "
                >
                  <img src="add.svg" alt="" /> Add bank
                </p>
              </span>

              <span>
                <p className="font-inter font-[500] text-[#475467] text-[0.9rem]">
                  Total Current Balance
                </p>
                <p className="font-inter font-[600] text-[#101828] text-[1.9rem]">
                  $2,698.12
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <span className="flex items-center justify-between">
            <p className="font-inter font-[600] text-[#101828] text-[1.5rem] bg-special-gradient">
              Recent transactions
            </p>
            <button className="py-[10px] px-[16px] rounded-[8px] border-[1px] border-[#d0d5dd] font-inter font-[600] text-[#344054] text-[0.9rem]">
              View all
            </button>
          </span>
        </div>

        <div className="flex items-center gap-10 cursor-pointer">
          <p
            onClick={() => setIsactive("chase")}
            className={`"font-inter font-[600] text-[1rem] text-[#667065] ${
              active === "chase"
                ? "border-b-[3px] border-[#0179fe] bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent p-2"
                : ""
            } `}
          >
            Chase Bank
          </p>
          <p
            onClick={() => setIsactive("america")}
            className={`font-inter font-[600] text-[1rem] text-[#667065] ${
              active === "america"
                ? "border-b-[3px] border-[#0179fe] bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent p-2"
                : ""
            }`}
          >
            Bank Of America
          </p>
          <p
            onClick={() => setIsactive("first")}
            className={`font-inter font-[600] text-[1rem] text-[#667065] ${
              active === "first"
                ? "border-b-[3px] border-[#0179fe] bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent p-2 "
                : ""
            }`}
          >
            First Platypus Bank
          </p>
        </div>
        <hr className="mt-1" />

        <div className="py-[20px] px-[24px] rounded-[8px] border-1px bg-[#f5faff] mt-10 cursor-pointer">
          <div className="flex items-center gap-5">
            <div className="rounded-[200px] w-[40px] h-[40px] bg-[#1570ef] text-white flex items-center justify-center font-inter font-[500] text-[1rem] gap-2">
              CB
            </div>
            <div className="w-[80%]">
              <span className="flex items-center justify-between">
                <p className="font-inter font-[600] text-[1.25rem] text-[#194185]">
                  {active === "chase"
                    ? "Chase Bank"
                    : active === "america"
                    ? "Bank Of America"
                    : active === "first"
                    ? "First Platypus Bank"
                    : ""}
                </p>

                <p className="rounded-[16px] px-[10px] py-[2px] bg-[#ecfdf3] font-inter font-[500] text-[0.9rem] text-[#027a48]">
                  savings
                </p>
              </span>
              <p className="font-inter font-[600] text-[1.15rem] text-[#1570ef]">
                $2,588.12
              </p>
            </div>
          </div>
        </div>
        <div>
          <ul className="mt-4 cursor-pointer">
            <li className="py-[12px] px-[24px] border-b-[1px] bg-[#f9fafb] flex items-center gap-5 justify-between font-inter text-[#475467] font-[500] text-[0.8rem]">
              <p className="flex-1">Transaction</p>
              <p className="flex-1">Amount</p>
              <p className="flex-1">Status</p>
              <p className="flex-1">Date</p>
              <p className="flex-1">Category</p>
            </li>
            {/* first */}
            <li className="py-[12px] px-[24px] border-b-[1px] flex items-center gap-5 justify-between">
              <div className="flex items-center gap-2 flex-1">
                <img src="spotify.svg" alt="" />
                <p className="font-inter font-[500] text-[0.89rem] text-[#101828]">
                  Spotify
                </p>
              </div>
              <p className="font-inter font-[600] text-[0.89rem] text-[#f04438] flex-1">
                -$15.00
              </p>
              <span className="rounded-[16px] py-[2px] px-[8px] bg-[#f2f4f7] font-inter text-[#344054] font-[500] text-[0.85rem] flex items-center gap-1 flex-1">
                <img src="Dot.svg" alt="" /> Processing
              </span>
              <p className="font-inter font-[400] text-[0.89rem] text-[#475467] flex-1">
                Wed 1:00 pm
              </p>
              <p className="flex items-center gap-1 border-[1.5px] border-[#1570ef] rounded-[16px] py-[2px] px-[8px] font-inter font-[500] text-[0.8rem] text-[#175cd3] flex-1">
                <img src="bluedot.svg" alt="" /> Subscriptions
              </p>
            </li>

            {/* second */}
            <li className="py-[12px] px-[24px] border-b-[1px] flex items-center gap-5 justify-between bg-[#f6fef9]">
              <div className="flex items-center gap-2 flex-1">
                <img src="alexa.png" alt="" />
                <p className="font-inter font-[500] text-[0.89rem] text-[#101828]">
                  Alexa Doe
                </p>
              </div>
              <p className="font-inter font-[600] text-[0.89rem] text-[#039855] flex-1">
                $88.00
              </p>
              <span className="rounded-[16px] py-[2px] px-[8px] bg-[#ecfdf3] font-inter text-[#027a48] font-[500] text-[0.85rem] flex items-center gap-1 flex-1">
                <img src="greendot.svg" alt="" /> sucess
              </span>
              <p className="font-inter font-[400] text-[0.89rem] text-[#475467] flex-1">
                Wed 2:45 am
              </p>
              <p className="flex items-center gap-1 border-[1.5px] border-[#039855] rounded-[16px] py-[2px] px-[8px] font-inter font-[500] text-[0.8rem] text-[#027a48] flex-1">
                <img src="greendot.svg" alt="" /> Deposit
              </p>
            </li>

            {/* third */}
            <li className="py-[12px] px-[24px] border-b-[1px] flex items-center gap-5 justify-between">
              <div className="flex items-center gap-4 flex-1">
                <img src="figma.svg" alt="" />
                <p className="font-inter font-[500] text-[0.89rem] text-[#101828]">
                  Figma
                </p>
              </div>
              <p className="font-inter font-[600] text-[0.89rem] text-[#039855] flex-1">
                -$18.99{" "}
              </p>
              <span className="rounded-[16px] py-[2px] px-[8px] bg-[#f2f4f7] font-inter text-[#344054] font-[500] text-[0.85rem] flex items-center gap-1 flex-1">
                <img src="Dot.svg" alt="" /> Processing
              </span>
              <p className="font-inter font-[400] text-[0.89rem] text-[#475467] flex-1">
                Tue 6:10 pm
              </p>
              <p className="flex items-center gap-1 border-[1.5px] border-[#039855] rounded-[16px] py-[2px] px-[8px] font-inter font-[500] text-[0.8rem] text-[#027a48] flex-1">
                <img src="greendot.svg" alt="" /> income
              </p>
            </li>

            {/* fourth */}
            <li className="py-[12px] px-[24px] border-b-[1px] flex items-center gap-5 justify-between  bg-[#f6fef9]">
              <div className="flex items-center gap-4 flex-1">
                <img src="fresh.svg" alt="" />
                <p className="font-inter font-[500] text-[0.89rem] text-[#101828]">
                  Fresh F&V
                </p>
              </div>
              <p className="font-inter font-[600] text-[0.89rem] text-[#f04438] flex-1">
                -$88.00
              </p>
              <span className="rounded-[16px] py-[2px] px-[8px] bg-[#ecfdf3] font-inter text-[#027a48] font-[500] text-[0.85rem] flex items-center gap-1 flex-1">
                <img src="greendot.svg" alt="" /> success
              </span>
              <p className="font-inter font-[400] text-[0.89rem] text-[#475467] flex-1">
                Tue 12:15 pm
              </p>
              <p className="flex items-center gap-1 border-[1.5px] border-[#444ce7] rounded-[16px] py-[2px] px-[8px] font-inter font-[500] text-[0.8rem] text-[#3538cd] flex-1">
                <img src="purpledot.svg" alt="" /> Groceries
              </p>
            </li>

            {/* fifth */}
            <li className="py-[12px] px-[24px] border-b-[1px] flex items-center gap-5 justify-between">
              <div className="flex items-center gap-4 flex-1">
                <img src="sam.svg" alt="" />
                <p className="font-inter font-[500] text-[0.89rem] text-[#101828]">
                  Spotify
                </p>
              </div>
              <p className="font-inter font-[600] text-[0.89rem] text-[#f04438] flex-1">
                -$40.20
              </p>
              <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fef3f2] font-inter text-[#b42318] font-[500] text-[0.85rem] flex items-center gap-1 flex-1">
                <img src="red.svg" alt="" /> Decline
              </span>
              <p className="font-inter font-[400] text-[0.89rem] text-[#475467] flex-1">
                Tue 5:40 am
              </p>
              <p className="flex items-center gap-1 border-[1.5px] border-[#dd2590] rounded-[16px] py-[2px] px-[8px] font-inter font-[500] text-[0.8rem] text-[#c11574] flex-1">
                <img src="pink.svg" alt="" /> Food
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* third grid */}
      <div className="border-l-[2px] p-2 ">
        <div className="w-full relative flex flex-col gap-14">
          <img src="color.svg" alt="" className="w-full" />
          <img src="master.svg" alt="" className="absolute top-10" />
          <div className="space-y-2">
            <p className="font-inter font-[600] text-[1.5rem] text-[#101828]">
              Adrian Hajdin
            </p>
            <p className="font-inter font-[400] text-[1rem] text-[#475467]">
              adrian@jsmastery.pro
            </p>
          </div>
        </div>
        <div className="mt-5 border-b-[1px]">
          <div className="flex items-center justify-between p-4">
            <p className="text-[#101828] font-inter font-[600] text-[1.15rem]">
              My Banks
            </p>
            <span className="font-inter font-[600] text-[0.89rem] text-[#475476] flex items-center gap-1">
              <img src="omo.svg" alt="" /> Add bank
            </span>
          </div>
          <img src="Cards.svg" alt="" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[#101828] font-inter font-[600] text-[1.15rem]">
              My budgets
            </p>
            <img src="Dropdown.svg" alt="" />
          </div>
          <div className="flex items-center gap-5 rounded-[12px] p-[16px] bg-[#f5faff]">
            <img src="sub.svg" alt="" />
            <div className="w-full flex flex-col justify-center gap-4">
              <div className="flex items-center justify-between">
                <p className="font-inter font-[500] text-[#194185] text-[0.89rem]">Subscription</p>
                <p className="font-inter font-[400] text-[0.89rem] text-[#175cd3]">$25 left</p>
              </div>
              <img src="blueprog.svg" alt="" />
            </div>
          </div>
          {/* second */}
          <div className="flex items-center gap-5 rounded-[12px] p-[16px] bg-[#fef6fb]">
            <img src="bag.svg" alt="" />
            <div className="w-full flex flex-col justify-center gap-4">
              <div className="flex items-center justify-between">
                <p className="font-inter font-[500] text-[#851651] text-[0.89rem]">Food and booze</p>
                <p className="font-inter font-[400] text-[0.89rem] text-[#c11574]">$120 left</p>
              </div>
              <img src="pinkprog.svg" alt="" />
            </div>
          </div>
          {/* third */}
          <div className="flex items-center gap-5 rounded-[12px] p-[16px] bg-[#f6fef9]">
            <img src="savings.svg" alt="" />
            <div className="w-full flex flex-col justify-center gap-4">
              <div className="flex items-center justify-between">
                <p className="font-inter font-[500] text-[#054f31] text-[0.89rem]">Savings</p>
                <p className="font-inter font-[400] text-[0.89rem] text-[#027a48]">$50 left</p>
              </div>
              <img src="greenprog.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
