Welcome to the Online Nursery Website project! This README file will guide you through the setup, usage, and features of this application.

🚀 Project Overview
The Online Nursery Website is a full-stack application designed to allow users to browse, filter, and search for nursery products, add them to a cart, and make online payments. The project includes both public-facing features for customers and administrative features for managing products and categories.

🌐 Live URL
[Online Nursery Website](https://urban-ocean-nursery.vercel.app/)

📋 Table of Contents

🌟 Features
Public Routes
Product Browsing: Users can browse through products with advanced filtering, pagination, sorting, and searching options.
Product Details: Detailed view of each product.
Shopping Cart: Add products to the cart, manage quantities, and proceed to checkout.
Checkout and Payment: Secure online payments with Stripe.js and Cash on Delivery (COD) options.
Product and Category Management:
Product List Table: Display products with options to update or delete.
Add Product: Form to add new products.
Real-time Updates: Optimistic UI updates for all CRUD operations.
🛠️ Technology Stack
Frontend: React, Redux, TypeScript, RTK Query, React Hook Form, React Router DOM, Tailwind CSS, shadcn UI, Aceternity UI, Hero Icons etc.
Backend: Node.js, Express.js
Database: MongoDB
Payments: Stripe.js
Hosting: Vercel
🛠️ Setup Instructions
Prerequisites
Node.js 
npm 
MongoDB
Installation


🏃 Usage
</br>
Add Product
Endpoint: POST /products/creat-product
Description: Create a new product.


</br>
Update Product
Endpoint: PATCH /products/update-product/:id
Description: Update an existing product by ID.

</br>
Delete Product
Endpoint: DELETE /products/:id
Description: Delete a product by ID.

</br>
Cart API
Add to Cart
Endpoint: POST /chack-out/added-to-cart
Description: Add a product to the cart.

</br>
Get All Cart Items
Endpoint: GET /chack-out
Description: Retrieve all items in the cart.
</br>
Delete Cart Item
Endpoint: DELETE /chack-out/delete-cart/:id
Description: Remove an item from the cart by ID.
</br>
Update Cart Quantity
Endpoint: PATCH /chack-out/update-cart-quentity
Description: Update the quantity of a cart item.

</br>
Payment API
Payment Information

Endpoint: POST /payment-info/payment
Description: Process a payment.