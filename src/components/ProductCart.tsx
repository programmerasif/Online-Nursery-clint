/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useDeleteProductMutation } from "@/redux/features/product/productApi";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/features/product/productApi";
import Swal from "sweetalert2";
import UpdatedProductModal from "./UpdatedProductModal";
import ProductIsLoading from "./LoadingComponent/ProductIsLoading";

const ProductCart = () => {
  const [deleteProduct] = useDeleteProductMutation();

  const { data, isLoading, error } = useGetProductsQuery({action:'all'}, {
    pollingInterval: 1000,
  });

  if (isLoading) return <ProductIsLoading />;
  if (error) return <div>Error:</div>;

  // Access the data array
  const products = data?.data?.product?.slice(0, 4) || [];

  const handelDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 p-5 md:p-8 xl:p-14 bg-gradient-to-bl from-[#97d384] to-[#e8ebe79d] rounded-b-3xl rounded-tl-3xl">
      {products.map((product: any) => (
        <div
          key={product?._id}
          className="w-full sm:w-[250px] md:w-[300px] xl:w-[350px] 2xl:w-[380px] drop-shadow-xl bg-[#eff8ec] rounded-xl"
        >
          <div className="flex flex-col justify-center items-center  border-[#6ABE4C] gap-5 rounded-md">
            <div>
              <img
                src={product?.image}
                alt=""
                className=" h-[325px] w-[505px] rounded-t-md"
              />
            </div>
            <div className="font-semibold text-xl">{product?.title}</div>
            <div className="font-semibold">${product?.price}</div>
            <div>{product?.category}</div>
            <div className="flex justify-center items-center gap-5 mb-8">
              
              <UpdatedProductModal product={product} />
              <button
                className="px-[15px] py-[6px] rounded-md border border-[#6ABE4C] font-semibold"
                onClick={() => handelDelete(product?._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
