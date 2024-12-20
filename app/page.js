"use client";

import { useState } from "react";

export default function Home() {
  const [isSelfHosted, setIsSelfHosted] = useState(false);

  const handleClick = () => {
    console.log("The status of the isSelfHosted is : " + isSelfHosted);
    setIsSelfHosted(!isSelfHosted);
  };
  return (
    <div className=" grid grid-cols-2 h-screen w-screen bg-white font-[inter]">
      <div className="grid h-full bg-white col-span-1">
        <div className="h-screen"></div>
      </div>
      {/* right layer */}
      <div className="col-span-1 grid bg-[#FAFAFA]  ">
        {/* main container */}
        <div className="border-gray-600 rounded-md  my-[100px] mx-[20px] bg-white ">
          {/* top view */}
          <div className="flex flex-col justify-center rounded-lg border-[#D5D7DA]-600 border-[1px] px-[36px] py-[24px]">
            <div className="bg-[#FFFFFF]  justify-center flex flex-col text-center gap-y-[36px] mb-[24px]">
              <div className="flex justify-center">
                <img src="./logo.png" alt="codeAnt logo" />
                <p className="text-black text-[30px]">CodeAnt AI</p>
              </div>

              <div className="inline-block">
                <p className="text-black text-[32px] leading-[48px] font-[inter] font-bold">
                  Welcome to CodeAnt AI
                </p>
              </div>
            </div>
            <div className="border-[1px] border-[#E9EAEB] rounded-md">
              <div className="grid grid-cols-2 ">
                <button
                  className={`bg-${isSelfHosted ? "[#FAFAFA]" : "[#1570EF]"} 
                    text-${isSelfHosted ? "gray-600" : "[#FAFAFA]"}
                    col-span-1  px-[14px] py-[16px] rounded-lg font-bold`}
                  onClick={handleClick}
                >
                  SAAS
                </button>
                <button
                  className={`bg-${
                    isSelfHosted ? "[#1570EF]" : "[#FAFAFA]"
                  } col-span-1 text-${
                    isSelfHosted ? "[#FAFAFA]" : "gray-600"
                  } rounded-lg font-bold`}
                  onClick={handleClick}
                >
                  Self Hosted
                </button>
              </div>
            </div>
          </div>
          {/* end of top view  */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
