export interface IIncrementCart {
    id?:string,
    status:string
}
export type FormData = {
    name: string;
    num: string;
    address: string;
    Email: string;
    radioOption: string;
  };
  
export type CartItem = {
  productID: string;
    quantity: number;
  };
  
export type BuyingDataItem = {
    card: string;
    quantity: number;
  };

 export interface IProduct {
    category: string
    createdAt?: string
    description: string
    image:string
    isDeleted:boolean
    price:number
    quantity: number
    _id:string
    rating:string
    updatedAt?:string
    title:string
    
  }
 export interface ICheckOutProduct {
    category: string
    createdAt?: string
    description: string
    image:string
    isDeleted:boolean
    price:number
    quantity: string
    _id:string
    rating:string
    updatedAt?:string
    title:string
    availableQuantity :string
    
  }
  
 export interface IProductProps {
    product: IProduct;
  }
  
 export interface IComponentProps {
    handleSelectChange: (value: string) => void;
  }