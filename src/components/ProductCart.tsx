import img from "../assets/flower.jpg";

const ProductCart = () => {
  return (
    <div className="  w-[380px] drop-shadow-xl bg-[#eff8ec] rounded-xl">
      <div className="flex flex-col justify-center items-center  border-[#6ABE4C] gap-5 rounded-md">
        <div>
          <img src={img} alt="" className=" h-[325px] w-[505px] rounded-t-md" />
        </div>
        <div>Peace Lily</div>
        <div>Price : 30$</div>
        <div>Category: Indoor Plants</div>
        <div className="flex justify-center items-center gap-5 mb-8">
          <button className="bg-[#6ABE4C] px-[15px] py-[6px] rounded-md text-white font-semibold">
            Update
          </button>
          <button className="px-[15px] py-[6px] rounded-md border border-[#6ABE4C] font-semibold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
