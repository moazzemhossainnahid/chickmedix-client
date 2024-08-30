import React, { useState } from 'react';
import axios from 'axios';

function DiseasePrediction() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Prediction result:', response.data);  // Debug output
      setPrediction(response.data);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Disease Prediction</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Upload Chicken Image:</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Predict
          </button>
        </form>

        {prediction && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
            <h2 className="text-xl font-semibold">Prediction Result:</h2>
            <p><strong>Predicted Class:</strong> {prediction.predicted_class}</p>
            <p><strong>Class Probabilities:</strong></p>
            <ul>
              {Object.entries(prediction.class_probabilities).map(([label, probability]) => (
                <li key={label}>{label}: {(probability * 100).toFixed(2)}%</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiseasePrediction;
