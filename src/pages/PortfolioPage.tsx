import { Link } from 'react-router-dom';
import gamestogo from '../assets/gamestogo-ss.png'
import sati from '../assets/sati.today-ss.png'
import codingtutorials from '../assets/coding-tutorials-ryan-h-ss.png'
const PortfolioPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#AF5C5B] text-white py-24">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-semibold mb-4">My Portfolio</h1>
          <p className="text-lg mb-12">
            Check out some of the websites I’ve built.
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
                src={gamestogo}
                alt="GamesToGo Screenshot"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">GamesToGo.ca</h3>
                <p className="text-gray-600 mb-4">
                  A user-friendly birthday party service website for gaming, offering an easy-to-navigate interface.
                </p>
              </div>
            </div>

            {/* IdeaClub Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={sati}
                alt="Sati Today Screenshot"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sati.today</h3>
                <p className="text-gray-600 mb-4">
                 A marketing website for a mobile app called Sati. A clean and slick landing page with beta signup feature.
                </p>
                <Link to="https://sati.today">https://sati.today</Link>
              </div>
            </div>

            {/* IdeaClub Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={codingtutorials}
                alt="Coding Tutorials by Ryan Haire Screenshot"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coding Tutorials by Ryan Haire</h3>
                <p className="text-gray-600 mb-4">
                 A personal website for publishing coding tutorials for web apps to help coding newbies. 
                </p>
                <Link to="https://codingtutorials.ryanhaire.ca">https://codingtutorials.ryanhaire.ca</Link>
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
