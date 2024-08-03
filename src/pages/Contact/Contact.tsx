
import { useForm, SubmitHandler } from "react-hook-form"
import img from '@/assets/contact.png'


interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  }

const Contact = () => {
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  
    return (
        <div className="min-h-[60vh] flex justify-center items-center sm:px-10 md:px-20 mt-20">
  <div className="flex flex-col-reverse sm:flex-row justify-center items-center w-full  mx-auto p-6 space-y-4 sm:space-y-0 sm:space-x-6  rounded-lg">
    <div className="w-full sm:w-1/2">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <input
              {...register("firstName")}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input
              {...register("lastName")}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              {...register("email")}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <input
              {...register("phone")}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea
            {...register("message")}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Message"
            
          ></textarea>
        </div>
        <div className="flex items-center justify-between w-full">
          <button
            type="submit"
            className="bg-[#7bc262] hover:bg-[#5da841] duration-300 w-full text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div className="w-full sm:w-1/2 flex justify-center items-center">
      
      <img src={img} alt="Contact Us" className="w-full h-full  sm:max-h-[500px] object-contain" />
    </div>
  </div>
</div>

      
    )
  }
export default Contact;