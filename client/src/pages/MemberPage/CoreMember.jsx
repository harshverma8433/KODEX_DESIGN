const CoreMember = () => {
  return (
    <div className="h-auto pt-8">
      <h1 className="text-white pt-12 pb-16 text-3xl text-center">
        Core Members
      </h1>
      <div className="flex flex-col space-y-16 justify-center">
        {/* First Member Section */}
        <div className="flex flex-col-reverse md:flex-row space-y-8 md:space-y-0 md:space-x-24 text-white items-center md:justify-center">
          <h1 className="w-full md:w-[50%] text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            beatae commodi impedit nulla qui mollitia, nobis eaque suscipit
            natus accusamus expedita placeat consequuntur nihil error sequi,
            aquam, tempore maxime! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Perferendis, rerum explicabo itaque fugit ab
            maiores optio doloribus laborum et repellendus magni porro facere
            corrupti aperiam quis doloremque amet! Necessitatibus, harum.
          </h1>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <div
              className="w-36 h-36 rounded-full bg-core-mem"
              style={{
                backgroundColor: "rgba(56, 53, 127, 1)",
                boxShadow: "0 0 40px 40px rgba(56, 53, 127, 0.5)",
                backdropFilter: "blur(8px)",
              }}
            ></div>
            <h1>Lorem</h1>
          </div>
        </div>

        {/* Second Member Section */}
        <div className="flex flex-col-reverse md:flex-row-reverse space-y-8 md:space-y-0 md:space-x-24 text-white items-center md:justify-center">
          <h1 className="w-full md:w-[50%] text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            beatae commodi impedit nulla qui mollitia, nobis eaque suscipit
            natus accusamus expedita placeat consequuntur nihil error sequi,
            aliquam, tempore maxime! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Perferendis, rerum explicabo itaque fugit ab
            maiores optio doloribus laborum et repellendus magni porro facere
            corrupti aperiam quis doloremque amet! Necessitatibus, harum.
          </h1>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <div
              className="w-36 h-36 rounded-full bg-core-mem"
              style={{
                backgroundColor: "rgba(56, 53, 127, 1)",
                boxShadow: "0 0 40px 40px rgba(56, 53, 127, 0.5)",
                backdropFilter: "blur(8px)",
              }}
            ></div>
            <h1>Lorem</h1>
          </div>
        </div>
      </div>
      <div className="w-full px-8 my-16">
        <hr className="bg-gray-400 w-full h-[0.1px]" />
      </div>

      <div className="bg-grad-member relative left-[50%] md:left-[1200px] top-[-600px]"></div>
    </div>
  );
};

export default CoreMember;
