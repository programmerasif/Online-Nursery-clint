/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useGetAllAddedCartQuery } from "@/redux/features/product/productApi";
const NavBr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const locationPath = location.pathname;
  const isHomePage = locationPath == "/";
  const productDetailsPath = locationPath.slice(0, 17);
  const isProductDetails = productDetailsPath == "/Product-details/";
  const { data } = useGetAllAddedCartQuery(undefined, {
    pollingInterval: 1000,
  });
  const totalQuantity = data?.data?.reduce((sum: number, product: any) => {
    return sum + parseInt(product.quantity);
  }, 0);

  return (
    <nav
      className={`z-30 absolute top-1 pt-3 w-full  pb-3  ${
        isHomePage || isProductDetails
          ? "shadow-none"
          : "shadow-md shadow-[#e2e7e0]"
      } `}
    >
      <div className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-20 ">
          <div className="flex items-center justify-between h-16 flex-row-reverse">
            <div className="flex items-center">
              <div className="hidden md:flex">
                <div className="flex items-baseline space-x-4">
                  <NavLink
                    to="/"
                     className={({ isActive }) =>
          `text-black hover:text-[#59a83d] px-3 py-2 rounded-md text-sm font-medium ${
            isActive ? 'text-text-[#59a83d] font-bold' : ''
          }`
        }
                    
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/product"
                    className="text-black hover:text-[#59a83d] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Product
                  </NavLink>
                  <NavLink
                    to="/checkout"
                    className="relative text-black hover:text-[#59a83d] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <div className="flex">
                      <span className=" ">Cart</span>
                      <span className=" relative">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6 text-[#97d384]"
                          >
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                          </svg>
                        </span>
                        <span className="absolute -top-4 right-0 bg-[#97d384] text-white px-1 rounded-full">{`${
                          totalQuantity == undefined
                            ? "..."
                            : totalQuantity >= 10
                            ? "9+"
                            : `${data?.data?.length}`
                        }`}</span>
                      </span>
                    </div>
                  </NavLink>
                  <NavLink to="/contact" className="text-black hover:text-[#59a83d] px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </NavLink>
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
            <NavLink
              to="/"
              className="text-black block px-3 py-2 hover:bg-sky-700 rounded-md text-base font-medium"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              className="text-black hover:text-[#59a83d] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(!isOpen)}
            >
              Product
            </NavLink>
            <NavLink 
                    onClick={() => setIsOpen(!isOpen)}
                    to="/checkout"
                    className="text-black hover:text-[#59a83d] block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <div className="flex">
                      <span className=" ">Cart</span>
                      <span className=" relative">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6 text-[#97d384]"
                          >
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                          </svg>
                        </span>
                        <span className="absolute -top-4 right-0 bg-[#97d384] text-white px-1 rounded-full">{`${
                          totalQuantity == undefined
                            ? "..."
                            : totalQuantity >= 10
                            ? "9+"
                            : `${data?.data?.length}`
                        }`}</span>
                      </span>
                    </div>
                  </NavLink>

            <NavLink to="/contact"
              className="text-black hover:text-[#59a83d] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBr;
