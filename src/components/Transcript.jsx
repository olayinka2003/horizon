

export const Transcript = () => {
  return (
    <div className="mt-4 cursor-pointer">
            <div className="py-[12px] px-[24px] border-b-[1px] bg-[#f9fafb] flex items-center gap-5 justify-between font-inter text-[#475467] font-[500] text-[0.8rem]">
              <p className="flex-1">Transaction</p>
              <p className="flex-1">Amount</p>
              <p className="flex-1">Status</p>
              <p className="flex-1">Date</p>
              <p className="flex-1">Category</p>
            </div>
            {/* first */}
            <div className="py-[12px] px-[24px] border-b-[1px] flex items-center gap-5 justify-between">
              <div className="flex items-center gap-2 flex-1">
                <img src="spotify.svg" alt="" />
                <p className="font-inter font-[500] text-[0.89rem] text-[#101828]">
                  Spotify
                </p>
              </div>
              <p className="font-inter font-[600] text-[0.89rem] text-[#f04438] flex-1">
                -$15.00
              </p>
              <span className="rounded-[16px] py-[2px] px-[8px] bg-[#f2f4f7] font-inter text-[#344054] font-[500] text-[0.85rem] flex items-center gap-1 flex-1">
                <img src="Dot.svg" alt="" /> Processing
              </span>
              <p className="font-inter font-[400] text-[0.89rem] text-[#475467] flex-1">
                Wed 1:00 pm
              </p>
              <p className="flex items-center gap-1 border-[1.5px] border-[#1570ef] rounded-[16px] py-[2px] px-[8px] font-inter font-[500] text-[0.8rem] text-[#175cd3] flex-1">
                <img src="bluedot.svg" alt="" /> Subscriptions
              </p>
            </div>

            {/* second */}
            <div className="py-[12px] px-[24px] border-b-[1px] flex items-center gap-5 justify-between bg-[#f6fef9]">
              <div className="flex items-center gap-2 flex-1">
                <img src="alexa.png" alt="" />
                <p className="font-inter font-[500] text-[0.89rem] text-[#101828]">
                  Alexa Doe
                </p>
              </div>
              <p className="font-inter font-[600] text-[0.89rem] text-[#039855] flex-1">
                $88.00
              </p>
              <span className="rounded-[16px] py-[2px] px-[8px] bg-[#ecfdf3] font-inter text-[#027a48] font-[500] text-[0.85rem] flex items-center gap-1 flex-1">
                <img src="greendot.svg" alt="" /> sucess
              </span>
              <p className="font-inter font-[400] text-[0.89rem] text-[#475467] flex-1">
                Wed 2:45 am
              </p>
              <p className="flex items-center gap-1 border-[1.5px] border-[#039855] rounded-[16px] py-[2px] px-[8px] font-inter font-[500] text-[0.8rem] text-[#027a48] flex-1">
                <img src="greendot.svg" alt="" /> Deposit
              </p>
            </div>

            {/* third */}
            <div className="py-[12px] px-[24px] border-b-[1px] flex items-center gap-5 justify-between">
              <div className="flex items-center gap-4 flex-1">
                <img src="figma.svg" alt="" />
                <p className="font-inter font-[500] text-[0.89rem] text-[#101828]">
                  Figma
                </p>
              </div>
              <p className="font-inter font-[600] text-[0.89rem] text-[#039855] flex-1">
                -$18.99{" "}
              </p>
              <span className="rounded-[16px] py-[2px] px-[8px] bg-[#f2f4f7] font-inter text-[#344054] font-[500] text-[0.85rem] flex items-center gap-1 flex-1">
                <img src="Dot.svg" alt="" /> Processing
              </span>
              <p className="font-inter font-[400] text-[0.89rem] text-[#475467] flex-1">
                Tue 6:10 pm
              </p>
              <p className="flex items-center gap-1 border-[1.5px] border-[#039855] rounded-[16px] py-[2px] px-[8px] font-inter font-[500] text-[0.8rem] text-[#027a48] flex-1">
                <img src="greendot.svg" alt="" /> income
              </p>
            </div>

            {/* fourth */}
            <div className="py-[12px] px-[24px] border-b-[1px] flex items-center gap-5 justify-between  bg-[#f6fef9]">
              <div className="flex items-center gap-4 flex-1">
                <img src="fresh.svg" alt="" />
                <p className="font-inter font-[500] text-[0.89rem] text-[#101828]">
                  Fresh F&V
                </p>
              </div>
              <p className="font-inter font-[600] text-[0.89rem] text-[#f04438] flex-1">
                -$88.00
              </p>
              <span className="rounded-[16px] py-[2px] px-[8px] bg-[#ecfdf3] font-inter text-[#027a48] font-[500] text-[0.85rem] flex items-center gap-1 flex-1">
                <img src="greendot.svg" alt="" /> success
              </span>
              <p className="font-inter font-[400] text-[0.89rem] text-[#475467] flex-1">
                Tue 12:15 pm
              </p>
              <p className="flex items-center gap-1 border-[1.5px] border-[#444ce7] rounded-[16px] py-[2px] px-[8px] font-inter font-[500] text-[0.8rem] text-[#3538cd] flex-1">
                <img src="purpledot.svg" alt="" /> Groceries
              </p>
            </div>

            {/* fifth */}
            <div className="py-[12px] px-[24px] border-b-[1px] flex items-center gap-5 justify-between">
              <div className="flex items-center gap-4 flex-1">
                <img src="sam.svg" alt="" />
                <p className="font-inter font-[500] text-[0.89rem] text-[#101828]">
                  Sam Sulek
                </p>
              </div>
              <p className="font-inter font-[600] text-[0.89rem] text-[#f04438] flex-1">
                -$40.20
              </p>
              <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fef3f2] font-inter text-[#b42318] font-[500] text-[0.85rem] flex items-center gap-1 flex-1">
                <img src="red.svg" alt="" /> Decline
              </span>
              <p className="font-inter font-[400] text-[0.89rem] text-[#475467] flex-1">
                Tue 5:40 am
              </p>
              <p className="flex items-center gap-1 border-[1.5px] border-[#dd2590] rounded-[16px] py-[2px] px-[8px] font-inter font-[500] text-[0.8rem] text-[#c11574] flex-1">
                <img src="pink.svg" alt="" /> Food
              </p>
            </div>
          </div>
  )
}
