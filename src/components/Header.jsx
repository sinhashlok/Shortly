import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center justify-between p-4 md:p-8 md:px-12 lg:p-12 lg:px-[12%]">
      <div className="flex items-center md:w-[380px] lg:w-[440px]">
        <h1 className="text-[32px] font-bold md:mr-4 lg:mr-10">Shortly</h1>
        <div className="hidden md:flex justify-between w-full">
          <h3 className="text-[16px] text-[#bfbfbf] font-bold hover:text-black cursor-pointer">
            Features
          </h3>
          <h3 className="text-[16px] text-[#bfbfbf] font-bold hover:text-black cursor-pointer">
            Pricing
          </h3>
          <h3 className="text-[16px] text-[#bfbfbf] font-bold hover:text-black cursor-pointer">
            Resources
          </h3>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between">
        <h3 className="text-[16px] text-[#bfbfbf] font-bold md:mr-4 lg:mr-10 hover:text-black cursor-pointer">
          Login
        </h3>
        <button className="text-[16px] text-white font-bold py-2 px-6 bg-[#2acfcf] rounded-full hover:opacity-50">
          Sign Up
        </button>
      </div>
      <div className="flex sm:hidden text-[#bfbfbf]" onClick={handleMenuClick}>
        <MenuIcon fontSize="large" />
      </div>
      {open && (
        <div className="md:hidden absolute bg-[#3b3054] w-[92%] mt-[440px] rounded-lg p-6 px-8">
          <div className="flex flex-col items-center">
            <span className="text-[16px] text-white font-medium p-4">
              Features
            </span>
            <span className="text-[16px] text-white font-medium p-4">
              Pricing
            </span>
            <span className="text-[16px] text-white font-medium p-4">
              Resources
            </span>
            <div className="h-[2px] bg-[#bfbfbf] rounded-full w-full my-4"></div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[16px] text-white font-medium p-4">
              Login
            </span>
            <button className="text-[16px] text-white font-bold w-full py-2 m-4 bg-[#2acfcf] rounded-full hover:opacity-50">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
