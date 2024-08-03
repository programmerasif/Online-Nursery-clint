/* eslint-disable @typescript-eslint/no-explicit-any */

import Swal from "sweetalert2";
export const handelDeleteFun = ({id,deleteProduct}:any) =>{
  
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6ABE4C",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(id);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your file has been deleted.",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
}