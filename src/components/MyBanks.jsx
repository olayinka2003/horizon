/* eslint-disable react/prop-types */
import { GiHamburgerMenu } from "react-icons/gi";
import { Siderbar } from "./Siderbar";

export const MyBanks = ({Active,openSideBar,closeSideBar}) => {
  return (
    <div className="lg:grid lg:grid-cols-custom2 gap-5">
      <Siderbar Active={Active} closeSideBar={closeSideBar} />
      <p onClick={openSideBar} className="absolute right-4 top-0 text-black cursor-pointer lg:hidden block">
        <GiHamburgerMenu  />
      </p>
      {/* second grid */}
      <div className=" lg:flex lg:flex-col lg:justify-center gap-10 mb-64 p-4 flex flex-col">
        <div className="">
          <p className="font-inter font-[600] text-[1.9rem] text-[#101828]">
            My Bank Accounts
          </p>
          <p className="font-inter font-[400] text-[1rem] text-[#475467]">
            Effortlessly Manage Your Banking Activities
          </p>
        </div>

        <div>
          <p className="font-inter font-[600] text-[1.1rem] text-[#101828] flex items-center justify-between mb-5">
            Your Cards
            <img src="Dropdown.svg" alt="" />
          </p>
          <div className="lg:grid lg:grid-cols-3 lg:gap-10 md:grid md:grid-cols-3">
            <div>
                <img src="ATM.svg" alt="" />
                <div className="flex  flex-col gap-2 justify-center">
                    <span className="flex items-center justify-between "><p className="font-inter font-[500] text-[0.88rem] text-[#344054]">Spending this month</p> <p className="font-inter font-[400] text-[0.88rem] text-[#475467]">$2,840.40</p></span>
                    <img src="ATMPROG.svg" alt="" />
                </div>
            </div>
            <div>
                <img src="ATM.svg" alt="" />
                <div className="flex  flex-col gap-2 justify-center">
                    <span className="flex items-center justify-between "><p className="font-inter font-[500] text-[0.88rem] text-[#344054]">Spending this month</p> <p className="font-inter font-[400] text-[0.88rem] text-[#475467]">$2,840.40</p></span>
                    <img src="ATMPROG.svg" alt="" />
                </div>
            </div>
            <div>
                <img src="ATM.svg" alt="" />
                <div className="flex  flex-col gap-2 justify-center">
                    <span className="flex items-center justify-between "><p className="font-inter font-[500] text-[0.88rem] text-[#344054]">Spending this month</p> <p className="font-inter font-[400] text-[0.88rem] text-[#475467]">$2,840.40</p></span>
                    <img src="ATMPROG.svg" alt="" />
                </div>
            </div>

          </div>
          {/* newpurple */}
          <div className="lg:grid lg:grid-cols-3 gap-10 mt-10 md:grid md:grid-cols-3">
            <div>
                <img src="atms.svg" alt="" />
                <div className="flex  flex-col gap-2 justify-center">
                    <span className="flex items-center justify-between "><p className="font-inter font-[500] text-[0.88rem] text-[#344054]">Spending this month</p> <p className="font-inter font-[400] text-[0.88rem] text-[#475467]">$2,840.40</p></span>
                    <img src="atmprogs.svg" alt="" />
                </div>
            </div>
            <div>
                <img src="atms.svg" alt="" />
                <div className="flex  flex-col gap-2 justify-center">
                    <span className="flex items-center justify-between "><p className="font-inter font-[500] text-[0.88rem] text-[#344054]">Spending this month</p> <p className="font-inter font-[400] text-[0.88rem] text-[#475467]">$2,840.40</p></span>
                    <img src="atmprogs.svg" alt="" />
                </div>
            </div>
            <div>
                <img src="atms.svg" alt="" />
                <div className="flex  flex-col gap-2 justify-center">
                    <span className="flex items-center justify-between "><p className="font-inter font-[500] text-[0.88rem] text-[#344054]">Spending this month</p> <p className="font-inter font-[400] text-[0.88rem] text-[#475467]">$2,840.40</p></span>
                    <img src="atmprogs.svg" alt="" />
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
