"use client";

const NavItem = ({ imgSrc, message, selected }) => {
  console.log(selected);
  return (
    <a
      className={`flex px-6 py-2 rounded-md mx-3 gap-4 bg-${
        selected ? "[blue-800]" : "white"
      }`}
    >
      <img className="invert w-[20px] h-[18px]" src={`${imgSrc}`} />
      <p>{`${message}`}</p>
    </a>
  );
};

const RepositoryDashboard = () => {
  return (
    <div className="grid grid-cols-12  bg-white text-[#181D27]">
      <div className="h-screen col-span-2 bg-white border-r-[1px] border-gray-500">
        <nav className="flex flex-col justify-center">
          {/* heading and logo */}
          <div>
            <div className="flex gap-2 p-3">
              <img src="./logo_small.png" />
              <p className="font-Satoshi  text-[24px]">CodeAnt AI</p>
            </div>

            <select
              name="userDetails"
              className="pr-14 pl-3 py-2 border-gray-500 border-[1px] rounded-md focus:outline-none  focus:ring-0"
            >
              <option value="username">Pradeep Sahu</option>
              <option value="Profile">Profile</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <NavItem
              imgSrc={`./home.png`}
              message={`Repositories`}
              selected={`${true}`}
            />
            <NavItem imgSrc={`./home.png`} message={`Repositories`} />
            <NavItem imgSrc={`./home.png`} message={`Repositories`} />
            <NavItem imgSrc={`./home.png`} message={`Repositories`} />
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
