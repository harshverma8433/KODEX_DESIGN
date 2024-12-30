import "./HeroPage.css";

function HeroPage() {
  return (

    <div className=" h-[550px]">
    <div className="relative flex flex-col lg:flex-row  mb-8">
      <div className="md:flex md:flex-row lg:w-full flex flex-col-reverse">
        <div className="container mx-auto md:flex flex-col lg:flex-row text-white pt-20 pb-12 px-4 lg:px-8">
          {/* Text Section */}
          <div className="flex-1 lg:w-2/3 mb-8 lg:mb-0">
            <div className="px-3">
              <h1 className="text-2xl  lg:text-4xl font-bold text-left leading-tight">
                The Ultimate Platform For Advanced Software
              </h1>
              <h1 className="text-2xl lg:text-4xl font-bold text-left leading-tight">
                Solutions And Professional
              </h1>
              <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 text-left leading-tight">
                Development
              </h1>
              <p className="text-base lg:text-lg mb-4 lg:mb-6 text-left lg:w-3/4">
                Discover the future of technology with our innovative software
                solutions and top-tier technical training. We bridge the gap
                between industry needs and professional growth, ensuring success
                for businesses and students alike.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
              <button className="bg-indigo-950 text-white font-bold py-3 md:w-[40%] px-8 lg:py-2 lg:px-14 rounded-full text-base lg:text-xl">
                TRAININGS
              </button>
              <button className="bg-black outline outline-1 text-white font-bold md:w-[40%] py-2 px-8 lg:py-2 lg:px-14  rounded-full text-base lg:text-xl">
                SERVICES
              </button>
            </div>
          </div>
          {/* Image Section */}
        </div>

        <div className="rounded-2xl  py-36  mt-20 px-4 md:h-[55%] md:px-0 md:py-40 lg:py-52 xl:py-48  md:w-[500px]   cursor-pointer" id="gradient-color">
          
          
        </div>

      </div>

    </div>
      <div className="bg-grad-homepage relative left-[1200px]  bottom-60 "></div>

    </div>
  );
}

export default HeroPage;
