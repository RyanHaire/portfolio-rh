import { FormEvent, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  // Handle form input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit form data to EmailJS
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .send(
        "service_my971mb", // Replace with your EmailJS Service ID
        "template_4td4kge", // Replace with your EmailJS Template ID
        formData,
        "UcNilg9GPbyEzacez" // Replace with your EmailJS User ID
      )
      .then(
        (response: any) => {
          console.log("Email sent successfully:", response);
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", business: "", email: "", message: "" });
        },
        (error: Error) => {
          console.error("Error sending email:", error);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-white text-[#AF5C5B] py-24">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-6">Let's Start Your Project</h2>
        <p className="text-lg mb-8 w-100 text-center">
          Reach out today to discuss your web development needs and how I can help you achieve your goals.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AF5C5B]"
            />
          </div>

          {/* Business Field */}
          <div className="flex flex-col">
            <label htmlFor="business" className="text-sm font-semibold mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="business"
              name="business"
              required
              value={formData.business}
              onChange={handleChange}
              placeholder="Enter your business name"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AF5C5B]"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AF5C5B]"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows={5}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AF5C5B]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#6C63FF] font-bold text-white py-3 px-8 rounded-lg hover:bg-[#AF5C5B] transition-all"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-6 text-lg font-semibold text-[#AF5C5B]">{statusMessage}</p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
