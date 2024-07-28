import { CardContainer } from "@/components/ui/3d-card";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { useParams } from "react-router-dom";

const ProductDetilsPage = () => {
  const { id } = useParams();
  const { data } = useGetProductsQuery({ all: "all" });
  const allProduct = data?.data?.product;
  const singleProduct = allProduct?.find((product: { _id: string | undefined; }) => product._id == id);

  const productPath = '/Product-details/'

  return (
    <div className=" min-h-[90vh] flex justify-center items-center">
      <div className="bg-gray-50 w-1/2  ">
        <div className="min-h-[90vh] w-full  rounded-br-[200px] bg-gradient-to-bl from-[#97d384] to-[#e8ebe79d] flex justify-center items-center">
          <CardContainer className=" w-4/5 flex justify-center items-center bg-gradient-to-bl from-[#e8ebe79d] to-[#96d38469] p-16 shadow-xl rounded-3xl ">
            <CardContainer>
              <img
                src={singleProduct?.image}
                alt=""
                className="w-4/5 rounded-3xl transition delay-150 duration-300 ease-in-out shadow-2xl"
              />
            </CardContainer>
          </CardContainer>
        </div>
      </div>
      <div className="bg-[#97d384] w-1/2 ">
        <div className="w-full min-h-[90vh] rounded-tl-[200px] gap-4 bg-gray-50 flex flex-col justify-center items-start px-10">
          <div className="font-semibold">Brand : Non</div>
          <div className="font-semibold">Catagory : Non</div>
          <div className="font-semibold">Availabaility Only {`2`} in stoke</div>
          <div className="text-2xl font-bold">
            {singleProduct?.title} thee is needed to maintain the Eco System
          </div>
          <div className="flex justify-center items-center gap-2 text-[#97d384] font-semibold">
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
          <div className="flex flex-col gap-2 items-start justify-start">
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
              </span>{" "}
              Absorb pollutants and release oxygen, improving the quality of the
              air we breathe
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
              Help regulate the climate by absorbing carbon dioxide and
              providing shade.
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
              Provide essential habitats for countless species of wildlife,
              supporting biodiversity.
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
              Enhance the beauty of landscapes, making environments more
              pleasant and inviting.
            </span>
          </div>
          <div>
            <div className="font-semibold">
                Price : <span className="font-bold text-3xl text-[#97d384]">$ 50</span>
            </div>
          </div>
          <div className="flex justify-normal items-start gap-8 font-semibold">
            <button className="px-6 py-[10px] rounded-md border border-[#97d384] hover:bg-[#97d384] hover:duration-500 hover:text-white">Book Now </button>
            <button className="px-6 py-3 rounded-md text-white bg-[#97d384] hover:bg-gray-50 hover:text-black hover:border hober:border-[#97d384]  hover:duration-500 hover:border-[#97d384]">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetilsPage;
