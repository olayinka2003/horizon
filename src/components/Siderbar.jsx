import { AiFillHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export const Siderbar = ({Active}) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
  
      <div className={`lg:flex lg:flex-col lg:justify-center lg:gap-10 lg:border-r-2 lg:p-2 lg:mb-20 ${Active?"hidden":"block"} `}>
        <div className="flex items-center gap-1">
          <img src="logo.svg" alt="Horizon logo" />
          <p className="font-inter text-[1.5rem] text-[#00214f] font-[500]">
            Horizon
          </p>
        </div>
        
        <div className="rounded-[8px] py-[8px] px-[10px] border-[1px] border-[#d0d5dd] w-full flex items-center space-x-1 cursor-pointer">
          <img src="search.svg" alt="Search icon" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full text-sm"
          />
        </div>

        <ul className="cursor-pointer">
          <li
            className={`flex items-center gap-1 py-4 px-3 rounded-md ${
              isActive("/dashboard")
                ? "bg-gradient-to-r from-[#0179FE] to-[#4893FF] text-white"
                : "bg-transparent"
            }`}
          >
            {isActive("/dashboard") ? (
              <img src="home.svg" alt="Home icon" />
            ) : (
              <AiFillHome />
            )}
            <Link to="/dashboard">Home</Link>
          </li>

          <li
            className={`flex items-center gap-1 py-4 px-3 rounded-md ${
              isActive("/mybank")
                ? "bg-gradient-to-r from-[#0179FE] to-[#4893FF] text-white"
                : "bg-transparent"
            }`}
          >
            <img src="dollar-circle.svg" alt="Bank icon" />
            <Link to="/mybank">My Banks</Link>
          </li>

          <li
            className={`flex items-center gap-1 py-[16px] px-[12px] rounded-[6px] ${
              isActive("/mytransactions")
                ? "bg-gradient-to-r from-[#0179FE] to-[#4893FF] text-white"
                : "bg-transparent"
            }`}
          >
            <img src="receipt.svg" alt="Transaction History icon" />
            <Link to="/mytransactions">Transaction History</Link>
          </li>

          <li
            className={`flex items-center gap-1 py-[16px] px-[12px] rounded-[6px] ${
              isActive("/payment")
                ? "bg-gradient-to-r from-[#0179FE] to-[#4893FF] text-white"
                : "bg-transparent"
            }`}
          >
            <img src="money.svg" alt="Payment Transfer icon" />
            <Link to="/payment">Payment Transfer</Link>
          </li>

          <li className="flex items-center gap-1 py-[16px] px-[12px] rounded-[6px]">
            <img src="card.svg" alt="Connect Bank icon" />
            Connect Bank
          </li>
        </ul>

        <div className="border-t-2 flex items-center justify-between mt-[21.5rem]">
          <img src="Avatar.svg" alt="User avatar" />
          <span className="space-y-2">
            <p>Adrian Hajdin</p>
            <p>adrian@jsmastery.pro</p>
          </span>
          <Link to="/">
            <img src="log-out.svg" alt="Log out icon" />
          </Link>
        </div>
      </div>
    )
  
};
