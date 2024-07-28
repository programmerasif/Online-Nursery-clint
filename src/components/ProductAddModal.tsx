import { useForm, SubmitHandler } from "react-hook-form";
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
import Swal from "sweetalert2";
import { useAddProductMutation } from "@/redux/features/product/productApi";

interface FormData {
  category: string;
  title: string;
  price: string;
  quantity: string;
  description: string;
  rating: string;
  picture: FileList;
}
const ProductAddModal = () => {
 
  const [addProduct] = useAddProductMutation();

  const { register, handleSubmit } = useForm<FormData>(); 
 

  const onSubmit:SubmitHandler<FormData> = async (data) => {
    const API_KEY = "4794790c9ff21535c43001d589261473";
    const file = data.picture[0];
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();
    if (result.success) {
      const product = {
        image: result.data.url,
        title: data.title,
        price: data.price,
        category: data.category,
        description: data.description,
        quantity: data.quantity,
        rating: data.rating,
      };
      const res = await addProduct(product).unwrap();
      if (res.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Added Product SucessFully",
          showConfirmButton: false,
          timer: 1500
        });
      }
      console.log(res);
    } else {
      console.error("Upload failed:", result);
    }
   
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#6ABE4C]  rounded-md text-white  font-semibold cursor-pointer hover:bg-[#45ad1f] ">
          <div className="flex justify-center items-center gap-2">
          <span>
          Add Product
        </span>
          <span>
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
            </span>
          </div>
        
        </Button>
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
                defaultValue="Category Name"
                {...register("category", { required: "Category is required" })}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="title" className="text-left">
                Title
              </Label>
              <Input
                id="title"
                defaultValue="Add Title"
                {...register("title", { required: "Title is required" })}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="price" className="text-left">
                Price
              </Label>
              <Input
                id="price"
                defaultValue="Add Price"
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
            </div>
            <div className="grid grid-cols-1 mt-5">
              <DialogClose asChild>
                <Button type="submit" className="ro">Add Product</Button>
              </DialogClose>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductAddModal;
