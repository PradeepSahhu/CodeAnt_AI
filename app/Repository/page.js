"use client";

const NavItem = ({ imgSrc, message, selected }) => {
  console.log(selected);
  return (
    <a
      className={`flex px-6 py-3 rounded-md mx-3 gap-4 ${
        selected ? "bg-[#1570EF]" : "bg-white"
      }
        text-${selected ? "white" : "black"}
        font-[600]
        
      `}
      href=""
    >
      <img
        className={`${selected ? "" : "invert"} w-[20px] h-[18px]`}
        src={`${imgSrc}`}
      />
      <p className="text-sm">{`${message}`}</p>
    </a>
  );
};

const RepositoryDashboard = () => {
  return (
    <div className="grid grid-cols-12  bg-white text-[#181D27]">
      {/* left navigation bar */}
      <div className="h-screen col-span-2 bg-white border-r-[1px] border-[#E9EAEB]">
        <nav className="flex flex-col justify-center gap-1">
          {/* heading and logo */}
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex gap-4 p-3">
              <img src="./logo_small.png" />
              <p className="font-Satoshi  text-[24px]">CodeAnt AI</p>
            </div>

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
            <NavItem imgSrc={`./Repository/book.png`} message={`How to Use`} />
          </div>
        </nav>
      </div>
      <div className="bg-white col-span-10">
        <div className="rounded-md border-[5px] border-gray-800 "></div>
      </div>
    </div>
  );
};

export default RepositoryDashboard;
