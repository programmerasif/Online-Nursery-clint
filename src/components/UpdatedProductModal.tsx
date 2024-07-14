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
    };
    const res = await updateProduct(updateData);
    console.log(res);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] w-full h-[450px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
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
            {/* <div className="grid grid-cols-1 gap-2">
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
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="rating" className="text-left">
                Rating
              </Label>
              <Input
                id="rating"
                defaultValue="Add rating"
                {...register("rating", { required: "Rating is required" })}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" {...register("picture")} />
            </div> */}
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
