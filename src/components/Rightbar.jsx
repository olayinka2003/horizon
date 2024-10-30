

export const Rightbar = () => {
  return (
    <div className="border-l-[2px] p-2">
        <div className="w-full relative flex flex-col gap-14">
          <img src="color.svg" alt="" className="w-full" />
          <img src="master.svg" alt="" className="absolute top-10" />
          <div className="space-y-2">
            <p className="font-inter font-[600] text-[1.5rem] text-[#101828]">
              Adrian Hajdin
            </p>
            <p className="font-inter font-[400] text-[1rem] text-[#475467]">
              adrian@jsmastery.pro
            </p>
          </div>
        </div>
        <div className="mt-5 border-b-[1px]">
          <div className="flex items-center justify-between p-4">
            <p className="text-[#101828] font-inter font-[600] text-[1.15rem]">
              My Banks
            </p>
            <span className="font-inter font-[600] text-[0.89rem] text-[#475476] flex items-center gap-1">
              <img src="omo.svg" alt="" /> Add bank
            </span>
          </div>
          <img src="Cards.svg" alt="" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[#101828] font-inter font-[600] text-[1.15rem]">
              My budgets
            </p>
            <img src="Dropdown.svg" alt="" />
          </div>
          <div className="flex items-center gap-5 rounded-[12px] p-[16px] bg-[#f5faff]">
            <img src="sub.svg" alt="" />
            <div className="w-full flex flex-col justify-center gap-4">
              <div className="flex items-center justify-between">
                <p className="font-inter font-[500] text-[#194185] text-[0.89rem]">
                  Subscription
                </p>
                <p className="font-inter font-[400] text-[0.89rem] text-[#175cd3]">
                  $25 left
                </p>
              </div>
              <img src="blueprog.svg" alt="" />
            </div>
          </div>
          {/* second */}
          <div className="flex items-center gap-5 rounded-[12px] p-[16px] bg-[#fef6fb]">
            <img src="bag.svg" alt="" />
            <div className="w-full flex flex-col justify-center gap-4">
              <div className="flex items-center justify-between">
                <p className="font-inter font-[500] text-[#851651] text-[0.89rem]">
                  Food and booze
                </p>
                <p className="font-inter font-[400] text-[0.89rem] text-[#c11574]">
                  $120 left
                </p>
              </div>
              <img src="pinkprog.svg" alt="" />
            </div>
          </div>
          {/* third */}
          <div className="flex items-center gap-5 rounded-[12px] p-[16px] bg-[#f6fef9]">
            <img src="savings.svg" alt="" />
            <div className="w-full flex flex-col justify-center gap-4">
              <div className="flex items-center justify-between">
                <p className="font-inter font-[500] text-[#054f31] text-[0.89rem]">
                  Savings
                </p>
                <p className="font-inter font-[400] text-[0.89rem] text-[#027a48]">
                  $50 left
                </p>
              </div>
              <img src="greenprog.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
  )
}
