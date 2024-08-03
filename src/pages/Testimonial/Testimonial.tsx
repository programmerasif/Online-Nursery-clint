import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Testimonial = () => {
  const testimonials = [
    {
      comment:
        "I recently purchased a few fruit trees from this nursery, and I am beyond impressed! The trees arrived healthy and well-packaged, and they are thriving in my garden.The customer service was excellent, providing me with all the information I needed to care for my new trees. Highly recommended!",
      name: "Charles Dickens",
    },
    {
      comment:
        "This is my go-to place for all my gardening needs. The variety of trees available is incredible, and the quality is top-notch. I've bought several ornamental trees, and they have all added so much beauty to my landscape. The delivery was prompt, and the plants were in perfect condition.",
      name: "William Shakespeare",
    },
    {
      comment:
        "I had a fantastic experience with this tree nursery. The website was easy to navigate, and I found exactly what I was looking for. The trees were delivered quickly, and they were very healthy. The planting instructions provided were very helpful, and now I have a beautiful little orchard in my backyard.",
      name: "Edgar Allan Poe",
    },
    {
      comment:
        "I've been a customer for years, and the service has always been impeccable. The trees are always healthy, and the advice from the staff has been invaluable in helping my garden flourish.",
      name: "Jane Austen",
    },
    {
      comment:
        "I was impressed by the extensive selection and the quality of the trees. The detailed descriptions and planting guides on the website made it easy to choose the right trees for my garden.",
      name: "Herman Melville",
    },
  ];
  return (
    <div className="relative lg:mx-20 mt-[72px] md:mt-[104px] mb-20  mx-auto">
      <div className="flex justify-start items-center gap-1 lg:text-2xl font-semibold text-gray-700 absolute top-2">
        <span>View Our </span>{" "}
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

      <div className="h-[20rem] rounded-md flex flex-col antialiased">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Testimonial;
