/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NavLink } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { useAddAddedToCartMutation } from "@/redux/features/product/productApi";
import AddToCart from "@/utils/AddToCart";

const ProductcartComponentt = ({ product }: any) => {
  const [addAddedToCart] = useAddAddedToCartMutation()

  const handelAddToCart = async(product:any) =>{
    const item = {
      productID: product._id,
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description:product?.description,
      quantity: 1,
      availableQuantity : product?.quantity,
      rating: product?.rating,
    };
   
    AddToCart(addAddedToCart,item)
  
   
  }

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#eff8ec] 2xl:w-[400px] md:w-[340px]  lg:w-[320px] xl:w-[310px] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={product?.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {product?.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {product.description}
        </CardItem>
        <div className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          <div className="flex justify-between">
          <div><span className="font-semibold">Category</span> : <span>{product.category}</span></div>
          <div className="">
          <div className="flex justify-center items-center gap-1">
          <span>{product.quantity}</span> <span className="text-[#6ABE4C]">/in stock</span>
          </div>
          </div>
          </div>
          
        </div>
        <div className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          <div className="flex justify-between items-center">
            <div>
              {" "}
              <span className="font-semibold">Price</span> :{" "}
              <span>$ {product.price}</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </span>
              <span>{product.rating}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5">
          <NavLink to={`/Product-details/${product._id}`}>
            <CardItem
              translateZ={20}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs  dark:text-white border-2 border-[#9dbd92] font-semibold"
            >
              Detils →
            </CardItem>
          </NavLink>
          <div></div>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#6ABE4C] dark:bg-white dark:text-black text-white text-xs font-bold"
            onClick={() =>handelAddToCart(product)}
          >
            Add To Cart
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProductcartComponentt;
