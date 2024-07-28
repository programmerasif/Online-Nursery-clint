import { Label } from "@radix-ui/react-label";
import secImg from "../../assets/OBJECTS.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";

const UserInfo = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };
  return (
    <div className="pt-36 flex justify-center items-center  ">
      <div className="flex justify-center items-center gap-28">
        <div className="w-1/2">
          <div className="grid grid-cols-1 gap-4 py-4 w-[500px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="title" className="text-left font-bold text-gray-500">
                  Full Name
                </Label>
                <Input
                  id="name"
                  className="w-[600px] p-6 border-2  "
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              <div className="grid grid-cols-1 gap-2 mt-5">
                <Label htmlFor="Category" className="text-left font-bold text-gray-500">
                  Email
                </Label>
                <Input
                  id="email"
                  className="w-[600px] p-6 border-2  "
                  {...register("Email", { required: "Email is required" })}
                />
              </div>
              <div className="grid grid-cols-1 gap-2 mt-5">
                <Label htmlFor="Category" className="text-left font-bold text-gray-500">
                  Phone Number
                </Label>
                <Input
                  id="number"
                  className="w-[600px] p-6 border-2  "
                  {...register("number", {
                    required: "Phone number is required",
                  })}
                />
              </div>
              <div className="grid grid-cols-1 gap-2 mt-5">
                <Label htmlFor="Category" className="text-left font-bold text-gray-500">
                  Address
                </Label>
                <Input
                  id="email"
                  className="w-[600px] p-6 border-2"
                  {...register("address", { required: "Address is required" })}
                />
              </div>
              <div className="grid grid-cols-1  mt-5">
                <Button type="submit" className="w-[600px] p-6 bg-[#6ABE4C] hover:bg-[#45c517]">
                  Make Payment
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-3/6">
          <div className="w-full">
            <img src={secImg} alt="" className="w-[600px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
