import { Siderbar } from "./Siderbar";

export const Payment = () => {
  return (
    <div className="lg:grid lg:grid-cols-custom2 font-inter">
      <Siderbar />
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

        <div className="flex items-center justify-between border-b-[1px] p-2 py-5">
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

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-sm text-[#344054]">
              Transfer Note(Optional)
            </p>
            <p className="font-normal text-xs text-[#475467]">
              Please provide any additional information or instructions related
              to the transfer{" "}
            </p>
          </div>
          <div className="rounded-lg border py-3 px-[14px] border-[#d0d5dd] w-[50%] font-normal text-base text-[#10182b] flex flex-col gap-7">
            <p>Dear john,</p>
            <p>
              I hope this message finds you well. I am transferring $100 to your
              account for fun. Please confirm once you receive it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
