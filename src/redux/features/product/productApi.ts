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
        if (query?.search) {
          return `products?searchTerm=${query?.search}&page=${query.page}&limit=${query.limit}`;
        } else if (query?.filter) {
          `products?category=${query?.filter}&page=${query.page}&limit=${query.limit}`;
        } else if (query?.back) {
          `/products?page=${query.page}&limit=${query.limit}`;
        } else if (query.all) {
          return "/products";
        }
        return `/products?page=${query.page}&limit=${query.limit}`;
      },
    }),
    updateProduct: builder.mutation({
      query: (product) => {
        return {
          url: `/products/update-product/${product?.id}`,
          method: "PATCH",
          body: product,
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
    addAddedToCart: builder.mutation({
      query: (product) => ({
        url: "/chack-out/added-to-cart",
        method: "POST",
        body: product,
      }),
    }),
    getAllAddedCart: builder.query({
      query: () => {
        return "/chack-out";
      },
    }),
    deleteCart:builder.mutation({
      query: (id) => ({
        url: `/chack-out/delete-cart/${id}`,
        method: "DELETE",
      }),
    }),
    updatecartQuentity:builder.mutation({
      query: (product) => ({
        url: `/chack-out/update-cart-quentity`,
        method: "PATCH",
        body: product,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddAddedToCartMutation,
  useGetAllAddedCartQuery,
  useDeleteCartMutation,
  useUpdatecartQuentityMutation
} = productApi;
