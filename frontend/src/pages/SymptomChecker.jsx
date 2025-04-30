import React, { useState } from 'react';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [results, setResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock condition detection logic (replace with real API/ML later)
    if (!symptoms.trim()) {
      setResults("Please enter symptoms to get recommendations.");
      return;
    }

    const mockConditions = {
      fever: "Possible conditions: Flu, COVID-19, Viral Infection",
      headache: "Possible conditions: Migraine, Tension Headache, Dehydration",
      cough: "Possible conditions: Common Cold, Bronchitis, Asthma",
      "": "Please enter symptoms.",
    };

    const matched = Object.entries(mockConditions).filter(([key]) =>
      symptoms.toLowerCase().includes(key)
    );

    const resultText = matched.length
      ? matched.map(([_, val]) => val).join('\n')
      : "No matching condition found. Please consult a doctor.";

    setResults(resultText);
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 shadow rounded bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Symptom Checker</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm">Enter your symptoms</label>
          <textarea
            rows="4"
            className="w-full border px-3 py-2 rounded resize-none"
            placeholder="e.g., fever, cough, headache..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
        >
          Check Possible Conditions
        </button>
      </form>

      {results && (
        <div className="mt-6 p-4 border rounded bg-gray-50 text-sm whitespace-pre-line">
          <h3 className="font-semibold mb-2 text-gray-700">Results:</h3>
          <p className="text-gray-600">{results}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
