/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardContainer } from "@/components/ui/3d-card";
import {
  useAddAddedToCartMutation,
  useGetProductsQuery,
} from "@/redux/features/product/productApi";
import AddToCart from "@/utils/AddToCart";
import { useParams } from "react-router-dom";

const ProductDetilsPage = () => {
  const { id } = useParams();
  const { data } = useGetProductsQuery({ all: "all" });
  const [addAddedToCart] = useAddAddedToCartMutation();
  const allProduct = data?.data?.product;
  const singleProduct = allProduct?.find(
    (product: { _id: string | undefined }) => product._id == id
  );
console.log(singleProduct);

  const handelAddToCart = async (product: any) => {
    const availableQuentity = product?.quantity;
    const item = {
      productID: product._id,
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
      quantity: 1,
      availableQuantity: product?.quantity,
      rating: product?.rating,
    };

    AddToCart(addAddedToCart, item, availableQuentity);
  };
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center">
      <div className="bg-gray-50 md:w-1/2 w-full ">
        <div className=" md:min-h-[60vh] lg:min-h-[90vh] xl:min-h-[90vh] min-h-[45vh]  mt-16 md:mt-0  w-full  rounded-br-[200px] md:bg-gradient-to-bl from-[#97d384] to-[#e8ebe79d] flex  justify-center items-center">
          <CardContainer className=" w-4/5 flex justify-center items-center bg-gradient-to-bl from-[#e8ebe79d] to-[#96d38469] p-10 shadow-xl rounded-3xl ">
            <CardContainer>
              <img
                src={singleProduct?.image}
                alt=""
                className="w-full md:w-4/5 rounded-3xl transition delay-150 duration-300 ease-in-out shadow-2xl"
              />
            </CardContainer>
          </CardContainer>
        </div>
      </div>
      <div className="bg-[#97d384] md:w-1/2 w-full  ">
        <div className="w-full md:min-h-[60vh] lg:min-h-[90vh] overflow-hidden xl:min-h-[90vh] min-h-[90vh] rounded-tl-[100px] md:rounded-tl-[200px] gap-4 bg-gray-50  rounded-br-[100px] md:rounded-br-[0px] mt-1 md:mb-0 md:mt-0 mb-1  flex flex-col justify-center items-start px-10">
          <div className="font-semibold text-sm">Brand : Non</div>
          <div className="font-semibold text-sm">Category : {singleProduct?.category}</div>
          <div className="font-semibold text-sm">
            Availabaility Only <span className="text-[#6ABE4C]">{singleProduct?.quantity}</span> in stoke
          </div>
          <div className="xl:text-2xl text-xl font-bold">
            {singleProduct?.title} three is needed to maintain the Eco System
          </div>
          <div className="flex justify-center items-center gap-2 text-[#97d384] font-semibold">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 xl:size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 xl:size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 xl:size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 xl:size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col gap-2 items-start justify-startw">
            <span className="list-outside flex justify-center items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-[#97d384]"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-xs lg:text-base">
                {" "}
                Absorb pollutants and release oxygen, improving the quality of
                the air we breathe
              </span>
            </span>
            <span className="flex gap-2">
              <span className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-[#97d384]"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-xs lg:text-base">
              Help regulate the climate by absorbing carbon dioxide and
              providing shade.
              </span>
            </span>
            <span className="flex gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-[#97d384]"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-xs lg:text-base">
              Provide essential habitats for countless species of wildlife,
              supporting biodiversity.
              </span>
            </span>
            <span className="flex gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-[#97d384]"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-xs lg:text-base">
              Enhance the beauty of landscapes, making environments more
              pleasant and inviting.
              </span>
            </span>
          </div>
          <div>
            <div className="xl:font-semibold">
              Price :{" "}
              <span className="font-bold xl:text-3xl text-xl text-[#97d384]">$ {singleProduct?.price}</span>
            </div>
          </div>
          <div className="flex justify-normal items-start gap-8 font-semibold">
            <button className="px-6 py-2 xl:py-3 rounded-md border border-[#97d384] hover:bg-[#97d384] hover:duration-500 hover:text-white">
              Book Now{" "}
            </button>
            <button
              className="px-6 py-2 xl:py-3 rounded-md text-white bg-[#97d384] hover:bg-gray-50 hover:text-black hover:border hober:border-[#97d384]  hover:duration-500 hover:border-[#97d384]"
              onClick={() => handelAddToCart(singleProduct)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetilsPage;
