/* eslint-disable react/no-unescaped-entities */
import { send } from 'emailjs-com';
import React, { useState } from 'react';

import { AppConfig } from '../utils/AppConfig';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [showSplash, setShowSplash] = useState(false); // State to manage splash visibility

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send email using EmailJS
      await send(
        AppConfig.email_service_id,
        AppConfig.email_template_id,
        formData,
        AppConfig.email_user_id,
      );

      // Show splash message
      setShowSplash(true);

      // Reset form data after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
        setShowSplash(false); // Hide splash message
      }, 3000); // 3000 milliseconds (3 seconds)
    } catch (error) {
      console.error('Email sending failed:', error);
    }
  };

  return (
    <div className="mx-auto mt-20 max-w-screen-lg rounded-md bg-red-500 px-4 py-8">
      <h2 className="mb-4 text-2xl font-semibold text-black">
        Contact Us At : {AppConfig.enquiry_number}
      </h2>
      <h3 className="mb-4 text-2xl font-semibold text-black">
        Or write to us, and we'll get back to you in an hour :)
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-black">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md bg-white px-3 py-2 text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-black">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md bg-white px-3 py-2 text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="mb-2 block text-black">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full rounded-md bg-white px-3 py-2 text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="mb-2 block text-black">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md bg-white px-3 py-2 text-gray-800"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-yellow-300 px-4 py-2 font-semibold text-black"
        >
          Submit
        </button>
      </form>
      {showSplash && (
        <div className="mt-4 rounded-md bg-green-500 px-4 py-2 text-black">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
