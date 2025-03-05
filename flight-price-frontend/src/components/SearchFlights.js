import { useState } from 'react';
import axios from 'axios';

const SearchFlights = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [flights, setFlights] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchFlights = async () => {
    if (!source || !destination) {
      setError('Please enter both source and destination.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`http://localhost:3000/flights?source=${source}&destination=${destination}`);
      setFlights(response.data);
    } catch (err) {
      setError('Failed to fetch flight data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Flight Price Checker</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Source (e.g., Delhi)"
            className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <input
            type="text"
            placeholder="Destination (e.g., Jaipur)"
            className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button
            onClick={searchFlights}
            disabled={loading}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Searching...' : 'Search Flights'}
          </button>
        </div>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>

      {Object.keys(flights).length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl text-black font-semibold mb-4">Flight Prices</h2>
          <div className="space-y-3 text-black">
            {Object.entries(flights).map(([airline, price]) => (
              <div key={airline} className="flex justify-between p-3 bg-gray-50 rounded">
                <span className="font-medium">{airline}</span>
                <span>{price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFlights;