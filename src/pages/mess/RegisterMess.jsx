import React, { useState } from 'react';

const RegisterMess = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    userType: 'User' // Default user type
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Register for Space Venture</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* User Type (Dropdown or Radio Buttons) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="userType">Register As</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="User">User</option>
            <option value="Multi Mess Manager">Multi Mess Manager</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterMess;
