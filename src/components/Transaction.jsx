import { Siderbar } from "./Siderbar";
import { Transcript } from "./Transcript";

export const Transaction = () => {
  return (
    <div className="lg:grid lg:grid-cols-custom2">
      <Siderbar />
      <div className="flex flex-col gap-10 p-2 ">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="font-inter font-[600] text-[1.9rem] text-[#101828]">
              Transaction history
            </p>{" "}
            <div className="rounded-[8px] py-[10px] px-[16px] border-[1px] border-[#d0d5dd] flex items-cente cursor-pointer">
              <img src="Icon.svg" alt="" />
              <select
                name="Select Account"
                id=""
                className="cursor-pointer border-none focus:outline-none font-inter font-[600] text-[0.88rem] text-[#344054] "
              >
                <option
                  value="account"
                  className="font-inter font-[600] text-[0.88rem] text-[#344054]"
                >
                  Select Account
                </option>
              </select>
            </div>
          </div>
          <p className="font-inter font-[400] text-[1rem] text-[#475467]">
            Gain insights and Track Your Transactions Over Time
          </p>
        </div>

        <div className="rounded-[12px] p-[24px] bg-[#1570ef] shadow-sm flex justify-between items-center">
          <div className="flex flex-col gap-5 justify-center">
            <p className="font-inter font-[700] text-[1.5rem] text-white">
              Chase
            </p>
            <p className="font-inter font-[400] text-[1rem] text-white">
              Chase Growth Savings Account
            </p>
            <img src="dotdot.svg" alt="" />
          </div>
          <div className="rounded-[8px] border-[1px] p-[16px] border-[#FFFFFF80] bg-[#FFFFFF4D] shadow-lg font-inter space-y-2 blur-[0.5px]">
            <p className="font-[500] text-white text-[0.88rem]">
              Current Balance
            </p>
            <p className="text-white font-[600]  text-[1.5rem]">$41,382.80</p>
          </div>
        </div>

        <div className="font-inter">
          <div className="flex items-center justify-between">
            <p className="font-[600] text-[#101828] text-[1.15rem]">
              Transaction history
            </p>
            <span className="rounded-[8px] py-[10px] px-[16px] border border-[#d0d5dd] font-inter font-[600] text-[0.88rem] text-[#344054] flex items-center">
              <img src="filter-lines.svg" alt="" /> Apply filter
            </span>
          </div>
        </div>
        <Transcript />
        <div className="font-inter flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-sm text-[#475467]">
            <img src="back.svg" alt="" /> Previous
          </div>
          <div>
            <img src="numbers.svg" alt="" />
          </div>
          <div className="flex items-center gap-2 font-semibold text-sm text-[#475467]">
            <img src="arrow-right.svg" alt="" /> Next
          </div>
        </div>
      </div>
    </div>
  );
};
