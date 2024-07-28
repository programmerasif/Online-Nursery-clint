/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useUpdateProductMutation } from "@/redux/features/product/productApi";
import CoustomButton from "./CoustomButton";

const UpdatedProductModal = ({ product }: any) => {
  const { register, handleSubmit } = useForm();
  const [updateProduct] = useUpdateProductMutation();

  const id = product?._id;
  const onSubmit = async (data: any) => {
    const updateData = {
      category: data?.category,
      title: data?.title,
      price: data?.price,
      id,
      quantity:data?.quantity,
      description: data?.description
    };
    const res = await updateProduct(updateData);
    console.log(res);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-50 hover:bg-gray-50 ">
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            }
            text={"Update"}
            styleClass={
              "bg-[#6ABE4C] px-4 py-2 rounded-md text-gray-50 font-semibold text-sm flex justify-center group/modal-btn"
            }
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] w-full h-[450px]">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            You have to give all the information here
          </DialogDescription>
        </DialogHeader>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 py-4 w-full"
          >
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="Category" className="text-left">
                Category
              </Label>
              <Input
                id="Category"
                defaultValue={`${product?.category}`}
                {...register("category", { required: "Category is required" })}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="title" className="text-left">
                Title
              </Label>
              <Input
                id="title"
                defaultValue={`${product?.title}`}
                {...register("title", { required: "Title is required" })}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="price" className="text-left">
                Price
              </Label>
              <Input
                id="price"
                defaultValue={`${product?.price}`}
                {...register("price", { required: "Price is required" })}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="quantity" className="text-left">
                Quantity
              </Label>
              <Input
                id="quantity"
                defaultValue="Add quantity"
                {...register("quantity", { required: "Quantity is required" })}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="description" className="text-left">
                Description
              </Label>
              <Input
                id="description"
                defaultValue="Add Description"
                {...register("description", {
                  required: "Description is required",
                })}
              />
            </div>
            
            
            <div className="grid grid-cols-1 mt-5">
              <DialogClose asChild>
                <Button type="submit" className="ro">
                  Update Product
                </Button>
              </DialogClose>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatedProductModal;
