import React, { useState } from 'react';
import axios from 'axios';
import subs from '../Assets/Subscription.png';

function EnergyForm() {
  const [companyName, setCompanyName] = useState('');
  const [energyType, setEnergyType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pricing, setPricing] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [subscription, setSubscription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/sell`, {
        companyName,
        energyType,
        quantity,
        pricing,
        location,
        subscription,
        password
      });
      console.log(response.data);
      // Clear form fields after successful submission
      setCompanyName('');
      setEnergyType('');
      setQuantity('');
      setPricing('');
      setLocation('');
      setPassword('');
      setSubscription('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="md:flex justify-center items-center h-screen font-fam-bold">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg mt-14">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-500">Energy Information Form</h1>
        <div className='mx-auto md:flex md:gap-10'>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">Company Name</label>
            <input type="text" id="companyName" className="form-input border border-gray-400" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="energyType" className="block text-gray-700 font-bold mb-2">Type of Energy</label>
            <select id="energyType" className="form-select border border-gray-400" value={energyType} onChange={(e) => setEnergyType(e.target.value)} required>
              <option value="">Select Energy Type</option>
              <option value="Hydro">Hydro</option>
              <option value="Geothermal">Geothermal</option>
              <option value="Solar">Solar</option>
              <option value="Biomass">Biomass</option>
              <option value="Wind">Wind</option>
            </select>
          </div>
        </div>
        <div className='mx-auto md:flex md:gap-10'>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Quantity Available</label>
            <input type="number" id="quantity" className="form-input border border-gray-400 rounded" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="pricing" className="block text-gray-700 font-bold mb-2">Pricing</label>
            <input type="text" id="pricing" className="form-input border border-gray-400" value={pricing} onChange={(e) => setPricing(e.target.value)} required />
          </div>
        </div>
        <div className='mx-auto md:flex md:gap-10'>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
            <input type="text" id="location" className="form-input border border-gray-400" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="subscription" className="block text-gray-700 font-bold mb-2">Subscription</label>
            <select id="subscription" className="form-select border border-gray-400" value={subscription} onChange={(e) => setSubscription(e.target.value)} required>
              <option value="">Select Subscription</option>
              <option value="Silver">Gold</option>
              <option value="Gold">Platinum</option>
              <option value="Premium">Diamond</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" id="password" className="form-input border border-gray-400" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </div>
      </form>
      <div className='mt-[-65px] hidden md:block'>
        <img src={subs} alt="" />
      </div>
    </div>
  );
}

export default EnergyForm;