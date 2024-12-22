"use client";

const NavItem = ({ imgSrc, message, selected }) => {
  console.log(selected);
  return (
    <a
      className={`flex px-6 py-3 rounded-md mx-3 gap-4 ${
        selected ? "bg-[#1570EF]" : "bg-white"
      }
        ${selected ? "text-white" : "text-black"}
        font-[600]
        
      `}
      href=""
    >
      <img
        className={`${
          selected ? "" : "invert"
        } w-[20px] h-[18px] text-[#414651]`}
        src={`${imgSrc}`}
      />

      <p className="text-sm">{`${message}`}</p>
    </a>
  );
};

const RepositoryDashboard = () => {
  return (
    <div className="grid grid-cols-12  bg-[#E9EAEB] text-[#181D27]">
      {/* left navigation bar */}
      <div className="h-screen col-span-2 bg-white border-r-[1px] border-[#E9EAEB]">
        <nav className="flex flex-col gap-1 h-full justify-between">
          {/* heading and logo */}
          <div className="mt-2 flex flex-col gap-2 justify-between">
            <div className="flex gap-4 p-3">
              <img src="./logo_small.png" />
              <p className="font-Satoshi  text-[24px]">CodeAnt AI</p>
            </div>

            <div>
              <select
                name="userDetails"
                className="pr-14 mx-4 py-2 border-[#E9EAEB] border-[1px] rounded-md focus:outline-none  focus:ring-0"
              >
                <option value="username">Pradeep Sahu...</option>
                <option value="Profile">Profile</option>
              </select>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <NavItem
                imgSrc={`./home.png`}
                message={`Repositories`}
                selected={`${true}`}
              />
              <NavItem
                imgSrc={`./Repository/code.png`}
                message={`AI Code Review`}
              />
              <NavItem
                imgSrc={`./Repository/cloud.png`}
                message={`Cloud Security`}
              />
              <NavItem
                imgSrc={`./Repository/book.png`}
                message={`How to Use`}
              />
              <NavItem imgSrc={`./Repository/gear.png`} message={`Settings`} />
            </div>
          </div>

          <div className="flex flex-col justify-end mb-5">
            <NavItem imgSrc={`./Repository/Frame.png`} message={`Support`} />
            <NavItem imgSrc={`./Repository/sign-out.png`} message={`Logout`} />
          </div>
        </nav>
      </div>
      <div className="bg-white col-span-10 font-[inter] h-screen">
        <div className=" border-[5px] border-[#E9EAEB] my-2 py-3">
          <div className="flex justify-between mx-2 rounded-2xl">
            <div className="pb-2 px-1 ">
              <p className="font-[600] text-2xl  text-[#181D27]">
                Repositories
              </p>
              <p className="text-sm leading-[20px] font-extralight ">
                33 total repositories
              </p>
            </div>
            <div className="flex items-center gap-3 mx-2">
              <button className="bg-white text-black px-3 py-2 rounded-md border-[1px] border-[#E9EAEB] flex items-center gap-x-3">
                <img
                  className="w-[20px] h-[20px]"
                  src="./Repository/Frame_2.png"
                />
                Refresh All
              </button>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md flex items-center gap-x-3">
                <img
                  className="w-[20px] h-[20px]"
                  src="./Repository/plus.png"
                />
                <p>Add Repository</p>
              </button>
            </div>
          </div>
          <div className="mx-3">
            <button className="flex items-center border-[1px] border-[#E(EAEB)] p-1 rounded-lg ">
              <img className="px-2" src="./Repository/search.png" />
              <input
                className="px-3 py-1 pr-24 focus:outline-none "
                type="search"
                placeholder="Search Repositories"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryDashboard;
