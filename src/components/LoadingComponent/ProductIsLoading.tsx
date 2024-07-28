const ProductIsLoading = () => {
  const cart = [1, 2, 3, 4];
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 rounded-md justify-center items-center mx-auto">
      {cart.map((item) => (
        <div key={item} className="bg-[#eff8ec] min-h-[450px] 2xl:w-[400px] md:w-[340px]   lg:w-[320px] xl:w-[310px]">
          <div className="animate-pulse flex flex-col jb">
            <div className="w-full min-h-[260px] bg-slate-600"></div>
            <div className="flex justify-between items-center mt-32 px-5">
              <div className="px-4 py-2 rounded-xl text-xs  dark:text-white border-2 border-gray-400 font-semibold">
                Detils →
              </div>
              <div className="px-4 py-2 rounded-xl text-xs  dark:text-white border-2 border-gray-400 font-semibold">
                Add To Cart
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductIsLoading;
