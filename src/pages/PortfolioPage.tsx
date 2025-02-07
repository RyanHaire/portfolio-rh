

const PortfolioPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#AF5C5B] text-white py-24">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-semibold mb-4">My Portfolio</h1>
          <p className="text-lg mb-12">
            Check out some of the websites I’ve built for my clients. From eCommerce to creative platforms, I can help you bring your idea to life.
          </p>
        </div>
      </section>

      {/* Portfolio Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* GameStopGo Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400?text=GameStopGo+Screenshot"
                alt="GamesToGo Screenshot"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">GamesToGo.ca</h3>
                <p className="text-gray-600 mb-4">
                  A user-friendly birthday party service website for gaming products, offering an easy-to-navigate interface.
                </p>
                <p className="text-sm text-gray-500">Click below to view the full website design and features.</p>
              </div>
            </div>

            {/* IdeaClub Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400?text=IdeaClub+Screenshot"
                alt="IdeaClub Screenshot"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">IdeaClub.online</h3>
                <p className="text-gray-600 mb-4">
                  An innovative platform for brainstorming and collaborating on ideas, featuring interactive tools and modern design.
                </p>
                <p className="text-sm text-gray-500">Click below to view the full website design and features.</p>
              </div>
            </div>

            {/* Add more projects here */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400?text=Project+3+Screenshot"
                alt="Project 3 Screenshot"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project 3</h3>
                <p className="text-gray-600 mb-4">
                  A description of a project that you have worked on. Include what makes this project unique and why you are proud of it.
                </p>
                <p className="text-sm text-gray-500">Click below to view the full website design and features.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#AF5C5B] text-white py-24">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-4">Interested in Working Together?</h2>
          <p className="text-lg mb-6">
            Let's discuss how I can bring your vision to life. Get in touch today!
          </p>
          <a
            href="#contact"
            className="bg-[#6C63FF] text-white py-3 px-8 rounded-lg font-bold hover:bg-[#AF5C5B] transition-all"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
