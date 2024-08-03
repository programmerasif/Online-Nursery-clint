const LoadingComponent = () => {
  return (
    <div className=" absolute w-full h-full rounded-md flex justify-center items-center">
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#6ABE4C] border-t-transparent"></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
