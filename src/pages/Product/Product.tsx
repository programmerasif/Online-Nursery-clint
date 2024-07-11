import ProductCart from "../../components/ProductCart";

const Product = () => {
  return (
    <div className="flex flex-col  pt-20 lg:px-20 gap-2">
      <div>this is product</div>
      <div>
        <div className="flex justify-end items-end">
          <div className="flex justify-center items-end gap-5 text-white bg-gradient-to-r from-[#9ed68c] to-[#99d386] w-72 p-5 rounded-tr-[60px] rounded-tl-[70px]">
            <div className="bg-white text-[#595959] px-4 py-2 rounded-3xl flex justify-center items-center gap-2 font-semibold">
              Add New Product
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 p-14 bg-gradient-to-bl from-[#97d384] to-[#e8ebe79d] rounded-b-3xl    rounded-tl-3xl">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      </div>
    </div>
  );
};

export default Product;
