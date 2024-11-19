import  { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Mock API POST request
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        console.error("Error submitting form.");
      }
    } catch (error) {
      console.error("API error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-main text-white pt-20">
      {/* Header Section */}
      <header className="py-8 bg-gray-800 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-400 mt-2">We'd love to hear from you!</p>
      </header>

      {/* Contact Section */}
      <div className="container mx-auto pb-6 py-12 lg:py-20">
        <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 lg:p-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
            <p className="text-gray-500">
              Fill in the form below, and we’ll get back to you shortly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-3 ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-3 ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-lg p-3 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="johndoe@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border rounded-lg p-3 h-32 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                className={`bg-main text-white px-6 py-3 rounded-lg font-semibold ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            {/* Success Message */}
            {success && (
              <p className="mt-4 text-green-500 text-center">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>

        {/* Company Information */}
        <div className="mt-12 bg-gray-800 text-gray-400 p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold text-white">Our Company</h2>
          <p className="mt-2">Email: contact@mgpro.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
