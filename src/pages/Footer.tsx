import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className=" bg-[#cee6c6] min-h-[20vh] shadow-xl">
      <div className=" text-[#262626e5] flex justify-center items-center flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full lg:w-[80%] p-5 md:p-20">
          <div className="flex flex-col justify-between items-start">
          <NavLink to="/" className="flex justify-end flex-1 md:flex-none">
              <img src={logo} alt="" />
            </NavLink>
            <div className="font-semibold">Providing reliable Survice since 2010</div>
          </div>
    
          <div className="flex flex-col">
            <h5 className="text-xl font-semibold">Contact</h5>
            <div className="text-[#262626e5]">
              <p className="text-sm text-[#262626e5]">
                {` 102,Cox's Bazar, Dhaka, Banglaesh.`}
              </p>
              <h5 className="text-2xl font-semibold mt-5 flex justify-start gap-2 items-center">
                 <span>+880-1721520848</span>{" "}
              </h5>
              <p className="flex justify-st items-center gap-2 border-b-2 border-[#85b974] w-full md:w-[55%]">
                 <span>urban.oasis.nursery@gmail.com </span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#262626e5] border-t-2 border-gray-100 w-full  md:w-[80%] text-sm py-5 text-center sm:text-start">
          Copyright © 2024 - All right reserved by Asif Khan
        </div>
      </div>
    </div>
  );
};

export default Footer;
