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
      query: () => "/products",
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
} = productApi;
