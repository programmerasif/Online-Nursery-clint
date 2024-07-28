/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardContainer } from "@/components/ui/3d-card";
import {
  useDeleteCartMutation,
  useGetAllAddedCartQuery,
  useUpdatecartQuentityMutation,
} from "@/redux/features/product/productApi";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const { data } = useGetAllAddedCartQuery(undefined, {
    pollingInterval: 1000,
  });
  const [deleteCart] = useDeleteCartMutation();
  const [updateQuentity] = useUpdatecartQuentityMutation();
  const totalQuantity = data?.data?.reduce((sum: number, product: any) => {
    return sum + parseInt(product.quantity);
  }, 0);

  // reduce for total price
  const totalPrice = data?.data?.reduce((sum: number, product: any) => {
    return sum + parseInt(product.price) * parseInt(product.quantity);
  }, 0);

  const handelDelete = async (id: string) => {
    const res = await deleteCart(id);
    console.log(res);
  };
  const handelQuentityUpdate = async (
    id: string,
    status: string,
    availableQuantity: string,
    addQuantity: string
  ) => {
    const cartInfo = {
      id,
      status,
    };
    if (availableQuantity <= addQuantity && status == "increment") {
      return Swal.fire("Quentity is not available!");
    }
    if (addQuantity == "1" && status == "decrement") {
      return Swal.fire("Minimum Quentity!");
    }
    await updateQuentity(cartInfo);
  };
  return (
    <div className="bg-gray-100 min-h-[85vh] ">
      <div className="pt-28 xl:px-20 flex flex-col gap-14  justify-star w-full">
        <div className="flex flex-col lg:flex-row justify-between  lg:items-start rounded-lg gap-5  py-8">
          <div className="md:w-full lg:w-3/5  min-h-[50vh]  flex justify-center items-center rounded-3xl">
            <div className="w-full">
              <div className="text-center min-h-[40vh] rounded-3xl">
                <div className="flex flex-col justify-center items-start tex gap-1 max-h-[70vh] overflow-scroll">
                  {data?.data.map((item) => (
                    <div
                      key={item._id}
                      className="flex flex-col lg:flex-row justify-between py-1 items-center text-start text border-2 w-full rounded-md px-1 hover:bg-gray-200 duration-500"
                    >
                      <div className="flex justify-center items-center gap-5 ">
                        <CardContainer>
                          <div className="border-2 p-1 rounded-md">
                            <img
                              src={item?.image}
                              alt=""
                              className="w-28 rounded-md "
                            />{" "}
                          </div>
                        </CardContainer>
                        <div className="flex flex-col px-2">
                          <span className="font-semibold">{item?.title}</span>
                          <span>
                            <span className="font-bold text-green-500 ">{`${
                              item?.availableQuantity == "0"
                                ? "Out of Stock"
                                : "In Stocl"
                            }`}</span>{" "}
                            <span className="text-xs font-semibold ps-2">
                              /{item?.availableQuantity}
                            </span>
                          </span>
                          <span className="font-semibold text-sm">
                            $ {item?.price}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-center items-center gap-10 font-bold">
                        <div className="flex justify-center items-center gap-2 bg-gray-50 px-3 py-2 rounded-md lg:rounded-full border-2 p-1 ">
                          <div
                            className="text-red-500 px-3 rounded-full cursor-pointer text-xl"
                            onClick={() =>
                              handelQuentityUpdate(
                                item?._id,
                                "decrement",
                                item?.availableQuantity,
                                item?.quantity
                              )
                            }
                          >
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
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </div>
                          <div>{item?.quantity}</div>
                          <div
                            className="text-green-500 px-3 rounded-full cursor-pointer text-xl"
                            onClick={() =>
                              handelQuentityUpdate(
                                item?._id,
                                "increment",
                                item?.availableQuantity,
                                item?.quantity
                              )
                            }
                          >
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
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div
                          className="px-2 py-1 bg-red-500 rounded-md text-gray-50 hover:bg-black duration-300"
                          onClick={() => handelDelete(item?._id)}
                        >
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
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-full lg:w-2/5">
            <div className="min-h-[50vh]  flex justify-center items-start w-full rounded-3xl">
              <div className="text-center bg-gradient-to-bl from-[#cee6c6] to-[#e8ebe79d] min-h-[40vh] rounded-3xl w-full">
                <div className="border-gray-300 border-b rounded-t-3xl py-2 font-bold">
                  Total Equation
                </div>
                <div className="flex flex-col justify-normal items-start px-8 tex font-semibold py-8 gap-6">
                  <div>Total Product: {totalQuantity}</div>
                  <div>Total Tax : 00.00 </div>
                  <div>Total Discount : 00.00 </div>
                  <div>Total Price : {totalPrice} .00</div>
                  <div>Total Payabal Amount :{totalPrice} </div>
                  <NavLink to="/user-info" className="w-full">
                    {" "}
                    <button className="bg-[#7bc262] w-full py-2 rounded-md text-white hover:bg-[#5da841] duration-300">
                      Check-out
                    </button>{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
