// ContactForm.tsx
import React, { useState } from 'react';

import { Button } from '../button/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="mx-auto mt-20 max-w-screen-lg rounded-md bg-red-500 px-4 py-8">
      <h2 className="mb-4 text-2xl font-semibold text-white">
        Contact Us : 9212187475
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-white">
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
          <label htmlFor="email" className="mb-2 block text-white">
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
          <label htmlFor="phoneNumber" className="mb-2 block text-white">
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
          <label htmlFor="message" className="mb-2 block text-white">
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
        <Button xl formId="contact-form-section">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
