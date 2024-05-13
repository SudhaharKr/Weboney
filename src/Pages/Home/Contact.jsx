import { useState } from "react";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  window.scrollTo(0, 0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can send form data to a server or API here
  };
  return (
    <div className="flex">
      <div className="pl-20 w-[600px] h-[100vh] pt-20">
        <h1 className="font-barlow text-[28px] font-[500] w-[440px]">
          Please contact us for a free quotation and tell us more about your
          project
        </h1>
        <hr className="w-[50px] h-1 bg-[#FFE665] mt-3"></hr>
        <p className="pt-8 font-roboto text-[16px] w-[450px] text-black/50">
          Thank you for your interest in requesting a work estimate, please fill
          out the form and we will get back to you shortly.
        </p>
        <div className="pt-20">
          <h1 className="flex items-center gap-2 font-barlow text-[22px] font-[600] text-[#292F42]">
            <FaPhone />
            +91 96888 85330
          </h1>
          <p className="w-[460px] pt-3">
            Tell us a bit about your project and we will match you with the
            perfect local contractor for FREE.
          </p>
        </div>
      </div>

      <div className="ml-auto grid grid-cols-2 gap-4 justify-center items-center mr-20">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-[300px]"
              required
            />
          </div>
        </form>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-[300px]"
              required
            />
          </div>
        </form>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
          <div className="mb-32">
            <input
              type="email"
              placeholder="Your Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-[300px]"
              required
            />
          </div>
        </form>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
          <div className="mb-32">
            <input
              type="text"
              placeholder="Your Address"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-[300px]"
              required
            />
          </div>
        </form>
        <div className="mb-36">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="border border-gray-300 rounded-md px-3 py-2 w-[680px] -mt-20 ml-6"
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="font-roboto text-[16px] mr-6 border-2 mt-6 border-[#FFE665] bg-transparent text-[#000] font-bold h-12 px-8 rounded-[4px] transition-colors duration-300 ease-in-out hover:bg-[#FFE665] hover:text-[#292F42]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
