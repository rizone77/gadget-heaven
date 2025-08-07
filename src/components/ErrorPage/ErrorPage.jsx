import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-gradient-to-br py-40 rounded-xl from-purple-600 via-purple-700 to-purple-800 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg text-center">
        <h1 className="text-8xl font-extrabold text-purple-700 mb-6">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
