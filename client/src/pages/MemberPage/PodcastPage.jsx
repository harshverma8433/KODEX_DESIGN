import video from "../../Contents/PodCastPageContent";

const PodcastPage = () => {
  return (
    <div className="h-auto px-4 sm:px-8">
      <h1 className="text-white text-3xl text-center py-8 tracking-wide font-sans">
        Podcast
      </h1>
      <div className="space-y-10">
        {video.map((element, index) => (
          <div key={index} className="text-white">
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 justify-center">
              <iframe
                className="rounded-3xl border border-gray-800"
                width="200"
                height="200"
                src={element.videourl}
                title={`YouTube video player ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="w-full md:w-[50%] text-center md:text-left px-4 md:px-0">
                {element.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-grad-member relative md:right-80 md:bottom-80 mt-10"></div>
    </div>
  );
};

export default PodcastPage;
