/* eslint-disable @typescript-eslint/no-explicit-any */

const AddToCart = async (addAddedToCart:any,item:any) => {
 
  const res = await addAddedToCart(item); 
  console.log(res);
  
};

export default AddToCart;
