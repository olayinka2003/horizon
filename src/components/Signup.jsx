
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export const Signup = ({name,onChange,onClick}) => {
 

  return (
    <div className="bg-[#FFFFFF] lg:w-[50%] lg:m-auto p-2 ">
      <div className="flex items-center gap-1">
        <img src="logo.svg" alt="" />{" "}
        <p className="font-inter text-[1.89rem] text-[#00214f] font-[700]">
          Horizon
        </p>
      </div>

      <div className="mt-7 space-y-3">
        <p className="font-inter font-[600] text-[2rem] text-[#101828]">
          Sign Up
        </p>
        <p className="font-inter font-[400] text-[1rem] text-[#475467]">
          Please enter your details.
        </p>
      </div>

      <form className="lg:flex lg:flex-col space-y-2 mt-7 p-2 flex flex-col justify-center gap-5">
        <div className="lg:flex lg:items-center lg:justify-between space-y-2">
          <span className="flex flex-col lg:w-[45%]">
            <label htmlFor="First Name" className="font-inter">
              First Name
            </label>
            <input
            value={name}
            onChange={(e)=>onChange(e.target.value)}
             
              type="name"
              required
             
              className="border-[1px] border-[#d0d5dd] py-[10px] px-[14px] rounded-[8px] focus:outline-none"
            />
          </span>
          <span className="flex flex-col lg:w-[45%]">
            <label htmlFor="Last Name" className="font-inter">
              Last Name
            </label>
            <input
              type="name"
              required
              placeholder="ex:Doe"
              className="border-[1px] border-[#d0d5dd] py-[10px] px-[14px] rounded-[8px] focus:outline-none"
            />
          </span>
        </div>
        <span className="flex flex-col">
        <label htmlFor="Address" className="font-inter">
          Address
        </label>
        <input
          type="text"
          className="border-[1px] border-[#d0d5dd] py-[10px] px-[14px] rounded-[8px] focus:outline-none"
          required
        />
        </span>
      

        <div className="lg:flex lg:items-center lg:justify-between space-y-2">
          <span className="flex flex-col lg:w-[45%]">
            <label htmlFor="State" className="font-inter">
              State
            </label>
            <input
              type="name"
              placeholder="ex: NY"
              required
              className="border-[1px] border-[#d0d5dd] py-[10px] px-[14px] rounded-[8px] focus:outline-none"
            />
          </span>
          <span className="flex flex-col lg:w-[45%]">
            <label htmlFor="Postal Code" className="font-inter">
              Postal Code
            </label>
            <input
              type="name"
              required
              placeholder="ex:11101"
              className="border-[1px] border-[#d0d5dd] py-[10px] px-[14px] rounded-[8px] focus:outline-none"
            />
          </span>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between space-y-2">
          <span className="flex flex-col lg:w-[45%] w-full">
            <label htmlFor="Date Of Birth" className="font-inter">
              Date Of birth
            </label>
            <input
              type="date"
              placeholder="ex: yyyy-mm-dd"
              required
              className="border-[1px] border-[#d0d5dd] py-[10px] px-[14px] rounded-[8px] focus:outline-none w-full"
            />
          </span>
          <span className="flex flex-col lg:w-[45%]">
            <label htmlFor="SSN" className="font-inter">
              SSN
            </label>
            <input
              type="name"
              required
              placeholder="ex:1234"
              className="border-[1px] border-[#d0d5dd] py-[10px] px-[14px] rounded-[8px] focus:outline-none"
            />
          </span>
        </div>
       <span className="flex flex-col">
        <label htmlFor="Email" className="font-inter">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="border-[1px] border-[#d0d5dd] py-[10px] px-[14px] rounded-[8px] focus:outline-none"
          required
        />
        </span>
        <button
        onClick={onClick}
          className="bg-gradient-to-r from-[#0179FE] to-[#4893FF] py-[10px] px-[14px] border-[1px] border-[#d0d5dd] rounded-[8px] text-white font-inter font-[600] text-[1rem] w-full"
        >
          Sign Up
        </button>
        <p className="flex items-center gap-3 text-center justify-center">
          Already have an account?
          <span className="bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text text-transparent font-inter font-[600] text-[0.9rem]">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};
