import { Siderbar } from "./Siderbar";

export const Payment = ({Active}) => {
  return (
    <div className="lg:grid lg:grid-cols-custom3 font-inter">
      <Siderbar Active={Active}/>
      <div className="p-2 flex flex-col gap-5">
        <div className="font-inter flex flex-col gap-10 border-b-[1px] p-2">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-3xl text-[#101828]">
              Payment Transfer
            </h1>
            <p className="font-normal text-base text-[#475467]">
              Please provide any specific details or notes related to the
              payment transfer
            </p>
          </div>

          <div className="font-inter flex items-center justify-between">
            <span className="flex flex-col gap-3">
              <p className="font-semibold text-[#101828] text-lg">
                Transfer details
              </p>
              <p className="font-normal text-sm text-[#475467]">
                Enter the details of the recipient
              </p>
            </span>

            <img src="Dropdown.svg" alt="" />
          </div>
        </div>

        <div className="lg:flex-row flex flex-col gap-2 justify-center lg:items-center lg:justify-between border-b-[1px] p-2 py-5">
          <div>
            <p className="font-medium text-sm text-[#344054]">
              Select Source Bank
            </p>
            <p className="font-normal text-xs text-[#475467]">
              Select the bank account you want to transfer funds from
            </p>
          </div>
          <div className="rounded-[8px] py-[10px] px-[16px] border-[1px] border-[#d0d5dd] flex items-cente cursor-pointer w-[80%]">
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

        <div className="lg:flex-row flex flex-col gap-2 justify-center lg:items-center lg:justify-between border-b-[1px] py-3">
          <div>
            <p className="font-medium text-sm text-[#344054]">
              Transfer Note(Optional)
            </p>
            <p className="font-normal text-xs text-[#475467]">
              Please provide any additional information or instructions related
              to the transfer{" "}
            </p>
          </div>
          <div className="rounded-lg border py-3 px-[14px] border-[#d0d5dd] lg:w-[50%] font-normal text-base text-[#10182b] flex flex-col gap-7">
            <p>Dear john,</p>
            <p>
              I hope this message finds you well. I am transferring $100 to your
              account for fun. Please confirm once you receive it.
            </p>
          </div>
        </div>
        <div className="font-inter border-b-[1px] py-3 flex flex-col gap-3">
            <p className="font-semibold text-lg text-[#101828]">Bank account details</p>
            <p className="font-normal text-sm text-[#475467]">Enter the bank account details of the recipient</p>
        </div>

        <div className="font-inter border-b-[1px] py-3 lg:flex-row lg:justify-between lg:items-center flex flex-col justify-center gap-2">
         <p className="font-medium text-sm text-[#344054]">Recipient&apos;s Email Address </p>
         <input type="email" placeholder="John@gmail.com " className="border-[1px] border-[#d0d5dd] py-[10px] px-[14px] rounded-[8px] focus:outline-none lg:w-[50%]" />
        </div>
        <div className="font-inter border-b-[1px] py-3 lg:flex-row lg:justify-between lg:items-center flex flex-col justify-center gap-2">
         <p className="font-medium text-sm text-[#344054]">Recipient&apos;s Bank Account Number </p>
         <input type="email" placeholder="Enter the account number" className="border-[1px] border-[#d0d5dd] py-[10px] px-[14px] rounded-[8px] focus:outline-none lg:w-[50%]" />
        </div> 
        <div className="font-inter border-b-[1px] py-3 lg:flex-row lg:justify-between lg:items-center flex flex-col justify-center gap-2">
         <p className="font-medium text-sm text-[#344054]">Amount </p>
         <input type="email" placeholder="40000" className="border-[1px] border-[#d0d5dd] py-[10px] px-[14px] rounded-[8px] focus:outline-none lg:w-[50%]" />
        </div>

        <button className="rounded-lg py-[14px] px-4 shadow-lg text-white  bg-gradient-to-r from-[#0179FE] to-[#4893FF]  text-sm font-semibold ">Transfer Funds</button>
      </div>
    </div>
  );
};
