
import NavBr from "../../pages/Nav/NavBr";
import Footer from "../../pages/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <NavBr />
      <div className="min-h-[60vh] ">
            <Outlet />
            </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
