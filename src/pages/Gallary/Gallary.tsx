import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imgOne from "../../assets/imgOne.jpg";
import imgTwo from "../../assets/imgTwo.jpg";
import imgThree from "../../assets/imgThree.jpg";
import imgFour from "../../assets/imgFour.jpg";
import imgFive from "../../assets/imgFive.jpg";
import imgSix from "../../assets/imgSix.jpg";
const Gallary = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="sm:px-6 lg:px-20 mt-20 md:mt-28 ">
      <div className="flex justify-start items-center mb-10 gap-1 lg:text-2xl font-semibold text-gray-700 ">
        <span>View Our  </span>{" "}
        <span className="text-[#6ABE4C] flex justify-center items-center gap-4">
          <span>Picture Showcase</span>{" "}
          <span>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
          <span></span>
        </span>
      </div>

      <div className="overflow-hidden">
        <div className="grid grid-cols-5  mx-auto gap-1">
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={imgOne}
            alt="hotel_image1"
            width={500}
            height={50}
            className="row-span-3 h-full hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"
          />
          <img
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={imgTwo}
            alt="hotel_image2"
            width={500}
            height={500}
            className="h-full  hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={imgThree}
            alt="hotel_image3"
            width={1900}
            height={700}
            className="col-span-2 h-full  hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={imgFour}
            alt="hotel_image4"
            width={500}
            height={500}
            className="hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"
          />
          <img
            data-aos="flip-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="700"
            src={imgFive}
            alt="hotel_image5"
            width={1900}
            height={900}
            className="col-span-2 h-full hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"
          />
          <img
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
            src={imgSix}
            alt="hotel_image6"
            width={1900}
            height={700}
            className="col-span-2 h-full hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
