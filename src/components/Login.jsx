

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Login = ({password,onClick,onChange}) => {



  return (
    <div className="lg:flex lg:items-center w-full">
    <div className="bg-[#FFFFFF] lg:w-[40%] lg:mx-auto lg:p-0 p-2 ">
      <div className="flex items-center gap-1">
        <img src="logo.svg" alt="" />{" "}
        <p className="font-inter text-[1.89rem] text-[#00214f] font-[700]">
          Horizon
        </p>
      </div>

      <div className="mt-7 space-y-3">
        <p className="font-inter font-[600] text-[2rem] text-[#101828]">
          Log in
        </p>
        <p className="font-inter font-[400] text-[1rem] text-[#475467]">
          Welcome back! Please enter your details.
        </p>
      </div>
      <form className="lg:flex lg:flex-col space-y-3 mt-7">
        <span className="flex flex-col">
        <label htmlFor="Email" className="font-inter">
          Email
        </label>
        <input
       
          type="email"
          placeholder="Enter your email"
          required
          className="bg-[#ffffff] py-[10px] px-[14px] border-[1px] border-[#d0d5dd] rounded-[8px] focus:outline-none"
        />
        </span>

        <span className="flex flex-col">
        <label htmlFor="password" className="font-inter">
          Password
        </label>
        <input
          type="password"
          onChange={(e)=>onChange(e.target.value)}
          value={password}
          placeholder="Enter your password"
          required
          className="bg-[#ffffff] py-[10px] px-[14px] border-[1px] border-[#d0d5dd] rounded-[8px] focus:outline-none"
        />
        </span>

        <button onClick={onClick} className="bg-gradient-to-r from-[#0179FE] to-[#4893FF] py-[10px] px-[14px] border-[1px] border-[#d0d5dd] rounded-[8px] text-white font-inter font-[600] text-[1rem] w-full">
        Login  
        </button>

        <p className="flex items-center gap-3 text-center justify-center">
        Dont have an account?
          <span className="bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent font-inter font-[600] text-[0.9rem]">
          <Link to="/signup">Sign up</Link>  
          </span>
        </p>
      </form>
    </div>
    <img src="Section.svg" alt="" className="w-[50%] mx-auto lg:block hidden" />
    </div>
  );
};
