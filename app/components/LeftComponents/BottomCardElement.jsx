export const BottomCardElement = () => {
  return (
    <div className="drop-shadow-2xl shadow-2xl shadow-black text-[#081735] font-[inter] rounded-xl px-10 relative top-full -left-1/2 -bottom-5">
      <div className="px-10 py-5 flex justify-end gap-x-[100px]">
        <div className="left-0">
          <img src="./circle.png" />
        </div>

        <div>
          <div className="flex items-center">
            <img src="./arrow.png" />
            <p className="font-[700] text-[#0049C6]">14%</p>
          </div>
          <div className="whitespace-nowrap">
            <p className="">This week</p>
          </div>
        </div>
      </div>
      <div className=" flex-col gap-3 inline-block">
        <p className="font-[700] text-[14px] leading-[20px]">Issues Fixed</p>
        <p className="font-[700] text-[32px] leading-[32px]">500K+</p>
      </div>
    </div>
  );
};
