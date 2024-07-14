import { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const NavBr = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-30 absolute top-1 pt-3 w-full">
      <div className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-20 ">
          <div className="flex items-center justify-between h-16 flex-row-reverse">
            <div className="flex items-center">
              <div className="hidden md:flex">
                <div className="flex items-baseline space-x-4">
                  <NavLink to='/'className="text-black hover:text-[#59a83d] px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </NavLink>
                  <NavLink
                    to="/product"
                    className="text-black hover:text-[#59a83d] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Product
                  </NavLink>
                  <a className="text-black hover:text-[#59a83d] px-3 py-2 rounded-md text-sm font-medium">
                    Services
                  </a>
                  <a className="text-black hover:text-[#59a83d] px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </a>
                  <button className="bg-[#6ABE4C] px-[20px] py-[10px] rounded-md text-white font-semibold">
                    Register
                  </button>
                </div>
              </div>
            </div>
            <NavLink to="/" className="flex justify-end flex-1 md:flex-none">
              <img src={logo} alt="" />
            </NavLink>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black  hover:text-[#59a83d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute z-20 bg-[#d0ebc7] w-full mt-5 `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to='/'
              className="text-black block px-3 py-2 hover:bg-sky-700 rounded-md text-base font-medium"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </NavLink>
            <a
              className="text-black hover:text-[#59a83d] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </a>
            <a
              className="text-black hover:text-[#59a83d] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(!isOpen)}
            >
              Services
            </a>
            <a
              className="text-black hover:text-[#59a83d] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBr;
