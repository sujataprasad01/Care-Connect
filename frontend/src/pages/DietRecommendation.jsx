import React, { useState } from 'react';

const DietRecommendation = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    healthCondition: '',
  });

  const [recommendation, setRecommendation] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder: In a real app, send this to an AI/diet API
    const { age, weight, height, healthCondition } = formData;
    setRecommendation(
      `Based on your profile (${age} yrs, ${weight}kg, ${height}cm) and condition (${healthCondition || 'None'}), we recommend:
      - Balanced meals: Fruits, Vegetables, Whole grains.
      - Stay hydrated.
      - Limit sugar & fried foods.`
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 shadow rounded bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Get Your Diet Recommendation</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm">Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange}
            className="w-full border px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1 text-sm">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}
            className="w-full border px-3 py-2 rounded" required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block mb-1 text-sm">Height (cm)</label>
            <input type="number" name="height" value={formData.height} onChange={handleChange}
              className="w-full border px-3 py-2 rounded" required />
          </div>
          <div className="w-1/2">
            <label className="block mb-1 text-sm">Weight (kg)</label>
            <input type="number" name="weight" value={formData.weight} onChange={handleChange}
              className="w-full border px-3 py-2 rounded" required />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm">Health Conditions (if any)</label>
          <input type="text" name="healthCondition" value={formData.healthCondition} onChange={handleChange}
            className="w-full border px-3 py-2 rounded" placeholder="e.g., Diabetes, Thyroid" />
        </div>

        <button type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
          Generate Recommendation
        </button>
      </form>

      {recommendation && (
        <div className="mt-6 p-4 border rounded bg-gray-50 text-sm">
          <h3 className="font-semibold mb-2 text-gray-700">Your Personalized Diet Plan</h3>
          <p className="text-gray-600 whitespace-pre-line">{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default DietRecommendation;
