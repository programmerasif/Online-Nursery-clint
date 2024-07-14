/* eslint-disable @typescript-eslint/no-explicit-any */

import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const ProductcartComponentt  = ({product}:any) =>{

  
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
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {product.category}
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-gray-700 dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Add To Cart
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    );
  };

export default ProductcartComponentt;