/* eslint-disable @typescript-eslint/no-explicit-any */
import CoustomButton from "@/components/CoustomButton";
import ProductIsLoading from "@/components/LoadingComponent/ProductIsLoading";
import ProductcartComponentt from "@/components/productcartComponentt";

import SelectUi from "@/components/SelectUi";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation } from "react-router-dom";

const Products = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});
  const [back, setBack] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const { data, isLoading } = useGetProductsQuery({
    search: searchTerm,
    filter: filters,
    page,
    back,
    limit: 4,
  },
  {
    pollingInterval: 1000,
  });

  const handlePaginate = (count: number) => {
    const result = setPage((prevPage) => prevPage + count);
    console.log("res =>", result);
  };

  const handelSearch = async (data: any) => {
    setPage(1);
    setSearchTerm(data?.Search);
    reset({ Search: "" });
  };
  const handleSelectChange = (value: string) => {
    setPage(1);
    setSearchTerm("");
    setFilters(value);
  };
  const handelback = () => {
    setSearchTerm("");
    setBack("true");
  };

  const products = data?.data?.product || [];
  const isAvailable = data?.data?.hasMore;
  const preNumber = page - 1;
  const nextNumber = page + 1;

  const location = useLocation();
  const locationPath = location.pathname
  const isProductPage = locationPath == '/product'
  return (
    <div className="sm:px-6 lg:px-20 bg-gradient-to-bl mt-20 md:mt-28 lg:min-h-[70vh]">
      <div className={`${isProductPage ? "mx-4 mb-10 pt-8 flex flex-col xl:flex-row justify-between items-center rounded-lg" : "mx-4 mb-10 flex flex-col xl:flex-row justify-between items-center rounded-lg"}`}>
        <div className="lg:text-2xl font-semibold text-gray-700 flex justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-1"><span>Explore Our Full  </span> <span className="text-[#6ABE4C] flex justify-center items-center gap-4"><span >Range of Products</span> <span> <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg></span><span>
           
          </span></span>
          </div>
          
        </div>
        <div className="text-2xl lg:flex-row flex-col-reverse mt-5 xl:mt-0 font-semibold flex justify-center items-center gap-5">
          <div>
            <SelectUi handleSelectChange={handleSelectChange} />
          </div>
          <div className="flex justify-center items-center">
            <form
              className="flex justify-center items-center gap-4"
              onSubmit={handleSubmit(handelSearch)}
            >
              <Input
                id="Search"
                placeholder="Search"
                {...register("Search", { required: "Search is required" })}
              />
              <button type="submit">
                <CoustomButton
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                      
                    </svg>
                  }
                  text={'Search'}
                  styleClass={
                    "bg-[#6ABE4C] px-4 py-2 rounded-md text-gray-50 font-semibold text-sm flex justify-center group/modal-btn"
                  }
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      {
        isLoading ? <div ><ProductIsLoading /> </div> : <>
        {products?.length !== 0 ? (
        <>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            
            <>
              {products?.map((product: any) => (
                <ProductcartComponentt key={product?._id} product={product} />
              ))}
            </>
            
          </div>

          <div className="pt-8 ">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <button
                    className={`${
                      page === 1
                        ? "bg-gray-300 md:px-6 md:py-3 sm:py-2 px-3 text-sm rounded-full text-gray-100"
                        : "bg-white md:px-6 md:py-3 sm:py-2 px-3 text-sm text-black font-semibold rounded-full"
                    } `}
                    onClick={() => handlePaginate(-1)}
                    disabled={page === 1}
                  >
                    Previous
                  </button>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">{preNumber}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    {page}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">{nextNumber}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <button
                    className={`${
                      !isAvailable
                        ? "bg-gray-300 md:px-6 md:py-3 sm:py-2 px-3 text-sm rounded-full text-gray-100"
                        : "bg-white md:px-6 md:py-3 sm:py-2 px-3 text-sm text-black font-semibold rounded-full"
                    } `}
                    onClick={() => handlePaginate(1)}
                    disabled={!isAvailable}
                  >
                    Next
                  </button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      ) : (
        <div className="flex justify-center flex-col font-semibold items-center h-[60vh] text-gray-700">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-24 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
              />
            </svg>
          </div>
          <div>Product Not Found</div>
          <div
            className="mt-8 bg-gray-700 text-white px-6 py-2 rounded-md"
            onClick={handelback}
          >
            <NavLink to="/product">Back</NavLink>
          </div>
        </div>
      )}</>
      }
    </div>
  );
};

export default Products;
