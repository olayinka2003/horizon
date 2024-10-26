import { useState } from "react";

export const Dashboard = () => {
  const [active, setIsactive] = useState('chase');
  return (
    <div className="lg:grid lg:grid-cols-custom overflow-x-hidden">
      <div className="flex flex-col justify-center gap-10 border-r-2 p-2 ">
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

      <div className="p-5">
        <div>
            <p className="font-inter font-[600] text-[1.9rem]">Welcome, <span className="bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent">Adrian</span></p>
            <p className="font-inter text-[#475467] font-[400] text-[16px]">Access & manage your account and transactions efficiently.</p>
        </div>

        <div className="p-[24px] rounded-[12px] border-[1px] border-[#eaecf0] w-full mt-10">
       <div className="flex items-center gap-4">
        <img src="pie.svg" alt="" />
        <div className="flex flex-col gap-4 w-[80%]">
            <span className="flex justify-between">
            <p className="font-inter text-[#101828] font-[600] text-[1rem]">2 Bank Accounts</p>
            <p className="flex items-center"><img src="add.svg" alt="" /> Add bank</p>
            </span>

            <span>
                <p className="font-inter font-[500] text-[#475467] text-[0.9rem]">Total Current Balance</p>
                <p  className="font-inter font-[600] text-[#101828] text-[1.9rem]">$2,698.12</p>
            </span>
        </div>
       </div>
        </div>

        <div className="mt-10">
          <span className="flex items-center justify-between"><p className="font-inter font-[600] text-[#101828] text-[1.5rem] bg-special-gradient">Recent transactions</p> 
          <button className="py-[10px] px-[16px] rounded-[8px] border-[1px] border-[#d0d5dd]">View all</button>
          </span>
        </div>

        <div className="flex items-center gap-10 cursor-pointer">
          <p onClick={()=>setIsactive('chase')} className={`"font-inter font-[600] text-[1rem] text-[#667065] ${active=== 'chase' ? 'border-b-[3px] border-[#0179fe] bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent p-2': ''} `}>Chase Bank</p>
          <p onClick={()=>setIsactive('america')} className={`font-inter font-[600] text-[1rem] text-[#667065] ${active=== 'america' ? 'border-b-[3px] border-[#0179fe] bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent p-2': ''}`}>Bank Of America</p>
          <p onClick={()=>setIsactive('first')} className={`font-inter font-[600] text-[1rem] text-[#667065] ${active=== 'first' ? 'border-b-[3px] border-[#0179fe] bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent p-2 ': ''}`}>First Platypus Bank</p>
        </div>
        <hr  className="mt-1"/>
      </div>
    </div>
  );
};
