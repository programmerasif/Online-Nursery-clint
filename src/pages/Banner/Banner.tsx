import banner from "../../assets/bannerTwo.png";
const Banner = () => {
  return (
    <div>
      <div className="w-full bg-gray-50 min-h-[35vh] sm:min-h-[45vh] md:min-h-[55vh] lg:min-h-[65vh] xl:min-h-[75vh] 2xl:min-h-[85vh]  text-center mt-20 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center  relative top-0 ">
      <div className="w-full bg-gradient-to-tl from-[#eff8ec] to-[#b1dda19d] rounded-br-[120px] rounded-tl-[120px] lg:rounded-tl-[0px] flex justify-start items-center p-10 lg:p-0">
        <div className="md:ps-[40px] lg:ps-[80px] flex justify-normal  flex-col pt-3">
          <h5 className=" md:text-[38px] lg:text-[42px] xl:text-[52px] font-semibold text-start text-[#262626e5] leading-tight ">
            Transform Your Home with{" "}
            <span className="text-[#59a83d]">Green</span> and Experience
            Enhanced Well-Being!
          </h5>
          <p className="text-start lg:text-[18px] mt-4 text-[#595959] text-[12px]">
            Discover our range of beautiful, easy-to-care-for plants that purify
            the air and enhance your home’s aesthetic. Create a serene, green
            sanctuary withUrban Oasis Nursery.
          </p>
          <button className="bg-[#6ABE4C] px-[20px] py-[10px] rounded-md max-w-32 mt-4 text-white font-semibold">
            Get Start
          </button>
        </div>
      </div>
      <div className="md:w-[80%] mx-auto  lg:w-full flex justify-center items-center pt-3 px-5 lg:px-0">
        <img src={banner} alt="" className="max-h-[60vh] lg:max-h-full " />
      </div>
    </div>
    </div>
  );
};

export default Banner;
