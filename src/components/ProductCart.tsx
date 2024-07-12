/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useDeleteProductMutation } from "@/redux/features/product/productApi";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import img from "../assets/flower.jpg";

const ProductCart = () => {
  // const [deleteProduct] = useDeleteProductMutation()

  const { data, isLoading, error } = useGetProductsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  // Access the data array
  const products = data?.data || [];

  console.log(products);
  return (
    <div className="grid grid-cols-4 gap-5 p-14 bg-gradient-to-bl from-[#97d384] to-[#e8ebe79d] rounded-b-3xl    rounded-tl-3xl">
   {
    products.map((product:any) =>(
      <div className="  w-[380px] drop-shadow-xl bg-[#eff8ec] rounded-xl">
      <div className="flex flex-col justify-center items-center  border-[#6ABE4C] gap-5 rounded-md">
        <div>
          <img src={product?.image} alt="" className=" h-[325px] w-[505px] rounded-t-md" />
        </div>
        <div className="font-semibold text-xl">{product?.title}</div>
        <div className="font-semibold">${product?.price}</div>
        <div>{product?.category}</div>
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
    ))
   }
    </div>
  );
};

export default ProductCart;
