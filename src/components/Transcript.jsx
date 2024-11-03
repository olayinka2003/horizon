export const Transcript = () => {
  return (
    <div className="mt-4 cursor-pointer">
      {/* Header */}
      <div className="py-3 px-4 border-b bg-gray-50 flex items-center gap-5 justify-between font-inter text-gray-600 font-medium text-[0.75rem] sm:text-xs md:text-sm">
        <p className="flex-1">Transaction</p>
        <p className="hidden md:block flex-1">Amount</p>
        <p className="hidden md:block flex-1">Status</p>
        <p className="hidden md:block flex-1">Date</p>
        <p className="hidden md:block flex-1">Category</p>
      </div>

      {/* First Item */}
      <div className="py-3 px-4 border-b flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 sm:justify-between">
        <div className="flex items-center gap-2 flex-1">
          <img src="spotify.svg" alt="Spotify" className="w-6 h-6" />
          <p className="font-inter font-medium text-[0.8rem] text-gray-800">Spotify</p>
        </div>
        <p className="font-inter font-semibold text-[0.8rem] text-red-500 md:flex-1">-$15.00</p>
        <span className="rounded-full py-1 px-2 bg-gray-100 text-gray-600 text-[0.75rem] sm:text-xs font-medium flex items-center gap-1 md:flex-1">
          <img src="Dot.svg" alt="Status" className="w-2 h-2" /> Processing
        </span>
        <p className="font-inter text-[0.8rem] text-gray-600 md:flex-1 hidden md:block">Wed 1:00 pm</p>
        <p className="flex items-center gap-1 border border-blue-500 rounded-full py-1 px-2 text-blue-600 text-[0.75rem] sm:text-xs font-medium md:flex-1">
          <img src="bluedot.svg" alt="Category" className="w-2 h-2" /> Subscriptions
        </p>
      </div>

      {/* Second Item */}
      <div className="py-3 px-4 border-b flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 sm:justify-between bg-green-50">
        <div className="flex items-center gap-2 flex-1">
          <img src="alexa.png" alt="Alexa Doe" className="w-6 h-6" />
          <p className="font-inter font-medium text-[0.8rem] text-gray-800">Alexa Doe</p>
        </div>
        <p className="font-inter font-semibold text-[0.8rem] text-green-600 md:flex-1">$88.00</p>
        <span className="rounded-full py-1 px-2 bg-green-100 text-green-700 text-[0.75rem] sm:text-xs font-medium flex items-center gap-1 md:flex-1">
          <img src="greendot.svg" alt="Status" className="w-2 h-2" /> Success
        </span>
        <p className="font-inter text-[0.8rem] text-gray-600 md:flex-1 hidden md:block">Wed 2:45 am</p>
        <p className="flex items-center gap-1 border border-green-500 rounded-full py-1 px-2 text-green-600 text-[0.75rem] sm:text-xs font-medium md:flex-1">
          <img src="greendot.svg" alt="Category" className="w-2 h-2" /> Deposit
        </p>
      </div>

      {/* Third Item */}
      <div className="py-3 px-4 border-b flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 sm:justify-between">
        <div className="flex items-center gap-4 flex-1">
          <img src="figma.svg" alt="Figma" className="w-6 h-6" />
          <p className="font-inter font-medium text-[0.8rem] text-gray-800">Figma</p>
        </div>
        <p className="font-inter font-semibold text-[0.8rem] text-red-500 md:flex-1">-$18.99</p>
        <span className="rounded-full py-1 px-2 bg-gray-100 text-gray-600 text-[0.75rem] sm:text-xs font-medium flex items-center gap-1 md:flex-1">
          <img src="Dot.svg" alt="Status" className="w-2 h-2" /> Processing
        </span>
        <p className="font-inter text-[0.8rem] text-gray-600 md:flex-1 hidden md:block">Tue 6:10 pm</p>
        <p className="flex items-center gap-1 border border-green-500 rounded-full py-1 px-2 text-green-600 text-[0.75rem] sm:text-xs font-medium md:flex-1">
          <img src="greendot.svg" alt="Category" className="w-2 h-2" /> Income
        </p>
      </div>

      {/* Fourth Item */}
      <div className="py-3 px-4 border-b flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 sm:justify-between bg-green-50">
        <div className="flex items-center gap-4 flex-1">
          <img src="fresh.svg" alt="Fresh F&V" className="w-6 h-6" />
          <p className="font-inter font-medium text-[0.8rem] text-gray-800">Fresh F&V</p>
        </div>
        <p className="font-inter font-semibold text-[0.8rem] text-red-500 md:flex-1">-$88.00</p>
        <span className="rounded-full py-1 px-2 bg-green-100 text-green-700 text-[0.75rem] sm:text-xs font-medium flex items-center gap-1 md:flex-1">
          <img src="greendot.svg" alt="Status" className="w-2 h-2" /> Success
        </span>
        <p className="font-inter text-[0.8rem] text-gray-600 md:flex-1 hidden md:block">Tue 12:15 pm</p>
        <p className="flex items-center gap-1 border border-blue-500 rounded-full py-1 px-2 text-blue-600 text-[0.75rem] sm:text-xs font-medium md:flex-1">
          <img src="purpledot.svg" alt="Category" className="w-2 h-2" /> Groceries
        </p>
      </div>

      {/* Fifth Item */}
      <div className="py-3 px-4 border-b flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 sm:justify-between">
        <div className="flex items-center gap-4 flex-1">
          <img src="sam.svg" alt="Sam Sulek" className="w-6 h-6" />
          <p className="font-inter font-medium text-[0.8rem] text-gray-800">Sam Sulek</p>
        </div>
        <p className="font-inter font-semibold text-[0.8rem] text-red-500 md:flex-1">-$40.20</p>
        <span className="rounded-full py-1 px-2 bg-red-100 text-red-700 text-[0.75rem] sm:text-xs font-medium flex items-center gap-1 md:flex-1">
          <img src="red.svg" alt="Status" className="w-2 h-2" /> Decline
        </span>
        <p className="font-inter text-[0.8rem] text-gray-600 md:flex-1 hidden md:block">Tue 5:40 am</p>
        <p className="flex items-center gap-1 border border-pink-500 rounded-full py-1 px-2 text-pink-600 text-[0.75rem] sm:text-xs font-medium md:flex-1">
          <img src="pink.svg" alt="Category" className="w-2 h-2" /> Food
        </p>
      </div>
    </div>
  );
};
