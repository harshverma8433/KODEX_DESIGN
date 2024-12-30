const Footer = () => {
  return (
    <footer className="bg-black text-white  px-4">
      <div className="container mx-auto">
        {/* "VISIT US" Section */}
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl">VISIT US</h2>
        </div>

        {/* Social Media Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-12 justify-center">
          {[
            {
              url: "https://twitter.com/kodeVortex",
              name: "Twitter",
              icon: "/public/cropped-image_3.svg",
            },
            {
              url: "https://www.instagram.com/kodevortex",
              name: "Instagram",
              icon: "/public/cropped-image_2.svg",
            },
            {
              url: "https://www.youtube.com/channel/UCXXXXXX",
              name: "YouTube",
              icon: "/public/cropped-image_1.svg",
            },
            {
              url: "https://www.linkedin.com/company/kodevortex",
              name: "LinkedIn",
              icon: "/public/cropped-image_4.svg",
            },
          ].map((social, index) => (
            <div className="text-center" key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-16 h-16 sm:w-24 sm:h-24 mx-auto"
                />
              </a>
              <p className="mt-2">@kodeVortex</p>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-center sm:justify-between gap-8 text-center sm:text-left">
          {/* Logo Section */}
          <div className="w-full sm:w-auto flex justify-center mb-9">
            <img
              src="/public/Logo2_2.png"
              alt="KodeVortex"
              className="sm:w-22 sm:h-20"
            />
          </div>

          {/* KVTech Section */}
          <div className="flex flex-col space-y-2 text-center sm:text-left">
            <h3 className="font-bold text-xl">KVTech</h3>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/trainings">Trainings</a>
            <a href="/services">Services</a>
          </div>

          {/* Services Section */}
          <div className="flex flex-col space-y-2 text-center sm:text-left">
            <h3 className="font-bold text-xl">Services</h3>
            <a href="/software">Software</a>
            <a href="/corporate">Corporate</a>
            <a href="/college">College</a>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-2 text-center sm:text-left">
            <h3 className="font-bold text-xl">Contact</h3>
            <a href="mailto:info@kodevortex.com">Email</a>
            <a href="https://www.linkedin.com/company/kodevortex">LinkedIn</a>
            <a href="https://www.instagram.com/kodevortex">Instagram</a>
            <a href="https://twitter.com/kodeVortex">Twitter (X)</a>
          </div>

          {/* Join Us Section */}
          <div className="flex flex-col space-y-4 text-center sm:text-left">
            <h3 className="font-bold text-xl">Join Us Here</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="py-2 px-4 pr-32 text-white bg-gray-800 border border-gray-700 rounded-full w-full"
              />
              <button className="absolute right-0 top-0 bg-gray-600 py-2 px-4 rounded-r-full text-white font-bold">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-12 border-t border-gray-700 pt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <img
              src="/public/Logo2_2.png"
              alt="KodeVortex"
              className="sm:w-22 sm:h-20"
            />
            <span>© 2024 KodeVortex</span>
            <div className="flex items-center space-x-2">
              <img
                src="/public/SSL.jpg"
                alt="Secured with SSL"
                className="w-6 h-6"
              />
              <span>Secured with SSL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
