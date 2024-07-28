
import Banner from "./Banner/Banner";
import CatagoryTable from "./CatagoryTable/CatagoryTable";
import Gallary from "./Gallary/Gallary";
// import Product from "./Product/Product";
import Products from "./Products/Products";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
 
  return (
    <div className="">
      <Banner />
      <CatagoryTable />
      <Products/>
      <Gallary />
      <Testimonial />
      {/* <Product /> */}
      
    </div>
  );
};

export default Home;
