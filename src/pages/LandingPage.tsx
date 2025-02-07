import one from '../assets/1.svg'
import two from '../assets/2.svg'
import three from '../assets/3.svg'
import ContactForm from '../components/ContactForm';

function LandingPage() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-[#AF5C5B] text-white py-24 text-center" id="hero">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Web Development That Elevates Your Business</h2>
          <p className="text-lg md:text-xl mb-8">We create stunning websites and provide continuous support to ensure your online presence thrives.</p>
          <a href="#contact" className="bg-[#6C63FF] font-bold text-white py-3 px-8 rounded-lg hover:bg-teal-600 transition-all">Get in Touch</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all">
              <img src={one} alt="New Website" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-4">New Website Development</h3>
              <p className="mb-4">Custom-built websites designed to reflect your brand and engage your audience.</p>
              <ul className="space-y-2 text-left text-sm">
                <li><span role="img" aria-label="checkmark">✅</span> Responsive Design</li>
                <li><span role="img" aria-label="checkmark">✅</span> SEO Optimization</li>
                <li><span role="img" aria-label="checkmark">✅</span> Custom Features & Integrations</li>
              </ul>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all">
              <img src={three} alt="Website Maintenance" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-4">Website Maintenance</h3>
              <p className="mb-4">Keep your website up to date with bug fixes, security updates, and content refreshes.</p>
              <ul className="space-y-2 text-left text-sm">
                <li><span role="img" aria-label="checkmark">✅</span> Content Updates</li>
                <li><span role="img" aria-label="checkmark">✅</span> Bug Fixes</li>
                <li><span role="img" aria-label="checkmark">✅</span> Performance Monitoring</li>
              </ul>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all">
              <img src={two} alt="Custom Requests" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-4">Custom Development</h3>
              <p className="mb-4">We can handle advanced features and custom requests to meet your unique business needs.</p>
              <ul className="space-y-2 text-left text-sm">
                <li><span role="img" aria-label="checkmark">✅</span> API Integrations</li>
                <li><span role="img" aria-label="checkmark">✅</span> Advanced E-commerce Features</li>
                <li><span role="img" aria-label="checkmark">✅</span> Custom Dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-[#AF5C5B]">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-semibold mb-12 text-white">Transparent Pricing</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Small Business Tier */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all">
        <h3 className="text-2xl font-semibold mb-4">Small Business Plan</h3>
        <p className="text-lg mb-4">Cost: <span className="text-teal-500">$1,500 CAD</span></p>
        <p className="text-lg mb-4">Maintenance: <span className="text-teal-500">$250 CAD/month</span></p>

        <h4 className="text-lg font-semibold mt-4 mb-2">What's Included:</h4>
        <ul className="space-y-2 text-left text-sm mb-4">
          <li><span role="img" aria-label="checkmark">✅</span> Custom Design</li>
          <li><span role="img" aria-label="checkmark">✅</span> SEO Optimization</li>
          <li><span role="img" aria-label="checkmark">✅</span> Responsive Design for All Devices</li>
          <li><span role="img" aria-label="checkmark">✅</span> Up to 5 Pages</li>
          <li><span role="img" aria-label="checkmark">✅</span> Contact Form Integration</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">What's Excluded:</h4>
        <ul className="space-y-2 text-left text-sm">
          <li><span role="img" aria-label="crossmark">❌</span> Advanced Features (e.g., E-commerce)</li>
          <li><span role="img" aria-label="crossmark">❌</span> Custom APIs</li>
          <li><span role="img" aria-label="crossmark">❌</span> Advanced Animations</li>
        </ul>
      </div>

      {/* Bigger Business Tier */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all">
        <h3 className="text-2xl font-semibold mb-4">Bigger Business Plan</h3>
        <p className="text-lg mb-4">Cost: <span className="text-teal-500">$4,500 CAD</span></p>
        <p className="text-lg mb-4">Maintenance: <span className="text-teal-500">$500 CAD/month</span></p>

        <h4 className="text-lg font-semibold mt-4 mb-2">What's Included:</h4>
        <ul className="space-y-2 text-left text-sm mb-4">
          <li><span role="img" aria-label="checkmark">✅</span> Custom Design & Branding</li>
          <li><span role="img" aria-label="checkmark">✅</span> Advanced SEO Optimization</li>
          <li><span role="img" aria-label="checkmark">✅</span> Fully Responsive Design for All Devices</li>
          <li><span role="img" aria-label="checkmark">✅</span> Unlimited Pages</li>
          <li><span role="img" aria-label="checkmark">✅</span> E-commerce Integration (Shopify, WooCommerce, etc.)</li>
          <li><span role="img" aria-label="checkmark">✅</span> Custom APIs</li>
          <li><span role="img" aria-label="checkmark">✅</span> Custom Animations</li>
          <li><span role="img" aria-label="checkmark">✅</span> Advanced Contact Form & Lead Generation</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">What's Excluded:</h4>
        <ul className="space-y-2 text-left text-sm">
          <li><span role="img" aria-label="crossmark">❌</span> Third-party Integrations (unless stated in scope)</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      <ContactForm/>

      {/* Footer */}
      <footer className="bg-[#AF5C5B] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Ryan Haire. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;