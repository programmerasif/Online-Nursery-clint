/* eslint-disable @typescript-eslint/no-explicit-any */

import Swal from "sweetalert2";

const AddToCart = async (addAddedToCart: any, item: any
  ,allAddedCart: any
) => {
  console.log(allAddedCart);
  
  const res = await addAddedToCart(item).unwrap();
  if (res.success) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product added to Cart",
      showConfirmButton: false,
      timer: 1500
    });
    
  }
};

export default AddToCart;
