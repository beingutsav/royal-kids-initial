import { send } from 'emailjs-com';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

const EventForm: React.FC = () => {
  const [formData, setFormData] = useState({
    category: '',
    motherName: '',
    location: '',
    phoneNumber: '',
    email: '',
  });
  const [showSplash, setShowSplash] = useState(false);
  const [motherNameError, setMotherNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate motherName and phoneNumber fields
    if (!formData.motherName) {
      setMotherNameError(true);
      return;
    }
    if (!formData.phoneNumber) {
      setPhoneNumberError(true);
      return;
    }

    try {
      await send(
        AppConfig.email_service_id,
        AppConfig.email_template_id_event,
        formData,
        AppConfig.email_user_id,
      );
      setShowSplash(true); // Show splash message
      setFormData({
        category: '',
        motherName: '',
        location: '',
        phoneNumber: '',
        email: '',
      });
      setMotherNameError(false); // Reset error states
      setPhoneNumberError(false);
    } catch (error) {
      console.error('Email sending failed:', error);
    }
  };

  return (
    <div className="bg-red-500 py-8">
      <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* First Column with Image */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <img
              src="/motherday.jpeg"
              alt="Event Poster"
              className="h-auto w-full"
            />
          </div>
          {/* Second Column with Form */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="mb-4 text-3xl font-bold text-yellow-400">
              Event Registration
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="category" className="block text-yellow-400">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-yellow-400 focus:outline-none"
                >
                  <option value="">Select category</option>
                  <option value="dance">Dance</option>
                  <option value="momAndMe">Mom & Me</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="motherName" className="block text-yellow-400">
                  Mother&apos;s Name *
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-yellow-400 focus:outline-none ${
                    motherNameError ? 'border-red-500' : ''
                  }`}
                />
                {motherNameError && (
                  <p className="mt-1 text-black">
                    *Error - Mother&apos;s name is required
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-yellow-400">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-yellow-400 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-yellow-400">
                  Phone Number *
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-yellow-400 focus:outline-none ${
                    phoneNumberError ? 'border-red-500' : ''
                  }`}
                />
                {phoneNumberError && (
                  <p className="mt-1 text-black">
                    * Error : Phone number is required
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-yellow-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-yellow-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-yellow-400 px-4 py-2 text-red-500 transition duration-300 hover:bg-yellow-500"
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
        </div>
      </div>
    </div>
  );
};

export default EventForm;
