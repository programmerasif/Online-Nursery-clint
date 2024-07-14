import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products/creat-product",
        method: "POST",
        body: product,
      }),
    }),
    getProducts: builder.query({
      query: (query) => {
        console.log(query?.search);

        if (query?.search) {
          console.log("searching query");
          return `products?searchTerm=${query?.search}&page=${query.page}&limit=4`;
        } else if (query?.filter) {
          console.log("sorting query");
          `products?category=${query?.filter}&page=${query.page}&limit=4`
        } 
        else if(query?.back){
          console.log("set back paice");
          
          `/products?page=${query.page}&limit=4`;
        }
          
          return `/products?page=${query.page}&limit=4`;
        
        
      },
    }),
    updateProduct: builder.mutation({
      query: ({ id, product }) => ({
        url: `/products/update-product/${id}`,
        method: "PATCH",
        body: product,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
