import CoustomButton from "@/components/CoustomButton";
import ProductAddModal from "@/components/ProductAddModal";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UpdatedProductModal from "@/components/UpdatedProductModal";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/features/product/productApi";
import { handelDeleteFun } from "@/utils/commonFunction";
import { useState } from "react";

const CatagoryTable = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetProductsQuery(
    { limit: 5, page },
    {
      pollingInterval: 1000,
    }
  );
  const [deleteProduct] = useDeleteProductMutation();

  const handlePaginate = (count: number) => {
    const result = setPage((prevPage) => prevPage + count);
    console.log("res =>", result);
  };

  const handelDelete = (id: string) => {
    handelDeleteFun({ id, deleteProduct });
  };

  const isAvailable = data?.data?.hasMore;
  const preNumber = page - 1;
  const nextNumber = page + 1;
  return (
    <div className="sm:px-6 lg:px-20 mt-20 md:mt-28 ">
      <div className="flex sm:flex-col md:flex-row justify-between items-center mb-10 border rounded-md p-2">
        <div className="lg:text-2xl font-semibold text-gray-700 flex justify-center items-center gap-2">
          <span>
            Products and <span className="text-[#6ABE4C]">Categories</span>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-[#6ABE4C]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
        </div>
        {/* in this component i have added product */}
        <ProductAddModal />
      </div>
      <div className="bg-[#fbfcfd] shadow-sm min-h-[40vh]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Catagory</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-center">Ratings</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.product.map((item) => (
              <TableRow key={item?._id}>
                <TableCell className="font-bold text-balance text-[#262626e5] w-[22%]">
                  {item?.title}
                </TableCell>
                <TableCell>
                  <img
                    className="size-8 rounded-xl"
                    src={item?.image}
                    alt="product"
                  />
                </TableCell>
                <TableCell>
                  <span className="text-green-500 font-semibold">$</span>{" "}
                  {item?.price}
                </TableCell>
                <TableCell>{item?.category}</TableCell>
                <TableCell>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <span>{item?.quantity}</span>
                    <span className="text-green-500 font-semibold ">
                      /In Stock
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center items-center gap-2">
                    <span className="font-semibold">{item?.rating}</span>
                    <span className="text-orange-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center items-center gap-5">
                    <button>
                      <UpdatedProductModal product={item} />
                    </button>
                    <button onClick={() => handelDelete(item?._id)}>
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
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        }
                        text={"Delete"}
                        styleClass={
                          "bg-red-500 px-4 py-2 rounded-md text-gray-50 font-semibold text-sm flex justify-center group/modal-btn"
                        }
                      />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
    </div>
  );
};

export default CatagoryTable;
