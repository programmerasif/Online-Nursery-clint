/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from "@/components/Modal";
import ProductCart from "../../components/ProductCart";

const Product = () => {
  

  return (
    <div className="flex flex-col  pt-20 lg:px-20 gap-2">
      <div>this is product</div>
      <div>
        <div className="flex justify-end items-end">
          <div className="flex justify-center items-end gap-5 text-white bg-gradient-to-r from-[#9ed68c] to-[#99d386] w-72 p-5 rounded-tr-[60px] rounded-tl-[70px]">
            <div className="bg-white text-[#595959] px-4 py-2 rounded-3xl flex justify-center items-center gap-2 font-semibold">
              {/* Add New Product */}
              <Modal />
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
