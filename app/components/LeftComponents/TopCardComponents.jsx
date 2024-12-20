const Options = ({ main, message }) => {
  return (
    <div className="inline-block text-center">
      <p className="font-[700] leading-[27px]">{main}</p>
      <p className="font-[400] text-[14px]">{message}</p>
    </div>
  );
};

const TopCardElement = () => {
  return (
    <div className="drop-shadow-2xl  rounded-xl border-[1px] border-[#E9EAEB] font-[inter] text-[#081735] ">
      <div className=" flex border-b-[1px] border-[#E9EAEB] items-center pr-10 py-5">
        <img className="w-[28px] h-[31px] mx-2" src="./logo.png"></img>
        <p className="font-[700] text-[18px] leading-[27px] ">
          AI to Detect & Autofix Bad Code
        </p>
      </div>

      <div className="flex justify-between">
        <Options main={"30+"} message={"Language Support"} />
        <Options main={"10K+"} message={"Developers"} />
        <Options main={"100K+"} message={"Hours Saved"} />
      </div>
    </div>
  );
};

export default TopCardElement;
