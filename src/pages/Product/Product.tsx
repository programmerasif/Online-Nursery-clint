/* eslint-disable @typescript-eslint/no-explicit-any */

import ProductAddModal from "@/components/ProductAddModal";
import ProductCart from "../../components/ProductCart";


const Product = () => {
  return (
    <div className="flex flex-col  pt-20 xl:px-20 gap-2">
      <div className="flex justify-start items-center gap-2 text-3xl underline underline-offset-8 font-semibold text-[#59a83d]">
        <span>Feature Product</span>
        <span>
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
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>
      </div>
      <div>
        <div className="flex justify-end items-end">
          <div className="flex justify-center items-end gap-5 text-white bg-gradient-to-r from-[#9ed68c] to-[#99d386] w-[25%] p-5 rounded-tr-[60px] rounded-tl-[70px]">
            {/* <div className="bg-white flex justify-center items-center">
              <button className="px-[20px] py-[10px] text-[#595959] rounded-md max-w-32 mt-4  font-semibold">
                See more
              </button>
            </div> */}
            <div className="bg-white text-[#595959] px-4 py-2 rounded-3xl flex justify-center items-center gap-2 font-semibold">
              {/* Add New Product */}
              <ProductAddModal />
            </div>
          </div>
        </div>
        <div>
          <ProductCart />
        </div>
      </div>
    </div>
  );
  
};

export default Product;
