import { useState } from "react";
import { Siderbar } from "./Siderbar";
import { Rightbar } from "./Rightbar";
import { Transcript } from "./Transcript";
import { GiHamburgerMenu } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
export const Dashboard = ({name, Active,openSideBar}) => {
  const [active, setIsactive] = useState("chase");
  return (
    <div className="lg:grid lg:grid-cols-custom overflow-x-hidden relative">
      <Siderbar Active={Active} />
      <p onClick={openSideBar} className="absolute right-4 top-0 text-black cursor-pointer lg:hidden block">
        <GiHamburgerMenu  />
      </p>

      <div className="p-5  ">
        <div>
          <p className="font-inter font-[600] text-[1.9rem]">
            Welcome,{" "}
            <span className="bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent">
              {name}
            </span>
          </p>
          <p className="font-inter text-[#475467] font-[400] text-[16px]">
            Access & manage your account and transactions efficiently.
          </p>
        </div>

        <div className="p-[24px] rounded-[12px] border-[1px] border-[#eaecf0] w-full mt-10 shadow-sm flex justify-between">
          <div className="flex items-center gap-4 w-full">
            <img src="pie.svg" alt="" />
            <div className="flex flex-col gap-4 w-[80%]">
              <span className="lg:flex lg:justify-between md:flex md:justify-between">
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
                <p className="font-inter lg:font-[600] text-[#101828] lg:text-[1.9rem] text-base font-medium md:font-semibold md:text-[1.9rem]">
                  $2,698.12
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <span className="lg:flex-row lg:items-center lg:justify-between flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="font-inter font-[600] text-[#101828] text-[1.5rem] bg-special-gradient">
              Recent transactions
            </p>
            <button className="py-[10px] px-[16px] rounded-[8px] border-[1px] border-[#d0d5dd] font-inter font-[600] text-[#344054] text-[0.9rem] lg:flex lg:items-start">
              View all
            </button>
          </span>
        </div>

        <div className="flex items-center gap-10 cursor-pointer flex-wrap mt-3">
          <p
            onClick={() => setIsactive("chase")}
            className={`"font-inter lg:font-[600] font-medium text-sm lg:text-[1rem] text-[#667065] ${
              active === "chase"
                ? "border-b-[3px] border-[#0179fe] bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent p-2"
                : ""
            } text-nowrap `}
          >
            Chase Bank
          </p>
          <p
            onClick={() => setIsactive("america")}
            className={`font-inter lg:font-[600] text-nowrap lg:text-[1rem] font-medium text-sm text-[#667065] ${
              active === "america"
                ? "border-b-[3px] border-[#0179fe] bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent p-2"
                : ""
            }`}
          >
            Bank Of America
          </p>
          <p
            onClick={() => setIsactive("first")}
            className={`font-inter lg:font-[600] font-medium text-sm text-nowrap lg:text-[1rem] text-[#667065] ${
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
         <Transcript/>
        </div>
      </div>
      {/* third grid */}
      <Rightbar/>
    </div>
  );
};
