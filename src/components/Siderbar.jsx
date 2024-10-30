import { Link } from "react-router-dom"


export const Siderbar = () => {
  return (
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
          <Link to="/mybank">My Banks</Link>  
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
  )
}
