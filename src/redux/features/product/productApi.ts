import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addProduct : builder.mutation({
            query:(product) =>({
                url:'/creat-product',
                method:"POST",
                body: product
            })
        })
    })
})
export const {useAddProductMutation} = productApi