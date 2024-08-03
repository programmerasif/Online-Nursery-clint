import { Label } from "@radix-ui/react-label";
import secImg from "../../assets/OBJECTS.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { BuyingDataItem, CartItem, FormData } from "@/components/Types/types";
import { useDeleteChackoutCollectionMutation, usePaymentInfoMutation } from "@/redux/features/product/productApi";

const UserInfo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentInfo] = usePaymentInfoMutation();
  const [deleteChackoutCollection] = useDeleteChackoutCollectionMutation();
  const buyingData: BuyingDataItem[] = [];

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data?.radioOption === "Direct Payment") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Direct Payment is not available right now. We are working on it!",
        showConfirmButton: false,
        timer: 1800,
      });
      return;
    }
    const payload = {
      product: buyingData,
      userInfo: {
        name: data?.name,
        phone: data?.num,
        address: data?.address,
        payType: data?.radioOption,
        email: data?.Email,
      },
    };
    const res = await paymentInfo(payload);
    if (res?.data?.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Order has been confirmed",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/')
      await deleteChackoutCollection(undefined);
    }
  };

  const { state } = location;
  if (state) {
    state.map((cart: CartItem) => {
      buyingData.push({ card: cart.productID, quantity: cart.quantity });
    });
  }

  return (
    <div className="pt-36 pb-8 flex justify-center items-center px-5 md:px-20">
      <div className="flex justify-center md:flex-row flex-col-reverse items-center gap-10 md:gap-16 w-full py-20">
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-left font-bold text-gray-500">
                  Full Name
                </Label>
                <Input
                  id="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("name", { required: true })}
                />
                {errors.name && <p role="alert" className="text-red-500">Name is required</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-left font-bold text-gray-500">
                  Email
                </Label>
                <Input
                  id="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("Email", { required: true })}
                />
                {errors.Email && <p role="alert" className="text-red-500">Email is required</p>}
              </div>
              <div>
                <Label htmlFor="address" className="text-left font-bold text-gray-500">
                  Address
                </Label>
                <Input
                  id="address"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("address", { required: true })}
                />
                {errors.address && <p role="alert" className="text-red-500">Address is required</p>}
              </div>
              <div>
                <Label htmlFor="num" className="text-left font-bold text-gray-500">
                  Phone Number
                </Label>
                <Input
                  id="num"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("num", { required: true })}
                />
                {errors.num && <p role="alert" className="text-red-500">Phone Number is required</p>}
              </div>
            </div>
            <div className="mt-5">
              <Button type="submit" className="w-full bg-[#6ABE4C] hover:bg-[#45c517] py-3 px-4 rounded focus:outline-none focus:shadow-outline">
                Make Payment
              </Button>
            </div>
            <div className="mt-5">
              <div className=" flex font-bold justify-start items-start text-gray-500 gap-4">
                  <span>Payment Method</span><div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="COD"
                    value="COD"
                    {...register("radioOption", { required: "You must select one option" })}
                    className="mr-2"
                  />
                  <label htmlFor="COD" className="font-semibold">COD</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="DirectPayment"
                    value="Direct Payment"
                    {...register("radioOption", { required: "You must select one option" })}
                    className="mr-2"
                  />
                  <label htmlFor="DirectPayment" className="font-semibold">Direct Payment</label>
                </div>
              </div>
              </div>
             
              {errors.radioOption && <p className="text-red-500 mt-2">{errors.radioOption.message}</p>}
            </div>
            
          </form>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={secImg} alt="contact" className="w-[500px] sm:max-h-96 " />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
